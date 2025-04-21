import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Kết hợp các class CSS với Tailwind CSS
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format ngày tháng theo định dạng Việt Nam
 * Trả về chuỗi rỗng nếu ngày không hợp lệ
 */
export function formatDate(date: Date | string | null | undefined): string {
  if (!date) return ""

  try {
    const dateObj = typeof date === "string" ? new Date(date) : date

    // Kiểm tra xem dateObj có phải là ngày hợp lệ không
    if (isNaN(dateObj.getTime())) {
      return ""
    }

    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(dateObj)
  } catch (error) {
    console.error("Lỗi khi định dạng ngày:", error)
    return ""
  }
}

/**
 * Rút gọn văn bản nếu quá dài
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
