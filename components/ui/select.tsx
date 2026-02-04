"use client"

import * as React from "react"

import { cx } from "@/lib/utils"

type SelectItemData = {
  value: string
  label: React.ReactNode
}

type SelectContextValue = {
  value?: string
  onValueChange?: (value: string) => void
  items: SelectItemData[]
}

const SelectContext = React.createContext<SelectContextValue | null>(null)

type SelectProps = {
  value?: string
  onValueChange?: (value: string) => void
  children: React.ReactNode
}

export function Select({ value, onValueChange, children }: SelectProps) {
  const items = React.useMemo(() => collectItems(children), [children])

  const contextValue = React.useMemo(
    () => ({ value, onValueChange, items }),
    [value, onValueChange, items],
  )

  return (
    <SelectContext.Provider value={contextValue}>
      {children}
    </SelectContext.Provider>
  )
}

export const SelectTrigger = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, onChange, ...props }, ref) => {
  const context = React.useContext(SelectContext)

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    context?.onValueChange?.(event.target.value)
    onChange?.(event)
  }

  return (
    <select
      ref={ref}
      className={cx("h-10 rounded-md px-3 text-sm", className)}
      value={context?.value ?? ""}
      onChange={handleChange}
      {...props}
    >
      {context?.items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  )
})
SelectTrigger.displayName = "SelectTrigger"

type SelectValueProps = {
  placeholder?: string
}

export function SelectValue(props: SelectValueProps) {
  void props
  return null
}

type SelectContentProps = {
  className?: string
  children?: React.ReactNode
}

export function SelectContent(props: SelectContentProps) {
  void props
  return null
}

type SelectItemProps = {
  value: string
  children: React.ReactNode
  className?: string
}

export function SelectItem(props: SelectItemProps) {
  void props
  return null
}
SelectItem.displayName = "SelectItem"

function collectItems(children: React.ReactNode) {
  const items: SelectItemData[] = []

  const walk = (node: React.ReactNode) => {
    React.Children.forEach(node, (child) => {
      if (!React.isValidElement(child)) return

      if (child.type === SelectItem) {
        const { value, children: label } = child.props as SelectItemProps
        items.push({ value, label })
        return
      }

      if (child.props?.children) {
        walk(child.props.children)
      }
    })
  }

  walk(children)

  return items
}
