import { Hero } from "@/components/hero"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeaturesSection />
      <Footer />
    </main>
  )
}
