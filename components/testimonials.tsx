import { Star } from "lucide-react"

const quotes = [
  {
    name: "Priya M.",
    tag: "Verified reader · bought the Hotel Room Edit",
    quote:
      "I bought the pillowcase as a joke and now I genuinely cannot sleep at home without it. Ordered a second one within the month.",
  },
  {
    name: "Devon R.",
    tag: "Verified reader · bought the Vanity Ritual",
    quote:
      "This page is basically a cheat code. I stopped guessing what to buy and just worked down the list. My bathroom looks like a boutique hotel now.",
  },
  {
    name: "Ana K.",
    tag: "Verified reader · bought the Ritual Hour set",
    quote:
      "The candle alone changed my evenings. Didn't expect a $44 candle to be the best purchase I made all year, but here we are.",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-ink py-24 text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
            Proof, not promises
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">
            What buyers say after they click through
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.name}
              className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-8"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brass text-brass" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-lg italic leading-relaxed text-cream/90">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm">
                <div className="font-semibold text-cream">{q.name}</div>
                <div className="text-cream/50">{q.tag}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
