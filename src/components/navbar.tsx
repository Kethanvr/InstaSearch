"use client"

import { useState, useEffect } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { cn } from "@/lib/utils"
import { ClientOnly } from "@/components/client-only"

interface NavbarProps {
  showSearch?: boolean
  initialQuery?: string
}

function NavbarContent({ showSearch = false, initialQuery = "" }: NavbarProps) {
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  
  // Track scrolling for class changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <nav 
      className={cn(
        "sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 transition-all duration-200",
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
      )}
      style={{ height: "64px" }}
    >
      <div className="container mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div>            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="InstaSearch Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8" 
                priority
                unoptimized={false}
              /><span className="text-xl font-bold text-black font-sans">
                InstaSearch
              </span>
            </Link>
          </div>          {/* Desktop Search */}
          {showSearch && (
            <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 border-gray-200 focus:border-gray-300 bg-white/50"
                />
              </div>
            </form>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/search" 
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Search
            </Link>
            <Link 
              href="/features" 
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
            >
              Features
            </Link>
            
            {/* Authentication Buttons */}
            <div className="flex items-center gap-3 ml-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <Button variant="ghost" size="sm" className="text-sm text-black hover:bg-gray-100">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm" className="text-sm bg-black text-white hover:bg-gray-800">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-black hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search images..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 border-gray-200 focus:border-gray-300 bg-white/50"
                />
              </div>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t bg-white border-gray-200">
            <div className="py-4 space-y-2">
              <Link 
                href="/" 
                className="block px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/search" 
                className="block px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Search
              </Link>
              <Link 
                href="/features" 
                className="block px-4 py-2 text-sm font-medium text-black hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>

              <SignedOut>
                <div className="px-4 py-2 space-y-3 border-t border-gray-200">
                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-2">Get started</p>
                    <div className="space-y-2">
                      <SignInButton mode="modal">
                        <Button variant="ghost" size="sm" className="w-full justify-center text-black hover:bg-gray-100">
                          Sign In
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button size="sm" className="w-full justify-center bg-black text-white hover:bg-gray-800">
                          Sign Up
                        </Button>
                      </SignUpButton>
                    </div>
                  </div>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="px-4 py-2 border-t border-gray-200">
                  <div className="pt-2 flex items-center gap-2">
                    <UserButton 
                      afterSignOutUrl="/"
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8"
                        }
                      }}
                    />
                    <span className="text-sm text-gray-500">Account</span>
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export function Navbar(props: NavbarProps) {
  return (
    <ClientOnly 
      fallback={
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200" style={{ height: "64px" }}>
          <div className="container mx-auto px-6 h-full">
            <div className="flex items-center justify-between h-full">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-24 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-12 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
                <div className="h-8 w-16 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="md:hidden">
                <div className="h-9 w-9 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </nav>
      }
    >
      <NavbarContent {...props} />
    </ClientOnly>
  )
}
