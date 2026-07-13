import { TrendingUp, TrendingDown, AlertTriangle, Activity, Shield, Globe } from 'lucide-react'
import type { Signal } from '@/lib/types'

interface SignalCardProps {
  signal: Signal
  onClick?: (signal: Signal) => void
  compact?: boolean
}

const CATEGORY_CONFIG: Record<string, { color: string; bg: string; border: string; icon: React.ElementType }> = {
  MARKET:     { color: 'text-gr-green', bg: 'bg-gr-green/5', border: 'border-gr-green/30', icon: TrendingUp },
  REGULATORY: { color: 'text-gr-amber', bg: 'bg-gr-amber/5', border: 'border-gr-amber/30', icon: Shield },
  COMPLIANCE: { color: 'text-gr-amber', bg: 'bg-gr-amber/5', border: 'border-gr-amber/30', icon: AlertTriangle },
  RISK:       { color: 'text-gr-red', bg: 'bg-gr-red/5', border: 'border-gr-red/30', icon: AlertTriangle },
  INDUSTRY:   { color: 'text-gr-cyan', bg: 'bg-gr-cyan/5', border: 'border-gr-cyan/30', icon: Globe },
  CRYPTO:     { color: 'text-gr-green', bg: 'bg-gr-green/5', border: 'border-gr-green/30', icon: Activity },
  MACRO:      { color: 'text-gr-text-muted', bg: 'bg-gr-surface-3', border: 'border-gr-border', icon: Globe },
}

export function SignalCard({ signal, onClick, compact = false }: SignalCardProps) {
  const config = CATEGORY_CONFIG[signal.category] || CATEGORY_CONFIG.MACRO
  const Icon = config.icon

  return (
    <button
      onClick={() => onClick?.(signal)}
      className={`w-full text-left border ${config.border} ${config.bg} p-${compact ? '3' : '4'} hover:opacity-80 transition-opacity`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[10px] font-bold tracking-widest ${config.color}`}>
          {signal.category}
        </span>
        <div className="flex items-center gap-1">
          {signal.direction === 'up' && <TrendingUp className="h-3 w-3 text-gr-green" />}
          {signal.direction === 'down' && <TrendingDown className="h-3 w-3 text-gr-red" />}
          <Icon className={`h-3 w-3 ${config.color}`} />
        </div>
      </div>

      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-xs text-gr-text-muted tracking-wider">{signal.label}</span>
        <span className="text-sm font-bold text-gr-text">{signal.value}</span>
      </div>

      {signal.change && (
        <span className={`text-[11px] font-bold ${
          signal.direction === 'up' ? 'text-gr-green' :
          signal.direction === 'down' ? 'text-gr-red' : 'text-gr-text-muted'
        }`}>
          {signal.change}
        </span>
      )}

      {!compact && (
        <div className="mt-2 text-[10px] text-gr-text-dim">{signal.timestamp}</div>
      )}
    </button>
  )
}
