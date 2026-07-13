import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'GREENRAILS — Bank the Unbankable™',
  description: 'Intelligence-driven payments, POS, compliance, operations, and publishing platform for regulated and underserved industries.',
  keywords: ['fintech', 'payments', 'POS', 'compliance', 'intelligence', 'banking', 'underserved'],
  openGraph: {
    title: 'GREENRAILS — Bank the Unbankable™',
    description: 'Signal → Insight → Action. Enterprise fintech for regulated industries.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-mono antialiased bg-gr-black text-gr-text">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
