import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryProvider } from "@/components/query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { DynamicNavbar } from "@/components/dynamic-navbar";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

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
  metadataBase: new URL('https://instasearch.kethanvr.me'),
  title: "InstaSearch - Discover Beautiful Images Instantly",
  description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
  keywords: ["unsplash", "image search", "free stock photos", "royalty free images", "high resolution photos", "creative commons"],
  authors: [{ name: "Kethan VR" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
    type: "website",
    url: "https://instasearch.kethanvr.me",
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="theme-color" content="#000000" />
        </head>
        <body
          className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
            storageKey="instasearch-theme"
          >
            <QueryProvider>
              <Suspense fallback={<Skeleton className="h-16 w-full" />}>
                <DynamicNavbar />
              </Suspense>
              {children}
            </QueryProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
