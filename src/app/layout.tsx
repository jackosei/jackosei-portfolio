import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Analytics } from "@vercel/analytics/next"
import { defaultWebsiteStructuredData, personStructuredData } from './structured-data'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jack Osei - Founder\'s Tech Friend & Web Developer',
    template: '%s | Jack Osei'
  },
  description: 'As a founder\'s tech partner, I build conversion-focused websites that act as growth engines, attracting users and driving revenue for startups. Based in Dubai, UAE and serving Ghana and worldwide.',
  keywords: ['startup web developer', 'founder tech partner', 'conversion-focused websites', 'React developer', 'Next.js developer', 'Webflow developer', 'Shopify developer', 'Dubai web developer', 'Ghana web developer', 'African web developer'],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jackosei.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/Favicon.ico',
    shortcut: '/Favicon.ico',
    apple: '/Favicon.ico',
  },
  openGraph: {
    title: 'Jack Osei - Founder\'s Tech Friend & Web Developer',
    description: 'I build conversion-focused websites for founders that turn visitors into customers. Based in Dubai, UAE and serving Ghana and worldwide.',
    url: 'https://jackosei.com',
    siteName: 'Jack Osei Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jack Osei - The Founder\'s Tech Friend',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Osei - Founder\'s Tech Friend & Web Developer',
    description: 'I build conversion-focused websites for founders that turn visitors into customers. Based in Dubai, UAE and serving Ghana and worldwide.',
    images: ['/og-image.png'],
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(defaultWebsiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
      </head>
      <body className={`${plusJakarta.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main>{children}</main>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
} 