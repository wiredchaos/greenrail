import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'About — GREENRAIL',
  description: 'Learn about the mission, principles, and team behind GREENRAIL.',
}

export default function AboutPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">About</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Our mission</h1>
        </div>
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            GREENRAIL exists because public goods funding deserves better infrastructure. Grant committees do important work under significant constraints — too many proposals, too little time, inconsistent review processes, and limited transparency.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mb-6">
            We built GREENRAIL to give funding committees structured decision rails. Not to replace human judgment — but to support it with better information, structure, and accountability.
          </p>
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            AI assists. Humans decide. Everything is auditable.
          </p>
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6 mb-8">
            <p className="text-sm font-semibold text-emerald-900 mb-2">This page is expanding.</p>
            <p className="text-sm text-emerald-700">Team information, origin story, and detailed principles coming soon.</p>
          </div>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700">
          Back to home <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
