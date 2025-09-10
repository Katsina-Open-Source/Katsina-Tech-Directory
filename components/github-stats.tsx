"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, GitFork, GitCommit, Users, AlertCircle, Github } from "lucide-react"

interface GitHubRepo {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  subscribers_count: number
}

interface GitHubContributor {
  login: string
  contributions: number
}

interface GitHubCommits {
  total: number
}

interface GitHubStatsProps {
  owner: string
  repo: string
}

export function GitHubStats({ owner, repo }: GitHubStatsProps) {
  const [repoData, setRepoData] = useState<GitHubRepo | null>(null)
  const [contributors, setContributors] = useState<GitHubContributor[]>([])
  const [commits, setCommits] = useState<GitHubCommits | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        setLoading(true)
        setError(null)

        // Fetch repository data
         const repoResponse = await fetch(`https://api.github.com/repos/Katsina-Open-Source/Katsina-Tech-Directory`) 

        if (!repoResponse.ok) {
          throw new Error("Repository not found")
        }
        const repoData = await repoResponse.json()

        // Fetch contributors
        const contributorsResponse = await fetch(`https://api.github.com/repos/Katsina-Open-Source/Katsina-Tech-Directory/contributors`)
        const contributorsData = contributorsResponse.ok ? await contributorsResponse.json() : []

        // Fetch commit count (using a simple approach)
        const commitsResponse = await fetch(`https://api.github.com/repos/Katsina-Open-Source/Katsina-Tech-Directory/commits?per_page=1`)
        let totalCommits = 0
        if (commitsResponse.ok) {
          const linkHeader = commitsResponse.headers.get("link")
          if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/)
            totalCommits = match ? Number.parseInt(match[1]) : 1
          } else {
            totalCommits = 1
          }
        }

        setRepoData(repoData)
        setContributors(contributorsData.slice(0, 10)) // Top 10 contributors
        setCommits({ total: totalCommits })
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch GitHub stats")
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubStats()
  }, [owner, repo])

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6 text-center">
              <div className="w-8 h-8 bg-muted rounded mx-auto mb-2"></div>
              <div className="w-16 h-6 bg-muted rounded mx-auto mb-1"></div>
              <div className="w-12 h-4 bg-muted rounded mx-auto"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-6 text-center">
          <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">Unable to load GitHub stats</h3>
          <p className="text-sm text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    )
  }

  const stats = [
    {
      icon: Star,
      label: "Stars",
      value: repoData?.stargazers_count || 0,
      color: "text-yellow-500",
    },
    {
      icon: GitFork,
      label: "Forks",
      value: repoData?.forks_count || 0,
      color: "text-blue-500",
    },
    {
      icon: GitCommit,
      label: "Commits",
      value: commits?.total || 0,
      color: "text-green-500",
    },
    {
      icon: Users,
      label: "Contributors",
      value: contributors.length || 0,
      color: "text-purple-500",
    },
    {
      icon: AlertCircle,
      label: "Open Issues",
      value: repoData?.open_issues_count || 0,
      color: "text-red-500",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Repository Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        <a
          href={`https://github.com/${owner}/${repo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          View on GitHub: {owner}/{repo}
        </a>
      </motion.div>

      {/* Top Contributors */}
      {contributors.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">Top Contributors</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {contributors.slice(0, 8).map((contributor) => (
              <a
                key={contributor.login}
                href={`https://github.com/${contributor.login}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
              >
                @{contributor.login}
                <span className="text-xs">({contributor.contributions})</span>
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  )
}
