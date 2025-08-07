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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactCTA from "@/components/contact-cta";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "UI/UX Design | Jack Osei",
  description:
    "Professional UI/UX design services for startups. Transform confusing user experiences into intuitive, conversion-focused designs that drive business results.",
  keywords:
    "UI design, UX design, user experience, user interface, conversion optimization, usability testing, wireframing, prototyping, user journey mapping",
  openGraph: {
    title: "UI/UX Design | Jack Osei",
    description:
      "Professional UI/UX design services for startups. Transform confusing user experiences into intuitive, conversion-focused designs.",
    type: "website",
  },
};

const benefits = [
  {
    icon: <Route className="w-4 h-4" />,
    title: "User Journey Mapping",
    description:
      "We'll map out the ideal path a customer takes on your site, from discovery to conversion, and identify where they're getting stuck.",
  },
  {
    icon: <Eye className="w-4 h-4" />,
    title: "Friction & Heuristic Analysis",
    description:
      "A thorough review of your current site to find and eliminate confusing navigation, unclear calls-to-action, and other conversion-killing roadblocks.",
  },
  {
    icon: <Layers className="w-4 h-4" />,
    title: "Wireframing & Prototyping",
    description:
      "Creating low-fidelity and high-fidelity mockups of new, improved user flows that we can test before a single line of code is written.",
  },
  {
    icon: <TestTube className="w-4 h-4" />,
    title: "Usability Testing",
    description:
      "Watching real users interact with your prototype to gather direct feedback and ensure our design decisions are based on data, not guesswork.",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Conversion-Focused UI & UX Redesign",
    description:
      "A clear, actionable plan to implement a user experience that not only looks great but is scientifically designed to improve your key business metrics.",
  },
  {
    icon: <UserCheck className="w-4 h-4" />,
    title: "Data-Driven Design Decisions",
    description:
      "Every design choice is backed by user research and testing, ensuring your new UX actually improves your conversion rates and user satisfaction.",
  },
];

const problems = [
  {
    icon: <AlertTriangle className="w-4 h-4" />,
    title: "High Traffic, Low Conversions",
    description:
      "You're getting plenty of visitors, but they're not taking the actions you want. Your design might be beautiful, but the user experience is broken.",
    impact: "Wasted traffic and lost revenue",
  },
  {
    icon: <Clock className="w-4 h-4" />,
    title: "Confusing User Journeys",
    description:
      "Users arrive on your site and immediately get lost. They can't figure out what to do next or how to find what they're looking for.",
    impact: "High bounce rates and frustrated users",
  },
  {
    icon: <Shield className="w-4 h-4" />,
    title: "Unclear Calls-to-Action",
    description:
      "Your buttons and links don't clearly communicate what will happen next, leaving users uncertain about taking action.",
    impact: "Missed conversion opportunities",
  },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    title: "Poor Mobile Experience",
    description:
      "Your site works on desktop but falls apart on mobile, where most of your users are trying to interact with your brand.",
    impact: "Lost mobile customers and poor engagement",
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: "No User Research",
    description:
      "You're making design decisions based on assumptions rather than real user behavior and feedback.",
    impact: "Designs that don't meet user needs",
  },
  {
    icon: <Search className="w-4 h-4" />,
    title: "Inconsistent Design Patterns",
    description:
      "Your site lacks design consistency, making it harder for users to learn and navigate your interface effectively.",
    impact: "Poor usability and brand confusion",
  },
];

const solutions = [
  {
    icon: <Lightbulb className="w-4 h-4" />,
    title: "User Research & Analysis",
    description:
      "I conduct thorough user research to understand how your target audience thinks, feels, and behaves when using your site.",
    benefit: "Designs based on real user needs",
  },
  {
    icon: <Zap className="w-4 h-4" />,
    title: "Information Architecture Redesign",
    description:
      "Restructure your site's navigation and content organization to create intuitive, logical user flows that guide visitors to conversion.",
    benefit: "Clear, intuitive user journeys",
  },
  {
    icon: <Sparkles className="w-4 h-4" />,
    title: "Conversion-Focused UI Design",
    description:
      "Design interfaces that not only look great but are strategically crafted to reduce friction and increase conversion rates.",
    benefit: "Higher conversion rates and engagement",
  },
  {
    icon: <Target className="w-4 h-4" />,
    title: "Usability Testing & Iteration",
    description:
      "Test designs with real users to identify issues and opportunities, then iterate based on actual user feedback.",
    benefit: "Proven, user-validated solutions",
  },
  {
    icon: <CheckCircle className="w-4 h-4" />,
    title: "Mobile-First UX Design",
    description:
      "Design for mobile first, ensuring your site provides an excellent experience across all devices and screen sizes.",
    benefit: "Great experience on all devices",
  },
  {
    icon: <BarChart3 className="w-4 h-4" />,
    title: "Design System Implementation",
    description:
      "Create consistent design patterns and components that improve usability and make future updates easier and more cohesive.",
    benefit: "Consistent, scalable design",
  },
];

export default function UserExperienceDesignPage() {
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
                <MousePointer className="w-3 h-3 sm:w-4 sm:h-4" />
                UI/UX Design
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                High Traffic but Low Conversions?
                <br />
                <span className="gradient-text">Your UX Might Be the Problem.</span>
              </h1>

              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Getting visitors to your website is only half the battle. If they arrive and are immediately confused, frustrated, or can&apos;t figure out what to do next, they will leave.
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
                A beautiful design is worthless if the user experience is broken. You&apos;re leaving money on the table because of friction your users are facing. Most startups focus on getting traffic but ignore the critical step of optimizing how users interact with their site.
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
                I provide User Interface (UI) and User Experience (UX) Design services focused on one thing: business results. I dig into how real users interact with your site to identify points of friction and then design intuitive, delightful paths that guide them toward taking action.
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
                A comprehensive UX design strategy focused on improving your business metrics through better user experience
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
          title="Ready to Turn Frustrated"
          subtitle="Users into Happy Customers?"
          description="Let's uncover the hidden opportunities in your user experience and build a website that people love to use. Book a free UX teardown to see how we can improve your conversion rates."
          primaryButtonText="Request a Free UX Teardown"
          secondaryButtonText="Quick Contact"
          valueProps={[
            {
              icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Free UX Teardown",
              description: "Get a comprehensive analysis of your current user experience"
            },
            {
              icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "15-Minute Review",
              description: "Quick call to discuss your UX improvement opportunities"
            },
            {
              icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent-highlight" />,
              title: "Conversion Roadmap",
              description: "Walk away with a clear plan to improve your user experience"
            }
          ]}
        />
      </div>

      <Footer />
    </div>
  );
}
