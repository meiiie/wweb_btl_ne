import Image from "next/image"

interface PartnerLogoProps {
  partner: {
    id: number
    name: string
    logo: string
  }
}

export function PartnerLogo({ partner }: PartnerLogoProps) {
  return (
    <div className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-16 w-full">
        <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
      </div>
    </div>
  )
}
