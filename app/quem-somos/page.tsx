import Link from 'next/link'

const timeline = [
  {
    year: '2015',
    title: 'O começo com 50 alunos',
    body: 'No início, eram 50 alunos e o projeto era só futebol. Não tinha uniforme nem material esportivo, muitas crianças treinavam com o que tinham. Mesmo assim, o projeto acontecia: com presença, disciplina e compromisso de fazer direito.',
    footnote: '24 de setembro de 2015. Registro oficial, com documentação e organização formal.',
    cardBg: 'bg-ngo-yellow',
    cardText: 'text-ngo-text',
    cardBodyText: 'text-ngo-text/85',
    cardYearText: 'text-ngo-text',
    cardBorder: '',
    cardFootnote: 'text-ngo-text/60 border-ngo-text/15',
    dotColor: 'bg-ngo-yellow',
    glowColor: 'shadow-[0_0_24px_rgba(244,169,0,0.55)]',
  },
  {
    year: '2016–2019',
    title: 'A comunidade acredita e o projeto cresce',
    body: 'De 50 para 100, depois 150, e um salto importante: 300 alunos. Três modalidades: futebol, futsal e karatê. Já com uma característica clara, não era só sobre esporte, era sobre oferecer caminho, rotina e proteção.',
    cardBg: 'bg-ngo-green',
    cardText: 'text-white',
    cardBodyText: 'text-white/90',
    cardYearText: 'text-white',
    cardBorder: '',
    cardFootnote: 'text-white/60 border-white/15',
    dotColor: 'bg-ngo-green',
    glowColor: 'shadow-[0_0_24px_rgba(96,133,45,0.55)]',
  },
  {
    year: '2020–2023',
    title: 'Mais modalidades, mais estrutura',
    body: 'Comerciantes e apoiadores se aproximaram. Chegaram uniformes, calções, meiões, coletes e material esportivo. A criança passou a encontrar aqui o que precisava para participar com dignidade. Até o lanche virou realidade via patrocínio.',
    cardBg: 'bg-white',
    cardText: 'text-ngo-text',
    cardBodyText: 'text-ngo-text-muted',
    cardYearText: 'text-ngo-orange',
    cardBorder: 'border-2 border-ngo-orange',
    cardFootnote: 'text-ngo-text-muted/80 border-ngo-border',
    dotColor: 'bg-ngo-orange',
    glowColor: 'shadow-[0_0_24px_rgba(239,125,0,0.55)]',
  },
  {
    year: '2024+',
    title: '14 modalidades, base de 800 alunos',
    body: 'Futebol de campo, society, futsal, reforço escolar (manhã e tarde), muay thai, capoeira, karatê, judô, pilates, zumba, aula de sertanejo e mais. Caminhando para 1.000 alunos. Expansão para o Jardim Tapicerica da Serra (Jardim Banca Flor), com cerca de 300 alunos no futebol de campo.',
    cardBg: 'bg-primary',
    cardText: 'text-white',
    cardBodyText: 'text-white/90',
    cardYearText: 'text-white',
    cardBorder: '',
    cardFootnote: 'text-white/60 border-white/15',
    dotColor: 'bg-primary',
    glowColor: 'shadow-[0_0_24px_rgba(59,149,210,0.55)]',
  },
  {
    year: 'Há 5 anos',
    title: 'Caixinhas de Natal',
    body: 'A criança escreve uma cartinha pedindo um brinquedo; o padrinho entrega brinquedo, roupa e sapato. De 50 crianças para quase 400 no último ano, com ajuda de comerciantes e padrinhos da comunidade.',
    cardBg: 'bg-ngo-orange',
    cardText: 'text-white',
    cardBodyText: 'text-white/90',
    cardYearText: 'text-white',
    cardBorder: '',
    cardFootnote: 'text-white/60 border-white/15',
    dotColor: 'bg-ngo-orange',
    glowColor: 'shadow-[0_0_24px_rgba(239,125,0,0.55)]',
  },
]

const valores = [
  {
    title: 'Seriedade e transparência',
    desc: 'A transparência não é frase bonita — é a razão de a Associação estar de pé até hoje. Tudo é registrado, organizado e prestado contas. Quando alguém apoia, a ajuda chega onde precisa chegar.',
    icon: '🔎',
    iconBg: 'bg-ngo-yellow',
  },
  {
    title: 'Solidariedade com forma',
    desc: 'Solidariedade também tem forma. Não é só doação — é escuta, respeito e construção junto, sem pressa e sem superioridade.',
    icon: '🤲',
    iconBg: 'bg-ngo-green',
  },
  {
    title: 'Presença que transforma',
    desc: 'Quando existe presença, existe transformação. E quando existe comunidade, ninguém precisa atravessar a necessidade sozinho.',
    icon: '💛',
    iconBg: 'bg-ngo-orange',
  },
]

export default function QuemSomos() {
  return (
    <div className="bg-ngo-cream">
      {/* Hero */}
      <section className="relative bg-ngo-orange text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(/images/equipe/equipe-1.jpg)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/60 via-ngo-orange/40 to-secondary-dark/80" aria-hidden />
        <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="section-label text-white/80 border-ngo-yellow mb-5 block">Quem somos</span>
          <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 max-w-4xl">
            Amor que vira ação, presença que transforma
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Uma organização comprometida com a dignidade humana, a empatia prática e um impacto que se mede no cotidiano.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding bg-ngo-yellow-light">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="section-label mb-4 block">Manifesto</span>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text mb-6">
                A recusa em tratar a falta do básico como algo normal
              </h2>
              <p className="text-ngo-text-muted leading-relaxed">
                Quando a mesa está vazia e a necessidade é urgente, a solidariedade deixa de ser conceito e vira ação.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ngo-text leading-relaxed">
              <p>
                A nossa organização nasceu desse incômodo e de um desejo simples, mas teimoso, de fazer diferente. No início, éramos apenas pessoas dispostas a ajudar com o que tinham: tempo, presença, escuta e mãos para trabalhar. Com o tempo, a ideia ganhou corpo. Crescemos porque transformamos intenção em prática, e prática em compromisso.
              </p>
              <p>
                Ao longo da trajetória, entendemos uma coisa que mudou tudo. Solidariedade não é só doar. Solidariedade é estar presente, é ouvir com respeito, é construir junto com quem é atendido, sem pressa e sem superioridade.
              </p>
              <p>
                Nós somos um coletivo de pessoas. Voluntários e apoiadores, mas também as famílias atendidas, que fazem parte da história e ajudam a desenhar os próximos passos. Tivemos desafios e aprendizados, e foi isso que moldou quem somos hoje.
              </p>
              <p className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text pt-4 leading-tight">
                Quando a gente se une de verdade, ninguém fica para trás.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa história + stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="section-label mb-4 block">A nossa história</span>
              <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text mb-8">
                Pouca estrutura, muita vontade e um incômodo que não deixava a gente parado
              </h2>
              <div className="space-y-5 text-ngo-text-muted leading-relaxed">
                <p>
                  A Associação Pró-Paraíso nasceu do jeito que as coisas mais verdadeiras nascem. A gente via de perto o que acontece quando uma criança não tem para onde ir, quando um jovem cresce sem referência, e quando uma família atravessa dificuldades sem rede de apoio. E decidiu fazer algo simples, mas constante: estar presente.
                </p>
                <p>
                  No começo, tudo era pequeno. Poucas pessoas, poucos recursos, uma atividade que reunia crianças e adolescentes e criava um lugar seguro para eles estarem. Não era perfeito, mas era real. E, principalmente, era sério. A comunidade percebeu isso cedo — e quando a comunidade confia, ela participa.
                </p>
                <p>
                  Foi assim que o projeto cresceu. Não por promessa, mas por prática. Aos poucos, as atividades aumentaram, os horários se ampliaram, e a Associação deixou de ser apenas um espaço de esporte ou de reforço escolar. Virou um ponto de encontro, de cuidado e de pertencimento.
                </p>
                <p>
                  Hoje, somos reconhecidos por sermos próximos. Por não tratar pessoas como número. Por sermos transparentes. Um lugar onde o amor vira ação e a ação vira oportunidade.
                </p>
              </div>
            </div>
            <aside className="lg:col-span-5 space-y-4">
              <StatCard bg="bg-ngo-orange" text="text-white" labelColor="text-ngo-yellow-light" number="800+" label="alunos ativos hoje" sub="Caminhando para 1.000" />
              <StatCard bg="bg-ngo-yellow-light" text="text-ngo-text" labelColor="text-ngo-text-muted" number="14" label="modalidades" sub="De esporte a reforço escolar" />
              <StatCard bg="bg-ngo-green" text="text-ngo-text" labelColor="text-ngo-text/70" number="10+" label="anos de atuação" sub="Desde 2015 em Paraisópolis" />
              <StatCard bg="bg-white border border-ngo-border" text="text-ngo-text" labelColor="text-ngo-text-muted" number="2" label="unidades" sub="Paraisópolis e Jardim Tapicerica" />
            </aside>
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="section-padding bg-ngo-cream relative overflow-hidden">
        {/* manchas decorativas sutis de cor */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-ngo-yellow/25 blur-3xl pointer-events-none" aria-hidden />
        <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-ngo-orange/15 blur-3xl pointer-events-none" aria-hidden />

        <div className="container-custom relative">
          <div className="max-w-3xl mb-16 md:mb-24" data-reveal>
            <span className="section-label mb-4 block">Linha do tempo</span>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide leading-none text-ngo-text">
              Do primeiro treino ao{' '}
              <span className="text-ngo-orange">que somos hoje</span>
            </h2>
          </div>

          <div className="relative">
            {/* Linha vertical com gradiente */}
            <div
              className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-ngo-yellow via-ngo-orange to-primary"
              aria-hidden
            />

            <ol className="space-y-12 md:space-y-20">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <li
                    key={`${item.year}-${i}`}
                    className="relative"
                    data-reveal
                    data-reveal-delay={String(i * 120)}
                  >
                    {/* Dot na linha */}
                    <span
                      className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-6 h-6 rounded-full ${item.dotColor} ring-4 ring-ngo-cream z-10 ${item.glowColor}`}
                      aria-hidden
                    >
                      <span className={`absolute inset-0 rounded-full ${item.dotColor} animate-ping opacity-50`} />
                    </span>

                    {/* Card — zig-zag no desktop, stack no mobile */}
                    <div
                      className={`pl-16 md:pl-0 md:w-1/2 ${
                        isLeft ? 'md:pr-12 lg:pr-16' : 'md:ml-auto md:pl-12 lg:pl-16'
                      }`}
                    >
                      <article
                        className={`${item.cardBg} ${item.cardBorder} rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300`}
                      >
                        <p
                          className={`font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide leading-none mb-4 ${item.cardYearText}`}
                        >
                          {item.year}
                        </p>
                        <h3 className={`text-xl md:text-2xl font-bold ${item.cardText} font-sans mb-4 leading-tight`}>
                          {item.title}
                        </h3>
                        <p className={`${item.cardBodyText} leading-relaxed`}>{item.body}</p>
                        {item.footnote && (
                          <p className={`text-xs mt-4 pt-4 border-t ${item.cardFootnote}`}>
                            {item.footnote}
                          </p>
                        )}
                      </article>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Como somos percebidos — pull quote */}
      <section className="section-padding bg-secondary-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="section-label text-white/80 border-ngo-yellow mb-6 inline-block">Como somos percebidos</span>
            <blockquote className="font-bebas text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-wide mb-10">
              &ldquo;Um lugar de cuidado, união e esperança, onde o amor vira ação e se transforma em oportunidades reais.&rdquo;
            </blockquote>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <p className="text-white/80 leading-relaxed">
                Quem conhece a Associação deve sentir, antes de tudo, acolhimento. Um acolhimento que não é discurso — é aquele que se percebe no jeito de receber, no cuidado com a palavra, na atenção ao detalhe, e no respeito pela história de cada pessoa.
              </p>
              <p className="text-white/80 leading-relaxed">
                Somos reconhecidos como um projeto humano, confiável e próximo da comunidade. Um lugar onde presença e vínculo andam juntos, e onde cada decisão é guiada pela dignidade de quem é atendido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores na prática */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="section-label mb-4 block">Valores na prática</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text">
              O que nos move, todos os dias
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {valores.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-7 md:p-8 border border-ngo-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${v.iconBg} flex items-center justify-center text-3xl md:text-4xl mb-5 shadow-sm`}>
                  <span aria-hidden>{v.icon}</span>
                </div>
                <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text mb-3 leading-none">
                  {v.title}
                </h3>
                <p className="text-ngo-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,20,12,0.55), rgba(15,10,6,0.8)), url(/images/projetos/esporte-1.jpg)',
          }}
          aria-hidden
        />
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans max-w-3xl mx-auto">
            Quer conhecer nossa atuação de perto?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Visite, apoie ou seja voluntário. Sua presença transforma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20conhecer%20melhor%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-8 py-4 rounded-full hover:bg-ngo-yellow/90 transition"
            >
              Fale conosco
            </a>
            <Link
              href="/como-apoiar#doar"
              className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded-full hover:bg-ngo-cream transition"
            >
              Quero doar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function StatCard({
  bg,
  text,
  labelColor,
  number,
  label,
  sub,
}: {
  bg: string
  text: string
  labelColor: string
  number: string
  label: string
  sub: string
}) {
  return (
    <div className={`${bg} ${text} rounded-2xl p-6 md:p-7`}>
      <p className={`text-xs font-semibold uppercase tracking-widest ${labelColor} mb-2`}>{label}</p>
      <p className="font-bebas text-5xl md:text-6xl leading-none tracking-wide mb-2">{number}</p>
      <p className={`text-sm ${labelColor}`}>{sub}</p>
    </div>
  )
}
