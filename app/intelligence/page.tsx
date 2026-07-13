import Link from 'next/link'
import { ArrowRight, TrendingUp, AlertTriangle, Globe, Activity, Shield } from 'lucide-react'

export const metadata = {
  title: 'Intelligence Layer — GREENRAILS',
  description: 'Market signals, regulatory events, compliance alerts, and risk indicators.',
}

const INSIGHT_MODULES = [
  { icon: TrendingUp, label: 'Market Signals', href: '/intelligence/market', color: 'text-gr-green', count: 24 },
  { icon: Globe, label: 'Industry Updates', href: '/intelligence/industry', color: 'text-gr-cyan', count: 12 },
  { icon: Shield, label: 'Regulatory Events', href: '/intelligence/regulatory', color: 'text-gr-amber', count: 7 },
  { icon: AlertTriangle, label: 'Compliance Alerts', href: '/intelligence/compliance', color: 'text-gr-amber', count: 3 },
  { icon: Activity, label: 'Risk Indicators', href: '/intelligence/risk', color: 'text-gr-red', count: 5 },
]

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-gr-black">
      {/* Page header */}
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
            <span className="text-[11px] text-gr-green tracking-widest font-bold">MODULE 01</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-green">INTELLIGENCE</span> LAYER
          </h1>
          <p className="text-sm text-gr-text-muted mt-2 max-w-2xl">
            Convert data into actionable insights. Signal → Insight → Action.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Workflow */}
        <div className="mb-8 flex items-center gap-3">
          {['Signal', 'Insight', 'Action'].map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className={`border px-4 py-2 text-sm font-bold tracking-widest ${
                i === 0 ? 'border-gr-green text-gr-green bg-gr-green/5' :
                i === 1 ? 'border-gr-cyan text-gr-cyan bg-gr-cyan/5' :
                'border-gr-amber text-gr-amber bg-gr-amber/5'
              }`}>
                {step}
              </div>
              {i < 2 && <ArrowRight className="h-4 w-4 text-gr-text-dim" />}
            </div>
          ))}
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {INSIGHT_MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="group border border-gr-border bg-gr-surface p-5 hover:border-gr-green/40 hover:bg-gr-surface-2 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`h-5 w-5 ${mod.color}`} />
                  <span className={`text-lg font-bold ${mod.color}`}>{mod.count}</span>
                </div>
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{mod.label}</h3>
                <div className="flex items-center gap-1 text-xs text-gr-text-muted mt-3 group-hover:text-gr-green transition-colors">
                  View <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Coming soon note */}
        <div className="border border-gr-border/50 bg-gr-surface-2 p-6 text-center">
          <p className="text-xs text-gr-text-muted tracking-wider">
            LIVE INTELLIGENCE ENGINE — CONNECT DATA SOURCES IN SETTINGS → INTELLIGENCE
          </p>
        </div>
      </div>
    </div>
  )
}
