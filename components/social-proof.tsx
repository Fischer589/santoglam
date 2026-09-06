import { testimonials } from "@/lib/editorial"

export function SocialProof() {
  return (
    <section className="hairline-t bg-stone/50 px-6 py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <p className="label text-center text-ink/40">From SantoGlam Readers</p>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col">
              <blockquote className="font-serif text-xl italic leading-relaxed text-ink/85">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="label mt-5 text-ink/40">
                {t.name}, {t.city}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
