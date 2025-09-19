"use client"


import Image from "next/image";
import { Linkedin, Github, Mail, Users,  } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";


export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <AnimateIn className="text-center order-2 lg:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/jack-profile-image.webp"
                alt="Jack Osei - Professional workspace"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            
          </AnimateIn>
          
          <AnimateIn delay={0.2} className="md:text-left text-center order-1 lg:order-2">
            <AnimateIn delay={0.4}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                About Me
              </div>
            </AnimateIn>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Your Tech Friend
              <br />
              <span className="gradient-text">in the Trenches</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              I&apos;ve watched too many brilliant founders get stuck with websites that cost them customers. 
              Incredible ideas held back by slow developers, expensive agencies, and sites that looked good but converted poorly.
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              I started this practice to fix that exact problem. Everything I do is built around the founder&apos;s reality: 
              you need to move fast, prove traction, and make every marketing dollar count. I&apos;m not just another developer—I&apos;m the technical partner who ensures your website becomes your best growth asset, not your biggest bottleneck.
            </p>
            

            
            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <a
                href="https://www.linkedin.com/in/jackosei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect on LinkedIn"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/jackosei"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:jackosei@gmail.com"
                aria-label="Send an email"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            
            {/* <Button
              variant="secondary"
              size="lg"
              showArrow
              external
              href="https://www.linkedin.com/in/jackosei/"
            >
              Connect on LinkedIn
            </Button> */}
          </AnimateIn>
        </div>
      </div>
    </section>
  );
} 