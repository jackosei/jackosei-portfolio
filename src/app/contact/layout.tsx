import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Jack Osei - Get Started on Your Project',
  description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Based in Dubai, UAE and serving Ghana and worldwide.',
  keywords: ['contact web developer', 'startup web development', 'Dubai web developer', 'Ghana web developer', 'African web developer', 'free strategy call', 'web development quote', 'startup tech partner'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Jack Osei - Get Started on Your Project',
    description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Based in Dubai, UAE and serving Ghana and worldwide.',
    url: 'https://jackosei.com/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Jack Osei - Get Started on Your Project',
    description: 'Ready to build your conversion-focused website? Contact Jack Osei for a free strategy call, quick quote, or detailed project discussion. Based in Dubai, UAE and serving Ghana and worldwide.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
