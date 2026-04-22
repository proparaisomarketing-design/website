import { useEffect } from 'react'

interface Section7Props {
  savedData?: Record<string, string>
}

export default function BriefingSection7({ savedData }: Section7Props) {
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
      <h2>🎯 BLOCO 7 — METAS, PARCERIAS E CRITÉRIOS DE SUCESSO (VERSÃO COMPLETA)</h2>
      <p>Objetivo: definir metas claras, parcerias-alvo, rotinas, políticas e critérios de sucesso (quantitativos e qualitativos) para guiar a execução.</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🔄</div>
      <div>
      <h2>7.1 INICIATIVAS CONTÍNUAS PRIORITÁRIAS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 4–6 iniciativas recorrentes manteremos ativas para sustentar resultados?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="continuous_priorities" placeholder="Guia de resposta: Ex.: Relatórios de impacto, visitas guiadas, reuniões com famílias, fóruns com escolas, agradecimentos públicos, agenda comunitária."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📅</div>
      <div>
      <h2>7.2 CRONOGRAMA & RESPONSÁVEIS (CADÊNCIA REALISTA)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual a cadência de cada iniciativa e quem é responsável por entregar?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="schedule_responsibles" placeholder="Guia de resposta: Iniciativa — frequência — responsável — checkpoints (datas)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">⏱️</div>
      <div>
      <h2>7.3 RELACIONAMENTO COM STAKEHOLDERS (TEMPO DE RESPOSTA)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem responde cada público (famílias, escolas, parceiros) e em quanto tempo? Quando escalar?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="stakeholder_response_time" placeholder="Guia de resposta: Janela de atendimento (dias/horas), padrão de resposta, critérios de encaminhamento."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">💬</div>
      <div>
      <h2>7.4 FLUXOS DE COMUNICAÇÃO OPERACIONAIS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como organizaremos grupos, listas e avisos para não virar bagunça?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="operational_communication_flows" placeholder="Guia de resposta: Grupos por turma/evento, listas por tema, regras de comunicação e horários."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📊</div>
      <div>
      <h2>7.5 BOLETINS & PRESTAÇÃO DE CONTAS PERIÓDICA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual promessa cada boletim cumpre e qual a estrutura padrão?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="bulletins_accountability" placeholder="Guia de resposta: 1 história real + 1 número simples + 1 convite prático + próximos marcos (mensal/bimestral/trimestral)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">🤝</div>
      <div>
      <h2>7.6 ENCONTROS DE RELACIONAMENTO (ON/OFFLINE)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que encontros faremos e com que frequência? Como saber se valeu?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="relationship_meetings" placeholder="Guia de resposta: Tipos (bastidores, Q&A, apresentações), duração, periodicidade, sinais de sucesso (perguntas recebidas, confirmações de presença)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📁</div>
      <div>
      <h2>7.7 BIBLIOTECA DE EVIDÊNCIAS & ATIVOS DIGITAIS (REÚSO)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais materiais já temos e onde ficam para reuso rápido?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="evidence_assets_library" placeholder="Guia de resposta: Pasta no Drive com subpastas: fotos aprovadas (com consentimento), depoimentos, números atualizados, modelos de arte e textos prontos, relatórios. Onde guardar e como padronizar materiais para reaproveitar rápido."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">⭐</div>
      <div>
      <h2>7.8 PERCEPÇÃO & SINAIS QUALITATIVOS DE CONFIANÇA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que as pessoas entendem sobre vocês? O que gera confiança imediata?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="perception_trust_signals" placeholder="Guia de resposta: Dúvidas recorrentes, elogios, temas sensíveis; exemplos de ações que aumentam confiança."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📝</div>
      <div>
      <h2>7.9 RELATOS & FEEDBACKS DA COMUNIDADE (COM SEGURANÇA)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como incentivar famílias e participantes a compartilhar relatos com segurança?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="community_testimonials_safe" placeholder="Guia de resposta: Roteiro simples, canal de envio, autorização, curadoria e quando divulgar."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📻</div>
      <div>
      <h2>7.10 PARCERIAS DE MÍDIA LOCAL & REDE COMUNITÁRIA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais veículos/comunidades podem ecoar marcos importantes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="local_media_community_network" placeholder="Guia de resposta: Rádio comunitária, jornal do bairro, páginas de escolas/igrejas; como propor pautas; ponto focal."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📌</div>
      <div>
      <h2>7.11 PROGRAMAS & SÉRIES RECORRENTES (HÁBITO DE ACOMPANHAMENTO)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que séries/quadros manteremos para criar hábito de acompanhar resultados?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="recurring_programs_series" placeholder="Guia de resposta: Ex.: #SextaDoResultado, #PerguntasDaComunidade, #VisitaAberta, #AntesEDepois."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🛡️</div>
      <div>
      <h2>7.12 PROTOCOLO DE CRISE & MODERAÇÃO<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como agir diante de críticas, boatos ou incidentes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="crisis_moderation_protocol" placeholder="Guia de resposta: Quando responder em público/privado, quem aprova notas, passos para corrigir informação, registro de ocorrências."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📊</div>
      <div>
      <h2>7.13 KPIs DO PROJETO (MÉTRICAS DE SUCESSO SEM JARGÃO)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 3–5 sinais simples mostram que estamos no caminho certo?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="project_kpis" placeholder="Guia de resposta: Beneficiários ativos, frequência ≥ __%, evolução de aprendizagem, presença em encontros, tempo de resposta, publicação de relatórios no prazo."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🔄</div>
      <div>
      <h2>7.14 RITUAL DE MELHORIA (MENSAL/TRIMESTRAL)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual o ritual de revisão para ajustar caminho e priorizar?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="improvement_ritual" placeholder="Guia de resposta: Reunião curta: o que funcionou, o que ajustar, 1 teste novo e o que vamos parar."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">🔧</div>
      <div>
      <h2>7.15 FERRAMENTAS & ACESSOS (GOVERNANÇA)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais ferramentas usaremos e quem tem acesso?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="tools_access_governance" placeholder="Guia de resposta: Apps (agenda, registro, monitoramento), senhas centralizadas, responsáveis por cada login."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📜</div>
      <div>
      <h2>7.16 POLÍTICA DE INTERAÇÃO & RESPOSTA (CONVIVÊNCIA)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são as regras de relacionamento com o público (online/offline)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="interaction_policy" placeholder="Guia de resposta: Conteúdos permitidos/vedados, tempo de resposta, quando escalar, mensagem-padrão de mediação."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📡</div>
      <div>
      <h2>7.17 CANAIS DE RELACIONAMENTO & PAPÉIS (SEM VISUAL/TOM)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que tipos de conteúdo/informação cada canal prioriza (sem falar de cor/tipografia)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="relationship_channels_roles" placeholder="Guia de resposta: WhatsApp: avisos/confirmar presença; E-mail: resumo mensal; Encontros: apresentações e Q&A; Impressos: calendários/convites."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🧪</div>
      <div>
      <h2>7.18 EXPERIMENTOS TRIMESTRAIS (APRENDIZADO VALIDADO)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 2–3 testes faremos por trimestre e como decidir se continuam?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="quarterly_experiments" placeholder="Guia de resposta: Ex.: novo formato de encontro, roteiro de feedback, quadro recorrente; critério: participação/retorno/clareza."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">✅</div>
      <div>
      <h2>7.19 CRITÉRIOS PARA ACEITAR PARCERIAS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais critérios definem se a parceria 'faz sentido'?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="partnership_criteria" placeholder="Guia de resposta: Alinhamento de valores, foco em crianças/educação, impacto local, transparência, baixa burocracia, não gerar dependência."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🗺️</div>
      <div>
      <h2>7.20 MAPA DE PARCERIAS (ALVOS & PRÓXIMOS PASSOS)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais parcerias vamos priorizar agora e qual o próximo passo com cada uma?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="partnerships_map" placeholder="Guia de resposta: Parceiro — por que — o que oferece — o que recebe — próximo passo — responsável — data alvo."></textarea>
      </div>
    </div>
  )
}
