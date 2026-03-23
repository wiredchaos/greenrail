import { Brain, Users, TrendingUp, Eye, Scale, Globe } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Proposal Intelligence',
    description: 'AI-generated summaries, scoring signals, and cross-proposal comparisons that surface what matters most.',
    color: 'emerald',
  },
  {
    icon: Users,
    title: 'Reviewer Decision Support',
    description: 'Structured workflows that help reviewers evaluate consistently, with visible disagreement tracking.',
    color: 'teal',
  },
  {
    icon: TrendingUp,
    title: 'Funding Scenario Modeling',
    description: 'Simulate funding allocations across different criteria weightings before making final decisions.',
    color: 'emerald',
  },
  {
    icon: Eye,
    title: 'Transparency Dashboard',
    description: 'Auditable decision trails for every proposal, visible to committees, applicants, and communities.',
    color: 'teal',
  },
  {
    icon: Scale,
    title: 'Fairness Insights',
    description: 'Equity-aware analysis that flags potential bias patterns and highlights overlooked applications.',
    color: 'emerald',
  },
  {
    icon: Globe,
    title: 'Global-Ready Architecture',
    description: 'Built for multilingual, multi-timezone, multi-currency funding contexts from day one.',
    color: 'teal',
  },
]

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built for the complexity of real funding decisions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Every feature is designed to reduce cognitive load while preserving human agency and accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:border-emerald-200 transition-all duration-200"
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${
                feature.color === 'emerald'
                  ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100'
                  : 'bg-teal-50 text-teal-600 group-hover:bg-teal-100'
              } transition-colors`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
