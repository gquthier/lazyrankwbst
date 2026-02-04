import * as React from "react"

import { Button as BaseButton, type ButtonProps as BaseButtonProps } from "@/components/Button"
import { cx } from "@/lib/utils"

type Variant = "default" | "secondary" | "outline"

type ButtonProps = Omit<BaseButtonProps, "variant"> & {
  variant?: Variant
}

const variantMap: Record<Variant, BaseButtonProps["variant"]> = {
  default: "primary",
  secondary: "secondary",
  outline: "secondary",
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", className, ...props }, ref) => {
    const isOutline = variant === "outline"

    return (
      <BaseButton
        ref={ref}
        variant={variantMap[variant]}
        className={cx(
          isOutline && "bg-transparent border border-border text-foreground hover:bg-accent",
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = "Button"

export type { ButtonProps }
