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
 */
export function formatDate(date: Date | string): string {
  if (typeof date === "string") {
    date = new Date(date)
  }

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date)
}

/**
 * Rút gọn văn bản nếu quá dài
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}
