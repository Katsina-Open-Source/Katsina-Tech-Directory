"use client"

import { useState, useMemo } from "react"
import { DeveloperCard } from "@/components/cards/developer-card"
import { SearchBar } from "@/components/search-bar"
import type { Developer } from "@/types"
import developersData from "@/data/developers.json"

export default function DevelopersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const developers: Developer[] = developersData

  const filteredDevelopers = useMemo(() => {
    if (!searchQuery.trim()) return developers

    const query = searchQuery.toLowerCase()
    return developers.filter(
      (developer) =>
        developer.name.toLowerCase().includes(query) ||
        developer.career.toLowerCase().includes(query) ||
        developer.role.toLowerCase().includes(query) ||
        developer.company.toLowerCase().includes(query),
    )
  }, [developers, searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Developers</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Meet the talented developers building amazing software in Katsina State
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          {filteredDevelopers.length} developer{filteredDevelopers.length !== 1 ? "s" : ""}
          {searchQuery && ` found for "${searchQuery}"`}
        </div>
      </div>

      <div className="mb-8">
        <SearchBar placeholder="Search developers by name, career, role, or company..." onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredDevelopers.map((developer, index) => (
          <DeveloperCard key={developer.id} developer={developer} index={index} />
        ))}
      </div>

      {filteredDevelopers.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {searchQuery
              ? `No developers found matching "${searchQuery}"`
              : "No developers found in the directory yet."}
          </p>
        </div>
      )}
    </div>
  )
}
