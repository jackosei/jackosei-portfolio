"use client"

import { motion } from "framer-motion";
import { Users, Building2, Globe } from "lucide-react";

export default function ClientCarousel() {
  const clients = [
    {
      name: "Foodie Holdings",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Foodie Brands Catering & Events Services",
      location: "Dubai", 
      category: "Food & Hospitality"
    },
    {
      name: "Dish Catering Catering & Events Services",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Blast Catering",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Six Packs Revolution",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Plant Power Dubai",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Deeritna Catering",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Dubmeals Dubai",
      location: "Dubai",
      category: "Food & Hospitality"
    },
    {
      name: "Pretty Little Props",
      location: "Dubai",
      category: "Events & Catering"
    },
    {
      name: "TechToday Developers Limited",
      location: "Ghana",
      category: "Technology",
      website: "techtodays.dev"
    }
  ];

  return (
    <section className="section-padding bg-secondary/10">
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
          >
            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
            Trusted By
          </motion.div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
            Real Clients, Real Results
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            From Dubai&apos;s leading food & hospitality brands to Ghana&apos;s tech innovators, 
            I&apos;ve helped diverse businesses turn their websites into growth engines.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background rounded-xl p-4 sm:p-6 border hover:shadow-lg transition-all duration-300 hover:scale-105 text-center h-full flex flex-col justify-between">
                <div>
                  {/* Logo placeholder - you can replace this with actual logos */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-accent-highlight/10 to-accent-highlight/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-accent-highlight" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 text-xs sm:text-sm">
                    {client.name}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-2">
                    <Globe className="w-3 h-3" />
                    <span>{client.location}</span>
                  </div>
                </div>
                
                <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
                  {client.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground text-xs sm:text-sm">
            <strong>10+ clients</strong> across Dubai and Ghana • 
            <strong> Food & Hospitality</strong> • <strong>Technology</strong> • <strong>Events</strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
} 