'use server'

import prisma from '@/prisma/prisma'
import { randomUUID } from 'crypto'
import nodemailer from 'nodemailer'
import { render } from '@react-email/render'
import { NextRequest, NextResponse } from 'next/server'
// import { redirect } from 'next/navigation'
import { ResetPasswordEmail } from 'components/send-mail'

const DOMAIN = process.env.DOMAIN || 'http://localhost:3000'
const PROTOCOL = process.env.NODE_ENV === 'production' ? 'https' : 'http'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_MAIL!,
    pass: process.env.EMAIL_PASSWORD!,
  },
})

interface IEmail {
  email: string
}

export async function POST(request: NextRequest, response: NextResponse) {
  const data = await request.json()
  const { email }: IEmail = data

  try {
    if (!email || typeof email !== 'string') {
      return {
        error: 'Invalid email address',
      }
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return {
        error: 'This email is not registered',
      }
    }

    const token = await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token: `${randomUUID()}${randomUUID()}`.replace(/-/g, ''),
      },
    })

    const address = `${PROTOCOL}://${DOMAIN}/password-reset/${token.token}`
    const emailHtml = render(
      // eslint-disable-next-line no-undef
      // @ts-ignore
      ResetPasswordEmail({ token: `${address}`, user: `${user.name}` }),
    )

    // const messageData = {
    //   from: `Store-88 Security <security@thilourenco.noreply>`,
    //   to: user.email!,
    //   subject: 'Store 88 - Redefinição de senha',
    //   html: `Olá ${user.name}, alguém (espero que você) solicitou a redefinição de senha desta conta. Se você deseja redefinir sua senha, clique aqui: ${PROTOCOL}://${DOMAIN}/password-reset/${token.token}

    //   Por motivos de segurança, este link é válido apenas por quatro horas.

    //   Se você não solicitou essa redefinição, ignore este e-mail.`,
    // }

    const messageData = {
      from: 'Store-88 Security <security@thilourenco.noreply>',
      to: user.email!,
      subject: 'Store 88 - Redefinição de senha',
      html: emailHtml,
    }

    await transporter.sendMail(messageData)
    return NextResponse.json({
      message: 'Token generated successfully',
      success: true,
      status: 200,
    })

    // redirect('/forgot-password/success')
  } catch (error) {
    return NextResponse.json({ message: error, success: false, status: 400 })
  }
}
