/**
 * Cấu hình SEO mặc định cho trang web Khoa CNTT - VMU
 */

export const defaultSEO = {
  // Thông tin cơ bản
  title: "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
  titleTemplate: "%s | Khoa CNTT - VMU",
  description: "Website chính thức của Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam (VMU)",

  // URL mặc định
  siteUrl: "https://fit.vimaru.edu.vn", // Cập nhật URL chính thức của trang web khi triển khai
  canonicalUrl: "https://fit.vimaru.edu.vn",

  // Open Graph
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://fit.vimaru.edu.vn",
    siteName: "Khoa Công nghệ Thông tin - VMU",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    handle: "@fitVMU",
    site: "@fitVMU",
    cardType: "summary_large_image",
  },

  // Thông tin của tổ chức
  organization: {
    name: "Khoa Công nghệ Thông tin - Trường Đại học Hàng hải Việt Nam",
    url: "https://fit.vimaru.edu.vn",
    logo: "https://fit.vimaru.edu.vn/images/logo.png", // Cập nhật URL logo chính thức
    contactPoint: {
      telephone: "+842253829109",
      contactType: "customer service",
      email: "fit@vimaru.edu.vn",
      areaServed: "VN",
      availableLanguage: ["Vietnamese", "English"],
    },
    sameAs: [
      "https://www.facebook.com/vmufit",
      "https://youtube.com/channel/vmufit",
      // Thêm các liên kết mạng xã hội khác
    ],
  },

  // Keywords
  keywords: [
    "Khoa Công nghệ Thông tin",
    "Đại học Hàng hải Việt Nam",
    "VMU",
    "đào tạo CNTT",
    "ngành CNTT",
    "công nghệ thông tin",
    "đại học hàng hải",
    "ĐHHH",
    "đại học Hải Phòng",
    "IT",
    "computer science",
    "trường đại học",
  ],

  // Ngôn ngữ
  languageAlternates: [
    { hrefLang: "vi", href: "https://fit.vimaru.edu.vn" },
    { hrefLang: "en", href: "https://fit.vimaru.edu.vn/en" },
  ],

  // Robots
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

  // Viewport
  viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
}

/**
 * Cấu trúc dữ liệu cho breadcrumb schema
 */
export type BreadcrumbListItem = {
  name: string
  item: string
}

/**
 * Cấu trúc dữ liệu cho schema Article
 */
export type ArticleSchemaProps = {
  url: string
  title: string
  images: string[]
  datePublished: string
  dateModified?: string
  authorName: string
  authorUrl?: string
  publisherName: string
  publisherLogo?: string
  description: string
}

/**
 * Cấu trúc dữ liệu cho schema FAQPage
 */
export type FAQPageSchemaProps = {
  questions: {
    question: string
    answer: string
  }[]
}

/**
 * Cấu trúc dữ liệu cho schema Course
 */
export type CourseSchemaProps = {
  name: string
  description: string
  provider: string
  url: string
}
