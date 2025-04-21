import { Container } from "@/components/ui/container"
import { Search } from "lucide-react"
import Image from "next/image"

export function TopBar() {
  return (
    <div className="header-top">
      <Container className="flex justify-between items-center">
        <div className="branding flex items-center">
          <div className="relative h-16 w-16 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Tr%C6%B0%E1%BB%9Dng%20%C4%90%E1%BA%A1i%20H%E1%BB%8Dc%20H%C3%A0ng%20H%E1%BA%A3i-0s0QUiKWwj9SFgSuKZKAXXqo00dhXk.png"
              alt="Logo HHVN"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="site-title ml-3">
            <h1 className="text-primary font-semibold text-xl leading-tight">KHOA CÔNG NGHỆ THÔNG TIN</h1>
            <p className="text-primary text-sm">ĐẠI HỌC HÀNG HẢI VIỆT NAM</p>
          </div>
        </div>

        <div className="utilities flex items-center space-x-4">
          <div className="lang-switch flex space-x-2">
            <button className="lang active">VI</button>
            <button className="lang">EN</button>
          </div>

          <div className="search-bar hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="py-2 px-3 text-sm focus:outline-none w-40 lg:w-48"
            />
            <button className="btn-search p-2 text-primary">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}
