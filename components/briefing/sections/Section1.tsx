'use client'

import { useEffect } from 'react'

interface Section1Props {
  savedData?: Record<string, string>
}

export default function BriefingSection1({ savedData }: Section1Props) {
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

  // Função para verificar se um question-card está completo (TODOS os campos devem estar preenchidos)
  const isQuestionCardCompleted = (fieldNames: string[]): boolean => {
    if (!savedData) return false
    return fieldNames.every(fieldName => savedData[fieldName] && savedData[fieldName].trim() !== '')
  }

  // Componente helper para o badge - REMOVIDO conforme solicitação
  const CompletionBadge = ({ fieldNames }: { fieldNames: string[] }) => {
    // Badge removido - não mostrar confirmação verde
    return null
  }

  // Verificar se TODOS os campos principais do bloco estão preenchidos
  const allRequiredFields = [
    'inst_name', 'inst_contact', 'inst_email', 'inst_responsible', 'inst_nature', 'inst_audience', 'inst_region', 'inst_years',
    'name_meaning_message', 'values_principles', 'personification', 'voice_presence', 'perceived_identity',
    'name_meaning_history', 'founders_motivation', 'first_steps', 'community_context', 'historical_milestones',
    'programs_evolution', 'challenges_overcome', 'lessons_learned', 'symbolic_story', 'timeline_summary',
    'key_people_trajectory', 'original_dreams'
  ]
  const isCompleted = savedData && allRequiredFields.every(field => savedData[field] && savedData[field].trim() !== '')

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>🧭 BLOCO 1 — ESSÊNCIA E IDENTIDADE</h2>
      </div>

      {/*  Card: 1. INFORMAÇÕES ESSENCIAIS  */}
      <section className="question-card" id="q1" role="group" aria-labelledby="q1-title" aria-describedby="q1-desc">
      <header className="question-header">
      <div className="question-icon" aria-hidden="true">📋</div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
      <h2>1. INFORMAÇÕES ESSENCIAIS<br /></h2>
      <CompletionBadge fieldNames={['inst_name', 'inst_contact', 'inst_email', 'inst_responsible', 'inst_nature', 'inst_audience', 'inst_region', 'inst_years']} />
      </div>
      </header>

      <div className="form-grid">
      <div className="form-group">
      <label htmlFor="inst-name"><span className="num">1.</span> Nome:</label>
      <input id="inst-name" name="inst_name" type="text" required />
      </div>

      <div className="form-group">
      <label htmlFor="inst-contact"><span className="num">2.</span> Contato:</label>
      <input id="inst-contact" name="inst_contact" type="text" required />
      </div>

      <div className="form-group">
      <label htmlFor="inst-email"><span className="num">3.</span> E-mail:</label>
      <input id="inst-email" name="inst_email" type="email" required />
      </div>

      <div className="form-group">
      <label htmlFor="inst-responsible"><span className="num">4.</span> Responsável projeto:</label>
      <input id="inst-responsible" name="inst_responsible" type="text" required />
      </div>

      <div className="form-group">
      <label htmlFor="inst-nature"><span className="num">5.</span> Natureza da instituição:</label>
      <select id="inst-nature" name="inst_nature" required>
      <option value="">Selecione</option>
      <option>ONG</option>
      <option>Associação</option>
      <option>Projeto social</option>
      <option>Fundação</option>
      <option>Outra</option>
      </select>
      </div>

      <div className="form-group">
      <label htmlFor="inst-audience"><span className="num">6.</span> Público central de atuação:</label>
      <select id="inst-audience" name="inst_audience" required>
      <option value="">Selecione</option>
      <option value="Crianças">Crianças</option>
      <option value="Famílias">Famílias</option>
      <option value="Educadores">Educadores</option>
      <option value="Comunidade local">Comunidade local</option>
      <option value="Voluntários">Voluntários</option>
      <option value="Parceiros">Parceiros</option>
      <option value="Outro">Outro</option>
      </select>
      </div>

      <div className="form-group">
      <label htmlFor="inst-region"><span className="num">7.</span> Cidade ou região de atuação:</label>
      <input id="inst-region" name="inst_region" type="text" required />
      </div>

      <div className="form-group">
      <label htmlFor="inst-years"><span className="num">8.</span> DATA FUNDAÇÃO:</label>
      <input id="inst-years" name="inst_years" type="text" placeholder="Exemplo: 2012" />
      </div>
      </div>
      </section>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🌟</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>2. SLOGAN, ASSINATURA OU FRASE DE POSICIONAMENTO<br /></h2>
      <CompletionBadge fieldNames={['name_meaning_message']} />
      </div>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> "Você quer um nome que sugira algo sobre o seu produto… você não quer um nome que não dê pista nenhuma." — Alexandra Watkins.
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o significado ou mensagem que o nome carrega?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="name_meaning_message" placeholder="Guia de resposta: O nome tem alguma história, metáfora ou inspiração? Ele expressa uma causa, um valor ou um sentimento? Se alguém ouvisse esse nome pela primeira vez, o que deveria entender sobre vocês?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">⚖️</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>4. VALORES E PRINCÍPIOS<br /></h2>
      <CompletionBadge fieldNames={['values_principles']} />
      </div>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Daniel Coyle — O Código da Cultura<br />
      A cultura é o comportamento quando ninguém está olhando.
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais valores orientam as decisões e os relacionamentos da equipe?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="values_principles" placeholder="Guia de resposta: Como esses valores se manifestam no dia a dia? Que atitudes ou práticas traduzem a essência da instituição? Que exemplos reais mostram esses valores em ação? Liste entre 3 e 5 valores que definem como a equipe age, mesmo sob pressão. Evite palavras genéricas como 'excelência' — busque termos que expressem verdade e prática."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">👤</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>5. CRENÇA CENTRAL<br /></h2>
      <CompletionBadge fieldNames={['personification']} />
      </div>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Joey Reiman — Propósito<br />
      As marcas que inspiram são movidas por uma crença, não por um produto.
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é a convicção essencial que sustenta tudo o que a organização faz?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="personification" placeholder="Guia de reflexão: O que vocês acreditam sobre o cuidado, a infância e o desenvolvimento humano? Que princípio permanece firme mesmo diante de desafios?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">👁️</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>6. VOZ, PRESENÇA E MENSAGENS-ÂNCORA<br /></h2>
      <CompletionBadge fieldNames={['voice_presence', 'voice_tone_messages']} />
      </div>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Ana Couto — Branding como Cultura Viva<br />
      A voz de uma marca é o reflexo de sua alma.
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como é o tom de comunicação da instituição e quais frases-chave devem ser repetidas no site?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="voice_presence" placeholder="Guia de reflexão: Que tipo de energia se deseja transmitir ao público? A linguagem é mais acolhedora, inspiradora, educativa, técnica ou mobilizadora? Quais palavras, expressões ou modos de falar representam essa voz? Que tipo de energia ela transmite (acolhedora, ousada, técnica, inspiradora)? Que impressão vocês querem causar ao primeiro contato? Escreva também 3–5 mensagens-âncora: 'benefício + prova + convite'. Ex.: 'Com R$50/mês, uma criança tem reforço escolar. 82% melhoraram leitura. Doe agora.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🎯</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>7. IDENTIDADE PERCEBIDA<br /></h2>
      <CompletionBadge fieldNames={['perceived_identity']} />
      </div>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Simon Sinek — O Jogo Infinito<br />
      Marcas fortes são aquelas que sabem o que querem que as pessoas sintam.
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como vocês gostariam que as pessoas percebessem a instituição?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="perceived_identity" placeholder="Guia de reflexão: Que sentimentos ou ideias querem gerar no público? Liste algumas palavras que descrevem a experiência de contato com o projeto. Imagine a reação de uma pessoa ao visitar o site ou conhecer o trabalho presencialmente. Que palavras quer que venham à mente quando alguém fala da organização/projeto? Que sentimentos ou sensações querem provocar nas pessoas?"></textarea>
      </div>

      {/*  MÓDULO EXCLUSIVO: ORIGEM — HISTÓRIA DA ORGANIZAÇÃO  */}
      <div style={{ margin: '40px 0 20px 0', padding: '20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', borderLeft: '4px solid #0037FE' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#0037FE', fontSize: '1.3rem' }}>📖 UM MÓDULO EXCLUSIVO ORIGEM — HISTÓRIA DA ORGANIZAÇÃO</h3>
      <p style={{ margin: '0', color: '#666', fontSize: '0.95rem' }}>Objetivo: registrar a trajetória desde a ideia inicial até hoje, com fatos, pessoas, marcos e aprendizados que moldam quem vocês são.</p>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📝</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.8 NOME E SIGNIFICADO<br /></h2>
      <CompletionBadge fieldNames={['name_meaning_history']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é a história por trás do nome da organização e o que ele representa?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="name_meaning_history" placeholder="Guia de resposta: Quando surgiu o nome? O que ele comunica? Houve outras opções? Algum simbolismo (lugar, pessoa, versículo, valor)?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">👥</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.9 FUNDADORES & MOTIVAÇÃO INICIAL<br /></h2>
      <CompletionBadge fieldNames={['founders_motivation']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem idealizou a organização e qual foi o motivo/'chamado' para começar?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="founders_motivation" placeholder="Guia de resposta: Nomes, papéis, contexto da época, problema que queriam resolver, conversa ou episódio que acendeu a faísca."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🚀</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.10 PRIMEIROS PASSOS (COMO COMEÇOU NA PRÁTICA)<br /></h2>
      <CompletionBadge fieldNames={['first_steps']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como foram os primeiros meses de atuação?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="first_steps" placeholder="Guia de resposta: Onde aconteceram as primeiras atividades? Quantas pessoas? Que recursos tinham? Que apoio receberam?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🏘️</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.11 CONTEXTO DA COMUNIDADE NA ÉPOCA<br /></h2>
      <CompletionBadge fieldNames={['community_context']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como era a realidade do território quando vocês começaram?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="community_context" placeholder="Guia de resposta: Desafios locais (educação, segurança, alimentação, lazer), parceiros e espaços disponíveis, oportunidades que motivaram o início."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📅</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.12 MARCOS HISTÓRICOS (LINHA DO TEMPO)<br /></h2>
      <CompletionBadge fieldNames={['historical_milestones']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais acontecimentos marcaram a evolução do projeto?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="historical_milestones" placeholder="Guia de resposta: Ano — fato — por que foi importante (ex.: mudança de sede, primeiro convênio, prêmio, novo programa)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📈</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.13 EVOLUÇÃO DOS PROGRAMAS/ATIVIDADES<br /></h2>
      <CompletionBadge fieldNames={['programs_evolution']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que mudou nas atividades do começo até hoje — e por quê?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="programs_evolution" placeholder="Guia de resposta: Programas que nasceram/encerraram, ajustes de metodologia, tamanhos de turma, respostas às necessidades da comunidade."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">💪</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.14 DESAFIOS ENFRENTADOS & SUPERAÇÕES<br /></h2>
      <CompletionBadge fieldNames={['challenges_overcome']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais foram os maiores obstáculos e como foram superados?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="challenges_overcome" placeholder="Guia de resposta: Desafios (estrutura, recursos, pessoas), estratégias usadas, aprendizados que viraram prática."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">💡</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.15 LIÇÕES APRENDIDAS (O QUE NÃO ABRIMOS MÃO)<br /></h2>
      <CompletionBadge fieldNames={['lessons_learned']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que aprendizados viraram princípios da organização?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="lessons_learned" placeholder="Guia de resposta: 2–4 lições que hoje orientam decisões (ex.: presença local, transparência simples, foco na criança, escuta ativa)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">⭐</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.16 HISTÓRIA-SÍMBOLO (UM CASO QUE RESUME A ORIGEM)<br /></h2>
      <CompletionBadge fieldNames={['symbolic_story']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual história real representa o espírito da origem?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="symbolic_story" placeholder="Guia de resposta: Antes → intervenção → depois. Por que essa história simboliza quem vocês são?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📊</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.17 CRONOLOGIA RESUMIDA (PARA A PÁGINA 'QUEM SOMOS')<br /></h2>
      <CompletionBadge fieldNames={['timeline_summary']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como fica a linha do tempo em tópicos curtos para o site?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="timeline_summary" placeholder="Guia de resposta: Ano — marco — 1 frase de impacto. (Ex.: 2015 — 1ª turma — '10 crianças, uma sala emprestada e muita vontade'.)"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">👤</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.18 PESSOAS-CHAVE AO LONGO DA TRAJETÓRIA<br /></h2>
      <CompletionBadge fieldNames={['key_people_trajectory']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem foram (ou são) as pessoas que mantiveram a chama acesa?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="key_people_trajectory" placeholder="Guia de resposta: Nomes/cargos ou voluntários notáveis, como contribuíram, reconhecimentos que merecem aparecer."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">🌟</div>
      <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px', marginBottom: '10px' }}>
      <h2>1.19 SONHOS DO COMEÇO QUE AINDA GUIAM O FUTURO<br /></h2>
      <CompletionBadge fieldNames={['original_dreams']} />
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais sonhos originais continuam orientando os próximos passos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="original_dreams" placeholder="Guia de resposta: O que ainda falta cumprir da visão inicial? Próximo marco desejado (em 1 frase)."></textarea>
      </div>
    </>
  )
}
