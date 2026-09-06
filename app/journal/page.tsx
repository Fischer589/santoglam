import type { Metadata } from "next"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { journal } from "@/lib/editorial"

export const metadata: Metadata = {
  title: "The Journal | SantoGlam",
  description:
    "A lifestyle journal from SantoGlam — on rooms, rituals, and the small details that make ordinary spaces feel extraordinary.",
}

export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12 lg:py-28">
        <p className="label text-ink/40">The Journal</p>
        <h1 className="mt-4 max-w-2xl font-serif text-5xl font-light italic leading-tight text-ink sm:text-6xl">
          A Life, Well Considered
        </h1>
        <p className="mt-5 max-w-md text-base text-ink/55">
          Notes on rooms, rituals, and the small details that change
          everything.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {journal.map((entry) => (
            <article key={entry.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone">
                <Image
                  src={entry.image}
                  alt={entry.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="img-zoom object-cover"
                />
              </div>
              <p className="label mt-5 text-ink/35">{entry.minutes} min read</p>
              <h2 className="mt-2 font-serif text-2xl italic leading-snug text-ink">
                {entry.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/50">
                {entry.teaser}
              </p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
