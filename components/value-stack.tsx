import { Check, X } from "lucide-react"

const rows = [
  { item: "A one-night hotel stay", price: "$320+", value: "gone by checkout" },
  { item: "A single spa day", price: "$180+", value: "gone by dinner" },
  {
    item: "The candle, the robe, the pillowcase — bundled",
    price: "Less than one night",
    value: "yours every single night",
    highlight: true,
  },
]

export function ValueStack() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 lg:px-10">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
          Do the math
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
          One hotel night vs. the objects that made you love it
        </h2>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10">
        {rows.map((r) => (
          <div
            key={r.item}
            className={`flex flex-col gap-2 border-b border-ink/10 p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between ${
              r.highlight ? "bg-brass/10" : "bg-paper"
            }`}
          >
            <div className="flex items-center gap-3">
              {r.highlight ? (
                <Check className="h-5 w-5 shrink-0 text-brass" />
              ) : (
                <X className="h-5 w-5 shrink-0 text-ink/30" />
              )}
              <span
                className={`font-display text-lg ${
                  r.highlight ? "font-semibold text-ink" : "text-ink/60"
                }`}
              >
                {r.item}
              </span>
            </div>
            <div className="flex items-center gap-3 pl-8 sm:pl-0">
              <span className="font-display text-xl font-medium text-ink">
                {r.price}
              </span>
              <span className="text-xs uppercase tracking-wide text-ink/45">
                {r.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-ink/50">
        Buy once. Feel it every night. That&apos;s the whole pitch.
      </p>
    </section>
  )
}
