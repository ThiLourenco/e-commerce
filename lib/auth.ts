'use service'

import { NextAuthOptions, User, Session } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import prisma from '../prisma/prisma'

export interface MySession extends Session {
  user: {
    id: string
    name: string
    email: string
  }
}

interface IMyUser extends User {
  id: string
  name: string
  email: string
}

function getGoogleCredentials(): { clientId: string; clientSecret: string } {
  const clientId = process.env.GOOGLE_CLIENT_ID!
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!
  if (!clientId || clientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!clientSecret || clientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { clientId, clientSecret }
}

const adapter = PrismaAdapter(prisma!)

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: 'jwt',
  },
  // @see https://github.com/prisma/prisma/issues/16117
  // @ts-ignore
  adapter,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
    CredentialProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<any> {
        console.log('Authorize method', credentials)

        if (!credentials?.email || !credentials?.password)
          throw new Error('Dados de Login necessários')

        const user = await prisma!.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        console.log('USER', user)

        if (!user || !user.hashedPassword) {
          throw new Error('Usuários não registrado através de credenciais')
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        )
        if (!matchPassword) throw new Error('Senha incorreta')

        return user
      },
    }),
  ],
  callbacks: {
    async session({ token, session, user }) {
      if (token) {
        session.user = token.user as IMyUser
      }
      return Promise.resolve(session)
    },
    async jwt({ token, user }) {
      const dbUser = await prisma!.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    // async signIn({ user, account }) {
    //   if (account.provider === 'google') {
    //     const { name, email } = user
    //     try {
    //       const userExists = await prisma!.user.findUnique(email)

    //       if (!userExists) {
    //         const res = await fetch('/api/register', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify({
    //             name,
    //             email,
    //           }),
    //         })

    //         if (res.ok) {
    //           return user
    //         }
    //       }
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }

    //   return user
    // },
  },
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
}
