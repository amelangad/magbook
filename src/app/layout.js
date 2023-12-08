import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ResultProvider} from '../context/ResultContext'
import Providers from '../context/SessionContext'
import {UserProvider} from '../context/UserContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Magbook',
  description: 'Application to express yourself',
}

export default function RootLayout({ children, session }) {
  return (
     <html lang="en">
     <body className={inter.className}>
     <Providers session={session}>
      <ResultProvider>
        <UserProvider>
      <Navbar/>
      {children}
      </UserProvider>
      <Footer/>
      </ResultProvider>
      </Providers>
     </body>
    
  </html>
  )
}