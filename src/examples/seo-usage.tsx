// Ví dụ về cách sử dụng component SEO

import { SEO } from "@/components/seo"

// Ví dụ 1: Sử dụng cơ bản
export function BasicExample() {
  return (
    <>
      <SEO title="Trang chủ" description="Mô tả trang chủ tại đây" />
      <div>Nội dung trang</div>
    </>
  )
}

// Ví dụ 2: Sử dụng cho trang sản phẩm/khóa học
export function CourseExample() {
  return (
    <>
      <SEO
        title="Kỹ thuật phần mềm"
        description="Chương trình đào tạo Kỹ thuật phần mềm cung cấp kiến thức và kỹ năng để phát triển, kiểm thử và bảo trì phần mềm."
        ogImage="/images/courses/ktpm.jpg"
        breadcrumb={[
          { name: "Trang chủ", item: "/" },
          { name: "Đào tạo", item: "/dao-tao" },
          { name: "Chương trình đào tạo", item: "/dao-tao/chuong-trinh" },
          { name: "Kỹ thuật phần mềm", item: "/dao-tao/chuong-trinh/ktpm" },
        ]}
        course={{
          name: "Kỹ thuật phần mềm",
          description: "Đào tạo chuyên sâu về phát triển, kiểm thử và bảo trì phần mềm theo chuẩn quốc tế.",
          provider: "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
          url: "/dao-tao/chuong-trinh/ktpm",
        }}
      />
      <div>Nội dung trang chi tiết khóa học</div>
    </>
  )
}

// Ví dụ 3: Sử dụng cho trang bài viết/tin tức
export function ArticleExample() {
  return (
    <>
      <SEO
        title="Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải"
        description="Khoa CNTT phối hợp với các đối tác tổ chức hội thảo chuyên đề về AI và ứng dụng trong ngành hàng hải."
        ogType="article"
        ogImage="/images/news/hoi-thao-ai.jpg"
        breadcrumb={[
          { name: "Trang chủ", item: "/" },
          { name: "Tin tức & Sự kiện", item: "/tin-tuc-su-kien" },
          { name: "Hội thảo về Trí tuệ nhân tạo", item: "/tin-tuc-su-kien/hoi-thao-ai-hang-hai" },
        ]}
        article={{
          url: "/tin-tuc-su-kien/hoi-thao-ai-hang-hai",
          title: "Hội thảo về Trí tuệ nhân tạo và ứng dụng trong lĩnh vực hàng hải",
          images: ["/images/news/hoi-thao-ai.jpg"],
          datePublished: "2023-08-20T10:00:00Z",
          dateModified: "2023-08-21T08:30:00Z",
          authorName: "TS. Lê Văn C",
          authorUrl: "/giang-vien/le-van-c",
          publisherName: "Khoa Công nghệ Thông tin - VMU",
          description:
            "Khoa CNTT phối hợp với các đối tác tổ chức hội thảo chuyên đề về AI và ứng dụng trong ngành hàng hải.",
        }}
      />
      <div>Nội dung trang tin tức</div>
    </>
  )
}

// Ví dụ 4: Sử dụng cho trang FAQ
export function FAQExample() {
  return (
    <>
      <SEO
        title="Câu hỏi thường gặp"
        description="Các câu hỏi thường gặp về tuyển sinh, đào tạo và các vấn đề liên quan đến Khoa CNTT."
        faq={{
          questions: [
            {
              question: "Khoa CNTT đào tạo những ngành nào?",
              answer:
                "Khoa CNTT đào tạo các ngành: Công nghệ thông tin, Kỹ thuật phần mềm, Hệ thống thông tin, và Trí tuệ nhân tạo.",
            },
            {
              question: "Điểm chuẩn trúng tuyển vào Khoa CNTT năm 2023 là bao nhiêu?",
              answer:
                "Điểm chuẩn trúng tuyển vào Khoa CNTT năm 2023 là 24 điểm cho ngành Công nghệ thông tin, 23.5 điểm cho ngành Kỹ thuật phần mềm, 23 điểm cho ngành Hệ thống thông tin và 24.5 điểm cho ngành Trí tuệ nhân tạo.",
            },
            {
              question: "Sinh viên tốt nghiệp từ Khoa CNTT có thể làm việc ở đâu?",
              answer:
                "Sinh viên tốt nghiệp từ Khoa CNTT có thể làm việc tại các công ty phần mềm, công ty công nghệ, ngân hàng, doanh nghiệp trong và ngoài nước. Một số vị trí tiêu biểu như: Kỹ sư phần mềm, Lập trình viên, Chuyên viên phân tích dữ liệu, Chuyên viên AI, Quản trị hệ thống, Kiểm thử phần mềm, Chuyên viên an toàn thông tin...",
            },
          ],
        }}
      />
      <div>Nội dung trang FAQ</div>
    </>
  )
}

// Ví dụ 5: Sử dụng với noIndex cho trang không muốn Google index
export function NoIndexExample() {
  return (
    <>
      <SEO title="Trang tạm thời" description="Trang này đang trong quá trình xây dựng" noIndex={true} />
      <div>Nội dung trang đang xây dựng</div>
    </>
  )
}
