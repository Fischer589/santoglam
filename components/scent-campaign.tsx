import Image from "next/image"
import { images } from "@/lib/editorial"

export function ScentCampaign() {
  return (
    <section className="relative hairline-t overflow-hidden bg-ink">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[480px] lg:h-[640px]">
          <Image
            src={images.scentCampaign}
            alt="The SantoGlam Scent"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-0">
          <p className="label text-bone/40">A SantoGlam Original</p>
          <h2 className="mt-5 font-serif text-4xl font-light italic leading-tight text-bone sm:text-5xl lg:text-6xl">
            The SantoGlam
            <br />
            Scent
          </h2>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-bone/60">
            The smell of checking into somewhere expensive.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/40">
            Full-size, genuine fragrance — the beginning of SantoGlam&apos;s
            own house edit, sold and shipped directly.
          </p>
          <a
            href="/scents"
            className="label mt-9 inline-block w-fit border-b border-bone/40 pb-1 text-bone transition-colors hover:border-bone"
          >
            Discover the Scent →
          </a>
        </div>
      </div>
    </section>
  )
}
