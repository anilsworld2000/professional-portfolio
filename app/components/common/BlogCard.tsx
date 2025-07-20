// components/blog/BlogCard.tsx
import Link from 'next/link'
import Image from 'next/image'

export interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  slug: string
  image: string
}

export default function BlogCard({ title, excerpt, date, slug, image }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow hover:shadow-lg transform transition-transform hover:scale-[1.02] overflow-hidden border border-gray-100 scroll-mt-20">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">
          <Link href={`/blog/${slug}`} className="hover:underline text-blue-600">
            {title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 mb-2">{new Date(date).toLocaleDateString()}</p>
        <p className="text-gray-600">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 text-sm mt-2 inline-block hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
