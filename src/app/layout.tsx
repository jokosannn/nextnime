import type { Metadata } from 'next';
import './globals.css';
import AuthProvider from '@/components/AuthProvider';
import Header from '@/components/Navbar/Header';
import ProgresBarTop from '@/components/ProgresBarTop';
import { gabarito } from '@/libs/fonts';

export const metadata: Metadata = {
  title: 'NextNime',
  description: 'Website Anime Indonesia',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} antialiased`}>
        <AuthProvider>
          <Header />
          <ProgresBarTop>{children}</ProgresBarTop>
        </AuthProvider>
      </body>
    </html>
  );
}
