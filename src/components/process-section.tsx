"use client"

import { motion } from "framer-motion";
import { Lightbulb, Code, Palette, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Discovery & Planning",
    description: "Understanding your business goals, target audience, and project requirements to create a strategic roadmap.",
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Design & Prototyping",
    description: "Creating beautiful, user-friendly designs and interactive prototypes to visualize the final product.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Development & Testing",
    description: "Building the website with clean, efficient code and thorough testing to ensure optimal performance.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Launch & Optimization",
    description: "Deploying your website and implementing ongoing optimizations for better performance and SEO.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm font-medium mb-6"
          >
            <Rocket className="w-4 h-4" />
            Process
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How I Work
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven process that ensures your project is delivered on time, within budget, 
            and exceeds your expectations. From initial concept to final deployment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-background w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border hover:bg-accent-highlight/10 hover:border-accent-highlight/30 transition-all duration-300 group-hover:scale-110">
                <div className="text-primary group-hover:text-accent-highlight transition-colors duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-accent-highlight transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 