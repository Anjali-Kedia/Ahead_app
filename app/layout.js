import { Navbar } from '../components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ahead App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={ `${inter.className} bg-white h-full`}>
        
        
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
