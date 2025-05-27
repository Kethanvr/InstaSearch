"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Search, Download, Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"

interface Image {
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

interface SearchSectionProps {
  images: Image[]
  loading: boolean
  onSearch: (query: string, filters?: any) => void
  onDownload: (imageUrl: string, filename: string) => void
}

export function SearchSection({ images, loading, onSearch, onDownload }: SearchSectionProps) {
  const [filters, setFilters] = useState({
    orientation: "all",
    color: "all",
    orderBy: "relevant"
  })
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    // Re-trigger search with current query from URL params
    const urlParams = new URLSearchParams(window.location.search)
    const currentQuery = urlParams.get('q') || ''
    if (currentQuery.trim()) {
      onSearch(currentQuery, newFilters)
    }
  }

  const handleDownload = async (image: Image) => {
    const filename = `${image.alt_description?.replace(/\s+/g, '-') || 'image'}-${image.id}.jpg`
    onDownload(image.urls.full, filename)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-20">
      <div className="container mx-auto px-4">
        {/* Filters Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Select value={filters.orientation} onValueChange={(value) => handleFilterChange("orientation", value)}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Orientation" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Orientations</SelectItem>
                  <SelectItem value="landscape">Landscape</SelectItem>
                  <SelectItem value="portrait">Portrait</SelectItem>
                  <SelectItem value="squarish">Square</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.color} onValueChange={(value) => handleFilterChange("color", value)}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Color</SelectItem>
                  <SelectItem value="black_and_white">B&W</SelectItem>
                  <SelectItem value="black">Black</SelectItem>
                  <SelectItem value="white">White</SelectItem>
                  <SelectItem value="yellow">Yellow</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                  <SelectItem value="red">Red</SelectItem>
                  <SelectItem value="purple">Purple</SelectItem>
                  <SelectItem value="magenta">Magenta</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="teal">Teal</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                </SelectContent>
              </Select>

              <Select value={filters.orderBy} onValueChange={(value) => handleFilterChange("orderBy", value)}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevant">Relevant</SelectItem>
                  <SelectItem value="latest">Latest</SelectItem>
                  <SelectItem value="popular">Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        {loading ? (
          <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"}`}>
            {Array.from({ length: 12 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="aspect-square w-full" />
                <div className="p-4">
                  <Skeleton className="h-4 w-3/4 mb-2" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <img
                      src={image.urls.regular}
                      alt={image.alt_description || "Unsplash image"}
                      className={`w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
                        viewMode === "grid" ? "aspect-square" : "aspect-video"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => handleDownload(image)}
                        size="sm"
                        className="bg-white text-black hover:bg-gray-100"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-medium text-sm mb-2 line-clamp-2">
                      {image.alt_description || "Beautiful image"}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>by {image.user.name}</span>
                      <div className="flex gap-3">
                        <span>❤️ {image.likes.toLocaleString()}</span>
                        <span>⬇️ {image.downloads?.toLocaleString() || "N/A"}</span>
                      </div>
                    </div>
                    {image.color && (
                      <div className="flex items-center gap-2 mt-2">
                        <div
                          className="w-4 h-4 rounded-full border border-gray-300"
                          style={{ backgroundColor: image.color }}
                        />
                        <Badge variant="secondary" className="text-xs">
                          {image.color}
                        </Badge>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}

        {!loading && images.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No images found</h3>
              <p className="text-muted-foreground">
                Try searching with different keywords or adjusting your filters
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
