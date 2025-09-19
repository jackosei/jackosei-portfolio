"use client"

import { Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SimpleWorkSlider from "@/components/simple-work-slider";

const projects = [
  {
    title: "Blast Catering",
    description: "Full-stack React/Next.js build with API integrations, UI/UX, SEO, CDN, and analytics (PostHog + GA).",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Full Stack Web Development",
    technologies: ["React", "Next.js", "APIs", "Node.js", "PostHog"],
    link: "https://blastcatering.com",
    github: "#"
  },
  {
    title: "Pretty Little Props",
    description: "UI/UX design and e-commerce development with analytics and SEO best practices.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "E-commerce",
    technologies: ["UI/UX", "WordPress", "GA4", "E‑commerce SEO"],
    link: "https://prettylittleprops.com",
    github: "#"
  },
  {
    title: "Dish Catering",
    description: "UI + web design, on-page SEO, CDN setup, graphics, and GA integration.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Web Design",
    technologies: ["UI Design", "Web Design", "SEO", "CDN", "GA4"],
    link: "https://dishcatering.com",
    github: "#"
  },
  {
    title: "Foodie Holdings",
    description: "Brand design, UI/UX design, and web development for a hospitality group.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Brand & Web",
    technologies: ["Brand Design", "UI/UX", "Web Development"],
    link: "https://foodieholdings.com",
    github: "#"
  },
  {
    title: "Deeritna",
    description: "Multi-country website with UI/UX, SEO, and Google Analytics setup.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Brand & Web",
    technologies: ["UI/UX", "Multi‑region", "SEO", "GA4"],
    link: "https://deeritna.com",
    github: "#"
  },
  {
    title: "Plant Power Dubai",
    description: "Shopify theme updates and web development to enhance storefront UX.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Shopify",
    technologies: ["Shopify", "Theme Updates", "Web Development"],
    link: "plantpowerdubai.com",
    github: "#"
  },
  {
    title: "Flexy Foods",
    description: "Website UI revamp, development, GA integration, and SEO improvements.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Website Revamp",
    technologies: ["UI Revamp", "Web Development", "GA4", "SEO"],
    link: "https://flexyfoods.com",
    github: "#"
  },
  {
    title: "AYED Ghana",
    description: "Web development for a Ghana-based organization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "NGO",
    technologies: ["Web Development"],
    link: "https://ayedghana.com",
    github: "#"
  },
  {
    title: "TechToday Developers Limited",
    description: "UI/UX design, web development, and advanced SEO for a tech brand.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Portfolio",
    technologies: ["Next.js", "Tailwind CSS", "Advanced SEO"],
    link: "https://techtoday.dev",
    github: "#"
  }
  ,
  {
    title: "Photon Trading FX",
    description: "Web development for a financial trading coach with performance-focused pages and analytics.",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Financial",
    technologies: ["Next.js", "Tailwind CSS", "GA4"],
    link: "https://www.photontradingfx.com/",
    github: "#"
  },
  {
    title: "Kamini Chocolate",
    description: "Landing page with modern UX for a chocolate brand. Preview available.",
    image: "https://images.unsplash.com/photo-1493925410384-84f842e616fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Landing Page",
    technologies: ["Next.js", "Shopify", "UI/UX"],
    link: "https://kamini-chocolate.vercel.app/",
    github: "#",
    inProgress: true
  },
  {
    title: "Paddington Home",
    description: "E-commerce website with CMS-driven pages for a home decor brand. Preview available.",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "E-commerce",
    technologies: ["Next.js", "CMS", "UI/UX"],
    link: "https://themerakilab.com/",
    github: "#",
    inProgress: true
  }
];

export default function SelectedWork() {
  return (
    <section id="work" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12 sm:mb-20">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Star className="w-3 h-3 sm:w-4 sm:h-4" />
              Selected Work
            </div>
          </AnimateIn>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Real Results for
            <br />
            <span className="gradient-text">Real Startups</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See how I&apos;ve helped startups turn their websites into revenue-generating assets. 
            Each project demonstrates the conversion-focused approach that drives actual business growth.
          </p>
        </AnimateIn>

        <SimpleWorkSlider projects={projects} />
      </div>
    </section>
  );
} 