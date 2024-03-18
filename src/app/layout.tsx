import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { ClientsProvider } from '@/providers/clients'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fiap Bank',
  description: 'Fiap Bank - A simple banking app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-black`}>
        <ClientsProvider>
          <Header />
          {children}
        </ClientsProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
