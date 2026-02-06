"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { SolarLogo } from "../../public/SolarLogo"
import { Button } from "@/components/Button"

interface NavBarProps {
  scrollToSection?: string
}

export function NavBar({ scrollToSection }: NavBarProps = {}) {
  const scrolled = useScroll(15)

  const handleCtaClick = (e: React.MouseEvent) => {
    if (scrollToSection) {
      e.preventDefault()
      const section = document.getElementById(scrollToSection)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Accueil">
            <span className="sr-only">Logo Lazyrank</span>
            <SolarLogo
              iconClassName="h-7 w-7 text-orange-500"
              textClassName="text-xl font-semibold tracking-tight text-gray-900"
            />
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link className="px-2 py-1 text-gray-900" href="#solutions">
                Solutions
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#analytics">
                Analytics
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="#pricing">
                Tarif
              </Link>
              <Link className="px-2 py-1 text-gray-900" href="/blog">
                Blog
              </Link>
            </div>
          </nav>
          {/* Desktop button */}
          {scrollToSection ? (
            <Button
              variant="primary"
              onClick={handleCtaClick}
              className="hidden h-10 font-semibold sm:block !bg-orange-500 hover:!bg-orange-600 !border-orange-500 !text-black"
            >
              Réserver une démo
            </Button>
          ) : (
            <Button
              asChild
              variant="primary"
              className="hidden h-10 font-semibold sm:block !bg-orange-500 hover:!bg-orange-600 !border-orange-500 !text-black"
            >
              <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">
                Réserver une démo
              </Link>
            </Button>
          )}
          {/* Mobile button */}
          {scrollToSection ? (
            <Button
              variant="primary"
              onClick={handleCtaClick}
              className="h-9 px-3 text-sm font-semibold sm:hidden !bg-orange-500 hover:!bg-orange-600 !border-orange-500 !text-black"
            >
              Réserver une démo
            </Button>
          ) : (
            <Button
              asChild
              variant="primary"
              className="h-9 px-3 text-sm font-semibold sm:hidden !bg-orange-500 hover:!bg-orange-600 !border-orange-500 !text-black"
            >
              <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">
                Réserver une démo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
