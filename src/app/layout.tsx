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
  metadataBase: new URL('https://instasearch.kethanvr.me'),
  title: "InstaSearch - Discover Beautiful Images Instantly",
  description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch. Fast, clean, and beautiful image search for creators and developers.",
  keywords: ["unsplash", "image search", "free stock photos", "royalty free images", "high resolution photos", "creative commons"],
  authors: [{ name: "Kethan VR" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon-32x32.png',
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
  openGraph: {
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
    type: "website",
    url: "https://instasearch.kethanvr.me",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "InstaSearch Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InstaSearch - Discover Beautiful Images Instantly",
    description: "Search and download stunning, royalty-free images from Unsplash with InstaSearch.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
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
