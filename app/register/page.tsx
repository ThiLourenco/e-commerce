import { getServerSession } from 'next-auth'

import { UserRegisterForm } from '../../components/register-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../../lib/auth'

export default async function Page() {
  const session = await getServerSession(authOptions)

  if (session) redirect('/dashboard')
  return <UserRegisterForm />
}
