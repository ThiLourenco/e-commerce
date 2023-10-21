import { Button } from 'components/ui/button'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react'

export default async function SuccessPage() {
  // const router = useRouter()

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/login') // Redirect to login page
  //   }, 5000)
  // })

  return (
    <main className="max-w-xl px-4 mx-auto flex flex-col justify-center h-screen">
      <div className="gap-4 flex flex-col">
        <div>
          <h1 className="text-2xl font-light mb-2">
            Sua senha foi atualizada.
          </h1>
          <p className="mt-2">
            Retorne para a página de login, e faça o seu login.
          </p>
          <Button type="submit">
            <Link href="/login">Return to Login</Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
