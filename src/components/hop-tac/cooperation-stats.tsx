import { Building, Globe, Handshake, Users, Award } from "lucide-react"

interface CooperationStatsProps {
  domesticPartners: number
  internationalPartners: number
  countries: number
  projects: number
  students: number
  scholarships: number
}

export function CooperationStats({
  domesticPartners,
  internationalPartners,
  countries,
  projects,
  students,
  scholarships,
}: CooperationStatsProps) {
  const stats = [
    {
      label: "Đối tác trong nước",
      value: domesticPartners,
      icon: Building,
    },
    {
      label: "Đối tác quốc tế",
      value: internationalPartners,
      icon: Globe,
    },
    {
      label: "Quốc gia",
      value: countries,
      icon: Globe,
    },
    {
      label: "Dự án hợp tác",
      value: projects,
      icon: Handshake,
    },
    {
      label: "Sinh viên trao đổi",
      value: students,
      icon: Users,
    },
    {
      label: "Học bổng",
      value: scholarships,
      icon: Award,
    },
  ]

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center">Thống kê hợp tác</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-3">
              <stat.icon className="h-6 w-6" />
            </div>
            <div className="text-2xl font-bold text-blue-800">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
