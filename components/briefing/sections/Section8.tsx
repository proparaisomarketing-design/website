'use client'

import { useEffect } from 'react'

interface Section8Props {
  savedData?: Record<string, string>
}

export default function BriefingSection8({ savedData }: Section8Props) {
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
      <h2>🏗️ BLOCO 8 — ARQUITETURA FINAL DO SITE (BLUEPRINT)</h2>
      <p>Objetivo: após responder todos os blocos, gerar um desenho claro do site (mapa de páginas + tópicos/CTA por página) para orientar redação, design e desenvolvimento. Só tópicos.</p>
      <p style={{ marginBottom: '20px', fontStyle: 'italic', color: '#666' }}>Copie e cole essa pergunta no chat que formulou suas respostas</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🧭</div>
      <div>
      <h2>8.1 MENUS & ESTRUTURA DE NAVEGAÇÃO (TOP/FOOTER)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais itens vão no menu principal e quais ficam no rodapé?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="navigation_structure" placeholder="Copie e cole essa pergunta no chat que formulou suas respostas"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🏠</div>
      <div>
      <h2>8.2 HOME — O QUE ENTRA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais blocos a Home precisa ter (em tópicos)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="home_structure" placeholder="Copie e cole essa pergunta no chat que formulou suas respostas"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">👥</div>
      <div>
      <h2>8.3 QUEM SOMOS — PÁGINA INSTITUCIONAL<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais tópicos devem compor a página institucional?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="about_page" placeholder="Guia de resposta: • Missão, Visão, Valores • Origem/História • Equipe/Conselho (cards) • Metodologia em 3 pontos • Parceiros institucionais • Linha do tempo (opcional)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📚</div>
      <div>
      <h2>8.4 O QUE FAZEMOS — PROGRAMAS & ATIVIDADES<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como listar programas/atividades em cards simples?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="programs_page" placeholder="Guia de resposta: Para cada programa: Nome | Para quem | O que acontece | Quando/onde | Como participar | CTA."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📊</div>
      <div>
      <h2>8.5 IMPACTO — RESULTADOS & HISTÓRIAS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais evidências e histórias entram aqui?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="impact_page" placeholder="Guia de resposta: • 3–5 indicadores simples • 1–2 cases antes/depois (com fotos/autorização) • Relatórios para download • Metas do ano."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">🤝</div>
      <div>
      <h2>8.6 COMO AJUDAR (HUB)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais opções de apoio aparecem no hub 'Como Ajudar'?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="how_to_help_hub" placeholder="Guia de resposta: • Doar (link para página de doação) • Voluntariar (formulário simples) • Parcerias (PJ/ESG) (contato rápido + PDF institucional) • Doações em itens (lista atualizada) • Visitas guiadas (agenda/inscrição)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🔍</div>
      <div>
      <h2>8.7 TRANSPARÊNCIA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que publicar para criar confiança?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="transparency_page" placeholder="Guia de resposta: • 'Para onde vai o recurso' (gráfico simples) • Relatórios (trimestral/semestral) • Políticas (Ética, Proteção, LGPD) • Prestação de contas resumida."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">📰</div>
      <div>
      <h2>8.8 NOTÍCIAS / BLOG<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que categorias fixas teremos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="news_blog" placeholder="Guia de resposta: • Bastidores • Resultados • Agenda/Convites • Parcerias • Depoimentos."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📸</div>
      <div>
      <h2>8.9 GALERIA (FOTOS & VÍDEOS)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como organizar a galeria com segurança?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="gallery" placeholder="Guia de resposta: • Álbuns por evento/programa • Legendas simples • Consentimento registrado • Botão 'Pedir remoção de imagem'."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📞</div>
      <div>
      <h2>8.10 CONTATO & VISITAS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais formas de contato e qual convite para visita entram?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="contact_visits" placeholder="Guia de resposta: • WhatsApp/E-mail/Endereço/Mapa • Horários de atendimento • Formulário simples • 'Agende uma visita' (datas pré-definidas)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📝</div>
      <div>
      <h2>8.11 INSCRIÇÃO — 'QUEM VAMOS ATENDER' (INTERNOS)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que seções precisa a página de inscrição de beneficiários?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="enrollment_page" placeholder="Guia de resposta: • Quem pode participar (critérios) • Documentos necessários • Passo a passo da inscrição • Vagas e lista de espera • Direitos & Deveres • FAQ de inscrição."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">❓</div>
      <div>
      <h2>8.12 FAQ GERAL (DÚVIDAS FREQUENTES)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais 8–12 perguntas respondem 80% das dúvidas?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="faq_general" placeholder="Guia de resposta: Inscrição, horários, localização, segurança, doação, recibo, voluntariado, visitas, dados (LGPD)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">⚖️</div>
      <div>
      <h2>8.13 PÁGINAS LEGAIS & SISTEMA<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais páginas legais e técnicas vamos incluir?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="legal_pages" placeholder="Guia de resposta: • Política de Privacidade • Termos de Uso • Aviso de Cookies • Página 404 personalizada."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🎯</div>
      <div>
      <h2>8.14 CTAs POR PÁGINA (MAPA DE CONVERSÃO)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual CTA principal e qual CTA secundário em cada página?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="ctas_by_page" placeholder="Guia de resposta: Ex.: Home = Doar agora (principal) / Agendar visita (sec.). Impacto = Ver relatório / Doe para ampliar. Como Ajudar = Escolher forma de apoio / Falar no WhatsApp."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📋</div>
      <div>
      <h2>8.15 SAÍDA AUTOMÁTICA — 'RELATÓRIO DE ARQUITETURA' (para entregar ao time)<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      peça para o chat gerar RELATÓRIO DE ARQUITETURA: Mapa do Site (Sitemap): menu + subpáginas, em árvore.
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="architecture_report" placeholder="Peça para o chat gerar 'RELATÓRIO DE ARQUITETURA': Mapa do Site (Sitemap): menu + subpáginas, em árvore."></textarea>
      </div>

      <div className="completion-card">
        <h3>🎉 Parabéns!</h3>
        <p>Você completou o formulário de briefing. Agora você pode enviar suas respostas clicando no botão "Enviar Formulário" abaixo.</p>
      </div>
    </div>
  )
}
