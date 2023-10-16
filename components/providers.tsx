'use client'

import { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { CartProvider } from 'use-shopping-cart'
import { Toaster } from '../components/ui/toaster'
import { TailwindIndicator } from '../components/tailwind-indicator'
import { ThemeProvider } from '../components/theme-provider'
import { Session } from 'next-auth'

interface Props {
  children: ReactNode
  session: Session
}

export function Providers({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      <CartProvider
        currency="BRL"
        shouldPersist
        cartMode="checkout-session"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster />
          {children}
          <TailwindIndicator />
        </ThemeProvider>
      </CartProvider>
    </SessionProvider>
  )
}
