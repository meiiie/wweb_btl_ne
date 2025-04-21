import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

export interface NewsCardProps {
  id: number | string
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  author: string
  link: string
  isHighlighted?: boolean
}

export function NewsCard({
  id,
  title,
  excerpt,
  date,
  image,
  category,
  author,
  link,
  isHighlighted = false,
}: NewsCardProps) {
  return (
    <div
      className={`border-b pb-8 last:border-b-0 ${isHighlighted ? "bg-blue-50 p-4 rounded-lg border border-blue-100" : ""}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="relative h-60 md:h-48 rounded-lg overflow-hidden">
            <Image
              src={image || "/placeholder.svg?height=400&width=600"}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-0 left-0 bg-[#0056a6] text-white text-xs font-bold px-3 py-1 m-2 rounded">
              {category}
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="flex items-center text-sm text-gray-500 mb-2">
            {date ? (
              <>
                <span>{formatDate(date)}</span>
                <span className="mx-2">•</span>
              </>
            ) : null}
            <span>{author}</span>
          </div>
          <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-[#0056a6] transition-colors">
            <Link href={link}>{title}</Link>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          <Link
            href={link}
            className="inline-block bg-[#0056a6] hover:bg-[#00408c] text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Đọc tiếp
          </Link>
        </div>
      </div>
    </div>
  )
}
