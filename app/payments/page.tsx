import Link from 'next/link'
import { CreditCard, Banknote, Building2, Coins, ArrowRight, Layers } from 'lucide-react'

export const metadata = {
  title: 'Payments Layer — GREENRAILS',
  description: 'Cash, card, ACH, crypto, and internal credit payments with provider abstraction.',
}

const PAYMENT_METHODS = [
  { icon: Banknote, label: 'Cash', status: 'READY', description: 'Physical cash tracking and reconciliation', color: 'text-gr-green' },
  { icon: CreditCard, label: 'Card', status: 'READY', description: 'Debit and credit card processing', color: 'text-gr-green' },
  { icon: Building2, label: 'ACH', status: 'READY', description: 'Automated clearing house bank transfers', color: 'text-gr-green' },
  { icon: Coins, label: 'Crypto', status: 'BETA', description: 'Stablecoin and cryptocurrency settlement', color: 'text-gr-amber' },
  { icon: Layers, label: 'Internal Credits', status: 'READY', description: 'Platform-native credit system', color: 'text-gr-cyan' },
]

export default function PaymentsPage() {
  return (
    <div className="min-h-screen bg-gr-black">
      <div className="border-b border-gr-border bg-gr-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gr-green pulse-dot" />
            <span className="text-[11px] text-gr-green tracking-widest font-bold">MODULE 04</span>
          </div>
          <h1 className="text-3xl font-bold text-gr-text tracking-wide">
            <span className="text-gr-green">PAYMENTS</span> LAYER
          </h1>
          <p className="text-sm text-gr-text-muted mt-2">
            Provider-agnostic payment abstraction. Connect any processor without changing application code.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Payment methods */}
        <h2 className="text-[11px] text-gr-green tracking-widest font-bold mb-4">SUPPORTED PAYMENT METHODS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {PAYMENT_METHODS.map((method) => {
            const Icon = method.icon
            return (
              <div
                key={method.label}
                className="border border-gr-border bg-gr-surface p-5"
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`h-5 w-5 ${method.color}`} />
                  <span className={`text-[10px] font-bold tracking-widest px-2 py-0.5 border ${
                    method.status === 'READY'
                      ? 'border-gr-green/30 text-gr-green bg-gr-green/5'
                      : 'border-gr-amber/30 text-gr-amber bg-gr-amber/5'
                  }`}>
                    {method.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-gr-text tracking-wider mb-1">{method.label}</h3>
                <p className="text-xs text-gr-text-muted">{method.description}</p>
              </div>
            )
          })}
        </div>

        {/* Architecture note */}
        <div className="border border-gr-border bg-gr-surface-2 p-6 mb-6">
          <div className="text-[11px] text-gr-green tracking-widest font-bold mb-3">PROVIDER ABSTRACTION LAYER</div>
          <p className="text-xs text-gr-text-muted leading-relaxed mb-4">
            All payment processors are accessed through a unified API interface. Swap providers, add new ones,
            or run multiple providers simultaneously without changing application logic.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {['Stripe', 'Square', 'Plaid (ACH)', 'Coinbase Commerce'].map((provider) => (
              <div key={provider} className="border border-gr-border/50 px-3 py-2 text-[11px] text-gr-text-muted text-center tracking-wider">
                {provider}
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/payments/new" className="bg-gr-green text-gr-black px-5 py-2.5 text-sm font-bold tracking-wider hover:bg-gr-green/90 transition-colors">
            NEW PAYMENT
          </Link>
          <Link href="/payments/history" className="border border-gr-border text-gr-text-muted px-5 py-2.5 text-sm font-medium tracking-wider hover:border-gr-border-bright transition-colors flex items-center gap-2">
            HISTORY <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
