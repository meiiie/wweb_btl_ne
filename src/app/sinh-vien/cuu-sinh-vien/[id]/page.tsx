import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, MapPin, Calendar, Mail, Phone, Globe, Linkedin, Facebook, Twitter } from "lucide-react"

export default function AlumniDetailPage({ params }: { params: { id: string } }) {
  // Dữ liệu mẫu cho cựu sinh viên
  const alumniData = {
    id: params.id,
    name: "Nguyễn Văn A",
    avatar: "/placeholder.svg?height=300&width=300",
    position: "Giám đốc Công nghệ",
    company: "FPT Software",
    location: "Hà Nội, Việt Nam",
    graduationYear: 2010,
    email: "nguyenvana@example.com",
    phone: "+84 123 456 789",
    website: "https://example.com",
    linkedin: "https://linkedin.com/in/nguyenvana",
    facebook: "https://facebook.com/nguyenvana",
    twitter: "https://twitter.com/nguyenvana",
    bio: "Nguyễn Văn A tốt nghiệp Khoa CNTT - ĐH Hàng hải Việt Nam năm 2010. Sau khi tốt nghiệp, anh làm việc tại FPT Software và hiện đang giữ vị trí Giám đốc Công nghệ. Anh có hơn 10 năm kinh nghiệm trong lĩnh vực phát triển phần mềm, quản lý dự án và lãnh đạo đội ngũ kỹ thuật.",
    education: [
      {
        degree: "Kỹ sư Công nghệ Thông tin",
        school: "Đại học Hàng hải Việt Nam",
        year: "2006 - 2010",
      },
      {
        degree: "Thạc sĩ Khoa học Máy tính",
        school: "Đại học Bách Khoa Hà Nội",
        year: "2012 - 2014",
      },
    ],
    experience: [
      {
        position: "Giám đốc Công nghệ",
        company: "FPT Software",
        year: "2018 - Hiện tại",
        description:
          "Lãnh đạo đội ngũ phát triển sản phẩm với hơn 100 kỹ sư. Xây dựng chiến lược công nghệ và triển khai các dự án chuyển đổi số cho nhiều tập đoàn lớn.",
      },
      {
        position: "Trưởng phòng Phát triển Phần mềm",
        company: "FPT Software",
        year: "2015 - 2018",
        description:
          "Quản lý đội ngũ phát triển phần mềm với 30 kỹ sư. Triển khai các dự án phần mềm cho khách hàng trong và ngoài nước.",
      },
      {
        position: "Kỹ sư Phần mềm",
        company: "FPT Software",
        year: "2010 - 2015",
        description:
          "Phát triển các ứng dụng web và mobile cho khách hàng. Tham gia các dự án outsourcing cho khách hàng Nhật Bản và Mỹ.",
      },
    ],
    achievements: [
      "Lãnh đạo đội ngũ phát triển sản phẩm với hơn 100 kỹ sư",
      "Triển khai thành công hệ thống chuyển đổi số cho nhiều tập đoàn lớn",
      "Đóng góp vào nhiều dự án nguồn mở",
      "Diễn giả tại nhiều hội thảo công nghệ trong và ngoài nước",
      "Mentor cho nhiều sinh viên và kỹ sư trẻ",
    ],
    skills: [
      "Quản lý dự án",
      "Phát triển phần mềm",
      "Kiến trúc hệ thống",
      "Cloud Computing",
      "DevOps",
      "Trí tuệ nhân tạo",
      "Big Data",
    ],
    quote:
      "Thời gian học tập tại Khoa CNTT - ĐH Hàng hải Việt Nam đã giúp tôi xây dựng nền tảng kiến thức vững chắc và tư duy giải quyết vấn đề hiệu quả.",
  }

  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Cựu sinh viên"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Cựu sinh viên tiêu biểu</h1>
            <div className="flex items-center text-white/90">
              <Link href="/sinh-vien" className="hover:underline">
                Sinh viên
              </Link>
              <span className="mx-2">/</span>
              <Link href="/sinh-vien/cuu-sinh-vien" className="hover:underline">
                Cựu sinh viên
              </Link>
              <span className="mx-2">/</span>
              <span>{alumniData.name}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin cá nhân */}
        <div className="md:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center mb-6">
                <Image
                  src={alumniData.avatar || "/placeholder.svg"}
                  alt={alumniData.name}
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h2 className="text-2xl font-bold text-gray-800">{alumniData.name}</h2>
                <p className="text-primary font-medium">{alumniData.position}</p>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Building className="h-4 w-4 mr-1" />
                  <span>{alumniData.company}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{alumniData.location}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Tốt nghiệp: {alumniData.graduationYear}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <a href={`mailto:${alumniData.email}`} className="text-gray-600 hover:text-primary">
                    {alumniData.email}
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <a href={`tel:${alumniData.phone}`} className="text-gray-600 hover:text-primary">
                    {alumniData.phone}
                  </a>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-primary mr-3" />
                  <a
                    href={alumniData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary"
                  >
                    {alumniData.website.replace("https://", "")}
                  </a>
                </div>
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <a
                  href={alumniData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-gray-700" />
                </a>
                <a
                  href={alumniData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-gray-700" />
                </a>
                <a
                  href={alumniData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  <Twitter className="h-5 w-5 text-gray-700" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Thông tin chi tiết */}
        <div className="md:col-span-2 space-y-6">
          {/* Giới thiệu */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Giới thiệu</h2>
              <p className="text-gray-600">{alumniData.bio}</p>
              <div className="mt-4 p-4 bg-primary/5 border-l-4 border-primary rounded-r-md">
                <p className="text-gray-700 italic">"{alumniData.quote}"</p>
              </div>
            </CardContent>
          </Card>

          {/* Học vấn */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Học vấn</h2>
              <div className="space-y-4">
                {alumniData.education.map((edu, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.school}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Kinh nghiệm làm việc */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kinh nghiệm làm việc</h2>
              <div className="space-y-6">
                {alumniData.experience.map((exp, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1.5"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{exp.position}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mb-2">{exp.year}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Thành tựu */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Thành tựu</h2>
              <ul className="space-y-2">
                {alumniData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Kỹ năng */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Kỹ năng</h2>
              <div className="flex flex-wrap gap-2">
                {alumniData.skills.map((skill, index) => (
                  <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Liên hệ */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Liên hệ</h2>
              <p className="text-gray-600 mb-4">
                Bạn có thể liên hệ với {alumniData.name} qua các phương thức bên dưới hoặc gửi tin nhắn trực tiếp.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Họ và tên"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Tiêu đề"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent md:col-span-2"
                />
                <textarea
                  placeholder="Nội dung tin nhắn"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent md:col-span-2"
                ></textarea>
              </div>
              <Button className="mt-4">Gửi tin nhắn</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
