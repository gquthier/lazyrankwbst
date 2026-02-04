'use client'

import { RiArrowRightUpLine, RiCheckLine, RiYoutubeFill } from "@remixicon/react"
import { NavBar } from "@/components/ui/Navbar"
import Footer from "@/components/ui/Footer"
import Link from "next/link"
import { useEffect } from "react"

export default function ThankYouPage() {
  useEffect(() => {
    // Track conversion event with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }, [])

  return (
    <>
      <NavBar />
      <main className="relative mx-auto flex flex-col w-full min-h-screen">
        {/* Hero Section */}
        <section className="pt-40 sm:pt-56 pb-20 w-full">
          <div className="relative mx-auto flex w-full flex-col items-center justify-center px-4 text-center sm:px-6 max-w-4xl">

            {/* Success Icon */}
            <div className="mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-6 shadow-xl shadow-orange-500/30">
                  <RiCheckLine className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900 leading-tight">
              Merci d'avoir réservé
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                votre appel !
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-center text-base text-balance text-gray-700 sm:text-xl">
              Vous allez recevoir un email de confirmation avec tous les détails de notre rendez-vous. On a hâte de vous parler !
            </p>

            {/* YouTube CTA */}
            <div className="mt-12 w-full max-w-lg">
              <div className="rounded-2xl bg-white p-8 shadow-2xl shadow-orange-500/10 ring-1 ring-black/5">
                <div className="flex items-center justify-center mb-4">
                  <div className="rounded-full bg-red-500 p-3">
                    <RiYoutubeFill className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 text-center mb-3">
                  En attendant notre appel...
                </h2>
                <p className="text-gray-600 text-center mb-6">
                  Découvrez nos vidéos sur le SEO, l'IA et l'acquisition de clients sur notre chaîne YouTube.
                </p>
                <Link
                  href="https://www.youtube.com/@gauthier-thiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-4 text-lg font-semibold text-black shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-500/40"
                >
                  <RiYoutubeFill className="h-5 w-5" />
                  Voir notre chaîne YouTube
                  <RiArrowRightUpLine className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Back to home link */}
            <Link
              href="/"
              className="mt-8 text-gray-600 hover:text-orange-600 transition-colors font-medium"
            >
              ← Retour à l'accueil
            </Link>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
