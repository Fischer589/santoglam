import Image from "next/image"
import { chapters } from "@/lib/editorial"
import { allProducts } from "@/lib/products"

export function Collections() {
  return (
    <section className="hairline-t">
      <div className="px-6 pt-24 text-center lg:px-12">
        <p className="label text-ink/40">The Collections</p>
        <h2 className="mt-4 font-serif text-4xl font-light italic text-ink sm:text-5xl">
          Five Chapters of One World
        </h2>
      </div>

      {chapters.map((chapter, i) => {
        const products = chapter.productIds
          .map((id) => allProducts.find((p) => p.id === id))
          .filter(Boolean)
          .slice(0, 4) as typeof allProducts
        const reverse = i % 2 === 1

        return (
          <div
            key={chapter.id}
            id={chapter.id}
            className="hairline-t mt-24 grid scroll-mt-20 grid-cols-1 lg:grid-cols-2"
          >
            <div
              className={`relative h-[420px] lg:h-[560px] ${
                reverse ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={chapter.image}
                alt={chapter.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-14 lg:px-16 lg:py-0">
              <span className="label text-ink/35">{chapter.number}</span>
              <h3 className="mt-3 font-serif text-4xl font-light italic text-ink sm:text-5xl">
                {chapter.title}
              </h3>
              <p className="mt-3 max-w-xs text-base text-ink/55">
                {chapter.tagline}
              </p>

              <div className="mt-9 grid grid-cols-4 gap-3">
                {products.map((p) => (
                  <a
                    key={p.id}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="group relative aspect-square overflow-hidden bg-stone"
                    title={p.name}
                  >
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="120px"
                      className="img-zoom object-contain p-3"
                    />
                  </a>
                ))}
              </div>

              <a
                href="#the-edit"
                className="label mt-8 inline-block w-fit border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink"
              >
                Discover →
              </a>
            </div>
          </div>
        )
      })}
    </section>
  )
}
