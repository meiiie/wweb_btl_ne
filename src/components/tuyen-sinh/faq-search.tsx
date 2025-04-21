"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

export function FaqSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý tìm kiếm (sẽ được triển khai khi kết nối với backend)
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-6">
      <div className="p-6">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Tìm kiếm câu hỏi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />

          <button
            type="submit"
            className="absolute right-3 top-2.5 px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
    </div>
  )
}
