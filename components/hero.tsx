import Image from "next/image"
import { images } from "@/lib/editorial"

export function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden bg-ink">
      <Image
        src={images.hero}
        alt="A quiet, light-filled luxury bedroom suite"
        fill
        priority
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-end px-6 pb-16 lg:px-12 lg:pb-24">
        <p className="animate-fade-up label text-cream/90 text-bone">
          Santoglam
        </p>
        <h1 className="animate-fade-up delay-1 mt-5 max-w-3xl font-serif text-6xl font-light leading-[0.98] tracking-tight text-bone sm:text-7xl lg:text-8xl">
          The Art of
          <br />
          <span className="italic">Living Well.</span>
        </h1>
        <p className="animate-fade-up delay-2 mt-7 max-w-md text-base leading-relaxed text-bone/75">
          The feeling of a five-star stay, without leaving home.
        </p>

        <div className="animate-fade-up delay-3 mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <a
            href="#hotel-room"
            className="label border-b border-bone/40 pb-1 text-bone transition-colors hover:border-bone"
          >
            Explore the Edit →
          </a>
          <a
            href="#room"
            className="label border-b border-transparent pb-1 text-bone/60 transition-colors hover:text-bone hover:border-bone/40"
          >
            Shop the Room →
          </a>
        </div>
      </div>
    </section>
  )
}
