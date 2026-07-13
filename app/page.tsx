'use client'

import { useState } from 'react'
import { Hero } from '@/components/sections/Hero'
import { SignalTicker } from '@/components/sections/SignalTicker'
import { InsightPanel } from '@/components/sections/InsightPanel'
import { ActionPanel } from '@/components/sections/ActionPanel'
import { BlogFeed } from '@/components/sections/BlogFeed'
import type { TickerSignal } from '@/components/sections/SignalTicker'

export default function Home() {
  const [activeSignal, setActiveSignal] = useState<TickerSignal | null>(null)

  return (
    <>
      <Hero />
      {/* Step 1: Signal */}
      <SignalTicker onSignalClick={setActiveSignal} />
      {/* Step 2: Insight */}
      <InsightPanel activeSignal={activeSignal} />
      {/* Step 3: Action */}
      <ActionPanel />
      {/* Content feed */}
      <BlogFeed />
    </>
  )
}
