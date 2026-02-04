"use client"

import { RiArrowRightUpLine } from "@remixicon/react"
import FarmFeatures from "@/components/ui/FarmFeatures"
import Script from "next/script"

const pricingTiers = [
  {
    name: "Starter",
    description: "Idéal pour lancer l'acquisition organique.",
    price: 97,
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
    <main className="relative mx-auto flex flex-col w-full">
      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Hero Section - Sans animations */}
      <section aria-label="section principale" className="pt-40 sm:pt-56 w-full">
        <div className="relative mx-auto flex w-full flex-col items-center justify-center px-4 text-center sm:px-6 max-w-6xl">
          <div className="mx-auto">
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 shadow-lg ring-1 shadow-orange-400/20 ring-black/10 filter backdrop-blur-[1px] sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-orange-50 px-2.5 py-1 text-sm text-orange-600 font-semibold sm:text-xs">
                À partir de 99€/mois
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">1 mois d'essai gratuit</span>
                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </div>

          <h1 className="mt-8 text-center text-[2rem] font-semibold tracking-tighter text-gray-900 sm:text-[3.5rem] md:text-[4rem] sm:leading-[1.1]">
            Générez 20 à 50 leads
            <br className="hidden sm:block" />
            par mois en automatique
            <br />
            grâce au{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              SEO agentique
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
            LazyRank crée et publie du contenu optimisé pour Google et ChatGPT
            afin d'attirer des clients qualifiés, sans équipe SEO,
            sans rédaction, sans effort.
          </p>
        </div>
      </section>

      {/* Étape 1: VSL Loom Video */}
      <section className="mt-16 sm:mt-24 px-4 w-full">
        <div className="mx-auto max-w-4xl w-full">
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-3 rounded-full bg-orange-100 px-6 py-3 text-base sm:text-lg font-semibold text-orange-700">
              <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm sm:text-base font-bold">1</span>
              Étape 1 : Regardez la vidéo de présentation
            </span>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-orange-500/20 ring-1 ring-black/10">
            <div style={{ position: "relative", paddingBottom: "62.7177700348432%", height: 0 }}>
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
      <section id="calendly-section" className="mt-20 sm:mt-32 px-4 scroll-mt-24 w-full">
        <div className="mx-auto max-w-4xl w-full">
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-3 rounded-full bg-orange-100 px-6 py-3 text-base sm:text-lg font-semibold text-orange-700">
              <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm sm:text-base font-bold">2</span>
              Étape 2 : Réservez un audit gratuit SEO
            </span>
          </div>

          <div className="rounded-2xl bg-white shadow-2xl shadow-orange-500/10 ring-1 ring-black/5 overflow-hidden">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/gauthierthiry/appel-decouverte-lazyrank?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="mt-28 px-4 w-full">
        <FarmFeatures />
      </div>

      {/* CTA Button */}
      <section className="mt-20 px-4 w-full">
        <div className="mx-auto max-w-2xl text-center w-full">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tighter text-gray-900">
            Prêt à automatiser votre acquisition ?
          </h3>
          <p className="mt-4 text-gray-600">
            Réservez votre audit gratuit et découvrez comment LazyRank peut transformer votre croissance.
          </p>
          <button
            onClick={scrollToCalendly}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-lg font-semibold text-black shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-500/40"
          >
            Réserver mon audit gratuit
            <RiArrowRightUpLine className="size-5" />
          </button>
        </div>
      </section>

      {/* Étape 3: Pricing */}
      <section className="mt-24 px-4 w-full">
        <div className="mx-auto max-w-6xl w-full">
          <div className="flex justify-center mb-10">
            <span className="inline-flex items-center gap-3 rounded-full bg-orange-100 px-6 py-3 text-base sm:text-lg font-semibold text-orange-700">
              <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-orange-500 text-white text-sm sm:text-base font-bold">3</span>
              Étape 3 : Choisissez votre plan
            </span>
          </div>
        </div>

        <PricingWithCalendlyRedirect
          tiers={pricingTiers}
          onButtonClick={scrollToCalendly}
        />
      </section>

      {/* Final CTA */}
      <section className="mt-20 mb-24 px-4 w-full">
        <div className="mx-auto max-w-4xl w-full">
          <div className="relative rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 sm:p-12 text-center overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tighter text-white">
                Commencez votre essai gratuit aujourd'hui
              </h3>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                1 mois offert pour tester LazyRank. Sans engagement, sans carte bancaire.
              </p>
              <button
                onClick={scrollToCalendly}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-orange-600 shadow-lg transition-all hover:bg-gray-50"
              >
                Réserver mon appel découverte
                <RiArrowRightUpLine className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

// Custom Pricing component that redirects to Calendly section
function PricingWithCalendlyRedirect({
  tiers,
  onButtonClick
}: {
  tiers: typeof pricingTiers
  onButtonClick: () => void
}) {
  return (
    <div className="w-full bg-background text-foreground px-4 py-16">
      <div className="mx-auto max-w-6xl w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="scroll-my-24 text-lg font-semibold tracking-tight text-orange-500">
            Tarifs
          </h2>
          <h3 className="mt-2 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            Choisissez le plan adapté à votre croissance
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            peut inclure des frais de mise en place
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-white border rounded-lg flex flex-col p-4 sm:p-6 ${
                tier.isPrimary ? "ring-2 ring-orange-500" : "border-gray-200"
              }`}
            >
              {/* Tier Header */}
              <div className="mb-6">
                <h2 className="mb-2 text-2xl font-bold">{tier.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {tier.price !== undefined ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">{tier.price} €</span>
                    <span className="text-gray-500">{tier.billingPeriod || "/mois"}</span>
                  </div>
                ) : tier.priceByCredit ? (
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">
                      {(() => {
                        const key = tier.defaultCredits || tier.creditOptions?.[0] || ""
                        return tier.priceByCredit[key as keyof typeof tier.priceByCredit]
                      })()} €
                    </span>
                    <span className="text-gray-500">{tier.billingPeriod || "/mois"}</span>
                  </div>
                ) : (
                  <div className="text-xl font-semibold">{tier.priceLabel}</div>
                )}
              </div>

              {/* CTA Button */}
              <button
                onClick={onButtonClick}
                className={`mb-6 w-full py-3 px-4 rounded-lg font-medium transition-colors ${
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
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="flex-1 text-sm leading-relaxed text-gray-500">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
