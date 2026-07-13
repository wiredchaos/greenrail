import Link from 'next/link'
import { Activity } from 'lucide-react'
import { PLATFORM_MODULES, SITE_NAME, SITE_TAGLINE, GETMONEYNEWS_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-gr-border bg-gr-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-gr-green/40 bg-gr-green-dark">
                <Activity className="h-4 w-4 text-gr-green" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold tracking-widest text-gr-green">{SITE_NAME}</span>
                <span className="text-[9px] text-gr-cyan tracking-wider">{SITE_TAGLINE}</span>
              </div>
            </Link>
            <p className="text-xs text-gr-text-muted max-w-xs leading-relaxed">
              Intelligence-driven payments, POS, compliance, operations, and publishing platform
              serving regulated and underserved industries.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
              <span className="text-[11px] text-gr-text-muted tracking-wider">SIGNAL → INSIGHT → ACTION</span>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[11px] font-semibold text-gr-green tracking-widest mb-4 uppercase">Platform</h3>
            <ul className="space-y-2">
              {PLATFORM_MODULES.map((mod) => (
                <li key={mod.id}>
                  <Link
                    href={mod.href}
                    className="text-xs text-gr-text-muted hover:text-gr-green transition-colors tracking-wider"
                  >
                    {mod.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Publishing */}
          <div>
            <h3 className="text-[11px] font-semibold text-gr-cyan tracking-widest mb-4 uppercase">Publishing</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/content" className="text-xs text-gr-text-muted hover:text-gr-cyan transition-colors tracking-wider">
                  Content Engine
                </Link>
              </li>
              <li>
                <Link href="/content/articles" className="text-xs text-gr-text-muted hover:text-gr-cyan transition-colors tracking-wider">
                  Articles
                </Link>
              </li>
              <li>
                <a
                  href={GETMONEYNEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gr-text-muted hover:text-gr-cyan transition-colors tracking-wider"
                >
                  GetMoneyNews.online ↗
                </a>
              </li>
              <li>
                <Link href="/about" className="text-xs text-gr-text-muted hover:text-gr-cyan transition-colors tracking-wider">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs text-gr-text-muted hover:text-gr-cyan transition-colors tracking-wider">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-gr-border flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[11px] text-gr-text-dim tracking-wider">
            © {new Date().getFullYear()} GREENRAILS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-4 text-[11px] text-gr-text-dim tracking-wider">
            <span>AUTHOR: NEURO META X</span>
            <span className="text-gr-border">|</span>
            <span>ENTERPRISE FINTECH PLATFORM</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
