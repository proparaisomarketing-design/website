import { useEffect } from 'react'

interface Section5Props {
  savedData?: Record<string, string>
}

export default function BriefingSection5({ savedData }: Section5Props) {
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
      <h2>🎯 BLOCO 5 — ENGAJAMENTO ONLINE</h2>
      <p>Objetivo: aumentar conversas, alcance e vínculos <strong>nos canais digitais fora do site</strong> (redes sociais, WhatsApp, e-mail, lives), sem repetir itens de estrutura do site (BLOCO 2), captação/doações (BLOCO 6) ou inscrição de beneficiários (BLOCO 4).</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🎯</div>
      <div>
      <h2>5.1 CANAIS DIGITAIS ATUAIS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Philip Kotler — objetivos claros orientam ações
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais canais vocês usam hoje? Cite todos os endereços oficiais (Instagram, WhatsApp, YouTube, e-mail, etc).
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="engagement_objectives_by_channel" placeholder="Guia de resposta: Informe todos os canais oficiais (ex.: Instagram @proparaiso, WhatsApp (66) 99999-0000, YouTube /ProParaisoOficial, e-mails institucionais, newsletters, plataformas de doação, outras redes)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📝</div>
      <div>
      <h2>5.2 PAUTAS QUE GERAM CONEXÃO (EDITORIAL)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Ann Handley — conteúdo útil e humano
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 4–6 temas fixos vamos publicar todo mês para gerar conversa?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="editorial_themes" placeholder="Guia de resposta: Ex.: Bastidores, Antes/Depois, Resultados simples, Voz da Comunidade, Agenda de Visitas, Reconhecimentos."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📅</div>
      <div>
      <h2>5.3 CALENDÁRIO SIMPLES (CADÊNCIA REALISTA)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kristina Halvorson — governança de conteúdo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual a frequência viável por canal, com quem faz o quê?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="content_calendar" placeholder="Guia de resposta: Ex.: Instagram 3x/sem (coord. social), Stories 5x/sem (equipe), E-mail 1x/mês (captação), WhatsApp atendimento diário (08h–18h)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🎬</div>
      <div>
      <h2>5.4 FORMATO CERTO PARA CADA HISTÓRIA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Jonah Berger — transmissibilidade
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que formato combina melhor com cada tipo de mensagem?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="content_formats" placeholder="Guia de resposta: Impacto rápido = card com número; Bastidor = Reels de 30–60s; Convite de visita = arte + link; Agradecimento = carrossel de fotos."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">💬</div>
      <div>
      <h2>5.5 COMMUNITY MANAGEMENT & TEMPO DE RESPOSTA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Jay Baer — 'Responder é marketing'
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem responde comentários/DMs e em quanto tempo?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="community_management" placeholder="Guia de resposta: Defina: responsáveis, horário de atendimento, padrão de resposta (tom humano + link certo), quando escalar para coordenação."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📱</div>
      <div>
      <h2>5.6 WHATSAPP PARA ACOMPANHAR O PROJETO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> IDEO — foco no humano
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Vamos criar um canal ou grupo no WhatsApp para quem quiser acompanhar o projeto? Como ele vai funcionar?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="whatsapp_relationship" placeholder="Guia de resposta: Canal oficial (link), tipo (grupo, lista de transmissão, canal), regras básicas, quem aprova entrada, frequência de mensagens, convites para ações/eventos)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📧</div>
      <div>
      <h2>5.7 NEWSLETTER QUE AS PESSOAS QUEREM LER<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Seth Godin — permissão e pertencimento
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual promessa a newsletter cumpre todo mês?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="newsletter_promise" placeholder="Guia de resposta: Estrutura: 1 história real curta + 1 número de impacto + 1 convite prático + próximos eventos. Título em linguagem simples."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🎥</div>
      <div>
      <h2>5.8 LIVES & EVENTOS ONLINE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Nancy Duarte — histórias que movem
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que encontros online (e com que frequência) aproximam a comunidade?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="lives_online_events" placeholder="Guia de resposta: Ex.: Live mensal 'Bastidores do Mês'; Q&A com educadores; transmissão de apresentações; como medir se valeu (perguntas, inscrições para visita)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📸</div>
      <div>
      <h2>5.9 UGC & VOZ DA COMUNIDADE (CONTEÚDO GERADO PELO USUÁRIO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Robert Cialdini — prova social
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como incentivar participantes e famílias a contar suas histórias com segurança?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="ugc_community_voice" placeholder="Guia de resposta: Roteiro simples de depoimento, autorização de imagem, onde enviar, curadoria, quando repostar."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🤝</div>
      <div>
      <h2>5.10 EMBAIXADORES, LIDERANÇAS LOCAIS & PARCERIAS DE MÍDIA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Malcolm Gladwell — conectores locais
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem são 5 vozes da comunidade que podem amplificar mensagens e resultados? Quais veículos/comunidades locais podem ecoar mensagens importantes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="micro_partners_influencers" placeholder="Guia de resposta: Nominar líderes locais/professores/creches/atletas; defina convite, contrapartida (visita guiada, agradecimento público) e 1 ação por mês. Liste também rádio comunitária, jornal do bairro, perfis de bairro, páginas de escolas/igrejas; formato de colaboração e quem faz o contato."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📌</div>
      <div>
      <h2>5.11 SÉRIES E QUADROS RECORRENTES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> John Cleese — criatividade com rotina
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que quadros fixos manteremos para criar hábito no público?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="recurring_series" placeholder="Guia de resposta: Ex.: #SextaDoResultado, #AntesEDepois, #VisitaAberta, #PerguntasDaComunidade."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">♿</div>
      <div>
      <h2>5.12 ACESSIBILIDADE NAS REDES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> W3C (WCAG) — comunicação inclusiva
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais cuidados adotaremos nos posts e vídeos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="social_accessibility" placeholder="Guia de resposta: Legenda em vídeos, texto alternativo em imagens, contraste adequado, linguagem simples, cards com fonte legível."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🛡️</div>
      <div>
      <h2>5.13 MODERAÇÃO & CRISE (PROTOCOLO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Melissa Agnes — gestão de crise digital
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como agir diante de críticas, fake news ou incidentes?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="moderation_crisis_protocol" placeholder="Guia de resposta: Quando responder em público/privado, quem aprova notas oficiais, passos para corrigir informação, registro de ocorrências."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📊</div>
      <div>
      <h2>5.14 MÉTRICAS QUE IMPORTAM (SEM JARGÃO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — medir o essencial
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 3–5 sinais simples mostram que o engajamento está funcionando?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="engagement_metrics" placeholder="Guia de resposta: Ex.: pessoas pedindo visita, inscrições em atividades, respostas às enquetes, repetição de comentários 'como ajudo?', retornos à live."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🔄</div>
      <div>
      <h2>5.15 CICLO DE MELHORIA (MENSAL/TRIMESTRAL)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Eric Ries — aprendizado contínuo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual o ritual de revisão para ajustar pautas e formatos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="improvement_cycle" placeholder="Guia de resposta: Reunião rápida mensal (30 min): o que funcionou, o que ajustar, 1 teste novo (ex.: título, duração do vídeo, ordem do carrossel)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">🔒</div>
      <div>
      <h2>5.16 ENGAJAMENTO COM RESPONSABILIDADE (ECA & LGPD)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> ECA / LGPD (Brasil)
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais regras seguiremos ao publicar imagens/relatos de crianças e famílias?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="responsibility_eca_lgpd" placeholder="Guia de resposta: Consentimento por escrito, evitar exposição sensível, ocultar dados, aprovar textos com coordenação, guardar autorizações."></textarea>
      </div>
    </div>
  )
}


