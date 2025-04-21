import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

// Ví dụ 1: Sử dụng BreadcrumbSchema tự động
export function AutomaticBreadcrumbExample() {
  return (
    <>
      {/* BreadcrumbSchema sẽ tự động tạo breadcrumb dựa trên đường dẫn URL */}
      <BreadcrumbSchema />
      <div>Nội dung trang</div>
    </>
  )
}

// Ví dụ 2: Sử dụng BreadcrumbSchema với items tùy chỉnh
export function CustomBreadcrumbExample() {
  const breadcrumbItems = [
    { name: "Trang chủ", url: "/" },
    { name: "Đào tạo", url: "/dao-tao" },
    { name: "Chương trình đào tạo", url: "/dao-tao/chuong-trinh" },
    { name: "Công nghệ thông tin", url: "/dao-tao/chuong-trinh/cntt" },
  ]

  return (
    <>
      {/* BreadcrumbSchema sẽ sử dụng items được cung cấp */}
      <BreadcrumbSchema items={breadcrumbItems} overrideItems={true} />
      <div>Nội dung trang chi tiết chương trình đào tạo</div>
    </>
  )
}

// Ví dụ 3: Sử dụng BreadcrumbSchema với items bổ sung
export function ExtendedBreadcrumbExample() {
  const additionalItems = [{ name: "Phần mềm quản lý", url: "/dao-tao/chuong-trinh/cntt/phan-mem-quan-ly" }]

  return (
    <>
      {/* 
        BreadcrumbSchema sẽ kết hợp items tự động từ URL với items được cung cấp
        Ví dụ: nếu URL là /dao-tao/chuong-trinh/cntt, breadcrumb sẽ là:
        Trang chủ > Đào tạo > Chương trình đào tạo > Công nghệ thông tin > Phần mềm quản lý
      */}
      <BreadcrumbSchema items={additionalItems} />
      <div>Nội dung trang chi tiết môn học</div>
    </>
  )
}

// Ví dụ 4: Sử dụng BreadcrumbSchema trong trang tin tức
export function NewsBreadcrumbExample() {
  const breadcrumbItems = [
    { name: "Trang chủ", url: "/" },
    { name: "Tin tức & Sự kiện", url: "/tin-tuc-su-kien" },
    { name: "Sự kiện", url: "/tin-tuc-su-kien/danh-muc/su-kien" },
    { name: "Lễ khai giảng năm học 2023-2024", url: "/tin-tuc-su-kien/khai-giang-2023-2024" },
  ]

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} overrideItems={true} />
      <div>Nội dung trang tin tức</div>
    </>
  )
}
