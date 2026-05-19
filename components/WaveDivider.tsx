type WaveDividerProps = {
  /**
   * Cor do fundo (parte de cima do wave) — deve casar com a cor da seção ANTERIOR.
   * Ex: 'bg-white', 'bg-ngo-text', 'bg-secondary-dark'.
   */
  fromColor: string
  /**
   * Cor do preenchimento da onda (parte de baixo) — deve casar com a cor da seção SEGUINTE.
   * Ex: 'fill-white', 'fill-ngo-yellow-light', 'fill-ngo-text'.
   */
  fillColor: string
  /**
   * Altura visual.
   */
  height?: 'sm' | 'md' | 'lg'
  /**
   * Inverte a curva (use quando quiser a onda invertida).
   */
  flip?: boolean
}

const heights = {
  sm: 'h-10 md:h-14',
  md: 'h-14 md:h-20',
  lg: 'h-20 md:h-28',
}

/**
 * Divisor SVG ondulado para colocar ENTRE duas seções (como sibling),
 * NÃO dentro delas — senão o padding da seção cria gap.
 *
 * Uso correto:
 *   <section className="bg-white"> ... </section>
 *   <WaveDivider fromColor="bg-white" fillColor="fill-ngo-yellow-light" />
 *   <section className="bg-ngo-yellow-light"> ... </section>
 */
export default function WaveDivider({
  fromColor,
  fillColor,
  height = 'md',
  flip = false,
}: WaveDividerProps) {
  return (
    <div
      className={`relative w-full ${heights[height]} ${fromColor} ${flip ? 'rotate-180' : ''} pointer-events-none overflow-hidden`}
      aria-hidden
    >
      <svg
        className={`absolute inset-0 w-full h-full ${fillColor}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d="M0,64 C240,112 480,16 720,48 C960,80 1200,128 1440,80 L1440,120 L0,120 Z" />
      </svg>
    </div>
  )
}
