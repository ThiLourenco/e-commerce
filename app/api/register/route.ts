import prisma from '@/prisma/prisma'

import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

interface IRegistre {
  name: string
  email: string
  password: string
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json()
  const { name, email, password }: IRegistre = data
  console.log('ROUTE HANDLER', data)

  if (!name || !email || !password) {
    return NextResponse.json('Failed to register user, check your details.', {
      status: 400,
    })
  }

  const isUserExists = await prisma!.user.findUnique({
    where: {
      email,
    },
  })

  if (isUserExists) {
    return NextResponse.json({ error: 'User already exists.' }, { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma!.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  })

  return NextResponse.json(user)
}
