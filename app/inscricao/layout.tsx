import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pré-inscrição',
  description: 'Cadastre sua família nos projetos da Associação Pró-Paraíso.',
  robots: { index: true, follow: true },
}

export default function InscricaoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
