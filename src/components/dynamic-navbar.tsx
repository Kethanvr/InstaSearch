"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { Navbar } from "./navbar"

export function DynamicNavbar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Show search functionality on search page
  const showSearch = pathname === "/search"
  const initialQuery = searchParams.get("q") || ""

  return <Navbar showSearch={showSearch} initialQuery={initialQuery} />
}
