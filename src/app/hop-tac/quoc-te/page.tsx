import type { Metadata } from "next"
import Image from "next/image"
import { PartnerList } from "@/components/hop-tac/partner-list"

export const metadata: Metadata = {
  title: "Hợp tác quốc tế - Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Thông tin về các hoạt động hợp tác quốc tế của Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API hoặc CMS
const internationalPartners = [
  {
    id: "kyungpook-national-university",
    name: "Đại học Quốc gia Kyungpook",
    logo: "/images/partners/kyungpook.png",
    description:
      "Đại học Quốc gia Kyungpook (KNU) là một trong những trường đại học hàng đầu của Hàn Quốc. Khoa CNTT hợp tác với KNU trong các lĩnh vực trao đổi sinh viên, trao đổi giảng viên và nghiên cứu khoa học.",
    type: "quoc-te" as const,
    year: 2018,
  },
  {
    id: "nanyang-technological-university",
    name: "Đại học Công nghệ Nanyang",
    logo: "/images/partners/nanyang.png",
    description:
      "Đại học Công nghệ Nanyang (NTU) là một trong những trường đại học hàng đầu của Singapore và châu Á. Khoa CNTT hợp tác với NTU trong các lĩnh vực nghiên cứu khoa học, trao đổi sinh viên và phát triển chương trình đào tạo.",
    type: "quoc-te" as const,
    year: 2019,
  },
  {
    id: "osaka-university",
    name: "Đại học Osaka",
    logo: "/images/partners/osaka.png",
    description:
      "Đại học Osaka là một trong những trường đại học nghiên cứu hàng đầu của Nhật Bản. Khoa CNTT hợp tác với Đại học Osaka trong các lĩnh vực nghiên cứu khoa học, trao đổi sinh viên và tổ chức hội thảo quốc tế.",
    type: "quoc-te" as const,
    year: 2020,
  },
  {
    id: "university-of-california",
    name: "Đại học California",
    logo: "/images/partners/california.png",
    description:
      "Đại học California là một trong những hệ thống đại học công lập hàng đầu của Hoa Kỳ. Khoa CNTT hợp tác với Đại học California trong các lĩnh vực nghiên cứu khoa học, trao đổi giảng viên và phát triển chương trình đào tạo.",
    type: "quoc-te" as const,
    year: 2021,
  },
]

export default function InternationalCooperationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Hợp tác quốc tế</h1>

      <div className="prose max-w-none mb-8">
        <p>
          Khoa Công nghệ thông tin luôn chú trọng phát triển mối quan hệ hợp tác quốc tế nhằm nâng cao chất lượng đào
          tạo, nghiên cứu khoa học và tạo môi trường học tập quốc tế cho sinh viên và giảng viên.
        </p>
        <p>
          Thông qua các hoạt động hợp tác quốc tế, Khoa đã thiết lập quan hệ với nhiều trường đại học và viện nghiên cứu
          uy tín trên thế giới, mở ra cơ hội học tập, nghiên cứu và phát triển cho sinh viên và giảng viên.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Các hình thức hợp tác</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/cooperation/student-exchange.jpg"
                alt="Trao đổi sinh viên"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Trao đổi sinh viên</h3>
              <p className="text-gray-700 text-sm">
                Sinh viên có cơ hội tham gia các chương trình trao đổi ngắn hạn hoặc dài hạn tại các trường đại học đối
                tác, mở rộng kiến thức, nâng cao kỹ năng ngoại ngữ và trải nghiệm môi trường học tập quốc tế.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/cooperation/faculty-exchange.jpg"
                alt="Trao đổi giảng viên"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Trao đổi giảng viên</h3>
              <p className="text-gray-700 text-sm">
                Giảng viên có cơ hội tham gia giảng dạy, nghiên cứu và trao đổi học thuật tại các trường đại học đối
                tác, nâng cao trình độ chuyên môn và mở rộng mạng lưới hợp tác quốc tế.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/cooperation/joint-research.jpg"
                alt="Nghiên cứu khoa học chung"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Nghiên cứu khoa học chung</h3>
              <p className="text-gray-700 text-sm">
                Khoa CNTT hợp tác với các trường đại học và viện nghiên cứu quốc tế trong các dự án nghiên cứu khoa học,
                công bố các bài báo khoa học chung và tổ chức các hội thảo khoa học quốc tế.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/images/cooperation/joint-program.jpg"
                alt="Chương trình đào tạo liên kết"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-blue-700 mb-2">Chương trình đào tạo liên kết</h3>
              <p className="text-gray-700 text-sm">
                Khoa CNTT phát triển các chương trình đào tạo liên kết với các trường đại học quốc tế, tạo cơ hội cho
                sinh viên nhận bằng kép hoặc chuyển tiếp học tập tại nước ngoài.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Bản đồ hợp tác quốc tế</h2>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="relative h-[400px] bg-blue-50">
            <Image
              src="/images/cooperation/world-map.jpg"
              alt="Bản đồ hợp tác quốc tế"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <PartnerList partners={internationalPartners} title="Đối tác quốc tế" />
    </div>
  )
}
