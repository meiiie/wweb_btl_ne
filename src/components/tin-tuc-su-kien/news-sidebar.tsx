"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Search } from "lucide-react"

interface Category {
  id: number
  name: string
  count: number
  slug: string
}

interface RecentPost {
  id: number
  title: string
  date: string
  image: string
  link: string
}

interface Tag {
  id: number
  name: string
  slug: string
}

interface NewsSidebarProps {
  categories: Category[]
  recentPosts: RecentPost[]
  tags: Tag[]
  onSearch?: (query: string) => void
}

export function NewsSidebar({ categories, recentPosts, tags, onSearch }: NewsSidebarProps) {
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const query = formData.get("query") as string
    if (onSearch) onSearch(query)
  }

  return (
    <div>
      {/* Search */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#0056a6]">Tìm kiếm</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            name="query"
            placeholder="Tìm kiếm tin tức..."
            className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#0056a6] focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#0056a6]"
          >
            <Search className="w-5 h-5" />
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#0056a6]">Danh mục</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/tin-tuc-su-kien/danh-muc/${category.slug}`}
                className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100"
              >
                <span className="text-gray-700 hover:text-[#0056a6]">{category.name}</span>
                <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent posts */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-xl font-bold mb-4 text-[#0056a6]">Bài viết gần đây</h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg?height=80&width=80"}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex-grow">
                <h4 className="text-sm font-medium hover:text-[#0056a6]">
                  <Link href={post.link}>{post.title}</Link>
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-[#0056a6]">Thẻ</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tin-tuc-su-kien/tag/${tag.slug}`}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
            >
              {tag.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
