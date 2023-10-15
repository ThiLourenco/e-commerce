'use client'
import { cn } from '@/lib/utils'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'

export default function AuthButton({ page }: { page: string }) {
  const { status } = useSession()
  const isAuthenticated = status === 'authenticated'

  return (
    <>
      {!isAuthenticated ? (
        <Link
          href={page === 'register' ? '/sign-in' : 'register'}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'ease flex items-center justify-center rounded-md border-2 border-green-700 bg-green-700 px-5 py-3 text-white shadow-md transition hover:border-black enabled:hover:border-green-700 enabled:hover:bg-green-500 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-75 dark:hover:border-black enabled:dark:border-green-700 enabled:dark:bg-green-700 enabled:dark:text-white enabled:dark:hover:bg-green-500 enabled:dark:hover:text-white',
          )}
        >
          {page === 'register' ? 'Entrar' : 'Criar Conta'}
        </Link>
      ) : (
        <Button
          onClick={() => signOut({ callbackUrl: '/sign-in' })}
          className={cn(
            buttonVariants({ variant: 'default' }),
            'ease flex items-center justify-center rounded-md border-2 border-green-700 bg-green-700 px-5 py-3 text-white shadow-md transition hover:border-black enabled:hover:border-green-700 enabled:hover:bg-green-500 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-75 dark:hover:border-black enabled:dark:border-green-700 enabled:dark:bg-green-700 enabled:dark:text-white enabled:dark:hover:bg-green-500 enabled:dark:hover:text-white',
          )}
        >
          Sair
        </Button>
      )}
    </>
  )
}
