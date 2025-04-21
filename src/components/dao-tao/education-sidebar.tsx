"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, FileText, GraduationCap, BookOpen, Library, School } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const educationLinks = [
  {
    title: "Tổng quan đào tạo",
    href: "/dao-tao",
    icon: GraduationCap,
  },
  {
    title: "Hệ đào tạo",
    href: "/dao-tao/he-dao-tao",
    icon: School,
  },
  {
    title: "Chương trình đào tạo",
    href: "/dao-tao/chuong-trinh",
    icon: BookOpen,
    subLinks: [
      {
        title: "Công nghệ thông tin",
        href: "/dao-tao/chuong-trinh/cong-nghe-thong-tin",
      },
      {
        title: "Công nghệ phần mềm",
        href: "/dao-tao/chuong-trinh/cong-nghe-phan-mem",
      },
      {
        title: "Hệ thống thông tin",
        href: "/dao-tao/chuong-trinh/he-thong-thong-tin",
      },
      {
        title: "Kỹ thuật máy tính",
        href: "/dao-tao/chuong-trinh/ky-thuat-may-tinh",
      },
    ],
  },
  {
    title: "Môn học",
    href: "/dao-tao/mon-hoc",
    icon: FileText,
  },
  {
    title: "Tài liệu học tập",
    href: "/dao-tao/tai-lieu",
    icon: Library,
  },
]

export function EducationSidebar() {
  const pathname = usePathname()
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (href: string) => {
    setOpenSubmenu(openSubmenu === href ? null : href)
  }

  // Kiểm tra xem đường dẫn hiện tại có thuộc submenu nào không
  const isSubmenuActive = (link: any) => {
    if (!link.subLinks) return false
    return link.subLinks.some((subLink: any) => pathname === subLink.href)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 bg-primary text-white">
        <h2 className="text-xl font-bold">Đào tạo</h2>
      </div>
      <nav className="p-2">
        <ul className="space-y-1">
          {educationLinks.map((link) => (
            <li key={link.href}>
              {link.subLinks ? (
                <div className="mb-1">
                  <button
                    onClick={() => toggleSubmenu(link.href)}
                    className={cn(
                      "flex items-center justify-between w-full p-3 rounded-md transition-colors",
                      pathname === link.href || isSubmenuActive(link)
                        ? "bg-primary-50 text-primary font-medium"
                        : "hover:bg-gray-100",
                    )}
                  >
                    <div className="flex items-center">
                      <link.icon className="w-5 h-5 mr-3" />
                      <span>{link.title}</span>
                    </div>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform",
                        (openSubmenu === link.href || isSubmenuActive(link)) && "transform rotate-180",
                      )}
                    />
                  </button>
                  {(openSubmenu === link.href || isSubmenuActive(link)) && (
                    <ul className="pl-10 mt-1 space-y-1">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.href}>
                          <Link
                            href={subLink.href}
                            className={cn(
                              "block p-2 rounded-md transition-colors",
                              pathname === subLink.href
                                ? "bg-primary-50 text-primary font-medium"
                                : "hover:bg-gray-100",
                            )}
                          >
                            {subLink.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center p-3 rounded-md transition-colors",
                    pathname === link.href ? "bg-primary-50 text-primary font-medium" : "hover:bg-gray-100",
                  )}
                >
                  <link.icon className="w-5 h-5 mr-3" />
                  <span>{link.title}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
