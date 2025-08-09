"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  X,
  CheckCircle,
  Target,
  TrendingDown,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/AnimateIn";

const painPoints = [
  {
    problem: "Marketing Budget Wasted",
    description:
      "You're spending money on ads and content marketing, but your website isn't converting visitors into customers. It's like having a great sales pitch with no one to close the deal.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Slow to Adapt",
    description:
      "Your website takes weeks to update when you need to move fast. Market feedback comes in, but you can't act on it quickly enough to stay competitive.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Missing Opportunities",
    description:
      "Potential customers are visiting your site but leaving without taking action. You're losing sales to competitors who have better user experiences.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Generic design that doesn't reflect your brand",
    solution: "Custom design that captures your unique value proposition",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "No clear path for visitors to become customers",
    solution: "Strategic user journey designed to maximize conversions",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Mobile experience that drives users away",
    solution: "Mobile-first design that converts on all devices",
    icon: <X className="w-5 h-5" />,
  },
];

const solutions = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Conversion-First Development",
    description:
      "We start with your business goals and work backward. Every line of code, design choice, and user flow is obsessively optimized to turn a visitor into a paying customer.",
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Launch & Iterate in Weeks, Not Months",
    description:
      "Speed is your greatest asset. We'll get your high-performing site live quickly, then use real data to make it even better. No more being held hostage by slow development cycles.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "A Tech Partner Who Gets It",
    description:
      "I speak founder, not just code. Think of me as the technical co-founder you can call on to translate your vision into a digital experience that investors and customers will love.",
  },
];

const benefits = [
  "Increased conversion rates",
  "Better search engine rankings",
  "Improved user experience",
  "Faster page load times",
  "Mobile-optimized design",
  "Scalable for growth",
];

export default function StartupPainPoints() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-background via-background to-secondary/5 section-divider ">
      <div className="max-w-7xl mx-auto ">
        {/* Problem Section */}
        <AnimateIn className="text-center mb-12 sm:mb-20">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/10 text-red-500 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              For Startups & Founders
            </div>
          </AnimateIn>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Is Your Website a Growth Engine
            <br />
            <span className="gradient-text">or a Glorified Business Card?</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
            Let&apos;s be honest. While you&apos;re hustling to build your
            product and talk to customers, your website is probably just...
            sitting there. It looks professional, but it isn&apos;t moving the
            needle on the metrics that matter.
          </p>
        </AnimateIn>

        {/* Pain Points Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {painPoints.map((point, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="bg-background p-6 sm:p-8 rounded-xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-red-500">{point.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                    {point.problem}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {point.description || point.solution}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* Solutions Section */}

        <AnimateIn delay={0.6} className="w-full bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-2xl py-12 sm:py-16 mb-12 sm:mb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
                The Opportunity Is Now
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your competitors are improving their websites every day. While
                they&apos;re optimizing for conversions and user experience,
                you&apos;re stuck with a site that doesn&apos;t reflect your
                startup&apos;s potential. Your customers deserve better, and so
                do you.
                <br />
                <br />
                Every day you wait is another day of missed opportunities. But
                the good news? You can fix this quickly and start seeing results
                within weeks, not months.
              </p>
            </div>
          </div>
        </AnimateIn>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {solutions.map((solution, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="card-hover group p-6 sm:p-8"
            >
              <div className="text-accent-highlight mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                {solution.title}
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </AnimateIn>
          ))}
        </div>

        {/* Solution Section */}
        <AnimateIn delay={0.4} className="text-center">
          <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <CheckCircle className="w-6 h-6 text-accent-highlight" />
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to Turn Your Website Into a Growth Engine?
              </h3>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              When we work together, you can get back to what you do
              best—building your business—knowing your website is finally doing
              its job.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-accent-highlight flex-shrink-0" />
                  <span className="text-sm sm:text-base text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <Button
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              showArrow
              className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Your Free Website Audit
            </Button>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
