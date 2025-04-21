import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import { Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"

interface NewsDetailProps {
  title: string
  content: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  readTime?: number
  relatedPosts?: {
    id: number | string
    title: string
    link: string
    image: string
  }[]
}

export function NewsDetail({
  title,
  content,
  date,
  author,
  category,
  tags,
  image,
  readTime = 5,
  relatedPosts = [],
}: NewsDetailProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Featured Image */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
        <Image
          src={image || "/placeholder.svg?height=500&width=1200"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <Link
            href={`/tin-tuc-su-kien/danh-muc/${category.toLowerCase().replace(/\s+/g, "-")}`}
            className="bg-[#0056a6] text-white px-3 py-1 rounded-full text-xs font-medium"
          >
            {category}
          </Link>

          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{formatDate(date)}</span>
          </div>

          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{author}</span>
          </div>

          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime} phút đọc</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h1>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-8" dangerouslySetInnerHTML={{ __html: content }} />

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pt-4 border-t">
            <Tag className="w-5 h-5 text-gray-500" />
            {tags.map((tag, index) => (
              <Link
                key={index}
                href={`/tin-tuc-su-kien/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full"
              >
                {tag}
              </Link>
            ))}
          </div>
        )}

        {/* Share */}
        <div className="flex flex-wrap items-center gap-4 mb-8 pt-4 border-t">
          <span className="font-medium flex items-center">
            <Share2 className="w-5 h-5 mr-2" />
            Chia sẻ:
          </span>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2] text-white hover:opacity-90"
              aria-label="Chia sẻ lên Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1da1f2] text-white hover:opacity-90"
              aria-label="Chia sẻ lên Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a66c2] text-white hover:opacity-90"
              aria-label="Chia sẻ lên LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Bài viết liên quan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg?height=200&width=400"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 hover:text-[#0056a6] transition-colors line-clamp-2">
                      <Link href={post.link}>{post.title}</Link>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
