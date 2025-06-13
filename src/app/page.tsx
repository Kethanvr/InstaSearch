import { Hero } from "@/components/hero";
import { AIImageGenerator } from "@/components/ai-image-generator";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AIImageGenerator />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
