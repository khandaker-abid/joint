import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import { AuthProvider } from '@/components/AuthProvider'
import SmoothScrollHandler from '@/components/SmoothScrollHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joint - Find Local Tradespeople',
  description: 'Connect with skilled tradespeople in your area. From plumbing to electrical work, find the right professional for your home projects.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <Navigation />
            <SmoothScrollHandler />
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}