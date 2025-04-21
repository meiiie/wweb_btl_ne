"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

// Dữ liệu mẫu FAQ
const faqData = [
  {
    id: 1,
    category: "tuyen-sinh",
    question: "Khoa CNTT tuyển sinh những ngành nào?",
    answer:
      "Khoa CNTT - Đại học Hàng hải Việt Nam tuyển sinh 4 ngành đào tạo: Công nghệ thông tin (7480201), Công nghệ phần mềm (7480103), Hệ thống thông tin (7480104) và Kỹ thuật máy tính (7480106).",
  },
  {
    id: 2,
    category: "tuyen-sinh",
    question: "Điểm chuẩn các ngành của Khoa CNTT năm 2022 là bao nhiêu?",
    answer:
      "Điểm chuẩn năm 2022 của các ngành thuộc Khoa CNTT như sau: Công nghệ thông tin: 23.5 điểm, Công nghệ phần mềm: 24.2 điểm, Hệ thống thông tin: 22.8 điểm, Kỹ thuật máy tính: 22.5 điểm.",
  },
  {
    id: 3,
    category: "tuyen-sinh",
    question: "Khoa CNTT có những phương thức xét tuyển nào?",
    answer:
      "Khoa CNTT xét tuyển theo 4 phương thức: (1) Xét tuyển thẳng, (2) Xét tuyển dựa trên kết quả thi tốt nghiệp THPT, (3) Xét tuyển dựa trên học bạ THPT, (4) Xét tuyển dựa trên kết quả kỳ thi đánh giá năng lực.",
  },
  {
    id: 4,
    category: "dao-tao",
    question: "Thời gian đào tạo các ngành của Khoa CNTT là bao lâu?",
    answer:
      "Thời gian đào tạo chuẩn của các ngành thuộc Khoa CNTT là 4 năm (8 học kỳ). Sinh viên có thể hoàn thành sớm hơn nếu tích lũy đủ số tín chỉ theo quy định.",
  },
  {
    id: 5,
    category: "dao-tao",
    question: "Sinh viên Khoa CNTT có cơ hội thực tập ở đâu?",
    answer:
      "Sinh viên Khoa CNTT có cơ hội thực tập tại nhiều doanh nghiệp công nghệ hàng đầu như FPT Software, VNPT, Viettel, CMC, IBM và các công ty phần mềm trong và ngoài nước. Khoa có quan hệ hợp tác với hơn 50 doanh nghiệp để tạo cơ hội thực tập và việc làm cho sinh viên.",
  },
  {
    id: 6,
    category: "co-so-vat-chat",
    question: "Khoa CNTT có những phòng thí nghiệm nào?",
    answer:
      "Khoa CNTT có các phòng thí nghiệm hiện đại như: Phòng lab máy tính, Phòng lab mạng, Phòng lab IoT, Phòng lab AI, Phòng lab phần mềm. Các phòng lab được trang bị đầy đủ thiết bị hiện đại phục vụ học tập và nghiên cứu.",
  },
  {
    id: 7,
    category: "viec-lam",
    question: "Cơ hội việc làm sau khi tốt nghiệp Khoa CNTT như thế nào?",
    answer:
      "Sinh viên tốt nghiệp từ Khoa CNTT có cơ hội việc làm rất tốt với tỷ lệ có việc làm sau 3 tháng tốt nghiệp đạt trên 95%. Các vị trí việc làm phổ biến: Lập trình viên, Kỹ sư phần mềm, Chuyên viên phân tích hệ thống, Quản trị mạng, Chuyên viên an ninh mạng, Kỹ sư AI, Kỹ sư IoT, Quản lý dự án CNTT.",
  },
  {
    id: 8,
    category: "hoc-phi",
    question: "Học phí các ngành của Khoa CNTT là bao nhiêu?",
    answer:
      "Học phí các ngành thuộc Khoa CNTT năm học 2022-2023 là 15 triệu đồng/năm học. Học phí có thể thay đổi theo từng năm học và theo quy định của Nhà trường.",
  },
  {
    id: 9,
    category: "hoc-bong",
    question: "Khoa CNTT có những học bổng nào cho sinh viên?",
    answer:
      "Sinh viên Khoa CNTT có cơ hội nhận được nhiều loại học bổng: Học bổng khuyến khích học tập (từ 3-7 triệu đồng/học kỳ), Học bổng doanh nghiệp (FPT, VNPT, Viettel...), Học bổng tài năng, Học bổng nghiên cứu khoa học và các học bổng khác từ các đối tác của Khoa.",
  },
  {
    id: 10,
    category: "khac",
    question: "Làm thế nào để liên hệ với Khoa CNTT?",
    answer:
      "Bạn có thể liên hệ với Khoa CNTT qua các kênh sau: Văn phòng Khoa: Phòng 116B, Nhà A1, Đại học Hàng hải Việt Nam, 484 Lạch Tray, Kênh Dương, Lê Chân, Hải Phòng. Điện thoại: 0225.3829.109. Email: khoacntt@vimaru.edu.vn. Website: fit.vimaru.edu.vn. Facebook: facebook.com/fit.vimaru.",
  },
]

export function FaqAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([1])

  const toggleItem = (id: number) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id))
    } else {
      setOpenItems([...openItems, id])
    }
  }

  return (
    <div className="space-y-4">
      {faqData.map((faq) => (
        <div key={faq.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
          <button
            className="flex items-center justify-between w-full px-6 py-4 text-left focus:outline-none"
            onClick={() => toggleItem(faq.id)}
          >
            <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
            {openItems.includes(faq.id) ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </button>

          {openItems.includes(faq.id) && (
            <div className="px-6 pb-4">
              <div className="prose prose-blue max-w-none text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
