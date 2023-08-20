'use client'

import React, { useEffect } from 'react'
import OrderItem from '@/components/order'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Widget } from '@/components/Widget'

interface Order {
  id: number
  orderNumber: string
  date: string
  value: string
  trackingLink: string
  status: string
}

const orders: Order[] = [
  {
    id: 1,
    orderNumber: '1234',
    date: '01.06.2023',
    value: '299,90',
    trackingLink: 'https://example.com/tracking',
    status: 'Pendente',
  },
  {
    id: 2,
    orderNumber: '1234',
    date: '01.06.2023',
    value: '100,00',
    trackingLink: 'https://example.com/tracking',
    status: 'Entregue',
  },
]

const Dashboard: React.FC = () => {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in?redirectUrl=/dashboard')
    }
  }, [isLoaded, isSignedIn, router])

  return (
    <section className="grid min-h-screen place-items-center py-24 sm:py-32 lg:px-8">
      <div>
        <main className="mx-auto items-center px-4 pb-24 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Detalhes do pedido
          </h1>

          <div className="flex w-80 flex-col">
            <h2 id="orders-heading" className="sr-only">
              Verifique o status de pedidos recentes e antigos e descubra mais
              produtos
            </h2>
            <OrderItem orders={orders} />
          </div>
        </main>
      </div>
      <Widget />
    </section>
  )
}

export default Dashboard
