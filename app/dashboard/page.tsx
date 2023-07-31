'use client'

import { OrderItem } from '@/components/order'
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
        <main className="mx-auto max-w-2xl items-center px-4 pb-24 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Detalhes do pedido
          </h1>

          <div className="mx-auto max-w-2xl ">
            <section className="lg:grid-cols-24 lg:grid lg:items-start lg:gap-x-12 xl:gap-x-16">
              <h2 id="orders-heading" className="sr-only">
                Verifique o status de pedidos recentes e antigos e descubra mais
                produtos
              </h2>
              <OrderItem />
            </section>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Dashboard
