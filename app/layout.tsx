import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import BackButton from '@/components/BackButton'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'React 19',
  description: 'This is a demo of React 19 features',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <BackButton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
