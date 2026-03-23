import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-teal-50/30" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Now in early access
            <ChevronRight className="h-4 w-4" />
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-4xl">
            AI-assisted decision rails for{' '}
            <span className="text-emerald-600">public goods funding</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
            Help committees, funders, and communities evaluate proposals with more clarity, fairness, and transparency.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/demo"
              className="flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-emerald-700 transition-all hover:shadow-emerald-200/50 hover:shadow-xl"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#how-it-works"
              className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-2xl">
            {[
              { label: 'Structured AI Analysis', value: 'Every proposal' },
              { label: 'Human-controlled decisions', value: 'Always' },
              { label: 'Transparency by design', value: 'End-to-end' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
                <span className="text-lg font-bold text-emerald-700">{stat.value}</span>
                <span className="mt-1 text-sm text-slate-500 text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
