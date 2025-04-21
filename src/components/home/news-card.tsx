import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface NewsCardProps {
  news: {
    id: number
    title: string
    excerpt: string
    date: string
    image: string
    category: string
    link: string
  }
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
        <div className="absolute top-0 left-0 bg-primary text-white text-xs font-bold px-3 py-1 m-2 rounded">
          {news.category}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="text-gray-500 text-sm mb-2">{news.date}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
          <Link href={news.link}>{news.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4">{news.excerpt}</p>
        <Link href={news.link} className="text-primary hover:text-primary-light font-medium flex items-center">
          Đọc tiếp
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
      </CardContent>
    </Card>
  )
}
