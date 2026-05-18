import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pré-cadastro nos projetos — Associação Pró-Paraíso',
  description:
    'Inscreva sua criança ou jovem nos projetos esportivos, educacionais e solidários da Associação Pró-Paraíso em Paraisópolis e Jardim Tapicerica.',
}

export default function BriefingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
