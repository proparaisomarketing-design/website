import Link from 'next/link'

const formasApoio = [
  {
    titulo: 'Doe materiais',
    icone: '📦',
    cardBg: 'bg-ngo-green',
    titleColor: 'text-white',
    bodyColor: 'text-white/90',
    iconBoxBg: 'bg-white/20',
    exemploBg: 'bg-white/15',
    exemploText: 'text-white',
    exemploStrong: 'text-white',
    ctaBg: 'bg-white',
    ctaText: 'text-ngo-text',
    ctaHover: 'hover:bg-ngo-cream',
    ctaArrowColor: 'text-white',
    descricao:
      'O que falta muda toda semana, mas a lógica é simples: quando uma criança tem o equipamento certo, ela participa com mais segurança, conforto e dignidade. Bola, chuteira, meião, calção, colete, cesta básica e brinquedo de Natal são exemplos de materiais que ajudam os projetos a continuarem funcionando. A cada nova necessidade, nós mostramos o que está faltando naquele momento e explicamos como a doação será usada.',
    exemplo: '100 chuteiras significam 100 crianças treinando com mais dignidade.',
    cta: 'Quero doar materiais',
    waMsg: 'Olá, gostaria de doar materiais para a Associação Pró-Paraíso. O que vocês estão precisando agora?',
  },
  {
    titulo: 'Seja padrinho',
    icone: '🤝',
    cardBg: 'bg-ngo-yellow',
    titleColor: 'text-ngo-text',
    bodyColor: 'text-ngo-text/85',
    iconBoxBg: 'bg-white/40',
    exemploBg: 'bg-ngo-text/10',
    exemploText: 'text-ngo-text',
    exemploStrong: 'text-ngo-text',
    ctaBg: 'bg-ngo-text',
    ctaText: 'text-white',
    ctaHover: 'hover:bg-secondary-dark',
    ctaArrowColor: 'text-ngo-text',
    descricao:
      'O apadrinhamento transforma uma necessidade concreta em compromisso contínuo. Comerciantes da comunidade já ajudam a manter campanhas como as Caixinhas de Natal, e você ou sua empresa também pode adotar uma criança, uma campanha ou uma necessidade do mês. A diferença está na transparência. Nós mostramos o que precisa ser feito, registramos o destino do apoio e compartilhamos os resultados. Assim, cada padrinho entende exatamente onde a própria contribuição chegou.',
    exemplo: '50 padrinhos ajudaram quase 400 crianças a receberem presente no último Natal.',
    cta: 'Quero ser padrinho',
    waMsg: 'Olá, gostaria de ser padrinho/parceiro da Associação Pró-Paraíso. Como funciona?',
  },
  {
    titulo: 'Doe seu tempo',
    icone: '🤲',
    cardBg: 'bg-ngo-orange',
    titleColor: 'text-white',
    bodyColor: 'text-white/90',
    iconBoxBg: 'bg-white/20',
    exemploBg: 'bg-white/15',
    exemploText: 'text-white',
    exemploStrong: 'text-white',
    ctaBg: 'bg-white',
    ctaText: 'text-ngo-text',
    ctaHover: 'hover:bg-ngo-cream',
    ctaArrowColor: 'text-white',
    descricao:
      'Voluntariado é presença colocada em prática. Uma pessoa pode ajudar em um treino, em um evento, no reforço escolar, na cozinha ou em qualquer outra frente que esteja precisando de apoio. Não precisa ter muitas horas disponíveis. Quando alguém oferece uma manhã, uma tarde ou algumas horas com constância, essa presença vira referência para uma criança que está sendo acompanhada de perto.',
    exemplo: 'Uma manhã por semana já pode virar uma história importante na vida de uma criança.',
    cta: 'Quero ser voluntário',
    waMsg: 'Olá, gostaria de ser voluntário na Associação Pró-Paraíso. Quais são as oportunidades?',
  },
  {
    titulo: 'Conheça e divulgue',
    icone: '📢',
    cardBg: 'bg-primary',
    titleColor: 'text-white',
    bodyColor: 'text-white/90',
    iconBoxBg: 'bg-white/20',
    exemploBg: 'bg-white/15',
    exemploText: 'text-white',
    exemploStrong: 'text-white',
    ctaBg: 'bg-white',
    ctaText: 'text-ngo-text',
    ctaHover: 'hover:bg-ngo-cream',
    ctaArrowColor: 'text-white',
    descricao:
      'Antes de apoiar, você pode chegar perto. Visite os projetos, converse com quem participa, veja como as atividades acontecem e entenda as necessidades reais da comunidade. Depois, conte para alguém. Pode ser uma empresa, um amigo, um vizinho ou uma pessoa que queira ajudar, mas ainda não sabe por onde começar. Muitas parcerias nascem assim, a partir de uma visita simples que vira indicação.',
    exemplo: 'A maior parte dos nossos parceiros chegou por indicação de quem conheceu o projeto de perto.',
    cta: 'Quero conhecer e divulgar',
    waMsg: 'Olá, gostaria de agendar uma visita à Associação Pró-Paraíso para conhecer os projetos.',
  },
]

const passos = [
  {
    n: '01',
    titulo: 'Manda um oi',
    desc: 'WhatsApp, sem formalidade. A gente conversa sobre o que você quer fazer e o que a Associação precisa agora.',
    bg: 'bg-ngo-orange',
    textTitle: 'text-white',
    textBody: 'text-white/90',
    watermark: 'text-white/15',
    badge: 'text-white/80',
  },
  {
    n: '02',
    titulo: 'Conhece de perto',
    desc: 'Marca uma visita ou pede pra te mandar fotos, vídeos e relatórios das ações em andamento.',
    bg: 'bg-ngo-yellow',
    textTitle: 'text-ngo-text',
    textBody: 'text-ngo-text/85',
    watermark: 'text-ngo-text/15',
    badge: 'text-ngo-text/70',
  },
  {
    n: '03',
    titulo: 'Apoia do jeito que faz sentido',
    desc: 'Com material, dinheiro pra um fornecedor específico, tempo, divulgação. Você escolhe e a gente registra tudo.',
    bg: 'bg-ngo-green',
    textTitle: 'text-white',
    textBody: 'text-white/90',
    watermark: 'text-white/15',
    badge: 'text-white/80',
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
            backgroundImage: 'url(/images/projetos/caixinhas-3.jpg)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/60 via-ngo-orange/40 to-secondary-dark/80" aria-hidden />
        <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="section-label text-white/80 border-ngo-yellow mb-5 block">Como apoiar</span>
          <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 max-w-4xl">
            Apoie a Pró-Paraíso do jeito que cabe em você
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Não existe uma única forma de apoiar. Existe a sua. Nós mostramos o que está sendo necessário, explicamos para onde cada apoio será direcionado e registramos cada passo, para que sua ajuda chegue exatamente onde precisa chegar.
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
              Valquito Soares, Presidente
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
                className={`${f.cardBg} rounded-2xl p-7 md:p-8 hover:-translate-y-1 transition-transform duration-300 flex flex-col`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${f.iconBoxBg} flex items-center justify-center text-3xl md:text-4xl flex-shrink-0`}>
                    <span aria-hidden>{f.icone}</span>
                  </div>
                  <h3 className={`font-bebas text-2xl md:text-3xl tracking-wide ${f.titleColor} leading-none`}>
                    {f.titulo}
                  </h3>
                </div>

                <p className={`${f.bodyColor} leading-relaxed mb-5 flex-1`}>{f.descricao}</p>

                <div className={`${f.exemploBg} rounded-xl px-4 py-3 mb-5`}>
                  <p className={`text-sm ${f.exemploText} leading-relaxed`}>
                    <span className={`font-semibold ${f.exemploStrong}`}>Pra ter ideia: </span>
                    {f.exemplo}
                  </p>
                </div>

                <a
                  href={`https://api.whatsapp.com/send/?phone=5511987103256&text=${encodeURIComponent(f.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-3 ${f.ctaBg} ${f.ctaText} font-semibold text-sm pl-5 pr-2 py-2 rounded-full ${f.ctaHover} transition-colors w-fit`}
                >
                  {f.cta}
                  <span className={`w-7 h-7 rounded-full ${f.cardBg} flex items-center justify-center`}>
                    <svg className={`w-4 h-4 ${f.ctaArrowColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
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
      <section id="doar" className="section-padding bg-ngo-cream scroll-mt-20 relative overflow-hidden">
        {/* círculo decorativo de fundo */}
        <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-ngo-yellow/20 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute top-1/3 -right-32 w-[360px] h-[360px] rounded-full bg-ngo-orange/15 blur-3xl pointer-events-none" aria-hidden />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 md:mb-24">
            {/* Coluna texto */}
            <div className="lg:col-span-7">
              <span className="section-label mb-6 block">Apoie do seu jeito</span>
              <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide leading-[0.95] text-ngo-text mb-10">
                Você pode somar
                <br />
                <span className="text-ngo-orange">do seu jeito</span>
              </h2>

              <div className="relative pl-6 mb-8 border-l-4 border-ngo-yellow">
                <p className="text-ngo-text text-xl md:text-2xl font-medium leading-relaxed">
                  Apoiar não precisa seguir uma fórmula pronta. Você contribui da forma que fizer sentido para a sua realidade, com tempo, recursos, divulgação ou presença.
                </p>
              </div>

              <p className="text-ngo-text-muted text-lg leading-relaxed mb-5">
                Nós mostramos com clareza o que está sendo necessário, explicamos para onde cada apoio será direcionado e registramos tudo ao longo do caminho. Assim, você consegue participar com confiança, sabendo que a sua ajuda chega onde precisa chegar.
              </p>
              <p className="text-ngo-text-muted text-lg leading-relaxed">
                Em resumo, o apoio começa do jeito que dá, mas ganha força quando cada pessoa entende o impacto real da própria contribuição.
              </p>
            </div>

            {/* Coluna visual */}
            <div className="lg:col-span-5 relative">
              {/* bloco amarelo decorativo atrás */}
              <div className="absolute -top-5 -right-5 w-[85%] h-[85%] bg-ngo-yellow rounded-2xl hidden lg:block" aria-hidden />
              {/* bloco verde decorativo atrás */}
              <div className="absolute -bottom-5 -left-5 w-1/2 h-1/2 bg-ngo-green/30 rounded-2xl hidden lg:block" aria-hidden />

              <div
                className="relative w-full aspect-[4/5] bg-cover bg-center rounded-2xl shadow-2xl ring-1 ring-black/5"
                style={{ backgroundImage: 'url(/images/projetos/solidariedade-3.jpg)' }}
                role="img"
                aria-label="Famílias e voluntários da Pró-Paraíso em campanha solidária"
              />
            </div>
          </div>

          <div className="mb-10 max-w-3xl">
            <span className="section-label block">Como começar em 3 passos</span>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {passos.map((p) => (
              <div
                key={p.n}
                className={`${p.bg} rounded-2xl p-7 md:p-8 relative overflow-hidden`}
              >
                <span className={`absolute -top-4 -right-2 font-bebas text-7xl md:text-8xl ${p.watermark} leading-none select-none`} aria-hidden>
                  {p.n}
                </span>
                <div className="relative">
                  <p className={`${p.badge} font-bebas text-2xl mb-3`}>{p.n}</p>
                  <h3 className={`font-bebas text-2xl md:text-3xl tracking-wide ${p.textTitle} mb-3 leading-none`}>
                    {p.titulo}
                  </h3>
                  <p className={`${p.textBody} leading-relaxed`}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que fazemos assim */}
      <section className="section-padding bg-secondary-dark text-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <span className="section-label text-white/80 border-ngo-yellow mb-6 inline-block">Por que fazemos assim</span>
            <h2 className="font-bebas text-3xl md:text-5xl lg:text-6xl tracking-wide leading-[1.1] mb-12 max-w-4xl">
              A confiança não nasce da promessa. Ela nasce do registro.
            </h2>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Coluna 1 — texto */}
              <div className="space-y-5 text-white/85 leading-relaxed text-base md:text-lg">
                <p>
                  Nós fazemos tudo com seriedade, com papel, com foto, com imagem e com prestação de contas. Esse cuidado é um dos motivos pelos quais a Associação continua de pé até hoje.
                </p>
                <p>
                  Todo projeto social tem custo. Material esportivo, cesta básica, transporte, alimentação, eventos e campanhas precisam de organização. Por isso, captar apoio hoje exige método. Não existe mais espaço para dinheiro passando de mão em mão, sem clareza sobre origem, destino e resultado.
                </p>
                <p>
                  Quando surge uma necessidade, nós explicamos o que falta, mostramos o orçamento e enviamos os contatos do fornecedor. Quem quer ajudar pode falar diretamente com o fornecedor e fazer a doação do jeito mais seguro.
                </p>
                <p>
                  Assim, tudo fica limpo, registrado e transparente. A pessoa que apoia sabe para onde a ajuda foi. A Associação presta contas com tranquilidade. E quem recebe o apoio sente, na prática, que existe uma rede séria cuidando para que aquilo chegue do jeito certo.
                </p>
                <p className="text-white/70 text-sm uppercase tracking-widest font-semibold pt-4">
                  Presidente Valquito
                </p>
              </div>

              {/* Coluna 2 — fotos sticky */}
              <aside className="md:sticky md:top-24 space-y-4 self-start max-w-xs md:ml-auto">
                <div
                  className="w-full aspect-square bg-cover bg-center rounded-2xl shadow-2xl ring-1 ring-white/10"
                  style={{ backgroundImage: 'url(/images/projetos/solidariedade-2.jpg)' }}
                  role="img"
                  aria-label="Equipe da Pró-Paraíso organizando uma campanha solidária"
                />
                <div
                  className="w-full aspect-square bg-cover bg-center rounded-2xl shadow-2xl ring-1 ring-white/10"
                  style={{ backgroundImage: 'url(/images/projetos/caixinhas-2.jpg)' }}
                  role="img"
                  aria-label="Caixinhas de Natal sendo entregues às crianças"
                />
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,20,12,0.55), rgba(15,10,6,0.8)), url(/images/projetos/solidariedade-1.jpg)',
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
