import Link from "next/link"
import { Container } from "@/components/ui/container"
import { CONTACT_INFO } from "@/lib/constants"

export function TopBar() {
  return (
    <div className="bg-primary text-white py-2">
      <Container className="flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4">
          <span>Email: {CONTACT_INFO.email}</span>
          <span>Điện thoại: {CONTACT_INFO.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Link href="#" className="hover:underline">
            Tiếng Việt
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            English
          </Link>
        </div>
      </Container>
    </div>
  )
}
