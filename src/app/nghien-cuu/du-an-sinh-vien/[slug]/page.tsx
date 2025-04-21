import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// Thêm generateMetadata để tạo metadata động dựa trên slug
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Trong thực tế, bạn sẽ fetch dữ liệu dựa trên slug
  // Ở đây chúng ta giả định dữ liệu từ studentProject

  return {
    title: `${studentProject.title} | Dự án sinh viên | Khoa CNTT`,
    description: studentProject.description,
    keywords: `${studentProject.title}, ${studentProject.field}, ${studentProject.students.join(", ")}, ${studentProject.supervisor}, dự án sinh viên, nghiên cứu khoa học sinh viên, Đại học Hàng hải Việt Nam`,
    openGraph: {
      title: studentProject.title,
      description: studentProject.description,
      type: "article",
      publishedTime: `${studentProject.year}-01-01`,
      authors: studentProject.students,
      tags: [studentProject.field, "dự án sinh viên", "nghiên cứu khoa học"],
    },
  }
}

// Dữ liệu mẫu cho dự án nghiên cứu sinh viên
const studentProject = {
  id: 1,
  title: "Hệ thống nhận diện khuôn mặt ứng dụng trong điểm danh sinh viên",
  students: [
    {
      name: "Nguyễn Văn X",
      studentId: "SV123456",
      email: "nguyenvanx@st.vimaru.edu.vn",
      phone: "0987654321",
      role: "Trưởng nhóm - Phát triển thuật toán nhận diện khuôn mặt",
    },
    {
      name: "Trần Thị Y",
      studentId: "SV123457",
      email: "tranthiy@st.vimaru.edu.vn",
      phone: "0987654322",
      role: "Thành viên - Phát triển giao diện người dùng và cơ sở dữ liệu",
    },
  ],
  supervisor: {
    name: "TS. Lê Văn C",
    position: "Giảng viên Bộ môn Khoa học máy tính",
    email: "levanc@vimaru.edu.vn",
    phone: "(0225) 3829 xxx",
  },
  year: 2023,
  field: "Trí tuệ nhân tạo",
  duration: "01/2023 - 05/2023",
  status: "Đã hoàn thành",
  description:
    "Dự án nghiên cứu và phát triển hệ thống nhận diện khuôn mặt sử dụng deep learning để tự động điểm danh sinh viên trong lớp học. Hệ thống có khả năng nhận diện khuôn mặt với độ chính xác cao, ngay cả trong điều kiện ánh sáng khác nhau và góc nhìn khác nhau.",
  fullDescription: `
    Hệ thống nhận diện khuôn mặt ứng dụng trong điểm danh sinh viên là một giải pháp hiện đại nhằm tự động hóa quá trình điểm danh trong lớp học, giúp tiết kiệm thời gian và nâng cao hiệu quả quản lý lớp học. Hệ thống sử dụng các kỹ thuật xử lý ảnh và deep learning để nhận diện khuôn mặt sinh viên và tự động ghi nhận sự hiện diện của họ trong lớp học.
    
    Hệ thống bao gồm hai phần chính: phần cứng (camera và máy tính) và phần mềm (thuật toán nhận diện khuôn mặt và ứng dụng quản lý). Camera được lắp đặt tại lớp học để thu thập hình ảnh, sau đó hình ảnh được xử lý bởi thuật toán nhận diện khuôn mặt để xác định sinh viên có mặt trong lớp. Kết quả điểm danh được lưu trữ trong cơ sở dữ liệu và có thể được truy xuất thông qua ứng dụng quản lý.
    
    Dự án đã được triển khai thử nghiệm tại một số lớp học của Khoa Công nghệ Thông tin và đã nhận được phản hồi tích cực từ giảng viên và sinh viên. Hệ thống đã chứng minh được hiệu quả trong việc tiết kiệm thời gian điểm danh và nâng cao tính chính xác của quá trình điểm danh.
  `,
  objectives: [
    "Nghiên cứu và phát triển thuật toán nhận diện khuôn mặt có độ chính xác cao, phù hợp với điều kiện lớp học",
    "Xây dựng hệ thống điểm danh tự động sử dụng nhận diện khuôn mặt",
    "Phát triển giao diện người dùng thân thiện cho giảng viên và sinh viên",
    "Đánh giá hiệu quả của hệ thống trong môi trường thực tế",
  ],
  methodology: [
    {
      name: "Thu thập dữ liệu",
      description:
        "Thu thập hình ảnh khuôn mặt của sinh viên trong các điều kiện ánh sáng và góc nhìn khác nhau để tạo bộ dữ liệu huấn luyện.",
    },
    {
      name: "Tiền xử lý dữ liệu",
      description:
        "Chuẩn hóa hình ảnh, phát hiện và cắt khuôn mặt, tăng cường dữ liệu để nâng cao hiệu suất của mô hình.",
    },
    {
      name: "Phát triển mô hình",
      description:
        "Sử dụng mạng nơ-ron tích chập (CNN) và các kỹ thuật deep learning để xây dựng mô hình nhận diện khuôn mặt.",
    },
    {
      name: "Huấn luyện và đánh giá",
      description:
        "Huấn luyện mô hình trên bộ dữ liệu đã thu thập và đánh giá hiệu suất của mô hình trên bộ dữ liệu kiểm tra.",
    },
    {
      name: "Tích hợp hệ thống",
      description:
        "Tích hợp mô hình nhận diện khuôn mặt với hệ thống camera và ứng dụng quản lý để tạo thành hệ thống điểm danh hoàn chỉnh.",
    },
    {
      name: "Triển khai và đánh giá",
      description:
        "Triển khai hệ thống trong môi trường thực tế và đánh giá hiệu quả của hệ thống dựa trên phản hồi từ người dùng.",
    },
  ],
  results: [
    "Đã phát triển thành công mô hình nhận diện khuôn mặt với độ chính xác trên 95% trong các điều kiện ánh sáng và góc nhìn khác nhau",
    "Đã xây dựng hệ thống điểm danh tự động có khả năng xử lý 30 sinh viên trong vòng 1 phút",
    "Đã phát triển giao diện người dùng thân thiện cho giảng viên và sinh viên, hỗ trợ các chức năng như xem lịch sử điểm danh, xuất báo cáo, và thông báo vắng mặt",
    "Hệ thống đã được triển khai thử nghiệm tại 3 lớp học và nhận được phản hồi tích cực từ 90% người dùng",
  ],
  technologies: [
    {
      name: "Python",
      description: "Ngôn ngữ lập trình chính được sử dụng để phát triển thuật toán nhận diện khuôn mặt",
    },
    {
      name: "TensorFlow và Keras",
      description: "Framework deep learning được sử dụng để xây dựng và huấn luyện mô hình nhận diện khuôn mặt",
    },
    {
      name: "OpenCV",
      description: "Thư viện xử lý ảnh được sử dụng để tiền xử lý hình ảnh và phát hiện khuôn mặt",
    },
    {
      name: "Flask",
      description: "Framework web được sử dụng để phát triển API cho hệ thống",
    },
    {
      name: "React",
      description: "Thư viện JavaScript được sử dụng để phát triển giao diện người dùng",
    },
    {
      name: "MongoDB",
      description: "Cơ sở dữ liệu NoSQL được sử dụng để lưu trữ dữ liệu sinh viên và kết quả điểm danh",
    },
  ],
  awards: [
    "Giải Nhất cuộc thi NCKH sinh viên cấp Trường năm 2023",
    "Đề cử tham gia cuộc thi NCKH sinh viên cấp Thành phố năm 2023",
  ],
  publications: [
    {
      title: "Face Recognition for Automated Student Attendance System: A Case Study at Vietnam Maritime University",
      authors: "Nguyễn Văn X, Trần Thị Y, Lê Văn C",
      conference: "International Conference on Computer Vision and Pattern Recognition for Students",
      year: 2023,
      link: "/nghien-cuu/cong-bo-khoa-hoc/face-recognition-attendance",
    },
  ],
  images: [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ],
  videos: [
    {
      title: "Demo Hệ thống nhận diện khuôn mặt điểm danh sinh viên",
      url: "https://www.youtube.com/watch?v=example1",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Hướng dẫn sử dụng hệ thống điểm danh tự động",
      url: "https://www.youtube.com/watch?v=example2",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ],
  resources: [
    {
      name: "Báo cáo tổng kết dự án",
      type: "PDF",
      url: "/files/bao-cao-du-an-nhan-dien-khuon-mat.pdf",
    },
    {
      name: "Mã nguồn (GitHub)",
      type: "Link",
      url: "https://github.com/example/face-recognition-attendance",
    },
    {
      name: "Poster dự án",
      type: "PDF",
      url: "/files/poster-du-an-nhan-dien-khuon-mat.pdf",
    },
    {
      name: "Slide thuyết trình",
      type: "PDF",
      url: "/files/slide-du-an-nhan-dien-khuon-mat.pdf",
    },
  ],
  relatedProjects: [
    {
      title: "Ứng dụng di động hỗ trợ học tập cho sinh viên Đại học Hàng hải",
      slug: "ung-dung-di-dong-ho-tro-hoc-tap",
    },
    {
      title: "Hệ thống hỗ trợ dự đoán kết quả học tập của sinh viên dựa trên học máy",
      slug: "du-doan-ket-qua-hoc-tap",
    },
    {
      title: "Hệ thống IoT giám sát và cảnh báo chất lượng không khí trong phòng học",
      slug: "iot-giam-sat-chat-luong-khong-khi",
    },
  ],
  slug: "nhan-dien-khuon-mat-diem-danh",
}

export default function StudentProjectDetailPage({ params }: { params: { slug: string } }) {
  // Trong thực tế, bạn sẽ lấy dữ liệu dựa trên params.slug
  // Ở đây chúng ta sử dụng dữ liệu mẫu

  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image src="/placeholder.svg?height=400&width=1200" alt={studentProject.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{studentProject.title}</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu/du-an-sinh-vien" className="hover:underline">
                Dự án sinh viên
              </Link>
              <span className="mx-2">/</span>
              <span>{studentProject.slug}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project details */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center mb-6">
            <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {studentProject.field}
            </div>
            <div className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
              {studentProject.status}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-primary">Giới thiệu dự án</h2>

              <div className="prose max-w-none">
                <p className="mb-4">{studentProject.description}</p>

                {studentProject.fullDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Mục tiêu nghiên cứu</h3>
                <ul className="list-disc pl-6 mb-4">
                  {studentProject.objectives.map((objective, index) => (
                    <li key={index} className="mb-2">
                      {objective}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Phương pháp nghiên cứu</h3>
                <div className="space-y-4 mb-6">
                  {studentProject.methodology.map((method, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">{method.name}</h4>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Kết quả đạt được</h3>
                <ul className="list-disc pl-6 mb-4">
                  {studentProject.results.map((result, index) => (
                    <li key={index} className="mb-2">
                      {result}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Công nghệ sử dụng</h3>
                <div className="space-y-4 mb-6">
                  {studentProject.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-bold text-gray-800 mb-2">{tech.name}</h4>
                      <p className="text-gray-600">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Hình ảnh</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {studentProject.images.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Hình ảnh ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Video</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {studentProject.videos.map((video, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="relative h-40 rounded-lg overflow-hidden mb-2">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/80 rounded-full p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className="w-6 h-6 text-primary"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800">{video.title}</h4>
                    </div>
                  ))}
                </div>

                {studentProject.publications.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Công bố khoa học</h3>
                    <div className="space-y-4">
                      {studentProject.publications.map((pub, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-gray-800 mb-2">
                            <Link href={pub.link} className="hover:text-primary">
                              {pub.title}
                            </Link>
                          </h4>
                          <p className="text-gray-600 mb-2">{pub.authors}</p>
                          <div className="text-sm text-gray-500">
                            {pub.conference && <span>{pub.conference}, </span>}
                            <span>{pub.year}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                <h3 className="text-xl font-bold mt-6 mb-3 text-primary">Tài nguyên</h3>
                <div className="space-y-2">
                  {studentProject.resources.map((resource, index) => (
                    <div key={index} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-5 h-5 mr-2 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                      <a
                        href={resource.url}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.name} ({resource.type})
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4 text-primary border-b pb-2">Thông tin dự án</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Sinh viên thực hiện</h4>
                    <ul className="list-disc pl-5 mt-1">
                      {studentProject.students.map((student, index) => (
                        <li key={index}>
                          <span className="font-medium">{student.name}</span>
                          <br />
                          <span className="text-sm text-gray-600">MSSV: {student.studentId}</span>
                          <br />
                          <span className="text-sm text-gray-600">Vai trò: {student.role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Giảng viên hướng dẫn</h4>
                    <p className="font-medium">{studentProject.supervisor.name}</p>
                    <p className="text-sm text-gray-600">{studentProject.supervisor.position}</p>
                    <p className="text-sm mt-1">
                      Email:{" "}
                      <a href={`mailto:${studentProject.supervisor.email}`} className="text-primary hover:underline">
                        {studentProject.supervisor.email}
                      </a>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Thông tin chung</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Năm thực hiện:</div>
                      <div>{studentProject.year}</div>
                      <div>Thời gian:</div>
                      <div>{studentProject.duration}</div>
                      <div>Lĩnh vực:</div>
                      <div>{studentProject.field}</div>
                      <div>Trạng thái:</div>
                      <div>{studentProject.status}</div>
                    </div>
                  </div>
                  {studentProject.awards.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700">Giải thưởng</h4>
                      <ul className="list-disc pl-5 mt-1">
                        {studentProject.awards.map((award, index) => (
                          <li key={index} className="text-gray-600">
                            {award}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="pt-4">
                    <Button className="w-full">Liên hệ với nhóm nghiên cứu</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Related projects */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Dự án liên quan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentProject.relatedProjects.map((project, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold mb-2 text-primary">{project.title}</h3>
                <Link
                  href={`/nghien-cuu/du-an-sinh-vien/${project.slug}`}
                  className="text-primary hover:text-primary-light font-medium flex items-center text-sm mt-4"
                >
                  Xem chi tiết
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
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
