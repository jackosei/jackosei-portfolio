import type { Metadata } from 'next'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import SelectedWork from '@/components/selected-work'
import ProcessSection from '@/components/process-section'
import Testimonials from '@/components/testimonials'
import AboutSection from '@/components/about-section'
import StartupPainPoints from '@/components/startup-pain-points'
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
    <div className="flex flex-col min-h-screen bg-background text-foreground">
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
  )
} 