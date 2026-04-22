import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Formulário de Briefing - Associação Pró-Paraíso',
  description: 'Briefing para desenvolvimento de website da Associação Pró-Paraíso',
}

export default function BriefingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
