import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function CallToAction() {
  return (
    <section className="py-24 bg-emerald-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl max-w-2xl mx-auto">
          Bring clarity to public goods funding
        </h2>
        <p className="mt-6 text-lg text-emerald-100 max-w-xl mx-auto">
          Join the early cohort of funding committees and organizations using GREENRAIL to run more fair, transparent evaluations.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/demo"
            className="flex items-center gap-2 rounded-lg bg-white px-8 py-3 text-base font-semibold text-emerald-700 shadow-lg hover:bg-emerald-50 transition-colors"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-lg border border-emerald-400 bg-transparent px-8 py-3 text-base font-semibold text-white hover:bg-emerald-700 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
