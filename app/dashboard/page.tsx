'use client'

import { OrderItem } from '@/components/order'
import { OrderSummary } from '@/components/orderSummary'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Dashboard = () => {
  const { isLoaded, isSignedIn } = useUser()
  const router = useRouter()

  if (isLoaded && !isSignedIn) {
    router.push('/sign-in?redirectUrl=/dashboard')
  }

  return (
    <section className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div>
        <main className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Detalhes do pedido
          </h1>

          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <section aria-labelledby="cart-heading" className="lg:col-span-7">
              <h2 id="orders-heading" className="sr-only">
                Verifique o status de pedidos recentes e antigos e descubra mais
                produtos
              </h2>

              <OrderItem />
            </section>
            <OrderSummary />
          </div>
        </main>
      </div>
    </section>
  )
}

export default Dashboard
