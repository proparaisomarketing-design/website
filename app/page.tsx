import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-ngo-cream min-h-screen">
      {/* Hero Section - vídeo institucional ao fundo */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 bg-secondary-dark">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/videos/pro-paraiso-hero.mp4" type="video/mp4" />
          </video>
          {/* Lente quente por cima do vídeo — gradiente nas cores da logo, do topo ao rodapé, pra dar contraste no texto */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-secondary-dark/65 via-ngo-orange/55 to-secondary-dark/80"
            aria-hidden
          />
        </div>
        <div className="container-custom relative z-10 pb-16 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 font-sans">
              Cuidado inclusivo para quem mais precisa
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-xl">
              Há 10 anos em Paraisópolis e, mais recentemente, no Jardim Tapicerica da Serra. Transformando transparência em confiança e confiança em participação.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/como-apoiar#doar"
                className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-8 py-4 rounded transition hover:bg-ngo-yellow/90"
              >
                Quero doar
              </Link>
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
          <div className="mt-16 pt-8 border-t border-white/30 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="text-white font-bebas text-4xl md:text-5xl leading-none">+800</p>
              <p className="text-white/80 text-sm mt-1">crianças e jovens em 14 modalidades</p>
            </div>
            <div>
              <p className="text-white font-bebas text-4xl md:text-5xl leading-none">10+</p>
              <p className="text-white/80 text-sm mt-1">anos de atuação em Paraisópolis</p>
            </div>
            <div>
              <p className="text-white font-bebas text-4xl md:text-5xl leading-none">500</p>
              <p className="text-white/80 text-sm mt-1">famílias atendidas por mês em campanhas solidárias</p>
            </div>
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
                Desde 2015 atuamos em Paraisópolis e, mais recentemente, no Jardim Tapicerica da Serra (Banca Flor), com esporte, reforço escolar, campanhas solidárias e muito mais. Tudo registrado e prestado contas.
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
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-ngo-orange/10">
              <div
                className="absolute inset-0 bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80)',
                }}
                role="img"
                aria-label="Crianças e jovens da Associação Pró-Paraíso em atividade"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos - grid 2x2 de cards em destaque */}
      <section className="section-padding bg-ngo-yellow-light">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label mb-4 block">O que fazemos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ngo-text leading-tight mb-6 font-sans">
              Alguns dos projetos que oferecemos para nossas crianças e jovens
            </h2>
            <p className="text-ngo-text-muted text-lg leading-relaxed">
              Esporte, educação, solidariedade e eventos que fortalecem vínculos e abrem caminhos.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                title: 'Esporte em Ação',
                desc: 'Futebol de campo, futsal e society. Socialização, rotina e um espaço seguro para crianças e jovens.',
                icon: '⚽',
                iconBg: 'bg-ngo-green',
                accent: 'hover:border-ngo-green',
                href: '/projetos#esporte',
              },
              {
                title: 'Aprender para Crescer',
                desc: 'Reforço escolar de segunda a sexta para crianças de 6 a 12 anos. Rotina, confiança e aprendizado no próprio ritmo.',
                icon: '📚',
                iconBg: 'bg-ngo-yellow',
                accent: 'hover:border-ngo-yellow',
                href: '/projetos#aprender',
              },
              {
                title: 'Caixinhas de Natal',
                desc: 'Cartinha, brinquedo, roupa e sapato. 5 anos consecutivos presenteando quase 400 crianças por edição.',
                icon: '🎁',
                iconBg: 'bg-ngo-orange',
                accent: 'hover:border-ngo-orange',
                href: '/projetos#caixinhas',
              },
              {
                title: 'Solidariedade em Ação',
                desc: 'Campanhas, cestas básicas e apoio quando a necessidade aperta. Resposta rápida e digna.',
                icon: '🤝',
                iconBg: 'bg-primary',
                accent: 'hover:border-primary',
                href: '/projetos#solidariedade',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative bg-white rounded-2xl p-7 md:p-8 border-2 border-transparent shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 ${item.accent}`}
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${item.iconBg} flex items-center justify-center text-3xl md:text-4xl mb-5 shadow-sm`}>
                  <span aria-hidden>{item.icon}</span>
                </div>
                <h3 className="font-bebas text-2xl md:text-3xl text-ngo-text mb-3 tracking-wide leading-none">
                  {item.title}
                </h3>
                <p className="text-ngo-text-muted leading-relaxed mb-6">{item.desc}</p>
                <span className="inline-flex items-center gap-3 bg-ngo-orange text-white font-semibold text-sm pl-5 pr-2 py-2 rounded-full group-hover:bg-secondary-dark transition-colors">
                  Saiba mais
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                    <svg className="w-4 h-4 text-ngo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos - 3 cards sobre fundo laranja */}
      <section className="section-padding bg-ngo-orange">
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
                <div className="absolute inset-0 bg-secondary-dark/65" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3 font-sans">{card.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6">{card.desc}</p>
                  <span className="inline-flex items-center justify-center bg-white text-secondary-dark font-semibold px-6 py-3 rounded w-fit">
                    Saiba mais
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto em números — indicadores verificáveis */}
      <section className="section-padding bg-secondary-dark">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label text-white/80 border-ngo-yellow mb-4 block">Impacto em números</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans">
              Transparência traduzida em prática
            </h2>
            <p className="text-white/70 leading-relaxed">
              Os números abaixo são reais e verificáveis — atualizados conforme nossa rotina de atendimentos, campanhas e atividades. Comprometemo-nos com total transparência.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { number: '1.000', label: 'atendimentos por mês', sub: '12.000 ao ano', accent: 'border-ngo-yellow' },
              { number: '500', label: 'famílias atendidas por mês', sub: 'em campanhas solidárias', accent: 'border-ngo-green' },
              { number: '14', label: 'modalidades ofertadas', sub: 'esporte, cultura e reforço', accent: 'border-ngo-orange' },
              { number: '+800', label: 'alunos ativos', sub: 'caminhando para 1.000', accent: 'border-primary' },
              { number: '8', label: 'campanhas solidárias por ano', sub: '~5.000 famílias beneficiadas', accent: 'border-ngo-yellow' },
              { number: '2', label: 'unidades de atendimento', sub: 'Paraisópolis e Jardim Tapicerica', accent: 'border-ngo-green' },
            ].map((item) => (
              <div
                key={item.label}
                className={`bg-ngo-orange/40 backdrop-blur-sm rounded-2xl p-6 md:p-7 border-2 ${item.accent} border-opacity-50 hover:border-opacity-100 hover:bg-ngo-orange/60 transition-all`}
              >
                <p className="font-bebas text-5xl md:text-6xl leading-none tracking-wide text-white mb-3">
                  {item.number}
                </p>
                <p className="text-white font-medium mb-1">{item.label}</p>
                <p className="text-white/60 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/impacto"
              className="inline-flex items-center gap-2 text-ngo-yellow font-medium group"
            >
              Ver relatório de impacto completo
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,100,0,0.6), rgba(239,125,0,0.55)), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80)',
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

      {/* Agenda recorrente — atividades contínuas e campanhas por época */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="section-label mb-4 block">Agenda</span>
              <h2 className="text-3xl md:text-4xl font-bold text-ngo-text font-sans">Quando acontecem as ações</h2>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20receber%20avisos%20dos%20próximos%20eventos%20da%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-dark font-medium group self-start md:self-auto"
            >
              Receber avisos dos próximos eventos
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                when: 'Seg a Sex',
                title: 'Reforço escolar',
                desc: 'Aulas diárias para crianças de 6 a 12 anos.',
              },
              {
                when: 'Todos os dias',
                title: 'Esporte em ação',
                desc: 'Treinos diários de futebol de campo, futsal e society. Constância e vínculo.',
              },
              {
                when: 'Dezembro',
                title: 'Caixinhas de Natal',
                desc: 'Cartinha, brinquedo, roupa e sapato para centenas de crianças.',
              },
              {
                when: 'Ano todo',
                title: 'Campanhas solidárias',
                desc: 'Cestas básicas e apoio emergencial quando a necessidade aperta.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-ngo-yellow-light rounded-2xl p-6">
                <span className="inline-block text-ngo-text-muted text-xs font-semibold uppercase tracking-wider mb-3 px-2 py-1 rounded bg-white/60">
                  {item.when}
                </span>
                <h3 className="text-lg font-bold text-ngo-text mb-2 font-sans">{item.title}</h3>
                <p className="text-ngo-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
