import { Shield, Eye, MessageSquare, Scale, Globe } from 'lucide-react'

const principles = [
  {
    icon: Shield,
    title: 'AI assists, humans decide',
    description: 'AI structures and surfaces information. Humans retain all decision-making authority. This is non-negotiable.',
  },
  {
    icon: Eye,
    title: 'Transparent and auditable',
    description: 'Every step of the evaluation process is logged, explainable, and available for review.',
  },
  {
    icon: MessageSquare,
    title: 'Disagreement stays visible',
    description: 'Reviewer disagreements are preserved and documented — not smoothed over or hidden from view.',
  },
  {
    icon: Scale,
    title: 'Equity-aware by design',
    description: 'Fairness is not an afterthought. Equity signals and bias flags are built into the core workflow.',
  },
  {
    icon: Globe,
    title: 'Global-first usability',
    description: 'Designed for international contexts. Multilingual, multi-currency, and accessible from the start.',
  },
]

export function Principles() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Core principles
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            These principles guide every product decision and architectural choice in GREENRAIL.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {principles.map((principle) => (
            <div key={principle.title} className="relative text-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-white shadow-sm">
                <principle.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <h3 className="text-sm font-semibold text-slate-900 mb-2 leading-snug">{principle.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
