import type { Metadata } from "next"
import { AnnouncementBar } from "@/components/announcement-bar"
import { Nav } from "@/components/nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Shipping & Returns | Santo Glam",
  description:
    "Santo Glam shipping and returns policy — free shipping on every order and how we handle order issues.",
}

const scentsMessages = [
  "Free shipping on every fragrance order",
  "100% genuine, full-size bottles — never a dupe",
  "Secure checkout by Stripe",
  "New arrivals added regularly",
]

export default function RefundPolicyPage() {
  return (
    <>
      <AnnouncementBar messages={scentsMessages} />
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
          Policies
        </p>
        <h1 className="mt-3 font-display text-4xl font-medium text-ink sm:text-5xl">
          Shipping &amp; Returns
        </h1>

        <div className="mt-10 space-y-10 text-ink/70">
          <section>
            <h2 className="font-display text-xl font-medium text-ink">
              Shipping
            </h2>
            <p className="mt-3 leading-relaxed">
              Every order ships free within the United States — shipping is
              already built into the price you see, so there&apos;s never a
              surprise fee at checkout. Once your order is placed, we&apos;ll
              get it packed and on its way; you&apos;ll receive an emailed
              confirmation with your order details right after checkout.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">
              Returns &amp; Refunds
            </h2>
            <p className="mt-3 leading-relaxed">
              Because fragrance is a sealed, personal-care product, all sales
              are final once an order has shipped — we&apos;re not able to
              accept returns or exchanges after delivery.
            </p>
            <p className="mt-4 leading-relaxed">
              That said, we stand firmly behind getting every order right.
              If any of the following happened, contact us within 7 days of
              delivery and we&apos;ll make it right with a replacement or a
              refund:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>You received the wrong fragrance</li>
              <li>Your order arrived damaged, leaking, or broken</li>
              <li>
                Your package never arrived, or arrived with an item missing
              </li>
              <li>The product shows a manufacturing defect</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              To start a claim, email us with your order number and, if
              applicable, a photo of the issue. We aim to resolve every claim
              within 2 business days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-medium text-ink">
              Contact
            </h2>
            <p className="mt-3 leading-relaxed">
              Reach out any time by replying to your order confirmation
              email, and we&apos;ll take it from there.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
