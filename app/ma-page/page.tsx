"use client"

import { RiArrowRightUpLine } from "@remixicon/react"
import FarmFeatures from "@/components/ui/FarmFeatures"
import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import Script from "next/script"

const pricingTiers = [
  {
    name: "Starter",
    description: "Idéal pour lancer l'acquisition organique.",
    price: 99,
    billingPeriod: "/mois",
    buttonText: "Démarrer",
    features: [
      { text: "Jusqu'à 15 articles optimisés / mois" },
      { text: "Suivi des positions Google" },
      { text: "Rapports hebdomadaires automatisés" },
      { text: "Support email standard" },
    ],
  },
  {
    name: "Scale",
    description: "Pensé pour les agences multi-sites qui veulent scaler la production.",
    priceByCredit: {
      "50 contenus optimisés / mois": 247,
      "120 contenus optimisés / mois": 490,
    },
    creditOptions: [
      "50 contenus optimisés / mois",
      "120 contenus optimisés / mois",
    ],
    defaultCredits: "50 contenus optimisés / mois",
    billingPeriod: "/mois",
    buttonText: "Passer à Scale",
    isPrimary: true,
    features: [
      { text: "Suivi positions + reporting avancé" },
      { text: "Briefs SEO générés automatiquement" },
      { text: "Analyse concurrentielle & opportunités" },
      { text: "Multi-sites (agences)" },
    ],
  },
  {
    name: "Agence",
    description: "Pour les organisations qui veulent un déploiement sur mesure.",
    priceLabel: "Sur mesure",
    buttonText: "Parler à un expert",
    features: [
      { text: "Contenu illimité" },
      { text: "Stratégie dédiée & intégrations personnalisées" },
      { text: "Marque blanche (white-label)" },
      { text: "Accompagnement prioritaire" },
    ],
  },
]

export default function MAPage() {
  const scrollToCalendly = () => {
    const calendlySection = document.getElementById('calendly-section')
    if (calendlySection) {
      calendlySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <NavBar scrollToSection="calendly-section" />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      <main className="relative flex flex-col items-center w-full overflow-x-hidden">

        {/* Hero Section */}
        <section aria-label="section principale" className="pt-32 sm:pt-48 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-4xl w-full flex flex-col items-center text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-white px-2 sm:px-2.5 py-1 font-medium text-gray-900 shadow-lg ring-1 shadow-orange-400/20 ring-black/10">
              <span className="shrink-0 rounded-full border bg-orange-50 px-2 sm:px-2.5 py-1 text-xs sm:text-sm text-orange-600 font-semibold">
                À partir de 97€/mois
              </span>
              <span className="flex items-center gap-1 text-xs sm:text-sm">
                <span>1 mois d'essai gratuit</span>
                <RiArrowRightUpLine className="size-3 sm:size-4 shrink-0 text-gray-700" />
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-6 sm:mt-8 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-gray-900 leading-tight">
              Générez 20 à 50 leads
              <br />
              par mois en automatique
              <br />
              grâce au{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                SEO agentique
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              LazyRank crée et publie du contenu optimisé pour Google et ChatGPT
              afin d'attirer des clients qualifiés, sans équipe SEO,
              sans rédaction, sans effort.
            </p>
          </div>
        </section>

        {/* Étape 1: VSL Loom Video */}
        <section className="mt-12 sm:mt-20 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-4xl w-full">

            {/* Step Badge */}
            <div className="flex justify-center mb-6 sm:mb-10">
              <span className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-orange-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-orange-700">
                <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-xs sm:text-base font-bold">1</span>
                <span className="text-sm sm:text-base">Regardez la vidéo</span>
              </span>
            </div>

            {/* Video */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl shadow-orange-500/20 ring-1 ring-black/10">
              <div style={{ position: "relative", paddingBottom: "62.72%", height: 0 }}>
                <iframe
                  src="https://www.loom.com/embed/6445e8b5c6e24db6850324ba6a17fc6f"
                  frameBorder="0"
                  allowFullScreen
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  title="Présentation LazyRank"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Étape 2: Calendly */}
        <section id="calendly-section" className="mt-16 sm:mt-28 w-full px-4 sm:px-6 scroll-mt-24">
          <div className="mx-auto max-w-4xl w-full">

            {/* Step Badge */}
            <div className="flex justify-center mb-6 sm:mb-10">
              <span className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-orange-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-orange-700">
                <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-xs sm:text-base font-bold">2</span>
                <span className="text-sm sm:text-base">Réservez un audit gratuit</span>
              </span>
            </div>

            {/* Calendly Widget */}
            <div className="rounded-xl sm:rounded-2xl bg-white shadow-2xl shadow-orange-500/10 ring-1 ring-black/5 overflow-hidden">
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/gauthierthiry/appel-decouverte-lazyrank?hide_event_type_details=1&hide_gdpr_banner=1"
                style={{ minWidth: "280px", height: "650px" }}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 sm:mt-32 w-full px-4 sm:px-6">
          <FarmFeatures />
        </section>

        {/* CTA Button */}
        <section className="mt-16 sm:mt-24 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-2xl w-full text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-gray-900">
              Prêt à automatiser votre acquisition ?
            </h3>
            <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base">
              Réservez votre audit gratuit et découvrez comment LazyRank peut transformer votre croissance.
            </p>
            <button
              onClick={scrollToCalendly}
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-black shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-500/40"
            >
              Réserver mon audit gratuit
              <RiArrowRightUpLine className="size-4 sm:size-5" />
            </button>
          </div>
        </section>

        {/* Étape 3: Pricing */}
        <section className="mt-20 sm:mt-32 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-6xl w-full">

            {/* Step Badge */}
            <div className="flex justify-center mb-6 sm:mb-10">
              <span className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-orange-100 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg font-semibold text-orange-700">
                <span className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-xs sm:text-base font-bold">3</span>
                <span className="text-sm sm:text-base">Choisissez votre plan</span>
              </span>
            </div>

            {/* Pricing Header */}
            <div className="mb-8 sm:mb-12 text-center">
              <h2 className="text-lg font-semibold tracking-tight text-orange-500">
                Tarifs
              </h2>
              <h3 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900">
                Choisissez le plan adapté à votre croissance
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                peut inclure des frais de mise en place
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pricingTiers.map((tier, index) => (
                <div
                  key={index}
                  className={`bg-white border rounded-xl flex flex-col p-4 sm:p-6 ${
                    tier.isPrimary ? "ring-2 ring-orange-500" : "border-gray-200"
                  }`}
                >
                  {/* Tier Header */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">{tier.name}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-4 sm:mb-6">
                    {tier.price !== undefined ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-bold text-gray-900">{tier.price} €</span>
                        <span className="text-gray-500">{tier.billingPeriod || "/mois"}</span>
                      </div>
                    ) : tier.priceByCredit ? (
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl sm:text-5xl font-bold text-gray-900">
                          {(() => {
                            const key = tier.defaultCredits || tier.creditOptions?.[0] || ""
                            return tier.priceByCredit[key as keyof typeof tier.priceByCredit]
                          })()} €
                        </span>
                        <span className="text-gray-500">{tier.billingPeriod || "/mois"}</span>
                      </div>
                    ) : (
                      <div className="text-xl font-semibold text-gray-900">{tier.priceLabel}</div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToCalendly}
                    className={`mb-4 sm:mb-6 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                      tier.isPrimary
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {tier.buttonText}
                  </button>

                  {/* Features List */}
                  <div className="flex-1 space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="flex-1 text-sm leading-relaxed text-gray-600">
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-20 sm:mt-32 mb-16 sm:mb-24 w-full px-4 sm:px-6">
          <div className="mx-auto max-w-4xl w-full">
            <div className="relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-6 sm:p-10 md:p-12 text-center overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-white">
                  Commencez votre essai gratuit aujourd'hui
                </h3>
                <p className="mt-3 sm:mt-4 text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                  1 mois offert pour tester LazyRank. Sans engagement, sans carte bancaire.
                </p>
                <button
                  onClick={scrollToCalendly}
                  className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-orange-600 shadow-lg transition-all hover:bg-gray-50"
                >
                  Réserver mon appel découverte
                  <RiArrowRightUpLine className="size-4 sm:size-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
