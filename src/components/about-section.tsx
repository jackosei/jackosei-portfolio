"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github, Mail, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Jack Osei - Professional workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            
            
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm font-medium mb-6"
            >
              <Users className="w-4 h-4" />
              About Me
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Strategy <span className="gradient-text">+</span> Design <span className="gradient-text">+</span> Code
              
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m a passionate web designer and developer with a focus on creating 
              exceptional digital experiences. With years of experience in modern web technologies, 
              I help businesses establish a strong online presence that drives growth and engagement.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines creative design with technical excellence, ensuring every project 
              not only looks great but also performs flawlessly. I believe in building relationships 
              with clients and delivering solutions that exceed expectations.
            </p>
            

            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <a
                href="https://www.linkedin.com/in/jackosei/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/jackosei"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:jackosei@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            
            {/* <Button
              variant="secondary"
              size="lg"
              showArrow
              external
              href="https://www.linkedin.com/in/jackosei/"
            >
              About Me
            </Button> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 