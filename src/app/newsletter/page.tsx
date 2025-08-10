import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Newsletter - Web Development Insights & Startup Growth | Jack Osei',
  description: 'Stay updated with the latest web development insights, startup growth strategies, and technical tips. Join our exclusive newsletter for industry updates, best practices, and expert advice. Based in Dubai, UAE serving Ghana and worldwide clients.',
  keywords: [
    'web development newsletter',
    'startup insights',
    'technical tips',
    'industry updates',
    'web development trends',
    'startup growth',
    'Dubai web developer',
    'Ghana web developer',
    'African web developer',
    'web development insights',
    'startup strategies',
    'technical advice',
    'industry trends',
    'best practices',
    'expert insights'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Technology',
  alternates: {
    canonical: '/newsletter',
  },
  openGraph: {
    title: 'Newsletter - Web Development Insights & Startup Growth | Jack Osei',
    description: 'Stay updated with the latest web development insights, startup growth strategies, and technical tips. Join our exclusive newsletter for industry updates, best practices, and expert advice.',
    url: 'https://jackosei.com/newsletter',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Newsletter - Web Development Insights | Jack Osei',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsletter - Web Development Insights & Startup Growth | Jack Osei',
    description: 'Stay updated with the latest web development insights, startup growth strategies, and technical tips. Join our exclusive newsletter for industry updates, best practices, and expert advice.',
    creator: '@jackosei',
    images: ['https://jackosei.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function NewsletterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Newsletter - Web Development Insights",
    "description": "Stay updated with the latest web development insights, startup growth strategies, and technical tips. Join our exclusive newsletter for industry updates, best practices, and expert advice.",
    "url": "https://jackosei.com/newsletter",
    "mainEntity": {
      "@type": "Newsletter",
      "name": "Web Development Insights Newsletter",
      "description": "Exclusive newsletter providing web development insights, startup growth strategies, and technical tips",
      "author": {
        "@type": "Person",
        "name": "Jack Osei",
        "jobTitle": "Web Developer",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE"
        }
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jack Osei Portfolio",
        "url": "https://jackosei.com"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jackosei.com/newsletter"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jackosei.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Newsletter",
          "item": "https://jackosei.com/newsletter"
        }
      ]
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navigation />
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-20 sm:pb-24 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-accent-highlight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent-highlight/5 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center">
          <header className="mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
              Newsletter
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Stay Updated with
              <br />
              <span className="gradient-text">Web Development Insights</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Get exclusive insights on startup growth, technical challenges, and web development best practices delivered to your inbox.
            </p>
          </header>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 sm:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              Our newsletter is currently in development. Sign up to be notified when we launch!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent"
              />
              <button className="px-6 py-3 bg-accent-highlight text-background font-semibold rounded-lg hover:bg-accent-highlight/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
