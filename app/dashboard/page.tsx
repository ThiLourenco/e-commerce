'use client'

import OrderItem from '../../components/order'
import { Widget } from '../../components/Widget'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  const { data: session } = useSession()

  if (!session) {
    router.push('/login')
    return null
  }

  return (
    <section className="">
      <header className="">
        <nav className="px-24 py-6 text-2xl">
          <div className="flex w-full items-center justify-center">
            <p className="text-grey mt-10 font-bold">Meus Pedidos</p>
          </div>
        </nav>
      </header>
      <div>
        <main className="flex w-full items-center justify-center px-24 py-6 text-2xl">
          <section className="px-24 py-10 lg:w-5/6 xl:w-5/6 2xl:w-5/6">
            <div className="mt-10 max-h-96 flex-col xs:w-80 sm:w-9/12 lg:w-auto">
              <h2 id="orders-heading" className="sr-only">
                Histórico de todos os pedidos realizados e os seus status.
              </h2>
              <OrderItem session={session} />
            </div>
          </section>
        </main>
      </div>
      <Widget />
    </section>
  )
}
