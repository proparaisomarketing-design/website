'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  suggestedText?: string // Texto sugerido para preencher o campo
}

interface BriefingChatProps {
  currentSection: number
  savedData?: Record<string, string>
}

interface CurrentQuestion {
  title: string
  questionNumber?: string
  description?: string
  fieldName?: string
  sectionTitle: string
  isEmpty?: boolean
}

export default function BriefingChat({ currentSection, savedData }: BriefingChatProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion | null>(null)
  
  // Detectar qual pergunta está visível/focada - PRIORIDADE: primeiro campo vazio
  useEffect(() => {
    const detectCurrentQuestion = () => {
      if (currentSection === 0) return null

      // Encontrar a seção ativa
      const activeSection = document.querySelector(`.section[data-section="${currentSection}"].active`)
      if (!activeSection) return null

      // Buscar TODOS os campos da seção
      const allFields = Array.from(activeSection.querySelectorAll('textarea, input[type="text"], input[type="email"], select')) as (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[]
      
      if (allFields.length === 0) return null

      // PRIORIDADE 1: Encontrar o primeiro campo VAZIO (não preenchido)
      // Verificar tanto no DOM quanto nos dados salvos
      let targetField: HTMLElement | null = null
      
      for (let i = 0; i < allFields.length; i++) {
        const field = allFields[i]
        const fieldName = field.name || ''
        
        // Verificar valor no DOM
        const domValue = field.value || ''
        
        // Verificar valor nos dados salvos
        const savedValue = savedData?.[fieldName] || ''
        
        // Campo está vazio se ambos (DOM e savedData) estão vazios
        const isEmpty = !domValue.trim() && !savedValue.trim()
        
        if (isEmpty) {
          targetField = field
          break
        }
      }

      // PRIORIDADE 2: Se todos estão preenchidos, verificar qual está visível na viewport
      if (!targetField) {
        allFields.forEach((field) => {
          const rect = field.getBoundingClientRect()
          const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.7 // 70% da tela
          if (isVisible && !targetField) {
            targetField = field
          }
        })
      }

      // PRIORIDADE 3: Se ainda não encontrou, pegar o primeiro campo da seção
      if (!targetField && allFields.length > 0) {
        targetField = allFields[0]
      }

      if (!targetField) return null

      // Encontrar a question-card pai
      const questionCard = targetField.closest('.question-card')
      if (!questionCard) {
        // Pode ser um campo dentro de form-grid (como na seção 1)
        const formSection = targetField.closest('section')
        if (formSection) {
          const titleElement = formSection.querySelector('h2')
          let title = titleElement?.textContent?.trim() || ''
          title = title.replace(/\s+/g, ' ')
          
          const questionNumberMatch = title.match(/^(\d+(?:\.\d+)?)/)
          const questionNumber = questionNumberMatch ? questionNumberMatch[1] : ''
          
          const fieldName = (targetField as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).name
          const sectionTitle = activeSection.querySelector('h2')?.textContent?.trim() || ''
          const domValue = (targetField as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value || ''
          const savedValue = savedData?.[fieldName] || ''
          const isEmpty = !domValue.trim() && !savedValue.trim()
          
          return {
            title: title,
            questionNumber: questionNumber,
            description: '',
            fieldName,
            sectionTitle: sectionTitle.replace(/\s+/g, ' '),
            isEmpty
          }
        }
        return null
      }

      // Extrair título da pergunta
      const titleElement = questionCard.querySelector('h2')
      let title = titleElement?.textContent?.trim() || ''
      title = title.replace(/\s+/g, ' ')

      // Extrair número da pergunta (ex: "1.8", "1.17", "5", "7")
      const questionNumberMatch = title.match(/^(\d+(?:\.\d+)?)/)
      const questionNumber = questionNumberMatch ? questionNumberMatch[1] : ''

      // Extrair descrição/pergunta específica
      const questionTitle = questionCard.querySelector('.question-title')
      const description = questionTitle?.textContent?.trim() || ''

      // Extrair nome do campo
      const fieldName = (targetField as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).name

      // Extrair título da seção
      const sectionTitle = activeSection.querySelector('h2')?.textContent?.trim() || ''

      // Verificar se está vazio (DOM e savedData)
      const domValue = (targetField as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement).value || ''
      const savedValue = savedData?.[fieldName] || ''
      const isEmpty = !domValue.trim() && !savedValue.trim()

      return {
        title: title,
        questionNumber: questionNumber,
        description: description.replace(/\s+/g, ' '),
        fieldName,
        sectionTitle: sectionTitle.replace(/\s+/g, ' '),
        isEmpty
      }
    }

    const question = detectCurrentQuestion()
    setCurrentQuestion(question)

    // Atualizar quando scrollar, mudar de seção ou quando dados salvos mudarem
    const handleUpdate = () => {
      const newQuestion = detectCurrentQuestion()
      if (newQuestion) {
        setCurrentQuestion(newQuestion)
      }
    }

    window.addEventListener('scroll', handleUpdate, { passive: true })
    
    // Observar mudanças nos campos (quando dados são preenchidos)
    const observer = new MutationObserver(handleUpdate)
    const activeSection = document.querySelector(`.section[data-section="${currentSection}"].active`)
    if (activeSection) {
      observer.observe(activeSection, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['value']
      })
    }

    return () => {
      window.removeEventListener('scroll', handleUpdate)
      observer.disconnect()
    }
  }, [currentSection, savedData])

  const [messages, setMessages] = useState<Message[]>([])
  const lastQuestionRef = useRef<string>('')
  const isInitializedRef = useRef(false)
  
  // Resetar e inicializar mensagens quando abrir o chat ou mudar a pergunta
  useEffect(() => {
    if (isOpen) {
      const questionKey = currentQuestion ? `${currentQuestion.questionNumber || currentQuestion.title}-${currentQuestion.fieldName}-${currentQuestion.isEmpty}` : 'none'
      
      // Se mudou a pergunta ou é a primeira vez abrindo, atualizar mensagem inicial
      if (questionKey !== lastQuestionRef.current || !isInitializedRef.current) {
        let initialMessage = ''
        
        if (currentQuestion) {
          // Formatar título com número da pergunta (ex: "1.8 NOME E SIGNIFICADO")
          const questionDisplay = currentQuestion.questionNumber 
            ? `${currentQuestion.questionNumber} ${currentQuestion.title.replace(/^\d+(?:\.\d+)?\s*/, '')}`
            : currentQuestion.title
          
          // Se o campo está vazio, focar nele
          if (currentQuestion.isEmpty) {
            initialMessage = `Olá! Vejo que você está trabalhando no **${currentQuestion.sectionTitle}**.\n\nEstamos na pergunta:\n**${questionDisplay}**\n\n${currentQuestion.description ? `*${currentQuestion.description}*\n\n` : ''}Este campo ainda não foi preenchido. Posso te ajudar a pensar e formular uma resposta completa para essa pergunta?`
          } else {
            // Se está preenchido, informar mas focar no próximo vazio
            initialMessage = `Olá! Vejo que você está trabalhando no **${currentQuestion.sectionTitle}**.\n\nA pergunta **${questionDisplay}** já está preenchida. Vamos continuar com as próximas perguntas do bloco?`
          }
        } else {
          initialMessage = 'Olá! Sou o PROMOVE MAIS BRIEFING ASSISTANT. Estou aqui para te ajudar a preencher o formulário de briefing da Associação Pró-Paraíso. Como posso ajudar você hoje?'
        }
        
        setMessages([{
          role: 'assistant',
          content: initialMessage
        }])
        lastQuestionRef.current = questionKey
        isInitializedRef.current = true
      }
    } else {
      // Quando fechar, resetar
      lastQuestionRef.current = ''
      isInitializedRef.current = false
      setMessages([])
    }
  }, [isOpen, currentQuestion?.title, currentQuestion?.questionNumber, currentQuestion?.fieldName, currentQuestion?.description, currentQuestion?.sectionTitle, currentQuestion?.isEmpty])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const recognitionRef = useRef<any>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Função para preencher o campo atual
  const fillCurrentField = (text: string) => {
    if (!currentQuestion?.fieldName) {
      showNotification('Nenhum campo identificado para preencher.', 'error')
      return
    }

    const field = document.querySelector(`[name="${currentQuestion.fieldName}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    if (!field) {
      showNotification('Campo não encontrado no formulário.', 'error')
      return
    }

    // Preencher o campo
    field.value = text
    
    // Disparar evento de mudança para atualizar o estado
    const event = new Event('input', { bubbles: true })
    field.dispatchEvent(event)
    
    // Disparar evento de mudança também
    const changeEvent = new Event('change', { bubbles: true })
    field.dispatchEvent(changeEvent)

    // Focar no campo preenchido
    field.focus()
    
    // Scroll suave até o campo
    field.scrollIntoView({ behavior: 'smooth', block: 'center' })

    showNotification('✅ Campo preenchido com sucesso!', 'success')
    
    // Atualizar a detecção da pergunta atual
    setTimeout(() => {
      const updateEvent = new Event('scroll', { bubbles: true })
      window.dispatchEvent(updateEvent)
    }, 500)
  }

  // Função para mostrar notificações
  const showNotification = (message: string, type: 'success' | 'error' = 'success') => {
    // Criar elemento de notificação
    const notification = document.createElement('div')
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#10b981' : '#ef4444'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      z-index: 10000;
      font-size: 14px;
      font-weight: 500;
      animation: slideIn 0.3s ease-out;
    `
    notification.textContent = message
    document.body.appendChild(notification)

    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out'
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Extrair texto sugerido da resposta do assistente
  const extractSuggestedText = (message: string): string | null => {
    // Padrão 1: "RESPOSTA SUGERIDA:" seguido de texto (pode ter --- antes)
    const pattern1 = /(?:---\s*)?RESPOSTA SUGERIDA:\s*\n\n?([\s\S]+?)(?:\n\s*---|$)/i
    const match1 = message.match(pattern1)
    if (match1 && match1[1]) {
      return match1[1].trim()
    }

    // Padrão 2: Texto entre ``` (código)
    const pattern2 = /```[\s\S]*?\n([\s\S]+?)```/
    const match2 = message.match(pattern2)
    if (match2 && match2[1]) {
      return match2[1].trim()
    }

    // Padrão 3: Texto entre aspas duplas (última ocorrência, geralmente é a resposta final)
    const pattern3 = /"([^"]{20,})"/g
    const matches3 = message.matchAll(pattern3)
    let lastMatch = null
    for (const match of matches3) {
      lastMatch = match[1]
    }
    if (lastMatch && lastMatch.length > 20) {
      return lastMatch.trim()
    }

    // Padrão 4: Se a mensagem é curta e parece ser uma resposta direta (não uma pergunta ou explicação)
    const lines = message.split('\n').filter(line => line.trim().length > 0)
    const lastLines = lines.slice(-3).join('\n')
    
    // Se as últimas linhas não contêm interrogações e têm mais de 30 caracteres, pode ser a resposta
    if (!lastLines.includes('?') && lastLines.length > 30 && lastLines.length < 2000) {
      // Verificar se não é apenas uma instrução
      const instructionWords = ['copie', 'cole', 'preencha', 'use', 'clique', 'botão']
      const isInstruction = instructionWords.some(word => lastLines.toLowerCase().includes(word))
      
      if (!isInstruction) {
        return lastLines.trim()
      }
    }

    return null
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/briefing/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMessage,
          currentSection,
          savedData,
          currentQuestion
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem')
      }

      const data = await response.json()
      const assistantMessage = data.message
      
      // Extrair texto sugerido se houver
      const suggestedText = extractSuggestedText(assistantMessage)
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: assistantMessage,
        suggestedText: suggestedText || undefined
      }])
    } catch (error) {
      console.error('Erro:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Desculpe, ocorreu um erro. Por favor, verifique se a OPENAI_API_KEY está configurada no servidor.'
      }])
    } finally {
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Inicializar Speech Recognition
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Verificar se a API está disponível
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition()
        recognition.continuous = false
        recognition.interimResults = false
        recognition.lang = 'pt-BR'

        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript
          setInput(prev => prev + (prev ? ' ' : '') + transcript)
          setIsListening(false)
        }

        recognition.onerror = (event: any) => {
          console.error('Erro no reconhecimento de voz:', event.error)
          setIsListening(false)
          if (event.error === 'no-speech') {
            alert('Nenhuma fala detectada. Tente novamente.')
          } else if (event.error === 'not-allowed') {
            alert('Permissão de microfone negada. Por favor, permita o acesso ao microfone.')
          }
        }

        recognition.onend = () => {
          setIsListening(false)
        }

        recognitionRef.current = recognition
      }
    }
  }, [])

  const handleVoiceToggle = () => {
    if (!recognitionRef.current) {
      alert('Reconhecimento de voz não está disponível no seu navegador. Use Chrome, Edge ou Safari.')
      return
    }

    if (isListening) {
      recognitionRef.current.stop()
      setIsListening(false)
    } else {
      try {
        recognitionRef.current.start()
        setIsListening(true)
      } catch (error) {
        console.error('Erro ao iniciar gravação:', error)
        setIsListening(false)
      }
    }
  }

  return (
    <>
      {/* Botão flutuante para abrir o chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            padding: '16px 28px',
            borderRadius: '50px',
            background: 'linear-gradient(135deg, #0037FE 0%, #00FF00 100%)',
            border: 'none',
            boxShadow: '0 8px 24px rgba(0, 55, 254, 0.4)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            color: 'white',
            fontSize: '16px',
            fontWeight: 700,
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
            e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 55, 254, 0.5)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 55, 254, 0.4)'
          }}
          aria-label="Abrir chat com assistente"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.477 2 2 6.021 2 11.182c0 2.901 1.438 5.519 3.711 7.234l-.791 3.125a.75.75 0 001.02.86l3.734-1.281c.789.181 1.612.277 2.457.277 5.523 0 10-4.02 10-9.182C22 6.021 17.523 2 12 2z" fill="white"/>
          </svg>
          <span>Clique aqui para começar</span>
        </button>
      )}

      {/* Janela do chat */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '400px',
            maxWidth: 'calc(100vw - 48px)',
            height: '600px',
            maxHeight: 'calc(100vh - 48px)',
            background: 'white',
            borderRadius: '20px',
            boxShadow: '0 12px 48px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1001,
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0037FE 0%, #00FF00 100%)',
              padding: '16px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'white'
            }}
          >
            <div>
              <div style={{ fontWeight: 600, fontSize: '16px' }}>💬 Assistente de Briefing</div>
              <div style={{ fontSize: '12px', opacity: 0.9 }}>Daniela Socoloski - Promove Mais</div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                borderRadius: '8px',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Fechar chat"
            >
              ✕
            </button>
          </div>

          {/* Mensagens */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              background: '#f9fafb'
            }}
          >
            <style jsx>{`
              @keyframes pulse {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.5;
                }
              }
              @keyframes slideIn {
                from {
                  transform: translateX(100%);
                  opacity: 0;
                }
                to {
                  transform: translateX(0);
                  opacity: 1;
                }
              }
              @keyframes slideOut {
                from {
                  transform: translateX(0);
                  opacity: 1;
                }
                to {
                  transform: translateX(100%);
                  opacity: 0;
                }
              }
            `}</style>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  gap: '8px'
                }}
              >
                <div
                  style={{
                    maxWidth: '80%',
                    padding: '12px 16px',
                    borderRadius: '16px',
                    background: msg.role === 'user' 
                      ? 'linear-gradient(135deg, #0037FE 0%, #00FF00 100%)'
                      : 'white',
                    color: msg.role === 'user' ? 'white' : '#1f2937',
                    boxShadow: msg.role === 'user' ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.content}
                </div>
                {msg.role === 'assistant' && msg.suggestedText && currentQuestion?.fieldName && (
                  <button
                    onClick={() => fillCurrentField(msg.suggestedText!)}
                    style={{
                      padding: '8px 16px',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 2px 4px rgba(16, 185, 129, 0.3)',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 4px 8px rgba(16, 185, 129, 0.4)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(16, 185, 129, 0.3)'
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="white"/>
                    </svg>
                    Preencher campo automaticamente
                  </button>
                )}
              </div>
            ))}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '16px',
                    background: 'white',
                    color: '#6b7280',
                    fontSize: '14px'
                  }}
                >
                  Pensando...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: '16px',
              borderTop: '1px solid #e5e7eb',
              background: 'white'
            }}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end' }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem ou use o microfone..."
                style={{
                  flex: 1,
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  fontSize: '14px',
                  resize: 'none',
                  minHeight: '44px',
                  maxHeight: '120px',
                  fontFamily: 'inherit'
                }}
                rows={1}
                disabled={isLoading || isListening}
              />
              <button
                onClick={handleVoiceToggle}
                disabled={isLoading}
                title={isListening ? 'Parar gravação' : 'Falar (gravação de voz)'}
                style={{
                  padding: '8px',
                  background: isListening 
                    ? '#ef4444'
                    : '#6b7280',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  transition: 'all 0.2s ease',
                  animation: isListening ? 'pulse 1.5s ease-in-out infinite' : 'none'
                }}
              >
                {isListening ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="12" height="12" rx="2" fill="white"/>
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 1C10.34 1 9 2.34 9 4V12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12V4C15 2.34 13.66 1 12 1Z" fill="white"/>
                    <path d="M19 10V12C19 15.87 15.87 19 12 19C8.13 19 5 15.87 5 12V10H3V12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12V10H19Z" fill="white"/>
                    <path d="M11 22H13V24H11V22Z" fill="white"/>
                  </svg>
                )}
              </button>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading || isListening}
                title="Enviar mensagem"
                style={{
                  padding: '8px',
                  background: input.trim() && !isLoading && !isListening
                    ? 'linear-gradient(135deg, #0037FE 0%, #00FF00 100%)'
                    : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: input.trim() && !isLoading && !isListening ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.01 21L23 12 2.01 3 2 10L17 12L2 14L2.01 21Z" fill="white"/>
                </svg>
              </button>
            </div>
            {isListening && (
              <div style={{
                marginTop: '8px',
                padding: '8px 12px',
                background: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '8px',
                fontSize: '12px',
                color: '#dc2626',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: '#ef4444',
                  borderRadius: '50%',
                  animation: 'pulse 1.5s ease-in-out infinite'
                }}></div>
                Gravando... Fale agora
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
