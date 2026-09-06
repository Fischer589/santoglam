import { theEditIds } from "@/lib/editorial"
import { allProducts } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function TheEdit() {
  const items = theEditIds
    .map((id) => allProducts.find((p) => p.id === id))
    .filter(Boolean) as typeof allProducts

  return (
    <section id="the-edit" className="hairline-t scroll-mt-20 px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-xl text-center">
          <p className="label text-ink/40">The Edit</p>
          <h2 className="mt-4 font-serif text-4xl font-light italic text-ink sm:text-5xl">
            A Few Things Worth Bringing Into Your Life
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-6">
          {items.map((p, i) => (
            <div key={p.id} className={i < 2 ? "col-span-2 lg:col-span-3" : "col-span-1 lg:col-span-1"}>
              <ProductCard product={p} size={i < 2 ? "lg" : "sm"} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
