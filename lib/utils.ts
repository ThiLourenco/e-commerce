import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case "xs":
      return "X-Pequeno"
    case "s":
      return "Pequeno"
    case "m":
      return "Médio"
    case "l":
      return "Grande"
    case "xl":
      return "X-Grande"
    case "one-size":
      return "Tamanho único"
  }
}
