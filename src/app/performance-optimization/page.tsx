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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Performance & Speed Optimization | Jack Osei",
  description:
    "Professional website performance optimization services for startups. Transform slow websites into lightning-fast experiences that convert better and rank higher.",
  keywords:
    "performance optimization, website speed, Core Web Vitals, page load speed, website optimization, LCP, FID, CLS, CDN, caching",
  openGraph: {
    title: "Performance & Speed Optimization | Jack Osei",
    description:
      "Professional website performance optimization services for startups. Transform slow websites into lightning-fast experiences.",
    type: "website",
  },
};

const benefits = [
  {
    icon: <Gauge className="w-4 h-4" />,
    title: "Comprehensive Speed Audit",
    description:
      "A deep dive into your website to identify the exact bottlenecks—from bloated images and render-blocking code to slow server response times.",
  },
  {
    icon: <Activity className="w-4 h-4" />,
    title: "Core Web Vitals Optimization",
    description:
      "I'll fine-tune your site to meet Google's standards for a great user experience (LCP, FID, CLS), which can directly improve your search rankings.",
  },
  {
    icon: <Download className="w-4 h-4" />,
    title: "Image & Asset Compression",
    description:
      "Optimizing all images and code to ensure they load instantly without sacrificing quality or visual appeal.",
  },
  {
    icon: <GlobeIcon className="w-4 h-4" />,
    title: "Caching & CDN Implementation",
    description:
      "Setting up advanced caching strategies and a Content Delivery Network (CDN) to deliver your content to users around the world in a fraction of a second.",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Before-and-After Performance Report",
    description:
      "Tangible proof of the improvements, showing you exactly how much faster your site has become and the impact on your user experience.",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Conversion Rate Boost",
    description:
      "Faster sites convert better. Every second saved can mean a 7% increase in conversions and improved user satisfaction.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "Slow Page Load Times",
    description:
      "Your website takes 3+ seconds to load, causing visitors to bounce before they even see your content. Every second costs you customers.",
    impact: "High bounce rates and lost conversions",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Poor Core Web Vitals",
    description:
      "Your site fails Google's Core Web Vitals tests (LCP, FID, CLS), hurting your search rankings and user experience scores.",
    impact: "Lower search rankings and poor UX",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Unoptimized Images & Assets",
    description:
      "Large, unoptimized images and bloated code files are slowing down your site and eating up bandwidth unnecessarily.",
    impact: "Slow loading and high bandwidth costs",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "No Caching Strategy",
    description:
      "Your site doesn't leverage caching or CDN, meaning every user request hits your server and loads from scratch.",
    impact: "Unnecessary server load and slow delivery",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "Mobile Performance Issues",
    description:
      "Your site performs poorly on mobile devices, where most of your traffic likely comes from. Mobile users expect instant results.",
    impact: "Frustrated mobile users and lost sales",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "SEO Performance Penalty",
    description:
      "Google penalizes slow websites in search rankings. Your competitors with faster sites are ranking higher than you.",
    impact: "Poor search visibility and lost organic traffic",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "Performance Audit & Analysis",
    description:
      "I conduct a comprehensive audit to identify exactly what's slowing down your site and prioritize the biggest impact fixes.",
    benefit: "Targeted optimization strategy",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Core Web Vitals Optimization",
    description:
      "Optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) to meet Google's standards.",
    benefit: "Better search rankings and UX scores",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Asset Optimization",
    description:
      "Compress images, minify code, and optimize all assets to reduce file sizes while maintaining quality and functionality.",
    benefit: "Faster loading and reduced bandwidth",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Advanced Caching Implementation",
    description:
      "Set up browser caching, server-side caching, and CDN to serve content faster to users worldwide.",
    benefit: "Lightning-fast content delivery",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Mobile-First Optimization",
    description:
      "Ensure your site performs excellently on mobile devices with optimized images, responsive design, and touch-friendly interactions.",
    benefit: "Great mobile user experience",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Performance Monitoring",
    description:
      "Set up ongoing monitoring to track your site's performance and catch issues before they impact your users.",
    benefit: "Proactive performance management",
  },
];

export default function PerformanceOptimizationPage() {
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
                <Gauge className="w-3 h-3 sm:w-4 sm:h-4" />
                Performance & Speed Optimization
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                A Slow Website is a
                <br />
                <span className="gradient-text">Silent Business Killer.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Did you know that a 1-second delay in page load time can lead to a 7% reduction in conversions?
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
                In the startup world, speed is everything. A slow, clunky website doesn't just frustrate users—it actively costs you customers, damages your brand reputation, and hurts your search engine rankings. Your visitors won't wait, and Google won't rank you well if your site is slow.
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
                I specialize in performance optimization, turning slow, frustrating websites into lightning-fast digital experiences. By focusing on Core Web Vitals and modern best practices, I'll make your site faster for your users and more attractive to Google.
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
                A comprehensive performance optimization strategy designed to make your website blazing fast
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
          title="Ready to Make Your"
          subtitle="Website Blazing Fast?"
          description="Stop losing customers to a slow website. Let's make your site so fast, your users won't know what hit them. Book a free speed test to see how much faster we can make your site."
          primaryButtonText="Get a Free Website Speed Test"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free Speed Test",
              description: "Get a comprehensive analysis of your current website performance"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Review",
              description: "Quick call to discuss your performance optimization opportunities"
            },
            {
              icon: <Timer className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Speed Improvement Plan",
              description: "Walk away with a clear roadmap to make your site lightning fast"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
