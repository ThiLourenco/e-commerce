'use server'

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'

interface IVerifyUser {
  name: string
  email: string
  password: string
}

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method === 'POST') {
    try {
      const data = await request.json()
      const { email }: IVerifyUser = data
      console.log('ROUTE HANDLER', data)

      // verify user already exists in database
      const userExists = await prisma!.user.findUnique({
        where: {
          email,
        },
      })

      if (!userExists) {
        return NextResponse.json(userExists, { status: 200 })
      } else {
        return NextResponse.json(
          { message: 'E-mail já existente.' },
          { status: 401 },
        )
      }
    } catch (error) {
      console.error('Erro ao verificar usuário:', error)
      return NextResponse.json({ message: 'Erro ao verificar usuário' })
    }
  } else {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 })
  }
}
