import type { Document } from '@contentful/rich-text-types'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface RichTextProps {
  document: Document
}

export default function RichText({ document }: RichTextProps) {
  return (
    <div className="prose prose-slate dark:prose-invert prose-headings:font-heading prose-a:text-accent-highlight hover:prose-a:text-accent-highlight/80 max-w-none">
      {documentToReactComponents(document, {
        renderMark: {
          [MARKS.BOLD]: (text) => <strong>{text}</strong>,
          [MARKS.ITALIC]: (text) => <em>{text}</em>,
          [MARKS.CODE]: (text) => <code>{text}</code>,
        },
        renderNode: {
          [BLOCKS.HEADING_1]: (_node, children) => <h1>{children}</h1>,
          [BLOCKS.HEADING_2]: (_node, children) => <h2>{children}</h2>,
          [BLOCKS.HEADING_3]: (_node, children) => <h3>{children}</h3>,
          [BLOCKS.PARAGRAPH]: (_node, children) => <p>{children}</p>,
          [BLOCKS.UL_LIST]: (_node, children) => <ul>{children}</ul>,
          [BLOCKS.OL_LIST]: (_node, children) => <ol>{children}</ol>,
          [BLOCKS.QUOTE]: (_node, children) => <blockquote>{children}</blockquote>,
          [INLINES.HYPERLINK]: (node, children) => (
            <a href={(node.data as any).uri} target="_blank" rel="noreferrer">
              {children}
            </a>
          ),
        },
      })}
    </div>
  )
}


