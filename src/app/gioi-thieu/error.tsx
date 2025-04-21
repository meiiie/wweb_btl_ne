"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Button } from "@/components/ui/button"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <Section>
      <Container>
        <div
          className="flex flex-col items-center justify-center min-h-[60vh] text-center"
          role="alert"
          aria-live="assertive"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Đã xảy ra lỗi</h2>
          <p className="text-gray-600 mb-8 max-w-md">
            Rất tiếc, đã có lỗi xảy ra khi tải trang này. Vui lòng thử lại sau hoặc quay lại trang chủ.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={reset} variant="primary" aria-label="Thử tải lại trang">
              Thử lại
            </Button>
            <Button variant="outline" asChild>
              <Link href="/" aria-label="Quay lại trang chủ">
                Quay lại trang chủ
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
