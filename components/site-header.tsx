"use client"

import { useEffect, useState } from "react"
import { Search, ShoppingBag, Menu, X } from "lucide-react"
import { Logo } from "@/components/logo"

const links = [
  { href: "/#room", label: "The Room" },
  { href: "/#ritual", label: "The Ritual" },
  { href: "/#vanity", label: "The Vanity" },
  { href: "/#journey", label: "The Journey" },
  { href: "/scents", label: "Scents" },
  { href: "/journal", label: "Journal" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-bone transition-shadow duration-300 ${
        scrolled ? "hairline-b" : ""
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-6 lg:px-12">
        <a href="/">
          <Logo className="text-[15px] lg:text-base" />
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label text-ink/60 transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hidden text-ink/70 transition-colors hover:text-ink sm:block">
            <Search className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </button>
          <a
            href="/scents"
            aria-label="Shop"
            className="hidden text-ink/70 transition-colors hover:text-ink sm:block"
          >
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.4} />
          </a>
          <button
            aria-label="Open menu"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <X className="h-5 w-5" strokeWidth={1.4} />
            ) : (
              <Menu className="h-5 w-5" strokeWidth={1.4} />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="hairline-t flex flex-col gap-1 px-6 pb-6 pt-2 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label border-b border-ink/8 py-4 text-ink/70"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
