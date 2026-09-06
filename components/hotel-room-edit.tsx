import Image from "next/image"
import { images, santoglam12Ids } from "@/lib/editorial"
import { allProducts } from "@/lib/products"

export function HotelRoomEdit() {
  const items = santoglam12Ids
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts

  return (
    <section id="hotel-room" className="hairline-t">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
        <div className="relative h-[440px] lg:h-auto">
          <Image
            src={images.chapterRoom}
            alt="A composed hotel-style bedroom"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-6 py-16 lg:px-14 lg:py-20">
          <p className="label text-ink/40">The Flagship Edit</p>
          <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-ink sm:text-5xl">
            The Hotel Room
          </h2>
          <p className="mt-3 max-w-sm text-base text-ink/60">
            Make home feel like somewhere worth checking into.
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/50">
            The robe. The sheets. The scent. The light. The little details
            that make you exhale.
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-serif text-3xl italic text-ink">
              The SantoGlam 12
            </span>
          </div>
          <p className="mt-1 text-sm text-ink/45">
            12 objects. One transformation.
          </p>

          <ol className="mt-8 divide-y divide-ink/8 hairline-t hairline-b">
            {items.map((product, i) => (
              <li key={product.id}>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="group flex items-center gap-4 py-3.5"
                >
                  <span className="w-6 shrink-0 font-serif text-sm italic text-ink/35">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden bg-stone">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="48px"
                      className="object-contain p-1.5"
                    />
                  </div>
                  <span className="flex-1 text-sm text-ink/75 transition-colors group-hover:text-ink">
                    {product.brand} — {product.name}
                  </span>
                  <span className="label shrink-0 text-ink/30 transition-colors group-hover:text-ink">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-3">
            <a
              href="#the-edit"
              className="label border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink"
            >
              Shop the Hotel Room →
            </a>
            <a
              href="#the-edit"
              className="label text-ink/50 transition-colors hover:text-ink"
            >
              Start with 3 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
