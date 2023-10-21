import { Button } from 'components/ui/button'
import Link from 'next/link'

export default async function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col rounded-lg border-t-4 border-purple-900 p-5 shadow-2xl dark:border dark:border-gray-600 sm:px-6 md:px-8 lg:px-10">
        <div>
          <h1 className="my-4 text-xl font-bold tracking-wide">
            Redefina a sua senha
          </h1>
          <p>
            E-mail enviado com sucesso. Se seu e-mail não for localizado na sua
            caixa de entrada, verifique na sua pasta de spam.
          </p>
          <div className="py-5">
            <Button type="submit">
              <Link href="/login">Voltar para Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
