import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InstaSearch - Beautiful Image Search",
    short_name: "InstaSearch",
    description:
      "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en",
    categories: ["photography", "design", "productivity"],
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Search Images",
        short_name: "Search",
        description: "Search for beautiful images",
        url: "/search",
        icons: [{ src: "/search-icon.png", sizes: "96x96" }],
      },
      {
        name: "AI Image Generator",
        short_name: "AI Generator",
        description: "Generate images with AI",
        url: "/ai-chat",
        icons: [{ src: "/search-icon.png", sizes: "96x96" }],
      },
    ],
  };
}
