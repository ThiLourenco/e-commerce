'use client'

import React from 'react'
import OrderItem from '@/components/order'
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
    orderNumber: '123',
    date: '01.06.2023',
    value: '899,90',
    trackingLink: 'https://example.com/tracking',
    status: 'Pendente',
  },
  {
    id: 2,
    orderNumber: '1234',
    date: '01.06.2023',
    value: '1000,00',
    trackingLink: '',
    status: 'Entregue',
  },
  {
    id: 3,
    orderNumber: '1235',
    date: '01.06.2023',
    value: '2000,00',
    trackingLink: '',
    status: 'Aguardando',
  },
]

const Page: React.FC = () => {
  return (
    <section className="">
      <header className="">
        <nav className="px-24 py-6 text-2xl">
          <div className="flex w-full items-center justify-center">
            <p className="text-grey font-bold">Meus Pedidos</p>
          </div>
        </nav>
      </header>
      <div>
        <main className="flex w-full items-center justify-center px-24 py-6 text-2xl">
          <section className="px-24 py-10 lg:w-5/6 xl:w-5/6 2xl:w-5/6">
            <div className="mt-10 max-h-96 flex-col xs:w-80 sm:w-9/12 lg:w-auto">
              <h2 id="orders-heading" className="sr-only">
                Verifique o status de pedidos recentes e antigos e descubra mais
                produtos
              </h2>
              <OrderItem orders={orders} />
            </div>
          </section>
        </main>
      </div>
      <Widget />
    </section>
  )
}

export default Page
