import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Générez 20 à 50 leads par mois en automatique | LazyRank",
  description: "Découvrez comment LazyRank automatise votre acquisition de clients grâce au SEO agentique. 1 mois d'essai gratuit.",
  openGraph: {
    title: "Générez 20 à 50 leads par mois en automatique | LazyRank",
    description: "Découvrez comment LazyRank automatise votre acquisition de clients grâce au SEO agentique. 1 mois d'essai gratuit.",
    type: "website",
    locale: "fr_FR",
    url: "https://lazyrank.io/ma-page",
    siteName: "LazyRank",
  },
  twitter: {
    card: "summary_large_image",
    title: "Générez 20 à 50 leads par mois en automatique | LazyRank",
    description: "Découvrez comment LazyRank automatise votre acquisition de clients grâce au SEO agentique. 1 mois d'essai gratuit.",
  },
}

export default function MAPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
