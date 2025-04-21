"use client"

import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ContentCardProps {
  title: string
  children: ReactNode
  className?: string
  id?: string
  titleAs?: "h2" | "h3" | "h4"
}

export function ContentCard({ title, children, className, id, titleAs: TitleComponent = "h2" }: ContentCardProps) {
  // Generate an ID from the title if none is provided
  const headingId = id || title.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className={cn("mb-8", className)}>
      <CardContent className="p-6">
        <TitleComponent className="text-2xl font-bold mb-6 text-primary" id={headingId}>
          {title}
        </TitleComponent>
        <div className="prose max-w-none" aria-labelledby={headingId}>
          {children}
        </div>
      </CardContent>
    </Card>
  )
}
