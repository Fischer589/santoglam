import { Logo } from "@/components/logo"

const nav = [
  { label: "The Room", href: "/#room" },
  { label: "The Ritual", href: "/#ritual" },
  { label: "The Vanity", href: "/#vanity" },
  { label: "The Journey", href: "/#journey" },
  { label: "Scents", href: "/scents" },
  { label: "Journal", href: "/journal" },
]

const legal = [
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/about#contact" },
  { label: "Privacy", href: "/refund-policy" },
  { label: "Terms", href: "/refund-policy" },
  { label: "Affiliate Disclosure", href: "/about#disclosure" },
]

export function SiteFooter() {
  return (
    <footer className="hairline-t bg-bone px-6 py-16 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 lg:flex-row lg:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-3 font-serif text-lg italic text-ink/50">
            The Art of Living Well.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:grid-cols-2">
          <div>
            <p className="label text-ink/35">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink/60 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label text-ink/35">SantoGlam</p>
            <ul className="mt-4 space-y-2.5">
              {legal.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-ink/60 transition-colors hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="hairline-t mx-auto mt-14 max-w-[1440px] pt-6 text-xs text-ink/35">
        © {new Date().getFullYear()} SantoGlam. All rights reserved. As an
        Amazon Associate, SantoGlam earns from qualifying purchases.
        Fragrance orders are sold directly by SantoGlam and processed
        securely through Stripe.
      </div>
    </footer>
  )
}
