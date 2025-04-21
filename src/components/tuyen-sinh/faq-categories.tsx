"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

const categories = [
  { id: "all", name: "Tất cả câu hỏi" },
  { id: "tuyen-sinh", name: "Tuyển sinh" },
  { id: "dao-tao", name: "Đào tạo" },
  { id: "co-so-vat-chat", name: "Cơ sở vật chất" },
  { id: "viec-lam", name: "Việc làm" },
  { id: "hoc-phi", name: "Học phí" },
  { id: "hoc-bong", name: "Học bổng" },
  { id: "khac", name: "Khác" },
]

export function FaqCategories() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "all"

  const handleCategoryChange = (categoryId: string) => {
    const params = new URLSearchParams(searchParams)
    if (categoryId === "all") {
      params.delete("category")
    } else {
      params.set("category", categoryId)
    }
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Danh mục</h3>

        <nav className="space-y-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                currentCategory === category.id
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}
