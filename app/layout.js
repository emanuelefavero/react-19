import { Inter } from 'next/font/google'
import './globals.css'
import BackButton from '@/components/BackButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'React 19',
  description: 'This is a demo of React 19 features',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <header>
          <BackButton />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
