'use client'

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
      <div className="text-center">
        <div>Dashboard em construção...</div>

        <nav className="mt-10">
          <ul>
            <li>Pedidos</li>
            <li>Rastreio</li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Dashboard
