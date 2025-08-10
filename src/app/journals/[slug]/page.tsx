import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getJournals, getJournalBySlug } from '@/lib/contentful'
import { format } from 'date-fns'
import RichText from '@/components/rich-text'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export const revalidate = 60

export async function generateStaticParams() {
  const journals = await getJournals(1000)
  return journals.map((journal) => ({ slug: journal.fields.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const entry = await getJournalBySlug(slug)
  if (!entry) return { title: 'Journal Not Found' }

  const ogImage = entry.fields.coverImageUrl

  return {
    title: entry.fields.metaTitle || entry.fields.title,
    description: entry.fields.metaDescription ?? entry.fields.excerpt,
    keywords: entry.fields.metaKeywords,
    openGraph: {
      title: entry.fields.ogTitle || entry.fields.title,
      description: entry.fields.ogDescription ?? entry.fields.excerpt,
      images: ogImage ? [{ url: ogImage }] : [],
      type: 'article',
      publishedTime: entry.fields.publishedDate,
    },
    alternates: {
      canonical: entry.fields.canonicalUrl || `/journals/${slug}`,
    },
  }
}

export default async function JournalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const entry = await getJournalBySlug(slug)
  if (!entry) notFound()

  const dateLabel = entry.fields.publishedDate ? format(new Date(entry.fields.publishedDate), 'PPP') : null

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navigation />
      <article className="min-h-screen pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              {entry.fields.title}
            </h1>

            {/* Cover Image */}
            {entry.fields.coverImageUrl && (
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-6 sm:mb-8">
                <Image
                  src={entry.fields.coverImageUrl}
                  alt={entry.fields.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                />
              </div>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-muted-foreground mb-6">
              {dateLabel && <time dateTime={entry.fields.publishedDate}>{dateLabel}</time>}
              {entry.fields.readingTime && <span>• {entry.fields.readingTime} min read</span>}
              {entry.fields.author && <span>• By {entry.fields.author}</span>}
            </div>

            {/* Excerpt */}
            {entry.fields.excerpt && (
              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                {entry.fields.excerpt}
              </p>
            )}

            {/* Tags */}
            {!!entry.fields.tags?.length && (
              <div className="flex flex-wrap gap-2">
                {entry.fields.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-accent-highlight/10 text-accent-highlight rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Content */}
          <div className="prose prose-lg sm:prose-xl max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent-highlight prose-a:no-underline hover:prose-a:underline">
            <RichText document={entry.fields.content} />
          </div>
        </div>
      </article>
      <Footer />
    </div>
  )
}


