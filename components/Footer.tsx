"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ngo-orange text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Logo e sobre */}
          <div className="lg:col-span-1">
            <div className="inline-flex items-center bg-white rounded-2xl px-5 py-3 mb-5 shadow-lg">
              <Image
                src="/logo/logo.png"
                alt="Associação Pró-Paraíso"
                width={1356}
                height={444}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/85 text-sm leading-relaxed">
              Amor que transforma, comunidade que cresce. Paraisópolis, São Paulo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-base mb-4">Início</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/quem-somos" className="text-white/75 hover:text-white transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-white/75 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link href="/impacto" className="text-white/75 hover:text-white transition-colors">
                  Impacto
                </Link>
              </li>
              <li>
                <Link href="/como-apoiar" className="text-white/75 hover:text-white transition-colors">
                  Como Apoiar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-base mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <a
                  href="https://api.whatsapp.com/send/?phone=5511987103256"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 98710-3256
                </a>
              </li>
              <li>
                <a href="tel:+551137429106" className="hover:text-white transition-colors">
                  (11) 3742-9106
                </a>
              </li>
              <li>
                <a
                  href="mailto:associacao.pro.paraiso.2010@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  E-mail
                </a>
              </li>
              <li>Paraisópolis, São Paulo - SP</li>
            </ul>
          </div>

          {/* Newsletter (estilo Figma) */}
          <div>
            <h4 className="font-bold text-base mb-4">Receba nossas novidades</h4>
            <p className="text-white/75 text-sm mb-4">
              Cadastre seu e-mail para notícias e campanhas.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 min-w-0 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-ngo-yellow"
              />
              <button
                type="submit"
                className="px-5 py-3 rounded bg-white text-secondary-dark font-semibold text-sm hover:bg-ngo-cream transition whitespace-nowrap"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Associação Pró-Paraíso. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 24.691.258/0001-40</p>
        </div>
      </div>
    </footer>
  )
}
