"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
} from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/contact-modal";
import { useState } from "react";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

export default function ContactPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showInlineForm, setShowInlineForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormData({ name: "", email: "", company: "", message: "" });
    setShowInlineForm(false);
    // You could also open the modal here with pre-filled data
    openContactModal();
  };

  const openContactModal = () => {
    setIsModalOpen(true);
  };

  const closeContactModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: <Send className="w-6 h-6 text-accent-highlight" />,
      title: "Quick Contact",
      description: "Fill out the form below to get started quickly",
      action: showInlineForm ? "Hide Form" : "Show Form",
      onClick: () => setShowInlineForm(!showInlineForm),
      external: false,
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-accent-highlight" />,
      title: "Strategy Call",
      description: "Book a free 15-minute call to discuss your goals",
      action: "Book Free Call",
      onClick: openContactModal,
      external: true,
    },
    {
      icon: <Mail className="w-6 h-6 text-accent-highlight" />,
      title: "Email",
      description: "Send me a detailed message about your project",
      action: "hello@jackosei.com",
      link: "mailto:hello@jackosei.com",
      external: true,
    },
  ];

  const businessInfo = [
    {
      icon: <Clock className="w-5 h-5 text-accent-highlight" />,
      title: "Response Time",
      description: "Within 24 hours",
    },
    {
      icon: <MapPin className="w-5 h-5 text-accent-highlight" />,
      title: "Location",
      description: "Dubai, UAE (Remote work available)",
    },
    {
      icon: <Phone className="w-5 h-5 text-accent-highlight" />,
      title: "Availability",
      description: "Mon-Fri, 9 AM - 6 PM GST",
    },
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <AnimateIn>
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Let&apos;s Connect
              </div>
            </AnimateIn>

            <AnimateIn delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground capitalize">
                Choose what works
                <br />
                <span className="gradient-text">best for you</span>
              </h1>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to
                explore possibilities, I&apos;m here to help you create something
                amazing that drives real business results. <br /><br />
                <span className="font-bold">Choose Your Preferred Way to Connect:</span>
              </p>
            </AnimateIn>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {contactMethods.map((method, index) => (
                <AnimateIn
                  key={index}
                  delay={index * 0.1}
                  className={`card-hover group p-6 sm:p-8 text-center ${
                    method.title === "Quick Contact" ? "md:col-span-1 col-span-full" : ""
                  }`}
                >
                  <div className="mb-4 flex justify-center">{method.icon}</div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {method.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  {method.onClick ? (
                    <Button
                      onClick={method.onClick}
                      variant="primary"
                      size="lg"
                      showArrow
                      className="w-full"
                      external={method.external}
                    >
                      {method.action}
                    </Button>
                  ) : (
                    <a
                      href={method.link}
                      className="inline-flex items-center gap-2 text-accent-highlight hover:text-accent-highlight/80 transition-colors font-medium"
                    >
                      {method.action}
                    </a>
                  )}
                </AnimateIn>
              ))}
            </div>

            {/* Inline Contact Form - positioned below Quick Contact card on mobile */}
            {showInlineForm && (
              <AnimateIn className="mt-6 md:mt-12 max-w-md mx-auto md:col-span-3">
                <div className="bg-muted/30 rounded-xl p-6 sm:p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground text-center">
                    Quick Contact Form
                  </h3>
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
                        Send Message
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
                </div>
              </AnimateIn>
            )}
          </div>
        </section>

        {/* Business Information */}
        <section className="py-16 px-4 sm:px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <AnimateIn className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground">
                I&apos;m committed to providing a professional, efficient experience
                for every client.
              </p>
            </AnimateIn>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {businessInfo.map((info, index) => (
                <AnimateIn
                  key={index}
                  delay={index * 0.1}
                  className="text-center"
                >
                  <div className="mb-4 flex justify-center">{info.icon}</div>

                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {info.title}
                  </h3>

                  <p className="text-muted-foreground">{info.description}</p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimateIn className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common questions about working together.
              </p>
            </AnimateIn>

            <div className="space-y-6">
              <AnimateIn delay={0.1} className="card-hover p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  How quickly can we start?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most projects can begin within 1-2 weeks of our initial
                  consultation. I&apos;ll work with your timeline to ensure we
                  deliver when you need it.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.2} className="card-hover p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  What&apos;s included in the free strategy call?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  You&apos;ll get 3 specific, actionable insights to improve your
                  website&apos;s conversion rate, plus a clear understanding of how
                  we can work together to achieve your goals.
                </p>
              </AnimateIn>

              <AnimateIn delay={0.3} className="card-hover p-6 sm:p-8">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Do you work with startups outside Dubai?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely! I work with startups globally. All communication
                  and project management is done remotely, so location is never
                  a barrier to great results.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <AnimateIn>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                The best time to improve your website is now. Let&apos;s have a
                conversation about how we can turn your website into a growth
                engine.
              </p>

              <Button
                onClick={openContactModal}
                variant="primary"
                size="lg"
                showArrow
                className="text-lg px-8 py-4 group/button"
              >
                Book Your Free Strategy Call
              </Button>
            </AnimateIn>
          </div>
        </section>
      </div>
      <Footer />

      <ContactModal isOpen={isModalOpen} onClose={closeContactModal} />
    </>
  );
}
