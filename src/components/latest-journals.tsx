"use client"

import { BookOpen, ArrowRight } from "lucide-react";
import AnimateIn from "@/components/AnimateIn";
import JournalCard from "@/components/journal-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { JournalEntry } from "@/lib/contentful";

interface LatestJournalsProps {
  journals: JournalEntry[];
}

export default function LatestJournals({ journals }: LatestJournalsProps) {
  // Only show the first 3 journals
  const latestJournals = journals.slice(0, 3);

  // Don't render if no journals
  if (!latestJournals.length) {
    return null;
  }

  return (
    <section id="latest-journals" className="section-padding bg-background section-divider">
      <div className="max-w-7xl mx-auto">
        <AnimateIn className="text-center mb-12 sm:mb-20">
          <AnimateIn delay={0.2}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              Latest Journals
            </div>
          </AnimateIn>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
            Fresh Perspectives
            <br />
            <span className="gradient-text">from the Field</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real stories, lessons learned, and insights from building startups and growing businesses. 
            No fluff, just actionable advice from the trenches.
          </p>
        </AnimateIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {latestJournals.map((journal, index) => (
            <AnimateIn
              key={journal.sys.id}
              delay={index * 0.1}
              className="h-full"
            >
              <JournalCard journal={journal} />
            </AnimateIn>
          ))}
        </div>
        
        {/* CTA Section */}
        <AnimateIn delay={0.4} className="text-center">
          <div className="bg-gradient-to-r from-accent-highlight/5 to-accent-highlight/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              Want More Insights?
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Explore all my journal entries for deeper dives into startup growth, 
              technical challenges, and lessons learned along the way.
            </p>
            <Link href="/journals">
              <Button 
                variant="primary" 
                size="lg" 
                showArrow
                className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
              >
                View All Journals
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
