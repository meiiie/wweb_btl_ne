import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface AnnouncementCardProps {
  announcement: {
    id: number
    title: string
    date: string
    excerpt: string
    category: string
    link: string
  }
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-primary text-white rounded-lg p-3 text-center mr-4 w-16">
            <div className="text-2xl font-bold">{announcement.date.split("/")[0]}</div>
            <div className="text-sm">{`Tháng ${announcement.date.split("/")[1]}`}</div>
          </div>
          <div className="flex-grow">
            <div className="flex items-center mb-1">
              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                {announcement.category}
              </span>
              <span className="text-gray-500 text-sm ml-2">{announcement.date}</span>
            </div>
            <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
              <Link href={announcement.link}>{announcement.title}</Link>
            </h3>
            <p className="text-gray-600 text-sm mb-3">{announcement.excerpt}</p>
            <Link
              href={announcement.link}
              className="text-primary hover:text-primary-light font-medium flex items-center text-sm"
            >
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
      </CardContent>
    </Card>
  )
}
