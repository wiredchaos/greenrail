import Link from 'next/link'
import { ArrowRight, Zap, ShoppingCart, CreditCard, Shield, Settings, FileText, LayoutGrid } from 'lucide-react'
import { PLATFORM_MODULES } from '@/lib/constants'

const MODULE_ICONS: Record<string, React.ElementType> = {
  intelligence: Zap,
  pos: ShoppingCart,
  payments: CreditCard,
  compliance: Shield,
  operations: Settings,
  content: FileText,
  admin: LayoutGrid,
}

const MODULE_COLORS: Record<string, { color: string; border: string; bg: string }> = {
  intelligence: { color: 'text-gr-green', border: 'border-gr-green/30', bg: 'hover:bg-gr-green/5' },
  pos: { color: 'text-gr-cyan', border: 'border-gr-cyan/30', bg: 'hover:bg-gr-cyan/5' },
  payments: { color: 'text-gr-green', border: 'border-gr-green/30', bg: 'hover:bg-gr-green/5' },
  compliance: { color: 'text-gr-amber', border: 'border-gr-amber/30', bg: 'hover:bg-gr-amber/5' },
  operations: { color: 'text-gr-cyan', border: 'border-gr-cyan/30', bg: 'hover:bg-gr-cyan/5' },
  content: { color: 'text-gr-green', border: 'border-gr-green/30', bg: 'hover:bg-gr-green/5' },
  admin: { color: 'text-gr-text-muted', border: 'border-gr-border', bg: 'hover:bg-gr-surface-2' },
}

export function ActionPanel() {
  return (
    <section className="py-16 bg-gr-surface border-b border-gr-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-amber" />
            <span className="text-[11px] text-gr-amber tracking-widest font-bold">STEP 3 OF 3</span>
          </div>
          <h2 className="text-2xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-amber">ACTION</span> PANEL
          </h2>
          <p className="text-xs text-gr-text-muted mt-1">Select a module to take action</p>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
          {PLATFORM_MODULES.map((mod) => {
            const Icon = MODULE_ICONS[mod.id] || LayoutGrid
            const colors = MODULE_COLORS[mod.id] || MODULE_COLORS.admin
            return (
              <Link
                key={mod.id}
                href={mod.href}
                className={`group border ${colors.border} bg-gr-surface-2 ${colors.bg} p-5 transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`h-5 w-5 ${colors.color}`} />
                  <ArrowRight className="h-3.5 w-3.5 text-gr-text-dim group-hover:text-gr-green transition-colors" />
                </div>
                <h3 className={`text-sm font-bold tracking-wider mb-1 ${colors.color}`}>{mod.label}</h3>
                <p className="text-[11px] text-gr-text-muted leading-relaxed">{mod.description}</p>
              </Link>
            )
          })}
        </div>

        {/* Quick actions row */}
        <div className="border border-gr-border bg-gr-surface-2">
          <div className="border-b border-gr-border px-4 py-2">
            <span className="text-[11px] text-gr-amber tracking-widest font-bold">QUICK ACTIONS</span>
          </div>
          <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'New Transaction', href: '/payments/new', color: 'text-gr-green border-gr-green/30' },
              { label: 'Open POS', href: '/pos', color: 'text-gr-cyan border-gr-cyan/30' },
              { label: 'Compliance Check', href: '/compliance', color: 'text-gr-amber border-gr-amber/30' },
              { label: 'Publish Article', href: '/content/new', color: 'text-gr-green border-gr-green/30' },
            ].map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className={`border ${action.color} px-3 py-2 text-[11px] font-bold tracking-wider text-center hover:bg-gr-surface-3 transition-colors`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
