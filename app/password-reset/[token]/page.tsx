'use client'

import { useState } from 'react'
import Link from 'next/link'
import { NextPage } from 'next'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { FiArrowLeft } from 'react-icons/fi'

const PasswordResetFormSchema = z
  .object({
    confirmPassword: z
      .string()
      .min(6, 'A senha deverá conter no mínimo 6 caracteres.'),
    password: z
      .string()
      .min(6, 'A senha deverá conter no mínimo 6 caracteres.'),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword
    },
    {
      message: 'As senhas devem corresponder!',
      path: ['confirmPassword', 'password'],
    },
  )

type FormDataPasswordReset = z.infer<typeof PasswordResetFormSchema>

const PasswordReset: NextPage = () => {
  const [isSent, setIsSent] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
    setError: setFormError,
    reset,
  } = useForm<FormDataPasswordReset>({
    resolver: zodResolver(PasswordResetFormSchema),
  })

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState)
  }

  const onSubmit = async (data: FormDataPasswordReset) => {
    const { password, confirmPassword } = data

    const token = window.location.pathname.split('/').pop()

    if (!confirmPassword || !password) {
      setFormError('password', {
        type: 'manual',
        message: 'Preencha todos os campos obrigatórios.',
      })
      return
    }

    try {
      const responseResetPassword = await fetch(
        `/api/passwordResetToken?token=${token}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password, confirmPassword, token }),
        },
      )

      if (responseResetPassword.status === 200) {
        console.log(responseResetPassword)
        reset()
      } else {
        console.log('Falha no processo de redefinição da senha.')

        setFormError('password', {
          type: 'manual',
          message: 'Falha no processo de redefinição da senha.',
        })
      }
    } catch (error) {
      console.error('Erro durante o registro:', error)
    }
    setIsSent(true)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-full max-w-md flex-col rounded-lg border-t-4 border-purple-900 p-5 px-4 py-8 shadow-2xl dark:border dark:border-gray-600 sm:px-6 md:px-8 lg:px-10">
        <h1 className="my-4 text-xl font-bold tracking-wide">
          Cadastre uma nova senha
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <p>Você pode redefinir sua senha aqui.</p>
          <div className="relative">
            <Label
              htmlFor="password"
              className="mb-1 text-xs tracking-wide dark:text-gray-300 sm:text-sm sr-only"
            >
              Senha
            </Label>
            <Input
              {...register('password')}
              className="border border-gray-500 px-4 py-2 mb-2"
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              autoComplete="new-password"
              placeholder="Digite sua senha"
              disabled={isLoading}
            />
            <Input
              {...register('confirmPassword')}
              className="border border-gray-500 px-4 py-2"
              type={isPasswordVisible ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              disabled={isLoading}
            />
            <button
              type="button"
              className="absolute inset-y-7 right-0 flex items-center px-2 py-20 xs:py-10 text-gray-600"
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
          </div>
          <span className="text-sm italic text-red-500 dark:text-red-500">
            {errors.password?.message}
          </span>
          {isSent ? (
            <div
              id="alert-border-3"
              className="mb-4 flex border-t-4 border-green-300 bg-transparent p-4 text-green-600 dark:border-green-800 dark:bg-transparent dark:text-green-400"
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
                Senha redefinida com sucesso, retorne a página e faça o seu
                login.
              </div>
            </div>
          ) : null}
          <Button
            type="submit"
            className="ease flex items-center justify-center rounded-md 
            border-2 border-green-700 bg-green-700 px-5 py-3 text-white
            shadow-md transition hover:border-black enabled:hover:border-green-500 enabled:hover:bg-green-500 enabled:hover:text-white disabled:cursor-not-allowed disabled:opacity-75
            dark:hover:border-black enabled:dark:hover:border-green-500 enabled:dark:border-green-700 enabled:dark:bg-green-700 enabled:dark:text-white enabled:dark:hover:bg-green-500
            enabled:dark:hover:text-white
            "
            disabled={isSubmitting}
            title="Redefinir"
          >
            Redefinir Senha
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
  )
}
export default PasswordReset
