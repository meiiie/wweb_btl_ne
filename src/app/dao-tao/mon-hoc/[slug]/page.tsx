import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/dao-tao/page-header"
import { CourseDetailHeader } from "@/components/dao-tao/course-detail-header"
import { CourseSyllabus } from "@/components/dao-tao/course-syllabus"
import { CourseOutcomes } from "@/components/dao-tao/course-outcomes"
import { CourseResources } from "@/components/dao-tao/course-resources"
import { CourseInstructors } from "@/components/dao-tao/course-instructors"
import { RelatedCourses } from "@/components/dao-tao/related-courses"
import { COURSES } from "@/lib/constants/education"
import { CourseReviews } from "@/components/dao-tao/course-reviews"
import { JsonLd } from "@/components/seo/json-ld"

interface CoursePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = COURSES.find((course) => course.slug === params.slug)

  if (!course) {
    return {
      title: "Không tìm thấy môn học | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      description: "Môn học không tồn tại hoặc đã bị xóa.",
    }
  }

  return {
    title: `${course.title} (${course.code}) | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam`,
    description: `Thông tin chi tiết về môn học ${course.title} (${course.code}) - ${course.credits} tín chỉ. ${course.description.substring(0, 150)}...`,
    keywords: [course.title, course.code, "môn học", "học phần", "khoa CNTT", "đại học hàng hải"],
    openGraph: {
      title: `${course.title} (${course.code}) | Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam`,
      description: course.description,
      url: `https://fit.vimaru.edu.vn/dao-tao/mon-hoc/${params.slug}`,
      siteName: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      locale: "vi_VN",
      type: "website",
    },
    alternates: {
      canonical: `https://fit.vimaru.edu.vn/dao-tao/mon-hoc/${params.slug}`,
    },
  }
}

export default function CoursePage({ params }: CoursePageProps) {
  // Tìm môn học theo slug
  const course = COURSES.find((course) => course.slug === params.slug)

  // Nếu không tìm thấy môn học
  if (!course) {
    notFound()
  }

  // Dữ liệu mẫu cho các component
  const syllabusData = [
    {
      title: "Giới thiệu",
      description: "Tổng quan về môn học và các khái niệm cơ bản",
      topics: ["Tổng quan về môn học", "Các khái niệm cơ bản", "Lịch sử phát triển", "Ứng dụng trong thực tế"],
    },
    {
      title: "Kiến thức nền tảng",
      description: "Các kiến thức nền tảng cần thiết cho môn học",
      topics: ["Cơ sở lý thuyết", "Các nguyên lý cơ bản", "Mô hình và phương pháp", "Ứng dụng thực tế"],
    },
    {
      title: "Phương pháp và kỹ thuật",
      description: "Các phương pháp và kỹ thuật chính trong môn học",
      topics: ["Các phương pháp tiếp cận", "Kỹ thuật và công cụ", "Nghiên cứu tình huống", "Thực hành và bài tập"],
    },
    {
      title: "Ứng dụng nâng cao",
      description: "Các ứng dụng nâng cao và xu hướng phát triển",
      topics: ["Các ứng dụng hiện đại", "Xu hướng phát triển", "Thực hành và dự án", "Tổng kết và đánh giá"],
    },
  ]

  const outcomesData = [
    {
      id: "CLO1",
      description: "Hiểu và áp dụng được các khái niệm cơ bản và nguyên lý của môn học",
    },
    {
      id: "CLO2",
      description: "Phân tích và đánh giá được các vấn đề liên quan đến môn học",
    },
    {
      id: "CLO3",
      description: "Thiết kế và triển khai được các giải pháp cho các bài toán thực tế",
    },
    {
      id: "CLO4",
      description: "Sử dụng thành thạo các công cụ và kỹ thuật liên quan đến môn học",
    },
    {
      id: "CLO5",
      description: "Làm việc nhóm hiệu quả và trình bày kết quả một cách chuyên nghiệp",
    },
  ]

  const resourcesData = [
    {
      id: "doc1",
      title: "Đề cương chi tiết môn học",
      type: "document",
      url: `/dao-tao/tai-lieu/de-cuong/${course.slug}.pdf`,
      description: "Đề cương chi tiết môn học bao gồm mục tiêu, nội dung và phương pháp đánh giá",
      fileType: "pdf",
      fileSize: "1.2 MB",
    },
    {
      id: "doc2",
      title: "Bài giảng Chương 1",
      type: "document",
      url: `/dao-tao/tai-lieu/bai-giang/${course.slug}/chuong1.pdf`,
      description: "Bài giảng chi tiết Chương 1: Giới thiệu",
      fileType: "pdf",
      fileSize: "3.5 MB",
    },
    {
      id: "doc3",
      title: "Bài tập thực hành",
      type: "document",
      url: `/dao-tao/tai-lieu/bai-tap/${course.slug}.pdf`,
      description: "Tập hợp các bài tập thực hành cho môn học",
      fileType: "pdf",
      fileSize: "2.8 MB",
    },
    {
      id: "book1",
      title: "Giáo trình chính",
      type: "book",
      url: "#",
      description: "Giáo trình chính được sử dụng trong môn học",
    },
    {
      id: "book2",
      title: "Tài liệu tham khảo",
      type: "book",
      url: "#",
      description: "Tài liệu tham khảo bổ sung cho môn học",
    },
    {
      id: "video1",
      title: "Video bài giảng: Tổng quan môn học",
      type: "video",
      url: "https://www.youtube.com/watch?v=example",
      description: "Video giới thiệu tổng quan về môn học",
    },
    {
      id: "link1",
      title: "Trang web hỗ trợ học tập",
      type: "link",
      url: "https://example.com",
      description: "Trang web cung cấp tài nguyên học tập bổ sung",
    },
  ]

  const instructorsData = [
    {
      id: "ins1",
      name: "TS. Nguyễn Văn A",
      degree: "Tiến sĩ Khoa học máy tính",
      position: "Trưởng bộ môn",
      department: "Bộ môn Khoa học máy tính",
      email: "nguyenvana@vimaru.edu.vn",
      phone: "0123456789",
      bio: "TS. Nguyễn Văn A có hơn 15 năm kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực Khoa học máy tính. Ông đã công bố nhiều bài báo khoa học trên các tạp chí quốc tế uy tín.",
      imageUrl: "/placeholder.svg?height=96&width=96",
      profileUrl: "/giang-vien/nguyen-van-a",
    },
    {
      id: "ins2",
      name: "ThS. Trần Thị B",
      degree: "Thạc sĩ Công nghệ thông tin",
      position: "Giảng viên",
      department: "Bộ môn Khoa học máy tính",
      email: "tranthib@vimaru.edu.vn",
      bio: "ThS. Trần Thị B tốt nghiệp Thạc sĩ tại Đại học Công nghệ, Đại học Quốc gia Hà Nội. Cô có nhiều kinh nghiệm trong giảng dạy và hướng dẫn sinh viên thực hiện các dự án thực tế.",
      imageUrl: "/placeholder.svg?height=96&width=96",
      profileUrl: "/giang-vien/tran-thi-b",
    },
  ]

  const reviewsData = [
    {
      id: "rev1",
      studentName: "Nguyễn Văn X",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      rating: 5,
      date: "15/05/2023",
      comment:
        "Môn học rất hay và bổ ích. Giảng viên nhiệt tình, giảng dạy dễ hiểu. Nội dung môn học được cập nhật theo xu hướng công nghệ mới nhất. Tôi đã học được rất nhiều kiến thức và kỹ năng hữu ích cho công việc sau này.",
      likes: 12,
      semester: "Học kỳ 1, 2022-2023",
      isVerified: true,
    },
    {
      id: "rev2",
      studentName: "Trần Thị Y",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      rating: 4,
      date: "20/12/2022",
      comment:
        "Môn học có nội dung khá khó nhưng giảng viên hướng dẫn rất tận tình. Bài tập nhiều nhưng giúp hiểu sâu hơn về môn học.",
      likes: 8,
      semester: "Học kỳ 2, 2021-2022",
    },
    {
      id: "rev3",
      studentName: "Lê Văn Z",
      studentAvatar: "/placeholder.svg?height=40&width=40",
      rating: 3,
      date: "10/06/2022",
      comment:
        "Môn học có nhiều kiến thức bổ ích nhưng cách đánh giá hơi khó. Cần cải thiện phương pháp giảng dạy để sinh viên dễ tiếp thu hơn.",
      likes: 5,
      semester: "Học kỳ 1, 2021-2022",
    },
  ]

  const relatedCoursesData = [
    {
      id: "rel1",
      code: "IT1010",
      title: "Nhập môn Công nghệ thông tin",
      credits: 3,
      slug: "nhap-mon-cong-nghe-thong-tin",
      relationship: "prerequisite",
    },
    {
      id: "rel2",
      code: "IT3040",
      title: "Lập trình hướng đối tượng",
      credits: 3,
      slug: "lap-trinh-huong-doi-tuong",
      relationship: "next",
    },
    {
      id: "rel3",
      code: "IT4050",
      title: "Trí tuệ nhân tạo",
      credits: 3,
      slug: "tri-tue-nhan-tao",
      relationship: "same-department",
    },
    {
      id: "rel4",
      code: "IT4060",
      title: "Mạng máy tính",
      credits: 4,
      slug: "mang-may-tinh",
      relationship: "same-program",
    },
  ]

  // Schema.org data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    courseCode: course.code,
    description: course.description,
    provider: {
      "@type": "Organization",
      name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
      sameAs: "https://fit.vimaru.edu.vn",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "onsite",
      instructor: instructorsData.map((instructor) => ({
        "@type": "Person",
        name: instructor.name,
        jobTitle: instructor.position,
        worksFor: {
          "@type": "Organization",
          name: "Khoa Công nghệ Thông tin - Đại học Hàng hải Việt Nam",
        },
      })),
    },
    educationalCredentialAwarded: "Tín chỉ",
    numberOfCredits: course.credits,
    teaches: outcomesData.map((outcome) => outcome.description).join(", "),
  }

  return (
    <div>
      <JsonLd data={schemaData} />

      <PageHeader
        title={course.title}
        description={`Mã môn: ${course.code} - ${course.credits} tín chỉ`}
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Môn học", href: "/dao-tao/mon-hoc" },
          { name: course.title, href: `/dao-tao/mon-hoc/${course.slug}` },
        ]}
      />

      <div className="space-y-8">
        {/* Thông tin chung về môn học */}
        <CourseDetailHeader
          code={course.code}
          title={course.title}
          credits={course.credits}
          description={course.description}
          prerequisites={["IT1010", "IT2020"]}
        />

        {/* Nội dung môn học */}
        <CourseSyllabus chapters={syllabusData} />

        {/* Chuẩn đầu ra */}
        <CourseOutcomes outcomes={outcomesData} />

        {/* Tài nguyên học tập */}
        <CourseResources resources={resourcesData} />

        {/* Giảng viên phụ trách */}
        <CourseInstructors instructors={instructorsData} />

        {/* Đánh giá từ sinh viên */}
        <CourseReviews reviews={reviewsData} averageRating={4.2} totalReviews={reviewsData.length} />

        {/* Môn học liên quan */}
        <RelatedCourses courses={relatedCoursesData} />
      </div>
    </div>
  )
}
