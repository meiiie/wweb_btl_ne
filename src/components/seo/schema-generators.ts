import { defaultSEO } from "@/lib/seo-config"

/**
 * Tạo schema Organization
 * @returns Schema Organization theo chuẩn schema.org
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": defaultSEO.siteUrl,
    name: defaultSEO.organization.name,
    url: defaultSEO.organization.url,
    logo: defaultSEO.organization.logo,
    sameAs: defaultSEO.organization.sameAs,
    contactPoint: defaultSEO.organization.contactPoint,
  }
}

/**
 * Tạo schema BreadcrumbList
 * @param items Danh sách các mục breadcrumb
 * @returns Schema BreadcrumbList theo chuẩn schema.org
 */
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item.startsWith("http") ? item.item : `${defaultSEO.siteUrl}${item.item}`,
    })),
  }
}

/**
 * Tạo schema WebPage
 * @param title Tiêu đề trang
 * @param description Mô tả trang
 * @param url URL của trang
 * @returns Schema WebPage theo chuẩn schema.org
 */
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url.startsWith("http") ? url : `${defaultSEO.siteUrl}${url}`,
    name: title,
    description: description,
    isPartOf: {
      "@type": "WebSite",
      "@id": defaultSEO.siteUrl,
      name: defaultSEO.title,
      url: defaultSEO.siteUrl,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: defaultSEO.siteUrl,
        },
      ],
    },
  }
}

/**
 * Tạo schema WebSite
 * @param options Các tùy chọn cho schema WebSite
 * @returns Schema WebSite theo chuẩn schema.org
 */
export function generateWebSiteSchema(options?: {
  name?: string
  alternateName?: string
  url?: string
  description?: string
  searchUrl?: string
  potentialActions?: Array<{
    type: string
    target: string
    "query-input"?: string
    name?: string
  }>
}) {
  const {
    name = defaultSEO.title,
    alternateName = "Khoa CNTT - VMU",
    url = defaultSEO.siteUrl,
    description = defaultSEO.description,
    searchUrl,
    potentialActions = [],
  } = options || {}

  // Tạo schema cơ bản
  const websiteSchema: any = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name,
    alternateName,
    url,
    description,
    inLanguage: "vi-VN",
    publisher: {
      "@type": "Organization",
      name: defaultSEO.organization.name,
      url: defaultSEO.organization.url,
      logo: {
        "@type": "ImageObject",
        url: defaultSEO.organization.logo,
      },
    },
  }

  // Thêm SearchAction nếu có searchUrl
  if (searchUrl) {
    websiteSchema.potentialAction = [
      {
        "@type": "SearchAction",
        target: `${searchUrl}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
      ...potentialActions,
    ]
  } else if (potentialActions.length > 0) {
    websiteSchema.potentialAction = potentialActions
  }

  return websiteSchema
}

/**
 * Tạo schema LocalBusiness
 * @returns Schema LocalBusiness theo chuẩn schema.org
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${defaultSEO.siteUrl}#localbusiness`,
    name: defaultSEO.organization.name,
    url: defaultSEO.siteUrl,
    telephone: defaultSEO.organization.contactPoint.telephone,
    email: defaultSEO.organization.contactPoint.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "484 Lạch Tray",
      addressLocality: "Hải Phòng",
      addressRegion: "Hải Phòng",
      postalCode: "180000",
      addressCountry: "VN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "17:00",
    },
  }
}

/**
 * Tạo schema Course cho chương trình đào tạo
 * @param program Thông tin chương trình đào tạo
 * @returns Schema Course theo chuẩn schema.org
 */
export function generateCourseSchema(program: {
  title: string
  code: string
  level: string
  duration: string
  description: string
  image: string
  link: string
  objectives?: string[]
  skills?: string[]
  requirements?: string[]
  subjects?: { name: string; credits: number }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.description,
    courseCode: program.code,
    timeRequired: program.duration,
    educationalCredentialAwarded: `Bằng ${program.level} ngành ${program.title}`,
    provider: {
      "@type": "EducationalOrganization",
      name: defaultSEO.organization.name,
      sameAs: defaultSEO.siteUrl,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "full-time",
      inLanguage: "vi",
    },
    ...(program.objectives && {
      courseObjective: program.objectives.map((objective) => ({
        "@type": "DefinedTerm",
        name: objective,
      })),
    }),
    ...(program.skills && {
      teaches: program.skills.map((skill) => ({
        "@type": "DefinedTerm",
        name: skill,
      })),
    }),
    ...(program.requirements && {
      coursePrerequisites: program.requirements.map((req) => ({
        "@type": "AlignmentObject",
        alignmentType: "prerequisite",
        targetName: req,
      })),
    }),
    ...(program.subjects && {
      hasPart: program.subjects.map((subject) => ({
        "@type": "Course",
        name: subject.name,
        creditValue: subject.credits,
      })),
    }),
    image: program.image.startsWith("http") ? program.image : `${defaultSEO.siteUrl}${program.image}`,
    url: program.link.startsWith("http") ? program.link : `${defaultSEO.siteUrl}${program.link}`,
  }
}

/**
 * Tạo schema Person cho giảng viên
 * @param teacher Thông tin giảng viên
 * @returns Schema Person theo chuẩn schema.org
 */
export function generateTeacherSchema(teacher: {
  name: string
  position: string
  department: string
  email: string
  phone?: string
  image: string
  link: string
  research?: string[]
  education?: string[]
  publications?: { title: string; url: string; date: string }[]
  awards?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": teacher.link.startsWith("http") ? teacher.link : `${defaultSEO.siteUrl}${teacher.link}`,
    name: teacher.name,
    jobTitle: teacher.position,
    worksFor: {
      "@type": "EducationalOrganization",
      name: defaultSEO.organization.name,
      department: teacher.department,
      sameAs: defaultSEO.siteUrl,
    },
    email: teacher.email,
    ...(teacher.phone && { telephone: teacher.phone }),
    image: teacher.image.startsWith("http") ? teacher.image : `${defaultSEO.siteUrl}${teacher.image}`,
    url: teacher.link.startsWith("http") ? teacher.link : `${defaultSEO.siteUrl}${teacher.link}`,
    ...(teacher.research && {
      knowsAbout: teacher.research,
    }),
    ...(teacher.education && {
      alumniOf: teacher.education.map((edu) => ({
        "@type": "EducationalOrganization",
        name: edu,
      })),
    }),
    ...(teacher.publications && {
      mainEntityOfPage: teacher.publications.map((pub) => ({
        "@type": "ScholarlyArticle",
        headline: pub.title,
        url: pub.url,
        datePublished: pub.date,
      })),
    }),
    ...(teacher.awards && {
      award: teacher.awards,
    }),
  }
}

/**
 * Tạo schema Department cho bộ môn
 * @param department Thông tin bộ môn
 * @returns Schema Department theo chuẩn schema.org
 */
export function generateDepartmentSchema(department: {
  name: string
  description: string
  url: string
  head: {
    name: string
    url: string
  }
  members?: number
  courses?: string[]
  researchAreas?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Department",
    name: department.name,
    description: department.description,
    url: department.url.startsWith("http") ? department.url : `${defaultSEO.siteUrl}${department.url}`,
    parentOrganization: {
      "@type": "EducationalOrganization",
      name: defaultSEO.organization.name,
      sameAs: defaultSEO.siteUrl,
    },
    employee: {
      "@type": "Person",
      name: department.head.name,
      jobTitle: "Trưởng bộ môn",
      url: department.head.url.startsWith("http") ? department.head.url : `${defaultSEO.siteUrl}${department.head.url}`,
    },
    ...(department.members && {
      numberOfEmployees: {
        "@type": "QuantitativeValue",
        value: department.members,
      },
    }),
    ...(department.courses && {
      makesOffer: department.courses.map((course) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Course",
          name: course,
        },
      })),
    }),
    ...(department.researchAreas && {
      knowsAbout: department.researchAreas,
    }),
  }
}

/**
 * Tạo schema ResearchProject cho đề tài nghiên cứu
 * @param project Thông tin đề tài nghiên cứu
 * @returns Schema ResearchProject theo chuẩn schema.org
 */
export function generateResearchProjectSchema(project: {
  title: string
  description: string
  url: string
  leader: {
    name: string
    url: string
  }
  members?: string[]
  startDate: string
  endDate?: string
  status: string
  keywords?: string[]
  publications?: { title: string; url: string }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    name: project.title,
    description: project.description,
    url: project.url.startsWith("http") ? project.url : `${defaultSEO.siteUrl}${project.url}`,
    startDate: project.startDate,
    ...(project.endDate && { endDate: project.endDate }),
    status: project.status,
    director: {
      "@type": "Person",
      name: project.leader.name,
      url: project.leader.url.startsWith("http") ? project.leader.url : `${defaultSEO.siteUrl}${project.leader.url}`,
    },
    ...(project.members && {
      member: project.members.map((member) => ({
        "@type": "Person",
        name: member,
      })),
    }),
    ...(project.keywords && {
      keywords: project.keywords.join(", "),
    }),
    ...(project.publications && {
      workExample: project.publications.map((pub) => ({
        "@type": "ScholarlyArticle",
        headline: pub.title,
        url: pub.url.startsWith("http") ? pub.url : `${defaultSEO.siteUrl}${pub.url}`,
      })),
    }),
    funder: {
      "@type": "Organization",
      name: defaultSEO.organization.name,
      sameAs: defaultSEO.siteUrl,
    },
  }
}
