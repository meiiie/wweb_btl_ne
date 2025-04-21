"use client"

import { usePathname } from "next/navigation"
import Script from "next/script"
import { defaultSEO } from "@/lib/seo-config"

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items?: BreadcrumbItem[]
  overrideItems?: boolean
}

/**
 * Component BreadcrumbSchema - Tạo schema BreadcrumbList cho trang
 *
 * Nếu không cung cấp items, component sẽ tự động tạo breadcrumb dựa trên đường dẫn URL
 * Nếu cung cấp items và overrideItems=true, component sẽ sử dụng items được cung cấp
 * Nếu cung cấp items và overrideItems=false, component sẽ kết hợp items được cung cấp với items tự động
 */
export function BreadcrumbSchema({ items, overrideItems = false }: BreadcrumbSchemaProps) {
  const pathname = usePathname()

  // Tạo breadcrumb items tự động từ pathname
  const generateBreadcrumbItems = (): BreadcrumbItem[] => {
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

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`

      // Tạo tên hiển thị từ segment
      let name = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      // Ánh xạ các segment đặc biệt sang tên hiển thị phù hợp
      const segmentNameMap: Record<string, string> = {
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
      }

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

  // Tạo breadcrumb items cuối cùng
  const finalBreadcrumbItems =
    overrideItems && items ? items : items ? [...generateBreadcrumbItems(), ...items] : generateBreadcrumbItems()

  // Tạo schema JSON-LD
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: finalBreadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${defaultSEO.siteUrl}${item.url}`,
    })),
  }

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}
