import Link from 'next/link'
import { Mail, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Contact — GREENRAIL',
  description: 'Get in touch with the GREENRAIL team.',
}

export default function ContactPage() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-sm font-medium text-emerald-600 uppercase tracking-wide">Contact</span>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">Get in touch</h1>
        </div>
        <p className="text-lg text-slate-600 mb-10">
          Interested in piloting GREENRAIL, partnering with us, or learning more? We&apos;d love to hear from you.
        </p>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 flex items-start gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100">
              <Mail className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 mb-1">Email us</p>
              <p className="text-sm text-slate-600">Contact form and email address coming soon.</p>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
          <p className="text-sm font-semibold text-emerald-900 mb-2">Contact form coming soon.</p>
          <p className="text-sm text-emerald-700">In the meantime, request a demo to start a conversation.</p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/demo" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700 transition-colors">
            Request Demo <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/" className="inline-flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 px-5 py-2.5">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
