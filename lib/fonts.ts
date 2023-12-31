import { Roboto_Mono as FontMono, Lato as FontSans } from 'next/font/google'

export const fontSans = FontSans({
  subsets: ['latin-ext'],
  variable: '--font-sans',
  weight: ['400'],
})

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400'],
})
