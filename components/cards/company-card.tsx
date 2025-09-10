"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Globe, Twitter, Linkedin, MapPin } from "lucide-react"
import type { Company } from "@/types"

interface CompanyCardProps {
  company: Company
  index: number
}

export function CompanyCard({ company, index }: CompanyCardProps) {
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
              src={company.logo || "/placeholder.svg"}
              alt={company.company_name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-foreground">{company.company_name}</h3>
          <p className="text-sm text-primary font-medium">{company.type}</p>
          <div className="flex items-center justify-center text-xs text-muted-foreground mt-2">
            <MapPin className="w-3 h-3 mr-1" />
            {company.location}
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-end">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link href={`mailto:${company.email}`}>
                <Mail className="w-4 h-4 mr-1" />
                Email
              </Link>
            </Button>

            {company.website && (
              <Button variant="outline" size="sm" asChild>
                <Link href={company.website} target="_blank">
                  <Globe className="w-4 h-4 mr-1" />
                  Website
                </Link>
              </Button>
            )}

            {company.twitter && (
              <Button variant="outline" size="sm" asChild>
                <Link href={company.twitter} target="_blank">
                  <Twitter className="w-4 h-4 mr-1" />
                  Twitter
                </Link>
              </Button>
            )}

            {company.linkedin && (
              <Button variant="outline" size="sm" asChild>
                <Link href={company.linkedin} target="_blank">
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
