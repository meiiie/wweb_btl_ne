"use client"

import { useState, useCallback, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CourseCard } from "@/components/dao-tao/course-card"
import { CourseFilter } from "@/components/dao-tao/course-filter"
import { COURSES } from "@/lib/constants/education"
import Head from "next/head"

export default function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(COURSES)
  const searchParams = useSearchParams()

  // Lấy tham số từ URL
  const programParam = searchParams.get("program")

  // Dữ liệu mẫu cho bộ lọc
  const programOptions = [
    { id: "cntt", label: "Công nghệ thông tin" },
    { id: "cnpm", label: "Công nghệ phần mềm" },
    { id: "httt", label: "Hệ thống thông tin" },
    { id: "ktmt", label: "Kỹ thuật máy tính" },
  ]

  const departmentOptions = [
    { id: "khmt", label: "Khoa học máy tính" },
    { id: "httt", label: "Hệ thống thông tin" },
    { id: "ktmt", label: "Kỹ thuật máy tính" },
    { id: "cnpm", label: "Công nghệ phần mềm" },
  ]

  const semesterOptions = [
    { id: "1", label: "Học kỳ 1" },
    { id: "2", label: "Học kỳ 2" },
    { id: "3", label: "Học kỳ 3" },
    { id: "4", label: "Học kỳ 4" },
    { id: "5", label: "Học kỳ 5" },
    { id: "6", label: "Học kỳ 6" },
    { id: "7", label: "Học kỳ 7" },
    { id: "8", label: "Học kỳ 8" },
  ]

  const creditOptions = [
    { id: "2", label: "2 tín chỉ" },
    { id: "3", label: "3 tín chỉ" },
    { id: "4", label: "4 tín chỉ" },
    { id: "5", label: "5 tín chỉ" },
  ]

  // Xử lý thay đổi bộ lọc
  const handleFilterChange = useCallback((filters: any) => {
    // Trong thực tế, đây sẽ là một API call với các tham số lọc
    // Nhưng ở đây chúng ta sẽ lọc dữ liệu mẫu
    let results = [...COURSES]

    // Lọc theo từ khóa tìm kiếm
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(searchLower) ||
          course.code.toLowerCase().includes(searchLower) ||
          course.description.toLowerCase().includes(searchLower),
      )
    }

    // Lọc theo chương trình đào tạo
    if (filters.program) {
      // Trong thực tế, mỗi khóa học sẽ có trường program_id
      // Ở đây chúng ta giả định một số khóa học thuộc chương trình
      const programMapping: Record<string, string[]> = {
        cntt: ["IT1010", "IT2020", "IT3030"],
        cnpm: ["IT3040", "IT4050"],
        httt: ["IT3030", "IT4060"],
        ktmt: ["IT2020", "IT4060"],
      }

      if (programMapping[filters.program]) {
        results = results.filter((course) => programMapping[filters.program].includes(course.code))
      }
    }

    // Lọc theo bộ môn
    if (filters.department) {
      // Giả định mapping
      const departmentMapping: Record<string, string[]> = {
        khmt: ["IT1010", "IT2020"],
        httt: ["IT3030", "IT4060"],
        ktmt: ["IT2020", "IT4060"],
        cnpm: ["IT3040", "IT4050"],
      }

      if (departmentMapping[filters.department]) {
        results = results.filter((course) => departmentMapping[filters.department].includes(course.code))
      }
    }

    // Lọc theo học kỳ
    if (filters.semester) {
      results = results.filter((course) => course.semester?.toString() === filters.semester)
    }

    // Lọc theo số tín chỉ
    if (filters.credits) {
      results = results.filter((course) => course.credits?.toString() === filters.credits)
    }

    // Cập nhật danh sách khóa học đã lọc
    setFilteredCourses(results)
  }, [])

  // Xử lý khi có tham số từ URL
  useEffect(() => {
    if (programParam) {
      handleFilterChange({ program: programParam })
    }
  }, [programParam, handleFilterChange])

  // SEO metadata
  const pageTitle = "Danh sách môn học | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam"
  const pageDescription =
    "Thông tin chi tiết về các môn học được giảng dạy tại Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam"

  // Schema.org data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: filteredCourses.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        courseCode: course.code,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
        },
        url: `https://fit.vimaru.edu.vn/dao-tao/mon-hoc/${course.slug}`,
      },
    })),
  }

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="môn học, khoa CNTT, đại học hàng hải, công nghệ thông tin, học phần" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content="https://fit.vimaru.edu.vn/dao-tao/mon-hoc" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fit.vimaru.edu.vn/dao-tao/mon-hoc" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Head>

      <PageHeader
        title="Danh sách môn học"
        description="Thông tin chi tiết về các môn học được giảng dạy tại Khoa CNTT"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Môn học", href: "/dao-tao/mon-hoc" },
        ]}
      />

      <div className="mt-8">
        <CourseFilter
          programs={programOptions}
          departments={departmentOptions}
          semesters={semesterOptions}
          credits={creditOptions}
          onFilterChange={handleFilterChange}
          initialProgram={programParam || ""}
        />
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Danh sách môn học</h2>
          <div className="text-sm text-gray-500">Hiển thị {filteredCourses.length} môn học</div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-500">Không tìm thấy môn học nào phù hợp với bộ lọc đã chọn.</p>
            <button
              onClick={() => setFilteredCourses(COURSES)}
              className="mt-4 inline-flex items-center text-primary hover:text-primary-dark font-medium"
            >
              Xóa bộ lọc và hiển thị tất cả
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                code={course.code}
                title={course.title}
                credits={course.credits}
                description={course.description}
                slug={course.slug}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
