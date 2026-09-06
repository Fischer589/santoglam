import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ScentCard } from "@/components/scent-card"
import { scents } from "@/lib/scents"
import { images } from "@/lib/editorial"

export const metadata: Metadata = {
  title: "The SantoGlam Scent | Full-Size Designer Fragrance",
  description:
    "Genuine, full-size designer fragrances sold directly by SantoGlam — free shipping, secure checkout, no department store markup.",
}

const mens = scents.filter((s) => s.gender === "men")
const womens = scents.filter((s) => s.gender === "women")

export default function ScentsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden bg-ink">
          <Image
            src={images.scentCampaign}
            alt="The SantoGlam Scent"
            fill
            priority
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-14 lg:px-12 lg:pb-20">
            <p className="label text-bone/60">A SantoGlam Original</p>
            <h1 className="mt-4 max-w-2xl font-serif text-5xl font-light italic leading-tight text-bone sm:text-6xl">
              Full-Size Fragrance.
              <br />
              Free Shipping. Real Savings.
            </h1>
            <p className="mt-5 max-w-md text-base text-bone/65">
              Genuine, full-size designer fragrance, sold and shipped
              directly by SantoGlam — the beginning of our own house edit.
            </p>
            <a
              href="#mens"
              className="label mt-8 inline-block w-fit border-b border-bone/40 pb-1 text-bone transition-colors hover:border-bone"
            >
              Shop the Edit →
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-20 text-center lg:px-12">
          <p className="label text-ink/40">Why It&apos;s Cheaper Here</p>
          <h2 className="mt-4 font-serif text-3xl font-light italic text-ink sm:text-4xl">
            The bottle is identical. The markup is what&apos;s missing.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/55">
            Department stores add layers of margin before a fragrance ever
            reaches the shelf. SantoGlam buys the same authentic, full-size
            bottles through direct wholesale channels and passes almost all
            of that savings to you — free shipping included, and every price
            is shown next to what it typically retails for.
          </p>
        </section>

        <section id="mens" className="hairline-t scroll-mt-20 px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="label text-ink/40">For Him</p>
            <h2 className="mt-3 font-serif text-4xl font-light italic text-ink sm:text-5xl">
              Men&apos;s Fragrance
            </h2>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
              {mens.map((s) => (
                <ScentCard key={s.id} scent={s} />
              ))}
            </div>
          </div>
        </section>

        <section id="womens" className="hairline-t px-6 py-20 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <p className="label text-ink/40">For Her</p>
            <h2 className="mt-3 font-serif text-4xl font-light italic text-ink sm:text-5xl">
              Women&apos;s Fragrance
            </h2>
            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
              {womens.map((s) => (
                <ScentCard key={s.id} scent={s} />
              ))}
            </div>
          </div>
        </section>

        <section className="hairline-t px-6 py-24 lg:px-12">
          <div className="mx-auto max-w-2xl">
            <p className="label text-center text-ink/40">Before You Buy</p>
            <div className="mt-10 space-y-8">
              <div className="hairline-t pt-6">
                <h3 className="font-serif text-xl italic text-ink">
                  Is this real, authentic perfume?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  Yes. Every bottle is the genuine, full-size product from the
                  actual brand — sourced through licensed wholesale
                  distribution, not a knockoff or a dupe.
                </p>
              </div>
              <div className="hairline-t pt-6">
                <h3 className="font-serif text-xl italic text-ink">
                  Does shipping cost extra?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  No — shipping is free on every order and already included
                  in the price you see.
                </p>
              </div>
              <div className="hairline-t pt-6">
                <h3 className="font-serif text-xl italic text-ink">
                  How does checkout work?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  Checkout is handled securely by Stripe. SantoGlam never
                  sees or stores your card details.
                </p>
              </div>
              <div className="hairline-t hairline-b pt-6 pb-6">
                <h3 className="font-serif text-xl italic text-ink">
                  What if there&apos;s a problem with my order?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">
                  Contact us within 7 days and we&apos;ll make it right with a
                  replacement or refund. See the full{" "}
                  <a href="/refund-policy" className="text-ink underline underline-offset-2">
                    Shipping &amp; Returns policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
