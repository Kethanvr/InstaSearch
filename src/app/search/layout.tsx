import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = generateMetadata({
  title: "Search Beautiful Images",
  description:
    "Search through millions of high-quality, royalty-free images from Unsplash. Find the perfect photo for your project with advanced filters and instant downloads.",
  keywords: [
    "image search",
    "photo search",
    "unsplash search",
    "free images",
    "stock photos",
    "high resolution images",
  ],
  canonical: "https://instasearch.kethanvr.me/search",
  type: "website",
});

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StructuredData
        type="webapp"
        data={{
          applicationSubCategory: "Image Search Tool",
          featureList: [
            "Advanced image search filters",
            "High-resolution image downloads",
            "Orientation and color filters",
            "Relevance-based sorting",
            "Professional photography access",
          ],
        }}
      />
      {children}
    </>
  );
}
