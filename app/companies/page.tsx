"use client"

import { useState, useMemo } from "react"
import { CompanyCard } from "@/components/cards/company-card"
import { SearchBar } from "@/components/search-bar"
import type { Company } from "@/types"
import companiesData from "@/data/companies.json"

export default function CompaniesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const companies: Company[] = companiesData

  const filteredCompanies = useMemo(() => {
    if (!searchQuery.trim()) return companies

    const query = searchQuery.toLowerCase()
    return companies.filter(
      (company) =>
        company.company_name.toLowerCase().includes(query) ||
        company.type.toLowerCase().includes(query) ||
        company.location.toLowerCase().includes(query),
    )
  }, [companies, searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Companies</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover innovative tech companies and startups driving growth in Katsina State
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          {filteredCompanies.length} compan{filteredCompanies.length !== 1 ? "ies" : "y"}
          {searchQuery && ` found for "${searchQuery}"`}
        </div>
      </div>

      <div className="mb-8">
        <SearchBar placeholder="Search companies by name, type, or location..." onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCompanies.map((company, index) => (
          <CompanyCard key={company.id} company={company} index={index} />
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {searchQuery ? `No companies found matching "${searchQuery}"` : "No companies found in the directory yet."}
          </p>
        </div>
      )}
    </div>
  )
}
