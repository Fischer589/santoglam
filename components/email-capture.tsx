"use client"

import { useState, type FormEvent } from "react"
import { Mail, CheckCircle2 } from "lucide-react"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <section className="border-y border-ink/10 bg-cream">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-20 text-center lg:px-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-cream">
          <Mail className="h-5 w-5" />
        </div>
        <h2 className="max-w-lg font-display text-3xl font-medium text-ink sm:text-4xl">
          Get next Sunday&apos;s drop before it&apos;s public
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-ink/60">
          One email a week. The three best new objects we found, and nothing
          else. No spam, no daily noise — 40,000+ people already read it.
        </p>

        {submitted ? (
          <div className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream">
            <CheckCircle2 className="h-4 w-4 text-brass" />
            You&apos;re on the list — welcome in.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-full border border-ink/15 bg-paper px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:border-brass focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-colors hover:bg-brass"
            >
              Join Free
            </button>
          </form>
        )}
        <p className="text-xs text-ink/40">
          No pressure. No frequency commitments. Unsubscribe in one click.
        </p>
      </div>
    </section>
  )
}
