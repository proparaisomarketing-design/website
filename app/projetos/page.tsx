import Link from 'next/link'

const projetos = [
  {
    id: 'esporte',
    icone: '⚽',
    iconBg: 'bg-ngo-green',
    accentBg: 'bg-white',
    titulo: 'Esporte em Ação',
    descricao: 'Promove socialização e contribui para tirar crianças e jovens da rua, oferecendo um espaço seguro, educativo e saudável. O esporte organiza a energia, ensina convivência e dá direção. Para muitas crianças, o treino é o horário mais seguro do dia.',
    modalidades: 'Futebol de campo, futebol de salão e futebol society.',
    publico: 'Crianças e jovens.',
    frequencia: 'Atividades todos os dias, com constância e vínculo.',
    locais: 'Campo do Palmeirinha, Praça da Cidadania e Arena 5 Estrela.',
    objetivos: [
      'Promover a socialização',
      'Contribuir para tirar crianças e jovens da rua',
      'Oferecer espaço seguro, educativo e saudável para convivência',
    ],
    resultados: 'Melhora no comportamento e na disciplina, ganhos na saúde física e no bem-estar mental, mais permanência e vínculo nas atividades.',
  },
  {
    id: 'aprender',
    icone: '📚',
    iconBg: 'bg-ngo-yellow',
    accentBg: 'bg-ngo-yellow-light',
    titulo: 'Aprender para Crescer',
    descricao: 'Atende crianças de 6 a 12 anos na Associação Pró-Paraíso, de segunda a sexta. Apoio educacional contínuo para fortalecer o aprendizado, criar rotina e ajudar cada criança a avançar no seu próprio ritmo.',
    modalidades: 'Reforço escolar.',
    publico: 'Crianças de 6 a 12 anos.',
    frequencia: 'Segunda a sexta, manhã e tarde.',
    locais: 'Associação Pró-Paraíso (unidade principal).',
    objetivos: [
      'Fortalecer o aprendizado e criar rotina',
      'Organizar o conteúdo e resgatar a confiança',
      'Investir em igualdade de oportunidades',
    ],
    resultados: 'As crianças passam a compreender melhor os conteúdos, acreditar no próprio potencial e ganhar rotina de estudo com acompanhamento.',
  },
  {
    id: 'caixinhas',
    icone: '🎁',
    iconBg: 'bg-ngo-orange',
    accentBg: 'bg-white',
    titulo: 'Caixinhas de Natal',
    descricao: 'Iniciativa realizada há 5 anos consecutivos. A criança escreve uma cartinha pedindo um brinquedo. O padrinho entrega o brinquedo e também doa uma roupa e um sapato. Começou com 50 crianças e chegou a quase 400 no último ano.',
    modalidades: 'Campanha anual de final de ano.',
    publico: 'Crianças atendidas pela Associação.',
    frequencia: 'Todos os anos, no final do ano.',
    locais: 'Associação Pró-Paraíso e rede de padrinhos.',
    objetivos: [
      'Fortalecer pertencimento e acolhimento',
      'Mobilizar a comunidade em torno de uma ação concreta',
    ],
    resultados: 'A criança se sente lembrada, valorizada e acolhida. Um modelo local de parceria que sustenta a iniciativa com continuidade.',
  },
  {
    id: 'solidariedade',
    icone: '🤝',
    iconBg: 'bg-primary',
    accentBg: 'bg-ngo-yellow-light',
    titulo: 'Solidariedade em Ação',
    descricao: 'Solidariedade, na prática, é quando alguém percebe que o outro está no limite e decide não virar o rosto. Este projeto nasceu para ser resposta rápida, digna e humana quando a necessidade aperta.',
    modalidades: 'Campanha do Agasalho, Natal Solidário, Luta contra a Fome, cestas básicas e doações.',
    publico: 'Famílias e pessoas em situação de vulnerabilidade.',
    frequencia: 'No inverno, no final do ano e sempre que a comunidade necessitar.',
    locais: 'Comunidade de atuação da Associação.',
    objetivos: [
      'Proteger a dignidade de quem está atravessando uma fase difícil',
      'Oferecer apoio em momentos de maior necessidade',
      'Transmitir: você não está sozinho',
    ],
    resultados: 'Rede de apoio em momentos críticos. Apoio de comerciantes e moradores da própria comunidade, com responsabilidade compartilhada.',
  },
]

export default function Projetos() {
  return (
    <div className="bg-ngo-cream">
      {/* Hero */}
      <section className="relative bg-ngo-black text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1600&q=80)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ngo-black/70 via-ngo-black/60 to-ngo-black" aria-hidden />
        <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="section-label text-white/80 border-ngo-yellow mb-5 block">Projetos e ações</span>
          <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 max-w-4xl">
            Quatro frentes, uma mesma missão: crescer junto
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
            Projetos que transformam vidas na comunidade. Atividades de segunda a sexta, com rotina, acompanhamento e transparência.
          </p>
          {/* Quick nav */}
          <div className="mt-10 flex flex-wrap gap-3">
            {projetos.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium hover:bg-white/20 transition"
              >
                <span aria-hidden>{p.icone}</span>
                {p.titulo}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <div>
        {projetos.map((projeto) => (
          <section
            key={projeto.id}
            id={projeto.id}
            className={`${projeto.accentBg} section-padding scroll-mt-20`}
          >
            <div className="container-custom">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
                {/* Cabeçalho do projeto */}
                <div className="lg:col-span-5">
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${projeto.iconBg} flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-sm`}>
                    <span aria-hidden>{projeto.icone}</span>
                  </div>
                  <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none mb-5 text-ngo-text">
                    {projeto.titulo}
                  </h2>
                  <p className="text-ngo-text-muted text-lg leading-relaxed mb-6">
                    {projeto.descricao}
                  </p>
                  <p className="text-sm text-ngo-text-muted">
                    <span className="font-semibold text-ngo-text">Modalidades:</span> {projeto.modalidades}
                  </p>
                </div>

                {/* Meta-infos e objetivos */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="grid sm:grid-cols-3 gap-4">
                    <InfoCard label="Público" value={projeto.publico} />
                    <InfoCard label="Frequência" value={projeto.frequencia} />
                    <InfoCard label="Locais" value={projeto.locais} />
                  </div>

                  <div className="bg-white rounded-2xl p-6 md:p-7 shadow-card border border-ngo-border/60">
                    <h3 className="font-bebas text-2xl tracking-wide text-ngo-text mb-4">Objetivos</h3>
                    <ul className="space-y-3">
                      {projeto.objetivos.map((obj) => (
                        <li key={obj} className="flex gap-3 text-ngo-text">
                          <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-ngo-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-ngo-black text-white rounded-2xl p-6 md:p-7">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block w-2 h-2 rounded-full bg-ngo-yellow" aria-hidden />
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-ngo-yellow">Resultados percebidos</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{projeto.resultados}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Modalidades e locais gerais */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <span className="section-label mb-4 block">Visão geral</span>
            <h2 className="text-3xl md:text-4xl font-bold text-ngo-text font-sans leading-tight">
              Modalidades e locais de atendimento
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-ngo-yellow-light rounded-2xl p-7 md:p-8">
              <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text mb-4">Modalidades atuais</h3>
              <p className="text-ngo-text-muted leading-relaxed">
                Cerca de 12 a 14 modalidades: futebol de campo, society, futsal, reforço escolar (manhã e tarde), muay thai, capoeira, karatê, judô, pilates, zumba, aula de sertanejo. Eventos: Dia das Crianças, Dia do Pai, Dia da Mãe e final de ano (Caixinhas de Natal).
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 md:p-8 border border-ngo-border shadow-card">
              <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text mb-4">Onde estamos</h3>
              <div className="space-y-4 text-ngo-text-muted leading-relaxed">
                <p>
                  <span className="block font-semibold text-ngo-text mb-1">Unidade principal</span>
                  São Paulo, Paraisópolis. Todas as modalidades e projetos.
                </p>
                <p>
                  <span className="block font-semibold text-ngo-text mb-1">Unidade Jardim Tapicerica da Serra (Jardim Banca Flor)</span>
                  Cerca de 300 alunos no futebol de campo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(11,7,6,0.6), rgba(11,7,6,0.55)), url(https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1600&q=80)',
          }}
          aria-hidden
        />
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans max-w-3xl mx-auto">
            Quer conhecer nossos projetos de perto?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Venha visitar, apoiar ou ser voluntário. Sua presença transforma.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20conhecer%20os%20projetos%20da%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-8 py-4 rounded hover:bg-ngo-yellow/90 transition"
            >
              Fale conosco
            </a>
            <Link
              href="/como-apoiar#doar"
              className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-cream transition"
            >
              Quero doar
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-ngo-border/60 shadow-card">
      <p className="text-xs font-semibold uppercase tracking-widest text-ngo-text-muted mb-2">{label}</p>
      <p className="text-ngo-text text-sm leading-relaxed">{value}</p>
    </div>
  )
}
