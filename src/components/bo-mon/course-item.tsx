import { Card, CardContent } from "@/components/ui/card"
import { Clock, Users } from "lucide-react"
import Link from "next/link"

interface CourseItemProps {
  code: string
  name: string
  credits: number
  semester?: string
  description?: string
  link: string
}

export function CourseItem({ code, name, credits, semester, description, link }: CourseItemProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-2">
          <Link href={link} className="group">
            <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80">
              {name}
              <span className="ml-2 text-sm font-normal text-muted-foreground">({code})</span>
            </h3>
          </Link>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-primary" />
              <span>{credits} tín chỉ</span>
            </div>

            {semester && (
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-primary" />
                <span>Học kỳ: {semester}</span>
              </div>
            )}
          </div>

          {description && <p className="text-sm text-muted-foreground">{description}</p>}

          <Link
            href={link}
            className="mt-1 inline-flex items-center text-sm font-medium text-primary hover:text-primary/80"
          >
            <span>Xem chi tiết</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="ml-1 h-4 w-4">
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
