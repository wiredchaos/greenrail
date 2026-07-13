'use client'

import { useState } from 'react'
import { TrendingUp, TrendingDown, AlertTriangle, Activity, Shield, Globe } from 'lucide-react'

export interface TickerSignal {
  id: string
  category: 'MARKET' | 'REGULATORY' | 'COMPLIANCE' | 'RISK' | 'INDUSTRY' | 'CRYPTO' | 'MACRO'
  label: string
  value: string
  change?: string
  direction?: 'up' | 'down' | 'neutral'
  timestamp: string
}

const SIGNALS: TickerSignal[] = [
  { id: '1', category: 'CRYPTO', label: 'BTC/USD', value: '$67,420', change: '+2.4%', direction: 'up', timestamp: '14:32' },
  { id: '2', category: 'REGULATORY', label: 'FinCEN Advisory', value: 'NEW GUIDANCE', change: 'HIGH IMPACT', direction: 'neutral', timestamp: '13:58' },
  { id: '3', category: 'MARKET', label: 'ACH VOLUME', value: '$28.4B', change: '+0.8%', direction: 'up', timestamp: '14:00' },
  { id: '4', category: 'COMPLIANCE', label: 'BSA ALERT', value: 'THRESHOLD UPDATE', change: 'REVIEW REQUIRED', direction: 'neutral', timestamp: '13:45' },
  { id: '5', category: 'CRYPTO', label: 'ETH/USD', value: '$3,812', change: '+1.9%', direction: 'up', timestamp: '14:32' },
  { id: '6', category: 'RISK', label: 'FRAUD INDEX', value: '4.2 / 10', change: '-0.3', direction: 'down', timestamp: '14:15' },
  { id: '7', category: 'INDUSTRY', label: 'CANNABIS BANKING', value: 'SAFE Act Update', change: 'SENATE ACTION', direction: 'neutral', timestamp: '12:30' },
  { id: '8', category: 'MACRO', label: 'FED FUNDS RATE', value: '5.25%', change: 'HOLD', direction: 'neutral', timestamp: '11:00' },
  { id: '9', category: 'MARKET', label: 'PAYMENT VOLUME', value: '$1.2T', change: '+3.1%', direction: 'up', timestamp: '14:00' },
  { id: '10', category: 'REGULATORY', label: 'CFPB RULE', value: '1071 FINAL', change: 'EFFECTIVE Q2', direction: 'neutral', timestamp: '09:00' },
  { id: '11', category: 'CRYPTO', label: 'USDC/USD', value: '$1.000', change: 'STABLE', direction: 'neutral', timestamp: '14:32' },
  { id: '12', category: 'RISK', label: 'CHARGEBACK RATE', value: '0.42%', change: '-0.02%', direction: 'down', timestamp: '14:20' },
]

const CATEGORY_CONFIG: Record<TickerSignal['category'], { color: string; bg: string; icon: React.ElementType }> = {
  MARKET: { color: 'text-gr-green', bg: 'bg-gr-green/10', icon: TrendingUp },
  REGULATORY: { color: 'text-gr-amber', bg: 'bg-gr-amber/10', icon: Shield },
  COMPLIANCE: { color: 'text-gr-amber', bg: 'bg-gr-amber/10', icon: AlertTriangle },
  RISK: { color: 'text-gr-red', bg: 'bg-gr-red/10', icon: AlertTriangle },
  INDUSTRY: { color: 'text-gr-cyan', bg: 'bg-gr-cyan/10', icon: Globe },
  CRYPTO: { color: 'text-gr-green', bg: 'bg-gr-green/10', icon: Activity },
  MACRO: { color: 'text-gr-text-muted', bg: 'bg-gr-surface-3', icon: Globe },
}

interface SignalTickerProps {
  onSignalClick?: (signal: TickerSignal) => void
}

export function SignalTicker({ onSignalClick }: SignalTickerProps) {
  const [activeSignal, setActiveSignal] = useState<string | null>(null)

  // Duplicate signals for seamless infinite loop
  const allSignals = [...SIGNALS, ...SIGNALS]

  const handleClick = (signal: TickerSignal) => {
    setActiveSignal(signal.id)
    onSignalClick?.(signal)
  }

  return (
    <div className="w-full border-y border-gr-border bg-gr-surface overflow-hidden">
      {/* Ticker header bar */}
      <div className="border-b border-gr-border/50 bg-gr-surface-2 px-4 py-1 flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
          <span className="text-[10px] text-gr-green tracking-widest font-bold">LIVE SIGNALS</span>
        </div>
        <span className="text-[10px] text-gr-text-dim tracking-wider">|</span>
        <span className="text-[10px] text-gr-text-muted tracking-wider">GREENRAILS INTELLIGENCE ENGINE</span>
        <div className="ml-auto flex gap-2">
          {(['MARKET', 'REGULATORY', 'CRYPTO', 'RISK'] as const).map((cat) => {
            const config = CATEGORY_CONFIG[cat]
            return (
              <span key={cat} className={`text-[9px] px-1.5 py-0.5 tracking-wider font-bold ${config.color} ${config.bg}`}>
                {cat}
              </span>
            )
          })}
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="py-2 relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gr-surface to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gr-surface to-transparent z-10 pointer-events-none" />

        <div className="ticker-track">
          {allSignals.map((signal, i) => {
            const config = CATEGORY_CONFIG[signal.category]
            const Icon = config.icon
            const isUp = signal.direction === 'up'
            const isDown = signal.direction === 'down'

            return (
              <button
                key={`${signal.id}-${i}`}
                onClick={() => handleClick(signal)}
                className={`flex items-center gap-2 mx-3 px-3 py-1.5 border transition-all cursor-pointer shrink-0 ${
                  activeSignal === signal.id
                    ? 'border-gr-green bg-gr-green/5'
                    : 'border-gr-border/50 hover:border-gr-border bg-gr-surface-2 hover:bg-gr-surface-3'
                }`}
              >
                {/* Category label */}
                <span className={`text-[9px] font-bold tracking-widest ${config.color}`}>
                  {signal.category}
                </span>

                <span className="text-gr-border">|</span>

                {/* Label */}
                <span className="text-[11px] text-gr-text-muted tracking-wider whitespace-nowrap">
                  {signal.label}
                </span>

                {/* Value */}
                <span className="text-[11px] font-bold text-gr-text tracking-wider whitespace-nowrap">
                  {signal.value}
                </span>

                {/* Change */}
                {signal.change && (
                  <span className={`flex items-center gap-0.5 text-[10px] font-bold tracking-wider whitespace-nowrap ${
                    isUp ? 'text-gr-green' : isDown ? 'text-gr-red' : 'text-gr-text-muted'
                  }`}>
                    {isUp && <TrendingUp className="h-2.5 w-2.5" />}
                    {isDown && <TrendingDown className="h-2.5 w-2.5" />}
                    {signal.change}
                  </span>
                )}

                {/* Timestamp */}
                <span className="text-[9px] text-gr-text-dim ml-1">{signal.timestamp}</span>

                <Icon className={`h-3 w-3 ${config.color} ml-1`} />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
