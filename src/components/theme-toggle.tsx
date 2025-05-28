"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ClientOnly } from "@/components/client-only"

function ThemeToggleButton() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9 transition-all duration-300 hover:scale-110"
      suppressHydrationWarning
    >
      <Sun className={`h-4 w-4 transition-all ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export function ThemeToggle() {
  return (
    <ClientOnly 
      fallback={
        <div className="h-9 w-9 rounded-md border border-input bg-background animate-pulse" />
      }
    >
      <ThemeToggleButton />
    </ClientOnly>
  )
}
