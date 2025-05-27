"use client"

import { motion } from "framer-motion"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <motion.div
        className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export function ImageSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="bg-muted aspect-square rounded-lg mb-4" />
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-3/4" />
        <div className="h-3 bg-muted rounded w-1/2" />
      </div>
    </div>
  )
}
