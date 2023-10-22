'use client'

import Link from 'next/link'
import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Input } from 'components/ui/input'
import { Button } from 'components/ui/button'
import { Label } from 'components/ui/label'
import { FiArrowLeft } from 'react-icons/fi'
import { useToast } from 'components/ui/use-toast'
import { Loader2 } from 'lucide-react'

const ForgotPasswordSchema = z.object({
  email: z.string().email('Digite um e-mail válido: johndoe@example.com.'),
})

type FormDataForgotPassword = z.infer<typeof ForgotPasswordSchema>

export default function ForgotPassword() {
  const [isSent, setIsSent] = useState(false)
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError: setFormError,
    reset,
  } = useForm<FormDataForgotPassword>({
    resolver: zodResolver(ForgotPasswordSchema),
  })

  const onSubmit = async (data: FormDataForgotPassword) => {
    const { email } = data

    if (!email || !email.includes('@')) {
      setFormError('email', {
        type: 'required',
        message: 'Digite um e-mail válido',
      })
    }

    try {
      const handleForgotEmail = await fetch('api/passwordForgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (handleForgotEmail.status === 400 && handleForgotEmail.ok === false) {
        setFormError('email', {
          type: 'required',
          message: 'Falha no processo de registro, verifique as informações.',
        })
      }
      if (handleForgotEmail.ok) {
        reset()
        setIsSent(true)
        toast({
          title: 'E-mail enviado com sucesso',
          description: 'Acesse o seu e-mail.',
          variant: 'default',
        })
      } else {
        console.log('Falha no registro do usuário.')
        setFormError('email', {
          type: 'validate',
          message: 'Falha no registro do usuário.',
        })
      }
    } catch (error) {
      console.error('Erro durante o registro:', error)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col rounded-lg border-t-4 border-purple-900 p-5 shadow-2xl dark:border dark:border-gray-600 sm:px-6 md:px-8 lg:px-10">
        <div>
          <h1 className="my-4 text-xl font-bold tracking-wide">
            Redefina a sua senha
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-3"
          >
            <p>
              Digite seu endereço de e-mail para obter instruções para redefinir
              sua senha.
            </p>
            <Label
              htmlFor="email"
              className="mb-1 text-xs sr-only tracking-wide dark:text-gray-300 sm:text-sm"
            >
              E-mail
            </Label>
            <Input
              {...register('email')}
              className="border border-gray-500 px-4 py-2"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              autoCorrect="off"
              autoCapitalize="none"
              placeholder="Digite seu e-mail"
            />
            <span className="text-sm italic text-red-500 dark:text-red-500">
              {errors.email?.message}
            </span>
            {isSent ? (
              <div
                id="alert-border-3"
                className="mb-4 flex border-t-4 border-green-600 bg-transparent p-4 text-green-600 dark:border-green-800 dark:bg-transparent dark:text-green-400"
                role="alert"
              >
                <svg
                  className="h-5 w-5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="ml-3 text-sm font-medium">
                  O e-mail de recuperação foi enviado com sucesso, siga as
                  instruções e redefina a sua senha.
                </div>
              </div>
            ) : null}
            <Button
              type="submit"
              className="ease flex items-center justify-center rounded-md 
            border-2 border-green-700 bg-green-700 px-5 py-3 text-white
            shadow-md transition hover:border-black enabled:hover:border-green-500 enabled:hover:bg-green-500 enabled:hover:text-white
            dark:hover:border-black enabled:dark:hover:border-green-500 enabled:dark:border-green-700 enabled:dark:bg-green-700 enabled:dark:text-white enabled:dark:hover:bg-green-500
            enabled:dark:hover:text-white disabled:opacity-75 disabled:cursor-not-allowed disabled:transform-none disabled:transition-none
            "
              disabled={isSubmitting}
            >
              {isSent && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isSent ? 'Carregando...' : 'Redefinir'}
            </Button>
            <span className="text-sm flex items-center">
              <Link href="/login" className="flex items-center gap-2">
                <FiArrowLeft size={22} />
                Voltar
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}
