import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

export default function ActivitiesPage() {
  // Dữ liệu mẫu cho các hoạt động ngoại khóa
  const activities = [
    {
      id: 1,
      title: "Cuộc thi Lập trình sinh viên VMU 2023",
      type: "Cuộc thi",
      date: "20/12/2023",
      time: "08:00 - 17:00",
      location: "Hội trường A1, Trường ĐH Hàng hải Việt Nam",
      organizer: "Khoa CNTT, Đoàn Thanh niên",
      description:
        "Cuộc thi Lập trình sinh viên VMU 2023 là sân chơi bổ ích dành cho sinh viên đam mê lập trình. Cuộc thi nhằm tìm kiếm, phát hiện những tài năng trong lĩnh vực lập trình, tạo môi trường để sinh viên giao lưu, học hỏi và phát triển kỹ năng lập trình.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/cuoc-thi-lap-trinh-vmu-2023",
    },
    {
      id: 2,
      title: "Workshop: Trí tuệ nhân tạo và ứng dụng trong cuộc sống",
      type: "Workshop",
      date: "25/12/2023",
      time: "14:00 - 17:00",
      location: "Phòng A5-301, Trường ĐH Hàng hải Việt Nam",
      organizer: "CLB Tin học, Khoa CNTT",
      description:
        "Workshop về Trí tuệ nhân tạo và ứng dụng trong cuộc sống sẽ giúp sinh viên hiểu rõ hơn về AI, các ứng dụng của AI trong cuộc sống hiện đại và tương lai. Workshop có sự tham gia của các chuyên gia đầu ngành về AI.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/workshop-tri-tue-nhan-tao",
    },
    {
      id: 3,
      title: "Ngày hội Công nghệ VMU Tech Day 2023",
      type: "Sự kiện",
      date: "10/01/2024",
      time: "08:00 - 17:00",
      location: "Sân trường, Trường ĐH Hàng hải Việt Nam",
      organizer: "Khoa CNTT, Đoàn Thanh niên",
      description:
        "Ngày hội Công nghệ VMU Tech Day 2023 là sự kiện thường niên của Khoa CNTT, nơi trưng bày, giới thiệu các sản phẩm, dự án công nghệ của sinh viên, các doanh nghiệp công nghệ. Đây là cơ hội để sinh viên giao lưu, học hỏi và tìm kiếm cơ hội việc làm, thực tập.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/vmu-tech-day-2023",
    },
    {
      id: 4,
      title: "Hội thảo: Xu hướng công nghệ 2024",
      type: "Hội thảo",
      date: "15/01/2024",
      time: "14:00 - 17:00",
      location: "Hội trường A1, Trường ĐH Hàng hải Việt Nam",
      organizer: "Khoa CNTT, FPT Software",
      description:
        "Hội thảo Xu hướng công nghệ 2024 với sự tham gia của các chuyên gia từ FPT Software sẽ giúp sinh viên cập nhật những xu hướng công nghệ mới nhất, những kỹ năng cần thiết để đáp ứng nhu cầu của thị trường lao động trong tương lai.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/hoi-thao-xu-huong-cong-nghe-2024",
    },
    {
      id: 5,
      title: "Khóa học: Phát triển ứng dụng di động với React Native",
      type: "Khóa học",
      date: "20/01/2024 - 20/02/2024",
      time: "19:00 - 21:00 (Thứ 3, 5, 7)",
      location: "Phòng A5-301, Trường ĐH Hàng hải Việt Nam",
      organizer: "CLB Tin học, Khoa CNTT",
      description:
        "Khóa học Phát triển ứng dụng di động với React Native dành cho sinh viên có nền tảng về JavaScript. Khóa học sẽ giúp sinh viên nắm vững kiến thức và kỹ năng để phát triển ứng dụng di động đa nền tảng với React Native.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/khoa-hoc-react-native",
    },
    {
      id: 6,
      title: "Giao lưu với cựu sinh viên: Hành trang vào đời",
      type: "Giao lưu",
      date: "25/01/2024",
      time: "14:00 - 17:00",
      location: "Hội trường A1, Trường ĐH Hàng hải Việt Nam",
      organizer: "Khoa CNTT, Hội Cựu sinh viên",
      description:
        "Chương trình giao lưu với cựu sinh viên với chủ đề 'Hành trang vào đời' sẽ giúp sinh viên hiểu rõ hơn về môi trường làm việc thực tế, những kỹ năng cần thiết để thành công trong sự nghiệp. Chương trình có sự tham gia của các cựu sinh viên thành đạt trong nhiều lĩnh vực.",
      image: "/placeholder.svg?height=200&width=400",
      link: "/sinh-vien/hoat-dong/giao-luu-cuu-sinh-vien",
    },
  ]

  // Dữ liệu mẫu cho các câu lạc bộ
  const clubs = [
    {
      id: 1,
      name: "CLB Tin học",
      members: 120,
      description: "Câu lạc bộ dành cho sinh viên đam mê công nghệ thông tin, lập trình và phát triển phần mềm.",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/hoat-dong/clb-tin-hoc",
    },
    {
      id: 2,
      name: "CLB Robotics",
      members: 80,
      description: "Câu lạc bộ dành cho sinh viên đam mê robot, IoT và các ứng dụng công nghệ trong cuộc sống.",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/hoat-dong/clb-robotics",
    },
    {
      id: 3,
      name: "CLB Tiếng Anh CNTT",
      members: 100,
      description: "Câu lạc bộ giúp sinh viên CNTT nâng cao kỹ năng tiếng Anh chuyên ngành và giao tiếp.",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/hoat-dong/clb-tieng-anh-cntt",
    },
    {
      id: 4,
      name: "CLB Kỹ năng mềm",
      members: 90,
      description: "Câu lạc bộ giúp sinh viên phát triển các kỹ năng mềm cần thiết cho công việc và cuộc sống.",
      image: "/placeholder.svg?height=100&width=100",
      link: "/sinh-vien/hoat-dong/clb-ky-nang-mem",
    },
  ]

  // Dữ liệu mẫu cho các loại hoạt động
  const activityTypes = [
    { id: 1, name: "Tất cả", count: 15 },
    { id: 2, name: "Cuộc thi", count: 4 },
    { id: 3, name: "Workshop", count: 3 },
    { id: 4, name: "Hội thảo", count: 3 },
    { id: 5, name: "Khóa học", count: 2 },
    { id: 6, name: "Giao lưu", count: 2 },
    { id: 7, name: "Sự kiện", count: 1 },
  ]

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Hoạt động ngoại khóa"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Hoạt động ngoại khóa</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin về các hoạt động ngoại khóa, sự kiện, câu lạc bộ và cơ hội phát triển kỹ năng dành cho sinh viên
              Khoa Công nghệ Thông tin.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-primary border-b pb-2">Loại hoạt động</h2>
              <ul className="space-y-2">
                {activityTypes.map((type) => (
                  <li key={type.id}>
                    <Link
                      href={`/sinh-vien/hoat-dong/loai/${type.name.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex justify-between items-center py-2 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <span>{type.name}</span>
                      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded-full">
                        {type.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mt-8 mb-4 text-primary border-b pb-2">Câu lạc bộ sinh viên</h2>
              <div className="space-y-4">
                {clubs.map((club) => (
                  <Link
                    key={club.id}
                    href={club.link}
                    className="flex items-start p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0 mr-3">
                      <Image
                        src={club.image || "/placeholder.svg"}
                        alt={club.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">{club.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 mb-1">
                        <Users className="h-3 w-3 mr-1" />
                        <span>{club.members} thành viên</span>
                      </div>
                      <p className="text-sm text-gray-600">{club.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Button className="w-full mt-4" variant="outline" asChild>
                <Link href="/sinh-vien/hoat-dong/cau-lac-bo">Xem tất cả câu lạc bộ</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Danh sách hoạt động */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={activity.image || "/placeholder.svg"}
                        alt={activity.title}
                        width={400}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">
                          {activity.type}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {activity.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                        <Link href={activity.link}>{activity.title}</Link>
                      </h3>
                      <div className="flex flex-col space-y-1 text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 text-primary mr-2" />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 text-primary mr-2" />
                          <span>{activity.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 text-primary mr-2" />
                          <span>{activity.organizer}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4 line-clamp-2">{activity.description}</p>
                      <Link
                        href={activity.link}
                        className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
                      >
                        Xem chi tiết
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Phân trang */}
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-1">
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </a>
              <a href="#" className="px-4 py-2 rounded-md bg-primary text-white font-medium">
                1
              </a>
              <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="px-4 py-2 rounded-md text-gray-700 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="px-3 py-2 rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50">
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}
