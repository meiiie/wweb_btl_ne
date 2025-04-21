"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter } from "lucide-react"

interface StaffFilterProps {
  departments: string[]
  onFilterChange: (filters: { search: string; department: string }) => void
}

export function StaffFilter({ departments, onFilterChange }: StaffFilterProps) {
  const [search, setSearch] = useState("")
  const [department, setDepartment] = useState("")

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
    onFilterChange({ search: value, department })
  }

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setDepartment(value)
    onFilterChange({ search, department: value })
  }

  return (
    <div className="mb-8 rounded-lg border bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full rounded-md border-gray-300 pl-10 text-sm focus:border-primary focus:ring-primary"
            placeholder="Tìm kiếm theo tên, chức vụ..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Filter className="h-4 w-4 text-gray-400" />
          </div>
          <select
            className="block w-full rounded-md border-gray-300 pl-10 pr-10 text-sm focus:border-primary focus:ring-primary md:w-64"
            value={department}
            onChange={handleDepartmentChange}
          >
            <option value="">Tất cả bộ môn</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
