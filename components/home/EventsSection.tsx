import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { EventCard } from "./event-card"

// Dữ liệu mẫu cho sự kiện sắp tới
const upcomingEvents = [
  {
    id: 1,
    title: "Hội thảo: Xu hướng công nghệ AI trong năm 2023",
    date: "25/10/2023",
    time: "14:00 - 17:00",
    location: "Hội trường A1, Trường ĐH Hàng hải Việt Nam",
    link: "/su-kien/hoi-thao-ai-2023",
  },
  {
    id: 2,
    title: "Workshop: Phát triển ứng dụng Web với React và Node.js",
    date: "10/11/2023",
    time: "08:30 - 16:30",
    location: "Phòng Lab 305, Nhà A1",
    link: "/su-kien/workshop-react-nodejs",
  },
  {
    id: 3,
    title: "Ngày hội việc làm CNTT 2023",
    date: "15/12/2023",
    time: "08:00 - 17:00",
    location: "Sân trường ĐH Hàng hải Việt Nam",
    link: "/su-kien/ngay-hoi-viec-lam-2023",
  },
  {
    id: 4,
    title: "Cuộc thi lập trình sinh viên VMU Hackathon 2023",
    date: "20/12/2023",
    time: "07:30 - 17:30",
    location: "Khu vực thực hành, Nhà A1",
    link: "/su-kien/vmu-hackathon-2023",
  },
]

export default function EventsSection() {
  return (
    <Section variant="muted">
      <Container>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-primary">Sự kiện sắp diễn ra</h2>
          <Link
            href="/tin-tuc-su-kien/su-kien"
            className="text-primary hover:text-primary-light font-medium flex items-center"
          >
            Xem tất cả
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
