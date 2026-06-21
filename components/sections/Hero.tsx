import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gr-black min-h-[90vh] flex items-center">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-green bg-grid opacity-50" />

      {/* Corner brackets */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-gr-green/40" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-gr-green/40" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-gr-green/40" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-gr-green/40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-16">
          {/* Left: Main content */}
          <div className="flex-1">
            {/* System badge */}
            <div className="mb-6 inline-flex items-center gap-2 border border-gr-green/30 bg-gr-green-dark/20 px-3 py-1.5 text-[11px] font-medium text-gr-green tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
              INTELLIGENCE ENGINE ACTIVE
              <span className="cursor-blink text-gr-green">▮</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-2">
              <span className="text-gr-green glow-green">BANK</span>
              <br />
              <span className="text-gr-text">THE</span>
              <br />
              <span className="text-gr-cyan glow-cyan">UNBANKABLE™</span>
            </h1>

            <p className="mt-6 text-sm text-gr-text-muted max-w-xl leading-relaxed">
              Intelligence-driven payments, POS, compliance, operations, and publishing platform
              for regulated and underserved industries.
            </p>

            {/* Signal → Insight → Action workflow */}
            <div className="mt-8 flex items-center gap-3">
              {['Signal', 'Insight', 'Action'].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <div className={`border px-3 py-1.5 text-xs font-bold tracking-widest ${
                    i === 0 ? 'border-gr-green text-gr-green' :
                    i === 1 ? 'border-gr-cyan text-gr-cyan' :
                    'border-gr-amber text-gr-amber'
                  }`}>
                    {step}
                  </div>
                  {i < 2 && (
                    <ArrowRight className="h-3 w-3 text-gr-text-dim" />
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <Link
                href="/demo"
                className="flex items-center gap-2 bg-gr-green px-6 py-3 text-sm font-bold text-gr-black hover:bg-gr-green/90 transition-colors tracking-wider uppercase"
              >
                Request Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/intelligence"
                className="flex items-center gap-2 border border-gr-border px-6 py-3 text-sm font-medium text-gr-text-muted hover:border-gr-green hover:text-gr-green transition-all tracking-wider uppercase"
              >
                View Signals
              </Link>
            </div>
          </div>

          {/* Right: Terminal stats panel */}
          <div className="w-full lg:w-96 border border-gr-border bg-gr-surface">
            <div className="border-b border-gr-border px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] text-gr-green tracking-widest">PLATFORM STATUS</span>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-gr-red" />
                <span className="h-2 w-2 rounded-full bg-gr-amber" />
                <span className="h-2 w-2 rounded-full bg-gr-green" />
              </div>
            </div>
            <div className="p-4 space-y-4">
              {[
                { icon: TrendingUp, label: 'Payments Layer', value: 'READY', color: 'text-gr-green' },
                { icon: Shield, label: 'Compliance Engine', value: 'ACTIVE', color: 'text-gr-cyan' },
                { icon: Zap, label: 'Intelligence Feed', value: 'LIVE', color: 'text-gr-green' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center justify-between border border-gr-border p-3">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${color}`} />
                    <span className="text-xs text-gr-text-muted tracking-wider">{label}</span>
                  </div>
                  <span className={`text-[11px] font-bold tracking-widest ${color}`}>{value}</span>
                </div>
              ))}

              <div className="border border-gr-border/50 p-3">
                <div className="text-[11px] text-gr-text-dim tracking-wider mb-2">MODULES ACTIVE</div>
                <div className="grid grid-cols-4 gap-1">
                  {['INT', 'POS', 'PAY', 'COM', 'OPS', 'CNT', 'ADM', 'API'].map((mod) => (
                    <div key={mod} className="text-center py-1 border border-gr-green/20 text-[10px] text-gr-green tracking-wider">
                      {mod}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] text-gr-text-dim font-mono">
                <span className="text-gr-green">$</span> greenrails --status all
                <br />
                <span className="text-gr-text-muted">All systems operational.</span>
                <br />
                <span className="text-gr-green">$ </span>
                <span className="cursor-blink">▮</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
