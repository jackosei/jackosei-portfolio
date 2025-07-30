"use client"

import { motion } from "framer-motion";
import { Code, Palette, ShoppingCart, Search, Zap, Users, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies like React, Next.js, and Node.js. Focus on performance, scalability, and user experience.",
    features: ["React & Next.js", "TypeScript", "API Integration", "Performance Optimization"],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Web Design",
    description: "Beautiful, responsive designs that capture your brand's essence and create memorable user experiences across all devices.",
    features: ["UI/UX Design", "Brand Identity", "Responsive Design", "User Research"],
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "E-Commerce Development",
    description: "Complete e-commerce solutions with secure payment processing, inventory management, and seamless shopping experiences.",
    features: ["Payment Integration", "Inventory Management", "Shopping Cart", "Order Processing"],
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "SEO Optimization",
    description: "Search engine optimization to improve your website's visibility and help potential customers find your business online.",
    features: ["Technical SEO", "Content Strategy", "Local SEO", "Analytics"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Performance Optimization",
    description: "Fast-loading websites that provide excellent user experience and help improve your search engine rankings.",
    features: ["Core Web Vitals", "Image Optimization", "Caching", "CDN Setup"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Experience Design",
    description: "Intuitive and engaging user interfaces that guide visitors through your website and encourage them to take action.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm font-medium mb-6"
          >
            <Globe className="w-4 h-4" />
            What I Offer
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Design, Development, and SEO
            <br />
            <span className="gradient-text">All-in-one.</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive web development services tailored to your business needs. 
            From concept to deployment, I deliver high-quality solutions that drive results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover group"
            >
              <div className="text-accent-highlight mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent-highlight rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to create something amazing that will help your business grow and succeed online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg" showArrow>
                Start Your Project
              </Button>
              <Button variant="secondary" size="lg" showArrow>
                View My Work
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 