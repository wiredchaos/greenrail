import Link from 'next/link'
import { Shield, FileText, AlertTriangle, Clock, ArrowRight, CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Compliance Layer — GREENRAILS',
  description: 'Audit events, regulatory requirements, reporting workflows, and operator action tracking.',
}

const COMPLIANCE_MODULES = [
  { icon: FileText, label: 'Audit Logs', href: '/compliance/audit-logs', description: 'Every operator action recorded', color: 'text-gr-green', count: '12.4K events' },
  { icon: AlertTriangle, label: 'Regulatory Events', href: '/compliance/regulatory', description: 'Track requirement changes', color: 'text-gr-amber', count: '7 active' },
  { icon: Clock, label: 'Reporting Workflows', href: '/compliance/reports', description: 'Schedule and submit reports', color: 'text-gr-cyan', count: '3 pending' },
  { icon: CheckCircle, label: 'Operator Actions', href: '/compliance/actions', description: 'Review and approve actions', color: 'text-gr-green', count: '28 today' },
]

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-amber pulse-dot" />
            <span className="text-[11px] text-gr-amber tracking-widest font-bold">MODULE 05</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-amber">COMPLIANCE</span> LAYER
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Every important action creates an immutable audit record. Full regulatory workflow support.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Status bar */}
        <div className="border border-gr-green/20 bg-gr-green/5 px-4 py-3 mb-8 flex items-center gap-3">
          <Shield className="h-4 w-4 text-gr-green" />
          <span className="text-xs text-gr-green tracking-wider">COMPLIANCE ENGINE ACTIVE — ALL AUDIT STREAMS RECORDING</span>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {COMPLIANCE_MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="group border border-gr-border bg-gr-surface p-5 hover:border-gr-amber/40 hover:bg-gr-surface-2 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`h-5 w-5 ${mod.color}`} />
                  <span className="text-[10px] text-gr-text-dim tracking-wider">{mod.count}</span>
                </div>
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{mod.label}</h3>
                <p className="text-xs text-gr-text-muted">{mod.description}</p>
                <div className="flex items-center gap-1 text-xs text-gr-text-muted mt-4 group-hover:text-gr-amber transition-colors">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>

        {/* Audit principles */}
        <div className="border border-gr-border bg-gr-surface-2 p-6">
          <div className="text-[11px] text-gr-amber tracking-widest font-bold mb-3">AUDIT PRINCIPLES</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Immutable Records', desc: 'Audit logs cannot be edited or deleted. Every action is timestamped and signed.' },
              { title: 'Role Attribution', desc: 'Every action is attributed to a specific operator with their role context.' },
              { title: 'Regulatory Ready', desc: 'Reports can be generated and submitted to regulatory bodies on demand.' },
            ].map((item) => (
              <div key={item.title}>
                <div className="text-xs font-bold text-gr-text tracking-wider mb-1">{item.title}</div>
                <p className="text-[11px] text-gr-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
