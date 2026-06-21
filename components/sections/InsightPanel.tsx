'use client'

import { useState } from 'react'
import { ArrowRight, TrendingUp, TrendingDown, AlertTriangle, Globe, Shield, Activity } from 'lucide-react'
import type { TickerSignal } from './SignalTicker'

interface InsightPanelProps {
  activeSignal?: TickerSignal | null
}

const DEFAULT_INSIGHTS = [
  {
    id: '1',
    category: 'REGULATORY',
    title: 'FinCEN Updates BSA Guidance for Crypto MSBs',
    summary: 'Financial Crimes Enforcement Network has issued new guidance affecting money service businesses operating with cryptocurrency. Compliance teams should review KYC/AML procedures.',
    impact: 'HIGH',
    action: 'Review compliance procedures',
    href: '/intelligence/reg-fincen-update',
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    category: 'MARKET',
    title: 'ACH Volume Reaches $28.4B — Q2 Growth Trend',
    summary: 'Automated clearing house transaction volume continues upward trajectory. Cannabis banking and gig economy payments driving growth in underserved segments.',
    impact: 'MEDIUM',
    action: 'View market analysis',
    href: '/intelligence/ach-volume-q2',
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    category: 'RISK',
    title: 'Chargeback Rate Declining Across Platform Merchants',
    summary: 'Fraud index falls to 4.2/10 as AI-assisted transaction screening improves. Real-time risk scoring reducing false positives by 23% month-over-month.',
    impact: 'LOW',
    action: 'View risk report',
    href: '/intelligence/risk-chargeback-q2',
    timestamp: '6 hours ago',
  },
]

const IMPACT_CONFIG = {
  HIGH: { color: 'text-gr-red', border: 'border-gr-red/40', bg: 'bg-gr-red/5' },
  MEDIUM: { color: 'text-gr-amber', border: 'border-gr-amber/40', bg: 'bg-gr-amber/5' },
  LOW: { color: 'text-gr-green', border: 'border-gr-green/40', bg: 'bg-gr-green/5' },
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  REGULATORY: Shield,
  MARKET: TrendingUp,
  RISK: AlertTriangle,
  COMPLIANCE: Shield,
  CRYPTO: Activity,
  INDUSTRY: Globe,
  MACRO: Globe,
}

export function InsightPanel({ activeSignal }: InsightPanelProps) {
  const [selectedInsight, setSelectedInsight] = useState(DEFAULT_INSIGHTS[0])

  const insights = DEFAULT_INSIGHTS

  return (
    <section className="py-16 bg-gr-black border-b border-gr-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gr-cyan" />
              <span className="text-[11px] text-gr-cyan tracking-widest font-bold">STEP 2 OF 3</span>
            </div>
            <h2 className="text-2xl font-bold text-gr-text tracking-wide">
              <span className="text-gr-cyan">INSIGHT</span> PANEL
            </h2>
            <p className="text-xs text-gr-text-muted mt-1">Signals converted to actionable intelligence</p>
          </div>
          <a href="/intelligence" className="flex items-center gap-1.5 text-xs text-gr-cyan hover:text-gr-cyan/80 tracking-wider uppercase transition-colors">
            View All Intelligence <ArrowRight className="h-3 w-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Insight list */}
          <div className="lg:col-span-1 space-y-2">
            {insights.map((insight) => {
              const config = IMPACT_CONFIG[insight.impact as keyof typeof IMPACT_CONFIG]
              const Icon = CATEGORY_ICONS[insight.category] || Activity
              const isSelected = selectedInsight.id === insight.id
              return (
                <button
                  key={insight.id}
                  onClick={() => setSelectedInsight(insight)}
                  className={`w-full text-left border p-3 transition-all ${
                    isSelected
                      ? `${config.border} ${config.bg}`
                      : 'border-gr-border hover:border-gr-border-bright bg-gr-surface hover:bg-gr-surface-2'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <Icon className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${isSelected ? config.color : 'text-gr-text-muted'}`} />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[9px] font-bold tracking-widest ${config.color}`}>{insight.impact}</span>
                        <span className="text-[9px] text-gr-text-dim tracking-wider">{insight.category}</span>
                      </div>
                      <p className="text-[11px] text-gr-text leading-tight">{insight.title}</p>
                      <p className="text-[10px] text-gr-text-dim mt-1">{insight.timestamp}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Insight detail */}
          <div className="lg:col-span-2 border border-gr-border bg-gr-surface">
            <div className="border-b border-gr-border px-4 py-2 flex items-center justify-between">
              <span className="text-[11px] text-gr-cyan tracking-widest">INSIGHT DETAIL</span>
              <span className={`text-[10px] font-bold tracking-widest ${IMPACT_CONFIG[selectedInsight.impact as keyof typeof IMPACT_CONFIG].color}`}>
                IMPACT: {selectedInsight.impact}
              </span>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] text-gr-text-muted tracking-widest bg-gr-surface-3 border border-gr-border px-2 py-0.5">
                  {selectedInsight.category}
                </span>
                <span className="text-[10px] text-gr-text-dim">{selectedInsight.timestamp}</span>
              </div>
              <h3 className="text-base font-bold text-gr-text mb-4 leading-snug">{selectedInsight.title}</h3>
              <p className="text-sm text-gr-text-muted leading-relaxed mb-6">{selectedInsight.summary}</p>

              {/* Action prompt */}
              <div className="border border-gr-green/20 bg-gr-green-dark/10 p-4">
                <div className="text-[11px] text-gr-green tracking-widest mb-2 font-bold">→ RECOMMENDED ACTION</div>
                <p className="text-xs text-gr-text">{selectedInsight.action}</p>
              </div>

              <a
                href={selectedInsight.href}
                className="mt-4 flex items-center gap-2 text-xs text-gr-cyan hover:text-gr-cyan/80 tracking-wider uppercase transition-colors"
              >
                Full Analysis <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
