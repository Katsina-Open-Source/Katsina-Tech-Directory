import { GitHubStats } from "@/components/github-stats"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Building2, Heart } from "lucide-react"

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Katsina Open Source Directory</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Discover and connect with the vibrant tech community in Katsina State, Nigeria. Find developers, companies,
          and communities shaping the future of technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/developers">
              <Users className="w-5 h-5 mr-2" />
              Browse Developers
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="/companies">
              <Building2 className="w-5 h-5 mr-2" />
              View Companies
            </Link>
          </Button>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Project Statistics</h2>
          <p className="text-muted-foreground">This directory is open source and community-driven</p>
        </div>
        <GitHubStats owner="katsinatech" repo="directory" />
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-muted/50 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-4">Join the Directory</h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          Are you a developer, company, or community in Katsina? Add yourself to our directory by contributing to our
          open source project on GitHub.
        </p>
        <Button asChild size="lg">
            <Link href="https://github.com/Katsina-Open-Source/Katsina-Tech-Directory" target="_blank"> 
            <Heart className="w-5 h-5 mr-2" />
            Contribute on GitHub
          </Link>
        </Button>
      </section>
    </div>
  )
}
