"use client"

import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Jack delivered an exceptional website that perfectly captured our brand vision. His attention to detail and technical expertise exceeded our expectations.",
    companyLogo: "/logos/svoger-1.svg",
  },
  {
    name: "Michael Chen",
    role: "Founder, DigitalFlow",
    content: "Working with Jack was a pleasure. He understood our requirements perfectly and delivered a website that has significantly improved our online presence.",
    companyLogo: "/logos/paterson-zochonis.svg",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, InnovateLab",
    content: "Jack's creative approach and technical skills resulted in a website that not only looks great but also performs exceptionally well. Highly recommended!",
    companyLogo: "/logos/octopus-3.svg",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12 sm:mb-16">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Testimonials
            </div>
          </AnimateIn>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Founders Who
            <br />
            <span className="gradient-text">Got Results</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take my word for it. Here&apos;s what startup founders have to say 
            about the business impact of working together.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateIn
              key={index}
              delay={index * 0.1}
              className="bg-background p-6 sm:p-8 rounded-xl sm:rounded-2xl border hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="w-full h-12 flex items-center justify-start">
                  <Image
                    src={testimonial.companyLogo}
                    alt={`${testimonial.name} company logo`}
                    width={96}
                    height={48}
                    className="object-contain w-auto h-12"
                  />
                </div>
               
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
} 