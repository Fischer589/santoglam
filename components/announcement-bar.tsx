const messages = [
  "Free Prime shipping on every object below",
  "127 objects curated · reviewers repurchase 3 out of 4",
  "New drop every Sunday — join 40,000+ on the list",
  "Every link goes straight to Amazon — checkout in one tap",
]

export function AnnouncementBar() {
  const loop = [...messages, ...messages]
  return (
    <div className="overflow-hidden border-b border-ink/10 bg-ink text-cream">
      <div className="flex w-max animate-marquee gap-12 py-2 text-[11px] uppercase tracking-[0.18em]">
        {loop.map((m, i) => (
          <span key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="text-brass">✦</span>
            {m}
          </span>
        ))}
      </div>
    </div>
  )
}
