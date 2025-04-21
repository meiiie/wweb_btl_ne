"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

interface MegaMenuProps {
  category: string
  isOpen: boolean
  onClose: () => void
  onHoverChange?: (isHovering: boolean) => void
}

export function MegaMenu({ category, isOpen, onClose, onHoverChange }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Đóng menu khi nhấn ESC
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscKey)
    return () => {
      document.removeEventListener("keydown", handleEscKey)
    }
  }, [isOpen, onClose])

  // Xử lý hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    // Thông báo cho component cha biết mega menu đang được hover
    if (onHoverChange) {
      onHoverChange(true)
    }
  }

  const handleMouseLeave = () => {
    // Thông báo cho component cha biết mega menu không còn được hover
    if (onHoverChange) {
      onHoverChange(false)
    }

    timeoutRef.current = setTimeout(() => {
      onClose()
    }, 100)
  }

  // Cleanup timeout khi unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Tính toán các lớp CSS cho animation
  const menuClasses = cn(
    "absolute inset-x-0 bg-white shadow-lg transform transition-all duration-200 ease-in-out overflow-hidden border-t border-gray-200 z-50 mega-menu-container",
    isOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none",
  )

  // Define data for the mega menu
  const megaMenuData = {
    "Giới thiệu": {
      categoryTitle: "Giới thiệu Khoa CNTT",
      categoryDescription:
        "Khoa Công nghệ Thông tin được thành lập vào năm 1994, là một trong những đơn vị đào tạo lâu đời và uy tín trong lĩnh vực CNTT tại miền Bắc Việt Nam.",
      categoryLink: "/gioi-thieu",
      menuItems: [
        [
          {
            title: "Khám phá thêm",
            items: [
              { name: "Lịch sử phát triển", href: "/gioi-thieu/lich-su" },
              { name: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu/tam-nhin-su-menh" },
              { name: "Cơ cấu tổ chức", href: "/gioi-thieu/co-cau-to-chuc" },
              { name: "Cơ sở vật chất", href: "/gioi-thieu/co-so-vat-chat" },
            ],
          },
        ],
        [
          {
            title: "Thông tin chung",
            items: [
              { name: "Thông báo", href: "/tin-tuc-su-kien/thong-bao" },
              { name: "Tin tức", href: "/tin-tuc-su-kien/tin-tuc" },
              { name: "Sự kiện", href: "/tin-tuc-su-kien/su-kien" },
            ],
          },
        ],
        [
          {
            title: "Hợp tác",
            items: [
              { name: "Doanh nghiệp", href: "/hop-tac/doanh-nghiep" },
              { name: "Quốc tế", href: "/hop-tac/quoc-te" },
            ],
          },
        ],
      ],
    },
    "Đào tạo": {
      categoryTitle: "Chương trình đào tạo",
      categoryDescription: "Các chương trình đào tạo chất lượng cao, đáp ứng nhu cầu của thị trường lao động.",
      categoryLink: "/dao-tao",
      menuItems: [
        [
          {
            title: "Chương trình",
            items: [
              { name: "Công nghệ thông tin", href: "/dao-tao/chuong-trinh/cong-nghe-thong-tin" },
              { name: "Công nghệ phần mềm", href: "/dao-tao/chuong-trinh/cong-nghe-phan-mem" },
              { name: "Hệ thống thông tin", href: "/dao-tao/chuong-trinh/he-thong-thong-tin" },
              { name: "Kỹ thuật máy tính", href: "/dao-tao/chuong-trinh/ky-thuat-may-tinh" },
            ],
          },
        ],
        [
          {
            title: "Tài nguyên",
            items: [
              { name: "Môn học", href: "/dao-tao/mon-hoc" },
              { name: "Tài liệu học tập", href: "/dao-tao/tai-lieu" },
            ],
          },
        ],
        [
          {
            title: "Thông tin khác",
            items: [
              { name: "Hệ đào tạo", href: "/dao-tao/he-dao-tao" },
              { name: "Học bổng", href: "/sinh-vien/hoc-bong" },
            ],
          },
        ],
      ],
    },
    "Nghiên cứu": {
      categoryTitle: "Nghiên cứu khoa học",
      categoryDescription:
        "Khoa CNTT tập trung nghiên cứu các lĩnh vực công nghệ tiên tiến như Trí tuệ nhân tạo, Khoa học dữ liệu, IoT, An toàn thông tin và các ứng dụng CNTT trong lĩnh vực Hàng hải.",
      categoryLink: "/nghien-cuu",
      menuItems: [
        [
          {
            title: "Hoạt động",
            items: [
              { name: "Đề tài nghiên cứu", href: "/nghien-cuu/de-tai" },
              { name: "Công bố khoa học", href: "/nghien-cuu/cong-bo-khoa-hoc" },
              { name: "Ứng dụng hàng hải", href: "/nghien-cuu/ung-dung-hang-hai" },
              { name: "Dự án sinh viên", href: "/nghien-cuu/du-an-sinh-vien" },
            ],
          },
        ],
        [
          {
            title: "Hợp tác",
            items: [
              { name: "Doanh nghiệp", href: "/hop-tac/doanh-nghiep" },
              { name: "Quốc tế", href: "/hop-tac/quoc-te" },
            ],
          },
        ],
        [
          {
            title: "",
            items: [],
          },
        ],
      ],
    },
    "Đội ngũ": {
      categoryTitle: "Đội ngũ giảng viên",
      categoryDescription:
        "Khoa CNTT có đội ngũ giảng viên có trình độ cao, nhiều kinh nghiệm giảng dạy và nghiên cứu trong lĩnh vực công nghệ thông tin.",
      categoryLink: "/doi-ngu",
      menuItems: [
        [
          {
            title: "Thông tin",
            items: [
              { name: "Ban chủ nhiệm khoa", href: "/doi-ngu/ban-chu-nhiem" },
              { name: "Giảng viên", href: "/doi-ngu/giang-vien" },
              { name: "Cán bộ viên chức", href: "/doi-ngu/can-bo-vien-chuc" },
            ],
          },
        ],
        [
          {
            title: "Bộ môn",
            items: [
              { name: "Danh sách bộ môn", href: "/bo-mon" },
              { name: "Phòng thí nghiệm", href: "/bo-mon/phong-thi-nghiem" },
            ],
          },
        ],
        [
          {
            title: "Liên hệ",
            items: [{ name: "Thông tin liên hệ", href: "/lien-he" }],
          },
        ],
      ],
    },
    "Sinh viên": {
      categoryTitle: "Sinh viên",
      categoryDescription:
        "Thông tin hữu ích dành cho sinh viên về học tập, hoạt động ngoại khóa, học bổng, thực tập và cơ hội việc làm.",
      categoryLink: "/sinh-vien",
      menuItems: [
        [
          {
            title: "Thông tin",
            items: [
              { name: "Thông báo", href: "/sinh-vien/thong-bao" },
              { name: "Học tập", href: "/sinh-vien/hoc-tap" },
              { name: "Học bổng", href: "/sinh-vien/hoc-bong" },
              { name: "Hoạt động", href: "/sinh-vien/hoat-dong" },
              { name: "Cơ hội việc làm", href: "/sinh-vien/co-hoi-viec-lam" },
            ],
          },
        ],
        [
          {
            title: "Thực tập & Việc làm",
            items: [
              { name: "Thực tập", href: "/sinh-vien/thuc-tap" },
              { name: "Lịch sử việc làm", href: "/sinh-vien/lich-su-viec-lam" },
              { name: "Cựu sinh viên", href: "/sinh-vien/cuu-sinh-vien" },
            ],
          },
        ],
        [
          {
            title: "Hỗ trợ",
            items: [
              { name: "Tư vấn học tập", href: "/sinh-vien/hoc-tap" },
              { name: "Câu lạc bộ", href: "/sinh-vien/hoat-dong" },
            ],
          },
        ],
      ],
    },
  }

  const categoryData = megaMenuData[category] || {
    categoryTitle: "Không tìm thấy",
    categoryDescription: "Không có thông tin cho danh mục này.",
    categoryLink: "/",
    menuItems: [],
  }

  const { categoryTitle, categoryDescription, categoryLink, menuItems } = categoryData

  return (
    <div
      className={menuClasses}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={menuRef}
      aria-label={`${category} mega menu`}
      role="region"
    >
      <Container className="py-6">
        {/* Nội dung mega menu */}
        <div className="grid grid-cols-4 gap-6">
          {/* Cột 1 - Tiêu đề và mô tả */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-primary mb-2">{categoryTitle}</h3>
            <p className="text-gray-600 mb-4">{categoryDescription}</p>
            <Link
              href={categoryLink}
              className="inline-flex items-center text-secondary hover:text-primary transition-colors"
              onClick={onClose}
            >
              Xem tất cả
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          {/* Cột 2-4 - Danh sách liên kết */}
          {menuItems.map((column, columnIndex) => (
            <div key={columnIndex} className="col-span-1">
              {column.map((section, sectionIndex) => (
                <div key={sectionIndex} className="mb-4">
                  <h4 className="font-medium text-primary mb-2">{section.title}</h4>
                  <ul className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-secondary transition-colors block py-1"
                          onClick={onClose}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
