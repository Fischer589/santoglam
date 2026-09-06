import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Shipping & Returns | SantoGlam",
  description:
    "SantoGlam shipping and returns policy — free shipping on every order and how we handle order issues.",
}

export default function RefundPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-6 py-20 lg:px-12 lg:py-28">
        <p className="label text-ink/40">Policies</p>
        <h1 className="mt-4 font-serif text-5xl font-light italic leading-tight text-ink sm:text-6xl">
          Shipping &amp; Returns
        </h1>

        <div className="mt-12 space-y-12 text-ink/65">
          <section className="hairline-t pt-8">
            <h2 className="font-serif text-2xl italic text-ink">Shipping</h2>
            <p className="mt-3 text-base leading-relaxed">
              Every order ships free within the United States — shipping is
              already built into the price you see, so there&apos;s never a
              surprise fee at checkout. You&apos;ll receive an emailed
              confirmation right after checkout.
            </p>
          </section>

          <section className="hairline-t pt-8">
            <h2 className="font-serif text-2xl italic text-ink">
              Returns &amp; Refunds
            </h2>
            <p className="mt-3 text-base leading-relaxed">
              Because fragrance is a sealed, personal-care product, all sales
              are final once an order has shipped — we&apos;re not able to
              accept returns or exchanges after delivery.
            </p>
            <p className="mt-4 text-base leading-relaxed">
              That said, we stand firmly behind getting every order right.
              If any of the following happened, contact us within 7 days of
              delivery and we&apos;ll make it right with a replacement or a
              refund:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-base">
              <li>You received the wrong fragrance</li>
              <li>Your order arrived damaged, leaking, or broken</li>
              <li>
                Your package never arrived, or arrived with an item missing
              </li>
              <li>The product shows a manufacturing defect</li>
            </ul>
            <p className="mt-4 text-base leading-relaxed">
              To start a claim, email us with your order number and, if
              applicable, a photo of the issue. We aim to resolve every
              claim within 2 business days.
            </p>
          </section>

          <section className="hairline-t hairline-b pb-8 pt-8">
            <h2 className="font-serif text-2xl italic text-ink">Contact</h2>
            <p className="mt-3 text-base leading-relaxed">
              Reach out any time by replying to your order confirmation
              email, and we&apos;ll take it from there.
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
