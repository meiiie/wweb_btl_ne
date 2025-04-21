"use client"

import React, { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"

interface ResearchCardProps {
  title: string
  description: string
  image: string
  slug: string
  category: string
  date?: string
  author?: string
}

const ResearchCard = React.memo(({ title, description, image, slug, category, date, author }: ResearchCardProps) => {
  // Sử dụng useMemo để tránh tính toán lại mô tả ngắn gọn khi component re-render
  const shortDescription = useMemo(() => {
    return description.length > 150 ? `${description.substring(0, 150)}...` : description
  }, [description])

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg?height=300&width=500"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
          {category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors line-clamp-2">
          <Link href={slug}>{title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{shortDescription}</p>
        {(date || author) && (
          <div className="flex items-center text-sm text-gray-500 mb-3">
            {date && <span className="mr-3">{date}</span>}
            {author && <span>Tác giả: {author}</span>}
          </div>
        )}
        <Link href={slug} className="inline-flex items-center text-primary hover:text-primary-dark font-medium">
          Xem chi tiết
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  )
})

ResearchCard.displayName = "ResearchCard"

export default ResearchCard
