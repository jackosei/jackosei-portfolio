import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Albert_Sans } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const albertSans = Albert_Sans({ 
  subsets: ['latin'],
  variable: '--font-albert',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Jack Osei - Web Designer & Developer',
    template: '%s | Jack Osei'
  },
  description: 'Professional web designer and developer specializing in modern, responsive websites and web applications. Based in Ghana with expertise in React, Next.js, and modern web technologies.',
  keywords: ['web designer', 'web developer', 'React', 'Next.js', 'Ghana', 'portfolio', 'frontend developer'],
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
    title: 'Jack Osei - Web Designer & Developer',
    description: 'Professional web designer and developer specializing in modern, responsive websites and web applications.',
    url: 'https://jackosei.com',
    siteName: 'Jack Osei Portfolio',
    images: [
      {
        url: '/images/JKO Dark.svg',
        width: 1200,
        height: 630,
        alt: 'Jack Osei - Web Designer & Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Osei - Web Designer & Developer',
    description: 'Professional web designer and developer specializing in modern, responsive websites and web applications.',
    images: ['/images/JKO Dark.svg'],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
      </head>
      <body className={`${plusJakarta.variable} ${albertSans.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            {children}
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 