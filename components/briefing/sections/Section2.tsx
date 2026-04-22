import { useEffect } from 'react'

interface Section2Props {
  savedData?: Record<string, string>
}

export default function BriefingSection2({ savedData }: Section2Props) {
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
      <h2>🧱 BLOCO 2 — ESTRUTURA E EXPERIÊNCIA DIGITAL</h2>
      <p>Objetivo: definir como o site vai expressar o propósito, facilitar a navegação e impulsionar engajamento, doações e participação.</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🌐</div>
      <div>
      <h2>2.1 FUNÇÃO ESTRATÉGICA DO SITE<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Ana Couto — "Um site deve ser um ecossistema de propósito."
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o papel principal do site para a organização (informar, inspirar, arrecadar, mobilizar, conectar, educar)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="site_strategic_function" placeholder="Guia de resposta: A ação final desejada (doar, voluntariar, agendar visita, compartilhar) e o sentimento que deve anteceder o clique."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">👥</div>
      <div>
      <h2>2.2 PÚBLICOS & TAREFAS NO SITE (JTBD)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Clayton Christensen — Jobs to Be Done
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que "trabalhos" cada público quer realizar no site (doar rápido, entender impacto, inscrever-se, solicitar parceria)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="publics_tasks_jtbd" placeholder="Guia de resposta: Liste públicos → tarefa → obstáculo atual → como o site vai ajudar."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🧭</div>
      <div>
      <h2>2.3 JORNADAS PRIORITÁRIAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Jakob Nielsen (NN/g) — usabilidade e fluxo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais caminhos o visitante deve percorrer até a ação-chave (ex.: Home → Impacto → Doar)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="priority_journeys" placeholder="Guia de resposta: Desenhe 2–3 jornadas: etapas, dúvidas comuns e o que reduz atrito em cada uma."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🗂️</div>
      <div>
      <h2>2.4 ESTRUTURA E PÁGINAS ESSENCIAIS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kristina Halvorson — estratégia de conteúdo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais seções são indispensáveis para cumprir os objetivos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="essential_structure" placeholder="Guia de resposta: Início, Quem Somos, Projetos/Atividades, Como Ajudar (Doar/Voluntariar), Transparência/Relatórios, Impacto/Resultados, Blog/Notícias, Contato, FAQ."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">⚙️</div>
      <div>
      <h2>2.5 FUNCIONALIDADES & INTEGRAÇÕES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Steve Krug — "Don't Make Me Think"
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que recursos o site precisa para facilitar doações e relacionamento?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="features_integrations" placeholder="Guia de resposta: Doação online (PIX/cartão), formulário de voluntariado, agendar visita, newsletter, download de relatórios, WhatsApp, integrações (CRM/pagamentos), acessibilidade técnica."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📝</div>
      <div>
      <h2>2.6 CONTEÚDOS-CHAVE POR PÁGINA (SEM IDENTIDADE VISUAL)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kristina Halvorson — conteúdo orientado a objetivo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que informações cada página precisa ter para orientar a decisão?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="key_content_by_page" placeholder="Guia de resposta: Home: promessa + prova + CTA. Impacto: 3 números simples + 1 história. Transparência: para onde vai o recurso. Como Ajudar: opções claras + passo a passo."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">📢</div>
      <div>
      <h2>2.7 CONVERSÃO & CTAs POR PÚBLICO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Joanna Wiebe — copy para conversão
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais chamadas para ação usar em cada etapa e para cada público?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="conversion_ctas" placeholder="Guia de resposta: Defina 1 CTA principal por página (ex.: 'Doar agora', 'Quero voluntariar', 'Agendar visita') + microprovas (depoimento/resultado curto)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🔍</div>
      <div>
      <h2>2.8 DESCOBERTA & SEO LOCAL<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Rand Fishkin — descoberta orgânica
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como o site será encontrado por quem busca ajudar na sua cidade/bairro?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="seo_local" placeholder="Guia de resposta: Palavras-chave simples (ex.: 'reforço escolar voluntário [cidade]'), páginas locais, perguntas frequentes (FAQ), dados corretos (endereço, horários, WhatsApp)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📁</div>
      <div>
      <h2>2.9 GOVERNANÇA & ATUALIZAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Kristina Halvorson — governança de conteúdo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem cuida do site e como será o fluxo de atualização?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="content_governance" placeholder="Guia de resposta: Responsável, rotina (mensal/trimestral), como enviar conteúdos, critérios de aprovação, alinhamento com redes e relatórios."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📊</div>
      <div>
      <h2>2.10 INDICADORES & APRENDIZADO CONTÍNUO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker / Eric Ries — medir e iterar
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como saberemos que o site está funcionando e como vamos melhorar com o uso?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="indicators_learning" placeholder="Guia de resposta: Sinais simples (mais contatos, doações, inscrições), periodicidade de revisão, como testar melhorias (texto do CTA, ordem de seções) e decidir próximos ajustes."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">❓</div>
      <div>
      <h2>2.11 PERGUNTAS FREQUENTES (FAQ) — LISTA DE PERGUNTAS<br /></h2>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Liste as perguntas frequentes organizadas por categoria:
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="faq_list" placeholder="Guia de resposta: Organize por categorias:

      Inscrição & Participação (beneficiários):
      • Quem pode se inscrever para participar das atividades?
      • Quais documentos são necessários para a inscrição?
      • Como funciona a lista de espera e o prazo de resposta?
      • Há critérios de prioridade no atendimento?
      • As atividades têm custo para as famílias?

      Rotina & Atividades:
      • Em quais dias e horários acontecem as atividades?
      • Onde as atividades são realizadas?
      • Há alimentação/lanche durante as atividades?
      • Como é feito o acompanhamento da evolução das crianças?
      • O que fazer em caso de falta ou atraso?

      Visitas & Conhecimento do Projeto:
      • Como agendar uma visita à Associação?
      • Posso levar familiares/amigos na visita?
      • Há dias/horários específicos para visitas guiadas?
      • O que acontece durante a visita?

      Voluntariado:
      • Como me inscrevo para ser voluntário(a)?
      • Quais habilidades são mais necessárias no momento?
      • Qual é o compromisso de tempo esperado do voluntário?
      • Existe formação/treinamento para voluntários?

      Doações (sem detalhes técnicos de pagamento):
      • Quais formas de doação vocês aceitam?
      • É possível fazer doação mensal/recorrente?
      • Como recebo comprovante/recibo da doação?
      • Posso doar materiais/itens físicos? O que é mais útil hoje?

      Parcerias (PJ/ESG):
      • Como empresas podem apoiar ou firmar parceria?
      • Quais contrapartidas a Associação oferece a parceiros?
      • Vocês têm materiais de apresentação para empresas?
      • Com quem falar para iniciar uma parceria?

      Transparência & Prestação de Contas:
      • Para onde vão os recursos doados?
      • Vocês publicam relatórios de atividades/financeiros?
      • Como acompanho resultados e indicadores de impacto?
      • Há conselho/diretoria responsável pela governança?

      Privacidade & LGPD:
      • Quais dados pessoais são coletados e por quê?
      • Como é feito o consentimento de uso de imagem?
      • Por quanto tempo os dados ficam armazenados?
      • Como solicitar a exclusão ou atualização dos meus dados?

      Acessibilidade & Inclusão:
      • O espaço é acessível para pessoas com deficiência?
      • Há adaptações de material para necessidades específicas?
      • Como informar necessidades de acessibilidade com antecedência?

      Comunicação & Contato:
      • Qual o melhor canal para tirar dúvidas (WhatsApp/e-mail)?
      • Em quanto tempo costumam responder?
      • Onde encontro endereço e mapa de localização?

      Tecnologia & Site:
      • Tive problema ao enviar um formulário. O que faço?
      • Não recebi o e-mail de confirmação. Como proceder?
      • Como atualizo meus dados cadastrados no site?"></textarea>
      </div>
    </div>
  )
}
