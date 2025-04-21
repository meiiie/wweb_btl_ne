import { defaultSEO } from "@/lib/seo-config"

export interface BreadcrumbItem {
  name: string
  url: string
}

/**
 * Tạo schema BreadcrumbList theo chuẩn schema.org
 * @param items Danh sách các mục breadcrumb
 * @returns Schema BreadcrumbList theo chuẩn schema.org
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${defaultSEO.siteUrl}${item.url}`,
    })),
  }
}

/**
 * Ánh xạ các segment URL sang tên hiển thị phù hợp
 */
export const segmentNameMap: Record<string, string> = {
  "gioi-thieu": "Giới thiệu",
  "dao-tao": "Đào tạo",
  "nghien-cuu": "Nghiên cứu",
  "giang-vien": "Giảng viên",
  "sinh-vien": "Sinh viên",
  "tin-tuc-su-kien": "Tin tức & Sự kiện",
  "lien-he": "Liên hệ",
  "chuong-trinh": "Chương trình đào tạo",
  "de-tai": "Đề tài nghiên cứu",
  "cong-bo-khoa-hoc": "Công bố khoa học",
  "ung-dung-hang-hai": "Ứng dụng CNTT trong hàng hải",
  "du-an-sinh-vien": "Dự án sinh viên",
  "bo-mon": "Bộ môn",
  "thong-bao": "Thông báo",
  "co-hoi-viec-lam": "Cơ hội việc làm",
  "lich-su": "Lịch sử phát triển",
  "tam-nhin-su-menh": "Tầm nhìn & Sứ mệnh",
  "co-cau-to-chuc": "Cơ cấu tổ chức",
  "co-so-vat-chat": "Cơ sở vật chất",
  // Thêm các ánh xạ khác tại đây
}

/**
 * Tạo breadcrumb items tự động từ pathname
 * @param pathname Đường dẫn URL hiện tại
 * @returns Danh sách các mục breadcrumb
 */
export function generateBreadcrumbItems(pathname: string): BreadcrumbItem[] {
  // Luôn bắt đầu với trang chủ
  const breadcrumbs: BreadcrumbItem[] = [{ name: "Trang chủ", url: "/" }]

  // Nếu đang ở trang chủ, chỉ trả về breadcrumb trang chủ
  if (pathname === "/") {
    return breadcrumbs
  }

  // Phân tích pathname thành các phần
  const pathSegments = pathname.split("/").filter((segment) => segment)

  // Ánh xạ các phần thành breadcrumb items
  let currentPath = ""

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`

    // Tạo tên hiển thị từ segment
    let name = segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // Sử dụng tên từ ánh xạ nếu có
    if (segmentNameMap[segment]) {
      name = segmentNameMap[segment]
    }

    breadcrumbs.push({
      name,
      url: currentPath,
    })
  })

  return breadcrumbs
}
