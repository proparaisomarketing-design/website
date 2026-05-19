'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type MenuItem = {
  name: string
  href: string
  icon: string
  color: string
  iconText: string
  desc: string
}

const menuItems: MenuItem[] = [
  { name: 'Home', href: '/', icon: '🏠', color: 'bg-ngo-orange', iconText: 'text-white', desc: 'Página inicial' },
  { name: 'Quem Somos', href: '/quem-somos', icon: '💛', color: 'bg-ngo-yellow', iconText: 'text-ngo-text', desc: 'Nossa história desde 2015' },
  { name: 'Projetos', href: '/projetos', icon: '⚽', color: 'bg-ngo-green', iconText: 'text-white', desc: 'Esporte, educação e mais' },
  { name: 'Impacto', href: '/impacto', icon: '📊', color: 'bg-primary', iconText: 'text-white', desc: 'Resultados em números' },
  { name: 'Como Apoiar', href: '/como-apoiar', icon: '🤝', color: 'bg-ngo-orange', iconText: 'text-white', desc: 'Doação, padrinho ou voluntariado' },
  { name: 'Cadastre-se', href: '/cadastre-se', icon: '📝', color: 'bg-ngo-green', iconText: 'text-white', desc: 'Inscreva sua criança nos projetos' },
  { name: 'Contato', href: '/contato', icon: '✉️', color: 'bg-ngo-text', iconText: 'text-white', desc: 'Fale com a gente' },
]

const desktopItems = menuItems.slice(0, -1).map(({ name, href }) => ({ name, href }))

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-white/95 backdrop-blur-sm border-b border-ngo-border sticky top-0 z-40">
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center" aria-label="Associação Pró-Paraíso — início">
              <Image
                src="/logo/logo.png"
                alt="Associação Pró-Paraíso"
                width={1356}
                height={444}
                priority
                className="h-9 md:h-11 w-auto"
              />
            </Link>

            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {desktopItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-ngo-text-muted hover:text-ngo-text font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ngo-orange text-white font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-secondary-dark transition"
              >
                Fale Conosco
              </a>
            </div>

            <button
              type="button"
              className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-full hover:bg-ngo-cream transition"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <svg className="w-6 h-6 text-ngo-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mega Menu Mobile — drawer full-height */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isMenuOpen ? 'true' : 'false'}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-ngo-text/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ngo-cream shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
        >
          {/* círculos decorativos */}
          <div className="absolute -top-20 -left-20 w-48 h-48 rounded-full bg-ngo-yellow/30 blur-3xl pointer-events-none" aria-hidden />
          <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-ngo-orange/20 blur-3xl pointer-events-none" aria-hidden />

          {/* Header do drawer */}
          <div className="relative flex items-center justify-between p-5 border-b border-ngo-border">
            <Image
              src="/logo/logo.png"
              alt="Associação Pró-Paraíso"
              width={1356}
              height={444}
              className="h-10 w-auto"
            />
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white border border-ngo-border hover:bg-ngo-yellow hover:border-ngo-yellow transition flex items-center justify-center"
              aria-label="Fechar menu"
            >
              <svg className="w-5 h-5 text-ngo-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Itens do menu — cards coloridos */}
          <nav className="relative flex-1 overflow-y-auto p-5 space-y-2.5">
            {menuItems.map((item, i) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center gap-4 p-3 rounded-2xl bg-white hover:bg-white/80 transition shadow-sm hover:shadow-md"
                style={{ animation: isMenuOpen ? `slideInRight 0.4s ${i * 50}ms both` : undefined }}
              >
                <span
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}
                  aria-hidden
                >
                  {item.icon}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-ngo-text text-base leading-tight">{item.name}</span>
                  <span className="block text-xs text-ngo-text-muted mt-0.5 truncate">{item.desc}</span>
                </span>
                <svg className="w-5 h-5 text-ngo-text-muted group-hover:text-ngo-orange group-hover:translate-x-0.5 transition flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>

          {/* Footer do drawer */}
          <div className="relative border-t border-ngo-border p-5 space-y-3 bg-white/40 backdrop-blur-sm">
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-ngo-green text-white font-bold py-3.5 rounded-full hover:bg-ngo-green/90 transition shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.5 14c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.2 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.7 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
              </svg>
              WhatsApp da Associação
            </a>
            <div className="flex items-center justify-between text-xs text-ngo-text-muted px-2">
              <span>Paraisópolis · São Paulo</span>
              <span>(11) 98710-3256</span>
            </div>
          </div>
        </aside>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
