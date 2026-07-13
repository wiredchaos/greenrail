import Link from 'next/link'
import { MapPin, Users, CheckSquare, Package, BarChart2, GitBranch, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Operations Layer — GREENRAILS',
  description: 'Business management: locations, teams, tasks, inventory, reporting, and workflow management.',
}

const OPS_MODULES = [
  { icon: MapPin, label: 'Locations', href: '/operations/locations', description: 'Manage physical sites and virtual locations', color: 'text-gr-cyan' },
  { icon: Users, label: 'Teams', href: '/operations/teams', description: 'Team structure, roles, and assignments', color: 'text-gr-green' },
  { icon: CheckSquare, label: 'Tasks', href: '/operations/tasks', description: 'Task management and workflow tracking', color: 'text-gr-cyan' },
  { icon: Package, label: 'Inventory', href: '/operations/inventory', description: 'Cross-location inventory management', color: 'text-gr-amber' },
  { icon: BarChart2, label: 'Reporting', href: '/operations/reports', description: 'Business intelligence and analytics', color: 'text-gr-green' },
  { icon: GitBranch, label: 'Workflows', href: '/operations/workflows', description: 'Process automation and approval chains', color: 'text-gr-cyan' },
]

export default function OperationsPage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-cyan pulse-dot" />
            <span className="text-[11px] text-gr-cyan tracking-widest font-bold">MODULE 06</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-cyan">OPERATIONS</span> LAYER
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Business management system for multi-location, multi-team enterprise operations.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {OPS_MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="group border border-gr-border bg-gr-surface p-5 hover:border-gr-cyan/40 hover:bg-gr-surface-2 transition-all"
              >
                <Icon className={`h-5 w-5 ${mod.color} mb-4`} />
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{mod.label}</h3>
                <p className="text-xs text-gr-text-muted">{mod.description}</p>
                <div className="flex items-center gap-1 text-xs text-gr-text-muted mt-4 group-hover:text-gr-cyan transition-colors">
                  Open <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
