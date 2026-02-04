"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cx } from "@/lib/utils"

export const description = "Performance SEO interactive"

const chartData = [
  { date: "2026-01-26", desktop: 90, mobile: 70 },
  { date: "2026-01-27", desktop: 110, mobile: 85 },
  { date: "2026-01-28", desktop: 120, mobile: 95 },
  { date: "2026-01-29", desktop: 100, mobile: 80 },
  { date: "2026-01-30", desktop: 130, mobile: 90 },
  { date: "2026-01-31", desktop: 120, mobile: 95 },
  { date: "2026-02-01", desktop: 110, mobile: 74 },
]

const chartConfig = {
  desktop: {
    label: "Ordinateur",
    color: "#f97316",
  },
  mobile: {
    label: "Mobile",
    color: "#fb923c",
  },
}

const chartKeys = ["desktop", "mobile"] as const

const chartWidth = 900
const chartHeight = 260
const chartPadding = { top: 24, right: 28, bottom: 36, left: 24 }

function formatLabel(value: string) {
  return new Date(value).toLocaleDateString("fr-FR", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  })
}

function formatLabelWithYear(value: string) {
  return new Date(value).toLocaleDateString("fr-FR", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
}

function buildPath(values: number[]) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(max - min, 1)
  const plotWidth = chartWidth - chartPadding.left - chartPadding.right
  const plotHeight = chartHeight - chartPadding.top - chartPadding.bottom

  return values
    .map((value, index) => {
      const x = chartPadding.left + (index / (values.length - 1)) * plotWidth
      const y = chartPadding.top + (1 - (value - min) / range) * plotHeight
      return `${x},${y}`
    })
    .join(" ")
}

function getPointPosition(values: number[], index: number) {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const range = Math.max(max - min, 1)
  const plotWidth = chartWidth - chartPadding.left - chartPadding.right
  const plotHeight = chartHeight - chartPadding.top - chartPadding.bottom
  const x = chartPadding.left + (index / (values.length - 1)) * plotWidth
  const y = chartPadding.top + (1 - (values[index] - min) / range) * plotHeight
  return { x, y }
}

function getTickIndexes() {
  return chartData.map((_, index) => index)
}

function ChartLineInteractive() {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    [],
  )

  const desktopValues = chartData.map((item) => item.desktop)
  const mobileValues = chartData.map((item) => item.mobile)
  const desktopLinePoints = buildPath(desktopValues)
  const mobileLinePoints = buildPath(mobileValues)
  const tickIndexes = React.useMemo(() => getTickIndexes(), [])

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.min(Math.max(event.clientX - rect.left, 0), rect.width)
    const plotWidth = chartWidth - chartPadding.left - chartPadding.right
    const relativeX = Math.min(
      Math.max(x - (chartPadding.left / chartWidth) * rect.width, 0),
      (plotWidth / chartWidth) * rect.width,
    )
    const index = Math.round(
      (relativeX / ((plotWidth / chartWidth) * rect.width)) *
        (chartData.length - 1),
    )
    setHoverIndex(index)
  }

  const handleLeave = () => setHoverIndex(null)

  const activeIndex = hoverIndex ?? chartData.length - 1
  const activeDesktopPoint = getPointPosition(desktopValues, activeIndex)
  const activeMobilePoint = getPointPosition(mobileValues, activeIndex)
  const activeLabel = chartData[activeIndex].date
  const activeDesktopValue = desktopValues[activeIndex]
  const activeMobileValue = mobileValues[activeIndex]

  const tooltipLeft = `${(activeDesktopPoint.x / chartWidth) * 100}%`
  const tooltipTop = `${(activeDesktopPoint.y / chartHeight) * 100}%`

  return (
    <Card className="overflow-hidden border-gray-200/70 bg-white shadow-none">
      <CardHeader className="flex flex-col items-stretch border-b border-gray-200/70 !p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 pb-4 sm:pb-0">
          <CardTitle>Trafic organique - Interactif</CardTitle>
          <CardDescription>
            Environ 1&nbsp;369 visites issues de Google et ChatGPT
          </CardDescription>
        </div>
        <div className="flex w-full sm:w-auto">
          {chartKeys.map((key, index) => (
            <div
              key={key}
              className={cx(
                "flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left sm:border-t-0 sm:px-8 sm:py-6",
                index === 1 ? "sm:border-l" : "",
              )}
            >
              <span className="text-xs text-gray-500">
                {chartConfig[key].label}
              </span>
              <span className="text-lg leading-none font-bold text-gray-900 sm:text-3xl">
                {total[key].toLocaleString("fr-FR")}
              </span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <div
          ref={containerRef}
          className="relative h-[260px] w-full"
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <svg
            viewBox={`0 0 ${chartWidth} ${chartHeight}`}
            className="h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {Array.from({ length: 4 }).map((_, index) => {
              const y =
                chartPadding.top +
                (index *
                  (chartHeight - chartPadding.top - chartPadding.bottom)) /
                  3
              return (
                <line
                  key={y}
                  x1={chartPadding.left}
                  x2={chartWidth - chartPadding.right}
                  y1={y}
                  y2={y}
                  stroke="#eef2f7"
                  strokeWidth="1"
                />
              )
            })}
            <polyline
              fill="none"
              stroke={chartConfig.desktop.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={desktopLinePoints}
            />
            <polyline
              fill="none"
              stroke={chartConfig.mobile.color}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={mobileLinePoints}
            />
            {hoverIndex !== null ? (
              <line
                x1={activeDesktopPoint.x}
                x2={activeDesktopPoint.x}
                y1={chartPadding.top}
                y2={chartHeight - chartPadding.bottom}
                stroke="#e2e8f0"
                strokeWidth="1"
              />
            ) : null}
            {hoverIndex !== null ? (
              <circle
                cx={activeDesktopPoint.x}
                cy={activeDesktopPoint.y}
                r={4.5}
                fill="#ffffff"
                stroke={chartConfig.desktop.color}
                strokeWidth={2}
              />
            ) : null}
            {hoverIndex !== null ? (
              <circle
                cx={activeMobilePoint.x}
                cy={activeMobilePoint.y}
                r={4.5}
                fill="#ffffff"
                stroke={chartConfig.mobile.color}
                strokeWidth={2}
              />
            ) : null}
          </svg>

          {hoverIndex !== null ? (
            <div
              className="pointer-events-none absolute"
              style={{ left: tooltipLeft, top: tooltipTop }}
            >
              <div className="-translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-2xl border border-gray-200/80 bg-white px-3 py-2 text-xs shadow-[0_14px_35px_-20px_rgba(15,23,42,0.55)]">
                <div className="mb-2 text-[11px] font-medium text-gray-500">
                  {formatLabelWithYear(activeLabel)}
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: chartConfig.desktop.color }}
                  />
                  <span className="text-gray-600">Ordinateur</span>
                  <span className="ml-auto font-semibold text-gray-900">
                    {activeDesktopValue}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-sm"
                    style={{ backgroundColor: chartConfig.mobile.color }}
                  />
                  <span className="text-gray-600">Mobile</span>
                  <span className="ml-auto font-semibold text-gray-900">
                    {activeMobileValue}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          <div className="absolute inset-x-0 bottom-1 flex items-center">
            {tickIndexes.map((index) => {
              const left = `${
                (getPointPosition(desktopValues, index).x / chartWidth) * 100
              }%`
              return (
                <span
                  key={index}
                  className="absolute text-xs text-gray-400"
                  style={{ left, transform: "translateX(-50%)" }}
                >
                  {formatLabel(chartData[index].date)}
                </span>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function HeroDashboards() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 sm:px-6 xl:px-0">
      <ChartLineInteractive />
    </section>
  )
}
