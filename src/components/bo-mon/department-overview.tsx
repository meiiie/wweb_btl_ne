import { Card, CardContent } from "@/components/ui/card"
import { Users, BookOpen, Microscope, Award } from "lucide-react"

interface DepartmentOverviewProps {
  staffCount: number
  courseCount: number
  labCount: number
  researchCount: number
}

export function DepartmentOverview({ staffCount, courseCount, labCount, researchCount }: DepartmentOverviewProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="transition-all duration-300 hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-blue-100 p-3">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Giảng viên</p>
            <p className="text-2xl font-bold">{staffCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-green-100 p-3">
            <BookOpen className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Môn học</p>
            <p className="text-2xl font-bold">{courseCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-purple-100 p-3">
            <Microscope className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Phòng thí nghiệm</p>
            <p className="text-2xl font-bold">{labCount}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:shadow-md">
        <CardContent className="flex items-center gap-4 p-4">
          <div className="rounded-full bg-amber-100 p-3">
            <Award className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Hướng nghiên cứu</p>
            <p className="text-2xl font-bold">{researchCount}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
