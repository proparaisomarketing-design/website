'use client'

import { cloneElement, isValidElement, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

type FormData = {
  // Criança
  criancaNome: string
  criancaNascimento: string
  criancaSexo: string
  criancaCpf: string
  criancaRg: string
  criancaEscola: string
  criancaSerie: string
  criancaPeriodo: string

  // Responsável
  responsavelNome: string
  responsavelParentesco: string
  responsavelCpf: string
  responsavelTelefone: string
  responsavelWhatsapp: string
  responsavelEmail: string
  enderecoCep: string
  enderecoRua: string
  enderecoNumero: string
  enderecoComplemento: string
  enderecoBairro: string
  enderecoCidade: string

  // Projetos
  projetos: string[]
  modalidades: string
  disponibilidade: string
  comoConheceu: string

  // Saúde
  alergias: string
  medicamentos: string
  restricoesMedicas: string
  condicoesEspeciais: string

  // Emergência
  emergenciaNome: string
  emergenciaTelefone: string
  emergenciaParentesco: string

  // Autorizações
  autorizaImagem: boolean
  cienteRegulamento: boolean

  observacoes: string
}

const initialData: FormData = {
  criancaNome: '',
  criancaNascimento: '',
  criancaSexo: '',
  criancaCpf: '',
  criancaRg: '',
  criancaEscola: '',
  criancaSerie: '',
  criancaPeriodo: '',
  responsavelNome: '',
  responsavelParentesco: '',
  responsavelCpf: '',
  responsavelTelefone: '',
  responsavelWhatsapp: '',
  responsavelEmail: '',
  enderecoCep: '',
  enderecoRua: '',
  enderecoNumero: '',
  enderecoComplemento: '',
  enderecoBairro: '',
  enderecoCidade: 'São Paulo',
  projetos: [],
  modalidades: '',
  disponibilidade: '',
  comoConheceu: '',
  alergias: '',
  medicamentos: '',
  restricoesMedicas: '',
  condicoesEspeciais: '',
  emergenciaNome: '',
  emergenciaTelefone: '',
  emergenciaParentesco: '',
  autorizaImagem: false,
  cienteRegulamento: false,
  observacoes: '',
}

const PROJETOS_OPCOES = [
  { id: 'esporte-futebol-campo', label: 'Futebol de campo' },
  { id: 'esporte-futsal', label: 'Futsal' },
  { id: 'esporte-society', label: 'Society' },
  { id: 'esporte-karate', label: 'Karatê' },
  { id: 'esporte-judo', label: 'Judô' },
  { id: 'esporte-capoeira', label: 'Capoeira' },
  { id: 'esporte-muaythai', label: 'Muay Thai' },
  { id: 'esporte-zumba', label: 'Zumba' },
  { id: 'esporte-pilates', label: 'Pilates' },
  { id: 'aprender-reforco', label: 'Reforço escolar (Aprender para Crescer)' },
  { id: 'caixinhas-natal', label: 'Caixinhas de Natal' },
  { id: 'solidariedade', label: 'Campanhas solidárias / cesta básica' },
]

const ETAPAS = [
  { id: 1, titulo: 'Criança ou jovem' },
  { id: 2, titulo: 'Responsável e endereço' },
  { id: 3, titulo: 'Projetos de interesse' },
  { id: 4, titulo: 'Saúde e autorizações' },
]

export default function PreCadastroForm() {
  const router = useRouter()
  const [data, setData] = useState<FormData>(initialData)
  const [etapa, setEtapa] = useState(1)
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  const update = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setData((d) => ({ ...d, [field]: value }))
    if (erro) setErro('')
  }

  const toggleProjeto = (id: string) => {
    setData((d) => ({
      ...d,
      projetos: d.projetos.includes(id)
        ? d.projetos.filter((p) => p !== id)
        : [...d.projetos, id],
    }))
  }

  const validarEtapa = (n: number): string => {
    if (n === 1) {
      if (!data.criancaNome.trim()) return 'Informe o nome da criança ou jovem.'
      if (!data.criancaNascimento) return 'Informe a data de nascimento.'
    }
    if (n === 2) {
      if (!data.responsavelNome.trim()) return 'Informe o nome do responsável.'
      if (!data.responsavelParentesco.trim()) return 'Informe o parentesco com a criança.'
      if (!data.responsavelCpf.trim()) return 'Informe o CPF do responsável.'
      if (!data.responsavelTelefone.trim()) return 'Informe um telefone de contato.'
    }
    if (n === 3) {
      if (data.projetos.length === 0) return 'Selecione ao menos um projeto de interesse.'
    }
    if (n === 4) {
      if (!data.cienteRegulamento) return 'É necessário marcar a ciência do regulamento.'
    }
    return ''
  }

  const proxima = () => {
    const e = validarEtapa(etapa)
    if (e) {
      setErro(e)
      return
    }
    setErro('')
    setEtapa((n) => Math.min(n + 1, ETAPAS.length))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const anterior = () => {
    setErro('')
    setEtapa((n) => Math.max(n - 1, 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const enviar = async () => {
    const e = validarEtapa(4)
    if (e) {
      setErro(e)
      return
    }
    setEnviando(true)
    try {
      const res = await fetch('/api/inscricoes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Erro ao enviar inscrição.')
      }
      router.push('/cadastre-se/success')
    } catch (err) {
      setErro(err instanceof Error ? err.message : 'Erro ao enviar inscrição.')
      setEnviando(false)
    }
  }

  return (
    <div className="bg-ngo-cream min-h-screen">
      {/* Cabeçalho */}
      <section className="bg-secondary-dark text-white pt-16 pb-12 md:pt-20 md:pb-16">
        <div className="container-custom">
          <span className="inline-block text-ngo-yellow text-xs font-semibold uppercase tracking-wider border-b-2 border-ngo-yellow pb-1 mb-4">
            Pré-cadastro
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 font-sans">
            Inscreva sua criança ou jovem em nossos projetos
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Preencha o pré-cadastro abaixo. Nossa equipe entra em contato pelo WhatsApp para confirmar a vaga e combinar a apresentação na unidade.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          {/* Progresso */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              {ETAPAS.map((e, i) => {
                const ativa = etapa === e.id
                const feita = etapa > e.id
                return (
                  <div key={e.id} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition ${
                          feita
                            ? 'bg-ngo-green text-white'
                            : ativa
                            ? 'bg-ngo-orange text-white'
                            : 'bg-white text-ngo-text-muted border-2 border-ngo-border'
                        }`}
                      >
                        {feita ? '✓' : e.id}
                      </div>
                      <span
                        className={`hidden md:block text-xs mt-2 text-center max-w-[120px] ${
                          ativa ? 'text-ngo-text font-semibold' : 'text-ngo-text-muted'
                        }`}
                      >
                        {e.titulo}
                      </span>
                    </div>
                    {i < ETAPAS.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 rounded ${
                          etapa > e.id ? 'bg-ngo-green' : 'bg-ngo-border'
                        }`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
            <p className="text-center text-sm text-ngo-text-muted md:hidden">
              Etapa {etapa} de {ETAPAS.length}: {ETAPAS[etapa - 1].titulo}
            </p>
          </div>

          {/* Card do formulário */}
          <div className="bg-white rounded-2xl shadow-card p-6 md:p-10">
            {etapa === 1 && (
              <Etapa1 data={data} update={update} />
            )}
            {etapa === 2 && (
              <Etapa2 data={data} update={update} />
            )}
            {etapa === 3 && (
              <Etapa3
                data={data}
                update={update}
                toggleProjeto={toggleProjeto}
              />
            )}
            {etapa === 4 && (
              <Etapa4 data={data} update={update} />
            )}

            {erro && (
              <div className="mt-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
                {erro}
              </div>
            )}

            {/* Navegação */}
            <div className="mt-10 flex flex-col-reverse sm:flex-row gap-3 sm:justify-between">
              {etapa > 1 ? (
                <button
                  type="button"
                  onClick={anterior}
                  className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-6 py-3 rounded-full border border-ngo-border hover:bg-ngo-cream transition"
                >
                  ← Voltar
                </button>
              ) : (
                <div />
              )}

              {etapa < ETAPAS.length ? (
                <button
                  type="button"
                  onClick={proxima}
                  className="inline-flex items-center justify-center bg-ngo-orange text-white font-semibold px-8 py-3 rounded-full hover:bg-secondary-dark transition"
                >
                  Continuar →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={enviar}
                  disabled={enviando}
                  className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-bold px-8 py-3 rounded-full hover:bg-ngo-yellow/90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {enviando ? 'Enviando…' : 'Enviar pré-cadastro'}
                </button>
              )}
            </div>
          </div>

          <p className="text-center text-xs text-ngo-text-muted mt-6">
            Seus dados são utilizados apenas para o cadastro nos projetos da Associação Pró-Paraíso e não são compartilhados com terceiros.
          </p>
        </div>
      </section>
    </div>
  )
}

/* ============================= ETAPAS ============================= */

type StepProps = {
  data: FormData
  update: <K extends keyof FormData>(field: K, value: FormData[K]) => void
}

function Etapa1({ data, update }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-ngo-text mb-2 font-sans">
        Sobre a criança ou jovem
      </h2>
      <p className="text-ngo-text-muted mb-8">
        Quem vai participar dos projetos.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nome completo *" full>
          <input
            type="text"
            value={data.criancaNome}
            onChange={(e) => update('criancaNome', e.target.value)}
            className={inputCls}
            placeholder="Ex.: Maria de Souza"
          />
        </Field>

        <Field label="Data de nascimento *">
          <input
            type="date"
            value={data.criancaNascimento}
            onChange={(e) => update('criancaNascimento', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Sexo">
          <select
            value={data.criancaSexo}
            onChange={(e) => update('criancaSexo', e.target.value)}
            className={inputCls}
          >
            <option value="">Selecionar</option>
            <option value="feminino">Feminino</option>
            <option value="masculino">Masculino</option>
            <option value="outro">Outro / prefiro não dizer</option>
          </select>
        </Field>

        <Field label="CPF (se tiver)">
          <input
            type="text"
            value={data.criancaCpf}
            onChange={(e) => update('criancaCpf', e.target.value)}
            className={inputCls}
            placeholder="000.000.000-00"
          />
        </Field>

        <Field label="RG (se tiver)">
          <input
            type="text"
            value={data.criancaRg}
            onChange={(e) => update('criancaRg', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Escola onde estuda" full>
          <input
            type="text"
            value={data.criancaEscola}
            onChange={(e) => update('criancaEscola', e.target.value)}
            className={inputCls}
            placeholder="Nome da escola"
          />
        </Field>

        <Field label="Série / ano escolar">
          <input
            type="text"
            value={data.criancaSerie}
            onChange={(e) => update('criancaSerie', e.target.value)}
            className={inputCls}
            placeholder="Ex.: 4º ano"
          />
        </Field>

        <Field label="Período na escola">
          <select
            value={data.criancaPeriodo}
            onChange={(e) => update('criancaPeriodo', e.target.value)}
            className={inputCls}
          >
            <option value="">Selecionar</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="integral">Integral</option>
          </select>
        </Field>
      </div>
    </div>
  )
}

function Etapa2({ data, update }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-ngo-text mb-2 font-sans">
        Responsável e endereço
      </h2>
      <p className="text-ngo-text-muted mb-8">
        Dados de quem responde pela criança ou jovem.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Nome do responsável *" full>
          <input
            type="text"
            value={data.responsavelNome}
            onChange={(e) => update('responsavelNome', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Parentesco *">
          <select
            value={data.responsavelParentesco}
            onChange={(e) => update('responsavelParentesco', e.target.value)}
            className={inputCls}
          >
            <option value="">Selecionar</option>
            <option value="mae">Mãe</option>
            <option value="pai">Pai</option>
            <option value="avo">Avó / Avô</option>
            <option value="tio">Tia / Tio</option>
            <option value="irmao">Irmã / Irmão</option>
            <option value="responsavel-legal">Responsável legal</option>
            <option value="o-proprio">A própria pessoa (jovem maior)</option>
            <option value="outro">Outro</option>
          </select>
        </Field>

        <Field label="CPF do responsável *">
          <input
            type="text"
            value={data.responsavelCpf}
            onChange={(e) => update('responsavelCpf', e.target.value)}
            className={inputCls}
            placeholder="000.000.000-00"
          />
        </Field>

        <Field label="Telefone *">
          <input
            type="tel"
            value={data.responsavelTelefone}
            onChange={(e) => update('responsavelTelefone', e.target.value)}
            className={inputCls}
            placeholder="(11) 90000-0000"
          />
        </Field>

        <Field label="WhatsApp (se diferente)">
          <input
            type="tel"
            value={data.responsavelWhatsapp}
            onChange={(e) => update('responsavelWhatsapp', e.target.value)}
            className={inputCls}
            placeholder="(11) 90000-0000"
          />
        </Field>

        <Field label="E-mail" full>
          <input
            type="email"
            value={data.responsavelEmail}
            onChange={(e) => update('responsavelEmail', e.target.value)}
            className={inputCls}
            placeholder="seuemail@exemplo.com"
          />
        </Field>

        <div className="md:col-span-2 border-t border-ngo-border pt-6 mt-2">
          <h3 className="font-bebas text-2xl text-ngo-text tracking-wide mb-4">Endereço</h3>
        </div>

        <Field label="CEP">
          <input
            type="text"
            value={data.enderecoCep}
            onChange={(e) => update('enderecoCep', e.target.value)}
            className={inputCls}
            placeholder="00000-000"
          />
        </Field>

        <Field label="Bairro">
          <input
            type="text"
            value={data.enderecoBairro}
            onChange={(e) => update('enderecoBairro', e.target.value)}
            className={inputCls}
            placeholder="Ex.: Paraisópolis"
          />
        </Field>

        <Field label="Rua / logradouro" full>
          <input
            type="text"
            value={data.enderecoRua}
            onChange={(e) => update('enderecoRua', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Número">
          <input
            type="text"
            value={data.enderecoNumero}
            onChange={(e) => update('enderecoNumero', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Complemento">
          <input
            type="text"
            value={data.enderecoComplemento}
            onChange={(e) => update('enderecoComplemento', e.target.value)}
            className={inputCls}
            placeholder="Apto, bloco, referência"
          />
        </Field>

        <Field label="Cidade">
          <input
            type="text"
            value={data.enderecoCidade}
            onChange={(e) => update('enderecoCidade', e.target.value)}
            className={inputCls}
          />
        </Field>
      </div>
    </div>
  )
}

function Etapa3({
  data,
  update,
  toggleProjeto,
}: StepProps & { toggleProjeto: (id: string) => void }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-ngo-text mb-2 font-sans">
        Projetos de interesse
      </h2>
      <p className="text-ngo-text-muted mb-8">
        Marque uma ou mais atividades. Confirmamos depois conforme vagas e horários disponíveis.
      </p>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {PROJETOS_OPCOES.map((p) => {
          const checked = data.projetos.includes(p.id)
          return (
            <label
              key={p.id}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition ${
                checked
                  ? 'border-ngo-orange bg-ngo-orange/5'
                  : 'border-ngo-border hover:border-ngo-orange/40 hover:bg-ngo-cream'
              }`}
            >
              <input
                type="checkbox"
                checked={checked}
                onChange={() => toggleProjeto(p.id)}
                className="w-5 h-5 accent-ngo-orange"
              />
              <span className="text-ngo-text font-medium">{p.label}</span>
            </label>
          )
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Disponibilidade preferida">
          <select
            value={data.disponibilidade}
            onChange={(e) => update('disponibilidade', e.target.value)}
            className={inputCls}
          >
            <option value="">Selecionar</option>
            <option value="manha">Manhã</option>
            <option value="tarde">Tarde</option>
            <option value="noite">Noite</option>
            <option value="qualquer">Qualquer horário</option>
          </select>
        </Field>

        <Field label="Como conheceu a Pró-Paraíso?">
          <select
            value={data.comoConheceu}
            onChange={(e) => update('comoConheceu', e.target.value)}
            className={inputCls}
          >
            <option value="">Selecionar</option>
            <option value="indicacao">Indicação de amigo / familiar</option>
            <option value="comunidade">Vi na comunidade</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="site">Site</option>
            <option value="escola">Pela escola</option>
            <option value="outro">Outro</option>
          </select>
        </Field>

        <Field label="Observações sobre os horários ou modalidades" full>
          <textarea
            value={data.modalidades}
            onChange={(e) => update('modalidades', e.target.value)}
            className={`${inputCls} min-h-[100px]`}
            placeholder="Ex.: prefere treinar de manhã, já fez karatê antes, etc."
          />
        </Field>
      </div>
    </div>
  )
}

function Etapa4({ data, update }: StepProps) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-ngo-text mb-2 font-sans">
        Saúde, emergência e autorizações
      </h2>
      <p className="text-ngo-text-muted mb-8">
        Informações para cuidar com segurança da criança ou jovem.
      </p>

      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Alergias" full>
          <input
            type="text"
            value={data.alergias}
            onChange={(e) => update('alergias', e.target.value)}
            className={inputCls}
            placeholder="Alimentos, medicamentos, etc. (deixe em branco se não houver)"
          />
        </Field>

        <Field label="Medicamentos de uso contínuo">
          <input
            type="text"
            value={data.medicamentos}
            onChange={(e) => update('medicamentos', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Restrições médicas para atividade física">
          <input
            type="text"
            value={data.restricoesMedicas}
            onChange={(e) => update('restricoesMedicas', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Condições especiais (TEA, TDAH, deficiências, etc.)" full>
          <input
            type="text"
            value={data.condicoesEspeciais}
            onChange={(e) => update('condicoesEspeciais', e.target.value)}
            className={inputCls}
            placeholder="Nos ajuda a acolher melhor"
          />
        </Field>

        <div className="md:col-span-2 border-t border-ngo-border pt-6 mt-2">
          <h3 className="font-bebas text-2xl text-ngo-text tracking-wide mb-4">
            Contato de emergência
          </h3>
        </div>

        <Field label="Nome">
          <input
            type="text"
            value={data.emergenciaNome}
            onChange={(e) => update('emergenciaNome', e.target.value)}
            className={inputCls}
          />
        </Field>

        <Field label="Telefone">
          <input
            type="tel"
            value={data.emergenciaTelefone}
            onChange={(e) => update('emergenciaTelefone', e.target.value)}
            className={inputCls}
            placeholder="(11) 90000-0000"
          />
        </Field>

        <Field label="Parentesco" full>
          <input
            type="text"
            value={data.emergenciaParentesco}
            onChange={(e) => update('emergenciaParentesco', e.target.value)}
            className={inputCls}
            placeholder="Ex.: tia, vizinha de confiança"
          />
        </Field>

        <Field label="Observações finais" full>
          <textarea
            value={data.observacoes}
            onChange={(e) => update('observacoes', e.target.value)}
            className={`${inputCls} min-h-[80px]`}
            placeholder="Algo mais que queira nos contar"
          />
        </Field>
      </div>

      <div className="mt-8 space-y-4 border-t border-ngo-border pt-6">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.autorizaImagem}
            onChange={(e) => update('autorizaImagem', e.target.checked)}
            className="w-5 h-5 accent-ngo-orange mt-0.5 flex-shrink-0"
          />
          <span className="text-sm text-ngo-text-muted leading-relaxed">
            Autorizo o uso de imagem da criança/jovem em fotos e vídeos das atividades, em redes sociais e materiais institucionais da Associação Pró-Paraíso.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.cienteRegulamento}
            onChange={(e) => update('cienteRegulamento', e.target.checked)}
            className="w-5 h-5 accent-ngo-orange mt-0.5 flex-shrink-0"
          />
          <span className="text-sm text-ngo-text-muted leading-relaxed">
            Estou ciente que este é um pré-cadastro e que a vaga só é confirmada após contato da equipe e apresentação na unidade. *
          </span>
        </label>
      </div>
    </div>
  )
}

/* ============================= UI helpers ============================= */

const inputCls =
  'w-full px-4 py-3 rounded-lg border border-ngo-border bg-white text-ngo-text placeholder:text-ngo-text-muted/60 focus:outline-none focus:border-ngo-orange focus:ring-2 focus:ring-ngo-orange/20 transition'

function Field({
  label,
  full,
  children,
}: {
  label: string
  full?: boolean
  children: React.ReactNode
}) {
  const id = useId()
  const child = isValidElement(children)
    ? cloneElement(children as React.ReactElement<{ id?: string }>, { id })
    : children
  return (
    <div className={full ? 'md:col-span-2' : ''}>
      <label htmlFor={id} className="block text-sm font-medium text-ngo-text mb-2">
        {label}
      </label>
      {child}
    </div>
  )
}
