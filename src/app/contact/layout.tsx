import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Jack Osei - Web Development Services | Free Strategy Call',
  description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Professional web development services based in Dubai, UAE serving Ghana and worldwide clients.',
  keywords: [
    'contact web developer',
    'startup web development',
    'Dubai web developer',
    'Ghana web developer',
    'African web developer',
    'free strategy call',
    'web development quote',
    'startup tech partner',
    'web development consultation',
    'project discussion',
    'website development services',
    'startup website',
    'conversion-focused website',
    'web development Dubai',
    'web development Ghana'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Business',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Jack Osei - Web Development Services | Free Strategy Call',
    description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Professional web development services based in Dubai, UAE serving Ghana and worldwide clients.',
    url: 'https://jackosei.com/contact',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Jack Osei - Web Development Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Jack Osei - Web Development Services | Free Strategy Call',
    description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Professional web development services based in Dubai, UAE serving Ghana and worldwide clients.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
