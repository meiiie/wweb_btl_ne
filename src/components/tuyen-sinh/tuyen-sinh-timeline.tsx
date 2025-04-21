import { CalendarDays, CheckCircle2 } from "lucide-react"

export function TuyenSinhTimeline() {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-6">
          <CalendarDays className="w-6 h-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-gray-900">Lịch trình tuyển sinh 2023-2024</h2>
        </div>

        <div className="relative border-l-2 border-blue-200 pl-6 ml-3 space-y-8">
          <TimelineItem
            date="01/03/2023 - 30/04/2023"
            title="Đăng ký xét tuyển sớm"
            description="Thí sinh có thể đăng ký xét tuyển sớm theo phương thức xét học bạ hoặc các chứng chỉ quốc tế."
            status="completed"
          />

          <TimelineItem
            date="01/06/2023 - 30/06/2023"
            title="Đăng ký xét tuyển đợt 1"
            description="Thí sinh đăng ký xét tuyển theo kết quả thi THPT Quốc gia hoặc các phương thức khác."
            status="completed"
          />

          <TimelineItem
            date="15/07/2023 - 30/07/2023"
            title="Công bố kết quả đợt 1"
            description="Nhà trường công bố kết quả trúng tuyển đợt 1 và hướng dẫn thí sinh xác nhận nhập học."
            status="completed"
          />

          <TimelineItem
            date="01/08/2023 - 15/08/2023"
            title="Đăng ký xét tuyển đợt 2"
            description="Thí sinh đăng ký xét tuyển bổ sung nếu còn chỉ tiêu."
            status="current"
          />

          <TimelineItem
            date="20/08/2023 - 30/08/2023"
            title="Công bố kết quả đợt 2"
            description="Nhà trường công bố kết quả trúng tuyển đợt 2 và hướng dẫn thí sinh xác nhận nhập học."
            status="upcoming"
          />

          <TimelineItem
            date="05/09/2023 - 10/09/2023"
            title="Nhập học"
            description="Thí sinh trúng tuyển làm thủ tục nhập học tại trường."
            status="upcoming"
          />
        </div>
      </div>
    </div>
  )
}

interface TimelineItemProps {
  date: string
  title: string
  description: string
  status: "completed" | "current" | "upcoming"
}

function TimelineItem({ date, title, description, status }: TimelineItemProps) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-9 w-4 h-4 rounded-full border-2 ${
          status === "completed"
            ? "bg-blue-600 border-blue-600"
            : status === "current"
              ? "bg-white border-blue-600"
              : "bg-white border-gray-300"
        }`}
      ></div>

      <div className="mb-1 text-sm font-medium text-blue-600">{date}</div>
      <h3 className="text-lg font-semibold text-gray-900 flex items-center">
        {title}
        {status === "completed" && <CheckCircle2 className="w-4 h-4 text-green-500 ml-2" />}
      </h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  )
}
