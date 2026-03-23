'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">GREENRAIL</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/platform" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Platform</Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">How It Works</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/demo"
              className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6 text-slate-700" /> : <Menu className="h-6 w-6 text-slate-700" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4 space-y-4">
            <Link href="/platform" className="block text-sm font-medium text-slate-600 hover:text-emerald-600">Platform</Link>
            <Link href="/#how-it-works" className="block text-sm font-medium text-slate-600 hover:text-emerald-600">How It Works</Link>
            <Link href="/about" className="block text-sm font-medium text-slate-600 hover:text-emerald-600">About</Link>
            <Link href="/contact" className="block text-sm font-medium text-slate-600 hover:text-emerald-600">Contact</Link>
            <Link href="/demo" className="block rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white text-center">Request Demo</Link>
          </div>
        )}
      </div>
    </header>
  )
}
