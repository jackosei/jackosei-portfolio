import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ClientCarousel from '@/components/client-carousel'
import ServicesSection from '@/components/services-section'
import SelectedWork from '@/components/selected-work'
import ProcessSection from '@/components/process-section'
import GallerySection from '@/components/gallery-section'
import Testimonials from '@/components/testimonials'
import AboutSection from '@/components/about-section'
import ContactCTA from '@/components/contact-cta'
import Footer from '@/components/footer'
import GSAPInteractions from '@/components/gsap-interactions'

export const metadata: Metadata = {
  title: 'Jack Osei - Web Designer & Developer',
  description: 'Professional web designer and developer specializing in modern, responsive websites and web applications. Based in Ghana with expertise in React, Next.js, and modern web technologies.',
  openGraph: {
    title: 'Jack Osei - Web Designer & Developer',
    description: 'Professional web designer and developer specializing in modern, responsive websites and web applications.',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GSAPInteractions />
      <Navigation />
      <HeroSection />
      <ClientCarousel />
      <ServicesSection />
      <SelectedWork />
      <ProcessSection />
      <GallerySection />
      <Testimonials />
      <AboutSection />
      <ContactCTA />
      <Footer />
    </div>
  )
} 