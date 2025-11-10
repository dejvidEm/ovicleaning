import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { PriceList } from "@/components/price-list"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <PriceList />
      <Gallery />
      <Reviews />
      <ContactForm />
      <Footer />
    </main>
  )
}
