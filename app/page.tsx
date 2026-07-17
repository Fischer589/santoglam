import { AnnouncementBar } from "@/components/announcement-bar"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Agitation } from "@/components/agitation"
import { CollectionSection } from "@/components/collection-section"
import { ValueStack } from "@/components/value-stack"
import { Testimonials } from "@/components/testimonials"
import { EmailCapture } from "@/components/email-capture"
import { Faq } from "@/components/faq"
import { Footer } from "@/components/footer"
import { StickyMobileCta } from "@/components/sticky-mobile-cta"
import { collections } from "@/lib/products"

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Santo Glam — The Hotel Room Edit",
    itemListElement: collections.flatMap((c) => c.products).map((p, i) => ({
      "@type": "Product",
      position: i + 1,
      name: `${p.brand} ${p.name}`,
      url: p.url,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: p.rating,
        reviewCount: p.reviews,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Agitation />
        {collections.map((collection, i) => (
          <CollectionSection
            key={collection.id}
            collection={collection}
            reverse={i % 2 === 1}
          />
        ))}
        <ValueStack />
        <Testimonials />
        <EmailCapture />
        <Faq />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
