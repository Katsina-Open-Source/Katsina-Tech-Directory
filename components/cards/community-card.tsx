"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Globe, Twitter, Users } from "lucide-react"
import type { Community } from "@/types"

interface CommunityCardProps {
  community: Community
  index: number
}

export function CommunityCard({ community, index }: CommunityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader className="text-center pb-4">
          <div className="relative w-20 h-20 mx-auto mb-4">
            <Image
              src={community.logo || "/placeholder.svg"}
              alt={community.community_name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{community.community_name}</h3>
          <div className="flex items-center justify-center text-sm text-primary font-medium mt-2">
            <Users className="w-4 h-4 mr-1" />
            {community.focus}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href={`mailto:${community.email}`}>
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Link>
            </Button>

            {community.website && (
              <Button variant="outline" size="sm" asChild>
                <Link href={community.website} target="_blank">
                  <Globe className="w-4 h-4 mr-1" />
                  Website
                </Link>
              </Button>
            )}

            {community.twitter && (
              <Button variant="outline" size="sm" asChild>
                <Link href={community.twitter} target="_blank">
                  <Twitter className="w-4 h-4 mr-1" />
                  Twitter
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
