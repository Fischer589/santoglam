const columns = [
  {
    title: "Collections",
    links: [
      { label: "The Hotel Room", href: "/#hotel" },
      { label: "The Vanity Ritual", href: "/#vanity" },
      { label: "The Ritual Hour", href: "/#ritual" },
      { label: "The Journey Kit", href: "/#journey" },
      { label: "Small Details", href: "/#details" },
      { label: "Scents", href: "/scents" },
    ],
  },
  {
    title: "Santo Glam",
    links: [
      { label: "Reviews", href: "/#reviews" },
      { label: "FAQ", href: "/#faq" },
      { label: "Shipping & Returns", href: "/refund-policy" },
      { label: "Join the weekly edit", href: "/#top" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="font-display text-2xl">
              santo <span className="italic text-brass">glam</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/55">
              The curated edit of hotel-quality objects for the bed, the
              vanity, and the ritual hour — plus a direct-to-you fragrance
              edit at genuine wholesale-backed prices, free shipping
              included. We test, rank, and link — you skip the guesswork.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-cream/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-cream/75 transition-colors hover:text-brass"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/10 pt-8 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Santo Glam. All rights reserved.</p>
          <p>
            As an Amazon Associate, Santo Glam earns from qualifying
            purchases. Fragrance orders are sold directly by Santo Glam and
            processed securely through Stripe. Prices and availability are
            accurate as of the date shown and are subject to change.
          </p>
        </div>
      </div>
    </footer>
  )
}
