'use client'

export default function BriefingSection0() {
  return (
    <>
      <div className="question-card" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(30px)', WebkitBackdropFilter: 'blur(30px)', border: '1px solid rgba(255, 255, 255, 0.6)', borderRadius: '20px', padding: '20px', margin: '0 auto 30px auto', maxWidth: '900px', textAlign: 'left', boxShadow: 'none' }}>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#0037FE', marginTop: 0, marginBottom: '15px', fontSize: '43px', fontWeight: 400, fontStyle: 'normal' }}>
          📋BRIEFING PARA DESENVOLVIMENTO DE WEBSITE
        </h2>
        <p style={{ color: '#0037FE', margin: 0, fontSize: '16px', lineHeight: 1.8, textAlign: 'left' }}>
          Este questionário foi criado pela Promove Mais Comunicação para compreender a essência, o propósito e as necessidades reais da sua organização. Ele faz parte do nosso processo de briefing humanizado, que existe para garantir que o novo site represente, com verdade, quem você é, o que faz e qual transformação deseja gerar. Acreditamos que um site não nasce de um layout, nasce de uma história bem contada, por isso, antes de qualquer linha de código ou escolha de cor, nós escutamos. Escutamos para entender a identidade, a proposta de valor e o impacto que a sua marca deseja construir no mundo.
        </p>
      </div>
      
      {/* Box Verde */}
      <div className="info-box info-box-green">
        <div className="info-box-header">
          <div className="info-box-icon-circle">
            <span className="info-box-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 21H10V20H14V21Z" fill="#40FA01"/>
              </svg>
            </span>
          </div>
          <h3 className="info-box-title">SÓ QUEM VIVE, SABE!</h3>
        </div>
        <p className="info-box-text">
          Nosso trabalho parte de um princípio simples, porém poderoso, nenhuma estratégia de comunicação é verdadeira se não refletir a essência de quem a vive. É por isso que todo projeto da Promove começa com um briefing humanizado, um questionário cuidadosamente estruturado para revelar o coração da organização por trás do negócio. Apenas quem vive diariamente a cultura, as atividades e o modo de operar é capaz de expressar, com autenticidade, a realidade do que a organização é e do que nasceu para fazer. Este momento não é uma prova, é uma conversa guiada, passo a passo, que provoca reflexão, clareza e direção, e que coloca em palavras a alma do projeto, a história, os valores, as conquistas e o futuro que se deseja construir.
        </p>
        <div className="info-box-list">
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">o texto (histórias, mensagens e chamadas do site)</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">o tom de voz (como a ONG se comunica com o mundo)</span>
          </div>
        </div>
      </div>
      
      {/* Box Glassmorphism Branco */}
      <div className="info-box info-box-white">
        <div className="info-box-header">
          <div className="info-box-icon-circle">
            <span className="info-box-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 18C21.1 18 22 17.1 22 16V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V16C2 17.1 2.9 18 4 18H0V20H24V18H20ZM4 6H20V16H4V6Z" fill="#0037FE"/>
              </svg>
            </span>
          </div>
          <h3 className="info-box-title">MAIS DO QUE UMA PÁGINA SEM VIDA</h3>
        </div>
        <p className="info-box-text">
          Nosso objetivo não é criar apenas um site bonito, é criar um espaço funcional, vivo e coerente com a sua realidade e com a comunidade que você impacta. As perguntas aqui não são apenas técnicas, elas foram desenhadas para orientar decisões que deixam o site acessível, simples de navegar e preparado para facilitar as ações que importam, como conhecer o trabalho, entrar em contato, apoiar, participar e se engajar. Não adianta construir uma fachada elegante se ela não for funcional para quem navega, estratégica para quem comunica e autêntica para quem representa.
        </p>
        <div className="info-box-list">
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">informe com clareza quem a Associação é e o que realiza;</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">facilite ações (doar, voluntariar, participar, entrar em contato);</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">seja acessível e simples de navegar por famílias, parceiros e doadores;</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">apoie a captação com CTAs, conteúdo e estrutura pensados para resultado.</span>
          </div>
        </div>
      </div>
      
      {/* Box Azul */}
      <div className="info-box info-box-blue">
        <div className="info-box-header">
          <div className="info-box-icon-circle">
            <span className="info-box-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#0037FE"/>
                <path d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z" fill="#0037FE"/>
                <path d="M5 19L5.5 20.5L7 21L5.5 21.5L5 23L4.5 21.5L3 21L4.5 20.5L5 19Z" fill="#0037FE"/>
              </svg>
            </span>
          </div>
          <h3 className="info-box-title">PARA CRIAR PERFEITO</h3>
        </div>
        <p className="info-box-text">
          As perguntas que você encontrará a seguir foram pensadas para ajudar a equipe a refletir sobre quem a Associação é, o que a move e como quer ser percebida. Cada resposta é um tijolo na construção da presença digital da Pro-Paraiso e juntas, elas formam o alicerce para criar um site que não apenas informa, mas inspira.
        </p>
        <div className="info-box-list">
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">arquitetura do site (páginas, seções e navegação);</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">texto e tom de voz (mensagens-chave, histórias e chamadas para ação);</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">prioridades técnicas (formularios, doações, voluntariado, acessibilidade, SEO);</span>
          </div>
          <div className="info-box-list-item">
            <span className="info-box-list-check">✅</span>
            <span className="info-box-list-text">métricas de sucesso (engajamento, doações, voluntariado, alcance).</span>
          </div>
        </div>
      </div>
      
      <div className="resource-cta">
        <p><strong>DRIVE DE APOIO</strong> &gt; Precisamos de fotos, vídeos ou outros materiais necessários para inserir no site. Faça upload no drive dedicado a este projeto.</p>
        <a 
          className="resource-button" 
          href="https://drive.google.com/drive/folders/1fz7rzyQK4RguwyPHQCutQRi2xpvmijbF?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <span className="resource-button-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 6.5A2.5 2.5 0 016 4h3.172a2 2 0 011.414.586l.828.828H18a3 3 0 013 3v7.5A3.5 3.5 0 0117.5 19H6.5A3.5 3.5 0 013 15.5V6.5z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 12h8" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8 15h4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </span>
          <span>Depositar materiais de apoio</span>
        </a>
      </div>

      {/* Avisos e dicas */}
      <div className="question-card" style={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '20px', padding: '25px', marginBottom: '30px', textAlign: 'left', boxShadow: 'none' }}>
        <h3 style={{ color: '#0037FE', marginTop: 0, marginBottom: '15px', fontSize: '1.2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '62px', height: '62px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.6)', borderRadius: '20px', padding: '11px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#0037FE"/>
            </svg>
          </span>
          Aviso importante (não perca suas respostas)
        </h3>
        <ul style={{ color: '#0037FE', margin: 0, paddingLeft: '20px', textAlign: 'left' }}>
          <li>Após preencher cada bloco, clique em <strong>"💾 Salvar este bloco"</strong> ou <strong>"📧 Enviar por email"</strong> para não perder suas respostas.</li>
          <li>Se o formulário não salvar automaticamente, suas respostas podem ser perdidas ao recarregar a página.</li>
          <li>Elabore as respostas com o ChatGPT e, depois, cole no campo correspondente do formulário.</li>
        </ul>
      </div>

      <div className="question-card" style={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '20px', padding: '25px', marginBottom: '30px', textAlign: 'left', boxShadow: 'none' }}>
        <h3 style={{ color: '#0037FE', marginTop: 0, marginBottom: '15px', fontSize: '1.2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '62px', height: '62px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.6)', borderRadius: '20px', padding: '11px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 21H10V20H14V21Z" fill="#0037FE"/>
            </svg>
          </span>
          Dicas para responder bem
        </h3>
        <ul style={{ color: '#0037FE', margin: 0, paddingLeft: '20px', textAlign: 'left' }}>
          <li>Use texto, ou responda por áudio que o agente criado para ajudar a criar o seu site é especialista em tudo isso que vamos fazer, ou seja ele só precisa que você explique os dados concretos, mas a parte de criar a ideia do texto irá sair tudo com apenas poucas respostas.</li>
          <li>Traga exemplos concretos, números simples e histórias reais.</li>
          <li>Siga as perguntas etapa por etapa.</li>
        </ul>
      </div>

      <div className="question-card" style={{ background: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255, 255, 255, 0.5)', borderRadius: '20px', padding: '25px', marginBottom: '30px', textAlign: 'left', boxShadow: 'none' }}>
        <h3 style={{ color: '#0037FE', marginTop: 0, marginBottom: '15px', fontSize: '1.2rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '62px', height: '62px', background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.6)', borderRadius: '20px', padding: '11px' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#0037FE"/>
              <path d="M19 15L19.5 17.5L22 18L19.5 18.5L19 21L18.5 18.5L16 18L18.5 17.5L19 15Z" fill="#0037FE"/>
              <path d="M5 19L5.5 20.5L7 21L5.5 21.5L5 23L4.5 21.5L3 21L4.5 20.5L5 19Z" fill="#0037FE"/>
            </svg>
          </span>
          Pronta(o) para começar?
        </h3>
        <p style={{ color: '#0037FE', margin: 0, fontSize: '1.1rem' }}>
          Responda uma pergunta por vez, valide o conteúdo e transfira para o formulário. Vamos em frente! 😊
        </p>
      </div>
    </>
  )
}
