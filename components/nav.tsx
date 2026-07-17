"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { href: "#hotel", label: "The Bed" },
  { href: "#vanity", label: "The Vanity" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#journey", label: "The Journey" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="font-display text-xl tracking-tight">
          santo <span className="italic text-brass">glam</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#hotel"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold uppercase tracking-wide text-cream transition-all hover:bg-brass sm:inline-block"
          >
            Shop The Edit
          </a>
          <button
            aria-label="Open menu"
            className="p-1 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold uppercase tracking-wide text-ink/70"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#hotel"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-cream"
            >
              Shop The Edit
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
