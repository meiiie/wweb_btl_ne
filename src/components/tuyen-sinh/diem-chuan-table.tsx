"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react"

// Dữ liệu mẫu điểm chuẩn
const diemChuanData = [
  {
    nam: 2022,
    nganh: "Công nghệ thông tin",
    maNganh: "7480201",
    diemChuan: 23.5,
    chiTieu: 120,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2022,
    nganh: "Công nghệ phần mềm",
    maNganh: "7480103",
    diemChuan: 24.2,
    chiTieu: 80,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2022,
    nganh: "Hệ thống thông tin",
    maNganh: "7480104",
    diemChuan: 22.8,
    chiTieu: 60,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2022,
    nganh: "Kỹ thuật máy tính",
    maNganh: "7480106",
    diemChuan: 22.5,
    chiTieu: 40,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2021,
    nganh: "Công nghệ thông tin",
    maNganh: "7480201",
    diemChuan: 22.75,
    chiTieu: 100,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2021,
    nganh: "Công nghệ phần mềm",
    maNganh: "7480103",
    diemChuan: 23.5,
    chiTieu: 70,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2021,
    nganh: "Hệ thống thông tin",
    maNganh: "7480104",
    diemChuan: 22.0,
    chiTieu: 50,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2021,
    nganh: "Kỹ thuật máy tính",
    maNganh: "7480106",
    diemChuan: 21.8,
    chiTieu: 30,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2020,
    nganh: "Công nghệ thông tin",
    maNganh: "7480201",
    diemChuan: 21.5,
    chiTieu: 90,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2020,
    nganh: "Công nghệ phần mềm",
    maNganh: "7480103",
    diemChuan: 22.25,
    chiTieu: 60,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2020,
    nganh: "Hệ thống thông tin",
    maNganh: "7480104",
    diemChuan: 21.0,
    chiTieu: 40,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
  {
    nam: 2020,
    nganh: "Kỹ thuật máy tính",
    maNganh: "7480106",
    diemChuan: 20.5,
    chiTieu: 30,
    ghiChu: "Phương thức xét điểm thi THPT",
  },
]

type SortField = "nam" | "nganh" | "diemChuan" | "chiTieu"
type SortDirection = "asc" | "desc"

export function DiemChuanTable() {
  const [sortField, setSortField] = useState<SortField>("nam")
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const sortedData = [...diemChuanData].sort((a, b) => {
    if (sortDirection === "asc") {
      return a[sortField] > b[sortField] ? 1 : -1
    } else {
      return a[sortField] < b[sortField] ? 1 : -1
    }
  })

  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Điểm chuẩn các năm</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-50">
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  <button className="flex items-center focus:outline-none" onClick={() => handleSort("nam")}>
                    Năm
                    {sortField === "nam" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 ml-1" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 ml-1 text-gray-400" />
                    )}
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  <button className="flex items-center focus:outline-none" onClick={() => handleSort("nganh")}>
                    Ngành
                    {sortField === "nganh" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 ml-1" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 ml-1 text-gray-400" />
                    )}
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Mã ngành</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  <button className="flex items-center focus:outline-none" onClick={() => handleSort("diemChuan")}>
                    Điểm chuẩn
                    {sortField === "diemChuan" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 ml-1" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 ml-1 text-gray-400" />
                    )}
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                  <button className="flex items-center focus:outline-none" onClick={() => handleSort("chiTieu")}>
                    Chỉ tiêu
                    {sortField === "chiTieu" ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ArrowDown className="w-4 h-4 ml-1" />
                      )
                    ) : (
                      <ArrowUpDown className="w-4 h-4 ml-1 text-gray-400" />
                    )}
                  </button>
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((item, index) => (
                <tr key={`${item.nam}-${item.maNganh}`} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b">{item.nam}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b font-medium">{item.nganh}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b">{item.maNganh}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b font-medium">{item.diemChuan}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-b">{item.chiTieu}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 border-b">{item.ghiChu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
