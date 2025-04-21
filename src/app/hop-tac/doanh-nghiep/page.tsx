import type { Metadata } from "next"
import { PartnerList } from "@/components/hop-tac/partner-list"

export const metadata: Metadata = {
  title: "Hợp tác doanh nghiệp - Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Thông tin về các hoạt động hợp tác với doanh nghiệp của Khoa Công nghệ thông tin, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu - trong thực tế sẽ được lấy từ API hoặc CMS
const businessPartners = [
  {
    id: "fpt-software",
    name: "FPT Software",
    logo: "/images/partners/fpt-software.png",
    description:
      "FPT Software là công ty thành viên của Tập đoàn FPT, chuyên cung cấp các dịch vụ và giải pháp phần mềm cho khách hàng toàn cầu. Khoa CNTT hợp tác với FPT Software trong các lĩnh vực đào tạo, thực tập và tuyển dụng sinh viên.",
    type: "doanh-nghiep" as const,
    year: 2015,
  },
  {
    id: "viettel",
    name: "Tập đoàn Viettel",
    logo: "/images/partners/viettel.png",
    description:
      "Tập đoàn Viettel là tập đoàn viễn thông và công nghệ thông tin hàng đầu Việt Nam. Khoa CNTT hợp tác với Viettel trong các lĩnh vực nghiên cứu, phát triển sản phẩm, thực tập và tuyển dụng sinh viên.",
    type: "doanh-nghiep" as const,
    year: 2016,
  },
  {
    id: "vnpt",
    name: "Tập đoàn VNPT",
    logo: "/images/partners/vnpt.png",
    description:
      "Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT) là một trong những tập đoàn viễn thông lớn nhất Việt Nam. Khoa CNTT hợp tác với VNPT trong các lĩnh vực đào tạo, nghiên cứu và phát triển ứng dụng công nghệ thông tin.",
    type: "doanh-nghiep" as const,
    year: 2017,
  },
  {
    id: "cmc",
    name: "Tập đoàn CMC",
    logo: "/images/partners/cmc.png",
    description:
      "CMC là tập đoàn công nghệ hàng đầu Việt Nam, chuyên cung cấp các giải pháp và dịch vụ CNTT. Khoa CNTT hợp tác với CMC trong các lĩnh vực đào tạo, thực tập và tuyển dụng sinh viên.",
    type: "doanh-nghiep" as const,
    year: 2018,
  },
  {
    id: "samsung",
    name: "Samsung Vietnam",
    logo: "/images/partners/samsung.png",
    description:
      "Samsung Vietnam là một trong những nhà đầu tư lớn nhất tại Việt Nam. Khoa CNTT hợp tác với Samsung trong các lĩnh vực nghiên cứu, phát triển ứng dụng và tuyển dụng sinh viên.",
    type: "doanh-nghiep" as const,
    year: 2019,
  },
  {
    id: "ibm",
    name: "IBM Vietnam",
    logo: "/images/partners/ibm.png",
    description:
      "IBM là tập đoàn công nghệ đa quốc gia hàng đầu thế giới. Khoa CNTT hợp tác với IBM trong các lĩnh vực đào tạo, nghiên cứu và phát triển ứng dụng trí tuệ nhân tạo và điện toán đám mây.",
    type: "doanh-nghiep" as const,
    year: 2020,
  },
]

export default function BusinessCooperationPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-800 mb-6">Hợp tác doanh nghiệp</h1>

      <div className="prose max-w-none mb-8">
        <p>
          Khoa Công nghệ thông tin luôn chú trọng phát triển mối quan hệ hợp tác với các doanh nghiệp trong nước và quốc
          tế nhằm nâng cao chất lượng đào tạo, tạo cơ hội thực tập và việc làm cho sinh viên.
        </p>
        <p>
          Thông qua các hoạt động hợp tác, sinh viên có cơ hội tiếp cận với môi trường làm việc thực tế, các công nghệ
          mới và nhu cầu thực tế của doanh nghiệp, từ đó nâng cao khả năng cạnh tranh trên thị trường lao động.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-bold text-blue-800 mb-4">Các hình thức hợp tác</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Đào tạo và phát triển nguồn nhân lực</h3>
            <p className="text-gray-700 text-sm">
              Hợp tác trong việc phát triển chương trình đào tạo, cử chuyên gia giảng dạy và tổ chức các khóa đào tạo
              ngắn hạn.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Thực tập và tuyển dụng</h3>
            <p className="text-gray-700 text-sm">
              Tạo cơ hội thực tập và việc làm cho sinh viên thông qua các chương trình thực tập, tham quan doanh nghiệp
              và ngày hội việc làm.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Nghiên cứu và phát triển</h3>
            <p className="text-gray-700 text-sm">
              Hợp tác trong các dự án nghiên cứu, phát triển sản phẩm và ứng dụng công nghệ mới.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Tài trợ học bổng</h3>
            <p className="text-gray-700 text-sm">
              Các doanh nghiệp tài trợ học bổng cho sinh viên xuất sắc và có hoàn cảnh khó khăn.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Tổ chức sự kiện</h3>
            <p className="text-gray-700 text-sm">
              Phối hợp tổ chức các hội thảo, workshop, cuộc thi và sự kiện công nghệ.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">Trang thiết bị và cơ sở vật chất</h3>
            <p className="text-gray-700 text-sm">
              Doanh nghiệp hỗ trợ trang thiết bị, phòng lab và cơ sở vật chất phục vụ đào tạo và nghiên cứu.
            </p>
          </div>
        </div>
      </div>

      <PartnerList partners={businessPartners} title="Đối tác doanh nghiệp" />
    </div>
  )
}
