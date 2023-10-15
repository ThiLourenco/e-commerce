// eslint-disable-next-line camelcase
import { Roboto_Mono, Lato } from 'next/font/google'

export const fontSans = Lato({
  subsets: ['latin-ext'],
  variable: '--font-sans',
  weight: ['400'],
})

export const fontMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
