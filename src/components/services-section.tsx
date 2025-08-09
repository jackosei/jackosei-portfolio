"use client"

import { motion } from "framer-motion";
import { Code, Palette, ShoppingCart, Search, Zap, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The MVP Launchpad",
    description: "Let's get your idea into the market, fast. I build lean, scalable, and conversion-focused MVPs using React, Next.js, and Node.js that are designed to attract your first users and validate your concept.",
    features: ["MVP Development", "React & Next.js", "API Integration", "Scalable Architecture"],
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The Conversion Engine",
    description: "Need a powerful marketing site that your team can actually use? I design beautiful, high-performing websites on Webflow and WordPress that are easy to manage and optimized for SEO and lead generation.",
    features: ["Custom Development", "Mobile-First Design", "CMS Integration", "Conversion Optimization"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The E-commerce Accelerator",
    description: "Ready to sell? I create Shopify & WooCommerce experiences that are engineered to maximize sales, from custom themes and payment integrations to fine-tuned conversion funnels.",
    features: ["Product Catalog", "Custom Themes", "Payment Integration", "Conversion Funnels"],
  },
  {
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Startup SEO & Growth",
    description: "SEO strategies that get your startup discovered by the right audience. Data-driven content and technical optimization for sustainable growth.",
    features: ["Startup SEO", "Content Strategy", "Growth Analytics", "Competitive Analysis"],
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Performance & Speed",
    description: "Lightning-fast websites that convert better and rank higher. Core Web Vitals optimization for better user experience and search rankings.",
    features: ["Core Web Vitals", "Speed Optimization", "Mobile Performance", "Conversion Impact"],
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "User Experience Strategy",
    description: "UX design that reduces friction and increases conversions. User research, prototyping, and testing focused on business outcomes.",
    features: ["User Research", "Conversion UX", "Usability Testing", "Growth Metrics"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12 sm:mb-20">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              Your Growth Engine
            </div>
          </AnimateIn>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            From MVP to a
            <br />
            <span className="gradient-text">Revenue-Generating Machine</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you&apos;re launching your first product or scaling to your next milestone, 
            I provide the technical firepower you need to win.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="card-hover group p-6 sm:p-8"
            >
              <div className="text-accent-highlight mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-accent-highlight rounded-full flex-shrink-0"></div>
                    <span className="leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          ))}
        </div>
        
        {/* CTA Section */}
        <AnimateIn delay={0.4} className="text-center mt-12 sm:mt-20">
          <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing that will help your business grow and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg" 
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                Start Your Project
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                View My Work
              </Button>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
} 