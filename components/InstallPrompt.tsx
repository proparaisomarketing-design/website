'use client'

import { useState, useEffect } from 'react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Verificar se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
      return
    }

    // Verificar se está no iOS
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator as any).standalone

    if (isIOS && !isInStandaloneMode) {
      // Mostrar instruções para iOS
      setShowPrompt(true)
      return
    }

    // Para Android/Chrome
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setShowPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // iOS - mostrar instruções
      return
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      setShowPrompt(false)
      setDeferredPrompt(null)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    // Salvar no localStorage para não mostrar novamente por um tempo
    localStorage.setItem('pwa-install-dismissed', Date.now().toString())
  }

  // Não mostrar se já está instalado ou se foi dispensado recentemente
  if (isInstalled || !showPrompt) {
    return null
  }

  // Verificar se foi dispensado recentemente (24 horas)
  const dismissed = localStorage.getItem('pwa-install-dismissed')
  if (dismissed) {
    const dismissedTime = parseInt(dismissed)
    const hoursSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60)
    if (hoursSinceDismissed < 24) {
      return null
    }
  }

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slide-up">
      <div className="bg-primary text-white p-4 rounded-lg shadow-2xl">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bebas text-xl">Instalar App</h3>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Fechar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {isIOS ? (
          <div>
            <p className="text-sm mb-3">
              Para instalar este app no seu iPhone/iPad:
            </p>
            <ol className="text-sm space-y-1 list-decimal list-inside mb-3">
              <li>Toque no botão de compartilhar</li>
              <li>Selecione &quot;Adicionar à Tela de Início&quot;</li>
            </ol>
          </div>
        ) : (
          <div>
            <p className="text-sm mb-3">
              Instale nosso app para acesso rápido e melhor experiência!
            </p>
            <button
              onClick={handleInstallClick}
              className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full"
            >
              Instalar Agora
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
