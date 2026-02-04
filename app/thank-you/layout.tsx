import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Merci pour votre réservation | LazyRank",
  description: "Votre appel découverte est confirmé. Découvrez nos contenus YouTube en attendant notre échange.",
  openGraph: {
    title: "Merci pour votre réservation | LazyRank",
    description: "Votre appel découverte est confirmé. Découvrez nos contenus YouTube en attendant notre échange.",
    type: "website",
    locale: "fr_FR",
    url: "https://lazyrank.io/thank-you",
    siteName: "LazyRank",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merci pour votre réservation | LazyRank",
    description: "Votre appel découverte est confirmé. Découvrez nos contenus YouTube en attendant notre échange.",
  },
}

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
