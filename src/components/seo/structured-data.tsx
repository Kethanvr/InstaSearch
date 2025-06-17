import { WebSite, Organization, WebApplication, WithContext } from "schema-dts";

interface StructuredDataProps {
  type: "website" | "organization" | "webapp";
  data?: Record<string, unknown>;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: WithContext<WebSite | Organization | WebApplication>;

  switch (type) {
    case "website":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "InstaSearch",
        alternateName: "InstaSearch - Beautiful Image Search",
        url: "https://instasearch.kethanvr.me",
        description:
          "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
        publisher: {
          "@type": "Organization",
          name: "InstaSearch",
          url: "https://instasearch.kethanvr.me",
        },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://instasearch.kethanvr.me/search?q={search_term_string}",
        },
        sameAs: ["https://github.com/kethanvr/instasearch"],
        ...data,
      };
      break;

    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "InstaSearch",
        url: "https://instasearch.kethanvr.me",
        logo: "https://instasearch.kethanvr.me/logo.png",
        description: "Beautiful image search platform powered by Unsplash API",
        founder: {
          "@type": "Person",
          name: "Kethan VR",
          url: "https://kethanvr.me",
        },
        sameAs: ["https://github.com/kethanvr/instasearch"],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          url: "https://instasearch.kethanvr.me/contact",
        },
        ...data,
      };
      break;

    case "webapp":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "InstaSearch",
        url: "https://instasearch.kethanvr.me",
        description:
          "Search and download stunning, royalty-free images from Unsplash",
        applicationCategory: "PhotographyApplication",
        operatingSystem: "Web Browser",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        featureList: [
          "High-resolution image search",
          "Royalty-free downloads",
          "AI-powered image generation",
          "Multiple search filters",
          "Collection management",
        ],
        screenshot: "https://instasearch.kethanvr.me/opengraph-image",
        ...data,
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

// Predefined structured data components
export function WebsiteStructuredData() {
  return <StructuredData type="website" />;
}

export function OrganizationStructuredData() {
  return <StructuredData type="organization" />;
}

export function WebAppStructuredData() {
  return <StructuredData type="webapp" />;
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
}
