import Image from "next/image"
import { ArrowUpRight, BadgeCheck } from "lucide-react"
import type { Scent } from "@/lib/scents"
import { savingsPct } from "@/lib/scents"

export function ScentCard({ scent }: { scent: Scent }) {
  const pct = savingsPct(scent.price, scent.compareAt)

  return (
    <a
      href={scent.buyUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Shop ${scent.brand} ${scent.name} — $${scent.price}`}
      className="scent-card group relative flex flex-col overflow-hidden rounded-[28px] border border-ink/10 bg-paper shadow-[0_1px_2px_rgb(46_39_34/0.04)] transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-[0_32px_64px_-28px_rgb(46_39_34/0.28)]"
    >
      {/* Badges */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-4">
        <div className="flex flex-col gap-2">
          {scent.badge && (
            <span className="inline-flex w-fit items-center rounded-full bg-ink px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-cream shadow-sm">
              {scent.badge}
            </span>
          )}
        </div>
        {pct > 0 && (
          <span className="inline-flex w-fit items-center rounded-full bg-brass px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-ink shadow-sm">
            Save {pct}%
          </span>
        )}
      </div>

      {/* Image stage — generous whitespace, the bottle is the hero */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-b from-cream to-paper sm:aspect-square">
        <Image
          src={scent.image}
          alt={`${scent.brand} ${scent.name} — genuine bottle`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className={`object-contain p-9 transition-all duration-700 ease-out sm:p-10 ${
            scent.secondaryImage
              ? "group-hover:scale-[1.03] group-hover:opacity-0"
              : "group-hover:scale-[1.04]"
          }`}
        />
        {scent.secondaryImage && (
          <Image
            src={scent.secondaryImage}
            alt={`${scent.brand} ${scent.name} — detail view`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-contain p-9 opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 sm:p-10"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-brass">
            {scent.brand}
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wide text-ink/35">
            {scent.size}
          </span>
        </div>

        <h3 className="font-display text-xl font-medium leading-snug text-ink">
          {scent.name}
        </h3>

        <p className="line-clamp-2 text-[13.5px] leading-relaxed text-ink/55">
          {scent.blurb}
        </p>

        {scent.authentic && (
          <div className="mt-0.5 flex items-center gap-1.5 text-[11px] font-semibold text-ink/45">
            <BadgeCheck className="h-3.5 w-3.5 text-brass" />
            100% genuine, full-size bottle
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-medium text-ink">
              ${scent.price}
            </span>
            <span className="text-[13px] text-ink/35 line-through">
              ${scent.compareAt}
            </span>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-wide text-cream shadow-sm transition-colors duration-300 group-hover:bg-brass group-hover:text-ink">
            Buy Now
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  )
}
