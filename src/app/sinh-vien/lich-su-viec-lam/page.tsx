import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PieChart, BarChart, LineChart, Briefcase, GraduationCap, Building, Users } from "lucide-react"

export default function EmploymentHistoryPage() {
  return (
    <div className="space-y-8">
      {/* Hero section */}
      <div className="relative h-[300px] overflow-hidden rounded-xl">
        <Image
          src="/placeholder.svg?height=300&width=1200"
          alt="Lịch sử việc làm"
          width={1200}
          height={300}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
          <div className="px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Lịch sử việc làm</h1>
            <p className="text-white/90 max-w-2xl">
              Thông tin thống kê về tình hình việc làm của sinh viên sau khi tốt nghiệp từ Khoa Công nghệ Thông tin -
              Đại học Hàng hải Việt Nam.
            </p>
          </div>
        </div>
      </div>

      {/* Thống kê tổng quan */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-blue-50 border-blue-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-800">95%</h3>
              <p className="text-blue-600">Tỷ lệ có việc làm</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <GraduationCap className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-800">85%</h3>
              <p className="text-green-600">Việc làm đúng chuyên ngành</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-purple-50 border-purple-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Building className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-purple-800">70%</h3>
              <p className="text-purple-600">Làm việc tại doanh nghiệp lớn</p>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-50 border-orange-100">
          <CardContent className="p-6 flex items-center">
            <div className="bg-orange-100 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-orange-800">12%</h3>
              <p className="text-orange-600">Làm việc ở nước ngoài</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Biểu đồ phân bố ngành nghề */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Phân bố ngành nghề</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-gray-500">Biểu đồ phân bố ngành nghề sẽ được hiển thị ở đây</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Phân bố theo lĩnh vực</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Phát triển phần mềm</span>
                      <span>45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Quản trị hệ thống</span>
                      <span>20%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Phân tích dữ liệu</span>
                      <span>15%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Trí tuệ nhân tạo</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Khác</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-500 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biểu đồ mức lương */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Mức lương trung bình</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Mức lương theo năm kinh nghiệm</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Mới ra trường</span>
                      <span>8-12 triệu VNĐ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">1-2 năm</span>
                      <span>12-18 triệu VNĐ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">3-5 năm</span>
                      <span>18-30 triệu VNĐ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Trên 5 năm</span>
                      <span>30-50+ triệu VNĐ</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] bg-gray-50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-gray-500">Biểu đồ mức lương theo năm kinh nghiệm sẽ được hiển thị ở đây</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Biểu đồ xu hướng việc làm */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Xu hướng việc làm qua các năm</h2>
          <div className="relative h-[400px] bg-gray-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <LineChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-gray-500">Biểu đồ xu hướng việc làm qua các năm sẽ được hiển thị ở đây</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Doanh nghiệp tuyển dụng nhiều nhất */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Doanh nghiệp tuyển dụng nhiều nhất</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "FPT Software", count: "15%" },
              { name: "Viettel", count: "12%" },
              { name: "VNPT", count: "10%" },
              { name: "CMC Technology", count: "8%" },
              { name: "IBM Vietnam", count: "7%" },
              { name: "Samsung Vietnam", count: "6%" },
              { name: "Microsoft Vietnam", count: "5%" },
              { name: "Misa", count: "4%" },
            ].map((company, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Building className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{company.name}</h3>
                  <p className="text-primary font-medium">{company.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Phản hồi từ cựu sinh viên */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Phản hồi từ cựu sinh viên</h2>
            <Button variant="outline" asChild>
              <Link href="/sinh-vien/cuu-sinh-vien">Xem thêm</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Nguyễn Văn A"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Nguyễn Văn A</h3>
                    <p className="text-primary text-sm mb-2">Senior Developer tại FPT Software</p>
                    <p className="text-gray-600 italic">
                      "Kiến thức và kỹ năng tôi học được tại Khoa CNTT - ĐH Hàng hải Việt Nam đã giúp tôi rất nhiều
                      trong công việc. Các giảng viên rất nhiệt tình và chương trình đào tạo cập nhật với xu hướng công
                      nghệ."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Trần Thị B"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Trần Thị B</h3>
                    <p className="text-primary text-sm mb-2">Product Manager tại Viettel Digital</p>
                    <p className="text-gray-600 italic">
                      "Tôi rất biết ơn những kiến thức và kỹ năng mà tôi đã học được tại Khoa CNTT. Đặc biệt là các dự
                      án thực tế và hoạt động ngoại khóa đã giúp tôi phát triển kỹ năng mềm rất cần thiết cho công
                      việc."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
