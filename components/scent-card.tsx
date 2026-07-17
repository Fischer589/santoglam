import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Scent } from "@/lib/scents"
import { savingsPct } from "@/lib/scents"

export function ScentCard({ scent }: { scent: Scent }) {
  const pct = savingsPct(scent.price, scent.compareAt)

  return (
    <a
      href={scent.buyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper"
    >
      {scent.badge && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-ink px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-cream">
          {scent.badge}
        </span>
      )}
      {pct > 0 && (
        <span className="absolute right-3 top-3 z-10 rounded-full bg-brass px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink">
          Save {pct}%
        </span>
      )}
      <div className="relative aspect-square w-full bg-cream">
        <Image
          src={scent.image}
          alt={`${scent.brand} ${scent.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wide text-brass">
            {scent.brand}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
            {scent.size}
          </span>
        </div>
        <h3 className="font-display text-lg font-medium leading-snug text-ink">
          {scent.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-snug text-ink/55">
          {scent.blurb}
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl font-medium text-ink">
              ${scent.price}
            </span>
            <span className="text-sm text-ink/40 line-through">
              ${scent.compareAt}
            </span>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-ink px-4 py-2 text-xs font-bold uppercase tracking-wide text-cream transition-colors group-hover:bg-brass">
            Buy Now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}
