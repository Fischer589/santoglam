const stats = [
  { value: "127", label: "objects curated, not created" },
  { value: "4.7★", label: "average rating across the edit" },
  { value: "40K+", label: "readers on the weekly drop" },
  { value: "3 of 4", label: "buyers who come back for more" },
]

export function TrustBar() {
  return (
    <section className="border-b border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="font-display text-3xl font-medium text-ink sm:text-4xl">
              {s.value}
            </div>
            <div className="mt-1 text-xs uppercase tracking-wide text-ink/55">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
