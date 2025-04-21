import Link from "next/link"

interface FooterLinksProps {
  title: string
  links: Array<{
    name: string
    href: string
  }>
}

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="hover:underline text-gray-200 hover:text-white">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
