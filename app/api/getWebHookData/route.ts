import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/prisma/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from 'lib/auth'

export async function GET(req: NextRequest, res: NextResponse) {
  const data = await getServerSession(authOptions)
  const email = data?.user?.email
  console.log('EMAIL GET', email)

  if (!email) {
    throw new Error('Email is not available')
  }

  try {
    const webhookData = await prisma.payment.findMany({
      // return all data email logged
      where: {
        email,
      },
    })

    console.log('Query GET', email)
    return NextResponse.json(webhookData, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar dados do webhook' },
      { status: 400 },
    )
  }
}
