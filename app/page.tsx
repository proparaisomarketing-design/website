import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-ngo-cream min-h-screen">
      {/* Hero Section - inspirado no Figma */}
      <section className="relative min-h-[90vh] flex flex-col justify-end">
        <div className="absolute inset-0 bg-ngo-black">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'linear-gradient(rgba(11,7,6,0.6) 0%, rgba(11,7,6,0.5) 100%), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80)',
            }}
          />
        </div>
        <div className="container-custom relative z-10 pb-16 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-sans">
              Cuidado inclusivo para quem mais precisa
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-xl">
              A Associação Pró-Paraíso transforma transparência em confiança e confiança em participação em Paraisópolis, São Paulo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/como-apoiar"
                className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded transition hover:bg-ngo-cream"
              >
                Como apoiar
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent text-white font-medium px-6 py-4 rounded border border-white/80 hover:bg-white/10 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
                Fale conosco
              </a>
            </div>
          </div>
          {/* Estatísticas no rodapé do hero */}
          <div className="mt-16 pt-8 border-t border-white/30 flex flex-wrap gap-8 md:gap-16">
            <p className="text-white font-medium text-lg">+ de 250 crianças e jovens atendidos</p>
            <p className="text-white font-medium text-lg">Anos de atuação em Paraisópolis</p>
          </div>
        </div>
      </section>

      {/* Sobre nós - duas colunas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-label mb-4 block">Quem somos</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-text leading-tight mb-6 font-sans">
                Oferecemos um lugar para crianças e jovens crescerem com dignidade
              </h2>
              <p className="text-ngo-text-muted leading-relaxed mb-4">
                Desde 2015 atuamos em Paraisópolis com esporte, reforço escolar, campanhas e muito mais. Tudo registrado e prestado contas.
              </p>
              <p className="text-ngo-text-muted leading-relaxed mb-8">
                O bem que fazemos é o paraíso que construímos juntos. Quando existe presença, existe transformação.
              </p>
              <Link
                href="/quem-somos"
                className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-yellow/90 transition"
              >
                Conheça nossa história
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-ngo-black/10">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center text-ngo-text hover:bg-white transition shadow-lg"
                  aria-label="Assistir vídeo"
                >
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos - fundo amarelo claro, lista + imagem */}
      <section className="section-padding bg-ngo-yellow-light">
        <div className="container-custom">
          <span className="section-label mb-4 block">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-text leading-tight mb-6 font-sans max-w-3xl">
            Alguns dos projetos que oferecemos para nossas crianças e jovens
          </h2>
          <p className="text-ngo-text-muted max-w-2xl mb-12">
            Esporte, educação, solidariedade e eventos que fortalecem vínculos e abrem caminhos.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              {[
                {
                  title: 'Esporte em Ação',
                  desc: 'Futebol de campo, futsal e society. Socialização, rotina e um espaço seguro para crianças e jovens.',
                  icon: '⚽',
                },
                {
                  title: 'Aprender para Crescer',
                  desc: 'Reforço escolar de segunda a sexta para crianças de 6 a 12 anos. Rotina, confiança e aprendizado no próprio ritmo.',
                  icon: '📚',
                },
                {
                  title: 'Caixinhas de Natal',
                  desc: 'Cartinha, brinquedo, roupa e sapato. Uma tradição de anos que já presenteou centenas de crianças.',
                  icon: '🎁',
                },
                {
                  title: 'Solidariedade em Ação',
                  desc: 'Campanhas, cestas básicas e apoio quando a necessidade aperta. Resposta rápida e digna.',
                  icon: '🤝',
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded bg-ngo-text text-white font-bold text-lg">
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-ngo-text mb-2 font-sans">{item.title}</h3>
                    <p className="text-ngo-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-ngo-black/10 order-first lg:order-none">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projetos - fundo escuro, 3 cards */}
      <section className="section-padding bg-ngo-black">
        <div className="container-custom">
          <span className="section-label text-white/80 border-ngo-yellow mb-4 block">Projetos que realizamos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-16 font-sans max-w-3xl">
            Estamos criando um lugar onde crianças e jovens podem crescer com oportunidades
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Esporte em Ação',
                desc: 'Futebol, futsal e society. Um espaço seguro para socialização e rotina.',
                image: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&q=80',
                href: '/projetos#esporte',
              },
              {
                title: 'Aprender para Crescer',
                desc: 'Reforço escolar e acompanhamento para crianças de 6 a 12 anos.',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
                href: '/projetos#aprender',
              },
              {
                title: 'Caixinhas e Solidariedade',
                desc: 'Campanhas, cestas e eventos que levam dignidade e esperança.',
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
                href: '/projetos',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block rounded-2xl overflow-hidden h-[420px] relative"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                <div className="absolute inset-0 bg-ngo-black/60" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3 font-sans">{card.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <span className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-6 py-3 rounded w-fit">
                    Saiba mais
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto - como gastamos doações */}
      <section className="section-padding bg-ngo-black">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans">
                Como usamos suas doações e para onde vão
              </h2>
              <p className="text-white/70 leading-relaxed mb-10">
                Queremos que você saiba exatamente onde o seu apoio está sendo aplicado. Comprometemo-nos com total transparência.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Esporte e atividades', pct: '35', color: 'bg-ngo-green' },
                  { label: 'Educação e reforço', pct: '30', color: 'bg-ngo-yellow' },
                  { label: 'Campanhas e eventos', pct: '25', color: 'bg-purple-400' },
                  { label: 'Estrutura e gestão', pct: '10', color: 'bg-pink-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span className={`w-4 h-4 rounded ${item.color} flex-shrink-0`} />
                    <span className="text-white font-medium">
                      {item.pct}% {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-[20px] border-ngo-yellow/40 flex items-center justify-center">
                <div className="w-full h-full rounded-full border-[20px] border-ngo-green/60 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full border-[20px] border-purple-400/60 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">100%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(11,7,6,0.5), rgba(11,7,6,0.5)), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80)',
          }}
        />
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 font-sans max-w-4xl mx-auto">
            Você pode contribuir para dar um lugar melhor para crianças e jovens!
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/como-apoiar"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-yellow/90 transition"
            >
              Quero ser voluntário
            </Link>
            <Link
              href="/como-apoiar#doar"
              className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-cream transition"
            >
              Quero doar
            </Link>
          </div>
        </div>
      </section>

      {/* Eventos (opcional) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-ngo-text mb-10 font-sans">Nossos eventos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-ngo-yellow-light rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-ngo-text leading-none block">13</span>
                <span className="text-ngo-text-muted text-sm font-medium uppercase tracking-wider">Abr</span>
              </div>
              <div className="flex-1">
                <span className="text-ngo-text-muted text-xs font-medium uppercase tracking-wider mb-2 block">Próximo evento</span>
                <h3 className="text-xl font-bold text-ngo-text mb-2 font-sans">Um dia com nossas crianças</h3>
                <Link href="/projetos" className="inline-flex items-center gap-2 text-ngo-text font-medium mt-2 group">
                  Saiba mais
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>
            <div className="bg-ngo-yellow-light rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-ngo-text leading-none block">25</span>
                <span className="text-ngo-text-muted text-sm font-medium uppercase tracking-wider">Abr</span>
              </div>
              <div className="flex-1">
                <span className="text-ngo-text-muted text-xs font-medium uppercase tracking-wider mb-2 block">Próximo evento</span>
                <h3 className="text-xl font-bold text-ngo-text mb-2 font-sans">Campanha solidária</h3>
                <Link href="/projetos" className="inline-flex items-center gap-2 text-ngo-text font-medium mt-2 group">
                  Saiba mais
                  <span className="group-hover:translate-x-1 transition">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
