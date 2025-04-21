import Image from "next/image"
import type { Metadata } from "next"
import { PageHero } from "@/components/gioi-thieu/page-hero"
import { ContentCard } from "@/components/gioi-thieu/content-card"

export const metadata: Metadata = {
  title: "Tầm nhìn & Sứ mệnh | Giới thiệu | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description: "Tầm nhìn, sứ mệnh và giá trị cốt lõi của Khoa Công nghệ Thông tin, Trường Đại học Hàng hải Việt Nam",
}

export default function VisionMissionPage() {
  return (
    <>
      <PageHero
        title="Tầm nhìn & Sứ mệnh"
        breadcrumb={[
          { title: "Giới thiệu", href: "/gioi-thieu" },
          { title: "Tầm nhìn & Sứ mệnh", href: "/gioi-thieu/tam-nhin-su-menh" },
        ]}
      />

      <ContentCard title="Tầm nhìn">
        <div className="flex flex-col md:flex-row gap-8 items-center mb-6">
          <div className="md:w-1/2">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Đến năm 2030, Khoa Công nghệ Thông tin phấn đấu trở thành đơn vị đào tạo và nghiên cứu có uy tín trong
              nước và khu vực, là địa chỉ tin cậy của người học, nhà tuyển dụng và đối tác hợp tác.
            </p>
            <p className="text-gray-600">
              Khoa CNTT hướng tới việc xây dựng một môi trường học thuật xuất sắc, nơi sinh viên được trang bị kiến
              thức, kỹ năng và thái độ cần thiết để thành công trong lĩnh vực công nghệ thông tin đang phát triển nhanh
              chóng, đồng thời đóng góp vào sự phát triển bền vững của xã hội.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Tầm nhìn Khoa CNTT"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Sứ mệnh">
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center mb-6">
          <div className="md:w-1/2">
            <p className="text-lg font-medium text-gray-800 mb-4">
              Khoa Công nghệ Thông tin có sứ mệnh đào tạo nguồn nhân lực chất lượng cao trong lĩnh vực Công nghệ thông
              tin, đáp ứng nhu cầu của xã hội và hội nhập quốc tế; nghiên cứu khoa học và chuyển giao công nghệ, góp
              phần thúc đẩy sự phát triển kinh tế - xã hội của đất nước.
            </p>
            <p className="text-gray-600">
              Chúng tôi cam kết cung cấp một nền giáo dục toàn diện, kết hợp giữa lý thuyết và thực hành, giúp sinh viên
              phát triển tư duy sáng tạo, khả năng giải quyết vấn đề và tinh thần học tập suốt đời.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Sứ mệnh Khoa CNTT"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </ContentCard>

      <ContentCard title="Giá trị cốt lõi">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Chất lượng và Sáng tạo</h3>
            <p className="text-gray-600">
              Chúng tôi cam kết duy trì tiêu chuẩn chất lượng cao trong mọi hoạt động đào tạo và nghiên cứu, đồng thời
              khuyến khích tư duy sáng tạo và đổi mới.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Trách nhiệm và Hợp tác</h3>
            <p className="text-gray-600">
              Chúng tôi đề cao tinh thần trách nhiệm với sinh viên, đồng nghiệp và xã hội, đồng thời thúc đẩy sự hợp tác
              giữa các cá nhân, tổ chức trong và ngoài Khoa.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Đổi mới và Phát triển</h3>
            <p className="text-gray-600">
              Chúng tôi luôn cập nhật và đổi mới chương trình đào tạo, phương pháp giảng dạy và nghiên cứu để theo kịp
              sự phát triển của công nghệ và đáp ứng nhu cầu xã hội.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-3 text-primary">Tôn trọng và Chia sẻ</h3>
            <p className="text-gray-600">
              Chúng tôi xây dựng môi trường học tập và làm việc dựa trên sự tôn trọng lẫn nhau, khuyến khích chia sẻ
              kiến thức, kinh nghiệm và cơ hội phát triển.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
          <h3 className="text-xl font-bold mb-3 text-primary">Phương châm hoạt động</h3>
          <p className="text-lg font-medium text-gray-800 italic">"Đổi mới - Chất lượng - Hội nhập"</p>
        </div>
      </ContentCard>

      <ContentCard title="Mục tiêu chiến lược">
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Về đào tạo</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">
                Nâng cao chất lượng đào tạo, đáp ứng chuẩn đầu ra theo yêu cầu của thị trường lao động trong nước và
                quốc tế
              </li>
              <li className="mb-2">
                Đa dạng hóa các hình thức đào tạo, phát triển các chương trình đào tạo mới trong lĩnh vực công nghệ tiên
                tiến
              </li>
              <li className="mb-2">
                Tăng cường hợp tác với doanh nghiệp trong đào tạo, thực tập và tuyển dụng sinh viên
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Về nghiên cứu khoa học</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">
                Đẩy mạnh hoạt động nghiên cứu khoa học, tăng số lượng và chất lượng các công bố khoa học quốc tế
              </li>
              <li className="mb-2">Phát triển các nhóm nghiên cứu mạnh trong các lĩnh vực công nghệ mũi nhọn</li>
              <li className="mb-2">Tăng cường chuyển giao công nghệ và hợp tác nghiên cứu với doanh nghiệp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Về đội ngũ</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">
                Phát triển đội ngũ giảng viên có trình độ cao, đáp ứng yêu cầu đào tạo và nghiên cứu
              </li>
              <li className="mb-2">
                Khuyến khích giảng viên học tập nâng cao trình độ, tham gia các hoạt động học thuật quốc tế
              </li>
              <li className="mb-2">Xây dựng môi trường làm việc chuyên nghiệp, sáng tạo và hiệu quả</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-primary">Về hợp tác quốc tế</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
              <li className="mb-2">
                Mở rộng quan hệ hợp tác với các trường đại học, viện nghiên cứu và doanh nghiệp quốc tế
              </li>
              <li className="mb-2">
                Phát triển các chương trình trao đổi sinh viên, giảng viên với các đối tác quốc tế
              </li>
              <li className="mb-2">Tham gia các dự án nghiên cứu quốc tế và mạng lưới học thuật toàn cầu</li>
            </ul>
          </div>
        </div>
      </ContentCard>
    </>
  )
}
