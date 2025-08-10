import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy - Jack Osei Portfolio | Web Development Services',
  description: 'Comprehensive privacy policy for Jack Osei\'s web development services. Learn about our GDPR-compliant data practices, how we protect your information, and your rights. Based in Dubai, UAE serving Ghana and worldwide clients.',
  keywords: [
    'privacy policy',
    'data protection',
    'GDPR compliance',
    'web development privacy',
    'data security',
    'Dubai web developer',
    'Ghana web developer',
    'African web developer',
    'privacy terms',
    'data privacy',
    'personal information protection',
    'cookie policy',
    'data retention',
    'user rights',
    'international data transfers'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Legal',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Jack Osei Portfolio | Web Development Services',
    description: 'Comprehensive privacy policy for Jack Osei\'s web development services. Learn about our GDPR-compliant data practices, how we protect your information, and your rights.',
    url: 'https://jackosei.com/privacy',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - Jack Osei Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Jack Osei Portfolio | Web Development Services',
    description: 'Comprehensive privacy policy for Jack Osei\'s web development services. Learn about our GDPR-compliant data practices, how we protect your information, and your rights.',
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

export default function PrivacyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy",
    "description": "Comprehensive privacy policy for Jack Osei's web development services. Learn about our GDPR-compliant data practices, how we protect your information, and your rights.",
    "url": "https://jackosei.com/privacy",
    "mainEntity": {
      "@type": "Article",
      "name": "Privacy Policy",
      "description": "Privacy policy outlining data collection, usage, and protection practices for Jack Osei's web development services",
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
        "@id": "https://jackosei.com/privacy"
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
          "name": "Privacy Policy",
          "item": "https://jackosei.com/privacy"
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
              Privacy Policy
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
              <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
              <p>
                Jack Osei (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services.
              </p>
              <p className="mt-4">
                We are based in Dubai, UAE, and serve clients worldwide, including Ghana and other African countries. 
                We are committed to complying with applicable data protection laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3 text-foreground">2.1 Personal Information</h3>
              <p>
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and specifications</li>
                <li>Communication preferences</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-foreground mt-6">2.2 Automatically Collected Information</h3>
              <p>
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>Device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">3. How We Use Your Information</h2>
              <p>
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Providing and improving our web development services</li>
                <li>Communicating with you about projects and services</li>
                <li>Processing payments and managing accounts</li>
                <li>Sending newsletters and marketing communications (with consent)</li>
                <li>Analyzing website usage and improving user experience</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and security threats</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>Business Transfers:</strong> In connection with a business merger, acquisition, or sale</li>
                <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Secure hosting and infrastructure</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy, unless a longer retention period is required by law. 
                Typically, we retain:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Project-related information: 7 years (for legal and business purposes)</li>
                <li>Marketing communications: Until you unsubscribe or withdraw consent</li>
                <li>Website analytics: 2 years (anonymized)</li>
                <li>Payment information: As required by financial regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Your Rights and Choices</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">8. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience and 
                analyze website usage. You can control cookie settings through your browser preferences.
              </p>
              <p className="mt-4">
                <strong>Essential Cookies:</strong> Required for website functionality
                <br />
                <strong>Analytics Cookies:</strong> Help us understand how visitors use our site
                <br />
                <strong>Marketing Cookies:</strong> Used for targeted advertising (with consent)
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">9. International Data Transfers</h2>
              <p>
                As we serve clients worldwide, your information may be transferred to and processed in 
                countries other than your own. We ensure appropriate safeguards are in place for such 
                transfers, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Standard contractual clauses approved by data protection authorities</li>
                <li>Adequacy decisions for certain countries</li>
                <li>Other appropriate safeguards as required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Children&apos;s Privacy</h2>
              <p>
                Our services are not intended for children under 16 years of age. We do not knowingly 
                collect personal information from children under 16. If you believe we have collected 
                such information, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new policy on our website and updating the &ldquo;Last updated&rdquo; date. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">12. Contact Information</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-card/50 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> <a href="mailto:privacy@jackosei.com" className="text-accent-highlight hover:underline">privacy@jackosei.com</a></p>
                <p className="mb-2"><strong>Contact Form:</strong> <a href="/contact" className="text-accent-highlight hover:underline">Visit our contact page</a></p>
                <p><strong>Location:</strong> Dubai, United Arab Emirates</p>
              </div>
            </section>

            <div className="mt-12 p-6 bg-card/50 rounded-lg border">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Note:</strong> This privacy policy is designed to be transparent and compliant with 
                international data protection standards. We are committed to protecting your privacy and 
                will respond to all inquiries promptly.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
