import type { Metadata } from "next";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import SelectedWork from "@/components/selected-work";
import ProcessSection from "@/components/process-section";
import Testimonials from "@/components/testimonials";
import AboutSection from "@/components/about-section";
import StartupPainPoints from "@/components/startup-pain-points";
import ContactCTA from "@/components/contact-cta";
import Footer from "@/components/footer";
import GSAPInteractions from "@/components/gsap-interactions";

export const metadata: Metadata = {
  title: "Jack Osei - Founder's Tech Friend & Web Developer | Dubai & Ghana",
  description:
    "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide clients.",
  keywords: [
    'startup web developer',
    'founder tech partner',
    'conversion-focused websites',
    'React developer',
    'Next.js developer',
    'Webflow developer',
    'Shopify developer',
    'Dubai web developer',
    'Ghana web developer',
    'African web developer',
    'startup website development',
    'conversion optimization',
    'growth engine websites',
    'founder tech support',
    'startup tech partner',
    'web development Dubai',
    'web development Ghana',
    'startup growth',
    'brand design',
    'user acquisition'
  ],
  authors: [{ name: 'Jack Osei' }],
  creator: 'Jack Osei',
  publisher: 'Jack Osei Portfolio',
  category: 'Technology',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jack Osei - Founder's Tech Friend & Web Developer | Dubai & Ghana",
    description:
      "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide clients.",
    url: 'https://jackosei.com',
    type: 'website',
    siteName: 'Jack Osei Portfolio',
    locale: 'en_US',
    images: [
      {
        url: 'https://jackosei.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jack Osei - Founder\'s Tech Friend & Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jack Osei - Founder's Tech Friend & Web Developer | Dubai & Ghana",
    description: "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide clients.",
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

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Jack Osei - Founder's Tech Friend & Web Developer",
    "description": "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue.",
    "url": "https://jackosei.com",
    "mainEntity": {
      "@type": "Person",
      "name": "Jack Osei",
      "jobTitle": "Web Developer & Founder's Tech Friend",
      "description": "Professional creative developer building conversion-focused websites and growth engines for startups",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Jack Osei Portfolio"
      },
      "knowsAbout": [
        "Web Development",
        "React",
        "Next.js",
        "Webflow",
        "Shopify",
        "Startup Growth",
        "Conversion Optimization",
        "Brand Design"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jackosei.com"
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
      <GSAPInteractions />
      <header>
        <Navigation />
      </header>

      <div className="flex-grow">
        <HeroSection />
        <StartupPainPoints />
        <ServicesSection />
        <ProcessSection />
        <SelectedWork />
        <Testimonials />
        <AboutSection />
        <ContactCTA />
      </div>

      <Footer />
    </div>
  );
}
