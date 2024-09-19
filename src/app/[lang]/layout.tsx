import localFont from 'next/font/local'
import { i18n, Locale } from '../../../i18n-config'
import './globals.css'

const primary = localFont({
  src: [
    {
      path: './fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/PlusJakartaSans-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/PlusJakartaSans-Semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/PlusJakartaSans-SemiboldItalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './fonts/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/PlusJakartaSans-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-primary-sans'
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
      <body className={`${primary.variable} ${vavob.variable} antialiased min-h-screen`}>{children}</body>
    </html>
  )
}

export const metadata = {
  title: 'Speeds Chain - High-speed  TON earning'
}
