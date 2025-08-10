"use client"

import { Rocket, Search, Code, Zap } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";

const processSteps = [
  {
    icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Discovery & Strategy",
    description: "We start by understanding your business goals, target audience, and conversion objectives. This isn't just about what looks good—it's about what converts.",
    duration: "1-2 days"
  },
  {
    icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Design & Development",
    description: "Rapid prototyping and development using modern technologies. I focus on speed without sacrificing quality or conversion optimization.",
    duration: "1-4 weeks"
  },
  {
    icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: "Launch & Optimize",
    description: "Quick deployment followed by performance monitoring and conversion optimization. Your website starts working for you immediately.",
    duration: "Ongoing"
  }
];

export default function ProcessSection() {
  return (
    <section className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4" />
              Process
            </div>
          </AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            From Idea to
            <br />
            <span className="gradient-text">Revenue in Weeks</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A proven process that gets your website live quickly and generating revenue fast. 
            No endless revisions or technical delays—just results.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {processSteps.map((step, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="card-hover group p-6 sm:p-8 bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 "
            >
              <div className="text-accent-highlight mb-4 sm:mb-6">
                {step.icon}
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                {step.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Duration: {step.duration}
                </span>
                <div className="w-8 h-8 bg-accent-highlight/10 rounded-full flex items-center justify-center">
                  <span className="text-xs sm:text-sm font-bold text-accent-highlight">
                    {index + 1}
                  </span>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
} 