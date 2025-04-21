import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

interface ProgramCardProps {
  program: {
    id: number
    title: string
    description: string
    image: string
    link: string
  }
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-primary">{program.title}</h3>
        <p className="text-gray-600 mb-4">{program.description}</p>
        <Link href={program.link} className="text-primary hover:text-primary-light font-medium flex items-center">
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
      </CardContent>
    </Card>
  )
}
