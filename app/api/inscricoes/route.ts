import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

function s(v: unknown): string | undefined {
  if (v === null || v === undefined) return undefined
  const t = String(v).trim()
  return t.length ? t : undefined
}

function req(v: unknown, field: string): string {
  const t = s(v)
  if (!t) throw new Error(`Campo obrigatório: ${field}`)
  return t
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const projetos: string[] = Array.isArray(body.projetos)
      ? body.projetos.map((p: unknown) => String(p))
      : []

    const inscricao = await prisma.inscricao.create({
      data: {
        criancaNome: req(body.criancaNome, 'Nome da criança/jovem'),
        criancaNascimento: req(body.criancaNascimento, 'Data de nascimento'),
        criancaSexo: s(body.criancaSexo),
        criancaCpf: s(body.criancaCpf),
        criancaRg: s(body.criancaRg),
        criancaEscola: s(body.criancaEscola),
        criancaSerie: s(body.criancaSerie),
        criancaPeriodo: s(body.criancaPeriodo),

        responsavelNome: req(body.responsavelNome, 'Nome do responsável'),
        responsavelParentesco: req(body.responsavelParentesco, 'Parentesco'),
        responsavelCpf: req(body.responsavelCpf, 'CPF do responsável'),
        responsavelTelefone: req(body.responsavelTelefone, 'Telefone'),
        responsavelWhatsapp: s(body.responsavelWhatsapp),
        responsavelEmail: s(body.responsavelEmail),
        enderecoCep: s(body.enderecoCep),
        enderecoRua: s(body.enderecoRua),
        enderecoNumero: s(body.enderecoNumero),
        enderecoComplemento: s(body.enderecoComplemento),
        enderecoBairro: s(body.enderecoBairro),
        enderecoCidade: s(body.enderecoCidade),

        projetos: JSON.stringify(projetos),
        modalidades: s(body.modalidades),
        disponibilidade: s(body.disponibilidade),

        alergias: s(body.alergias),
        medicamentos: s(body.medicamentos),
        restricoesMedicas: s(body.restricoesMedicas),
        condicoesEspeciais: s(body.condicoesEspeciais),

        emergenciaNome: s(body.emergenciaNome),
        emergenciaTelefone: s(body.emergenciaTelefone),
        emergenciaParentesco: s(body.emergenciaParentesco),

        autorizaImagem: Boolean(body.autorizaImagem),
        cienteRegulamento: Boolean(body.cienteRegulamento),

        comoConheceu: s(body.comoConheceu),
        observacoes: s(body.observacoes),
      },
    })

    return NextResponse.json({ success: true, id: inscricao.id })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro ao salvar inscrição'
    const status = message.startsWith('Campo obrigatório') ? 400 : 500
    console.error('Erro /api/inscricoes:', error)
    return NextResponse.json({ success: false, message }, { status })
  }
}
