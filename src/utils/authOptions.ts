import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import bcrypt from 'bcrypt'
import { login, loginWithGoogle } from '@/libs/prisma/service'

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
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECREET || '',
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials') {
        token.email = user.email
        token.username = user.username
      }
      if (account?.provider === 'google') {
        const data = {
          username: user.name,
          email: user.email,
          image: user.image,
        }

        await loginWithGoogle(data, (result: { status: boolean; data: any }) => {
          if (result.status) {
            token.username = result.data.username
            token.email = result.data.email
            token.image = result.data.image
          }
        })
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
      if ('image' in token) {
        session.user.image = token.image
      }
      return session
    },
  },
  pages: {
    signIn: '/login',
  },
}
