"use client"

import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactModal from "./contact-modal";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="contact" className="section-padding bg-background section-divider">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm font-medium mb-6"
            >
              <Send className="w-4 h-4" />
              Get In Touch
            </motion.div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
              Success is a team play,
              <br />
              <span className="gradient-text">Let&apos;s work together!</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Ready to bring your vision to life? Let&apos;s discuss your project and 
              create something amazing together. I&apos;m here to help you succeed.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={openContactModal}
                variant="primary"
                size="lg"
                showArrow
                className="text-lg px-8 py-4"
              >
                Start Your Project
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
} 