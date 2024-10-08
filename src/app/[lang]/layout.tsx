import localFont from 'next/font/local'
import { i18n, Locale } from '../../../i18n-config'
import './globals.css'

const primary = localFont({
  src: [
    {
      path: './fonts/jakarta-regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/jakarta-italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/jakarta-medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/jakarta-mediumitalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: './fonts/jakarta-semibold.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './fonts/jakarta-semibolditalic.ttf',
      weight: '600',
      style: 'italic'
    },
    {
      path: './fonts/jakarta-bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/jakarta-bolditalic.ttf',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-primary-sans'
})
const vavob = localFont({
  src: [
    {
      path: './fonts/jakarta-vavob.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-vavob'
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
