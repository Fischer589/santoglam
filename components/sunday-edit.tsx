"use client"

import { useState, type FormEvent } from "react"

export function SundayEdit() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.includes("@")) return
    setSubmitted(true)
  }

  return (
    <section className="hairline-t bg-ink px-6 py-24 text-center lg:px-12 lg:py-32">
      <div className="mx-auto max-w-lg">
        <p className="label text-bone/40">The Sunday Edit</p>
        <h2 className="mt-4 font-serif text-4xl font-light italic text-bone sm:text-5xl">
          One Beautiful Email
        </h2>
        <p className="mt-4 text-base text-bone/55">
          A few things worth knowing. Sent once a week, on Sundays.
        </p>

        <div className="mt-8 hairline-t hairline-b mx-auto max-w-xs py-4">
          <p className="label text-bone/70">The Hotel Room Checklist</p>
          <p className="mt-1 text-sm text-bone/45">
            12 upgrades that can change the feeling of your room.
          </p>
        </div>

        {submitted ? (
          <p className="label mt-8 text-bone">You&apos;re on the list.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full border border-bone/25 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/35 focus:border-bone focus:outline-none"
            />
            <button
              type="submit"
              className="label shrink-0 border border-bone px-6 py-3 text-bone transition-colors hover:bg-bone hover:text-ink"
            >
              Send Me the Checklist →
            </button>
          </form>
        )}
        <p className="mt-5 text-xs text-bone/30">
          No pressure. No frequency commitments.
        </p>
      </div>
    </section>
  )
}
