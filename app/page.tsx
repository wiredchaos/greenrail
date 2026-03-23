import { Hero } from '@/components/sections/Hero'
import { Problem } from '@/components/sections/Problem'
import { Solution } from '@/components/sections/Solution'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Features } from '@/components/sections/Features'
import { WhoItsFor } from '@/components/sections/WhoItsFor'
import { Principles } from '@/components/sections/Principles'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { CallToAction } from '@/components/sections/CallToAction'

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <WhoItsFor />
      <Principles />
      <DashboardPreview />
      <CallToAction />
    </>
  )
}
