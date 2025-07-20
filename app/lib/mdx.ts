// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'

const postsDirectory = path.join(process.cwd(), 'content/blogs')

export function getPostSlugs() {
  console.log(fs.readdirSync(postsDirectory).map((slug) => slug.replace(/\.mdx$/, '')));
  return fs.readdirSync(postsDirectory).map((slug) => slug.replace(/\.mdx$/, ''));
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const { content, data } = matter(fileContents)
  const mdxSource = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  })

  return {
    slug: realSlug,
    frontmatter: data,
    content: mdxSource.content,
    compiledSource: mdxSource, // used by MDXRemote if needed
  }
}

export async function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)))
  return posts
}
