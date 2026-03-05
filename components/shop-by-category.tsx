import Image from "next/image"

const categories = [
  {
    name: "Skincare",
    count: 15,
    image: "/images/category-skincare.jpg",
  },
  {
    name: "Makeup",
    count: 36,
    image: "/images/category-makeup.jpg",
  },
  {
    name: "Body Care",
    count: 18,
    image: "/images/category-bodycare.jpg",
  },
  {
    name: "Fragrance",
    count: 41,
    image: "/images/category-fragrance.jpg",
  },
]

export function ShopByCategory() {
  return (
    <section className="bg-velour-ivory py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-medium text-foreground md:text-4xl">
          Shop by Category
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group flex flex-col items-center gap-4 rounded-lg border border-velour-gold/20 bg-card p-6 transition-all duration-300 hover:border-velour-gold/50 hover:shadow-lg"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-velour-gold/30">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="80px"
                />
              </div>
              <div className="text-center">
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  {category.count} products
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
