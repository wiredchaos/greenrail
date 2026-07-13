import Link from 'next/link'
import { FileText, Calendar, Globe, Tag, Image, Users, ArrowRight, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Content Engine — GREENRAILS',
  description: 'Centralized publishing engine for GreenRails and GetMoneyNews.online.',
}

const CONTENT_MODULES = [
  { icon: FileText, label: 'Articles', href: '/content/articles', description: 'Draft, edit, publish articles', color: 'text-gr-green' },
  { icon: Calendar, label: 'Scheduling', href: '/content/schedule', description: 'Queue and schedule publications', color: 'text-gr-cyan' },
  { icon: Globe, label: 'Destinations', href: '/content/destinations', description: 'GreenRails & GetMoneyNews routing', color: 'text-gr-amber' },
  { icon: Tag, label: 'Tags & Categories', href: '/content/taxonomy', description: 'Content organization', color: 'text-gr-green' },
  { icon: Image, label: 'Media Library', href: '/content/media', description: 'Images, documents, assets', color: 'text-gr-cyan' },
  { icon: Users, label: 'Authors', href: '/content/authors', description: 'Author profiles and bios', color: 'text-gr-green' },
]

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
            <span className="text-[11px] text-gr-green tracking-widest font-bold">MODULE 07</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-green">CONTENT</span> ENGINE
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Centralized publishing for GreenRails and GetMoneyNews.online. One backend. Multiple destinations.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Author info */}
        <div className="border border-gr-border bg-gr-surface-2 p-4 mb-8 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-gr-text-dim tracking-wider mb-0.5">PRIMARY AUTHOR</div>
            <div className="text-sm font-bold text-gr-cyan">Neuro Meta X</div>
            <div className="text-[11px] text-gr-text-muted">Reporting from GetMoneyNews.online</div>
          </div>
          <Link href="/content/articles/new" className="bg-gr-green text-gr-black px-4 py-2 text-sm font-bold tracking-wider hover:bg-gr-green/90 transition-colors">
            NEW ARTICLE
          </Link>
        </div>

        {/* Publication targets */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="border border-gr-green/20 bg-gr-green/5 p-4">
            <div className="text-[11px] text-gr-green tracking-widest font-bold mb-1">TARGET 1 — GREENRAILS</div>
            <p className="text-xs text-gr-text-muted">Platform-native content. Intelligence, payments, compliance articles.</p>
          </div>
          <div className="border border-gr-cyan/20 bg-gr-cyan/5 p-4 flex items-start justify-between">
            <div>
              <div className="text-[11px] text-gr-cyan tracking-widest font-bold mb-1">TARGET 2 — GETMONEYNEWS.ONLINE</div>
              <p className="text-xs text-gr-text-muted">Financial news for underserved markets.</p>
            </div>
            <a href="https://getmoneynews.online" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 text-gr-cyan" />
            </a>
          </div>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTENT_MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="group border border-gr-border bg-gr-surface p-5 hover:border-gr-green/40 hover:bg-gr-surface-2 transition-all"
              >
                <Icon className={`h-5 w-5 ${mod.color} mb-4`} />
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{mod.label}</h3>
                <p className="text-xs text-gr-text-muted">{mod.description}</p>
                <div className="flex items-center gap-1 text-xs text-gr-text-muted mt-4 group-hover:text-gr-green transition-colors">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
