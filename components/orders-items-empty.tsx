'use client'

import Link from 'next/link'
import { Plus } from 'lucide-react'

import { Button } from '../components/ui/button'

export function OrdersItemEmpty() {
  return (
    <div className="flex h-[250px] shrink-0 w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="text-center text-sm text-gray-500 transition-shadow dark:text-gray-400">
        <h3 className="mb-4 text-lg font-semibold">
          Ops... você ainda não possui compras.
        </h3>
        <Link className="mt-10" href="/products">
          <Button size="sm" className="relative">
            <Plus className="mr-2 h-4 w-4" />
            Faça sua compra
          </Button>
        </Link>
      </div>
    </div>
  )
}
