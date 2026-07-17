import Image from "next/image"
import { Star, ShieldCheck, Truck, RefreshCw } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-cream">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1800&q=80&auto=format&fit=crop"
          alt="A beautifully made hotel bed in soft morning light"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="animate-fade-up flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-brass">
          <Star className="h-3.5 w-3.5 fill-brass" />
          Loved by 40,000+ readers · 4.7 avg rating across 127 objects
        </div>

        <h1 className="animate-fade-up delay-1 mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Turn your bedroom into a{" "}
          <span className="italic text-brass">five-star hotel suite</span> —
          tonight.
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
          You don&apos;t need a vacation. You need the robe, the scent, and the
          thread count. This is the exact, shoppable edit of the objects that
          make hotel rooms feel like hotel rooms — hand-picked, rated, and
          linked so you can be sleeping on it by Thursday.
        </p>

        <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#hotel"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-all hover:bg-cream"
          >
            Shop The Hotel Room Edit
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#reviews"
            className="text-sm font-semibold text-cream/70 underline underline-offset-4 transition-colors hover:text-cream"
          >
            Read what buyers say first
          </a>
        </div>

        <div className="animate-fade-up delay-4 mt-12 grid grid-cols-1 gap-4 border-t border-cream/15 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-brass" />
            <span className="text-sm text-cream/75">
              Free Prime shipping on every item
            </span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="h-5 w-5 text-brass" />
            <span className="text-sm text-cream/75">
              Amazon&apos;s no-hassle return window
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brass" />
            <span className="text-sm text-cream/75">
              Every object vetted before it&apos;s listed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
