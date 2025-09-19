"use client"

import { Code, Palette, ShoppingCart, Search, Zap, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

const services = [
  {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The MVP Launchpad",
    description: "Get your idea in front of real users in weeks, not months. I build lean, conversion-focused MVPs that help you validate demand and attract early customers, without the bloat or endless feature creep.",
    features: ["Ship in 2-4 weeks", "Built for user feedback", "Conversion tracking ready", "Scale-ready architecture"],
  },
  {
    icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The Conversion Engine",
    description: "Turn your marketing spend into actual customers. I build websites that are optimized to convert visitors into leads, trials, and sales from day one.",
    features: ["Lead generation focus", "A/B test ready", "SEO optimized", "Easy content updates"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "The E-commerce Accelerator",
    description: "Ready to start selling? I create e-commerce experiences designed to maximize revenue per visitor. Every element is optimized to reduce cart abandonment and increase average order value.",
    features: ["Conversion-optimized checkout", "Mobile-first design", "Payment flexibility", "Revenue analytics"],
  },
  {
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Get Found by Your Customers",
    description: "Stop relying on paid ads alone. I implement SEO strategies that bring qualified prospects to your site organically, the kind of traffic that converts and compounds over time.",
    features: ["Organic traffic growth", "Competitor analysis", "Content strategy", "Local SEO (if needed)"],
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Speed That Converts",
    description: "Slow sites lose customers. I optimize your website for lightning-fast loading times that keep users engaged and improve your search rankings—directly impacting your bottom line.",
    features: ["Sub-3 second load times", "Mobile optimization", "Core Web Vitals", "Conversion impact tracking"],
  },
  {
    icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "User Experience Strategy",
    description: "Remove the friction between visitors and revenue. I design user journeys that guide prospects naturally toward becoming customers, based on data, not assumptions.",
    features: ["Conversion-focused design", "User behavior analysis", "A/B testing setup", "Revenue impact measurement"],
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
            Whether you&apos;re validating your MVP or scaling to Series A, 
            I build the digital foundation that turns your vision into revenue.
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
              Let&apos;s build something that works as hard as you do to grow your business. 
              No fluff, no endless revisions, just results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="#contact">
                <Button 
                  variant="primary" 
                  size="lg" 
                  showArrow
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="#work">
              <Button 
                variant="secondary" 
                size="lg" 
                showArrow
                className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
} 