"use client"

import { motion } from "framer-motion";
import { Users } from "lucide-react";

export default function ClientCarousel() {
  const clients = [
    "TechCorp", "InnovateLab", "DigitalFlow", "WebCraft", "PixelPerfect", "CodeStudio"
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4" />
            Trusted By
          </motion.div>
          <h2 className="text-2xl font-semibold text-foreground">
            Trusted By
          </h2>
          
          <p className="text-lg font-medium text-muted-foreground">
            Leading companies and startups trust me to deliver exceptional results
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-lg font-medium text-muted-foreground"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 