const steps = [
  {
    number: '01',
    title: 'Create a funding round',
    description: 'Define criteria, rubrics, timelines, and reviewer assignments. Set up evaluation frameworks tailored to your funding goals.',
  },
  {
    number: '02',
    title: 'Collect proposals',
    description: 'Applicants submit structured proposals through a guided intake system. AI normalizes submissions for fair comparison.',
  },
  {
    number: '03',
    title: 'AI analysis',
    description: 'Each proposal receives structured analysis: summaries, scoring signals, uncertainty flags, and cross-proposal comparisons.',
  },
  {
    number: '04',
    title: 'Reviewer comparison and deliberation',
    description: 'Reviewers work through structured workflows with AI support. Disagreements are surfaced and preserved, not hidden.',
  },
  {
    number: '05',
    title: 'Transparent outcomes',
    description: 'Final decisions are documented with reasoning. Applicants and observers receive meaningful transparency reports.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How GREENRAIL works
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            A five-step process that brings structure and clarity to public goods evaluation.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-teal-500 to-slate-700 hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-8">
                <div className="flex-shrink-0 flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 text-emerald-400 font-bold text-lg z-10">
                  {step.number}
                </div>
                <div className="pt-3 pb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
