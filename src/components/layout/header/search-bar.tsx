"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SearchBarProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý tìm kiếm ở đây
    console.log("Searching for:", searchTerm)
    // Sau khi tìm kiếm xong, có thể chuyển hướng đến trang kết quả tìm kiếm
    // router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20 animate-fadeIn">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-xl overflow-hidden">
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-800">Tìm kiếm</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Đóng tìm kiếm"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Nhập từ khóa tìm kiếm..."
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Xóa từ khóa tìm kiếm"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Tìm kiếm phổ biến</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setSearchTerm("tuyển sinh")}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Tuyển sinh
                </button>
                <button
                  type="button"
                  onClick={() => setSearchTerm("lịch thi")}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Lịch thi
                </button>
                <button
                  type="button"
                  onClick={() => setSearchTerm("học bổng")}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Học bổng
                </button>
                <button
                  type="button"
                  onClick={() => setSearchTerm("việc làm")}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                >
                  Việc làm
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-gray-50 px-4 py-3 text-right border-t border-gray-200">
          <button
            type="submit"
            onClick={handleSubmit}
            className={cn(
              "px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors",
              !searchTerm && "opacity-50 cursor-not-allowed",
            )}
            disabled={!searchTerm}
          >
            Tìm kiếm
          </button>
        </div>
      </div>
    </div>
  )
}
