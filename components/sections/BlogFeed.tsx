import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  publishedAt: string
  readTime: string
  featured: boolean
  destination: 'greenrails' | 'getmoneynews' | 'both'
  href: string
}

const SAMPLE_ARTICLES: Article[] = [
  {
    id: '1',
    title: 'The SAFE Banking Act: What Cannabis Operators Need to Know in 2024',
    excerpt: 'Senate movement on SAFE Banking creates new opportunities for cannabis-adjacent businesses to access traditional banking services. Here is what operators need to prepare.',
    category: 'REGULATORY',
    author: 'Neuro Meta X',
    publishedAt: 'Jun 18, 2024',
    readTime: '5 min',
    featured: true,
    destination: 'both',
    href: '/content/safe-banking-act-2024',
  },
  {
    id: '2',
    title: 'ACH vs. Crypto: Building a Modern Payment Stack for Underserved Markets',
    excerpt: 'How fintech operators are combining traditional ACH rails with stablecoin settlement to reduce costs and reach unbanked populations.',
    category: 'PAYMENTS',
    author: 'Neuro Meta X',
    publishedAt: 'Jun 15, 2024',
    readTime: '7 min',
    featured: false,
    destination: 'greenrails',
    href: '/content/ach-vs-crypto-payment-stack',
  },
  {
    id: '3',
    title: 'FinCEN Rule 1071: Small Business Lending Data Collection Guide',
    excerpt: 'CFPB Rule 1071 compliance timeline and what lenders must collect. A practical guide for compliance teams navigating the new requirements.',
    category: 'COMPLIANCE',
    author: 'Neuro Meta X',
    publishedAt: 'Jun 12, 2024',
    readTime: '6 min',
    featured: false,
    destination: 'getmoneynews',
    href: '/content/cfpb-rule-1071-guide',
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  REGULATORY: 'text-gr-amber',
  PAYMENTS: 'text-gr-green',
  COMPLIANCE: 'text-gr-amber',
  MARKET: 'text-gr-green',
  INDUSTRY: 'text-gr-cyan',
  RISK: 'text-gr-red',
}

const DESTINATION_LABELS = {
  greenrails: { label: 'GREENRAILS', color: 'text-gr-green' },
  getmoneynews: { label: 'GETMONEYNEWS', color: 'text-gr-cyan' },
  both: { label: 'GREENRAILS + GMN', color: 'text-gr-amber' },
}

export function BlogFeed() {
  const featured = SAMPLE_ARTICLES.find((a) => a.featured)
  const rest = SAMPLE_ARTICLES.filter((a) => !a.featured)

  return (
    <section className="py-16 bg-gr-black border-b border-gr-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gr-green" />
              <span className="text-[11px] text-gr-green tracking-widest font-bold">CONTENT ENGINE</span>
            </div>
            <h2 className="text-2xl font-bold text-gr-text tracking-wide">
              LATEST <span className="text-gr-green">INTELLIGENCE</span>
            </h2>
            <p className="text-xs text-gr-text-muted mt-1">
              Reporting by <span className="text-gr-cyan">Neuro Meta X</span> — GreenRails &amp; GetMoneyNews.online
            </p>
          </div>
          <Link
            href="/content"
            className="flex items-center gap-1.5 text-xs text-gr-green hover:text-gr-green/80 tracking-wider uppercase transition-colors"
          >
            All Articles <ArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Featured article */}
          {featured && (
            <Link href={featured.href} className="lg:col-span-2 group border border-gr-border bg-gr-surface hover:border-gr-green/40 transition-all">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-bold tracking-widest ${CATEGORY_COLORS[featured.category] || 'text-gr-text-muted'}`}>
                    {featured.category}
                  </span>
                  <span className="text-gr-text-dim text-[10px]">|</span>
                  <span className={`text-[10px] font-bold tracking-widest ${DESTINATION_LABELS[featured.destination].color}`}>
                    {DESTINATION_LABELS[featured.destination].label}
                  </span>
                  <span className="ml-auto text-[10px] text-gr-text-dim">{featured.readTime} read</span>
                </div>

                <h3 className="text-lg font-bold text-gr-text mb-3 leading-snug group-hover:text-gr-green transition-colors">
                  {featured.title}
                </h3>
                <p className="text-sm text-gr-text-muted leading-relaxed mb-4">{featured.excerpt}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gr-border">
                  <div>
                    <span className="text-[11px] text-gr-cyan">{featured.author}</span>
                    <span className="text-[11px] text-gr-text-dim ml-2">— {featured.publishedAt}</span>
                  </div>
                  <span className="text-[11px] text-gr-green group-hover:text-gr-green/80 tracking-wider flex items-center gap-1">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Article list */}
          <div className="space-y-3">
            {rest.map((article) => (
              <Link
                key={article.id}
                href={article.href}
                className="group block border border-gr-border bg-gr-surface p-4 hover:border-gr-green/40 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold tracking-widest ${CATEGORY_COLORS[article.category] || 'text-gr-text-muted'}`}>
                    {article.category}
                  </span>
                  <span className={`text-[10px] tracking-wider ${DESTINATION_LABELS[article.destination].color}`}>
                    {DESTINATION_LABELS[article.destination].label}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gr-text mb-2 leading-snug group-hover:text-gr-green transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-gr-text-dim">{article.publishedAt}</span>
                  <span className="text-[10px] text-gr-text-dim">{article.readTime}</span>
                </div>
              </Link>
            ))}

            {/* GetMoneyNews CTA */}
            <a
              href="https://getmoneynews.online"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-gr-cyan/20 bg-gr-cyan/5 p-4 hover:border-gr-cyan/40 transition-all"
            >
              <div>
                <div className="text-[10px] text-gr-cyan font-bold tracking-widest mb-1">GETMONEYNEWS.ONLINE</div>
                <p className="text-xs text-gr-text-muted">Financial news for underserved markets</p>
              </div>
              <ExternalLink className="h-4 w-4 text-gr-cyan" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
