'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import InscricaoSidebar from './InscricaoSidebar'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'
import Section4 from './sections/Section4'
import Section5 from './sections/Section5'

const TOTAL_SECTIONS = 5

export default function InscricaoForm() {
  const [currentSection, setCurrentSection] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const collectFormData = () => {
    if (!formRef.current) return {}
    const fd = new FormData(formRef.current)
    const data: Record<string, string | string[] | boolean> = {}
    const projetos: string[] = []

    fd.forEach((value, key) => {
      if (key.startsWith('projeto_')) {
        if (value) projetos.push(value.toString())
        return
      }
      if (key === 'autorizaImagem' || key === 'cienteRegulamento') {
        data[key] = value === 'true'
        return
      }
      data[key] = value.toString()
    })

    data.projetos = projetos
    return data
  }

  const handleNext = () => {
    if (currentSection < TOTAL_SECTIONS) {
      setCurrentSection(currentSection + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleNavigate = (section: number) => {
    if (section >= 1 && section <= TOTAL_SECTIONS) {
      setCurrentSection(section)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    const data = collectFormData()

    // Validações mínimas
    if (!data.criancaNome || !data.criancaNascimento) {
      setError('Preencha o nome e data de nascimento da criança/jovem (etapa 1).')
      setCurrentSection(1)
      return
    }
    if (!data.responsavelNome || !data.responsavelCpf || !data.responsavelTelefone) {
      setError('Preencha os dados do responsável (etapa 2).')
      setCurrentSection(2)
      return
    }
    if (!Array.isArray(data.projetos) || data.projetos.length === 0) {
      setError('Selecione ao menos um projeto (etapa 3).')
      setCurrentSection(3)
      return
    }
    if (!data.cienteRegulamento) {
      setError('É necessário confirmar ciência do regulamento (etapa 5).')
      setCurrentSection(5)
      return
    }

    setSubmitting(true)
    try {
      const res = await fetch('/api/inscricao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message || 'Erro ao enviar inscrição.')
      }
      router.push('/inscricao/sucesso')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Erro inesperado ao enviar.')
      setSubmitting(false)
    }
  }

  return (
    <div className="briefing-container">
      <div className="main-layout">
        <InscricaoSidebar currentSection={currentSection} onNavigate={handleNavigate} />

        <main className="content">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div style={{ display: currentSection === 1 ? 'block' : 'none' }}>
              <Section1 />
            </div>
            <div style={{ display: currentSection === 2 ? 'block' : 'none' }}>
              <Section2 />
            </div>
            <div style={{ display: currentSection === 3 ? 'block' : 'none' }}>
              <Section3 />
            </div>
            <div style={{ display: currentSection === 4 ? 'block' : 'none' }}>
              <Section4 />
            </div>
            <div style={{ display: currentSection === 5 ? 'block' : 'none' }}>
              <Section5 />
            </div>

            {error && (
              <div style={{
                padding: '14px 18px',
                borderRadius: '10px',
                background: '#FFF3CD',
                border: '1px solid #F4A900',
                color: '#6B4E00',
                marginTop: '20px',
              }}>
                ⚠️ {error}
              </div>
            )}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: '1px solid #E5E5E5',
              gap: '12px',
              flexWrap: 'wrap',
            }}>
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentSection === 1 || submitting}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  border: '1px solid #E5E5E5',
                  background: '#fff',
                  color: '#1D2130',
                  fontWeight: 500,
                  cursor: currentSection === 1 ? 'not-allowed' : 'pointer',
                  opacity: currentSection === 1 ? 0.4 : 1,
                }}
              >
                ← Anterior
              </button>

              <div style={{ color: '#525560', fontSize: '14px' }}>
                Etapa {currentSection} de {TOTAL_SECTIONS}
              </div>

              {currentSection < TOTAL_SECTIONS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={submitting}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#1F6FA8',
                    color: 'white',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Próxima →
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    padding: '12px 28px',
                    borderRadius: '8px',
                    border: 'none',
                    background: submitting ? '#525560' : '#60852D',
                    color: 'white',
                    fontWeight: 600,
                    cursor: submitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {submitting ? 'Enviando...' : '✓ Enviar pré-inscrição'}
                </button>
              )}
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}
