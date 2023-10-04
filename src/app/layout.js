import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'
import AuthProvider from '@/components/AuthProvider/AuthProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gazua Dev Center',
  description: 'Chave mestra soluções. Aplicações web e mobile para atender suas demandas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="icon.svg" type="image/svg"/>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
