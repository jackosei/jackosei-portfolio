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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Web Design & Development Services | Jack Osei",
  description:
    "Professional web design and development services for startups. Build your digital foundation with custom, conversion-focused websites that establish credibility and drive growth. Based in Dubai, UAE and serving Ghana and worldwide.",
  keywords:
    "web design, web development, startup websites, custom websites, conversion-focused design, mobile-responsive, CMS, Next.js, Webflow, WordPress, Dubai web developer, Ghana web developer, African web developer",
  alternates: {
    canonical: '/web-design-development',
  },
  openGraph: {
    title: "Web Design & Development Services | Jack Osei",
    description:
      "Professional web design and development services for startups. Build your digital foundation with custom, conversion-focused websites. Based in Dubai, UAE and serving Ghana and worldwide.",
    url: 'https://jackosei.com/web-design-development',
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Web Design & Development Services | Jack Osei",
    description: "Professional web design and development services for startups. Build your digital foundation with custom, conversion-focused websites. Based in Dubai, UAE and serving Ghana and worldwide.",
  },
};

const relatedServices = [
  {
    icon: <Code className="w-4 h-4 sm:w-6 sm:h-6" />,
    title: "The MVP Launchpad",
    description:
      "Let&apos;s get your idea into the market, fast. I build lean, scalable, and conversion-focused MVPs using React, Next.js, and Node.js.",
    href: "/mvp-development",
  },
  {
    icon: <ShoppingCart className="w-4 h-4 sm:w-6 sm:h-6" />,
    title: "The E-commerce Accelerator",
    description:
      "Ready to sell? I create Shopify & WooCommerce experiences that are engineered to maximize sales and conversions.",
    href: "/ecommerce-development",
  },
  {
    icon: <Search className="w-4 h-4 sm:w-6 sm:h-6" />,
    title: "Startup SEO & Growth",
    description:
      "SEO strategies that get your startup discovered by the right audience. Data-driven content and technical optimization.",
    href: "/seo-optimization",
  },
  {
    icon: <Zap className="w-4 h-4 sm:w-6 sm:h-6" />,
    title: "Performance & Speed",
    description:
      "Lightning-fast websites that convert better and rank higher. Core Web Vitals optimization for better user experience.",
    href: "/performance-optimization",
  },
  {
    icon: <Users className="w-4 h-4 sm:w-6 sm:h-6" />,
    title: "User Experience Strategy",
    description:
      "UX design that reduces friction and increases conversions. User research, prototyping, and testing focused on business outcomes.",
    href: "/user-experience-design",
  },
];

const benefits = [
  {
    icon: <Target className="w-4 h-4" />,
    title: "Custom, On-Brand Design",
    description:
      "A website that looks and feels like your company, not a generic template. We&apos;ll create a visual identity that you can be proud of.",
  },
  {
    icon: <ZapIcon className="w-4 h-4" />,
    title: "Conversion-Focused Layout",
    description:
      "We&apos;ll strategically design each page to guide visitors toward a key action, whether it&apos;s signing up for a demo, joining a waitlist, or making a purchase.",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Mobile-First & Responsive",
    description:
      "Your site will look and work perfectly on any device, from a desktop monitor to a smartphone.",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Easy-to-Manage CMS",
    description:
      "You and your team will be able to update content, publish blog posts, and add new pages without needing to call a developer for every little change.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    title: "Built to Scale",
    description:
      "The site will be built on a solid technical foundation that can grow with your startup, from your first 100 visitors to your first 100,000.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Analytics Built-In",
    description:
      "Every site comes with comprehensive analytics and tracking built-in, so you can understand your visitors and optimize for better conversions.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Generic Templates",
    description:
      "Your website looks like everyone&apos;s. No brand personality, no differentiation, no reason for visitors to remember you.",
    impact: "Lowers credibility and trust",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Slow Loading Times",
    description:
      "Visitors leave before your site even loads. Google penalizes slow sites, and users expect instant results.",
    impact: "Lost conversions and poor SEO",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Poor Mobile Experience",
    description:
      "Your site looks broken on phones and tablets. 60% of web traffic is mobile - you&apos;re losing half your potential customers.",
    impact: "Frustrated users and high bounce rates",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "No Clear Conversion Path",
    description:
      "Visitors don&apos;t know what to do next. No clear calls-to-action, confusing navigation, missed opportunities.",
    impact: "Low conversion rates and wasted traffic",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Difficult to Update",
    description:
      "Every content change requires a developer. You&apos;re stuck waiting for updates or paying for every small change.",
    impact: "Stale content and high maintenance costs",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "Poor SEO Performance",
    description:
      "Your site doesn&apos;t rank well in search engines. Technical issues, slow speed, and poor content structure hurt visibility.",
    impact: "Invisible to potential customers",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Strategic Design Process",
    description:
      "I start with your business goals and user needs, not just aesthetics. Every design decision serves a purpose.",
    benefit: "Purpose-driven design that converts",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Performance-First Development",
    description:
      "Built with modern tools and best practices. Fast loading, optimized for search engines, and future-proof.",
    benefit: "Lightning-fast sites that rank well",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Mobile-First Approach",
    description:
      "Designed for mobile first, then enhanced for desktop. Responsive design that works perfectly on every device.",
    benefit: "Great experience on all devices",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Conversion Optimization",
    description:
      "Strategic placement of CTAs, clear user journeys, and A/B testing to maximize your conversion rates.",
    benefit: "Higher conversion rates and ROI",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Easy Content Management",
    description:
      "User-friendly CMS that lets you update content, add pages, and manage your site without technical knowledge.",
    benefit: "Full control over your content",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "SEO & Growth Ready",
    description:
      "Built with SEO best practices, fast loading times, and scalable architecture for long-term growth.",
    benefit: "Better search rankings and traffic",
  },
];

export default function WebDesignDevelopmentPage() {
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
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
              Web Design & Development
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Website is Your
              <br />
              <span className="gradient-text">Digital Pitch Deck</span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Is it Making the Right Impression?
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
              Most startup websites are holding back their business instead of
              driving growth. For an early-stage startup, your website is often
              the first interaction a potential customer, investor, or new hire
              has with your brand. It has to do more than just exist; it has to
              build trust, communicate your value, and convince visitors
              you&apos;re the real deal. A generic template or a slow, confusing
              site sends the wrong message—that you don&apos;t pay attention to
              detail.
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
              I build conversion-focused websites and web applications that
              serve as your startup&apos;s digital headquarters. Using modern
              tools like Webflow, WordPress, and Next.js, I create fast,
              beautiful, and effective platforms that establish your credibility, pull in organic traffic, and turn visitors into paying customers.
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
              A comprehensive web solution designed to grow with your business
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
          subtitle="Digital Foundation?"
          description="Let's create a website that opens doors and builds the credibility your startup deserves. Book a free strategy call to discuss your digital goals."
          primaryButtonText="Book a Free Strategy Call"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free Strategy Call",
              description: "Get personalized advice for your website project"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Session",
              description: "Quick, focused discussion about your digital needs"
            },
            {
              icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Actionable Plan",
              description: "Walk away with specific next steps for your project"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
