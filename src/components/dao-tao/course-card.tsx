import Link from "next/link"
import { BookOpen, Clock, FileText } from "lucide-react"

interface CourseCardProps {
  code: string
  title: string
  credits: number
  description: string
  slug: string
}

export function CourseCard({ code, title, credits, description, slug }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <span className="bg-primary-50 text-primary text-xs font-medium px-2.5 py-1 rounded">{code}</span>
      </div>

      <div className="flex items-center text-sm text-gray-600 mb-3">
        <Clock className="w-4 h-4 mr-2 text-primary" />
        <span>{credits} tín chỉ</span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>

      <div className="flex items-center justify-between">
        <Link
          href={`/dao-tao/mon-hoc/${slug}`}
          className="inline-flex items-center text-sm text-primary font-medium hover:underline"
        >
          <FileText className="mr-1 h-4 w-4" />
          Đề cương chi tiết
        </Link>

        <Link
          href={`/dao-tao/mon-hoc/${slug}`}
          className="inline-flex items-center text-sm text-primary font-medium hover:underline"
        >
          <BookOpen className="mr-1 h-4 w-4" />
          Xem chi tiết
        </Link>
      </div>
    </div>
  )
}
