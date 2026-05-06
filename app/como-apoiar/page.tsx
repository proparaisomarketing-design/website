import Link from 'next/link'

const formasApoio = [
  {
    titulo: 'Doe materiais',
    icone: '📦',
    iconBg: 'bg-ngo-green',
    accent: 'border-l-ngo-green',
    descricao:
      'Bola, chuteira, meião, calção, colete, cesta básica, brinquedo de Natal. O que a gente precisa muda toda semana — e a gente conta o que falta na hora.',
    exemplo: 'Hoje, 100 chuteiras seriam 100 crianças treinando com dignidade.',
    cta: 'Quero doar materiais',
    waMsg: 'Olá, gostaria de doar materiais para a Associação Pró-Paraíso. O que vocês estão precisando agora?',
  },
  {
    titulo: 'Seja padrinho',
    icone: '🤝',
    iconBg: 'bg-ngo-yellow',
    accent: 'border-l-ngo-yellow',
    descricao:
      'Comerciantes da comunidade já são quem segura projetos como as Caixinhas de Natal. Você ou sua empresa pode adotar uma criança, uma campanha ou uma necessidade do mês — com transparência total.',
    exemplo: '50 padrinhos viraram quase 400 crianças com presente no último Natal.',
    cta: 'Quero ser padrinho',
    waMsg: 'Olá, gostaria de ser padrinho/parceiro da Associação Pró-Paraíso. Como funciona?',
  },
  {
    titulo: 'Doe seu tempo',
    icone: '🤲',
    iconBg: 'bg-ngo-orange',
    accent: 'border-l-ngo-orange',
    descricao:
      'Voluntariado é estar presente. Ajudar num treino, num evento, no reforço escolar, na cozinha. Qualquer hora que você tiver, a gente tem onde encaixar com respeito.',
    exemplo: 'Uma manhã por semana já vira história na vida de uma criança.',
    cta: 'Quero ser voluntário',
    waMsg: 'Olá, gostaria de ser voluntário na Associação Pró-Paraíso. Quais são as oportunidades?',
  },
  {
    titulo: 'Conhecer e divulgar',
    icone: '📢',
    iconBg: 'bg-primary',
    accent: 'border-l-primary',
    descricao:
      'Vem visitar. Conhece os projetos de perto, conversa com quem é atendido. Depois conta pra alguém — empresa, amigo, vizinho. Indicação ainda é o que mais traz padrinho novo.',
    exemplo: 'A maior parte dos nossos parceiros chegou por indicação de quem visitou.',
    cta: 'Agendar visita',
    waMsg: 'Olá, gostaria de agendar uma visita à Associação Pró-Paraíso para conhecer os projetos.',
  },
]

const passos = [
  {
    n: '01',
    titulo: 'Manda um oi',
    desc: 'WhatsApp, sem formalidade. A gente conversa sobre o que você quer fazer e o que a Associação precisa agora.',
  },
  {
    n: '02',
    titulo: 'Conhece de perto',
    desc: 'Marca uma visita ou pede pra te mandar fotos, vídeos e relatórios das ações em andamento.',
  },
  {
    n: '03',
    titulo: 'Apoia do jeito que faz sentido',
    desc: 'Com material, dinheiro pra um fornecedor específico, tempo, divulgação. Você escolhe — a gente registra tudo.',
  },
]

export default function ComoApoiar() {
  return (
    <div className="bg-ngo-cream">
      {/* Hero */}
      <section className="relative bg-ngo-orange text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/60 via-ngo-orange/40 to-secondary-dark/80" aria-hidden />
        <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="section-label text-white/80 border-ngo-yellow mb-5 block">Como apoiar</span>
          <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 max-w-4xl">
            Vem somar com a gente — do jeito que dá
          </h1>
          <p className="text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed">
            Não tem uma forma certa de apoiar. Tem a sua. A gente conta o que precisa,
            mostra onde vai, e registra tudo — pra você apoiar com confiança.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20como%20posso%20apoiar%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-7 py-3.5 rounded hover:bg-ngo-yellow/90 transition"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#formas"
              className="inline-flex items-center justify-center bg-white/10 text-white font-medium px-7 py-3.5 rounded border border-white/30 hover:bg-white/20 transition"
            >
              Ver as formas de apoio
            </a>
          </div>
        </div>
      </section>

      {/* Manifesto curto */}
      <section className="section-padding bg-ngo-yellow-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-wide leading-tight text-ngo-text">
              &ldquo;A gente não recebe dinheiro na mão. A gente recebe presença, recebe rede, recebe gente que aparece.
              Se você quer apoiar, vem.&rdquo;
            </p>
            <p className="text-ngo-text-muted mt-6 text-sm uppercase tracking-widest font-semibold">
              Valquito Soares — Presidente
            </p>
          </div>
        </div>
      </section>

      {/* Formas de apoio */}
      <section id="formas" className="section-padding bg-white scroll-mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label mb-4 block">Formas de apoiar</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text mb-5">
              Tem 4 jeitos. Pode escolher um, todos, ou inventar o seu
            </h2>
            <p className="text-ngo-text-muted text-lg leading-relaxed">
              Cada forma cabe num tamanho de gente. Tem quem doa um par de chuteiras, tem quem ajuda
              uma campanha inteira, tem quem aparece todo sábado pro treino. Tudo conta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {formasApoio.map((f) => (
              <article
                key={f.titulo}
                className={`bg-white rounded-2xl p-7 md:p-8 shadow-card border-l-4 ${f.accent} border-y border-r border-ngo-border/60 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${f.iconBg} flex items-center justify-center text-3xl md:text-4xl shadow-sm flex-shrink-0`}>
                    <span aria-hidden>{f.icone}</span>
                  </div>
                  <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text leading-none">
                    {f.titulo}
                  </h3>
                </div>

                <p className="text-ngo-text-muted leading-relaxed mb-5 flex-1">{f.descricao}</p>

                <div className="bg-ngo-yellow-light rounded-xl px-4 py-3 mb-5">
                  <p className="text-sm text-ngo-text leading-relaxed">
                    <span className="font-semibold">Pra ter ideia: </span>
                    {f.exemplo}
                  </p>
                </div>

                <a
                  href={`https://api.whatsapp.com/send/?phone=5511987103256&text=${encodeURIComponent(f.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-ngo-orange text-white font-semibold text-sm pl-5 pr-2 py-2 rounded-full hover:bg-secondary-dark transition-colors w-fit"
                >
                  {f.cta}
                  <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
                    <svg className="w-4 h-4 text-ngo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona — 3 passos */}
      <section id="doar" className="section-padding bg-ngo-cream scroll-mt-20">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label mb-4 block">Como começar</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text">
              Em 3 passos, sem burocracia
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {passos.map((p) => (
              <div
                key={p.n}
                className="bg-white rounded-2xl p-7 md:p-8 border border-ngo-border/60 shadow-card relative overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 font-bebas text-7xl md:text-8xl text-ngo-yellow-light leading-none select-none" aria-hidden>
                  {p.n}
                </span>
                <div className="relative">
                  <p className="text-ngo-yellow font-bebas text-2xl mb-3">{p.n}</p>
                  <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text mb-3 leading-none">
                    {p.titulo}
                  </h3>
                  <p className="text-ngo-text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que fazemos assim — bloco quente com fala */}
      <section className="section-padding bg-secondary-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="section-label text-white/80 border-ngo-yellow mb-6 inline-block">Por que fazemos assim</span>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-10">
              &ldquo;Eu trabalho com tudo sério, com tudo em papel, com tudo registrado em foto e em imagem.
              É por isso que a gente está de pé até hoje.&rdquo;
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-white/85 leading-relaxed mb-8">
              <p>
                Todo projeto social tem custo. Captar apoio hoje exige cuidado com a forma —
                não tem mais espaço pra dinheiro passando de mão em mão.
              </p>
              <p>
                Quando precisamos de algo, explicamos a necessidade, enviamos orçamento e contatos,
                e quem quer ajudar fala direto com o fornecedor e faz a doação. Tudo limpo, registrado, transparente.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90">
                ✓ Tudo documentado
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90">
                ✓ Doador fala direto com fornecedor
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-sm text-white/90">
                ✓ Prestação de contas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(196,100,0,0.65), rgba(239,125,0,0.6)), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80)',
          }}
          aria-hidden
        />
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 font-sans max-w-3xl mx-auto">
            Não precisa decidir tudo agora
          </h2>
          <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
            Só manda um oi. A gente conta o que tá rolando e você decide depois.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20como%20posso%20apoiar%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-8 py-4 rounded hover:bg-ngo-yellow/90 transition"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/projetos"
              className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-cream transition"
            >
              Conhecer projetos
            </Link>
            <Link
              href="/impacto"
              className="inline-flex items-center justify-center bg-transparent text-white font-medium px-8 py-4 rounded border border-white/40 hover:bg-white/10 transition"
            >
              Ver impacto real
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
