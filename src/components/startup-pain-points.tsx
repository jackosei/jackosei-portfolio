"use client";

import {
  AlertTriangle,
  X,
  CheckCircle,
  Target,
  TrendingDown,
  DollarSign,
  ArrowRight,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimateIn from "@/components/AnimateIn";
import Link from "next/link";

const painPoints = [
  {
    problem: "Your ads drive traffic, but nobody's buying",
    description:
      "You're getting clicks and visitors, but they're bouncing faster than a bad pitch deck. Your website isn't doing the heavy lifting to convert that expensive traffic into paying customers.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Updates take forever (and cost a fortune)",
    description:
      "Want to test a new headline? That'll be 2 weeks and $500. Your developer disappeared, and now every tiny change feels like rebuilding from scratch.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "You're losing to worse products with better websites",
    description:
      "Your product is superior, but their website makes them look like the obvious choice. First impressions matter, and yours isn't making the case for why you're different.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Your site screams 'template,' not 'unicorn'",
    description: "Investors and customers can smell a generic template from miles away. Your breakthrough idea deserves a website that actually reflects your vision and potential.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Visitors land and... then what?",
    description: "People find you, but there's no clear next step. No compelling reason to stick around, sign up, or buy. Your website is a dead end instead of a conversion machine.",
    icon: <X className="w-5 h-5" />,
  },
  {
    problem: "Mobile users are giving up instantly",
    description: "80% of your traffic is mobile, but your site wasn't built for thumbs. Slow loading, tiny buttons, broken layouts, you're hemorrhaging potential customers every day.",
    icon: <X className="w-5 h-5" />,
  },
];

const solutions = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Built to Convert, Not Just Look Pretty",
    description:
      "Every pixel serves a purpose. I start with your business goals and design backwards, optimizing for the metrics that actually matter to your bottom line, not just aesthetics.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Ship Fast, Learn Faster",
    description:
      "Get your high-converting site live in weeks, then iterate based on real user data. No more waiting months for changes or being stuck with something that doesn't work.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Your Technical Co-Founder (Without the Equity)",
    description:
      "I've been where you are. I understand the urgency, the pivots, the pressure. You get someone who thinks like a founder but codes like a developer.",
  },
];

const benefits = [
  "More visitors actually become customers",
  "Google starts sending you quality traffic",
  "Users stick around instead of bouncing",
  "Site loads fast (even on slow connections)",
  "Works perfectly on every device",
  "Built to handle your growth spurts",
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
                    {point.description}
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
                Let me help you fix this
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Here&apos;s the thing: while you&apos;re grinding on product-market fit and chasing your next milestone, 
                your website is either working for you or against you. There&apos;s no neutral.
                <br />
                <br />
                The good news? This is fixable. And unlike most startup problems, 
                you can actually solve this one in weeks, not quarters.
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
          <div className="flex flex-col items-center justify-center bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-2xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Ready to Stop Leaving Money on the Table?
              </h3>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
              Let&apos;s turn your website into the growth engine your startup deserves. 
              While you focus on building your product and talking to customers, 
              I&apos;ll make sure your site is working 24/7 to convert visitors into revenue.
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

            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                showArrow
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                Get Your Free Website Audit
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
