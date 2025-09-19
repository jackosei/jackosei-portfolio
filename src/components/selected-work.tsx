"use client"

import { Star } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import SimpleWorkSlider from "@/components/simple-work-slider";
import { useMemo, useState } from "react";

const projects = [
  {
    title: "Blast Catering",
    description: "Full-stack React/Next.js build with API integrations, UI/UX, SEO, CDN, and analytics (PostHog + GA).",
    image: "/workshots/blast-catering.png",
    categories: ["Full Stack Web Development", "UI/UX", "SEO"],
    technologies: ["React", "Next.js", "APIs", "Node.js", "PostHog"],
    link: "https://blastcatering.com",
    github: "#"
  },
  {
    title: "Pretty Little Props",
    description: "UI/UX design and e-commerce development with analytics and SEO best practices.",
    image: "/workshots/pretty-little-props.png",
    categories: ["E-commerce", "UI/UX", "Analytics"],
    technologies: ["UI/UX", "WordPress", "GA4", "E‑commerce SEO"],
    link: "https://prettylittleprops.com",
    github: "#"
  },
  {
    title: "Dish Catering",
    description: "UI + web design, on-page SEO, CDN setup, graphics, and GA integration.",
    image: "/workshots/dish-catering.png",
    categories: ["Web Design", "SEO", "Analytics"],
    technologies: ["UI Design", "Web Design", "SEO", "CDN", "GA4"],
    link: "https://dish.ae",
    github: "#"
  },
  {
    title: "Foodie Holdings",
    description: "Brand design, UI/UX design, and web development for a hospitality group.",
    image: "/workshots/foodie-holdings.png",
    categories: ["Brand & Web", "UI/UX"],
    technologies: ["Brand Design", "UI/UX", "Web Design"],
    link: "https://foodieholdings.com",
    github: "#"
  },
  {
    title: "Deeritna",
    description: "Multi-country website with UI/UX, SEO, and Google Analytics setup.",
    image: "/workshots/deeritna.png",
    categories: ["Brand & Web", "UI/UX", "Analytics"],
    technologies: ["UI/UX", "Multi‑region", "SEO", "GA4"],
    link: "https://deeritna.com/uae/",
    github: "#"
  },
  {
    title: "Plant Power Dubai",
    description: "Shopify theme updates and web development to enhance storefront UX.",
    image: "/workshots/plant-power-dubai.png",
    categories: ["Shopify", "Web Design"],
    technologies: ["Shopify", "Theme Updates", "Web Development"],
    link: "plantpowerdubai.com",
    github: "#"
  },
  {
    title: "Flexy Foods",
    description: "Website UI revamp, development, GA integration, and SEO improvements.",
    image: "/workshots/flexy-foods.png",
    categories: ["Website Revamp", "UI/UX", "SEO"],
    technologies: ["UI Revamp", "Web Development", "GA4", "SEO"],
    link: "https://flexyfoodsgh.com",
    github: "#"
  },
  {
    title: "AYED Ghana",
    description: "Web development for a Ghana-based organization.",
    image: "/workshots/ayed-ghana.png",
    categories: ["Web Design"],
    technologies: ["Web Development"],
    link: "https://ayedghana.com",
    github: "#"
  },
  {
    title: "TechToday Developers Limited",
    description: "UI/UX design, web development, and advanced SEO for a tech brand.",
    image: "/workshots/techtoday-developers-limited.png",
    categories: ["Web Design", "UI/UX", "SEO"],
    technologies: ["Next.js", "Tailwind CSS", "Advanced SEO"],
    link: "https://techtoday.dev",
    github: "#"
  }
  ,
  {
    title: "Photon Trading FX",
    description: "Web development for a financial trading coach with performance-focused pages and analytics.",
    image: "/workshots/photon-trading-fx.png",
    categories: ["Web Design", "Analytics"],
    technologies: ["Next.js", "Tailwind CSS", "GA4"],
    link: "https://www.photontradingfx.com/",
    github: "#"
  },
  {
    title: "Kamini Chocolate",
    description: "Landing page with modern UX for a chocolate brand. Preview available.",
    image: "/workshots/kamini-chocolate.png",
    categories: ["Landing Page", "UI/UX"],
    technologies: ["Next.js", "Shopify", "UI/UX"],
    link: "https://kamini-chocolate.vercel.app/",
    github: "#",
    inProgress: true
  },
  {
    title: "Paddington Home",
    description: "E-commerce website with CMS-driven pages for a home decor brand. Preview available.",
    image: "/workshots/paddington-home.png",
    categories: ["E-commerce", "UI/UX", "Web Design"],
    technologies: ["Next.js", "CMS", "UI/UX"],
    link: "https://themerakilab.com/",
    github: "#",
    inProgress: true
  }
];

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const all = Array.from(new Set(projects.flatMap((p) => p.categories)));
    return ["All", ...all];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory));
  }, [activeCategory]);

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

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm transition-colors border ${
                  isActive
                    ? "bg-accent-highlight text-accent-highlight-foreground border-accent-highlight"
                    : "bg-secondary/50 text-foreground border-border hover:bg-secondary"
                }`}
                aria-pressed={isActive}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <SimpleWorkSlider projects={filteredProjects} />
      </div>
    </section>
  );
} 