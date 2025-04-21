import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const nganhDaoTao = [
  {
    id: "cntt",
    name: "Công nghệ thông tin",
    code: "7480201",
    description:
      "Đào tạo kỹ sư CNTT có kiến thức toàn diện về công nghệ thông tin, có khả năng thiết kế, xây dựng và phát triển các hệ thống phần mềm, quản trị hệ thống CNTT.",
    image: "/images/labs/computer-lab.jpg",
    chiTieu: 120,
    diemChuan2022: 23.5,
    link: "/dao-tao/chuong-trinh/cong-nghe-thong-tin",
  },
  {
    id: "cnpm",
    name: "Công nghệ phần mềm",
    code: "7480103",
    description:
      "Đào tạo kỹ sư chuyên sâu về phát triển phần mềm, có khả năng phân tích, thiết kế, lập trình và kiểm thử các ứng dụng phần mềm chất lượng cao.",
    image: "/images/labs/software-lab.jpg",
    chiTieu: 80,
    diemChuan2022: 24.2,
    link: "/dao-tao/chuong-trinh/cong-nghe-phan-mem",
  },
  {
    id: "httt",
    name: "Hệ thống thông tin",
    code: "7480104",
    description:
      "Đào tạo kỹ sư có khả năng phân tích, thiết kế và triển khai các hệ thống thông tin quản lý, hệ thống thông tin doanh nghiệp và khai phá dữ liệu.",
    image: "/images/labs/network-lab.jpg",
    chiTieu: 60,
    diemChuan2022: 22.8,
    link: "/dao-tao/chuong-trinh/he-thong-thong-tin",
  },
  {
    id: "ktmt",
    name: "Kỹ thuật máy tính",
    code: "7480106",
    description:
      "Đào tạo kỹ sư có kiến thức về phần cứng, kiến trúc máy tính, hệ thống nhúng, IoT và khả năng thiết kế, phát triển các hệ thống phần cứng-phần mềm.",
    image: "/images/labs/iot-lab.jpg",
    chiTieu: 40,
    diemChuan2022: 22.5,
    link: "/dao-tao/chuong-trinh/ky-thuat-may-tinh",
  },
]

export function NganhDaoTaoList() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Các ngành đào tạo</h2>

      <div className="grid gap-6">
        {nganhDaoTao.map((nganh) => (
          <div key={nganh.id} className="bg-white rounded-xl border shadow-sm overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative h-60 md:h-auto">
                <Image src={nganh.image || "/placeholder.svg"} alt={nganh.name} fill className="object-cover" />
              </div>

              <div className="p-6 md:w-2/3">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{nganh.name}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    Mã ngành: {nganh.code}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{nganh.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Chỉ tiêu 2023:</p>
                    <p className="font-semibold text-gray-900">{nganh.chiTieu} sinh viên</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">Điểm chuẩn 2022:</p>
                    <p className="font-semibold text-gray-900">{nganh.diemChuan2022} điểm</p>
                  </div>
                </div>

                <Link
                  href={nganh.link}
                  className="text-blue-600 font-medium inline-flex items-center hover:text-blue-800"
                >
                  Xem chi tiết chương trình đào tạo <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
