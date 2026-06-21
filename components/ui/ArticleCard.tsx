import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Article } from '@/lib/types'

interface ArticleCardProps {
  article: Article
  variant?: 'default' | 'featured' | 'compact'
}

const CATEGORY_COLORS: Record<string, string> = {
  REGULATORY: 'text-gr-amber',
  PAYMENTS: 'text-gr-green',
  COMPLIANCE: 'text-gr-amber',
  MARKET: 'text-gr-green',
  INDUSTRY: 'text-gr-cyan',
  RISK: 'text-gr-red',
}

const DESTINATION_CONFIG = {
  greenrails: { label: 'GREENRAILS', color: 'text-gr-green' },
  getmoneynews: { label: 'GETMONEYNEWS', color: 'text-gr-cyan' },
  both: { label: 'GR + GMN', color: 'text-gr-amber' },
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const destConfig = DESTINATION_CONFIG[article.destination]
  const catColor = article.category?.name ? (CATEGORY_COLORS[article.category.name] || 'text-gr-text-muted') : 'text-gr-text-muted'

  if (variant === 'compact') {
    return (
      <Link href={`/content/${article.slug}`} className="group flex items-start gap-3 py-3 border-b border-gr-border hover:border-gr-green/30 transition-colors">
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-gr-text group-hover:text-gr-green transition-colors line-clamp-2 leading-snug">
            {article.title}
          </p>
          <span className="text-[10px] text-gr-text-dim mt-0.5 block">{article.published_at}</span>
        </div>
        <ArrowRight className="h-3 w-3 text-gr-text-dim group-hover:text-gr-green transition-colors shrink-0 mt-0.5" />
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link href={`/content/${article.slug}`} className="group block border border-gr-border bg-gr-surface p-6 hover:border-gr-green/40 transition-all">
        <div className="flex items-center gap-2 mb-3">
          {article.category && (
            <span className={`text-[10px] font-bold tracking-widest ${catColor}`}>
              {article.category.name}
            </span>
          )}
          <span className="text-gr-text-dim text-[10px]">|</span>
          <span className={`text-[10px] font-bold tracking-widest ${destConfig.color}`}>
            {destConfig.label}
          </span>
          {article.featured && (
            <span className="ml-auto text-[10px] border border-gr-green/30 text-gr-green px-1.5 py-0.5 tracking-wider">
              FEATURED
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold text-gr-text mb-3 leading-snug group-hover:text-gr-green transition-colors">
          {article.title}
        </h3>
        {article.excerpt && (
          <p className="text-sm text-gr-text-muted leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
        )}
        <div className="flex items-center justify-between pt-3 border-t border-gr-border">
          <div>
            {article.author && (
              <span className="text-[11px] text-gr-cyan">{article.author.name}</span>
            )}
            {article.published_at && (
              <span className="text-[11px] text-gr-text-dim ml-2">— {article.published_at}</span>
            )}
          </div>
          <span className="text-[11px] text-gr-green flex items-center gap-1">
            Read <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link href={`/content/${article.slug}`} className="group block border border-gr-border bg-gr-surface p-4 hover:border-gr-green/40 hover:bg-gr-surface-2 transition-all">
      <div className="flex items-center gap-2 mb-2">
        {article.category && (
          <span className={`text-[10px] font-bold tracking-widest ${catColor}`}>
            {article.category.name}
          </span>
        )}
        <span className={`text-[10px] tracking-wider ${destConfig.color}`}>
          {destConfig.label}
        </span>
      </div>
      <h3 className="text-sm font-bold text-gr-text mb-2 leading-snug group-hover:text-gr-green transition-colors line-clamp-2">
        {article.title}
      </h3>
      <div className="flex items-center justify-between mt-3">
        {article.author && (
          <span className="text-[10px] text-gr-text-muted">{article.author.name}</span>
        )}
        {article.published_at && (
          <span className="text-[10px] text-gr-text-dim">{article.published_at}</span>
        )}
      </div>
    </Link>
  )
}
