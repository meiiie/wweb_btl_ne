import Image from "next/image"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CONTACT_INFO } from "@/lib/constants"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image src="/placeholder.svg?height=400&width=1200" alt="Liên hệ" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Liên hệ</h1>
            <div className="flex items-center justify-center text-sm">
              <Link href="/" className="hover:underline">
                Trang chủ
              </Link>
              <span className="mx-2">/</span>
              <span>Liên hệ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-6 text-primary">Thông tin liên hệ</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Địa chỉ</h4>
                      <p className="text-gray-600">{CONTACT_INFO.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Điện thoại</h4>
                      <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Email</h4>
                      <p className="text-gray-600">{CONTACT_INFO.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-6 h-6 text-primary"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800 mb-1">Giờ làm việc</h4>
                      <p className="text-gray-600">{CONTACT_INFO.workingHours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Kết nối với chúng tôi</h3>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="bg-white text-primary p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="bg-white text-primary p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a href="#" className="bg-white text-primary p-3 rounded-full hover:bg-gray-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                    </svg>
                    <span className="sr-only">YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Gửi tin nhắn cho chúng tôi</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Nhập địa chỉ email của bạn"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Tiêu đề
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập tiêu đề tin nhắn"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Nội dung
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Nhập nội dung tin nhắn của bạn"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="bg-primary hover:bg-primary-light text-white font-bold py-2 px-6 rounded-md transition-colors"
                    >
                      Gửi tin nhắn
                    </button>
                  </div>
                </form>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Bản đồ</h3>
                <div className="h-[400px] bg-gray-200 rounded-lg">
                  {/* Placeholder for Google Map */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    <p>Bản đồ Google Maps sẽ được hiển thị ở đây</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
