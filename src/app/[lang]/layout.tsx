import localFont from 'next/font/local'
import './globals.css'
import { i18n, Locale } from '../../../i18n-config'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

const primary = localFont({
  src: './fonts/PlusJakartaSans-Regular.ttf',
  variable: '--font-primary-sans',
  weight: '400'
})
const vavob = localFont({
  src: './fonts/VAVOB.ttf',
  variable: '--font-vavob',
  weight: '700'
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${primary.variable} ${vavob.variable} antialiased min-h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'Speeds Chain - High-speed  TON earning'
}
