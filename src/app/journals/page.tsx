import type { Metadata } from "next";
import { getJournals } from "@/lib/contentful";
import JournalCard from "@/components/journal-card";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Journals",
  description:
    "Insights, notes, and lessons from building conversion-focused web experiences.",
  alternates: { canonical: "/journals" },
};

export default async function JournalsPage() {
  const journals = await getJournals(24);
  
  // Debug logging
  console.log('Journals page received:', {
    journalsType: typeof journals,
    journalsLength: journals?.length,
    firstJournal: journals?.[0],
    firstJournalKeys: journals?.[0] ? Object.keys(journals[0]) : []
  });
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-20 sm:pb-24 relative overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-72 sm:h-72 bg-accent-highlight/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-accent-highlight/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <header className="text-center mb-12 sm:mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-accent-highlight/10 text-accent-highlight rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent-highlight rounded-full animate-pulse"></div>
              Journal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-foreground">
              Ideas, experiments, and
              <br />
              <span className="gradient-text">things I am learning</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Short, useful reads on product, design, performance, and indie
              founder life.
            </p>
          </header>

          {journals.length === 0 ? (
            <div className="text-center">
              <p className="text-muted-foreground text-lg">
                No journal entries yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {journals.map((j) => (
                <JournalCard key={j.sys.id} journal={j} />
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
