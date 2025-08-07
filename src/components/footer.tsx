"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-secondary/20 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 relative">
                {mounted && (
                  <Image
                    src={
                      theme === "dark"
                        ? "/images/JKO Light.svg"
                        : "/images/JKO Dark.svg"
                    }
                    alt="Jack Osei Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 32px, 40px"
                  />
                )}
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-md">
              Professional creative developer building websites and designing
              brands that act as growth engines, working as hard as their
              founders do to attract users and drive revenue.
            </p>

            <div className="flex space-x-3 sm:space-x-4">
              <a
                href="https://www.linkedin.com/in/jackosei/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://github.com/jackosei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="View GitHub profile"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:jackosei@gmail.com"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Send an email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">
              Services
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
              <li>
                <a 
                  href="/web-design-development" 
                  className="hover:text-foreground transition-colors cursor-pointer"
                >
                  Web Design & Development
                </a>
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                E-Commerce Development
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                SEO Optimization
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Performance Optimization
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                User Experience Design
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Analytics & Insights
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                API Integration
              </li>
            </ul>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-foreground">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>hello@jackosei.com</p>
                  <p className="text-xs sm:text-sm mt-1">
                    Available for new projects
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+233 55 910 9933</p>
                  <p className="text-xs sm:text-sm mt-1">Mon-Fri 9AM-6PM GMT</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Ghana</p>
                  <p className="text-xs sm:text-sm mt-1">
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground text-xs sm:text-sm">
                © {new Date().getFullYear()} Jack Osei. All rights reserved.
              </p>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground text-xs sm:text-sm">
              <span>Made with</span>
              <Heart
                className="w-3 h-3 sm:w-4 sm:h-4 text-red-500"
                aria-hidden="true"
              />
              <span>in Ghana</span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <a
                href="/privacy"
                className="hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
