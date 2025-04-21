"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const cooperationLinks = [
  {
    title: "Tổng quan",
    href: "/hop-tac",
  },
  {
    title: "Hợp tác doanh nghiệp",
    href: "/hop-tac/doanh-nghiep",
  },
  {
    title: "Hợp tác quốc tế",
    href: "/hop-tac/quoc-te",
  },
]

export function CooperationSidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-gray-50 rounded-lg p-4 shadow-sm sticky top-24">
      <h3 className="text-lg font-bold text-blue-800 pb-2 border-b border-gray-200 mb-4">Hợp tác</h3>
      <nav className="space-y-1">
        {cooperationLinks.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`)

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block px-4 py-2 rounded-md text-sm font-medium transition-colors",
                isActive ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-blue-50 hover:text-blue-700",
              )}
            >
              {link.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
