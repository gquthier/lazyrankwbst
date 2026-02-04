import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cx(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

// Tremor Raw focusInput [v0.0.1]

export const focusInput = [
  "focus:ring-2",
  "focus:ring-indigo-200 focus:dark:ring-indigo-700/30",
  "focus:border-indigo-500 focus:dark:border-indigo-700",
];

export const focusRing = [
  "outline outline-offset-2 outline-0 focus-visible:outline-2",
  "outline-indigo-500 dark:outline-indigo-500",
];

export const hasErrorInput = [
  "ring-2",
  "border-red-500 dark:border-red-700",
  "ring-red-200 dark:ring-red-700/30",
];
