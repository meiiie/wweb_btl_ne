import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedCourse {
  id: string
  code: string
  title: string
  credits: number
  slug: string
  relationship: "prerequisite" | "next" | "same-department" | "same-program"
}

interface RelatedCoursesProps {
  courses: RelatedCourse[]
}

export function RelatedCourses({ courses }: RelatedCoursesProps) {
  // Nhóm các khóa học theo mối quan hệ
  const groupedCourses = courses.reduce(
    (acc, course) => {
      if (!acc[course.relationship]) {
        acc[course.relationship] = []
      }
      acc[course.relationship].push(course)
      return acc
    },
    {} as Record<string, RelatedCourse[]>,
  )

  // Lấy tiêu đề cho từng nhóm
  const getRelationshipTitle = (relationship: string) => {
    switch (relationship) {
      case "prerequisite":
        return "Môn học tiên quyết"
      case "next":
        return "Môn học kế tiếp"
      case "same-department":
        return "Môn học cùng bộ môn"
      case "same-program":
        return "Môn học cùng chương trình"
      default:
        return "Môn học liên quan"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Môn học liên quan</h2>

      {Object.keys(groupedCourses).length === 0 ? (
        <p className="text-gray-500 italic">Không có môn học liên quan.</p>
      ) : (
        <div className="space-y-6">
          {Object.entries(groupedCourses).map(([relationship, courses]) => (
            <div key={relationship}>
              <h3 className="text-lg font-semibold mb-3">{getRelationshipTitle(relationship)}</h3>
              <div className="grid gap-3 md:grid-cols-2">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/dao-tao/mon-hoc/${course.slug}`}
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-500 mr-2">{course.code}</span>
                        <h4 className="font-medium text-gray-800">{course.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{course.credits} tín chỉ</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
