import Cta from "@/components/ui/Cta"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import FarmFeatures from "@/components/ui/FarmFeatures"
import Footer from "@/components/ui/Footer"
import { HeroDashboards } from "@/components/ui/HeroDashboards"
import { Hero } from "@/components/ui/Hero"
import { NavBar } from "@/components/ui/Navbar"
import { Pricing } from "@/components/ui/Pricing"
import { SolarAnalytics } from "@/components/ui/SolarAnalytics"
import Testimonial from "@/components/ui/Testimonial"

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

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative mx-auto flex flex-col">
        <div className="pt-56">
          <Hero />
        </div>
      <div className="mt-16">
        <HeroDashboards />
      </div>
      <Features />
      <div className="mt-28 px-4 xl:px-0">
        <FarmFeatures />
      </div>
      <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 mb-24 px-4 xl:px-0">
        <SolarAnalytics />
      </div>
      <div id="pricing" className="mt-24 px-4 xl:px-0">
        <Pricing
          title="Tarifs"
          subtitle="Choisissez le plan adapté à votre croissance"
          tiers={pricingTiers}
        />
      </div>
      <div className="mt-10 px-4 xl:px-0">
        <Cta />
      </div>
    </main>
    <Footer />
    </>
  )
}
