import Link from "next/link"
import type { BlogPostMeta } from "@/lib/blog"

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function ArticleCard({ post }: { post: BlogPostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow duration-200 hover:shadow-lg"
    >
      {post.image && (
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {post.tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-medium text-orange-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-200 line-clamp-2">
          {post.title}
        </h2>
        <p className="mb-4 text-sm text-gray-600 line-clamp-3">
          {post.description}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
          <span>{post.author}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
      </div>
    </Link>
  )
}
