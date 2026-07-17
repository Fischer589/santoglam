import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { StarRating } from "@/components/star-rating"
import type { Product } from "@/lib/products"

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper"
    >
      {product.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cream">
          {product.badge}
        </span>
      )}
      <div className="relative aspect-square w-full bg-cream">
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="text-[11px] font-bold uppercase tracking-wide text-brass">
          {product.brand}
        </div>
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-snug text-ink/55">
          {product.blurb}
        </p>
        <div className="mt-1">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-xl font-medium text-ink">
            {product.price}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors group-hover:bg-brass">
            Shop Now
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}
