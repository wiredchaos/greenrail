import Link from 'next/link'
import { Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">GREENRAIL</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              AI-assisted decision rails for public goods funding. Helping committees evaluate proposals with clarity, fairness, and transparency.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/platform" className="hover:text-emerald-600 transition-colors">Overview</Link></li>
              <li><Link href="/demo" className="hover:text-emerald-600 transition-colors">Request Demo</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} GREENRAIL. All rights reserved.</p>
          <p className="text-sm text-slate-500">AI assists. Humans decide.</p>
        </div>
      </div>
    </footer>
  )
}
