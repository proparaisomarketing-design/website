import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

function str(v: unknown): string | null {
  if (typeof v !== 'string') return null
  const trimmed = v.trim()
  return trimmed.length ? trimmed : null
}

function bool(v: unknown): boolean {
  return v === true || v === 'true' || v === 'on' || v === 1
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const criancaNome = str(body.criancaNome)
    const criancaNascimento = str(body.criancaNascimento)
    const responsavelNome = str(body.responsavelNome)
    const responsavelCpf = str(body.responsavelCpf)
    const responsavelTelefone = str(body.responsavelTelefone)
    const responsavelParentesco = str(body.responsavelParentesco)

    if (!criancaNome || !criancaNascimento) {
      return NextResponse.json(
        { success: false, message: 'Nome e data de nascimento da criança são obrigatórios.' },
        { status: 400 }
      )
    }
    if (!responsavelNome || !responsavelCpf || !responsavelTelefone || !responsavelParentesco) {
      return NextResponse.json(
        { success: false, message: 'Dados do responsável são obrigatórios (nome, parentesco, CPF e telefone).' },
        { status: 400 }
      )
    }

    const projetosArray = Array.isArray(body.projetos) ? body.projetos.filter((p: unknown) => typeof p === 'string') : []
    if (projetosArray.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Selecione ao menos um projeto.' },
        { status: 400 }
      )
    }

    if (!bool(body.cienteRegulamento)) {
      return NextResponse.json(
        { success: false, message: 'É necessário confirmar ciência do regulamento.' },
        { status: 400 }
      )
    }

    const inscricao = await prisma.inscricao.create({
      data: {
        criancaNome,
        criancaNascimento,
        criancaSexo: str(body.criancaSexo),
        criancaCpf: str(body.criancaCpf),
        criancaRg: str(body.criancaRg),
        criancaEscola: str(body.criancaEscola),
        criancaSerie: str(body.criancaSerie),
        criancaPeriodo: str(body.criancaPeriodo),

        responsavelNome,
        responsavelParentesco,
        responsavelCpf,
        responsavelTelefone,
        responsavelWhatsapp: str(body.responsavelWhatsapp),
        responsavelEmail: str(body.responsavelEmail),

        enderecoCep: str(body.enderecoCep),
        enderecoRua: str(body.enderecoRua),
        enderecoNumero: str(body.enderecoNumero),
        enderecoComplemento: str(body.enderecoComplemento),
        enderecoBairro: str(body.enderecoBairro),
        enderecoCidade: str(body.enderecoCidade),

        projetos: JSON.stringify(projetosArray),
        modalidades: str(body.modalidades),
        disponibilidade: str(body.disponibilidade),

        alergias: str(body.alergias),
        medicamentos: str(body.medicamentos),
        restricoesMedicas: str(body.restricoesMedicas),
        condicoesEspeciais: str(body.condicoesEspeciais),

        emergenciaNome: str(body.emergenciaNome),
        emergenciaTelefone: str(body.emergenciaTelefone),
        emergenciaParentesco: str(body.emergenciaParentesco),

        autorizaImagem: bool(body.autorizaImagem),
        cienteRegulamento: bool(body.cienteRegulamento),

        comoConheceu: str(body.comoConheceu),
        observacoes: str(body.observacoes),
      },
    })

    return NextResponse.json({ success: true, id: inscricao.id })
  } catch (err) {
    console.error('[inscricao] erro ao salvar:', err)
    return NextResponse.json(
      { success: false, message: 'Erro interno ao registrar inscrição.' },
      { status: 500 }
    )
  }
}
