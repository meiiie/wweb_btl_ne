"use client"

import { useState, useEffect } from "react"
import { Search, Filter, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FilterOption {
  id: string
  label: string
}

interface CourseFilterProps {
  programs: FilterOption[]
  departments: FilterOption[]
  semesters: FilterOption[]
  credits: FilterOption[]
  onFilterChange: (filters: any) => void
}

export function CourseFilter({ programs, departments, semesters, credits, onFilterChange }: CourseFilterProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProgram, setSelectedProgram] = useState<string>("")
  const [selectedDepartment, setSelectedDepartment] = useState<string>("")
  const [selectedSemester, setSelectedSemester] = useState<string>("")
  const [selectedCredits, setSelectedCredits] = useState<string>("")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  // Theo dõi thay đổi của các bộ lọc và gọi hàm callback
  useEffect(() => {
    onFilterChange({
      searchTerm,
      program: selectedProgram,
      department: selectedDepartment,
      semester: selectedSemester,
      credits: selectedCredits,
    })
  }, [searchTerm, selectedProgram, selectedDepartment, selectedSemester, selectedCredits, onFilterChange])

  // Xóa tất cả bộ lọc
  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedProgram("")
    setSelectedDepartment("")
    setSelectedSemester("")
    setSelectedCredits("")
  }

  // Đếm số lượng bộ lọc đang được áp dụng
  const activeFiltersCount = [selectedProgram, selectedDepartment, selectedSemester, selectedCredits].filter(
    Boolean,
  ).length

  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <div className="p-4 md:p-6">
        {/* Thanh tìm kiếm */}
        <div className="relative mb-4">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-primary focus:border-primary sm:text-sm"
            placeholder="Tìm kiếm môn học..."
            aria-label="Tìm kiếm môn học"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              aria-label="Xóa tìm kiếm"
            >
              <X className="h-4 w-4 text-gray-400 hover:text-gray-500" />
            </button>
          )}
        </div>

        {/* Nút hiển thị bộ lọc trên mobile */}
        <div className="md:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-between w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <div className="flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              <span>Bộ lọc {activeFiltersCount > 0 && `(${activeFiltersCount})`}</span>
            </div>
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", showMobileFilters ? "transform rotate-180" : "")}
            />
          </button>
        </div>

        {/* Bộ lọc */}
        <div className={cn("grid gap-4", showMobileFilters ? "grid-cols-1" : "hidden md:grid md:grid-cols-4")}>
          {/* Chương trình đào tạo */}
          <div>
            <label htmlFor="program-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Chương trình đào tạo
            </label>
            <select
              id="program-filter"
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="">Tất cả chương trình</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bộ môn */}
          <div>
            <label htmlFor="department-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Bộ môn
            </label>
            <select
              id="department-filter"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="">Tất cả bộ môn</option>
              {departments.map((department) => (
                <option key={department.id} value={department.id}>
                  {department.label}
                </option>
              ))}
            </select>
          </div>

          {/* Học kỳ */}
          <div>
            <label htmlFor="semester-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Học kỳ
            </label>
            <select
              id="semester-filter"
              value={selectedSemester}
              onChange={(e) => setSelectedSemester(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="">Tất cả học kỳ</option>
              {semesters.map((semester) => (
                <option key={semester.id} value={semester.id}>
                  {semester.label}
                </option>
              ))}
            </select>
          </div>

          {/* Số tín chỉ */}
          <div>
            <label htmlFor="credits-filter" className="block text-sm font-medium text-gray-700 mb-1">
              Số tín chỉ
            </label>
            <select
              id="credits-filter"
              value={selectedCredits}
              onChange={(e) => setSelectedCredits(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="">Tất cả</option>
              {credits.map((credit) => (
                <option key={credit.id} value={credit.id}>
                  {credit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Hiển thị bộ lọc đang áp dụng và nút xóa */}
        {activeFiltersCount > 0 && (
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">
              <span className="font-medium">{activeFiltersCount}</span> bộ lọc đang được áp dụng
            </div>
            <button onClick={clearAllFilters} className="text-sm text-primary hover:text-primary-dark font-medium">
              Xóa tất cả
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
