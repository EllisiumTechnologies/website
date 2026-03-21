import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ellisium Technologies | Innovation Beyond Limits',
  description: 'Ellisium Technologies - Building the future with cutting-edge technology solutions. Innovation beyond limits.',
  keywords: 'technology, innovation, software development, 3D, web development',
  authors: [{ name: 'Ellisium Technologies' }],
  openGraph: {
    title: 'Ellisium Technologies | Innovation Beyond Limits',
    description: 'Building the future with cutting-edge technology solutions',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark-400 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
