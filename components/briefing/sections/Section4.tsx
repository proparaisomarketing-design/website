import { useEffect } from 'react'

interface Section4Props {
  savedData?: Record<string, string>
}

export default function BriefingSection4({ savedData }: Section4Props) {
  useEffect(() => {
    if (savedData) {
      Object.keys(savedData).forEach(key => {
        const input = document.querySelector(`[name="${key}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        if (input) {
          input.value = savedData[key]
        }
      })
    }
  }, [savedData])

  return (
    <div>
      <h2>👥 BLOCO 4 — PÚBLICOS E COMUNIDADE (INSCRIÇÃO & ATENDIMENTO)</h2>
      <p>Objetivo: descrever claramente quem pode participar, como se inscrever e como funciona o atendimento (critérios, vagas, rotinas, direitos e deveres).</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">👤</div>
      <div>
      <h2>4.1 PERFIL DOS BENEFICIÁRIOS (QUEM ATENDEMOS)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Philip Kotler — segmentação orientada a valor
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem são as pessoas que a Associação atende (perfil simples e direto)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="beneficiary_profile" placeholder="Guia de resposta: Idade/ano escolar, bairro/comunidade, situação de vulnerabilidade, necessidades principais (reforço, alimentação, convivência), prioridade de atendimento."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">👥</div>
      <div>
      <h2>4.2 PÚBLICOS ENVOLVIDOS NAS ATIVIDADES (INTERNO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> John Kania & Mark Kramer — impacto coletivo local
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Além dos beneficiários, quem participa diretamente das atividades? (apenas internos)
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="internal_publics" placeholder="Guia de resposta: Responsáveis/famílias, educadores, monitores, equipe de apoio, direção/coordenação, conselhos escolares/comunitários. Explique o papel de cada um nas rotinas."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">✅</div>
      <div>
      <h2>4.3 CRITÉRIOS DE ELEGIBILIDADE & PRIORIDADE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> UNICEF — foco em equidade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais critérios definem quem pode se inscrever e quem tem prioridade?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="eligibility_criteria" placeholder="Guia de resposta: Faixa etária, residência na região, matrícula escolar, situação socioeconômica, laudo/necessidade específica, prioridade (ex.: lista única, casos urgentes)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📝</div>
      <div>
      <h2>4.4 COMO SE INSCREVER (PASSO A PASSO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Steve Krug — clareza no caminho
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o passo a passo para inscrição no projeto?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="enrollment_process" placeholder="Guia de resposta: Onde se inscreve (site/WhatsApp/presencial), dias/horários, confirmação, prazo de resposta, contato de dúvidas. Use: 'Passo 1 → Passo 2 → Passo 3'."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📄</div>
      <div>
      <h2>4.5 DOCUMENTOS & AUTORIZAÇÕES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Estatuto da Criança e do Adolescente (ECA)
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais documentos e autorizações são necessários para a inscrição?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="documents_authorizations" placeholder="Guia de resposta: RG/CPF (responsável), certidão ou RG da criança, comprovante de residência, declaração escolar, autorização de imagem (opcional com escolha), laudos (se houver)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📋</div>
      <div>
      <h2>4.6 VAGAS, TURMAS & LISTA DE ESPERA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — transparência operacional
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quantas vagas existem, como as turmas são formadas e como funciona a lista de espera?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="vacancies_waitlist" placeholder="Guia de resposta: Capacidade por turma/turno, critérios de alocação, duração do atendimento, como avisamos quando surge vaga, validade da inscrição."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🕐</div>
      <div>
      <h2>4.7 ROTINA & HORÁRIOS DE ATENDIMENTO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> NN/g — informação prática primeiro
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são os dias, horários e atividades oferecidos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="schedule_routine" placeholder="Guia de resposta: Grade semanal simples (ex.: seg/qua leitura; ter/qui matemática; sex projetos), tempo de cada encontro, local e pontualidade."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">♿</div>
      <div>
      <h2>4.8 INCLUSÃO, ACESSIBILIDADE & APOIOS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> W3C (WCAG) / OMS — acesso para todos
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que adaptações e apoios oferecemos para garantir participação de todos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="inclusion_accessibility" placeholder="Guia de resposta: Acessos físicos, linguagem simples, materiais adaptados, acompanhamento individual, responsáveis de referência, contato para necessidades específicas."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🛡️</div>
      <div>
      <h2>4.9 CUIDADOS, PROTEÇÃO & PRIVACIDADE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> LGPD / ECA — segurança de dados e proteção integral
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são os cuidados com segurança, imagem e dados dos participantes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="protection_privacy" placeholder="Guia de resposta: Política de uso de imagem, registros fotográficos com consentimento, proteção de dados (LGPD), condutas seguras em atividades e transporte."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">⚖️</div>
      <div>
      <h2>4.10 DIREITOS & DEVERES (CÓDIGO DE CONVIVÊNCIA)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Paulo Freire — respeito e corresponsabilidade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são os direitos dos participantes e os deveres para boa convivência?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="rights_duties" placeholder="Guia de resposta: Direitos (acolhimento, respeito, segurança). Deveres (assiduidade, cuidado com materiais, respeito às pessoas). Consequências pedagógicas em caso de descumprimento."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📊</div>
      <div>
      <h2>4.11 ACOMPANHAMENTO & RESULTADOS PARA FAMÍLIAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> James Heckman — importância do acompanhamento
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como as famílias serão informadas sobre a evolução das crianças/adolescentes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="family_followup" placeholder="Guia de resposta: Reuniões periódicas, bilhetes/WhatsApp, relatórios simples (bimestral/trimestral), convite para eventos/apresentações."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📞</div>
      <div>
      <h2>4.12 CONTATO & CANAIS DE DÚVIDAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> IDEO — foco no humano
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são os canais oficiais para tirar dúvidas sobre atendimento e inscrição?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="contact_channels" placeholder="Guia de resposta: WhatsApp da coordenação, e-mail institucional, atendimento presencial (dias/horários), tempo médio de resposta."></textarea>
      </div>
    </div>
  )
}
