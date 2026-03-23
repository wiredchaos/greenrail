export const SITE_NAME = 'GREENRAIL'
export const SITE_DESCRIPTION = 'AI-assisted decision rails for public goods funding'
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenrail.org'

export const NAV_LINKS = [
  { label: 'Platform', href: '/platform' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const

export const PRINCIPLES = [
  'AI assists, humans decide',
  'Transparent and auditable',
  'Disagreement stays visible',
  'Equity-aware by design',
  'Global-first usability',
] as const
