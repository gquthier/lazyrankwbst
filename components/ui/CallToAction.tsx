import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/Button"
import { siteConfig } from "@/app/siteConfig"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-8 sm:grid-cols-6">
        <div className="sm:col-span-2">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Prêt à générer plus de clients ?
          </h2>
          <p className="mt-3 mb-8 text-lg text-gray-600">
            Lancez vos premières pages GEO en quelques minutes, ou planifiez un
            audit avec nos experts.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="text-md">
              <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">Commencer</Link>
            </Button>
            <Button asChild className="text-md" variant="secondary">
              <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">Demander un audit</Link>
            </Button>
          </div>
        </div>
        <div className="relative isolate rounded-xl sm:col-span-4 sm:h-full">
          <Image
            aria-hidden
            alt="Aperçu Lazyrank"
            src="/images/1732473813097.jpeg"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
          />
          <Image
            alt="Aperçu Lazyrank"
            src="/images/1732473813097.jpeg"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
