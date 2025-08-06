"use client"

import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, Clock, DollarSign, Users, Target, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Burning Cash on Marketing",
    description: "You're spending thousands on ads that drive traffic to a website that doesn't convert. Every click costs money, but visitors leave without buying.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Running Out of Time",
    description: "Your runway is shrinking while you're stuck with a website that takes weeks to update. You need to move fast, but your current setup is holding you back.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Losing to Competitors",
    description: "While you're dealing with a clunky website, competitors with better online presence are capturing your market share and potential customers.",
  },
];

const solutions = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Conversion-Focused Development",
    description: "Every element optimized for one goal: turning visitors into customers. No more pretty websites that don't generate revenue.",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Rapid Deployment & Iteration",
    description: "Launch in weeks, not months. Built for speed with easy content management so you can adapt quickly to market feedback.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "ROI-Driven Design",
    description: "Every design decision backed by conversion data. Focus on features that directly impact your bottom line and growth metrics.",
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
            Your Website Is
            <br />
            <span className="bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">Killing Your Startup</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
            Every day your website fails to convert is another day closer to running out of runway. 
            While you&apos;re focused on product development, your online presence is hemorrhaging potential customers and revenue.
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
            The Clock Is <span className="text-red-500">Ticking</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            <strong>Every week you delay is market share lost forever.</strong> Your competitors are moving fast, 
            capturing customers with polished websites while you&apos;re stuck with a site that looks like it was built in 2015. 
            Investors notice. Customers notice. Your team notices.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <strong>You have 18 months of runway left.</strong> How many of those months will you waste 
            with a website that&apos;s actively working against your growth?
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
            The <span className="gradient-text">Growth-Focused</span> Solution
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Professional, premium websites engineered from the ground up for user experience and conversion, 
            turning visitors into customers. Built for startups that need to move fast and grow faster.
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
            Stop Bleeding Money. Start Growing.
          </h4>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a website that works as hard as you do. Built for conversion, optimized for growth, 
            and designed to help you reach your next funding milestone.
          </p>
          
          <Button
            onClick={scrollToContact}
            variant="primary"
            size="lg"
            showArrow
            className="text-lg px-8 py-4 bg-accent-highlight hover:bg-accent-highlight/90"
          >
            Save My Startup
          </Button>
        </motion.div>
      </div>
    </section>
  );
}