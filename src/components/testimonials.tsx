import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Flawlessly unveils true love and expands our roots.",
    author: "Serena Collins",
    title: "Curator",
    rating: 5,
  },
  {
    quote:
      "The emotions you are calling astound all.",
    author: "Aurora Blake",
    title: "Editor",
    rating: 5,
  },
  {
    quote:
      "Effortlessly unveils to love and ascends our roots more.",
    author: "Athena Grace",
    title: "Cosmetics",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-velour-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-medium text-foreground md:text-4xl">
          Testimonials
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Quote className="h-5 w-5 text-velour-gold" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`h-3.5 w-3.5 ${
                        si < testimonial.rating
                          ? "fill-velour-gold text-velour-gold"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
