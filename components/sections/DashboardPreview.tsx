import { BarChart2, Users, TrendingUp, FileText } from 'lucide-react'

const mockProposals = [
  { name: 'Open Education Network', score: 89, status: 'Top pick', reviewers: 4 },
  { name: 'Climate Data Commons', score: 84, status: 'Shortlisted', reviewers: 3 },
  { name: 'Community Health Atlas', score: 76, status: 'Under review', reviewers: 2 },
]

const reviewerData = [
  { name: 'Reviewer A', score: 88 },
  { name: 'Reviewer B', score: 91 },
  { name: 'Reviewer C', score: 82 },
  { name: 'Reviewer D', score: 87 },
]

export function DashboardPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-6">
            Platform Preview
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A workspace built for serious funding decisions
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Everything committees need — in one structured, transparent environment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Proposal Summaries */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                <h3 className="text-base font-semibold text-slate-900">Proposal Summaries</h3>
              </div>
              <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">Round 3 · 2025</span>
            </div>
            <div className="space-y-3">
              {mockProposals.map((proposal) => (
                <div key={proposal.name} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 hover:border-emerald-200 transition-colors cursor-pointer">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{proposal.name}</p>
                    <p className="text-xs text-slate-500">{proposal.reviewers} reviewers assigned</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      proposal.status === 'Top pick'
                        ? 'bg-emerald-100 text-emerald-700'
                        : proposal.status === 'Shortlisted'
                        ? 'bg-teal-100 text-teal-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {proposal.status}
                    </span>
                    <span className="text-lg font-bold text-slate-900">{proposal.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviewer Scoring */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <Users className="h-5 w-5 text-teal-600" />
              <h3 className="text-base font-semibold text-slate-900">Reviewer Scoring</h3>
            </div>
            <div className="space-y-4">
              {reviewerData.map((reviewer) => (
                <div key={reviewer.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600">{reviewer.name}</span>
                    <span className="font-semibold text-slate-900">{reviewer.score}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500"
                      style={{ width: `${reviewer.score}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="text-xs text-slate-600">Disagreement detected — Reviewers A and C diverge on feasibility</span>
                </div>
              </div>
            </div>
          </div>

          {/* Funding Simulation */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
              <h3 className="text-base font-semibold text-slate-900">Funding Simulation</h3>
            </div>
            <div className="space-y-3">
              {[
                { name: 'Open Education Network', pct: 40, amount: '$40k' },
                { name: 'Climate Data Commons', pct: 35, amount: '$35k' },
                { name: 'Community Health Atlas', pct: 25, amount: '$25k' },
              ].map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-600 truncate max-w-[140px]">{item.name}</span>
                    <span className="font-semibold text-slate-900 ml-2">{item.amount}</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-emerald-500"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-slate-500 mt-2">Scenario: Impact-weighted · $100k total</p>
            </div>
          </div>

          {/* Transparency Metrics */}
          <div className="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <BarChart2 className="h-5 w-5 text-teal-600" />
              <h3 className="text-base font-semibold text-slate-900">Transparency Metrics</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Proposals reviewed', value: '24/24', color: 'emerald' },
                { label: 'Reviewer consensus', value: '83%', color: 'teal' },
                { label: 'Flags resolved', value: '7/9', color: 'amber' },
                { label: 'Audit trail', value: 'Complete', color: 'emerald' },
              ].map((metric) => (
                <div key={metric.label} className="rounded-xl border border-slate-100 bg-slate-50 p-4 text-center">
                  <p className={`text-xl font-bold mb-1 ${
                    metric.color === 'emerald' ? 'text-emerald-700' :
                    metric.color === 'teal' ? 'text-teal-700' :
                    'text-amber-600'
                  }`}>{metric.value}</p>
                  <p className="text-xs text-slate-500">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
