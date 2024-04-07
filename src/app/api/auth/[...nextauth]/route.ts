import { login } from '@/libs/prisma/service'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET_ID,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'example@gamil.com' },
        password: { label: 'Pasword', type: 'password', placeholder: '********' },
      },
      async authorize(credentials) {
        const data = credentials as {
          email: string
          password: string
        }
        const user: any = await login(data)
        if (user) {
          const passwordCompare = await bcrypt.compare(data.password, user.password)
          if (passwordCompare) {
            return user
          } else {
            return null
          }
        } else {
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials') {
        token.email = user.email
        token.username = user.username
      }
      return token
    },
    async session({ session, token }: any) {
      if ('email' in token) {
        session.user.email = token.email
      }
      if ('username' in token) {
        session.user.name = token.username
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
