import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "About | SantoGlam",
  description:
    "SantoGlam is a modern luxury lifestyle and curation brand — the objects, rituals, and details that make ordinary spaces feel extraordinary.",
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-12 lg:py-28">
        <p className="label text-ink/40">About</p>
        <h1 className="mt-4 font-serif text-5xl font-light italic leading-tight text-ink sm:text-6xl">
          The Art of Living Well.
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-ink/65">
          <p>
            SantoGlam helps people create the feeling of a five-star hotel, a
            beautiful home, an elevated ritual, and a more sophisticated
            everyday life — without requiring an enormous budget.
          </p>
          <p>
            You don&apos;t need more things. You need better ones. SantoGlam
            is not about buying hundreds of products. It is about
            discovering the small number of objects, rituals, and details
            that dramatically improve everyday life — curated, tested, and
            presented as a single, considered edit rather than an endless
            catalog.
          </p>
        </div>

        <section id="contact" className="mt-16 hairline-t pt-10">
          <h2 className="font-serif text-2xl italic text-ink">Contact</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
            Reach out any time by replying to a SantoGlam email, or by
            replying to your order confirmation if your question is about a
            SantoGlam Scent order.
          </p>
        </section>

        <section id="disclosure" className="mt-16 hairline-t pt-10">
          <h2 className="font-serif text-2xl italic text-ink">
            Affiliate Disclosure
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/55">
            Many of the objects in the SantoGlam edit are linked to Amazon.
            As an Amazon Associate, SantoGlam earns from qualifying
            purchases at no additional cost to you — every object shown has
            been selected on its own merits, independent of any commission.
            SantoGlam&apos;s own fragrance line is sold and fulfilled
            directly by SantoGlam and is not an affiliate product.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
