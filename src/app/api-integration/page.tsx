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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "API Integration Services | Jack Osei",
  description:
    "Professional API integration services for startups. Connect your tools and automate workflows to build a cohesive tech stack that works seamlessly together. Based in Dubai, UAE and serving Ghana and worldwide.",
  keywords:
    "API integration, workflow automation, third-party services, data synchronization, custom API development, tech stack integration, webhook development, Dubai API developer, Ghana API developer, African API developer",
  alternates: {
    canonical: '/api-integration',
  },
  openGraph: {
    title: "API Integration Services | Jack Osei",
    description:
      "Professional API integration services for startups. Connect your tools and automate workflows to build a cohesive tech stack. Based in Dubai, UAE and serving Ghana and worldwide.",
    url: 'https://jackosei.com/api-integration',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "API Integration Services | Jack Osei",
    description: "Professional API integration services for startups. Connect your tools and automate workflows to build a cohesive tech stack. Based in Dubai, UAE and serving Ghana and worldwide.",
  },
};

const benefits = [
  {
    icon: <Code className="w-4 h-4" />,
    title: "Custom API Development & Integration",
    description:
      "I can connect your platform to any service with a documented API, from Stripe and HubSpot to Google Maps and Twilio.",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Workflow Automation",
    description:
      "We'll automate repetitive tasks like adding new customers to your CRM, triggering email sequences, or syncing inventory data, freeing up your team to focus on growth.",
  },
  {
    icon: <Settings className="w-4 h-4" />,
    title: "Third-Party Service Integration",
    description:
      "Seamlessly embed functionality from other platforms directly into your website, like scheduling tools, support chats, or data dashboards.",
  },
  {
    icon: <RefreshCw className="w-4 h-4" />,
    title: "Data Synchronization",
    description:
      "Ensure a single source of truth by keeping your data consistent across all your platforms in real-time.",
  },
  {
    icon: <Lock className="w-4 h-4" />,
    title: "Secure & Scalable Connections",
    description:
      "All integrations are built with security and reliability in mind, ensuring they are robust enough to handle your startup's growth.",
  },
  {
    icon: <Network className="w-4 h-4" />,
    title: "Real-Time Data Flow",
    description:
      "Create seamless data pipelines that update instantly across all your systems, eliminating manual work and reducing errors.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Disconnected Systems",
    description:
      "Your CRM, email platform, payment processor, and analytics tools don't talk to each other, creating data silos and manual work.",
    impact: "Wasted time and inconsistent data",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Manual Data Entry",
    description:
      "You're spending hours copying information between systems, creating opportunities for errors and inconsistencies.",
    impact: "Lost productivity and data errors",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Broken Customer Experiences",
    description:
      "Customers see disconnected interactions across your platforms, damaging trust and reducing conversion rates.",
    impact: "Poor customer experience and lost sales",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Inefficient Workflows",
    description:
      "Your team is stuck doing repetitive tasks that could be automated, taking time away from growth-focused activities.",
    impact: "Reduced team productivity",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Limited Scalability",
    description:
      "As your business grows, manual processes become bottlenecks that prevent you from scaling efficiently.",
    impact: "Growth limitations and operational costs",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "No Single Source of Truth",
    description:
      "Data is scattered across multiple systems, making it impossible to get accurate insights about your business.",
    impact: "Poor decision-making and missed opportunities",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "API-First Integration Strategy",
    description:
      "I design integration solutions that connect all your tools through APIs, creating a unified tech stack that works together seamlessly.",
    benefit: "Connected, automated systems",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Workflow Automation",
    description:
      "Build automated processes that eliminate manual data entry and ensure consistent, error-free operations across all platforms.",
    benefit: "Increased efficiency and accuracy",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Real-Time Data Sync",
    description:
      "Create instant data synchronization between all your systems, ensuring you always have the most current information.",
    benefit: "Single source of truth",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Custom API Development",
    description:
      "Build custom APIs when needed to connect systems that don't have built-in integration options.",
    benefit: "Flexible, tailored solutions",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Security & Reliability",
    description:
      "Implement robust security measures and error handling to ensure your integrations are both safe and dependable.",
    benefit: "Trustworthy, scalable systems",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Performance Monitoring",
    description:
      "Set up monitoring and alerting to track the health and performance of all your integrations in real-time.",
    benefit: "Proactive issue detection",
  },
];

export default function ApiIntegrationPage() {
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
                <Webhook className="w-3 h-3 sm:w-4 sm:h-4" />
                API Integration
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Tools Should
                <br />
                <span className="gradient-text">Talk to Each Other.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                As a startup, you rely on a dozen different tools to run your business. When these systems don&apos;t communicate, you&apos;re stuck with manual data entry, disconnected customer experiences, and inefficient workflows.
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
                You&apos;re wasting time and creating data silos. Your CRM, email platform, payment processor, and analytics tools don&apos;t talk to each other, forcing you into manual work that slows down your growth and creates opportunities for errors.
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
                I specialize in API integration, connecting your website and applications to the third-party services you depend on. I build seamless, automated workflows that save you time, reduce errors, and create a cohesive tech stack that just works.
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
                A comprehensive API integration strategy that connects all your tools and automates your workflows
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
          title="Ready to Build a Fully"
          subtitle="Connected Tech Stack?"
          description="Let's connect your tools and automate your workflows so you can get back to building your business. Book a free consultation to discuss your integration needs."
          primaryButtonText="Discuss Your Integration Needs"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <Webhook className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free Integration Audit",
              description: "Get a comprehensive analysis of your current tech stack"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Strategy Call",
              description: "Quick call to discuss your integration opportunities"
            },
            {
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Automation Roadmap",
              description: "Walk away with a clear plan to connect your tools"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
