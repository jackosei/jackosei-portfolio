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
  title: "Jack Osei - Founder's Tech Friend & Web Developer",
  description:
    "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide.",
  keywords: ['startup web developer', 'founder tech partner', 'conversion-focused websites', 'React developer', 'Next.js developer', 'Webflow developer', 'Shopify developer', 'Dubai web developer', 'Ghana web developer', 'African web developer'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Jack Osei - Founder's Tech Friend & Web Developer",
    description:
      "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide.",
    url: 'https://jackosei.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jack Osei - Founder's Tech Friend & Web Developer",
    description: "Professional creative developer building websites and designing brands that act as growth engines, working as hard as their founders do to attract users and drive revenue. Based in Dubai, UAE and serving Ghana and worldwide.",
  },
};

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
  );
}
