interface JsonLdProps {
  data: Record<string, any>
}

export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Add alias export for JsonLD (capital L)
export { JsonLd as JsonLD }
