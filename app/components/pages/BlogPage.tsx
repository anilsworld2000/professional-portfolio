// app/blog/page.tsx
import { getAllPosts } from '@/app/lib/mdx'
import BlogCard from '@/app/components/common/BlogCard'
import SectionWrapper from '@/app/components/common/SectionWrapper'

export const metadata = {
  title: 'Blog | Anil Kumar',
  description: 'Read technical blogs, insights, and tutorials by Anil Kumar.',
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <SectionWrapper id="blog" className='bg-gradient-to-b from-white via-gray-50 to-white'>
      <section aria-labelledby="blog-heading">
        <h1 id="blog-heading" className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Latest Blog Posts
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              excerpt={post.frontmatter.excerpt}
              date={post.frontmatter.date}
              image={post.frontmatter.image}
            />
          ))}
        </div>
      </section>
    </SectionWrapper>
  )
}
