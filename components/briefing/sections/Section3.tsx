import { useEffect } from 'react'

interface Section3Props {
  savedData?: Record<string, string>
}

export default function BriefingSection3({ savedData }: Section3Props) {
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
      <h2>🌱 BLOCO 3 — PROPÓSITO E IMPACTO SOCIAL</h2>
      <p>Objetivo: identificar a transformação que a organização busca gerar <strong>e</strong> detalhar o que faz na prática (programas, método, frequência, infraestrutura, proteção, resultados e aprendizagem)</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">💭</div>
      <div>
      <h2>3.1 PROPÓSITO CENTRAL<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> "As pessoas não compram o que você faz, elas compram por que você faz." — Simon Sinek
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o "porquê" de existir da organização — além das atividades do dia a dia?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="main_purpose" placeholder="Guia de resposta: • Qual causa maior justifica o trabalho? • O que motiva a equipe, mesmo nas dificuldades? • Como esse propósito se conecta à vida das pessoas impactadas? • Use: 'Existimos para [verbo de ação] [quem servimos] através de [abordagem], para que [transformação].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🔍</div>
      <div>
      <h2>3.2 PROBLEMA SOCIAL QUE ENFRENTAMOS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Amartya Sen — desenvolvimento como liberdade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que necessidade humana concreta a organização busca resolver?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="social_problem" placeholder="Guia de resposta: Quem é afetado, como isso aparece no dia a dia e quais consequências pretende reduzir."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🌍</div>
      <div>
      <h2>3.3 TRANSFORMAÇÃO DESEJADA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Joey Reiman — compromisso com a transformação
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que mudança concreta desejam gerar nas pessoas/comunidades?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="desired_transformation" placeholder="Guia de resposta: • Mudança prática, emocional, cultural ou espiritual? • Como aparece no cotidiano (autonomia, bem-estar, aprendizado)? • Complete: 'Queremos que, após nossa atuação, as pessoas passem a [mudança observável].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">🔗</div>
      <div>
      <h2>3.4 TEORIA DE MUDANÇA (CAMINHO DO IMPACTO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Carol Weiss — theory of change
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual a lógica que liga atividades → resultados imediatos → impacto?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="theory_of_change" placeholder="Guia de resposta: Insumos, atividades, produtos (outputs), resultados (outcomes) e impacto; principais suposições."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📚</div>
      <div>
      <h2>3.5 PROGRAMAS E ATIVIDADES (O QUE FAZEMOS)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — foco no que entrega valor
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais programas existem e o que cada um realiza?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="programs_activities" placeholder="Guia de resposta: Para cada programa: nome, objetivo, público, principais atividades, duração/turma, resultados esperados."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🎓</div>
      <div>
      <h2>3.6 METODOLOGIA PEDAGÓGICA / SOCIOEDUCATIVA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Paulo Freire — educação dialógica
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual método fundamenta as atividades?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="pedagogical_methodology" placeholder="Guia de resposta: Abordagens (ex.: projetos, lúdico), materiais utilizados e como avaliam evolução."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📅</div>
      <div>
      <h2>3.7 FREQUÊNCIA, CARGA HORÁRIA E CALENDÁRIO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> UNESCO — continuidade de aprendizagem
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Com que frequência as atividades ocorrem e qual o calendário anual?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="frequency_schedule" placeholder="Guia de resposta: Dias/horários, duração por encontro, ciclos/módulos, períodos sazonais (reforços, férias, eventos)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🏢</div>
      <div>
      <h2>3.8 LOCAIS, INFRAESTRUTURA E ACESSO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> NN/g — contexto de uso
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Onde acontecem as atividades e como os beneficiários chegam?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="locations_infrastructure" placeholder="Guia de resposta: Endereços/salas, equipamentos, acessibilidade física, orientações de chegada/saída."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">👥</div>
      <div>
      <h2>3.9 EQUIPE, MONITORES E CAPACIDADE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> John Hattie — qualidade da mediação
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem realiza as atividades e qual a capacidade de atendimento?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="team_capacity" placeholder="Guia de resposta: Perfil e nº de educadores/monitores/voluntários, treinamentos, relação adulto/criança, vagas por turma."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">🤝</div>
      <div>
      <h2>3.10 PARCERIAS TÉCNICAS E REDE LOCAL<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kania & Kramer — impacto coletivo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais parceiros fortalecem os programas e como colaboram?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="technical_partnerships" placeholder="Guia de resposta: Escolas, CRAS, unidades de saúde, universidades, ONGs; tipo de apoio (espaço, conteúdo, encaminhamentos)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📖</div>
      <div>
      <h2>3.11 HISTÓRIA DE IMPACTO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Miri Rodriguez — prova viva do propósito
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual história real simboliza melhor o impacto do trabalho?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="impact_narrative" placeholder="Guia de resposta: Antes → intervenção → depois. Use: 'Antes [situação A]. Depois [situação B]. Isso mostra [impacto].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🔢</div>
      <div>
      <h2>3.12 RESULTADOS E CONQUISTAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> John Mackey — impacto sentido e mensurado
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais evidências comprovam o impacto até hoje?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="results_evidence" placeholder="Guia de resposta: Números/indicadores, depoimentos, prêmios, reconhecimentos, parcerias/validações. Template: 'Atendemos [nº]; ampliamos [indicador] em [x%]; recebemos [reconhecimento].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🎯</div>
      <div>
      <h2>3.13 DEFINIÇÃO DE SUCESSO HOJE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Daniel H. Pink — coerência entre crença e entrega
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como definem sucesso hoje — e quais sinais mostram que estão no caminho certo?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="success_definition" placeholder="Guia de resposta: Impacto social, crescimento sustentável, transformação de pessoas, coerência; Modelo: 'Sucesso é quando [sinal] atinge [meta] até [prazo].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📊</div>
      <div>
      <h2>3.14 INDICADORES DE SUCESSO (KPIs SOCIAIS)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — 'O que é medido, melhora.'
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 3–5 indicadores vão acompanhar o impacto?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="social_kpis" placeholder="Guia de resposta: Ex.: nº de beneficiários ativos, permanência, evolução de aprendizagem, satisfação das famílias; KPI: '[Indicador] — meta: [valor] — frequência: [mensal/trimestral] — responsável: [cargo].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🛡️</div>
      <div>
      <h2>3.15 PROTEÇÃO INTEGRAL, ECA & LGPD<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> ECA / LGPD (Brasil)
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais protocolos garantem segurança, consentimento e uso correto de dados/imagem?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="protection_eca_lgpd" placeholder="Guia de resposta: Autorização de imagem, fluxo de incidentes, guarda de dados, responsáveis, condutas seguras."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📈</div>
      <div>
      <h2>3.16 ACOMPANHAMENTO DO PARTICIPANTE (AVALIAÇÃO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> James Heckman — efeitos ao longo do tempo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como acompanham o progresso de cada criança/adolescente?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="participant_followup" placeholder="Guia de resposta: Instrumentos simples (checklists, presença, leitura), periodicidade, devolutivas às famílias."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">💰</div>
      <div>
      <h2>3.17 CUSTO POR ATENDIMENTO & RECURSOS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Esther Duflo — eficiência em políticas sociais
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais são os principais custos por turma/mês e o custo aproximado por participante?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="cost_per_participant" placeholder="Guia de resposta: Maiores itens (alimentação, material, equipe, espaço) e estimativas simples (mês/criança)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">⚠️</div>
      <div>
      <h2>3.18 RISCOS, DESAFIOS E MITIGAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Nassim Taleb — antifragilidade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais riscos podem afetar as atividades e como reduzir impactos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="risks_mitigation" placeholder="Guia de resposta: Risco → efeito → ação de mitigação → responsável."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📈</div>
      <div>
      <h2>3.19 ESCALA E SUSTENTABILIDADE DO MODELO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Michael Porter — foco e escalabilidade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O modelo consegue crescer mantendo qualidade? Como?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="scale_sustainability" placeholder="Guia de resposta: O que precisa para dobrar turmas (pessoas, espaço, material), limites e prioridades de expansão."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📅</div>
      <div>
      <h2>3.20 CALENDÁRIO DE MARCOS & PRESTAÇÃO DE CONTAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kristina Halvorson — cadência clara
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais marcos anuais e como prestam contas à comunidade?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="milestones_accountability" placeholder="Guia de resposta: Feiras/cursos/apresentações, relatórios (trimestral/semestral), reuniões com famílias, publicação no site."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">💡</div>
      <div>
      <h2>3.21 APRENDIZADOS & MELHORIAS RECENTES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Eric Ries — aprendizado validado
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que mudanças fizeram ao aprender com a prática?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="learnings_improvements" placeholder="Guia de resposta: O que testaram, o que mantiveram ou encerraram e por quê; próximo experimento."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">💬</div>
      <div>
      <h2>3.22 DECLARAÇÃO DE PROPÓSITO (ONE-LINER)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> "O propósito não é um slogan, é uma promessa viva."
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual frase clara e inspiradora expressa o propósito da organização?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="purpose_oneliner" placeholder="Guia de resposta: Use: 'Existimos para [verbo de ação] [quem servimos] através de [meio/abordagem], para que [transformação desejada].' Ex.: 'Existimos para ampliar oportunidades educacionais de crianças em vulnerabilidade, através de atividades socioeducativas, para que desenvolvam autonomia, pertencimento e futuro.'"></textarea>
      </div>
    </div>
  )
}
