import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case 'p':
      return 'Pequeno'
    case 'm':
      return 'Médio'
    case 'g':
      return 'Grande'
    case 'gg':
      return 'X-Grande'
    case 'unico':
      return 'Único'
  }
}
