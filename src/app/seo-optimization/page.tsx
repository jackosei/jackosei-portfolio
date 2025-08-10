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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "SEO Optimization Services | Jack Osei",
  description:
    "Professional SEO optimization services for startups. Build sustainable organic growth through strategic keyword targeting, technical SEO, and content marketing. Based in Dubai, UAE and serving Ghana and worldwide.",
  keywords:
    "SEO optimization, search engine optimization, startup SEO, organic growth, keyword strategy, technical SEO, content marketing, local SEO, Dubai SEO services, Ghana SEO services, African SEO services",
  alternates: {
    canonical: '/seo-optimization',
  },
  openGraph: {
    title: "SEO Optimization Services | Jack Osei",
    description:
      "Professional SEO optimization services for startups. Build sustainable organic growth through strategic keyword targeting and content marketing. Based in Dubai, UAE and serving Ghana and worldwide.",
    url: 'https://jackosei.com/seo-optimization',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Optimization Services | Jack Osei",
    description: "Professional SEO optimization services for startups. Build sustainable organic growth through strategic keyword targeting and content marketing. Based in Dubai, UAE and serving Ghana and worldwide.",
  },
};

const benefits = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "Startup Keyword Strategy",
    description:
      "We'll identify the high-intent, low-competition keywords your ideal customers are using to find solutions like yours.",
  },
  {
    icon: <Code className="w-4 h-4" />,
    title: "On-Page & Technical SEO",
    description:
      "I'll optimize your site's structure, content, meta tags, and schema markup to clearly signal your relevance to search engines.",
  },
  {
    icon: <FileText className="w-4 h-4" />,
    title: "Content Marketing Roadmap",
    description:
      "A strategic plan for creating blog posts and landing pages that answer your customers' questions and attract organic traffic.",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    title: "Local SEO (If Applicable)",
    description:
      "Optimization for Google Business Profile and local search terms to capture customers in your geographic area.",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Performance Analytics & Reporting",
    description:
      "A clear, easy-to-understand dashboard to track your rankings, traffic, and the real business impact of our SEO efforts.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Sustainable Growth Engine",
    description:
      "Build a long-term asset that continues to drive qualified traffic and leads without ongoing ad spend.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Invisible to Search Engines",
    description:
      "Your startup doesn't appear when potential customers search for solutions like yours. You're missing out on high-intent traffic.",
    impact: "Lost opportunities and revenue",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Over-Reliance on Paid Ads",
    description:
      "You're spending thousands on ads that stop working the moment you turn them off. No sustainable traffic source.",
    impact: "High customer acquisition costs",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Poor Search Rankings",
    description:
      "Your site ranks on page 3 or worse for important keywords. Most users never see you in search results.",
    impact: "Minimal organic visibility",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "No Content Strategy",
    description:
      "Your blog posts don't target the right keywords or answer customer questions. Content exists but doesn't drive traffic.",
    impact: "Wasted content creation efforts",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Wrong Audience Targeting",
    description:
      "You're ranking for keywords that don't match your ideal customer profile. Traffic comes but doesn't convert.",
    impact: "Low-quality leads and poor conversion",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "No SEO Foundation",
    description:
      "Your site has technical issues that prevent search engines from understanding and ranking your content properly.",
    impact: "Search engines can't find you",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Strategic Keyword Research",
    description:
      "I identify high-intent, low-competition keywords that your ideal customers actually search for.",
    benefit: "Target the right audience",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Technical SEO Optimization",
    description:
      "Fix site structure, speed, and technical issues that prevent search engines from ranking your content.",
    benefit: "Better search engine visibility",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Content Strategy Development",
    description:
      "Create a roadmap for content that answers customer questions and targets valuable keywords.",
    benefit: "Organic traffic growth",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "On-Page SEO Implementation",
    description:
      "Optimize meta tags, headings, and content structure to clearly signal relevance to search engines.",
    benefit: "Higher search rankings",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Local SEO (When Applicable)",
    description:
      "Optimize for local search terms and Google Business Profile to capture geographically relevant customers.",
    benefit: "Local market dominance",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Performance Tracking",
    description:
      "Set up comprehensive analytics to track rankings, traffic, and the business impact of SEO efforts.",
    benefit: "Data-driven optimization",
  },
];

export default function SeoOptimizationPage() {
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
                <Search className="w-3 h-3 sm:w-4 sm:h-4" />
                SEO Optimization
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Stop Paying for Every Click.
                <br />
                <span className="gradient-text">Start Owning Your Traffic.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Relying solely on paid ads for growth is like renting your customers—the moment you stop paying, the traffic disappears.
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
                For sustainable, long-term growth, you need to show up when your ideal customers are actively searching for a solution. If you&apos;re not on the first page of Google, you&apos;re invisible. Most startups rely too heavily on paid advertising, creating a dependency that disappears when budgets are cut.
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
                I help startups build a powerful, long-term growth asset through foundational Search Engine Optimization (SEO). My approach is simple: get your startup discovered by the right audience by creating a website that both users and search engines love.
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
                A comprehensive SEO strategy designed to build sustainable organic growth
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
          title="Ready to Build Your"
          subtitle="Organic Growth Engine?"
          description="Let's create an SEO strategy that brings you qualified leads for years to come. Book a free consultation to discuss your organic growth goals."
          primaryButtonText="Book a Free SEO Consultation"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <Search className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free SEO Audit",
              description: "Get a comprehensive analysis of your current SEO performance"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Strategy",
              description: "Quick call to discuss your organic growth opportunities"
            },
            {
              icon: <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Growth Roadmap",
              description: "Walk away with a clear plan to boost your search rankings"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
