import type { Metadata } from "next"
import { ShieldCheck, Truck, Sparkles, Lock } from "lucide-react"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { ScentCard } from "@/components/scent-card"
import { scents } from "@/lib/scents"

export const metadata: Metadata = {
  title: "The Scent Edit — Full-Size Designer Fragrances | Santo Glam",
  description:
    "Genuine, full-size designer fragrances at direct prices — no department store markup. Free shipping, secure checkout, real bottles, our own house edit.",
}

const scentsMessages = [
  "Free shipping on every fragrance order",
  "100% genuine, full-size bottles — never a dupe",
  "Secure checkout by Stripe",
  "New arrivals added regularly",
]

const mens = scents.filter((s) => s.gender === "men")
const womens = scents.filter((s) => s.gender === "women")

export default function ScentsPage() {
  return (
    <>
      <AnnouncementBar messages={scentsMessages} />
      <Nav />
      <main>
        {/* Hero */}
        <section className="silk-wash grain relative overflow-hidden">
          <div className="silk-blob animate-drift left-[-10%] top-[-10%] h-[420px] w-[420px] bg-blush/70" />
          <div
            className="silk-blob animate-drift right-[-15%] top-[10%] h-[380px] w-[380px] bg-brass/10"
            style={{ animationDelay: "-6s" }}
          />
          <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24">
            <div className="animate-fade-up flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-brass">
              <Sparkles className="h-3.5 w-3.5" />
              Direct from Santo Glam &middot; free shipping &middot; no
              department store markup
            </div>

            <h1 className="animate-fade-up delay-1 mt-6 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Full-size designer fragrance.{" "}
              <span className="italic text-brass">Free shipping.</span> Real
              savings.
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-ink/70">
              No travel minis, no samples — every bottle here is the genuine,
              full-size fragrance you already know, shipped free, at a price
              that skips the department store counter markup entirely.
            </p>

            <div className="animate-fade-up delay-3 mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="#mens"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wide text-cream shadow-[0_18px_36px_-16px_rgb(46_39_34/0.45)] transition-all hover:bg-brass hover:text-ink"
              >
                Shop The Edit
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#faq"
                className="text-sm font-semibold text-ink/60 underline underline-offset-4 transition-colors hover:text-ink"
              >
                Is this real perfume? Read the FAQ
              </a>
            </div>

            <div className="animate-fade-up delay-4 mt-14 grid grid-cols-1 gap-4 border-t border-ink/10 pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brass" />
                <span className="text-sm text-ink/65">
                  100% genuine, full-size fragrance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-brass" />
                <span className="text-sm text-ink/65">
                  Secure checkout, encrypted by Stripe
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="h-5 w-5 text-brass" />
                <span className="text-sm text-ink/65">
                  Free shipping, carefully packaged, on every order
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Why cheaper */}
        <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
            Why it&apos;s cheaper here
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            The bottle is identical. The <span className="italic text-brass/90">markup</span> is what&apos;s missing.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/60">
            Department stores and big-box retailers add layers of margin
            before a fragrance ever reaches the shelf. We buy the same
            authentic, full-size bottles through direct wholesale channels
            and pass almost all of that savings straight to you — free
            shipping included, every price below is shown next to what it
            typically retails for, so you can see exactly what you&apos;re
            saving.
          </p>
        </section>

        {/* Men's grid */}
        <section id="mens" className="scroll-mt-20 border-t border-ink/10 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                For Him
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                Men&apos;s Fragrance
              </h2>
              <p className="mt-2 font-display text-lg italic text-ink/50">
                Full-size. Genuine. Direct. Free shipping.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mens.map((s) => (
                <ScentCard key={s.id} scent={s} />
              ))}
            </div>
          </div>
        </section>

        {/* Women's grid */}
        <section id="womens" className="scroll-mt-20 border-t border-ink/10 py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                For Her
              </p>
              <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
                Women&apos;s Fragrance
              </h2>
              <p className="mt-2 font-display text-lg italic text-ink/50">
                Full-size. Genuine. Direct. Free shipping.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {womens.map((s) => (
                <ScentCard key={s.id} scent={s} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="silk-wash grain scroll-mt-20 py-24">
          <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
            <div className="text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
                Before you buy
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium text-ink sm:text-4xl">
                Questions, answered
              </h2>
            </div>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-ink/10 bg-paper/80 p-6">
                <h3 className="font-display text-lg font-medium text-ink">
                  Is this real, authentic perfume?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Yes. Every bottle is the genuine, full-size product from
                  the actual brand — sourced through licensed wholesale
                  distribution, not a knockoff or a dupe. The lower price
                  reflects the distribution channel, not the quality.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-paper/80 p-6">
                <h3 className="font-display text-lg font-medium text-ink">
                  Does shipping cost extra?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  No — shipping is free on every order and already included
                  in the price you see. No surprise fee at checkout.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-paper/80 p-6">
                <h3 className="font-display text-lg font-medium text-ink">
                  How does checkout work?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  Checkout is handled securely by Stripe — the same
                  infrastructure used by millions of online stores. We never
                  see or store your card details.
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 bg-paper/80 p-6">
                <h3 className="font-display text-lg font-medium text-ink">
                  What if there&apos;s a problem with my order?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  If your order arrives wrong, damaged, or incomplete, contact
                  us within 7 days and we&apos;ll make it right with a
                  replacement or refund. See our full{" "}
                  <a
                    href="/refund-policy"
                    className="font-semibold text-ink underline underline-offset-2 hover:text-brass"
                  >
                    Shipping &amp; Returns policy
                  </a>{" "}
                  for details.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCta href="#mens" />
    </>
  )
}
