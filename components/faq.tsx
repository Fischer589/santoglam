"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "How do you pick what goes on this page?",
    a: "Every object is chosen because it consistently earns strong ratings and repeat purchases — we look at review volume, rating trend, and whether it's something we'd actually keep buying. Nothing is included just because a brand paid for it.",
  },
  {
    q: "Do I check out on this site or somewhere else?",
    a: "You check out on Amazon. We link directly to each product page so you get Amazon's own pricing, Prime shipping, and return policy — we never touch your payment info.",
  },
  {
    q: "Is Santo Glam an Amazon affiliate?",
    a: "Yes — when you buy through a link here, we may earn a small commission at no extra cost to you. That's how the weekly edit stays free to read. It never changes the price you pay.",
  },
  {
    q: "What if I don't love something I ordered?",
    a: "You're covered by Amazon's standard return policy on every item, typically 30 days. If something doesn't feel right, send it back — no need to go through us.",
  },
  {
    q: "How often is the edit updated?",
    a: "New objects are added weekly, and anything that stops earning strong reviews gets cut. Join the list above to see new additions before they go live on the page.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-20 mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
          Before you go
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
        {faqs.map((f, i) => {
          const open = openIndex === i
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="font-display text-lg font-medium text-ink">
                  {f.q}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-brass transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open && (
                <p className="pb-6 text-sm leading-relaxed text-ink/60">
                  {f.a}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
