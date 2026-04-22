import { useEffect } from 'react'

interface Section6Props {
  savedData?: Record<string, string>
}

export default function BriefingSection6({ savedData }: Section6Props) {
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
      <h2>💰 BLOCO 6 — AQUISIÇÃO E CAPTAÇÃO DE APOIO</h2>
      <p>(Conecta-se ao PLANO DE DOAÇÃO do BLOCO 2; aqui olhamos a captação como um todo — doadores PF/PJ, voluntários e parceiros — além do site.)</p>
      <p>Objetivo: identificar quem queremos que ajude, onde encontrá-los, como converter em apoio (doação/voluntariado/parcerias) e como manter vínculo de longo prazo, de forma simples e mensurável.</p>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">👥</div>
      <div>
      <h2>6.1 PÚBLICOS-ALVO PRIORITÁRIOS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Philip Kotler — segmentação com propósito
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quem são os públicos prioritários para captação (PF, PJ/ESG, voluntários, editais, parceiros locais)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="target_publics" placeholder="Guia de resposta: Liste 3–5 segmentos. Use: 'Público — motivação — como ajudamos — valor percebido.' Ex.: 'PF recorrente — impacto local — aulas semanais — proximidade e transparência.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">💎</div>
      <div>
      <h2>6.2 PROPOSTA DE VALOR POR PÚBLICO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Michael Porter — valor gerado para cada stakeholder
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual promessa clara fazemos para cada público apoiar hoje?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="value_proposition_by_public" placeholder="Guia de resposta: Use: 'Para [público], entregamos [resultado concreto] por meio de [abordagem], comprovado por [prova simples].'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">🔍</div>
      <div>
      <h2>6.3 COMO RECEBEM APOIO HOJE (DIAGNÓSTICO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — o que é medido, melhora
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Por onde as pessoas já chegam para ajudar — e o que mais funciona na prática?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="current_support_diagnosis" placeholder="Guia de resposta: Preencha sem jargão: Canal (WhatsApp/visita/Instagram/eventos/indicação) — Frequência (quase nunca/às vezes/sempre) — Vira ajuda? (quase nunca/às vezes/quase sempre) — Esforço (fácil/médio/difícil) — Tipo de apoio (doação única/recorrente/voluntariado/parceria) — Observações (o que ajuda a converter)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🎯</div>
      <div>
      <h2>6.4 COMO CAPTAR (ESTRATÉGIA CONTÍNUA)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Eric Ries — teste e aprendizado contínuos
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais ações fixas e simples teremos em andamento para atrair mais apoio?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="capture_strategy" placeholder="Guia de resposta: Liste 3–5 frentes permanentes. Use: 'Ideia — Onde — Quem cuida — Sinal de que funcionou.' Ex.: 'Visitas guiadas mensais — sede — coordenação — 3 novos doadores por visita.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📦</div>
      <div>
      <h2>6.5 OFERTAS E PLANOS DE APOIO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Dan Ariely — simplificar escolhas
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais faixas/planos de apoio vamos oferecer (PF/PJ), com contrapartidas claras?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="support_plans" placeholder="Guia de resposta: Use: 'Plano — valor — o que viabiliza — como a pessoa acompanha.' Ex.: 'R$50/mês — reforço escolar — relatório simples por e-mail.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🧭</div>
      <div>
      <h2>6.7 CAMINHOS DE CONVERSÃO (FUNIL SIMPLES)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Steve Krug — não complique o caminho
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o passo a passo do primeiro contato até a ação de apoio?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="conversion_paths" placeholder="Guia de resposta: Desenhe: Descoberta → Interesse → Confiança → Ação → Boas-vindas. Use: 'Etapa — conteúdo/convite — ferramenta — sinal de avanço.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🎉</div>
      <div>
      <h2>6.8 ONBOARDING DE NOVOS APOIADORES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Seth Godin — crie pertencimento
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que acontece imediatamente após alguém apoiar para criar vínculo?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="onboarding_supporters" placeholder="Guia de resposta: Mensagem de agradecimento, próxima ação (visita/WhatsApp), quando chega o primeiro retorno (história/relatório), quem fala com a pessoa."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">💚</div>
      <div>
      <h2>6.9 RETENÇÃO E RELACIONAMENTO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Frederick Reichheld — lealdade de longo prazo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como manteremos os apoiadores engajados e reduziremos cancelamentos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="retention_relationship" placeholder="Guia de resposta: Cadência de notícias, convites a eventos, comunidade, upgrades anuais. Use: 'Ação — frequência — responsável — sinal de sucesso.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🗣️</div>
      <div>
      <h2>6.10 PROGRAMA DE INDICAÇÕES & EMBAIXADORES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Jonah Berger — boca a boca estruturado
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como transformaremos apoiadores satisfeitos em divulgadores da causa?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="referral_program" placeholder="Guia de resposta: Use: 'Quem indica — incentivo — como indicar — meta simples.' Ex.: 'Voluntários — badge + visita bônus — link de indicação — 20 novas indicações/trim.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">🤝</div>
      <div>
      <h2>6.11 PARCERIAS E ECOSSISTEMA DE AMPLIFICAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> John Kania & Mark Kramer — impacto coletivo
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais parcerias estratégicas podem ampliar alcance, credibilidade e recursos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="partnerships_ecosystem" placeholder="Guia de resposta: 'Parceiro — contrapartida — objetivo — próximo passo.' Ex.: 'Escola local — espaço para aulas — captar famílias — reunião até ___.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📊</div>
      <div>
      <h2>6.12 KPIs DE AQUISIÇÃO E RETENÇÃO (SEM JARGÃO)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — medir o essencial
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais sinais simples vamos acompanhar para saber se estamos crescendo bem?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="acquisition_retention_kpis" placeholder="Guia de resposta: Escolha 3–5 sinais: novos apoiadores por mês, pessoas que continuam após 3 meses, pedidos de visita, mensagens pedindo como ajudar, doações que se repetem. Defina: meta — quando olhar — quem olha."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🔒</div>
      <div>
      <h2>6.13 ÉTICA, LGPD E SEGURANÇA NA CAPTAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> LGPD (Brasil) / Bruce Schneier
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como vamos pedir dados e doações com respeito, clareza e segurança?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="ethics_lgpd_security" placeholder="Guia de resposta: Texto simples de consentimento, política de privacidade visível, opção de sair da lista, HTTPS e backups, quem acessa os dados e por quanto tempo."></textarea>
      </div>

      <div style={{ margin: '40px 0 20px 0', padding: '20px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '20px', borderLeft: '4px solid #0037FE' }}>
      <h3 style={{ margin: '0 0 10px 0', color: '#0037FE', fontSize: '1.3rem' }}>💰 Módulo 2 — PLANO DE DOAÇÃO</h3>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🎯</div>
      <div>
      <h2>6.14 OBJETIVO DA PÁGINA DE DOAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Steve Krug — "Não me faça pensar."
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual é o objetivo principal da página de doação (única, mensal, apadrinhamento, projeto específico)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_page_objective" placeholder="Guia de resposta: O que a pessoa deve fazer em 1 clique? (ex.: 'Escolher um valor e pagar por PIX'). O que deve sentir antes de doar? (ex.: confiança e clareza)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">💰</div>
      <div>
      <h2>6.15 FAIXAS DE VALOR & OPÇÕES<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Dan Ariely — escolhas simples aumentam decisão
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais valores sugeridos vamos apresentar e quais opções a pessoa terá?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_value_ranges" placeholder="Guia de resposta: Liste 3–4 valores fáceis (ex.: R$30, R$60, R$120, Outro). Terá doação mensal? Haverá 'apadrinhe uma criança/turma'? Algum projeto para doar direto?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">💳</div>
      <div>
      <h2>6.16 FORMAS DE PAGAMENTO (BRASIL)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Nielsen Norman Group (NN/g) — usabilidade em formulários
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais formas de pagamento vamos oferecer?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="payment_methods" placeholder="Guia de resposta: PIX (com QR e copia e cola), Cartão, Boleto (opcional). Mostrar taxa/segurança? Precisa de comprovante no WhatsApp? Preferências da equipe."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">🔄</div>
      <div>
      <h2>6.17 RECORRÊNCIA (DOAÇÃO MENSAL)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Patty McCord — simplifique o compromisso
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como vamos incentivar e administrar a doação mensal?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="recurring_donation" placeholder="Guia de resposta: Haverá um botão 'Tornar mensal'? Benefícios (relatório exclusivo, visita, comunidade). Como a pessoa pausa/cancela de forma simples?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">📊</div>
      <div>
      <h2>6.18 TRANSPARÊNCIA & PRESTAÇÃO DE CONTAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Peter Drucker — "O que é medido, melhora."
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que informações de transparência vamos mostrar junto da doação?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="transparency_accountability" placeholder="Guia de resposta: 'Para onde vai o dinheiro' (em linguagem simples), 3 números de impacto, 1 história curta, relatórios para baixar (mensal/trimestral/semestral)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">📄</div>
      <div>
      <h2>6.19 RECIBO, COMPROVANTE & LGPD<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> LGPD (Brasil) / Bruce Schneier
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como a pessoa recebe recibo/comprovante e como tratamos dados pessoais?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="receipt_lgpd" placeholder="Guia de resposta: Enviar por e-mail/WhatsApp? Texto simples de consentimento. Quem acessa os dados? Tempo de guarda. Link para Política de Privacidade."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">🏢</div>
      <div>
      <h2>6.19 PESSOA JURÍDICA (PARCERIAS/ESG)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Michael Porter — valor compartilhado
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Que opções específicas ofereceremos para empresas (PJ)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="pj_partnerships_esg" placeholder="Guia de resposta: Cotas/projetos, contrapartidas (relatório ESG, visita técnica, logo em materiais), como iniciar conversa (formulário rápido ou e-mail direto)."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">⭐</div>
      <div>
      <h2>6.20 PROVAS DE CONFIANÇA<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Robert Cialdini — prova social
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais evidências vamos usar para aumentar confiança e reduzir dúvidas (no site, redes sociais e página de doação)?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_trust_evidence" placeholder="Guia de resposta: 2 depoimentos curtos, 1 case 'antes/depois', 3 números de impacto, logos de parceiros, fotos reais e simples. Onde cada prova aparece (evento, WhatsApp, post, página de doação - topo/meio/rodapé)?"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon purple">📢</div>
      <div>
      <h2>6.21 MENSAGENS & CTAs (TEXTOS PRONTOS)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Joanna Wiebe — copy para conversão
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Qual mensagem-âncora e quais CTAs vamos usar na página de doação?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_messages_ctas" placeholder="Guia de resposta: Use: 'Mensagem: [benefício humano em 1 frase]. Prova: [número/relato]. CTA: [ação única].' Ex.: 'Com R$60/mês, uma criança tem reforço escolar. 8 em cada 10 melhoraram leitura. Doe agora.'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon orange">📝</div>
      <div>
      <h2>6.22 FORMULÁRIO SIMPLES (CAMPOS & ETAPAS)<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Luke Wroblewski — formulários que convertem
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais campos realmente precisamos pedir para não cansar o doador?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_form" placeholder="Guia de resposta: Nome e e-mail bastam? Telefone é opcional? Endereço só para recibo? Etapas: Valor → Dados → Pagamento → Confirmação."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon teal">🎉</div>
      <div>
      <h2>6.23 PÓS-DOAÇÃO & ONBOARDING<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Seth Godin — crie pertencimento
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que acontece logo após a doação para gerar vínculo?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="post_donation_onboarding" placeholder="Guia de resposta: Tela de 'obrigado' com próxima ação (visita/WhatsApp), e-mail de boas-vindas, quando enviamos o primeiro retorno (história/relatório), convite para comunidade."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon gradient">❓</div>
      <div>
      <h2>6.24 FAQ DA DOAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> NN/g — reduzir ansiedade com respostas claras
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Quais dúvidas comuns vamos responder na própria página?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_faq" placeholder="Guia de resposta: 'É seguro?', 'Posso cancelar a mensalidade?', 'Tem recibo?', 'PIX reconhece na hora?', 'Como mudar o valor?', 'Posso doar em nome de alguém?'"></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon blue">♿</div>
      <div>
      <h2>6.25 ACESSIBILIDADE NA DOAÇÃO<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> W3C (WCAG) — acessibilidade web
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      Como garantimos que a página de doação funciona para todos?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_accessibility" placeholder="Guia de resposta: Botões grandes, alto contraste, textos claros, rótulos de campos, alternativa em 1 passo por PIX, carregamento leve no celular."></textarea>
      </div>

      <div className="question-card">
      <div className="question-header">
      <div className="question-icon green">🔬</div>
      <div>
      <h2>6.26 TESTES & MELHORIAS CONTÍNUAS<br /></h2>
      <div className="question-description" style={{ marginBottom: '10px' }}>
      <strong>Referência:</strong> Eric Ries — melhoria contínua
      </div>
      <div className="question-title" style={{ marginBottom: '10px' }}>
      O que vamos testar e revisar ao longo do tempo na página de doação?
      </div>
      </div>
      </div>
      <textarea className="question-textarea" name="donation_testing_improvements" placeholder="Guia de resposta: Ex.: posição do CTA, texto do botão, ordem dos valores, história/gatilho no topo, comprovante via WhatsApp. Sinais de que melhorou: mais pessoas concluindo a doação."></textarea>
      </div>
    </div>
  )
}
