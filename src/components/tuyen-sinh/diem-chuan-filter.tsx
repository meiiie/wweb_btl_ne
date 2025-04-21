"use client"

import { useState } from "react"
import { Search } from "lucide-react"

export function DiemChuanFilter() {
  const [selectedYear, setSelectedYear] = useState<string>("all")
  const [selectedMajor, setSelectedMajor] = useState<string>("all")

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden mb-6">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Bộ lọc tìm kiếm</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
              Năm
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tất cả các năm</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>

          <div>
            <label htmlFor="major" className="block text-sm font-medium text-gray-700 mb-1">
              Ngành
            </label>
            <select
              id="major"
              value={selectedMajor}
              onChange={(e) => setSelectedMajor(e.target.value)}
              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">Tất cả các ngành</option>
              <option value="cntt">Công nghệ thông tin</option>
              <option value="cnpm">Công nghệ phần mềm</option>
              <option value="httt">Hệ thống thông tin</option>
              <option value="ktmt">Kỹ thuật máy tính</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              type="button"
              className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <Search className="w-4 h-4 mr-2" />
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
