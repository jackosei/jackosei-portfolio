import 'server-only'

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error('CONTENTFUL_SPACE_ID is required');
}

if (!process.env.CONTENTFUL_DELIVERY_TOKEN) {
  throw new Error('CONTENTFUL_DELIVERY_TOKEN is required');
}

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const ENVIRONMENT = process.env.CONTENTFUL_ENVIRONMENT || 'master';

const CONTENTFUL_API_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`;

interface ContentfulResponse<T> {
  items: T[];
  includes?: {
    Asset?: Array<{
      sys: { id: string };
      fields: {
        title?: string;
        file?: {
          url: string;
          details?: {
            image?: {
              width?: number;
              height?: number;
            };
          };
        };
      };
    }>;
  };
}

export interface JournalEntry {
  sys: { id: string };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    coverImage?: {
      sys: { id: string };
    };
    publishedDate: string;
    tags: string[];
    content: any;
    metaTitle?: string;
    metaDescription?: string;
    metaKeywords?: string[];
    ogImage?: {
      sys: { id: string };
    };
    ogTitle?: string;
    ogDescription?: string;
    canonicalUrl?: string;
    author?: string;
    readingTime?: number;
    featured?: boolean;
    category?: string;
    coverImageUrl?: string | null;
    cta?: any; 
  };
}

async function contentfulFetch<T>(endpoint: string, params: Record<string, string | number> = {}): Promise<T> {
  const url = `${CONTENTFUL_API_URL}/entries${endpoint}`;
  
  const searchParams = new URLSearchParams({
    access_token: ACCESS_TOKEN,
    include: '2', // Include linked entries and assets
    ...params,
  });
  
  const fullUrl = `${url}?${searchParams.toString()}`;
  
  const response = await fetch(fullUrl, {
    next: { revalidate: 60 },
    headers: {
      'Accept': 'application/json',
    }
  });
  
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Contentful API Error:', {
      status: response.status,
      statusText: response.statusText,
      url: fullUrl,
      errorText,
    });
    throw new Error(`Contentful API error: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
}

function resolveAsset(entry: JournalEntry, includes?: ContentfulResponse<JournalEntry>['includes']): string | null {
  if (!entry.fields.coverImage || !includes?.Asset) return null;
  
  const assetId = entry.fields.coverImage.sys.id;
  const asset = includes.Asset.find(a => a.sys.id === assetId);
  
  if (!asset?.fields.file?.url) return null;
  
  return asset.fields.file.url.startsWith('http') 
    ? asset.fields.file.url 
    : `https:${asset.fields.file.url}`;
}

export async function getJournals(limit?: number): Promise<JournalEntry[]> {
  try {
    const data = await contentfulFetch<ContentfulResponse<JournalEntry>>('', {
      content_type: 'journal',
      order: '-fields.publishedDate',
      limit: limit || 100,
    });
    
    return data.items.map(entry => ({
      ...entry,
      fields: {
        ...entry.fields,
        coverImageUrl: resolveAsset(entry, data.includes),
      },
    }));
  } catch (error) {
    console.error('Error fetching journals:', error);
    return [];
  }
}

export async function getJournalBySlug(slug: string): Promise<JournalEntry | null> {
  try {
    const data = await contentfulFetch<ContentfulResponse<JournalEntry>>('', {
      content_type: 'journal',
      'fields.slug': slug,
      limit: 1,
    });
    
    if (!data.items[0]) return null;
    
    const entry = data.items[0];
    return {
      ...entry,
      fields: {
        ...entry.fields,
        coverImageUrl: resolveAsset(entry, data.includes),
      },
    };
  } catch (error) {
    console.error(`Error fetching journal with slug ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedJournals(limit: number = 3): Promise<JournalEntry[]> {
  try {
    const data = await contentfulFetch<ContentfulResponse<JournalEntry>>('', {
      content_type: 'journal',
      'fields.featured': 'true',
      order: '-fields.publishedDate',
      limit,
    });
    
    return data.items.map(entry => ({
      ...entry,
      fields: {
        ...entry.fields,
        coverImageUrl: resolveAsset(entry, data.includes),
      },
    }));
  } catch (error) {
    console.error('Error fetching featured journals:', error);
    return [];
  }
}

export async function getJournalsByCategory(category: string, limit?: number): Promise<JournalEntry[]> {
  try {
    const data = await contentfulFetch<ContentfulResponse<JournalEntry>>('', {
      content_type: 'journal',
      'fields.category': category,
      order: '-fields.publishedDate',
      limit: limit || 100,
    });
    
    return data.items.map(entry => ({
      ...entry,
      fields: {
        ...entry.fields,
        coverImageUrl: resolveAsset(entry, data.includes),
      },
    }));
  } catch (error) {
    console.error(`Error fetching journals for category ${category}:`, error);
    return [];
  }
}

export async function getJournalCategories(): Promise<string[]> {
  try {
    const data = await contentfulFetch<ContentfulResponse<JournalEntry>>('', {
      content_type: 'journal',
      select: 'fields.category',
      limit: 1000,
    });
    
    const categories = data.items
      .map(item => item.fields.category)
      .filter((category): category is string => Boolean(category));
    
    return Array.from(new Set(categories));
  } catch (error) {
    console.error('Error fetching journal categories:', error);
    return [];
  }
}
