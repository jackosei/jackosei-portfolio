import Image from 'next/image'
import Link from 'next/link'
import type { JournalEntry } from '@/lib/contentful'
import { format } from 'date-fns'

interface JournalCardProps {
  journal: JournalEntry
}

export default function JournalCard({ journal }: JournalCardProps) {
  // Safety check - ensure we have valid journal data
  if (!journal || !journal.fields || !journal.sys) {
    console.error('Invalid journal data received:', journal);
    return null;
  }
  
  const { fields } = journal
  const dateLabel = fields.publishedDate ? format(new Date(fields.publishedDate), 'PPP') : null
  
  // Handle author field - it might be an object or string
  const authorName = typeof fields.author === 'string' 
    ? fields.author 
    : (fields.author as any)?.fields?.name || 'Jack Osei'
  
  return (
    <Link href={`/journals/${fields.slug}`} className="card-hover group p-0">
      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg rounded-b-none">
        {fields.coverImageUrl ? (
          <Image
            src={fields.coverImageUrl}
            alt={fields.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={false}
          />
        ) : (
          <div className="w-full h-full bg-muted" />
        )}
      </div>

      <div className="flex-1 flex flex-col p-6 sm:p-8">
        <div className="flex items-center gap-4 mb-2 text-xs sm:text-sm text-muted-foreground">
          {dateLabel && <span>{dateLabel}</span>}
          {fields.readingTime && (
            <span>• {fields.readingTime} min read</span>
          )}
        </div>
        
        <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-accent-highlight transition-colors duration-300">
          {fields.title}
        </h3>
        
        {fields.excerpt && (
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed line-clamp-3">
            {fields.excerpt}
          </p>
        )}
        
        <div className="mt-auto space-y-3">
          {authorName && (
            <p className="text-xs sm:text-sm text-muted-foreground">
              By {authorName}
            </p>
          )}
          
          {!!fields.tags?.length && (
            <div className="flex flex-wrap gap-2">
              {fields.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="text-xs sm:text-sm px-2 py-1 rounded-full bg-accent-highlight/10 text-accent-highlight">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}


