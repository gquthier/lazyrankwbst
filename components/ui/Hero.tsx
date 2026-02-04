import { RiArrowRightUpLine } from "@remixicon/react"
import { FadeContainer, FadeDiv, FadeSpan } from "@/components/Fade"
import SearchComponent from "./SearchComponent"
import GameOfLife from "./HeroBackground"

export function Hero() {
  return (
    <section aria-label="section principale">
      <FadeContainer className="relative mx-auto flex w-full flex-col items-center justify-center px-4 text-center sm:px-6 md:max-w-6xl">
        <FadeDiv className="mx-auto">
          <a
            aria-label="Voir la dernière mise à jour"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-full flex justify-center"
          >
            <div className="inline-flex max-w-full items-center gap-3 rounded-full bg-white/5 px-2.5 py-0.5 pr-3 pl-0.5 font-medium text-gray-900 shadow-lg ring-1 shadow-orange-400/20 ring-black/10 filter backdrop-blur-[1px] transition-colors hover:bg-orange-500/2.5 focus:outline-hidden sm:text-sm">
              <span className="shrink-0 truncate rounded-full border bg-gray-50 px-2.5 py-1 text-sm text-gray-600 sm:text-xs">
                Nouveauté
              </span>
              <span className="flex items-center gap-1 truncate">
                <span className="w-full truncate">YOLO Mode v2.0</span>

                <RiArrowRightUpLine className="size-4 shrink-0 text-gray-700" />
              </span>
            </div>
          </a>
        </FadeDiv>
        <h1 className="mt-8 text-center text-[2.4rem] font-semibold tracking-tighter text-gray-900 sm:text-[4.8rem] sm:leading-22">
          <FadeSpan>Obtenez</FadeSpan> <FadeSpan>plus</FadeSpan>{" "}
          <FadeSpan>de</FadeSpan> <FadeSpan>clients</FadeSpan>
          <br />
          <FadeSpan>grâce</FadeSpan> <FadeSpan>à</FadeSpan>{" "}
          <FadeSpan>Google</FadeSpan> <FadeSpan>et</FadeSpan>{" "}
          <FadeSpan>ChatGPT</FadeSpan>
        </h1>
        <p className="mt-5 max-w-xl text-center text-base text-balance text-gray-700 sm:mt-8 sm:text-xl">
          <FadeSpan>
            LazyRank crée et publie du contenu optimisé pour Google et ChatGPT
          </FadeSpan>{" "}
          <FadeSpan>
            afin d’attirer des clients qualifiés, sans équipe SEO,
          </FadeSpan>{" "}
          <FadeSpan>sans rédaction, sans effort.</FadeSpan>
        </p>
        <FadeDiv className="mt-6">
          <SearchComponent />
        </FadeDiv>
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <GameOfLife />
        </div>
      </FadeContainer>
    </section>
  )
}
