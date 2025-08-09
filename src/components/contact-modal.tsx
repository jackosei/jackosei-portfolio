"use client"

import { X, CheckCircle, Clock, Target, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePrefersMotion } from "@/hooks/usePrefersMotion";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const canAnimate = usePrefersMotion();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    projectType: "website-audit",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        website: "",
        projectType: "website-audit",
        message: ""
      });
      onClose();
    }, 4000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          {canAnimate ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
          ) : (
            <div
              onClick={onClose}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
          )}
          
          {/* Modal */}
          {canAnimate ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Free Strategy Call</h2>
                    <p className="text-muted-foreground mt-1">
                      Get 3 actionable insights to improve your conversion rate
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      {/* Value Proposition */}
                      <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-accent-highlight/10 rounded-full flex items-center justify-center">
                            <Target className="w-5 h-5 text-accent-highlight" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">What You&apos;ll Get</h3>
                            <p className="text-sm text-muted-foreground">15-minute call, no pressure</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">3 conversion insights</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">15-minute call</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">Immediate value</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="Your name"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="your.email@company.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                              Company/Startup
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="Your startup name"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                              Current Website
                            </label>
                            <input
                              type="url"
                              id="website"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                            What do you need help with? *
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                          >
                            <option value="website-audit">Website Audit & Strategy</option>
                            <option value="mvp-development">MVP Development</option>
                            <option value="conversion-optimization">Conversion Optimization</option>
                            <option value="ecommerce-shopify">E-commerce (Shopify)</option>
                            <option value="webflow-wordpress">Webflow/WordPress Site</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                            Tell me about your goals (optional)
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all resize-none"
                            placeholder="What are your main challenges? What's your timeline? Any specific goals?"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          showArrow
                          className="w-full text-lg py-4"
                        >
                          Book My Free Strategy Call
                        </Button>
                        
                        <p className="text-xs text-muted-foreground text-center">
                          No spam, no sales pitch. Just actionable insights to help your startup grow.
                        </p>
                      </form>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        You&apos;re all set! 🎉
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        I&apos;ve received your request and will be in touch within 24 hours to schedule your free strategy call.
                      </p>
                      <div className="bg-accent-highlight/5 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2">What happens next:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• I&apos;ll review your website and prepare 3 specific insights</li>
                          <li>• We&apos;ll schedule a 15-minute call at your convenience</li>
                          <li>• You&apos;ll get immediate actionable advice to improve conversions</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="bg-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Free Strategy Call</h2>
                    <p className="text-muted-foreground mt-1">
                      Get 3 actionable insights to improve your conversion rate
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close modal"
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  {!isSubmitted ? (
                    <div className="space-y-6">
                      {/* Value Proposition */}
                      <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-xl p-6 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-accent-highlight/10 rounded-full flex items-center justify-center">
                            <Target className="w-5 h-5 text-accent-highlight" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">What You&apos;ll Get</h3>
                            <p className="text-sm text-muted-foreground">15-minute call, no pressure</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">3 conversion insights</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">15-minute call</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-accent-highlight" />
                            <span className="text-sm">Immediate value</span>
                          </div>
                        </div>
                      </div>

                      {/* Contact Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name-static" className="block text-sm font-medium text-foreground mb-2">
                              Name *
                            </label>
                            <input
                              type="text"
                              id="name-static"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="Your name"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="email-static" className="block text-sm font-medium text-foreground mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              id="email-static"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="your.email@company.com"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="company-static" className="block text-sm font-medium text-foreground mb-2">
                              Company/Startup
                            </label>
                            <input
                              type="text"
                              id="company-static"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="Your startup name"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="website-static" className="block text-sm font-medium text-foreground mb-2">
                              Current Website
                            </label>
                            <input
                              type="url"
                              id="website-static"
                              name="website"
                              value={formData.website}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                              placeholder="https://yourwebsite.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="projectType-static" className="block text-sm font-medium text-foreground mb-2">
                            What do you need help with? *
                          </label>
                          <select
                            id="projectType-static"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all"
                          >
                            <option value="website-audit">Website Audit & Strategy</option>
                            <option value="mvp-development">MVP Development</option>
                            <option value="conversion-optimization">Conversion Optimization</option>
                            <option value="ecommerce-shopify">E-commerce (Shopify)</option>
                            <option value="webflow-wordpress">Webflow/WordPress Site</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="message-static" className="block text-sm font-medium text-foreground mb-2">
                            Tell me about your goals (optional)
                          </label>
                          <textarea
                            id="message-static"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full px-4 py-3 rounded-lg border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent-highlight focus:border-transparent transition-all resize-none"
                            placeholder="What are your main challenges? What's your timeline? Any specific goals?"
                          />
                        </div>
                        
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          showArrow
                          className="w-full text-lg py-4"
                        >
                          Book My Free Strategy Call
                        </Button>
                        
                        <p className="text-xs text-muted-foreground text-center">
                          No spam, no sales pitch. Just actionable insights to help your startup grow.
                        </p>
                      </form>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        You&apos;re all set! 🎉
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        I&apos;ve received your request and will be in touch within 24 hours to schedule your free strategy call.
                      </p>
                      <div className="bg-accent-highlight/5 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2">What happens next:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• I&apos;ll review your website and prepare 3 specific insights</li>
                          <li>• We&apos;ll schedule a 15-minute call at your convenience</li>
                          <li>• You&apos;ll get immediate actionable advice to improve conversions</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </AnimatePresence>
  );
} 