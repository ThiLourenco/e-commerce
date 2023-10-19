import { NextAuthOptions, User, Session } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcryptjs'
import prisma from '../prisma/prisma'

export interface ISession extends User {
  user: {
    id: string
    name: string
    email: string
  }
}

function getGoogleCredentials(): { clientId: string; clientSecret: string } {
  const clientId = process.env.GOOGLE_CLIENT_ID!
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET!
  if (!clientId || clientId.length === 0 || clientSecret.length === undefined) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (
    !clientSecret ||
    clientSecret.length === 0 ||
    clientSecret.length === undefined
  ) {
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
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
    CredentialProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req): Promise<any> {
        // console.log('Authorize method', credentials)

        if (!credentials?.email || !credentials?.password)
          throw new Error('Dados de Login necessários')

        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        })

        // console.log('USER', user)

        if (!user || !user.hashedPassword) {
          throw new Error('Usuários não registrado através de credenciais')
        }

        const matchPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword,
        )
        if (!matchPassword) throw new Error('InvalidCredentials')

        return user
      },
    }),
  ],
  callbacks: {
    async session({ token, session, user }): Promise<Session> {
      if (token) {
        session.user!.email = token.email!
      }

      return Promise.resolve(session)
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findFirst({
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
  },
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/login',
  },
}
