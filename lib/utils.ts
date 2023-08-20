import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getSizeName(value: string) {
  switch (value) {
    case 'p':
      return 'P'
    case 'm':
      return 'M'
    case 'g':
      return 'G'
    case 'gg':
      return 'GG'
    case 'xg':
      return 'XG'
    case 'unico':
      return 'Único'
  }
}
