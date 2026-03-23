import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Platform — GREENRAIL',
  description: 'Explore the GREENRAIL platform and its capabilities for public goods funding.',
}

const modules = [
  { title: 'Applicant Portal', status: 'Planned', description: 'Structured submission experience for proposal applicants.' },
  { title: 'Reviewer Dashboard', status: 'Planned', description: 'Full evaluation workspace with AI-assisted decision support.' },
  { title: 'Admin Funding Setup', status: 'Planned', description: 'Round configuration, criteria setup, and reviewer assignment.' },
  { title: 'AI Analysis Layer', status: 'In development', description: 'Automated proposal analysis, comparison, and signal generation.' },
  { title: 'Decision Workspace', status: 'Planned', description: 'Structured deliberation environment with disagreement tracking.' },
  { title: 'Transparency Dashboard', status: 'Planned', description: 'Public-facing audit trail and outcome reporting.' },
]

export default function PlatformPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Platform</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 mb-4">The GREENRAIL platform</h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            A modular decision infrastructure for public goods funding. Built for committees, reviewers, applicants, and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {modules.map((module) => (
            <div key={module.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-semibold text-slate-900">{module.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                  module.status === 'In development'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-slate-100 text-slate-500'
                }`}>
                  {module.status}
                </span>
              </div>
              <p className="text-sm text-slate-600">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Core principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'AI assists. Humans decide.',
              'Every decision is auditable.',
              'Disagreement is preserved, not hidden.',
              'Equity awareness is built in.',
              'Global-first by design.',
              'Open to scrutiny.',
            ].map((principle) => (
              <div key={principle} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-700">{principle}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <Link href="/demo" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
            Request Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 px-5 py-2.5">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
