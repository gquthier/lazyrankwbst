"use client"
import Balancer from "react-wrap-balancer"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import Link from "next/link"
import { siteConfig } from "@/app/siteConfig"

export default function Cta() {
  return (
    <section
      aria-labelledby="lead-capture-title"
      className="mx-auto mt-32 mb-20 max-w-6xl p-1 px-2 sm:mt-56"
    >
      <div className="relative flex items-center justify-center">
        <div
          className="mask pointer-events-none absolute -z-10 opacity-70 select-none"
          aria-hidden="true"
        >
          <div className="flex size-full flex-col gap-2">
            {Array.from({ length: 20 }, (_, idx) => (
              <div key={`outer-${idx}`}>
                <div className="flex size-full gap-2">
                  {Array.from({ length: 41 }, (_, idx2) => (
                    <div key={`inner-${idx}-${idx2}`}>
                      <div className="size-5 rounded-md shadow shadow-orange-500/20 ring-1 ring-black/5"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div>
              <h3
                id="lead-capture-title"
                className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text p-2 text-2xl font-bold tracking-tighter text-transparent md:text-4xl"
              >
                Mets ton email et reste informé
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-700 sm:text-lg">
                <Balancer>
                  Promis, pas de spam. Juste des nouveautés qui ramènent des clients.
                </Balancer>
              </p>
            </div>
            <div className="mt-14 w-full rounded-[16px] bg-white/80 p-1.5 ring-1 ring-black/[6%] backdrop-blur">
              <div className="rounded-xl bg-white p-4 shadow-lg shadow-orange-500/10 ring-1 ring-black/10">
                <div
                  className="flex flex-col items-center gap-3 sm:flex-row"
                >
                  <label htmlFor="email" className="sr-only">
                    Adresse email professionnelle
                  </label>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    id="email"
                    className="h-10 w-full min-w-0 flex-auto"
                    inputClassName="h-full !bg-white !text-gray-900 !placeholder-gray-400 !border-gray-200"
                    placeholder="Ton email pro"
                  />
                  <Button
                    className="h-10 w-full sm:w-fit sm:flex-none !bg-orange-500 !hover:bg-orange-600 !border-orange-500 text-white"
                    asChild
                    variant="primary"
                  >
                    <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">
                      Let's go
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <p className="mt-4 text-xs text-gray-700 sm:text-sm">
              Besoin d'aide ?{" "}
              <Link
                href={siteConfig.baseLinks.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-600 hover:text-orange-500"
              >
                Parler à un expert
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
