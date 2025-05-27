import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "InstaSearch - Discover Beautiful Images Instantly",
  description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
  keywords: ["unsplash", "image search", "free stock photos", "royalty free images", "high resolution photos", "creative commons"],
  authors: [{ name: "Kethan VR" }],
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  openGraph: {
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
    type: "website",
    url: "https://instasearch.kethanvr.me",
    images: [
      {
        url: "/fav.png",
        width: 1200,
        height: 630,
        alt: "InstaSearch Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
    images: ["/fav.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
