import { PageHeader } from "@/components/dao-tao/page-header"
import { EDUCATION_SYSTEMS } from "@/lib/constants/education"
import { CheckCircle } from "lucide-react"

export default function EducationSystemsPage() {
  return (
    <div>
      <PageHeader
        title="Hệ đào tạo"
        description="Thông tin về các hệ đào tạo của Khoa Công nghệ Thông tin"
        breadcrumbs={[
          { name: "Đào tạo", href: "/dao-tao" },
          { name: "Hệ đào tạo", href: "/dao-tao/he-dao-tao" },
        ]}
      />

      {/* Giới thiệu */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Giới thiệu các hệ đào tạo</h2>
        <div className="prose max-w-none">
          <p>
            Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam cung cấp nhiều hệ đào tạo khác nhau, từ đại học
            đến sau đại học, nhằm đáp ứng nhu cầu học tập đa dạng của người học và yêu cầu của thị trường lao động.
          </p>
          <p>
            Mỗi hệ đào tạo có những đặc điểm riêng về thời gian, phương thức học tập và đối tượng người học. Sinh viên
            có thể lựa chọn hệ đào tạo phù hợp với điều kiện và mục tiêu của mình.
          </p>
        </div>
      </section>

      {/* Danh sách hệ đào tạo */}
      <section className="space-y-6">
        {EDUCATION_SYSTEMS.map((system, index) => (
          <div
            key={system.id}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${
              index % 2 === 0 ? "border-l-4 border-primary" : "border-l-4 border-secondary"
            }`}
          >
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary mb-3">{system.title}</h3>
              <p className="text-gray-600 mb-6">{system.description}</p>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-3">Đặc điểm:</h4>
                <ul className="space-y-2">
                  {system.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Quy chế đào tạo */}
      <section className="bg-white rounded-lg shadow-md p-6 mt-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Quy chế đào tạo</h2>
        <div className="prose max-w-none">
          <p>
            Mọi hoạt động đào tạo tại Khoa Công nghệ Thông tin đều tuân theo quy chế đào tạo của Trường Đại học Hàng hải
            Việt Nam. Quy chế này quy định chi tiết về tổ chức đào tạo, đánh giá kết quả học tập, xét và công nhận tốt
            nghiệp.
          </p>
          <p>
            Sinh viên và giảng viên cần nắm rõ quy chế đào tạo để đảm bảo quá trình học tập và giảng dạy diễn ra đúng
            quy định. Quy chế đào tạo được cập nhật định kỳ để phù hợp với các quy định mới của Bộ Giáo dục và Đào tạo.
          </p>
          <div className="mt-4">
            <a
              href="/dao-tao/tai-lieu/quy-che-dao-tao.pdf"
              className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tải xuống Quy chế đào tạo
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
