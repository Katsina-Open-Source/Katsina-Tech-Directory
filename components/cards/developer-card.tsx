"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Globe, Github, Twitter, Linkedin } from "lucide-react"
import type { Developer } from "@/types"

interface DeveloperCardProps {
  developer: Developer
  index: number
}

export function DeveloperCard({ developer, index }: DeveloperCardProps) {
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
          <div className="relative w-24 h-24 mx-auto mb-4">
            <Image
              src={developer.profile_photo || "/placeholder.svg"}
              alt={developer.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{developer.name}</h3>
          <p className="text-sm text-muted-foreground">{developer.career}</p>
          <p className="text-sm font-medium text-primary">{developer.role}</p>
          <p className="text-xs text-muted-foreground">{developer.company}</p>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href={`mailto:${developer.email}`}>
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Link>
            </Button>

            {developer.website && (
              <Button variant="outline" size="sm" asChild>
                <Link href={developer.website} target="_blank">
                  <Globe className="w-4 h-4 mr-1" />
                  Website
                </Link>
              </Button>
            )}

            {developer.github && (
              <Button variant="outline" size="sm" asChild>
                <Link href={developer.github} target="_blank">
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </Link>
              </Button>
            )}

            {developer.twitter && (
              <Button variant="outline" size="sm" asChild>
                <Link href={developer.twitter} target="_blank">
                  <Twitter className="w-4 h-4 mr-1" />
                  Twitter
                </Link>
              </Button>
            )}

            {developer.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <Link href={developer.linkedin} target="_blank">
                  <Linkedin className="w-4 h-4 mr-1" />
                  LinkedIn
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
