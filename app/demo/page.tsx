import Link from 'next/link'
import { Calendar, Video, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Request Demo — GREENRAIL',
  description: 'Schedule a demo of GREENRAIL for your funding committee or organization.',
}

export default function DemoPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Demo</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Request a demo</h1>
        </div>
        <p className="text-lg text-slate-600 mb-10">
          See GREENRAIL in action. We&apos;ll walk you through how it works for your specific funding context.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 mb-4">
              <Video className="h-5 w-5 text-emerald-600" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Live walkthrough</h3>
            <p className="text-sm text-slate-600">30-minute guided tour of the platform with your team&apos;s questions answered in real time.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 mb-4">
              <Calendar className="h-5 w-5 text-teal-600" />
            </div>
            <h3 className="text-base font-semibold text-slate-900 mb-2">Schedule at your convenience</h3>
            <p className="text-sm text-slate-600">Pick a time that works for your committee. We support all major timezones.</p>
          </div>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-8 text-center">
          <p className="text-base font-semibold text-emerald-900 mb-2">Scheduling system coming soon.</p>
          <p className="text-sm text-emerald-700 mb-6">Contact us directly to arrange a demo in the meantime.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
