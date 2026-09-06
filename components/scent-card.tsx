import Image from "next/image"
import type { Scent } from "@/lib/scents"
import { savingsPct } from "@/lib/scents"

export function ScentCard({ scent }: { scent: Scent }) {
  const pct = savingsPct(scent.price, scent.compareAt)

  return (
    <a href={scent.buyUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone">
        <Image
          src={scent.image}
          alt={`${scent.brand} ${scent.name}`}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="img-zoom object-contain p-10"
        />
        {scent.badge && (
          <span className="label absolute left-4 top-4 bg-bone px-2.5 py-1 text-ink/60">
            {scent.badge}
          </span>
        )}
      </div>
      <div className="mt-5 flex items-start justify-between gap-2">
        <p className="label text-ink/40">{scent.brand}</p>
        <p className="label text-ink/40">{scent.size}</p>
      </div>
      <h3 className="mt-1 font-serif text-2xl italic text-ink">{scent.name}</h3>
      <p className="mt-1.5 text-sm leading-snug text-ink/50">{scent.blurb}</p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-baseline gap-2.5">
          <span className="font-serif text-xl text-ink">${scent.price}</span>
          <span className="text-sm text-ink/35 line-through">
            ${scent.compareAt}
          </span>
          {pct > 0 && (
            <span className="label text-ink/40">Save {pct}%</span>
          )}
        </div>
      </div>
      <span className="label mt-3 inline-block w-fit border-b border-ink/25 pb-0.5 text-ink/70 transition-colors group-hover:border-ink group-hover:text-ink">
        Shop Object →
      </span>
    </a>
  )
}
