import { PartnerCard } from "./partner-card"

interface Partner {
  id: string
  name: string
  logo: string
  description: string
  type: "doanh-nghiep" | "quoc-te"
  year: number
}

interface PartnerListProps {
  partners: Partner[]
  title: string
}

export function PartnerList({ partners, title }: PartnerListProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => (
          <PartnerCard
            key={partner.id}
            id={partner.id}
            name={partner.name}
            logo={partner.logo}
            description={partner.description}
            type={partner.type}
            year={partner.year}
          />
        ))}
      </div>
    </div>
  )
}
