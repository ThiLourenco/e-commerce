'use client'

import Link from 'next/link'
import { SyntheticEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Edit, LogInIcon, ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import { SignInButton, UserButton } from '@clerk/nextjs'
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()
  const defaultSearchQuery = searchParams.get('search') ?? ''

  if (pathname.startsWith('/studio')) return null

  function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get('search')
    router.replace(`/products/?search=${searchQuery}`)
  }
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />
        {pathname !== '/' && (
          <form
            onSubmit={onSubmit}
            className="hidden items-center lg:inline-flex"
          >
            <Input
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="O que você está procurando?"
              className="h-9 lg:w-[300px]"
              defaultValue={defaultSearchQuery}
            />
          </form>
        )}
        <div className="flex items-center space-x-1">
          <SignedIn>
            <li className="text-sm font-medium tracking-wider">
              <Link href="/dashboard">Pedidos</Link>
            </li>
          </SignedIn>

          <SignedIn>
            <Button variant="ghost" size="sm">
              <UserButton />
            </Button>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="redirect">
              <button className=" flex gap-2 p-2 ">
                Meus Pedidos
                <LogInIcon className="h-5 w-5 xs:invisible sm:visible" />
              </button>
            </SignInButton>
          </SignedOut>

          <ThemeToggle />
          {pathname !== '/' && (
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Sacola</span>
              </Button>
            </Link>
          )}
          {process.env.NODE_ENV === 'development' && (
            <Link href="/studio">
              <Button size="sm" variant="ghost">
                <Edit className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
