"use client"

import { useState } from "react"
import { Star, ThumbsUp, MessageCircle, Flag } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface Review {
  id: string
  studentName: string
  studentAvatar: string
  rating: number
  date: string
  comment: string
  likes: number
  semester: string
  isVerified?: boolean
}

interface CourseReviewsProps {
  reviews: Review[]
  averageRating: number
  totalReviews: number
}

export function CourseReviews({ reviews, averageRating, totalReviews }: CourseReviewsProps) {
  const [expandedReview, setExpandedReview] = useState<string | null>(null)

  const toggleReview = (id: string) => {
    setExpandedReview(expandedReview === id ? null : id)
  }

  // Tạo mảng sao dựa trên rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn("h-4 w-4", index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300")}
      />
    ))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-primary mb-6">Đánh giá từ sinh viên</h2>

      {/* Tổng quan đánh giá */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-center mr-6">
            <div className="text-3xl font-bold text-gray-800">{averageRating.toFixed(1)}</div>
            <div className="flex mt-1">{renderStars(Math.round(averageRating))}</div>
            <div className="text-sm text-gray-500 mt-1">{totalReviews} đánh giá</div>
          </div>

          <div className="hidden md:block h-16 w-px bg-gray-300 mx-4"></div>

          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((star) => {
              // Tính số lượng đánh giá cho mỗi mức sao
              const count = reviews.filter((review) => Math.round(review.rating) === star).length
              // Tính phần trăm
              const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0

              return (
                <div key={star} className="flex items-center">
                  <div className="flex items-center w-12">
                    <span className="text-xs text-gray-600">{star}</span>
                    <Star className="h-3 w-3 text-yellow-400 fill-yellow-400 ml-1" />
                  </div>
                  <div className="w-48 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <span className="text-xs text-gray-500 w-8">{percentage}%</span>
                </div>
              )
            })}
          </div>
        </div>

        <button className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-md transition-colors">
          Viết đánh giá
        </button>
      </div>

      {/* Danh sách đánh giá */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500 italic text-center py-4">Chưa có đánh giá nào cho môn học này.</p>
        ) : (
          reviews.map((review) => (
            <div key={review.id} className="border rounded-lg p-4">
              <div className="flex items-start">
                <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={review.studentAvatar || "/placeholder.svg"}
                    alt={review.studentName}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="font-medium text-gray-800">{review.studentName}</h4>
                    {review.isVerified && (
                      <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
                        Đã xác minh
                      </span>
                    )}
                  </div>

                  <div className="flex items-center mt-1">
                    <div className="flex mr-2">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{review.semester}</span>
                  </div>

                  <div
                    className={cn(
                      "mt-2 text-gray-600",
                      review.comment.length > 150 && expandedReview !== review.id ? "line-clamp-3" : "",
                    )}
                  >
                    {review.comment}
                  </div>

                  {review.comment.length > 150 && (
                    <button
                      onClick={() => toggleReview(review.id)}
                      className="text-primary hover:text-primary-dark text-sm mt-1"
                    >
                      {expandedReview === review.id ? "Thu gọn" : "Xem thêm"}
                    </button>
                  )}

                  <div className="flex items-center mt-3 space-x-4">
                    <button className="flex items-center text-gray-500 hover:text-primary text-sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Hữu ích ({review.likes})</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-primary text-sm">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      <span>Bình luận</span>
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-primary text-sm">
                      <Flag className="h-4 w-4 mr-1" />
                      <span>Báo cáo</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
