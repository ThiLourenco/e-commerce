import '../styles/globals.css'

import { ReactNode } from 'react'
import { Metadata } from 'next'
import { siteConfig } from '../config/site'
import { fontSans } from '../lib/fonts'
import { cn } from '../lib/utils'
import { Providers } from '../components/providers'
import { SiteBlob } from '../components/site-blob'
import { SiteFooter } from '../components/site-footer'
import { SiteHeader } from '../components/site-header'
import { Session } from 'next-auth'

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
}

interface RootLayoutProps {
  children: ReactNode
  session: Session
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <>
      <html lang="pt-BR" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            fontSans.variable,
          )}
        >
          <Providers session={session}>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <SiteBlob />
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
