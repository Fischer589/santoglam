import Image from "next/image"
import type { Product } from "@/lib/products"

export function ProductCard({
  product,
  size = "md",
}: {
  product: Product
  size?: "lg" | "md" | "sm"
}) {
  const aspect = size === "lg" ? "aspect-[4/5]" : "aspect-square"

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="group flex flex-col"
    >
      <div className={`relative ${aspect} w-full overflow-hidden bg-stone`}>
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="img-zoom object-contain p-8"
        />
      </div>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <p className="label text-ink/40">{product.brand}</p>
          <h3
            className={`mt-1 font-serif italic text-ink ${
              size === "lg" ? "text-2xl" : "text-xl"
            }`}
          >
            {product.name}
          </h3>
          {size !== "sm" && (
            <p className="mt-1.5 max-w-xs text-sm leading-snug text-ink/50">
              {product.blurb}
            </p>
          )}
        </div>
      </div>
      <span className="label mt-3 inline-block w-fit border-b border-ink/25 pb-0.5 text-ink/70 transition-colors group-hover:border-ink group-hover:text-ink">
        Discover →
      </span>
    </a>
  )
}
