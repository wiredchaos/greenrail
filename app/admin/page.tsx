import Link from 'next/link'
import { Users, Shield, Key, FileText, Image, Activity, Package, BarChart2, Settings, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Admin Panel — GREENRAILS',
  description: 'Platform administration: users, roles, permissions, content, media, compliance, and settings.',
}

const ADMIN_MODULES = [
  { icon: Users, label: 'Users', href: '/admin/users', description: 'Manage platform users', color: 'text-gr-green' },
  { icon: Shield, label: 'Roles', href: '/admin/roles', description: 'Define role structures', color: 'text-gr-cyan' },
  { icon: Key, label: 'Permissions', href: '/admin/permissions', description: 'Fine-grained access control', color: 'text-gr-amber' },
  { icon: FileText, label: 'Articles', href: '/admin/articles', description: 'Content moderation', color: 'text-gr-green' },
  { icon: Image, label: 'Media', href: '/admin/media', description: 'Asset library management', color: 'text-gr-cyan' },
  { icon: Activity, label: 'Signals', href: '/admin/signals', description: 'Intelligence signal management', color: 'text-gr-green' },
  { icon: Package, label: 'Inventory', href: '/admin/inventory', description: 'Platform-wide inventory', color: 'text-gr-amber' },
  { icon: Shield, label: 'Compliance', href: '/admin/compliance', description: 'Compliance oversight', color: 'text-gr-amber' },
  { icon: Settings, label: 'Settings', href: '/admin/settings', description: 'Platform configuration', color: 'text-gr-text-muted' },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-text-muted" />
            <span className="text-[11px] text-gr-text-muted tracking-widest font-bold">MODULE 08</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-text">ADMIN</span> CENTER
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Platform administration. Access restricted to Super Admin and Admin roles.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* RBAC notice */}
        <div className="border border-gr-amber/20 bg-gr-amber/5 px-4 py-3 mb-8 flex items-center gap-3">
          <Shield className="h-4 w-4 text-gr-amber shrink-0" />
          <span className="text-xs text-gr-amber tracking-wider">
            ROLE-BASED ACCESS CONTROL ACTIVE — ALL ACTIONS AUDIT LOGGED
          </span>
        </div>

        {/* Admin grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADMIN_MODULES.map((mod) => {
            const Icon = mod.icon
            return (
              <Link
                key={mod.href}
                href={mod.href}
                className="group border border-gr-border bg-gr-surface p-5 hover:border-gr-border-bright hover:bg-gr-surface-2 transition-all"
              >
                <Icon className={`h-5 w-5 ${mod.color} mb-4`} />
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{mod.label}</h3>
                <p className="text-xs text-gr-text-muted">{mod.description}</p>
                <div className="flex items-center gap-1 text-xs text-gr-text-muted mt-4 group-hover:text-gr-text transition-colors">
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
