import Image from "next/image"
import { heroProducts } from "@/lib/editorial"
import { allProducts } from "@/lib/products"

export function HeroProducts() {
  return (
    <section className="hairline-t px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <p className="label text-center text-ink/40">Objects Within a Life</p>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {heroProducts.map((hp) => {
            const product = hp.productId
              ? allProducts.find((p) => p.id === hp.productId)
              : undefined
            const href = hp.href ?? product?.url ?? "#"
            const image = product?.image ?? hp.image

            return (
              <a
                key={hp.id}
                href={href}
                target={hp.href ? undefined : "_blank"}
                rel={hp.href ? undefined : "noopener noreferrer sponsored"}
                className="group flex flex-col"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone">
                  {image ? (
                    <Image
                      src={image}
                      alt={hp.label}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className={
                        product
                          ? "img-zoom object-contain p-10"
                          : "img-zoom object-cover"
                      }
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-serif text-5xl italic text-ink/15">
                        ✦
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="mt-6 font-serif text-2xl italic text-ink">
                  {hp.label}
                </h3>
                <p className="mt-2 text-sm leading-snug text-ink/50">
                  {hp.tagline}
                </p>
                <span className="label mt-4 inline-block w-fit border-b border-ink/25 pb-0.5 text-ink/70 transition-colors group-hover:border-ink group-hover:text-ink">
                  {hp.cta}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
