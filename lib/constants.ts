export const SITE_NAME = 'GREENRAILS'
export const SITE_TAGLINE = 'Bank the Unbankable™'
export const SITE_DESCRIPTION = 'Intelligence-driven payments, POS, compliance, operations, and publishing platform'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenrails.io'
export const GETMONEYNEWS_URL = process.env.NEXT_PUBLIC_GETMONEYNEWS_URL || 'https://getmoneynews.online'

export const SIGNAL_WORKFLOW = ['Signal', 'Insight', 'Action'] as const

export const NAV_LINKS = [
  { label: 'Intelligence', href: '/intelligence' },
  { label: 'POS', href: '/pos' },
  { label: 'Payments', href: '/payments' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Operations', href: '/operations' },
  { label: 'Content', href: '/content' },
] as const

export const PLATFORM_MODULES = [
  { id: 'intelligence', label: 'Intelligence', href: '/intelligence', description: 'Market signals, insights, regulatory events' },
  { id: 'pos', label: 'GreenRails POS', href: '/pos', description: 'Products, inventory, checkout, orders' },
  { id: 'payments', label: 'Payments', href: '/payments', description: 'Cash, card, ACH, crypto, credits' },
  { id: 'compliance', label: 'Compliance', href: '/compliance', description: 'Audit logs, regulatory tracking, reporting' },
  { id: 'operations', label: 'Operations', href: '/operations', description: 'Locations, teams, tasks, workflows' },
  { id: 'content', label: 'Content', href: '/content', description: 'Publishing engine for GreenRails & GetMoneyNews' },
  { id: 'admin', label: 'Admin', href: '/admin', description: 'Users, roles, permissions, settings' },
] as const

export const SIGNAL_CATEGORIES = [
  'MARKET',
  'REGULATORY',
  'COMPLIANCE',
  'RISK',
  'INDUSTRY',
  'CRYPTO',
  'MACRO',
] as const

export const PAYMENT_METHODS = [
  { id: 'cash', label: 'Cash', icon: 'Banknote' },
  { id: 'card', label: 'Card', icon: 'CreditCard' },
  { id: 'ach', label: 'ACH', icon: 'Building2' },
  { id: 'crypto', label: 'Crypto', icon: 'Bitcoin' },
  { id: 'credits', label: 'Internal Credits', icon: 'Coins' },
] as const
