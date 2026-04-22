import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InstallPrompt from '@/components/InstallPrompt'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Associação Pró-Paraíso - Transformando vidas através do cuidado',
  description: 'Associação Pró-Paraíso: Amor que transforma, comunidade que cresce. Atuando em Paraisópolis, São Paulo, desde 2015.',
  manifest: '/manifest.json',
  themeColor: '#0037FE',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Pró-Paraíso',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
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
