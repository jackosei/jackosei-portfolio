"use client"

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart, Sparkles, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">Jack Osei</span>
            </div>
            
            <p className="text-muted-foreground mb-8 leading-relaxed max-w-md">
              Professional web designer and developer passionate about creating 
              exceptional digital experiences that drive business growth and user engagement.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jackosei/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jackosei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:jackosei@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
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
            <h4 className="font-bold text-lg mb-6 text-foreground">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Web Design & Development
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
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact</h4>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-accent-highlight mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>jackosei@gmail.com</p>
                  <p className="text-sm mt-1">Available for new projects</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-accent-highlight mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>+233 XX XXX XXXX</p>
                  <p className="text-sm mt-1">Mon-Fri 9AM-6PM GMT</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent-highlight mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>Ghana</p>
                  <p className="text-sm mt-1">Available for remote work worldwide</p>
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
          className="border-t mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © 2024 Jack Osei. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>in Ghana</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 