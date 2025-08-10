import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service - Jack Osei Portfolio | Web Development Services',
  description: 'Comprehensive terms and conditions for using Jack Osei\'s web development services. Professional terms covering project delivery, intellectual property, payment terms, and service agreements. Based in Dubai, UAE serving Ghana and worldwide clients.',
  keywords: [
    'terms of service',
    'web development terms',
    'service agreement',
    'legal terms',
    'Dubai web developer',
    'Ghana web developer',
    'African web developer',
    'project terms',
    'web development contract',
    'service terms',
    'project agreement',
    'intellectual property',
    'payment terms',
    'project delivery',
    'web development services'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Legal',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - Jack Osei Portfolio | Web Development Services',
    description: 'Comprehensive terms and conditions for using Jack Osei\'s web development services. Professional terms covering project delivery, intellectual property, payment terms, and service agreements.',
    url: 'https://jackosei.com/terms',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Terms of Service - Jack Osei Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Jack Osei Portfolio | Web Development Services',
    description: 'Comprehensive terms and conditions for using Jack Osei\'s web development services. Professional terms covering project delivery, intellectual property, payment terms, and service agreements.',
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

export default function TermsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service",
    "description": "Comprehensive terms and conditions for using Jack Osei's web development services. Professional terms covering project delivery, intellectual property, payment terms, and service agreements.",
    "url": "https://jackosei.com/terms",
    "mainEntity": {
      "@type": "Article",
      "name": "Terms of Service",
      "description": "Terms and conditions outlining the use of Jack Osei's web development services, project terms, payment schedules, and legal agreements",
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
      "datePublished": "2024-01-01",
      "dateModified": new Date().toISOString().split('T')[0],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://jackosei.com/terms"
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
          "name": "Terms of Service",
          "item": "https://jackosei.com/terms"
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
      
      <main className="flex-1 !pt-32 sm:pt-20 pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent-highlight">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the services provided by Jack Osei ("we," "us," or "our"), 
                you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Services Description</h2>
              <p>
                We provide web development, design, and digital consulting services including but not limited to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Website design and development</li>
                <li>E-commerce solutions</li>
                <li>SEO optimization</li>
                <li>Performance optimization</li>
                <li>UI/UX design</li>
                <li>API integration</li>
                <li>Analytics and insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Project Terms</h2>
              <h3 className="text-xl font-medium mb-3 text-foreground">3.1 Project Initiation</h3>
              <p>
                Projects begin upon receipt of the agreed-upon deposit and signed project agreement. 
                Project timelines and deliverables will be outlined in the project proposal.
              </p>
              
              <h3 className="text-xl font-medium mb-3 text-foreground mt-6">3.2 Revisions and Changes</h3>
              <p>
                We include a reasonable number of revisions in our project scope. Additional revisions 
                may incur additional charges. Major scope changes require a new project agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Payment Terms</h2>
              <h3 className="text-xl font-medium mb-3 text-foreground">4.1 Payment Schedule</h3>
              <p>
                Payment terms vary by project size and complexity. Typically, we require:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>50% deposit to begin work</li>
                <li>25% at project milestone</li>
                <li>25% upon project completion</li>
              </ul>
              
              <h3 className="text-xl font-medium mb-3 text-foreground mt-6">4.2 Late Payments</h3>
              <p>
                Late payments may result in project delays and may incur additional charges. 
                We reserve the right to suspend work on overdue accounts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Intellectual Property</h2>
              <h3 className="text-xl font-medium mb-3 text-foreground">5.1 Client Ownership</h3>
              <p>
                Upon full payment, clients own the final deliverables including custom code, 
                designs, and content created specifically for their project.
              </p>
              
              <h3 className="text-xl font-medium mb-3 text-foreground mt-6">5.2 Portfolio Rights</h3>
              <p>
                We retain the right to showcase completed work in our portfolio and marketing materials, 
                unless otherwise agreed upon in writing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding client information, business strategies, 
                and project details. Non-disclosure agreements are available upon request.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Limitation of Liability</h2>
              <p>
                Our liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages arising from our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Termination</h2>
              <p>
                Either party may terminate a project with written notice. Upon termination, 
                clients are responsible for payment of work completed up to that point.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of the United Arab Emirates. Any disputes 
                will be resolved through good faith negotiation or mediation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Contact Information</h2>
              <p>
                For questions about these terms, please contact us at{' '}
                <a href="/contact" className="text-accent-highlight hover:underline">
                  our contact page
                </a>.
              </p>
            </section>

            <div className="mt-12 p-6 bg-card/50 rounded-lg border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> These terms are provided for informational purposes. 
                Specific project terms will be detailed in individual project agreements.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
