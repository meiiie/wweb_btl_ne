import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"

// Thêm metadata cho trang công bố khoa học
export const metadata: Metadata = {
  title: "Công bố khoa học | Khoa CNTT - Đại học Hàng hải Việt Nam",
  description:
    "Danh sách các công bố khoa học, bài báo, báo cáo hội nghị của giảng viên và sinh viên Khoa Công nghệ Thông tin, Đại học Hàng hải Việt Nam",
  keywords:
    "công bố khoa học, bài báo khoa học, hội nghị khoa học, tạp chí khoa học, nghiên cứu, Đại học Hàng hải Việt Nam",
}

// Dữ liệu mẫu cho các công bố khoa học
const publications = [
  {
    id: 1,
    title: "A Novel Approach for Traffic Congestion Detection Using Deep Learning and IoT Sensors",
    authors: "Nguyen Van A, Tran Thi B, Le Van C",
    journal: "IEEE Transactions on Intelligent Transportation Systems",
    volume: "Vol. 24, No. 5",
    pages: "1823-1835",
    year: 2023,
    doi: "10.1109/TITS.2023.123456",
    abstract:
      "This paper proposes a novel approach for traffic congestion detection using deep learning and IoT sensors. The proposed approach combines data from various IoT sensors with deep learning models to detect and predict traffic congestion in real-time. Experimental results show that the proposed approach achieves high accuracy in detecting traffic congestion and can be used to improve traffic management systems.",
    keywords: ["Traffic Congestion", "Deep Learning", "IoT", "Smart Transportation"],
    type: "Journal",
    slug: "traffic-congestion-detection",
  },
  {
    id: 2,
    title: "Blockchain-based Supply Chain Management: A Case Study in Maritime Industry",
    authors: "Le Van C, Pham Thi D, Hoang Van E",
    conference: "International Conference on Blockchain Technology",
    location: "Singapore",
    pages: "245-258",
    year: 2022,
    doi: "10.1007/978-3-030-12345-6_18",
    abstract:
      "This paper presents a blockchain-based supply chain management system for the maritime industry. The proposed system uses blockchain technology to ensure transparency, security, and efficiency in maritime supply chain management. A case study is presented to demonstrate the effectiveness of the proposed system in a real-world scenario.",
    keywords: ["Blockchain", "Supply Chain", "Maritime Industry", "Logistics"],
    type: "Conference",
    slug: "blockchain-supply-chain",
  },
  {
    id: 3,
    title: "Improving Healthcare Diagnosis Accuracy with Ensemble Deep Learning Models",
    authors: "Tran Thi B, Nguyen Van A, Ly Thi H",
    journal: "Journal of Biomedical Informatics",
    volume: "Vol. 128",
    pages: "104-118",
    year: 2023,
    doi: "10.1016/j.jbi.2023.54321",
    abstract:
      "This paper proposes an ensemble deep learning approach to improve the accuracy of healthcare diagnosis. The proposed approach combines multiple deep learning models to leverage their complementary strengths and overcome their individual limitations. Experimental results on various healthcare datasets show that the proposed approach significantly improves diagnosis accuracy compared to individual models.",
    keywords: ["Healthcare", "Deep Learning", "Ensemble Learning", "Diagnosis"],
    type: "Journal",
    slug: "healthcare-diagnosis",
  },
  {
    id: 4,
    title: "Real-time Vehicle Detection and Classification for Smart Traffic Management",
    authors: "Tran Thi B, Nguyen Van A, Pham Thi D",
    conference: "International Conference on Computer Vision and Pattern Recognition",
    location: "Paris, France",
    pages: "3256-3265",
    year: 2023,
    doi: "10.1109/CVPR.2023.98765",
    abstract:
      "This paper presents a real-time vehicle detection and classification system for smart traffic management. The proposed system uses deep learning models to detect and classify vehicles in real-time from traffic camera feeds. The system is designed to be computationally efficient and can be deployed on edge devices. Experimental results show that the proposed system achieves high accuracy and real-time performance.",
    keywords: ["Vehicle Detection", "Classification", "Deep Learning", "Smart Traffic"],
    type: "Conference",
    slug: "vehicle-detection-classification",
  },
  {
    id: 5,
    title: "A Deep Learning Approach for Maritime Object Detection and Tracking",
    authors: "Hoang Van E, Le Van C, Vu Thi F",
    journal: "IEEE Transactions on Geoscience and Remote Sensing",
    volume: "Vol. 61",
    pages: "1-15",
    year: 2023,
    doi: "10.1109/TGRS.2023.87654",
    abstract:
      "This paper proposes a deep learning approach for maritime object detection and tracking using satellite imagery. The proposed approach uses a combination of convolutional neural networks and recurrent neural networks to detect and track maritime objects such as ships and boats. Experimental results show that the proposed approach achieves high accuracy in detecting and tracking maritime objects in various weather and sea conditions.",
    keywords: ["Maritime", "Object Detection", "Deep Learning", "Satellite Imagery"],
    type: "Journal",
    slug: "maritime-object-detection",
  },
  {
    id: 6,
    title: "Virtual Reality-based Training System for Maritime Education",
    authors: "Ly Thi H, Le Van C, Hoang Van E",
    conference: "International Conference on Virtual Reality and Augmented Reality",
    location: "Tokyo, Japan",
    pages: "178-189",
    year: 2022,
    doi: "10.1007/978-3-030-54321-0_15",
    abstract:
      "This paper presents a virtual reality-based training system for maritime education. The proposed system uses virtual reality technology to create immersive training environments for maritime students. The system includes various training scenarios such as ship navigation, engine room operations, and emergency procedures. User studies show that the proposed system enhances learning outcomes and reduces training costs.",
    keywords: ["Virtual Reality", "Maritime Education", "Training System", "Immersive Learning"],
    type: "Conference",
    slug: "vr-maritime-education",
  },
]

export default function PublicationsPage() {
  return (
    <>
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden mb-8">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Công bố khoa học" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Công bố khoa học</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <Link href="/nghien-cuu" className="hover:underline">
                Nghiên cứu khoa học
              </Link>
              <span className="mx-2">/</span>
              <span>Công bố khoa học</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter section */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Loại công bố
                </label>
                <select
                  id="type"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="journal">Tạp chí</option>
                  <option value="conference">Hội nghị</option>
                </select>
              </div>
              <div>
                <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                  Năm
                </label>
                <select
                  id="year"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                </select>
              </div>
              <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700 mb-1">
                  Tác giả
                </label>
                <select
                  id="author"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full md:w-auto"
                >
                  <option value="all">Tất cả</option>
                  <option value="nguyen-van-a">Nguyễn Văn A</option>
                  <option value="tran-thi-b">Trần Thị B</option>
                  <option value="le-van-c">Lê Văn C</option>
                </select>
              </div>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm công bố..."
                className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Publications list */}
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-primary">Danh sách công bố khoa học</h2>

          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-primary text-white rounded-lg p-3 text-center mr-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold mb-2 text-gray-800 hover:text-primary transition-colors">
                      <Link href={`/nghien-cuu/cong-bo-khoa-hoc/${pub.slug}`}>{pub.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-2">{pub.authors}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 text-sm">
                      {pub.journal && (
                        <div className="flex items-center">
                          <span className="font-medium text-gray-700 mr-2">Tạp chí:</span>
                          <span>{pub.journal}</span>
                        </div>
                      )}
                      {pub.conference && (
                        <div className="flex items-center">
                          <span className="font-medium text-gray-700 mr-2">Hội nghị:</span>
                          <span>{pub.conference}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">Năm:</span>
                        <span>{pub.year}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium text-gray-700 mr-2">DOI:</span>
                        <a
                          href={`https://doi.org/${pub.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {pub.doi}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            pub.type === "Journal" ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"
                          }`}
                        >
                          {pub.type === "Journal" ? "Tạp chí" : "Hội nghị"}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 line-clamp-2">{pub.abstract}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-200"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/nghien-cuu/cong-bo-khoa-hoc/${pub.slug}`}
                      className="text-primary hover:text-primary-light font-medium flex items-center text-sm"
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
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
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
        </CardContent>
      </Card>
    </>
  )
}
