/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Pró-Paraíso
        primary: {
          DEFAULT: '#3B95D2', // azul principal
          dark: '#1F6FA8',    // hover e texto branco (contraste AA)
          light: '#C8E6FA',   // tints e fundos suaves
        },
        secondary: {
          DEFAULT: '#EF7D00', // laranja — CTA quente
          dark: '#C46400',
        },
        ngo: {
          black: '#0B0706',
          text: '#1D2130',
          'text-muted': '#525560',
          yellow: '#F4A900',        // mostarda — acento forte
          'yellow-light': '#FFF17C',// amarelo pastel — fundo de seção
          orange: '#EF7D00',        // laranja — CTA e destaques
          green: '#60852D',         // verde musgo — acento
          'green-dark': '#404A1C',  // verde oliva — detalhes escuros
          cream: '#FEFDFC',
          border: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        bebas: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.08', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body-md': ['1rem', { lineHeight: '1.65' }],
      },
      spacing: {
        'section-sm': '3rem',
        'section-md': '5rem',
        'section-lg': '7rem',
      },
      boxShadow: {
        'card': '0 2px 8px -2px rgba(11, 7, 6, 0.06), 0 4px 16px -4px rgba(11, 7, 6, 0.08)',
        'card-hover': '0 8px 24px -4px rgba(11, 7, 6, 0.12), 0 16px 40px -8px rgba(0, 55, 254, 0.15)',
        'glow-primary': '0 0 0 4px rgba(0, 55, 254, 0.15)',
        'glow-yellow': '0 0 0 4px rgba(242, 201, 76, 0.25)',
      },
      keyframes: {
        'slide-up': {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
        'fade-in': 'fade-in 0.6s ease-out both',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
}
