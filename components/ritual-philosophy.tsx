import Image from "next/image"

const steps = [
  {
    number: "1",
    title: "Cleanse",
    description:
      "Start by cleansing the complexion. Gently remove all impurities, surface debris, and preparation steps.",
  },
  {
    number: "2",
    title: "Nourish",
    description:
      "Gently pat in your prescribed ritual complexities, helping nurture a pure protection and radiance.",
  },
  {
    number: "3",
    title: "Seal",
    description:
      "Drape the moisture in to command and complete essentials, and let it absorb.",
  },
]

export function RitualPhilosophy() {
  return (
    <section id="ritual" className="bg-velour-plum py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Candle Image */}
          <div className="relative h-80 w-full max-w-sm overflow-hidden rounded-lg lg:h-[28rem] lg:max-w-md">
            <Image
              src="/images/ritual-candle.jpg"
              alt="Ritual candle in warm ambient setting"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 384px, 448px"
            />
          </div>

          {/* Steps */}
          <div className="flex-1">
            <h2 className="text-center font-serif text-3xl font-medium text-velour-ivory md:text-4xl lg:text-left">
              Ritual / Philosophy
            </h2>
            <div className="mt-10 flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <span className="font-serif text-5xl font-light text-velour-gold">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-medium text-velour-ivory">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-velour-ivory/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
