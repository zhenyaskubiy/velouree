"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Star, ShoppingBag } from "lucide-react"
import { useStore } from "@/context/store-context"
import type { Product } from "@/lib/types"

const filters = ["All", "Products", "Bestsellers", "New"]

const products: Product[] = [
  {
    id: "botanical-serum-1",
    name: "Botanical Serum",
    subtitle: "Botanical Ritual",
    price: 16.9,
    rating: 5,
    image: "/images/product-serum-1.jpg",
    badge: "Bestseller",
  },
  {
    id: "botanical-serum-2",
    name: "Botanical Serum",
    subtitle: "Botanical Ritual",
    price: 16.9,
    rating: 5,
    image: "/images/product-serum-2.jpg",
    badge: null,
  },
  {
    id: "botanical-serum-3",
    name: "Botanical Serum",
    subtitle: "Botanical Ritual",
    price: 16.9,
    rating: 4,
    image: "/images/product-serum-3.jpg",
    badge: "New",
  },
  {
    id: "botanical-mist-1",
    name: "Botanical Mist",
    subtitle: "Botanical Ritual",
    price: 14.9,
    rating: 5,
    image: "/images/product-serum-4.jpg",
    badge: null,
  },
]

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("All")
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  return (
    <section id="featured" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-medium text-foreground md:text-4xl">
          Featured Products
        </h2>

        {/* Filters */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="mr-2 text-sm font-medium text-muted-foreground">
            Filter
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-1.5 text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-velour-plum text-velour-ivory"
                  : "text-muted-foreground hover:bg-velour-cream"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product) => {
            const wishlisted = isInWishlist(product.id)

            return (
              <div key={product.id} className="group relative">
                {/* Badge */}
                {product.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded-sm bg-velour-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-velour-plum">
                    {product.badge}
                  </span>
                )}

                {/* Image */}
                <div className="relative aspect-square overflow-hidden rounded-lg bg-velour-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-end justify-center bg-velour-plum/0 pb-4 opacity-0 transition-all duration-300 group-hover:bg-velour-plum/20 group-hover:opacity-100">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-2 rounded-sm bg-velour-plum px-4 py-2 text-xs font-medium text-velour-ivory transition-colors hover:bg-velour-plum-light"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                      Add to Bag
                    </button>
                  </div>

                  {/* Wishlist */}
                  <button
                    aria-label={
                      wishlisted
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                    onClick={() => toggleWishlist(product)}
                    className={`absolute right-3 top-3 rounded-full p-1.5 transition-colors ${
                      wishlisted
                        ? "bg-velour-plum/90 text-velour-gold"
                        : "bg-card/80 text-muted-foreground hover:text-velour-plum"
                    }`}
                  >
                    <Heart
                      className={`h-4 w-4 ${wishlisted ? "fill-velour-gold" : ""}`}
                    />
                  </button>
                </div>

                {/* Info */}
                <div className="mt-3">
                  <h3 className="text-sm font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {product.subtitle}
                  </p>
                  <div className="mt-1.5 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        className={`h-3 w-3 ${
                          si < product.rating
                            ? "fill-velour-gold text-velour-gold"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      aria-label={`Add ${product.name} to bag`}
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-velour-plum p-1.5 text-velour-ivory transition-colors hover:bg-velour-plum-light"
                    >
                      <ShoppingBag className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
