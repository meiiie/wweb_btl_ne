import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Bell, Calendar, FileText, Award, Users, Briefcase } from "lucide-react"

interface StudentInfoCardProps {
  category: {
    id: number
    title: string
    description: string
    icon: string
    link: string
  }
}

export function StudentInfoCard({ category }: StudentInfoCardProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "bell":
        return <Bell className="h-6 w-6 text-primary" />
      case "calendar":
        return <Calendar className="h-6 w-6 text-primary" />
      case "file-text":
        return <FileText className="h-6 w-6 text-primary" />
      case "award":
        return <Award className="h-6 w-6 text-primary" />
      case "users":
        return <Users className="h-6 w-6 text-primary" />
      case "briefcase":
        return <Briefcase className="h-6 w-6 text-primary" />
      default:
        return <Bell className="h-6 w-6 text-primary" />
    }
  }

  return (
    <Card className="hover:shadow-md transition-shadow">
      <Link href={category.link} className="block">
        <CardContent className="p-6">
          <div className="flex items-start">
            <div className="mr-4 bg-primary/10 p-3 rounded-full">{getIcon(category.icon)}</div>
            <div>
              <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-primary">{category.title}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}
