import { notFound } from 'next/navigation'
import SectionWrapper from '@/app/components/common/SectionWrapper'
import { getPostBySlug, getPostSlugs } from '@/app/lib/mdx'
import { Metadata } from 'next'

type Params = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() { // No need for the Promise wrapper here
  const slugs = getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const { slug } = await params
    const post = await getPostBySlug(slug)
    return {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt || '',
    }
  } catch {
    return {
      title: 'Post not found',
    }
  }
}

export default async function BlogPostPage({ params }: { params: Params['params'] }) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
      <SectionWrapper id={slug}>
        <main>
          <article className="prose prose-lg max-w-3xl mx-auto py-10 text-gray-800">
            <header>
              <h1 className="text-3xl font-bold">{post.frontmatter.title}</h1>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </p>
            </header>
            {post.content}
          </article>
        </main>
      </SectionWrapper>
    )
  } catch {
    notFound()
  }
}
