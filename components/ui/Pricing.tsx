"use client"

import type React from "react"

import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cx } from "@/lib/utils"
import { useState } from "react"
import Link from "next/link"
import { siteConfig } from "@/app/siteConfig"

export interface PricingFeature {
  text: string
  hasInfo?: boolean
}

export interface PricingTier {
  name: string
  description: string
  price?: number | string
  priceByCredit?: Record<string, number | string>
  priceLabel?: string
  billingPeriod?: string
  buttonText: string
  buttonVariant?: "default" | "secondary" | "outline"
  isPrimary?: boolean
  features: PricingFeature[]
  hasAnnualToggle?: boolean
  creditOptions?: string[]
  defaultCredits?: string
  featuresTitle?: string
}

export interface PricingProps {
  icon?: React.ReactNode
  title: string
  subtitle: string
  tiers: PricingTier[]
  footerTitle?: string
  footerDescription?: string
  footerButtonText?: string
  className?: string
}

export function Pricing({
  icon,
  title,
  subtitle,
  tiers,
  footerTitle,
  footerDescription,
  footerButtonText,
  className,
}: PricingProps) {
  const [annualBilling, setAnnualBilling] = useState<Record<string, boolean>>({})
  const [selectedCredits, setSelectedCredits] = useState<Record<string, string>>({})

  const formatPrice = (value: number | string) => {
    if (typeof value === "number") {
      const hasDecimals = !Number.isInteger(value)
      return new Intl.NumberFormat("fr-FR", {
        minimumFractionDigits: hasDecimals ? 2 : 0,
        maximumFractionDigits: hasDecimals ? 2 : 0,
      }).format(value)
    }
    return value
  }

  return (
    <div className={cx("w-full bg-background text-foreground px-4 py-16", className)}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          {icon && <div className="mb-4">{icon}</div>}
          <h2 className="scroll-my-24 text-lg font-semibold tracking-tight text-orange-500">
            {title}
          </h2>
          <h3 className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
            {subtitle}
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            peut inclure des frais de mise en place
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => {
            const activeCredits =
              selectedCredits[tier.name] ||
              tier.defaultCredits ||
              tier.creditOptions?.[0]
            const computedPrice =
              (activeCredits && tier.priceByCredit && tier.priceByCredit[activeCredits]) ??
              tier.price

            return (
              <Card
                key={index}
                className={cx(
                  "bg-card border-border flex flex-col p-4 sm:p-6",
                  tier.isPrimary && "ring-2 ring-orange-500",
                )}
              >
                {/* Tier Header */}
                <div className="mb-6">
                  <h2 className="mb-2 text-2xl font-bold">{tier.name}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {computedPrice !== undefined ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold">
                        {formatPrice(computedPrice)} €
                      </span>
                      <span className="text-muted-foreground">
                        {tier.billingPeriod || "/mois"}
                      </span>
                    </div>
                  ) : (
                    <div className="text-xl font-semibold">{tier.priceLabel}</div>
                  )}
                </div>

                {/* Annual Toggle */}
                {tier.hasAnnualToggle && (
                  <div className="mb-6 flex items-center gap-3">
                    <button
                      onClick={() =>
                        setAnnualBilling((prev) => ({
                          ...prev,
                          [tier.name]: !prev[tier.name],
                        }))
                      }
                      className={cx(
                        "relative h-6 w-11 rounded-full transition-colors",
                        annualBilling[tier.name] ? "bg-muted/80" : "bg-muted",
                      )}
                    >
                      <span
                        className={cx(
                          "bg-primary-foreground absolute top-0.5 left-0.5 h-5 w-5 rounded-full transition-transform",
                          annualBilling[tier.name] && "translate-x-5",
                        )}
                      />
                    </button>
                    <span className="text-foreground text-sm">Annual</span>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  asChild
                  className={cx(
                    "mb-6 w-full",
                    tier.isPrimary
                      ? "!bg-orange-500 text-white hover:!bg-orange-600 border-transparent"
                      : "border border-gray-200 bg-transparent text-gray-900 hover:bg-gray-50",
                  )}
                  variant={tier.isPrimary ? "default" : "outline"}
                >
                  <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">
                    {tier.buttonText}
                  </Link>
                </Button>

                {/* Credit Options */}
                {tier.creditOptions && tier.creditOptions.length > 0 && (
                  <div className="mb-6">
                    <Select
                      value={
                        selectedCredits[tier.name] ||
                        tier.defaultCredits ||
                        tier.creditOptions[0]
                      }
                      onValueChange={(value) =>
                        setSelectedCredits((prev) => ({
                          ...prev,
                          [tier.name]: value,
                        }))
                      }
                    >
                      <SelectTrigger
                        className="w-full bg-white border border-orange-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                        aria-label={`Volume ${tier.name}`}
                      >
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border text-popover-foreground">
                        {tier.creditOptions.map((option) => (
                          <SelectItem
                            key={option}
                            value={option}
                            className="focus:bg-accent focus:text-accent-foreground"
                          >
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* Features Title */}
                {tier.featuresTitle && (
                  <div className="mb-4 text-sm font-medium text-foreground">
                    {tier.featuresTitle}
                  </div>
                )}

                {/* Features List */}
                <div className="flex-1 space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground" />
                      <span className="flex-1 text-sm leading-relaxed text-muted-foreground">
                        {feature.text}
                      </span>
                      {feature.hasInfo && (
                        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/50" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* Footer Banner */}
        {footerTitle && (
          <Card className="bg-card border-border flex flex-col items-center justify-between gap-4 p-8 md:flex-row">
            <div>
              <h3 className="mb-2 text-xl font-bold">{footerTitle}</h3>
              {footerDescription && (
                <p className="text-muted-foreground text-sm">
                  {footerDescription}
                </p>
              )}
            </div>
            {footerButtonText && (
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground bg-transparent whitespace-nowrap"
              >
                <Link href={siteConfig.baseLinks.calendly} target="_blank" rel="noopener noreferrer">
                  {footerButtonText}
                </Link>
              </Button>
            )}
          </Card>
        )}
      </div>
    </div>
  )
}
