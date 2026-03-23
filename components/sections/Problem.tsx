import { AlertTriangle, Users, EyeOff, BarChart3, Globe, Layers } from 'lucide-react'

const problems = [
  {
    icon: Layers,
    title: 'Too many proposals',
    description: 'Committees are overwhelmed by volume, making deep evaluation nearly impossible.',
  },
  {
    icon: BarChart3,
    title: 'Inconsistent reviews',
    description: 'Without structured support, reviewer judgments vary widely and unpredictably.',
  },
  {
    icon: EyeOff,
    title: 'Opacity and bias',
    description: 'Decision processes are often opaque, introducing systemic bias and distrust.',
  },
  {
    icon: AlertTriangle,
    title: 'Hard-to-compare impact',
    description: 'Proposals use different formats, making fair comparison extremely difficult.',
  },
  {
    icon: Users,
    title: 'Weak transparency',
    description: 'Applicants and communities rarely receive meaningful feedback on outcomes.',
  },
  {
    icon: Globe,
    title: 'Overlooked global talent',
    description: 'Geographic and language barriers systematically exclude capable applicants.',
  },
]

export function Problem() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Public goods funding suffers from{' '}
            <span className="text-slate-700 italic">decision entropy</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            The systems meant to allocate resources for public benefit are often overwhelmed, inconsistent, and opaque.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 mb-4">
                <problem.icon className="h-5 w-5 text-red-500" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">{problem.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
