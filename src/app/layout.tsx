import type { Metadata } from 'next'
import { Gabarito } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import AuthProvider from '@/components/AuthProvider'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextNime',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={gabarito.className}>
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
