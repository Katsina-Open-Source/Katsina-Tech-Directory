"use client"

import { useState, useMemo } from "react"
import { CommunityCard } from "@/components/cards/community-card"
import { SearchBar } from "@/components/search-bar"
import type { Community } from "@/types"
import communitiesData from "@/data/communities.json"

export default function CommunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const communities: Community[] = communitiesData

  const filteredCommunities = useMemo(() => {
    if (!searchQuery.trim()) return communities

    const query = searchQuery.toLowerCase()
    return communities.filter(
      (community) =>
        community.community_name.toLowerCase().includes(query) || community.focus.toLowerCase().includes(query),
    )
  }, [communities, searchQuery])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-foreground mb-4">Communities</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with tech communities fostering collaboration and learning in Katsina State
        </p>
        <div className="mt-6 text-sm text-muted-foreground">
          {filteredCommunities.length} communit{filteredCommunities.length !== 1 ? "ies" : "y"}
          {searchQuery && ` found for "${searchQuery}"`}
        </div>
      </div>

      <div className="mb-8">
        <SearchBar placeholder="Search communities by name or focus area..." onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCommunities.map((community, index) => (
          <CommunityCard key={community.id} community={community} index={index} />
        ))}
      </div>

      {filteredCommunities.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground">
            {searchQuery
              ? `No communities found matching "${searchQuery}"`
              : "No communities found in the directory yet."}
          </p>
        </div>
      )}
    </div>
  )
}
