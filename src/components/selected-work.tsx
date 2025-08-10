"use client"

import { Star, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="card-hover group overflow-hidden flex flex-col p-0"
            >
              {/* Media section with no padding */}
              <div className="relative h-48 sm:h-56 overflow-hidden rounded-lg rounded-b-none">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 bg-accent-highlight text-accent-highlight-foreground text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content section with padding */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-accent-highlight transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-accent-highlight hover:text-accent-highlight/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
} 