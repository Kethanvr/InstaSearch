"use client"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { SearchSection } from "@/components/search-section"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

// Interface for Unsplash image
interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
    thumb: string
    full: string
  }
  alt_description: string
  user: {
    name: string
    username: string
  }
  downloads: number
  likes: number
  color: string
}

// Unsplash API configuration
const UNSPLASH_ACCESS_KEY = "ggbXfyFRtwZKhpPldtEGvhBQ6OqbVNCa-fkjJYTk1eY"
const UNSPLASH_API_URL = "https://api.unsplash.com"

function SearchContent() {
  const searchParams = useSearchParams()
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const initialQuery = searchParams.get("q") || ""

  useEffect(() => {
    if (initialQuery) {
      handleSearch(initialQuery)
    }
  }, [initialQuery])

  const handleSearch = async (query: string, filters?: {
    orientation?: string;
    color?: string;
    order_by?: string;
  }) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        query,
        per_page: "24",
        orientation: filters?.orientation === "all" ? "" : filters?.orientation || "",
        color: filters?.color === "all" ? "" : filters?.color || "",
        order_by: filters?.order_by || "relevant"
      })

      // Remove empty parameters
      const cleanParams = new URLSearchParams()
      params.forEach((value, key) => {
        if (value) cleanParams.append(key, value)
      })

      const response = await fetch(
        `${UNSPLASH_API_URL}/search/photos?${cleanParams.toString()}`,
        {
          headers: {
            Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`
          }
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setImages(data.results || [])
    } catch (err) {
      console.error("Search error:", err)
      setError("Failed to search images. Please check your API key and try again.")
      setImages([])
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = async (imageUrl: string, filename: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      
      const link = document.createElement("a")
      link.href = url
      link.download = filename
      document.body.appendChild(link)
      link.click()
      
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed:", error)
      alert("Failed to download image. Please try again.")
    }
  }
  return (
    <>      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mx-4 mt-4">
          <p className="font-medium">Error</p>
          <p className="text-sm">{error}</p>
          <p className="text-xs mt-2">
            Make sure to replace YOUR_UNSPLASH_ACCESS_KEY with your actual Unsplash API key in the code.
          </p>
        </div>
      )}
      
      <SearchSection
        images={images}
        loading={loading}
        onSearch={handleSearch}
        onDownload={handleDownload}
      />
      
      <Footer />
    </>
  )
}

export default function SearchPage() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={
        <div className="min-h-screen">
          <div className="h-16 bg-background border-b">
            <Skeleton className="h-full w-full" />
          </div>
          <div className="p-4">
            <Skeleton className="h-8 w-48 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square w-full" />
              ))}
            </div>
          </div>
        </div>
      }>
        <SearchContent />
      </Suspense>
    </main>
  )
}
