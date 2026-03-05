import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-velour-plum">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        {/* Text Content */}
        <div className="relative z-10 flex-1 text-center lg:text-left">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-velour-gold">
            New Collection &mdash; Spring 2026
          </p>
          <h1 className="font-serif text-5xl font-light leading-tight text-velour-ivory md:text-6xl lg:text-7xl">
            Beauty is a
            <br />
            <em className="font-semibold italic">sacred</em> ritual.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-velour-ivory/70 lg:mx-0">
            Unveil the artistry of self-care. Where every application is an offering.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <a
              href="#featured"
              className="inline-flex items-center border border-velour-ivory px-8 py-3 text-sm font-medium tracking-wide text-velour-ivory transition-all duration-300 hover:bg-velour-ivory hover:text-velour-plum"
            >
              [Shop the Collection]
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center border border-velour-gold/40 px-8 py-3 text-sm font-medium tracking-wide text-velour-gold transition-all duration-300 hover:border-velour-gold hover:bg-velour-gold/10"
            >
              [Our Philosophy]
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Gold circle behind bottle */}
          <div className="absolute h-72 w-72 rounded-full border border-velour-gold/30 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem]" />
          <div className="absolute h-60 w-60 rounded-full border border-velour-gold/15 md:h-80 md:w-80 lg:h-96 lg:w-96" />
          <div className="relative h-72 w-56 md:h-96 md:w-72 lg:h-[28rem] lg:w-80">
            <Image
              src="/images/hero-perfume.jpg"
              alt="VELOUREE Spring 2026 Collection - luxury perfume bottle"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
