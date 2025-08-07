"use client"

import { motion } from "framer-motion";
import { Send, Mail, Clock, Target, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactModal from "./contact-modal";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInlineForm, setShowInlineForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setShowInlineForm(false);
    setFormData({ name: "", email: "", company: "", message: "" });
    // You could also open the modal here with pre-filled data
    openContactModal();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              Stop Guessing.
              <br />
              <span className="gradient-text">Start Growing.</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Your website has untapped potential. Let&apos;s find it. Book a free, no-pressure 15-minute strategy call. 
              I&apos;ll give you at least three actionable insights you can use to improve your conversion rate immediately—whether we work together or not.
            </p>

            {!showInlineForm ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Value Proposition Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-accent-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Target className="w-6 h-6 text-accent-highlight" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">3 Specific Insights</h3>
                    <p className="text-sm text-muted-foreground">Get actionable advice to improve your conversion rate</p>
                  </div>
                  <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-accent-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Clock className="w-6 h-6 text-accent-highlight" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">15-Minute Call</h3>
                    <p className="text-sm text-muted-foreground">Quick, focused, no pressure - just value</p>
                  </div>
                  <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-6">
                    <div className="w-12 h-12 bg-accent-highlight/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Zap className="w-6 h-6 text-accent-highlight" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Immediate Value</h3>
                    <p className="text-sm text-muted-foreground">Walk away with specific next steps</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={openContactModal}
                    variant="primary"
                    size="lg"
                    showArrow
                    className="text-lg px-8 py-4"
                  >
                    Book Your Free Strategy Call
                  </Button>
                  <Button
                    onClick={() => setShowInlineForm(true)}
                    variant="secondary"
                    size="lg"
                    showArrow
                    className="text-lg px-8 py-4"
                  >
                    Quick Contact
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md mx-auto"
              >
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                    />
                  </div>
                                       <div>
                       <input
                         type="text"
                         name="company"
                         value={formData.company}
                         onChange={handleInputChange}
                         placeholder="Your startup (optional)"
                         className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                       />
                     </div>
                     <div>
                       <textarea
                         name="message"
                         value={formData.message}
                         onChange={handleInputChange}
                         placeholder="Tell me about your project or goals (optional)"
                         rows={3}
                         className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all resize-none"
                       />
                     </div>
                     <div className="flex gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      className="flex-1"
                    >
                      Get Started
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={() => setShowInlineForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
} 