'use server'

import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'
import { hash } from 'bcryptjs'
// eslint-disable-next-line import/no-named-default
import dayjs from 'dayjs'
import { redirect } from 'next/navigation'

interface IPasswordReset {
  password: string
  confirmPassword: string
  token: string
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json()
  const { confirmPassword, password, token }: IPasswordReset = data
  console.log('ROUTE HANDLER', data)

  if (
    !password ||
    typeof password !== 'string' ||
    password !== confirmPassword
  ) {
    return {
      error:
        'The password did not match. Please try retyping them and Submitting again',
    }
  }

  // for mongodb
  // 4 hours define to expire token
  const dateExpireToken = new Date(Date.now() - 1000 * 60 * 60 * 4)
  dateExpireToken.setUTCMilliseconds(0)
  const formatDate = dateExpireToken.toISOString()
  const date = dayjs().format(formatDate)

  const passwordReset = await prisma.passwordResetToken.findUnique({
    where: {
      token,
      createdAt: {
        gt: date,
      },
      // resetAt: null,
    },
  })

  if (!passwordReset) {
    return {
      error:
        'Invalid token reset request. Please try resetting your password again.',
    }
  }

  const encrypted = await hash(password, 12)

  const updateUser = prisma.user.update({
    where: { id: passwordReset.userId },
    data: {
      hashedPassword: encrypted,
    },
  })

  const updateToken = prisma.passwordResetToken.update({
    where: {
      id: passwordReset.id,
    },
    data: {
      resetAt: new Date(),
    },
  })

  try {
    await prisma.$transaction([updateUser, updateToken])
  } catch (err) {
    console.log(err)
    return {
      error: `An unexpected error occurred. Please try again and if the problem persists, contact support.`,
    }
  }

  redirect('/password-reset/success')
}
