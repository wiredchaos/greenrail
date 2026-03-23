import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'GREENRAIL — AI-assisted public goods funding',
  description: 'Help committees, funders, and communities evaluate proposals with more clarity, fairness, and transparency.',
  keywords: ['public goods', 'AI', 'funding', 'decision support', 'grant committees'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
