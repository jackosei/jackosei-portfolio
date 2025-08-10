import { Document } from '@contentful/rich-text-types';

export interface JournalFields {
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: {
    fields: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
  coverImageUrl?: string; // Alternative field for direct URL
  publishedDate: string; // ISO 8601 date string
  tags: string[];
  content: Document; // Contentful Rich Text
  
  // SEO Fields
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  ogImage?: {
    fields: {
      file: {
        url: string;
      };
      title?: string;
    };
  };
  ogTitle?: string;
  ogDescription?: string;
  canonicalUrl?: string;
  
  // Additional Content Fields
  author?: string;
  readingTime?: number; // in minutes
  featured?: boolean;
  category?: string;
  
  // Call-to-Action
  cta?: Document; // Rich Text field for call-to-action below content
}

export interface Journal {
  sys: {
    id: string;
  };
  fields: JournalFields;
}

// Legacy type for backward compatibility
export type JournalEntry = Journal;


