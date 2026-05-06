import type { Metadata, Viewport } from 'next'
import { Roboto, Bebas_Neue } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstallPrompt from '@/components/InstallPrompt'
import ScrollReveal from '@/components/ScrollReveal'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
})

const siteUrl = 'https://proparaiso.org'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Associação Pró-Paraíso — Transformando vidas em Paraisópolis',
    template: '%s | Associação Pró-Paraíso',
  },
  description:
    'Desde 2015 em Paraisópolis: esporte, reforço escolar, campanhas e eventos que transformam a vida de crianças e jovens. Conheça, acompanhe e apoie.',
  applicationName: 'Pró-Paraíso',
  keywords: [
    'Associação Pró-Paraíso',
    'Paraisópolis',
    'ONG São Paulo',
    'reforço escolar',
    'esporte social',
    'doação',
    'voluntariado',
  ],
  manifest: '/manifest.json',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Associação Pró-Paraíso',
    title: 'Associação Pró-Paraíso — Transformando vidas em Paraisópolis',
    description:
      'Amor que transforma, comunidade que cresce. Projetos de esporte, educação e solidariedade em Paraisópolis, São Paulo.',
    images: [
      {
        url: '/logo/icon.png',
        width: 450,
        height: 450,
        alt: 'Associação Pró-Paraíso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Associação Pró-Paraíso',
    description:
      'Amor que transforma, comunidade que cresce. Projetos em Paraisópolis, São Paulo.',
    images: ['/logo/icon.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pró-Paraíso',
  },
  icons: {
    icon: [
      { url: '/logo/icon.svg', type: 'image/svg+xml' },
      { url: '/logo/icon.png', sizes: '450x450', type: 'image/png' },
    ],
    apple: [
      { url: '/logo/icon.png', sizes: '450x450', type: 'image/png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#3B95D2',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${roboto.variable} ${bebas.variable}`}>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <InstallPrompt />
        <ScrollReveal />
      </body>
    </html>
  )
}
