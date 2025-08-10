// Structured Data for SEO and Rich Snippets
export const generateStructuredData = (data: {
  type: 'website' | 'article' | 'service' | 'person'
  title: string
  description: string
  url: string
  image?: string
  publishedDate?: string
  author?: string
  serviceType?: string
}) => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': data.type,
    name: data.title,
    description: data.description,
    url: data.url,
    ...(data.image && { image: data.image }),
  }

  switch (data.type) {
    case 'website':
      return {
        ...baseData,
        '@type': 'WebSite',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://jackosei.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }

    case 'article':
      return {
        ...baseData,
        '@type': 'Article',
        headline: data.title,
        author: {
          '@type': 'Person',
          name: data.author || 'Jack Osei',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Jack Osei Portfolio',
          logo: {
            '@type': 'ImageObject',
            url: 'https://jackosei.com/JKO%20Light.svg',
          },
        },
        ...(data.publishedDate && { datePublished: data.publishedDate }),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data.url,
        },
      }

    case 'service':
      return {
        ...baseData,
        '@type': 'Service',
        serviceType: data.serviceType,
        provider: {
          '@type': 'Person',
          name: 'Jack Osei',
          jobTitle: 'Web Developer & Tech Partner',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Dubai',
            addressCountry: 'AE',
          },
          sameAs: [
            'https://linkedin.com/in/jackosei',
            'https://github.com/jackosei',
          ],
        },
        areaServed: [
          {
            '@type': 'Country',
            name: 'United Arab Emirates',
          },
          {
            '@type': 'Country',
            name: 'Ghana',
          },
          {
            '@type': 'Continent',
            name: 'Africa',
          },
        ],
      }

    case 'person':
      return {
        ...baseData,
        '@type': 'Person',
        jobTitle: 'Web Developer & Tech Partner',
        description: 'Founder\'s tech partner building conversion-focused websites',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressCountry: 'AE',
        },
        sameAs: [
          'https://linkedin.com/in/jackosei',
          'https://github.com/jackosei',
        ],
        knowsAbout: [
          'Web Development',
          'React',
          'Next.js',
          'E-commerce',
          'SEO',
          'Performance Optimization',
          'UI/UX Design',
        ],
        worksFor: {
          '@type': 'Organization',
          name: 'Jack Osei Portfolio',
        },
      }

    default:
      return baseData
  }
}

// Default website structured data
export const defaultWebsiteStructuredData = generateStructuredData({
  type: 'website',
  title: 'Jack Osei - Founder\'s Tech Friend & Web Developer',
  description: 'As a founder\'s tech partner, I build conversion-focused websites that act as growth engines, attracting users and driving revenue for startups. Based in Dubai, UAE and serving Ghana and worldwide.',
  url: 'https://jackosei.com',
  image: 'https://jackosei.com/og-image.png',
})

// Person structured data
export const personStructuredData = generateStructuredData({
  type: 'person',
  title: 'Jack Osei',
  description: 'Founder\'s tech partner building conversion-focused websites',
  url: 'https://jackosei.com',
  image: 'https://jackosei.com/og-image.png',
})
