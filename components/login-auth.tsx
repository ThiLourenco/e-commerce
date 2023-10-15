'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginSchema = z.object({
  email: z.string().email('Digite um e-mail válido: johndoe@example.com.'),
  password: z.string().min(6, 'A senha deverá conter no mínimo 6 caracteres.'),
})

type FormDataLogin = z.infer<typeof LoginSchema>

export const UserLoginForm = () => {
  const router = useRouter()
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    setError: setFormError,
  } = useForm<FormDataLogin>({
    resolver: zodResolver(LoginSchema),
  })

  const onSubmit = async (data: FormDataLogin) => {
    // event.preventDefault()

    try {
      const response = await signIn<'credentials'>('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (response?.error) {
        // Em caso de erro, defina a mensagem de erro no campo relevante
        if (response.error === 'InvalidCredentials') {
          return (
            errors.email &&
            errors.password &&
            setFormError('email', {
              type: 'manual',
              message: 'Login e/ou Senha inválido(s)',
            })
          )
        }
      } else {
        router.push('/dashboard')
      }
    } catch (err) {
      console.error('Erro inesperado:', err)
    }
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col rounded-lg border-t-4 border-purple-900 p-5 shadow-2xl dark:border dark:border-gray-600 sm:px-6 md:px-8 lg:px-10">
        <h1 className="my-4 text-xl font-bold tracking-wide">
          Faça o seu login
        </h1>
        <div className="m-5 text-sm text-red-500">
          <h3>Homologação</h3>
          <span>E-mail: johndoe@teste.com - Senha: 123456</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div>
            <Label
              htmlFor="email"
              className="mb-1 text-xs tracking-wide dark:text-gray-300 sm:text-sm"
            >
              E-mail:
            </Label>
            <Input
              {...register('email')}
              className="border border-gray-500 px-4 py-2"
              type="email"
              id="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              placeholder="Digite seu email"
            />
            <span className="text-sm italic text-red-500 dark:text-red-500">
              {errors.email?.message}
            </span>
          </div>

          <div className="relative">
            <Label
              htmlFor="password"
              className="mb-1 text-xs tracking-wide dark:text-gray-300 sm:text-sm"
            >
              Senha:
            </Label>
            <Input
              {...register('password')}
              className="border border-gray-500 px-4 py-2"
              type={isPasswordVisible ? 'text' : 'password'}
              id="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              name="password"
              autoComplete="current-password"
              placeholder="Digite sua senha"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 py-10 text-gray-600"
              onClick={togglePasswordVisibility}
            >
              {' '}
              {isPasswordVisible ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            <span className="text-sm italic text-red-500 dark:text-red-500">
              {errors.password?.message}
            </span>
          </div>

          <Button
            type="submit"
            className="ease flex items-center justify-center rounded-md 
            border-2 border-green-700 bg-green-700 px-5 py-3 text-white
            shadow-md transition hover:border-black enabled:hover:border-green-700 enabled:hover:bg-green-500 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-75
            dark:hover:border-black enabled:dark:border-green-700 enabled:dark:bg-green-700 enabled:dark:text-white enabled:dark:hover:bg-green-500
            enabled:dark:hover:text-white"
            disabled={isLoading}
            title="Entrar"
          >
            Entrar
          </Button>
          <span className="m-2 text-right text-sm">
            Não tem uma conta ?{' '}
            <Link href={'/register'} className="underline hover:text-gray-400">
              Cadastre aqui
            </Link>
          </span>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 py-2 text-muted-foreground">
              Ou continue com
            </span>
          </div>
        </div>
        <Button
          onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
          variant="outline"
          type="button"
          disabled={isLoading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span className="ml-3">Faça login no Google</span>
        </Button>
      </div>
    </div>
  )
}
