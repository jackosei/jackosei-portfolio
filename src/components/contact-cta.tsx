"use client"

import { motion } from "framer-motion";
import { Send, Mail, Clock, Target, Zap } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactModal from "./contact-modal";
import AnimateIn from "@/components/AnimateIn";

interface ContactCTAProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  valueProps?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
}

export default function ContactCTA({
  title = "Stop Guessing.",
  subtitle = "Start Growing.",
  description = "Your website has untapped potential. Let's find it. Book a free, no-pressure 15-minute strategy call. I'll give you at least three actionable insights you can use to improve your conversion rate immediately—whether we work together or not.",
  primaryButtonText = "Book Your Free Strategy Call",
  secondaryButtonText = "Quick Contact",
  valueProps = [
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
      title: "3 Specific Insights",
      description: "Get actionable advice to improve your conversion rate"
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
      title: "15-Minute Call",
      description: "Quick, focused, no pressure - just value"
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
      title: "Immediate Value",
      description: "Walk away with specific next steps"
    }
  ]
}: ContactCTAProps) {
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
        <div className="max-w-7xl mx-auto ">
          <AnimateIn className="text-center">
            <AnimateIn delay={0.2}>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                {subtitle}
              </div>
            </AnimateIn>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              {title}
              {subtitle && (
                <>
                  <br />
                  <span className="gradient-text">{subtitle}</span>
                </>
              )}
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              {description}
            </p>

            {!showInlineForm ? (
              <AnimateIn delay={0.4} className="space-y-6">
                {/* Value Proposition Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  {valueProps.map((prop, index) => (
                    <div 
                      key={index}
                      className={`bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-4 sm:p-6 ${
                        valueProps.length === 3 && index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
                      }`}
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent-highlight/10 rounded-full flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                        {prop.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                        {prop.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {prop.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Button
                    onClick={openContactModal}
                    variant="primary"
                    size="lg"
                    showArrow
                    className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                  >
                    {primaryButtonText}
                  </Button>
                  <Button
                    onClick={() => setShowInlineForm(true)}
                    variant="secondary"
                    size="lg"
                    showArrow
                    className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                  >
                    {secondaryButtonText}
                  </Button>
                </div>
              </AnimateIn>
            ) : (
              <AnimateIn className="max-w-md mx-auto">
                <form onSubmit={handleInlineSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all text-sm sm:text-base"
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
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your startup (optional)"
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or goals (optional)"
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      showArrow
                      className="flex-1 text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Get Started
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      size="lg"
                      onClick={() => setShowInlineForm(false)}
                      className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </AnimateIn>
            )}
          </AnimateIn>
        </div>
      </section>

      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
} 