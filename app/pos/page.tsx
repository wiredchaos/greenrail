import Link from 'next/link'
import { ShoppingCart, Package, Users, Receipt, BarChart2, Tag, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'GreenRails POS — GREENRAILS',
  description: 'Full-featured point of sale: products, inventory, checkout, orders, customers.',
}

const POS_MODULES = [
  { icon: Package, label: 'Products', href: '/pos/products', description: 'Catalog, pricing, variants', color: 'text-gr-cyan' },
  { icon: Tag, label: 'Categories', href: '/pos/categories', description: 'Organize your catalog', color: 'text-gr-green' },
  { icon: BarChart2, label: 'Inventory', href: '/pos/inventory', description: 'Stock levels, reorder points', color: 'text-gr-amber' },
  { icon: ShoppingCart, label: 'Checkout', href: '/pos/checkout', description: 'Cart, taxes, discounts', color: 'text-gr-green' },
  { icon: Receipt, label: 'Orders', href: '/pos/orders', description: 'Order history, receipts', color: 'text-gr-cyan' },
  { icon: Users, label: 'Customers', href: '/pos/customers', description: 'Profiles, KYC, history', color: 'text-gr-green' },
]

export default function POSPage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-cyan pulse-dot" />
            <span className="text-[11px] text-gr-cyan tracking-widest font-bold">MODULE 03</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            GREENRAILS <span className="text-gr-cyan">POS</span>
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Point of sale system for regulated industries. Products, inventory, checkout, receipts, customers.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Quick launch */}
        <div className="mb-8 flex items-center gap-3 flex-wrap">
          <Link href="/pos/checkout" className="bg-gr-cyan text-gr-black px-5 py-2.5 text-sm font-bold tracking-wider hover:bg-gr-cyan/90 transition-colors">
            OPEN CHECKOUT
          </Link>
          <Link href="/pos/products/new" className="border border-gr-cyan/30 text-gr-cyan px-5 py-2.5 text-sm font-medium tracking-wider hover:bg-gr-cyan/5 transition-colors">
            ADD PRODUCT
          </Link>
          <Link href="/pos/orders" className="border border-gr-border text-gr-text-muted px-5 py-2.5 text-sm font-medium tracking-wider hover:border-gr-border-bright transition-colors">
            VIEW ORDERS
          </Link>
        </div>

        {/* Module grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {POS_MODULES.map((mod) => {
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

        {/* 3D POS teaser */}
        <div className="border border-gr-cyan/20 bg-gr-cyan/5 p-6">
          <div className="text-[11px] text-gr-cyan tracking-widest font-bold mb-2">3D POS WORKSPACE — COMING SOON</div>
          <p className="text-xs text-gr-text-muted">
            Immersive 3D operational command center powered by React Three Fiber. Interact with product stations,
            inventory wall, checkout terminal, and analytics screens in 3D space.
          </p>
        </div>
      </div>
    </div>
  )
}
