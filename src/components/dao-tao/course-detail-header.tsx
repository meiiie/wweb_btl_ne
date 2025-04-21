"use client"

import { useState, useEffect } from "react"
import { Clock, BookOpen, FileText, Calendar, Users, Award } from "lucide-react"

interface CourseDetailHeaderProps {
  slug: string
}

interface CourseData {
  code: string
  title: string
  credits: number
  description: string
  semester?: string
  department?: string
  level?: string
  prerequisites?: string[]
}

export function CourseDetailHeader({ slug }: CourseDetailHeaderProps) {
  const [courseData, setCourseData] = useState<CourseData | null>(null)

  useEffect(() => {
    // Hàm fetch dữ liệu từ API
    const fetchCourseData = async () => {
      try {
        const response = await fetch(`/api/courses/${slug}`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setCourseData(data)
      } catch (error) {
        console.error("Error fetching course data:", error)
      }
    }

    fetchCourseData()
  }, [slug])

  // Hiển thị loading state
  if (!courseData) {
    return <div>Đang tải thông tin môn học...</div>
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Banner với gradient */}
      <div className="bg-gradient-to-r from-primary to-primary-light h-16 md:h-24 relative">
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <span className="inline-block bg-white text-primary text-sm font-medium px-2.5 py-1 rounded shadow-sm">
                {courseData.code}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nội dung chính */}
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{courseData.title}</h1>
        <p className="text-gray-600 mb-6">{courseData.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <Clock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Số tín chỉ</div>
              <div className="font-semibold">{courseData.credits} tín chỉ</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Bộ môn</div>
              <div className="font-semibold">{courseData.department}</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Học kỳ</div>
              <div className="font-semibold">{courseData.semester}</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Bậc đào tạo</div>
              <div className="font-semibold">{courseData.level}</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Loại môn học</div>
              <div className="font-semibold">Bắt buộc</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-primary-50 p-3 rounded-full mr-4">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Đề cương</div>
              <div className="font-semibold">
                <a href="#" className="text-primary hover:underline" aria-label="Tải đề cương chi tiết môn học">
                  Tải xuống
                </a>
              </div>
            </div>
          </div>
        </div>

        {courseData.prerequisites && courseData.prerequisites.length > 0 && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Môn học tiên quyết</h3>
            <div className="flex flex-wrap gap-2">
              {courseData.prerequisites.map((prereq, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 text-sm font-medium px-2.5 py-1 rounded">
                  {prereq}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
