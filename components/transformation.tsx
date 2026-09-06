import Image from "next/image"
import { images } from "@/lib/editorial"

export function Transformation() {
  return (
    <section className="hairline-t px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label text-ink/40">The Transformation</p>
          <h2 className="mt-4 font-serif text-4xl font-light italic leading-tight text-ink sm:text-5xl">
            The difference is in the details.
          </h2>
          <p className="mt-4 text-base text-ink/55">
            You don&apos;t need a renovation. You need the right details.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-1 sm:grid-cols-2">
          <div className="relative aspect-[4/5]">
            <Image
              src={images.before}
              alt="An ordinary bedroom"
              fill
              className="object-cover grayscale-[0.3]"
            />
            <span className="label absolute bottom-5 left-5 bg-bone px-3 py-1.5 text-ink/60">
              Before
            </span>
          </div>
          <div className="relative aspect-[4/5]">
            <Image
              src={images.after}
              alt="The same bedroom, elevated by SantoGlam"
              fill
              className="object-cover"
            />
            <span className="label absolute bottom-5 left-5 bg-ink px-3 py-1.5 text-bone">
              After
            </span>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="#the-edit"
            className="label border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink"
          >
            See What Changes →
          </a>
        </div>
      </div>
    </section>
  )
}
