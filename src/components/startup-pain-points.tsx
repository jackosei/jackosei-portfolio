"use client"

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, DollarSign, Users, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "You're Burning Cash on Ads",
    description: "You're driving traffic, but visitors aren't converting. Every click is a cost, and without conversions, it's money down the drain.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "You Can't Move Fast Enough",
    description: "The market changes, but updating your site is a slow, painful process. By the time you make a change, the opportunity is gone.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "You're Losing to Competitors",
    description: "Potential customers visit, get confused, and leave. You know you have a better product, but their website tells a better story.",
  },
];

const solutions = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Conversion-First Development",
    description: "We start with your business goals and work backward. Every line of code, design choice, and user flow is obsessively optimized to turn a visitor into a paying customer.",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Launch & Iterate in Weeks, Not Months",
    description: "Speed is your greatest asset. We'll get your high-performing site live quickly, then use real data to make it even better. No more being held hostage by slow development cycles.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "A Tech Partner Who Gets It",
    description: "I speak founder, not just code. Think of me as the technical co-founder you can call on to translate your vision into a digital experience that investors and customers will love.",
  },
];

export default function StartupPainPoints() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/5 section-divider">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-sm font-medium mb-6"
          >
            <AlertTriangle className="w-4 h-4" />
            For Startups & Founders
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-foreground">
            Is Your Website a Growth Engine
            <br />
            <span className="gradient-text">or a Glorified Business Card?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Let&apos;s be honest. While you&apos;re hustling to build your product and talk to customers, your website is probably just... sitting there. 
            It looks professional, but it isn&apos;t moving the needle on the metrics that matter.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-red-200/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 text-red-500">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Agitation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20 py-16 px-8 bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-3xl border border-red-200/10"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Every Day You Wait Is Another Day of <span className="text-accent-highlight">Lost Revenue</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            <strong>Your competitors are improving their websites every day.</strong> While they&apos;re optimizing for conversions 
            and user experience, you&apos;re stuck with a site that doesn&apos;t reflect your startup&apos;s potential. 
            Your customers deserve better, and so do you.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>Every day you wait is another day of lost revenue and missed opportunities.</strong> The good news? 
            This is fixable.
          </p>
        </motion.div>

        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            The Growth-Focused Website: <span className="gradient-text">Your Unfair Advantage</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I don&apos;t just build websites; I build strategic assets designed for one purpose: to grow your startup. 
            This is a partnership where we build a platform that works for you, not against you.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-accent-highlight/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-accent-highlight/10 rounded-lg flex items-center justify-center mb-6 text-accent-highlight">
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{solution.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-3xl p-12 text-center"
        >
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-3xl font-bold text-accent-highlight mb-2">340%</div>
              <div className="text-sm text-muted-foreground">Average Conversion Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-highlight mb-2">2-3 Weeks</div>
              <div className="text-sm text-muted-foreground">From Start to Launch</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-highlight mb-2">$2.4M+</div>
              <div className="text-sm text-muted-foreground">Revenue Generated for Clients</div>
            </div>
          </div>
          
                         <h4 className="text-2xl font-bold mb-4 text-foreground">
                 Ready to Turn Your Website Into a Growth Engine?
               </h4>
               <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                 When we work together, you can get back to what you do best—building your business—knowing your website is finally doing its job.
               </p>
          
          <Button
            onClick={scrollToContact}
            variant="primary"
            size="lg"
            showArrow
            className="text-lg px-8 py-4 bg-accent-highlight hover:bg-accent-highlight/90"
          >
            Get Free Website Audit
          </Button>
        </motion.div>
      </div>
    </section>
  );
}