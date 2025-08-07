import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Code,
  Palette,
  ShoppingCart,
  Search,
  Zap,
  Users,
  Globe,
  Sparkles,
  Target,
  Zap as ZapIcon,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  Shield,
  Clock,
  BarChart3,
  MapPin,
  FileText,
  Eye,
  ArrowUp,
  Gauge,
  Download,
  Globe as GlobeIcon,
  Activity,
  Timer,
  MousePointer,
  Route,
  TestTube,
  Layers,
  UserCheck,
  Database,
  Webhook,
  Settings,
  Cpu,
  Network,
  Lock,
  RefreshCw,
  PieChart,
  TrendingDown,
  Filter,
  Calendar,
  LineChart,
  Target as TargetIcon,
  CheckSquare,
  Play,
  Pause,
  SkipForward,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Analytics & Insights | Jack Osei",
  description:
    "Professional analytics and insights services for startups. Transform raw data into actionable insights to drive growth and make informed business decisions.",
  keywords:
    "analytics, data insights, conversion tracking, growth dashboards, A/B testing, key metrics, funnel analysis, data strategy, business intelligence",
  openGraph: {
    title: "Analytics & Insights | Jack Osei",
    description:
      "Professional analytics and insights services for startups. Transform raw data into actionable insights to drive growth.",
    type: "website",
  },
};

const benefits = [
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Analytics Implementation & Audit",
    description:
      "I'll set up and configure essential tools like Google Analytics 4, Mixpanel, and Hotjar to ensure you're capturing clean, reliable data from day one.",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Key Metric & Funnel Tracking",
    description:
      "We'll define your startup's Key Performance Indicators (KPIs) and build conversion funnels to see exactly where users are dropping off in their journey.",
  },
  {
    icon: <PieChart className="w-4 h-4" />,
    title: "Custom Growth Dashboards",
    description:
      "No more overwhelming reports. I'll create a simple, one-page dashboard that shows you the health of your business at a glance, so you can make informed decisions quickly.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Data-Driven Roadmaps",
    description:
      "We'll use insights from user behavior to prioritize your product roadmap, optimize your marketing spend, and focus your efforts on what truly drives growth.",
  },
  {
    icon: <TestTube className="w-4 h-4" />,
    title: "A/B Testing Framework",
    description:
      "I'll help you set up a system for running experiments, allowing you to test your assumptions and continuously improve your conversion rates based on real user data.",
  },
  {
    icon: <Eye className="w-4 h-4" />,
    title: "User Behavior Analysis",
    description:
      "Deep dive into how users interact with your product to identify pain points, opportunities, and areas for improvement that drive real business impact.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Flying Blind",
    description:
      "You're making decisions based on gut feelings rather than data, leading to wasted resources and missed opportunities for growth.",
    impact: "Poor decision-making and wasted resources",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Data Overload",
    description:
      "You have access to tons of data but no clear way to interpret it or turn it into actionable insights for your business.",
    impact: "Analysis paralysis and missed opportunities",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Wrong Metrics",
    description:
      "You're tracking vanity metrics that look good but don't actually correlate with business success or growth.",
    impact: "Misguided priorities and poor ROI",
  },
  {
    icon: <TrendingDown className="w-4 h-4" />,
    title: "Burning Cash on Marketing",
    description:
      "You're spending money on marketing campaigns without knowing which ones are actually driving conversions and revenue.",
    impact: "Wasted marketing budget and poor ROI",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Building Features Nobody Wants",
    description:
      "You're prioritizing product features based on assumptions rather than real user behavior and data-driven insights.",
    impact: "Wasted development time and poor product-market fit",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "Missing Growth Opportunities",
    description:
      "Valuable insights are hidden in your data, but you don't have the right tools or processes to uncover them.",
    impact: "Lost revenue and competitive disadvantage",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Data-First Strategy",
    description:
      "I'll help you establish a comprehensive analytics framework that turns every user interaction into actionable business intelligence.",
    benefit: "Informed, data-driven decisions",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Key Performance Indicators",
    description:
      "Define and track the metrics that actually matter for your business growth, not just vanity numbers that look good on reports.",
    benefit: "Focus on what drives real growth",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Conversion Funnel Analysis",
    description:
      "Build detailed funnels to identify exactly where users drop off and optimize each step of their journey to maximize conversions.",
    benefit: "Higher conversion rates and revenue",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "User Behavior Insights",
    description:
      "Understand how users actually interact with your product to identify pain points and opportunities for improvement.",
    benefit: "Better product-market fit",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "A/B Testing Framework",
    description:
      "Set up systematic testing to validate assumptions and continuously improve based on real user data and behavior.",
    benefit: "Proven optimization strategies",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Actionable Dashboards",
    description:
      "Create clear, focused dashboards that give you the insights you need to make quick, informed decisions about your business.",
    benefit: "Faster, better decision-making",
  },
];

export default function AnalyticsInsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header>
        <Navigation />
      </header>
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-highlight/5 via-transparent to-purple-500/5" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-highlight/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-6">
                <PieChart className="w-3 h-3 sm:w-4 sm:h-4" />
                Analytics & Insights
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Are You Making Decisions
                <br />
                <span className="gradient-text">Based on Data or Just Guessing?</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your startup is generating data every single second. Every website visit, every click, and every sign-up is a clue. But if you're not collecting, interpreting, and acting on that data, you're flying blind.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-secondary/5 to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Problem
              </h2>
              <p className="text-lg text-muted-foreground max-w-6xl mx-auto">
                You're likely burning cash on marketing that doesn't work, prioritizing features nobody wants, and missing huge opportunities for growth right under your nose. Without proper analytics, you're making decisions in the dark.
              </p>
              <div className="w-24 h-1 bg-accent-highlight mx-auto rounded-full mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-red-500/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-red-500">{problem.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {problem.description}
                      </p>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-red-500/10 text-red-600 text-xs rounded-full">
                        <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                        {problem.impact}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Solution
              </h2>
              <p className="text-lg text-muted-foreground max-w-6xl mx-auto">
                I help founders move from "I think" to "I know." I'll help you set up an analytics framework that turns raw data into your most valuable asset: actionable insights. We'll track the metrics that actually matter for growth and build a clear picture of what's working and what's not.
              </p>
              <div className="w-24 h-1 bg-accent-highlight mx-auto rounded-full mt-6" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-accent-highlight/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-highlight/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-accent-highlight">{solution.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-accent-highlight/10 text-accent-highlight text-xs rounded-full">
                        <span className="w-1 h-1 bg-accent-highlight rounded-full"></span>
                        {solution.benefit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-secondary/5 to-secondary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What You Get
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive analytics strategy that transforms raw data into actionable insights for growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-secondary/20 hover:border-accent-highlight/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent-highlight/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-accent-highlight">{benefit.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <ContactCTA 
          title="Ready to Stop Guessing"
          subtitle="and Start Growing?"
          description="Let's build an analytics foundation that gives you the clarity you need to win. Book a free data strategy call to discuss how we can turn your data into your competitive advantage."
          primaryButtonText="Book a Free Data Strategy Call"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <PieChart className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free Analytics Audit",
              description: "Get a comprehensive analysis of your current data setup"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Strategy Call",
              description: "Quick call to discuss your data and growth opportunities"
            },
            {
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Data Strategy Roadmap",
              description: "Walk away with a clear plan to leverage your data for growth"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
