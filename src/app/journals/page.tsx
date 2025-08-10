import type { Metadata } from "next";
import { getJournals } from "@/lib/contentful";
import JournalCard from "@/components/journal-card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Web Development Journals & Insights | Startup Growth & Technical Tips",
  description:
    "Insights, notes, and lessons from building conversion-focused web experiences. Learn from real projects, technical challenges, and startup growth strategies. Expert web development content from Dubai-based developer serving Ghana and worldwide.",
  keywords: [
    'web development blog',
    'startup insights',
    'technical articles',
    'web development tips',
    'conversion optimization',
    'startup growth',
    'web development journals',
    'technical challenges',
    'startup strategies',
    'conversion-focused websites',
    'web development lessons',
    'product development',
    'design insights',
    'performance optimization',
    'indie founder',
    'Dubai web developer',
    'Ghana web developer'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Technology',
  alternates: { 
    canonical: "/journals" 
  },
  openGraph: {
    title: "Web Development Journals & Insights | Startup Growth & Technical Tips",
    description: "Insights, notes, and lessons from building conversion-focused web experiences. Learn from real projects, technical challenges, and startup growth strategies. Expert web development content from Dubai-based developer serving Ghana and worldwide.",
    url: 'https://jackosei.com/journals',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Journals & Insights | Jack Osei',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Development Journals & Insights | Startup Growth & Technical Tips",
    description: "Insights, notes, and lessons from building conversion-focused web experiences. Learn from real projects, technical challenges, and startup growth strategies. Expert web development content from Dubai-based developer serving Ghana and worldwide.",
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
};

export default async function JournalsPage() {
  const journals = await getJournals(24);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Web Development Journals & Insights",
    "description": "Insights, notes, and lessons from building conversion-focused web experiences. Learn from real projects, technical challenges, and startup growth strategies.",
    "url": "https://jackosei.com/journals",
    "mainEntity": {
      "@type": "Blog",
      "name": "Web Development Journals",
      "description": "Collection of web development insights, technical articles, and startup growth strategies",
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
        "@id": "https://jackosei.com/journals"
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
          "name": "Journals",
          "item": "https://jackosei.com/journals"
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
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-accent-highlight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent-highlight/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <header className="text-center mb-12 sm:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
              Journal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Ideas, experiments, and
              <br />
              <span className="gradient-text">things I am learning</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Short, useful reads on product, design, performance, and indie
              founder life.
            </p>
          </header>

          {journals.length === 0 ? (
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                No journal entries yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {journals.map((j) => (
                <JournalCard key={j.sys.id} journal={j} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
