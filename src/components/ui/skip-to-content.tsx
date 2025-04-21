"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SkipToContentProps {
  contentId?: string
  className?: string
}

export function SkipToContent({ contentId = "main-content", className }: SkipToContentProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <a
      href={`#${contentId}`}
      className={cn(
        "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md focus:outline-none focus:shadow-lg",
        className,
      )}
    >
      Bỏ qua đến nội dung chính
    </a>
  )
}
