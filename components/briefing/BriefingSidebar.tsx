'use client'

interface BriefingSidebarProps {
  currentSection: number
  totalSections: number
  onNavigate: (section: number) => void
}

const steps = [
  { number: 1, title: 'ESSÊNCIA E IDENTIDADE' },
  { number: 2, title: 'ESTRUTURA DO SITE' },
  { number: 3, title: 'PROPÓSITO E IMPACTO' },
  { number: 4, title: 'PÚBLICOS E COMUNIDADE' },
  { number: 5, title: 'CAPTAÇÃO DE APOIO' },
  { number: 6, title: 'ARQUITETURA FINAL' },
]

export default function BriefingSidebar({ currentSection, totalSections, onNavigate }: BriefingSidebarProps) {
  const getStepState = (stepNumber: number): 'active' | 'completed' | 'future' => {
    if (stepNumber === currentSection) return 'active'
    if (stepNumber < currentSection) return 'completed'
    return 'future'
  }

  const getStepDotContent = (stepNumber: number, state: string) => {
    if (state === 'completed') {
      return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.5" cy="19.5" r="16.5" fill="#00FF00" stroke="#0037FE" strokeWidth="0"/>
          <text x="19.5" y="19.5" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central">{stepNumber}</text>
          <path d="M12 19.5L17 24.5L27 14.5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
    if (state === 'active') {
      return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.5" cy="19.5" r="16.5" fill="#0037FE" stroke="#00FF00" strokeWidth="4"/>
          <text x="19.5" y="19.5" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central">{stepNumber}</text>
        </svg>
      )
    }
    return (
      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19.5" cy="19.5" r="16.5" fill="#000000" stroke="#00FF00" strokeWidth="0"/>
        <text x="19.5" y="19.5" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle" dominantBaseline="central">{stepNumber}</text>
      </svg>
    )
  }

  return (
    <div className="sidebar">
      <div className="sidebar-elements">
        <div className="top-content"></div>

        <div className="steps-container">
          {/* Step 0 - Título */}
          <div className="step-item">
            <div className="steps" onClick={() => onNavigate(0)}>
              <div className="step-dot" style={{ display: 'none' }}></div>
              <div className="step-texts">
                <div className={`step-title ${currentSection === 0 ? 'active' : 'future'}`}>
                  <h2 style={{ marginBottom: '15px' }}>ETAPAS DO BRIEFING</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Steps 1-8 */}
          {steps.map((step, index) => {
            const state = getStepState(step.number)
            const isLast = index === steps.length - 1
            
            return (
              <div key={step.number} className="step-item">
                {!isLast && (
                  <div className={`process-bar ${state === 'active' || state === 'completed' ? 'active' : ''}`}>
                    <svg width="3" height="20" viewBox="0 0 3 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="3" height="20" fill={state === 'active' || state === 'completed' ? '#00FF00' : '#CFD6DC'}/>
                    </svg>
                  </div>
                )}
                <div className="steps" onClick={() => onNavigate(step.number)}>
                  <div className={`step-dot ${state}`}>
                    <div data-svg-wrapper>
                      {getStepDotContent(step.number, state)}
                    </div>
                  </div>
                  <div className="step-texts">
                    <div className={`step-title ${state}`}>
                      <h4>Bloco {step.number}.</h4>
                      <h3>{step.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="bottom-wrapper">
        <div className="help-content">
          <div className="help-texts">
            <div className="help-title">Está com dúvida?</div>
            <div className="help-paragraph">Chame a Daniela Socoloski da Promove Mais Comunicação no WhatsApp</div>
          </div>
          <a 
            href="https://api.whatsapp.com/send/?phone=5566992145173&text=Olá,%20eu%20gostaria%20de%20ajuda%20sobre...&type=phone_number&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
            className="help-button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
            </svg>
            <span>066 99214-5173</span>
          </a>
        </div>
        <div className="bottom-divider"></div>
      </div>
    </div>
  )
}
