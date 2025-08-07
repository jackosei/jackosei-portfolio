"use client"

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroImage, heroImageAlt } from "@/lib/constants";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 sm:pt-20 pb-20 sm:pb-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-accent-highlight/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent-highlight/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 w-full">
        <motion.div
          className="animate-slide-up"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
            The Founders&apos; Tech Friend
          </motion.div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-foreground">
            Turn Your Website Into 
            <span className="gradient-text block sm:inline"> A Sales Engine</span>
          </h1>
          
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-lg text-muted-foreground leading-relaxed">
            You&apos;re building a game-changing product and chasing your first 1,000 users. Your website shouldn&apos;t be a pretty brochure; 
            it should be your #1 growth engine. I build conversion-focused websites for founders that turn visitors into customers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="lg"
              showArrow
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Your Free Website Audit
            </Button>
            <Button
              onClick={() => scrollToSection("work")}
              variant="secondary"
              size="lg"
              showArrow
              external
              className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              See My Work
            </Button>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">40+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Projects Led</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">98%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-foreground">10+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="animate-fade-in order-first lg:order-last"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="relative">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-accent-highlight/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-accent-highlight/10 rounded-full blur-xl"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs sm:text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 