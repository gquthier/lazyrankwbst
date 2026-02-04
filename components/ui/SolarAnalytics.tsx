import {
  RiDropFill,
  RiNavigationFill,
  RiPieChartFill,
  RiRobot3Fill,
} from "@remixicon/react"
import { Divider } from "@/components/Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="analytics"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="analytics"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          Analytique Lazyrank
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Suivez la croissance de vos clients en temps réel
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiNavigationFill}
          title="Trafic organique"
          description="Suivez l’évolution de vos visiteurs SEO et identifiez ce qui génère le plus de clics."
        />
        <StickerCard
          Icon={RiRobot3Fill}
          title="Positions du contenus"
          description="Analysez vos meilleurs articles et l’évolution des positions de votre site sur Google."
        />
        <StickerCard
          Icon={RiDropFill}
          title="Pages qui convertissent"
          description="Repérez les pages qui génèrent des leads et améliorez votre taux de conversion."
        />
        <StickerCard
          Icon={RiPieChartFill}
          title="Leads & performance"
          description="Analysez vos demandes entrantes, votre coût d’acquisition et vos résultats mois après mois."
        />
      </div>
    </section>
  )
}
