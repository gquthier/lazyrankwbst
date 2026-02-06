import type { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import { ArticleCard } from "@/components/ui/ArticleCard"
import { NavBar } from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"

export const metadata: Metadata = {
  title: "Blog | Lazyrank",
  description:
    "Découvrez nos articles sur le SEO, le marketing digital et l'acquisition de clients.",
  openGraph: {
    title: "Blog | Lazyrank",
    description:
      "Découvrez nos articles sur le SEO, le marketing digital et l'acquisition de clients.",
    type: "website",
    url: "https://lazyrank.io/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-6xl px-4 pt-32 pb-20 xl:px-0">
        <div className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Blog
          </h1>
          <p className="mt-3 text-lg text-gray-600">
            Conseils, stratégies et actualités pour booster votre acquisition
            organique.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-gray-500">Aucun article pour le moment.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
