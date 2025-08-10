# Contentful Setup for Journals

## Environment Variables

Create a `.env.local` file in your project root with these variables:

```bash
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_DELIVERY_TOKEN=your_delivery_token_here
CONTENTFUL_ENVIRONMENT=master
```

## Getting Your Contentful Credentials

1. **Space ID**: Go to your Contentful space settings → General → Space ID
2. **Delivery Token**: Go to Settings → API keys → Create new API key → Copy the "Content Delivery API - access token"
3. **Environment**: Usually "master" unless you've created custom environments

## Content Model Setup

Create a content type with ID `journal` and these fields:

### Required Fields
- **title** (Text, Short text) - The journal post title
- **slug** (Text, Short text) - URL slug (e.g., "my-first-post")
- **excerpt** (Text, Long text) - Brief description/summary
- **coverImageUrl** (Text, Short text) - Featured image URL (external URL or Contentful asset URL)
- **publishedDate** (Date) - Publication date
- **tags** (Array, Short text) - Tags for categorization
- **content** (Rich Text) - Main content body

### SEO Fields (Optional)
- **metaTitle** (Text, Short text) - SEO title override
- **metaDescription** (Text, Long text) - SEO description
- **metaKeywords** (Array, Short text) - SEO keywords
- **ogImage** (Asset, Media) - Open Graph image
- **ogTitle** (Text, Short text) - Open Graph title
- **ogDescription** (Text, Long text) - Open Graph description
- **canonicalUrl** (Text, Short text) - Canonical URL

### Additional Fields (Optional)
- **author** (Text, Short text) - Author name
- **readingTime** (Number, Integer) - Estimated reading time in minutes
- **featured** (Boolean) - Mark as featured post
- **category** (Text, Short text) - Post category
- **cta** (Rich Text) - Call-to-action content displayed below the main content with gradient styling

> **Note**: The CTA field uses the same gradient background styling (`bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10`) as the contact component cards for visual consistency.

## Field Validation

- **slug**: Make it required and unique
- **publishedDate**: Set as required
- **tags**: Set minimum items to 1
- **content**: Set as required

## API Integration Details

The integration uses Contentful's Content Delivery API with the following configuration:

- **Base URL**: `https://cdn.contentful.com/spaces/{SPACE_ID}/environments/{ENVIRONMENT}`
- **Authentication**: Access token via `access_token` query parameter
- **Rate Limiting**: Built-in with Next.js revalidation (60 seconds)
- **Image Optimization**: Uses Next.js `Image` component for optimal performance

## Publishing

1. Create your journal entries in Contentful
2. Fill in all required fields
3. Publish the entries
4. Your Next.js app will automatically fetch and display them

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/journals` to see the archive page
3. Click on a journal entry to view the full post

## Troubleshooting

### Common Issues

- **No journals showing**: Check your environment variables and Contentful space ID
- **Images not loading**: Ensure your Contentful space has the correct CORS settings
- **Build errors**: Verify all required fields are filled in Contentful

### API Errors

- **404 Not Found**: 
  - Verify your Space ID and Environment are correct
  - Ensure the `journal` content type exists in Contentful
  - Check that your Delivery Token has access to the content
  - Verify the content is published (not just saved as draft)

- **Authentication Errors**:
  - Verify your Delivery Token is correct and not expired
  - Ensure the token has read access to your content

### Debug Steps

1. **Check Environment Variables**: Verify `.env.local` is in your project root
2. **Verify Content Type**: Ensure `journal` content type exists in Contentful
3. **Check Content Status**: Make sure entries are published, not just saved
4. **Test API Directly**: Use the Contentful web app to verify content exists

## Performance Features

- **Static Generation**: Uses `generateStaticParams` for build-time optimization
- **Image Optimization**: Next.js Image component with responsive sizing
- **Revalidation**: 60-second cache with automatic updates
- **SEO Ready**: Full meta tags, Open Graph, and structured data support

## Recent Fixes

- ✅ Fixed URL construction issues with Contentful API calls
- ✅ Resolved Next.js 15 async params compatibility
- ✅ Optimized images using Next.js Image component
- ✅ Enhanced error handling and logging
- ✅ Improved TypeScript type safety
