'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

type GaleriaProps = {
  imagens: string[]
  titulo: string
  accentBg: string
}

/**
 * Calcula um grid que preenche sem deixar foto órfã.
 * Pra contagens "ímpares" (5, 7), a primeira foto vira hero e ocupa 2 colunas,
 * fechando o total de células num múltiplo do grid.
 */
function pickLayout(n: number): { gridClass: string; firstSpan: string } {
  switch (n) {
    case 1:
      return { gridClass: 'grid-cols-1 max-w-md', firstSpan: '' }
    case 2:
      return { gridClass: 'grid-cols-2', firstSpan: '' }
    case 3:
      return { gridClass: 'grid-cols-3', firstSpan: '' }
    case 4:
      return { gridClass: 'grid-cols-2 md:grid-cols-4', firstSpan: '' }
    // 5 fotos: hero ocupa 2 cels + 4 normais = 6 cels → 3 cols (2 linhas de 3)
    case 5:
      return { gridClass: 'grid-cols-2 sm:grid-cols-3', firstSpan: 'col-span-2' }
    // 6 fotos: 2x3 ou 3x2 ou 6x1 (todos múltiplos)
    case 6:
      return { gridClass: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6', firstSpan: '' }
    // 7 fotos: hero ocupa 2 + 6 normais = 8 cels → 4 cols (2 linhas de 4)
    case 7:
      return { gridClass: 'grid-cols-2 sm:grid-cols-4', firstSpan: 'col-span-2' }
    case 8:
      return { gridClass: 'grid-cols-2 sm:grid-cols-4', firstSpan: '' }
    case 9:
      return { gridClass: 'grid-cols-3', firstSpan: '' }
    // 10 fotos: 2x5 ou 5x2
    case 10:
      return { gridClass: 'grid-cols-2 sm:grid-cols-5', firstSpan: '' }
    case 11:
      // 11 fotos: hero + 10 = 12 cels → 4 cols (3 linhas)
      return { gridClass: 'grid-cols-2 sm:grid-cols-4', firstSpan: 'col-span-2' }
    case 12:
      return { gridClass: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', firstSpan: '' }
    default:
      return { gridClass: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4', firstSpan: '' }
  }
}

export default function Galeria({ imagens, titulo, accentBg }: GaleriaProps) {
  const [aberta, setAberta] = useState<number | null>(null)

  const fechar = useCallback(() => setAberta(null), [])
  const anterior = useCallback(() => {
    setAberta((i) => (i === null ? null : (i - 1 + imagens.length) % imagens.length))
  }, [imagens.length])
  const proxima = useCallback(() => {
    setAberta((i) => (i === null ? null : (i + 1) % imagens.length))
  }, [imagens.length])

  useEffect(() => {
    if (aberta === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fechar()
      else if (e.key === 'ArrowLeft') anterior()
      else if (e.key === 'ArrowRight') proxima()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [aberta, fechar, anterior, proxima])

  const { gridClass, firstSpan } = pickLayout(imagens.length)

  return (
    <>
      <div className={`grid gap-3 ${gridClass}`}>
        {imagens.map((src, i) => {
          const isHero = i === 0 && firstSpan !== ''
          return (
            <button
              key={src}
              type="button"
              onClick={() => setAberta(i)}
              data-reveal
              data-reveal-delay={String(Math.min(i * 60, 480))}
              className={`group relative ${isHero ? 'aspect-square sm:aspect-[2/1]' : 'aspect-square'} rounded-xl overflow-hidden bg-ngo-text/5 focus:outline-none focus-visible:ring-4 focus-visible:ring-ngo-orange/40 ${isHero ? firstSpan : ''}`}
              aria-label={`Ampliar imagem ${i + 1} de ${titulo}`}
            >
              <Image
                src={src}
                alt={`${titulo} — imagem ${i + 1}`}
                fill
                sizes={isHero ? '(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw' : '(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw'}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 ${accentBg} opacity-0 mix-blend-multiply group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                aria-hidden
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="w-10 h-10 rounded-full bg-white/95 flex items-center justify-center shadow-lg scale-75 group-hover:scale-100 transition-transform duration-300">
                  <svg className="w-5 h-5 text-ngo-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-4.35-4.35M11 18a7 7 0 110-14 7 7 0 010 14zM11 8v6M8 11h6" />
                  </svg>
                </span>
              </div>
            </button>
          )
        })}
      </div>

      {aberta !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={fechar}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeria de ${titulo}`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              fechar()
            }}
            className="absolute top-5 right-5 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition"
            aria-label="Fechar galeria"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {imagens.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  anterior()
                }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition"
                aria-label="Imagem anterior"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  proxima()
                }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white flex items-center justify-center transition"
                aria-label="Próxima imagem"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl aspect-[4/3] md:aspect-[16/10]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imagens[aberta]}
              alt={`${titulo} — imagem ${aberta + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm">
            {aberta + 1} / {imagens.length}
          </div>
        </div>
      )}
    </>
  )
}
