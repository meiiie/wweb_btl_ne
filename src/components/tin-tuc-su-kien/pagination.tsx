import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  // Tạo mảng các trang để hiển thị
  const getPageNumbers = () => {
    const pages = []

    // Luôn hiển thị trang đầu
    pages.push(1)

    // Thêm dấu ... nếu trang hiện tại > 3
    if (currentPage > 3) {
      pages.push("...")
    }

    // Thêm trang trước trang hiện tại nếu > 1
    if (currentPage > 2) {
      pages.push(currentPage - 1)
    }

    // Thêm trang hiện tại nếu không phải trang đầu hoặc cuối
    if (currentPage !== 1 && currentPage !== totalPages) {
      pages.push(currentPage)
    }

    // Thêm trang sau trang hiện tại nếu < totalPages
    if (currentPage < totalPages - 1) {
      pages.push(currentPage + 1)
    }

    // Thêm dấu ... nếu trang hiện tại < totalPages - 2
    if (currentPage < totalPages - 2) {
      pages.push("...")
    }

    // Luôn hiển thị trang cuối nếu có nhiều hơn 1 trang
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav className="flex justify-center mt-8" aria-label="Phân trang">
      <ul className="flex items-center space-x-1">
        <li>
          <Link
            href={currentPage === 1 ? "#" : `${baseUrl}/trang/${currentPage - 1}`}
            className={`px-3 py-2 rounded-md border border-gray-300 ${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
            }`}
            aria-disabled={currentPage === 1}
            tabIndex={currentPage === 1 ? -1 : undefined}
          >
            <span className="sr-only">Trang trước</span>
            <ChevronLeft className="w-5 h-5" />
          </Link>
        </li>

        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="px-4 py-2 text-gray-500">...</span>
            ) : (
              <Link
                href={page === currentPage ? "#" : `${baseUrl}/trang/${page}`}
                className={`px-4 py-2 rounded-md ${
                  page === currentPage ? "bg-[#0056a6] text-white font-medium" : "text-gray-700 hover:bg-gray-50"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </Link>
            )}
          </li>
        ))}

        <li>
          <Link
            href={currentPage === totalPages ? "#" : `${baseUrl}/trang/${currentPage + 1}`}
            className={`px-3 py-2 rounded-md border border-gray-300 ${
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-500 hover:bg-gray-50"
            }`}
            aria-disabled={currentPage === totalPages}
            tabIndex={currentPage === totalPages ? -1 : undefined}
          >
            <span className="sr-only">Trang sau</span>
            <ChevronRight className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}
