import { getServerSession as originalGetServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../../../lib/auth'
import { cookies, headers } from 'next/headers'
import { UserLoginForm } from '../../../components/login-auth'

export default async function Page() {
  const req = {
    headers: Object.fromEntries(headers() as Headers),
    cookies: Object.fromEntries(
      cookies()
        .getAll()
        .map((c) => [c.name, c.value]),
    ),
  }
  const res = { getHeader() {}, setCookie() {}, setHeader() {} }

  // @ts-ignore
  const session = await originalGetServerSession(req, res, authOptions)

  if (session) redirect('/dashboard')

  return <UserLoginForm />
}
