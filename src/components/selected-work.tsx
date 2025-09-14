"use client"

import { Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SimpleWorkSlider from "@/components/simple-work-slider";

const projects = [
  {
    title: "Foodie Holdings",
    description: "Complete e-commerce platform for Dubai's leading food & hospitality brand. Increased online orders by 300% in the first quarter.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "E-commerce",
    technologies: ["React", "Next.js", "Stripe", "Shopify"],
    link: "#",
    github: "#"
  },
  {
    title: "TechToday Developers",
    description: "Modern portfolio website for Ghana's tech innovation company. Clean, professional design that showcases their development expertise.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Portfolio",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://techtodays.dev",
    github: "#"
  },
  {
    title: "Plant Power Dubai",
    description: "Vegan restaurant website with online ordering system. Increased customer engagement and order volume significantly.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Restaurant",
    technologies: ["WordPress", "WooCommerce", "PHP"],
    link: "#",
    github: "#"
  },
  {
    title: "Dubai Tech Hub",
    description: "Corporate website for Dubai's premier tech incubator. Modern design with integrated event management and community features.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Corporate",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Ghana Startup Accelerator",
    description: "Platform connecting African startups with investors. Features include pitch submissions, investor matching, and progress tracking.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "SaaS",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Dubai Events Pro",
    description: "Event management platform for Dubai's hospitality industry. Streamlined booking process increased conversions by 250%.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Events",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
    link: "#",
    github: "#"
  },
  {
    title: "African Fintech Solutions",
    description: "Mobile-first financial platform for cross-border payments in West Africa. Secure, fast, and user-friendly design.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Fintech",
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS"],
    link: "#",
    github: "#"
  },
  {
    title: "Dubai Food Delivery Network",
    description: "Multi-vendor food delivery platform connecting local restaurants with customers across Dubai. 40% increase in order volume.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "Delivery",
    technologies: ["React", "Express.js", "MongoDB", "Socket.io"],
    link: "#",
    github: "#"
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