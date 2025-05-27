"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { SearchSection } from "@/components/search-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

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

export default function SearchPage() {
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

  const handleSearch = async (query: string, filters?: any) => {
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const params = new URLSearchParams({
        query,
        per_page: "24",
        orientation: filters?.orientation === "all" ? "" : filters?.orientation || "",
        color: filters?.color === "all" ? "" : filters?.color || "",
        order_by: filters?.orderBy || "relevant"
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
    <main className="min-h-screen">
      <Navbar showSearch={true} initialQuery={initialQuery} />
      
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
    </main>
  )
}
