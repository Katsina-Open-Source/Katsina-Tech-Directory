"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Github } from "lucide-react"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-xl font-bold text-foreground">
              Katsina Tech Directory
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/developers" className="text-muted-foreground hover:text-foreground transition-colors">
                Developers
              </Link>
              <Link href="/companies" className="text-muted-foreground hover:text-foreground transition-colors">
                Companies
              </Link>
              <Link href="/communities" className="text-muted-foreground hover:text-foreground transition-colors">
                Communities
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <span className="text-lg">{theme === "dark" ? "☀️" : "🌙"}</span>
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/Katsina-Open-Source" target="_blank">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
