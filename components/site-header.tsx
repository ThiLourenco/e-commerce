'use client'

import Link from 'next/link'
import { SyntheticEvent } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Edit, LogInIcon, ShoppingBag } from 'lucide-react'
import { useShoppingCart } from 'use-shopping-cart'
import { signOut, useSession } from 'next-auth/react'

import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { MainNav } from '../components/main-nav'
import { ThemeToggle } from '../components/theme-toggle'

export function SiteHeader() {
  const { status, data: session } = useSession()

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { cartCount } = useShoppingCart()

  const defaultSearchQuery = searchParams.get('search') ?? ''

  if (pathname.startsWith('/studio')) return null

  function onChange(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const searchQuery = formData.get('search')
    console.log(searchQuery)
    router.replace(`/products/?search=${searchQuery}`)
  }

  const pathsToExclude = ['/', '/about', '/terms', '/policy', '/faq']
  const shouldRenderForm = !pathsToExclude.includes(pathname)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <MainNav />

        {shouldRenderForm && (
          <form
            onChange={onChange}
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
          {pathname !== '/' && !session && (
            <Link className="flex gap-2 p-2" href={'/login'}>
              Meus Pedidos
              <LogInIcon className="h-5 w-5 xs:invisible sm:visible" />
            </Link>
          )}
          {pathname !== '/' && status === 'authenticated' && (
            <>
              <span>Olá, {session.user?.name}</span>
              <Link className="flex gap-2 p-2" href={'/dashboard'}>
                Seus pedidos
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  signOut({ callbackUrl: '/login', redirect: false })
                }
              >
                Sair
              </Button>
            </>
          )}

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
