import { Star, ShieldCheck, Truck, RefreshCw } from "lucide-react"

export function Hero() {
  return (
    <section id="top" className="silk-wash grain relative overflow-hidden text-ink">
      {/* soft silk/cloud light — pure CSS, never a broken image */}
      <div className="silk-blob animate-drift left-[-10%] top-[-10%] h-[420px] w-[420px] bg-blush/70" />
      <div
        className="silk-blob animate-drift right-[-15%] top-[10%] h-[380px] w-[380px] bg-brass/10"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="silk-blob animate-drift bottom-[-20%] left-[20%] h-[460px] w-[460px] bg-cream"
        style={{ animationDelay: "-11s" }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-24 pt-20 lg:px-10 lg:pb-32 lg:pt-28">
        <div className="animate-fade-up flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-brass">
          <Star className="h-3.5 w-3.5 fill-brass text-brass" />
          Loved by 40,000+ readers &middot; 4.7 avg rating across 127 objects
        </div>

        <h1 className="animate-fade-up delay-1 mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Turn your bedroom into a{" "}
          <span className="italic text-brass">five-star hotel suite</span> —
          tonight.
        </h1>

        <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
          You don&apos;t need a vacation. You need the robe, the scent, and the
          thread count. This is the exact, shoppable edit of the objects that
          make hotel rooms feel like hotel rooms — hand-picked, rated, and
          linked so you can be sleeping on it by Thursday.
        </p>

        <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#hotel"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-cream shadow-[0_18px_36px_-16px_rgb(46_39_34/0.45)] transition-all hover:bg-brass hover:text-ink"
          >
            Shop The Hotel Room Edit
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#reviews"
            className="text-sm font-semibold text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
          >
            Read what buyers say first
          </a>
        </div>

        <div className="animate-fade-up delay-4 mt-14 grid grid-cols-1 gap-4 border-t border-ink/10 pt-8 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-brass" />
            <span className="text-sm text-ink/65">
              Free Prime shipping on every item
            </span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="h-5 w-5 text-brass" />
            <span className="text-sm text-ink/65">
              Amazon&apos;s no-hassle return window
            </span>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-brass" />
            <span className="text-sm text-ink/65">
              Every object vetted before it&apos;s listed
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
