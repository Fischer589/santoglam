import Image from "next/image"
import { journal } from "@/lib/editorial"

export function JournalSection() {
  const featured = journal.slice(0, 3)

  return (
    <section className="hairline-t px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="label text-ink/40">The Journal</p>
            <h2 className="mt-4 font-serif text-4xl font-light italic text-ink sm:text-5xl">
              A Life, Well Considered
            </h2>
          </div>
          <a
            href="/journal"
            className="label border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink"
          >
            All Journal Entries →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {featured.map((entry) => (
            <a key={entry.id} href="/journal" className="group flex flex-col">
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
              <h3 className="mt-2 font-serif text-2xl italic leading-snug text-ink">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-ink/50">
                {entry.teaser}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
