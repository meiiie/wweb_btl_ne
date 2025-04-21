import type { Metadata } from "next"
import { PageHeader } from "@/components/tuyen-sinh/page-header"
import { FaqAccordion } from "@/components/tuyen-sinh/faq-accordion"
import { FaqSearch } from "@/components/tuyen-sinh/faq-search"
import { FaqCategories } from "@/components/tuyen-sinh/faq-categories"
import { FaqContact } from "@/components/tuyen-sinh/faq-contact"

export const metadata: Metadata = {
  title: "Câu hỏi thường gặp | Khoa CNTT - ĐH Hàng hải Việt Nam",
  description: "Giải đáp các câu hỏi thường gặp về tuyển sinh Khoa Công nghệ thông tin - Đại học Hàng hải Việt Nam",
}

export default function FaqPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Câu hỏi thường gặp"
        description="Giải đáp các thắc mắc thường gặp về tuyển sinh Khoa Công nghệ thông tin"
        imageSrc="/images/campus/entrance.jpg"
      />

      <FaqSearch />

      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-3">
          <FaqCategories />
        </div>
        <div className="md:col-span-9">
          <FaqAccordion />
        </div>
      </div>

      <FaqContact />
    </div>
  )
}
