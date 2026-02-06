import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content", "blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  image: string
  ogImage: string
  tags: string[]
  author: string
  draft: boolean
  content: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  description: string
  image: string
  ogImage: string
  tags: string[]
  author: string
  draft: boolean
}

function parseFrontmatter(slug: string, fileContent: string): BlogPostMeta {
  const { data } = matter(fileContent)
  return {
    slug: data.slug || slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    image: data.image || "",
    ogImage: data.ogImage || data.image || "",
    tags: data.tags || [],
    author: data.author || "",
    draft: data.draft ?? false,
  }
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  const posts = files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "")
      const filePath = path.join(BLOG_DIR, filename)
      const fileContent = fs.readFileSync(filePath, "utf-8")
      return parseFrontmatter(slug, fileContent)
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return posts
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  if (!fs.existsSync(BLOG_DIR)) {
    return null
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  for (const filename of files) {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data, content } = matter(fileContent)
    const postSlug = data.slug || filename.replace(/\.md$/, "")

    if (postSlug === slug) {
      const processedContent = await remark().use(html).process(content)

      return {
        slug: postSlug,
        title: data.title || "",
        date: data.date || "",
        description: data.description || "",
        image: data.image || "",
        ogImage: data.ogImage || data.image || "",
        tags: data.tags || [],
        author: data.author || "",
        draft: data.draft ?? false,
        content: processedContent.toString(),
      }
    }
  }

  return null
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  return files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)
    return data.slug || filename.replace(/\.md$/, "")
  })
}
