import { Metadata } from "next";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  image?: string;
  type?: "website" | "article";
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  canonical,
  noindex = false,
  nofollow = false,
  image,
  type = "website",
}: SEOConfig): Metadata {
  const baseUrl = "https://instasearch.kethanvr.me";
  const defaultImage = `${baseUrl}/og-image.jpg`;

  const fullTitle = title
    ? `${title} | InstaSearch - Beautiful Image Search`
    : "InstaSearch - Discover Beautiful Images Instantly";

  const fullDescription =
    description ||
    "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.";

  const allKeywords = [
    "unsplash",
    "image search",
    "free stock photos",
    "royalty free images",
    "high resolution photos",
    "creative commons",
    "photography",
    "visual content",
    ...keywords,
  ];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      type: type,
      url: canonical || baseUrl,
      siteName: "InstaSearch",
      locale: "en_US",
      images: [
        {
          url: image || defaultImage,
          width: 1200,
          height: 630,
          alt: title || "InstaSearch - Beautiful Image Search Platform",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      creator: "@kethanvr",
      images: [image || defaultImage],
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
  };
}

export function generateStructuredData(
  type: string,
  data: Record<string, unknown>
) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
}

export function generatePageJsonLd(pageData: {
  type: string;
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return generateStructuredData(pageData.type, {
    name: pageData.name,
    description: pageData.description,
    url: pageData.url,
    image: pageData.image,
    publisher: {
      "@type": "Organization",
      name: "InstaSearch",
      url: "https://instasearch.kethanvr.me",
    },
  });
}

export const defaultSEO = {
  title: "InstaSearch - Discover Beautiful Images Instantly",
  description:
    "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
  keywords: [
    "unsplash",
    "image search",
    "free stock photos",
    "royalty free images",
    "high resolution photos",
  ],
  canonical: "https://instasearch.kethanvr.me",
};
