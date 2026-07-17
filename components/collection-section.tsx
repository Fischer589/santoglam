import { ProductCard } from "@/components/product-card"
import type { Collection } from "@/lib/products"

export function CollectionSection({
  collection,
  reverse = false,
}: {
  collection: Collection
  reverse?: boolean
}) {
  return (
    <section
      id={collection.id}
      className="scroll-mt-20 border-t border-ink/10 py-20 first:border-t-0"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          className={`flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brass">
              {collection.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink sm:text-5xl">
              {collection.title}
            </h2>
            <p className="mt-2 font-display text-lg italic text-ink/50">
              {collection.subtitle}
            </p>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            {collection.hook}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collection.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
