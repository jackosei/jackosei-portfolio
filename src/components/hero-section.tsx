"use client"

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { heroImage, heroImageAlt } from "@/lib/constants";
import AnimateIn from "@/components/AnimateIn";
import { usePrefersMotion } from "@/hooks/usePrefersMotion";

export default function HeroSection() {
  const canAnimate = usePrefersMotion();
  
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
        <AnimateIn className="animate-slide-up">
          {/* Badge */}
          {canAnimate ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
              The Founders&apos; Tech Friend
            </motion.div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
              The Founders&apos; Tech Friend
            </div>
          )}
          
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
          {canAnimate ? (
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
          ) : (
            <div className="flex gap-6 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
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
            </div>
          )}
        </AnimateIn>
        
        <AnimateIn delay={0.2} className="order-first lg:order-last relative mt-8 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto lg:max-w-none">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-highlight/20 to-primary/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
            <div className="relative w-full h-auto aspect-[4/5] max-h-[60vh]">
              <Image
                src={heroImage}
                alt={heroImageAlt}
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 500px"
              />
            </div>
            {canAnimate ? (
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="font-bold text-lg text-foreground">Jack K. Osei</p>
                <p className="text-sm text-muted-foreground">The Founder&apos;s Tech Friend</p>
              </motion.div>
            ) : (
              <div className="mt-4 text-center">
                <p className="font-bold text-lg text-foreground">Jack K. Osei</p>
                <p className="text-sm text-muted-foreground">The Founder&apos;s Tech Friend</p>
              </div>
            )}
          </div>
        </AnimateIn>
      </div>
      
      {/* Scroll indicator */}
      {canAnimate ? (
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
      ) : (
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      )}
    </section>
  );
} 