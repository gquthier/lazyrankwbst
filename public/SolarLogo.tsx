import type { HTMLAttributes } from "react"

type SolarLogoProps = HTMLAttributes<HTMLSpanElement> & {
  label?: string
  iconClassName?: string
  textClassName?: string
}

export const SolarLogo = ({
  label = "Lazyrank",
  className,
  iconClassName,
  textClassName,
  ...props
}: SolarLogoProps) => {
  const wrapperClasses = ["inline-flex items-center gap-2", className]
    .filter(Boolean)
    .join(" ")
  const iconClasses = ["shrink-0", iconClassName].filter(Boolean).join(" ")
  const textClasses = ["leading-none", textClassName].filter(Boolean).join(" ")

  return (
    <span className={wrapperClasses} {...props}>
      <svg
        viewBox="0 0 307.18 307.18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClasses}
        aria-hidden="true"
      >
        <circle cx="70.42" cy="70.42" r="70.42" />
        <circle cx="236.76" cy="236.76" r="70.42" />
        <path d="M307.18,70.42C307.18,31.53,275.65,0,236.76,0c-18.68,0-36.85,7.57-50,20.83-6.48,6.53-11.67,14.33-15.16,22.84-4.13,10.05-4.38,19.68-5.42,30.31-2.27,23.18-10.9,44.93-27.15,61.91-12.15,12.71-27.68,21.81-44.57,26.6-8.33,2.36-16.32,2.38-24.87,3.38-19.34,2.27-37.18,8.37-50.69,22.87C6.81,201.71,0,219.03,0,236.76,0,275.65,31.53,307.18,70.42,307.18c18.52,0,36.56-7.45,49.68-20.51,6.47-6.44,11.67-14.13,15.22-22.53,6.42-15.19,4.82-32.08,8.31-47.95,3.71-16.85,11.12-33.09,23.04-45.73,9.53-10.1,21.54-17.53,34.51-22.37,21.07-7.86,44.6-4.28,64.98-13.66,16.77-7.72,30.11-22.05,36.57-39.34,2.94-7.87,4.44-16.26,4.44-24.66Z" />
      </svg>
      <span className={textClasses}>{label}</span>
    </span>
  )
}
