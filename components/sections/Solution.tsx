import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const capabilities = [
  'Structured proposal intake with AI-assisted normalization',
  'Reviewer decision support with comparison workflows',
  'Automated fairness signals and bias flags',
  'Funding scenario modeling and simulation',
  'End-to-end transparency reporting',
  'Multilingual and globally accessible by design',
]

export function Solution() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
              The Solution
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              A structured AI-assisted system for public goods evaluation
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              GREENRAIL is decision infrastructure. It gives funding committees structured rails to work from — without replacing human judgment.
            </p>
            <p className="text-base text-slate-600 leading-relaxed mb-8">
              AI structures, compares, summarizes, and flags uncertainty. Humans make all final decisions. Every step is auditable and transparent.
            </p>
            <ul className="space-y-3 mb-8">
              {capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-slate-700">{cap}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
            >
              Explore the platform <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-lg">
              <div className="space-y-4">
                <div className="rounded-xl border border-emerald-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-slate-900">Proposal Analysis</span>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">AI-assisted</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Impact clarity</span>
                      <span className="font-medium text-emerald-700">87/100</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[87%] rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Feasibility score</span>
                      <span className="font-medium text-emerald-700">72/100</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[72%] rounded-full bg-teal-500" />
                    </div>
                    <div className="flex justify-between text-xs text-slate-600">
                      <span>Equity alignment</span>
                      <span className="font-medium text-amber-600">61/100</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div className="h-2 w-[61%] rounded-full bg-amber-400" />
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="text-xs font-medium text-slate-700">AI Uncertainty Flag</span>
                  </div>
                  <p className="text-xs text-slate-600">Budget projections for Year 2 appear speculative. Reviewers should probe further.</p>
                </div>
                <div className="text-center pt-2">
                  <p className="text-xs text-slate-500 italic">Human reviewers make all final decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
