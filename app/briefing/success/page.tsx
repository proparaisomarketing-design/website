'use client'

import Link from 'next/link'

export default function BriefingSuccess() {
  return (
    <div style={{
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 20%, #ffffff 100%)',
      minHeight: '100vh',
      color: '#000000',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '600px',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.3)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.5)',
        borderRadius: '15px',
        padding: '60px 40px',
        boxShadow: 'none'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '24px', animation: 'bounce 2s infinite' }}>✅</div>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          color: '#0037FE',
          marginBottom: '16px'
        }}>
          Formulário Enviado!
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#0037FE',
          marginBottom: '32px',
          lineHeight: 1.6
        }}>
          Obrigado por preencher o formulário de briefing da Associação Pro-Paraíso. 
          Suas respostas foram enviadas com sucesso e nossa equipe entrará em contato em breve.
        </p>
        
        <div style={{
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          borderRadius: '15px',
          padding: '24px',
          marginBottom: '32px',
          textAlign: 'left'
        }}>
          <h3 style={{
            color: '#0037FE',
            fontSize: '1.2rem',
            marginBottom: '12px',
            fontWeight: 600
          }}>
            📧 Próximos Passos
          </h3>
          <p style={{
            color: '#0037FE',
            fontSize: '0.95rem',
            lineHeight: 1.5
          }}>
            Analisaremos suas respostas e entraremos em contato para discutir 
            os detalhes do seu novo site institucional. O processo de desenvolvimento 
            será iniciado em breve!
          </p>
        </div>

        <Link 
          href="/briefing" 
          style={{
            background: '#0037FE',
            color: 'white',
            padding: '16px 32px',
            border: 'none',
            borderRadius: '15px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          ← Voltar ao Formulário
        </Link>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-20px);
          }
          60% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}
