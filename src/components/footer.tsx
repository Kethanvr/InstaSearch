"use client"

import { Heart, Github, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">            <div className="flex items-center gap-2">              <Image 
                src="https://img.icons8.com/fluent-systems-filled/512/228BE6/google-web-search.png" 
                alt="InstaSearch Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8" 
                priority
                unoptimized={false}
              /><span className="text-2xl font-bold text-black font-sans">
                InstaSearch
              </span>
            </div>
            <p className="text-muted-foreground">
              Discover and download beautiful, high-quality images from Unsplash with our modern search interface.
            </p>            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8" suppressHydrationWarning>
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" suppressHydrationWarning>
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" suppressHydrationWarning>
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>            <ul className="space-y-2 text-sm text-muted-foreground">              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-foreground transition-colors">
                  Search Images
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-foreground transition-colors">
                  Features
                </Link>
              </li><li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Popular Categories</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Nature
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Architecture
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Travel
                </a>
              </li>
            </ul>
          </div>          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-foreground transition-colors">
                  Unsplash License
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} InstaSearch. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using Next.js & Unsplash API</span>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Powered by</span>
            <a 
              href="https://unsplash.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              Unsplash
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
