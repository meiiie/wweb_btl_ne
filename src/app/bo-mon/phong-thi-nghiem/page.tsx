import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getAllLabs } from "@/services/department-service"
import { MapPin, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Phòng thí nghiệm | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Danh sách các phòng thí nghiệm thuộc Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
}

export default function LabsPage() {
  // Giả sử getAllLabs() trả về danh sách các phòng thí nghiệm với ảnh thực tế
  // Trong thực tế, bạn sẽ cần cập nhật service này để trả về đường dẫn ảnh thực tế
  const labs = getAllLabs()

  return (
    <div className="space-y-8">
      {/* Tiêu đề trang */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary md:text-4xl">Phòng thí nghiệm</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Khoa Công nghệ Thông tin có các phòng thí nghiệm hiện đại phục vụ cho công tác đào tạo và nghiên cứu khoa học.
        </p>
      </div>

      {/* Danh sách phòng thí nghiệm */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {labs.map((lab) => (
          <Card key={lab.id} className="overflow-hidden transition-all duration-300 hover:shadow-md">
            <div className="relative h-40 w-full">
              <Image
                src={lab.image || "/images/labs/default-lab.jpg"}
                alt={lab.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-xl font-bold">{lab.name}</h2>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="mb-3 space-y-1 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{lab.location}</span>
                </div>

                {lab.manager && (
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-primary" />
                    <span>Quản lý: {lab.manager}</span>
                  </div>
                )}
              </div>

              <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{lab.description}</p>

              <Link
                href={lab.link}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
              >
                Xem chi tiết
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
