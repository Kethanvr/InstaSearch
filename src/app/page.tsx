import { Hero } from "@/components/hero";
import { AIImageGenerator } from "@/components/ai-image-generator";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import {
  WebsiteStructuredData,
  OrganizationStructuredData,
  WebAppStructuredData,
} from "@/components/seo/structured-data";
import {
  HeaderBanner,
  ResponsiveBanner,
  InArticleBanner,
} from "@/components/ads/adsense-banner";

export default function Home() {
  return (
    <>
      <WebsiteStructuredData />
      <OrganizationStructuredData />
      <WebAppStructuredData />

      <main className="min-h-screen">
        <HeaderBanner className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-4" />
        <Hero />
        <InArticleBanner className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 my-8" />
        <AIImageGenerator />
        <ResponsiveBanner className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 my-8" />
        <FeaturesSection />
        <Footer />
      </main>
    </>
  );
}
