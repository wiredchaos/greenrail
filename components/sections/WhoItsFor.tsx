const audiences = [
  {
    role: 'Grant Committees',
    description: 'Reduce review burden without sacrificing rigor. Structure deliberations and document reasoning at every step.',
    emoji: '🏛️',
  },
  {
    role: 'Philanthropic Funds',
    description: 'Allocate resources with greater confidence. Model funding scenarios and evaluate impact potential systematically.',
    emoji: '💡',
  },
  {
    role: 'Public Goods Ecosystems',
    description: 'Build credibility and trust through transparent, auditable funding processes your community can follow.',
    emoji: '🌱',
  },
  {
    role: 'Researchers',
    description: 'Submit proposals into a system that normalizes and fairly surfaces your work, regardless of network advantages.',
    emoji: '🔬',
  },
  {
    role: 'Reviewers',
    description: 'Get structured support for complex decisions. Spend more time on judgment, less time on logistics.',
    emoji: '📋',
  },
  {
    role: 'Community Observers',
    description: 'Follow funding decisions with real transparency. Understand how and why resources were allocated.',
    emoji: '👁️',
  },
]

export function WhoItsFor() {
  return (
    <section className="py-24 bg-emerald-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Who GREENRAIL is for
          </h2>
          <p className="mt-4 text-lg text-emerald-200 max-w-2xl mx-auto">
            Every participant in the funding ecosystem benefits from better structure and transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.role}
              className="rounded-2xl border border-emerald-800 bg-emerald-900/50 p-6 hover:bg-emerald-900 transition-colors"
            >
              <div className="text-3xl mb-4">{audience.emoji}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{audience.role}</h3>
              <p className="text-emerald-200 text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
