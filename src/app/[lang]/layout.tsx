import localFont from 'next/font/local'
import { i18n, Locale } from '../../../i18n-config'
import './globals.css'

const primary = localFont({
  src: [
    {
      path: './fonts/f-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/f-regular.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/f-medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/f-mediumitalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/f-semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/f-semibolditalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './fonts/f-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/f-bolditalic.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-primary-sans'
})
const vavob = localFont({
  src: './fonts/vavob.ttf',
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
  title: 'speeds Chain - High-speed  TON earning'
}
