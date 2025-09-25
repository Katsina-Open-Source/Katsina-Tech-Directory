import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Katsina Open Source Directory",
  description: "A comprehensive directory of developers, companies, and communities in Katsina State, Nigeria",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
