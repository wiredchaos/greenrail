'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ChevronDown, Activity } from 'lucide-react'
import { NAV_LINKS, PLATFORM_MODULES } from '@/lib/constants'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [platformOpen, setPlatformOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gr-border bg-gr-black/95 backdrop-blur">
      {/* Status bar */}
      <div className="border-b border-gr-border/50 bg-gr-surface px-4 py-1 hidden md:flex items-center justify-between text-[11px] text-gr-text-muted">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
            SYSTEM ONLINE
          </span>
          <span className="text-gr-text-dim">|</span>
          <span>GREENRAILS ENTERPRISE PLATFORM v1.0</span>
        </div>
        <div className="flex items-center gap-4">
          <span>{new Date().toUTCString()}</span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded border border-gr-green/40 bg-gr-green-dark">
              <Activity className="h-4 w-4 text-gr-green" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-widest text-gr-green glow-green">GREENRAILS</span>
              <span className="text-[9px] text-gr-cyan tracking-wider">BANK THE UNBANKABLE™</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Platform dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformOpen(true)}
              onMouseLeave={() => setPlatformOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-gr-text-muted hover:text-gr-green transition-colors tracking-wider uppercase">
                Platform
                <ChevronDown className="h-3 w-3" />
              </button>
              {platformOpen && (
                <div className="absolute top-full left-0 w-64 border border-gr-border bg-gr-surface-2 shadow-xl">
                  <div className="p-1">
                    {PLATFORM_MODULES.map((mod) => (
                      <Link
                        key={mod.id}
                        href={mod.href}
                        className="block px-3 py-2.5 hover:bg-gr-surface-3 group"
                      >
                        <div className="text-xs font-medium text-gr-green tracking-wider group-hover:glow-green">{mod.label}</div>
                        <div className="text-[11px] text-gr-text-muted mt-0.5">{mod.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-xs font-medium text-gr-text-muted hover:text-gr-green transition-colors tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admin"
              className="px-3 py-1.5 text-xs font-medium text-gr-text-muted border border-gr-border hover:border-gr-green hover:text-gr-green transition-all tracking-wider uppercase"
            >
              Sign In
            </Link>
            <Link
              href="/demo"
              className="px-4 py-1.5 text-xs font-bold text-gr-black bg-gr-green hover:bg-gr-green/90 transition-colors tracking-wider uppercase"
            >
              Request Demo
            </Link>
          </div>

          <button
            className="lg:hidden text-gr-text-muted hover:text-gr-green transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gr-border py-4 space-y-1">
            {PLATFORM_MODULES.map((mod) => (
              <Link
                key={mod.id}
                href={mod.href}
                className="block px-3 py-2 text-xs text-gr-text-muted hover:text-gr-green tracking-wider uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {mod.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gr-border mt-3 flex flex-col gap-2">
              <Link href="/admin" className="block px-3 py-2 text-xs text-center border border-gr-border text-gr-text-muted hover:border-gr-green hover:text-gr-green tracking-wider uppercase">Sign In</Link>
              <Link href="/demo" className="block px-3 py-2 text-xs text-center font-bold bg-gr-green text-gr-black tracking-wider uppercase">Request Demo</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
