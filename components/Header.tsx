'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Projetos', href: '/projetos' },
    { name: 'Impacto', href: '/impacto' },
    { name: 'Como Apoiar', href: '/como-apoiar' },
    { name: 'Contato', href: '/contato' },
    { name: 'Briefing', href: '/briefing' },
  ]

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-ngo-border sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
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

          {/* Desktop Menu - estilo NGO */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item) => (
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
              className="bg-ngo-text text-white font-medium text-sm px-6 py-2.5 rounded hover:bg-ngo-black transition"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-ngo-text-muted hover:text-ngo-text font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-ngo-text text-white font-medium text-center py-3 rounded mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
