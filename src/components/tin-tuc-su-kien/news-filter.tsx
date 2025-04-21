"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface NewsFilterProps {
  onSortChange: (value: string) => void
  onFilterChange?: (filters: Record<string, string>) => void
  sortOptions: { value: string; label: string }[]
  filterOptions?: {
    name: string
    label: string
    options: { value: string; label: string }[]
  }[]
}

export function NewsFilter({ onSortChange, onFilterChange, sortOptions, filterOptions = [] }: NewsFilterProps) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string>>({})
  const [showFilters, setShowFilters] = useState(false)

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value)
  }

  const handleFilterChange = (name: string, value: string) => {
    const newFilters = { ...activeFilters, [name]: value }
    setActiveFilters(newFilters)
    if (onFilterChange) onFilterChange(newFilters)
  }

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-[#0056a6]">Tin tức mới nhất</h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {filterOptions.length > 0 && (
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center text-sm text-gray-600 hover:text-[#0056a6]"
            >
              Bộ lọc
              <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>
          )}

          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">Sắp xếp theo:</span>
            <select
              onChange={handleSortChange}
              className="border border-gray-300 rounded-md text-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-[#0056a6] focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {showFilters && filterOptions.length > 0 && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filterOptions.map((filter) => (
              <div key={filter.name} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">{filter.label}</label>
                <select
                  name={filter.name}
                  value={activeFilters[filter.name] || ""}
                  onChange={(e) => handleFilterChange(filter.name, e.target.value)}
                  className="w-full border border-gray-300 rounded-md text-sm py-1.5 px-2 focus:outline-none focus:ring-2 focus:ring-[#0056a6] focus:border-transparent"
                >
                  <option value="">Tất cả</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
