import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nevzat Ayaz Anadolu Lisesi',
  description: 'Nevzat Ayaz Anadolu Lisesi öğrenci e-posta sistemi',
  keywords: 'Nevzat Ayaz Anadolu Lisesi, e-posta sistemi, okul websitesi',
  authors: [{ name: 'Nevzat Ayaz Anadolu Lisesi' }],
  creator: 'Nevzat Ayaz Anadolu Lisesi',
  publisher: 'Nevzat Ayaz Anadolu Lisesi',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
