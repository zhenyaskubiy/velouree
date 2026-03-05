import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AnnouncementBar } from "@/components/announcement-bar"
import { ShopByCategory } from "@/components/shop-by-category"
import { FeaturedProducts } from "@/components/featured-products"
import { RitualPhilosophy } from "@/components/ritual-philosophy"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <AnnouncementBar />
      <ShopByCategory />
      <FeaturedProducts />
      <RitualPhilosophy />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
