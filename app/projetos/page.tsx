import Link from 'next/link'
import Galeria from '@/components/projetos/Galeria'

type Projeto = {
  id: string
  icone: string
  iconBg: string
  accentBg: string
  accentText: string
  accentSoft: string
  accentBorder: string
  objetivosFg: string
  objetivosBody: string
  objetivosCheckCircle: string
  objetivosCheckIcon: string
  titulo: string
  descricao: string
  modalidades: string
  publico: string
  frequencia: string
  locais: string
  objetivos: string[]
  resultados: string
  imagens?: string[]
}

const projetos: Projeto[] = [
  {
    id: 'esporte',
    icone: '⚽',
    iconBg: 'bg-ngo-green',
    accentBg: 'bg-white',
    accentText: 'text-ngo-green',
    accentSoft: 'bg-ngo-green/10',
    accentBorder: 'border-ngo-green',
    objetivosFg: 'text-white',
    objetivosBody: 'text-white/95',
    objetivosCheckCircle: 'bg-white',
    objetivosCheckIcon: 'text-ngo-green',
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
    imagens: [
      '/images/projetos/esporte-1.jpg',
      '/images/projetos/esporte-2.jpg',
      '/images/projetos/esporte-3.jpg',
      '/images/projetos/esporte-4.jpg',
      '/images/projetos/esporte-5.jpg',
      '/images/projetos/esporte-6.jpg',
    ],
  },
  {
    id: 'aprender',
    icone: '📚',
    iconBg: 'bg-ngo-yellow',
    accentBg: 'bg-ngo-cream',
    accentText: 'text-secondary-dark',
    accentSoft: 'bg-ngo-yellow/30',
    accentBorder: 'border-ngo-yellow',
    objetivosFg: 'text-ngo-text',
    objetivosBody: 'text-ngo-text/85',
    objetivosCheckCircle: 'bg-ngo-text',
    objetivosCheckIcon: 'text-ngo-yellow',
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
    imagens: [
      '/images/projetos/aprender-1.jpg',
      '/images/projetos/aprender-2.jpg',
      '/images/projetos/aprender-3.jpg',
      '/images/projetos/aprender-4.jpg',
      '/images/projetos/aprender-5.jpg',
      '/images/projetos/aprender-6.jpg',
      '/images/projetos/aprender-7.jpg',
    ],
  },
  {
    id: 'caixinhas',
    icone: '🎁',
    iconBg: 'bg-ngo-orange',
    accentBg: 'bg-white',
    accentText: 'text-ngo-orange',
    accentSoft: 'bg-ngo-orange/10',
    accentBorder: 'border-ngo-orange',
    objetivosFg: 'text-white',
    objetivosBody: 'text-white/95',
    objetivosCheckCircle: 'bg-white',
    objetivosCheckIcon: 'text-ngo-orange',
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
    imagens: [
      '/images/projetos/caixinhas-1.jpg',
      '/images/projetos/caixinhas-2.jpg',
      '/images/projetos/caixinhas-3.jpg',
      '/images/projetos/caixinhas-4.jpg',
    ],
  },
  {
    id: 'solidariedade',
    icone: '🤝',
    iconBg: 'bg-primary',
    accentBg: 'bg-ngo-cream',
    accentText: 'text-primary',
    accentSoft: 'bg-primary/10',
    accentBorder: 'border-primary',
    objetivosFg: 'text-white',
    objetivosBody: 'text-white/95',
    objetivosCheckCircle: 'bg-white',
    objetivosCheckIcon: 'text-primary',
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
    imagens: [
      '/images/projetos/solidariedade-1.jpg',
      '/images/projetos/solidariedade-2.jpg',
      '/images/projetos/solidariedade-3.jpg',
    ],
  },
]

export default function Projetos() {
  return (
    <div className="bg-ngo-cream">
      {/* Hero */}
      <section className="relative bg-ngo-text text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/projetos/esporte-4.jpg)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ngo-text/70 via-ngo-text/60 to-ngo-text/85" aria-hidden />
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
        {projetos.map((projeto, idx) => (
          <section
            key={projeto.id}
            id={projeto.id}
            className={`${idx % 2 === 0 ? 'bg-white' : 'bg-ngo-cream'} section-padding scroll-mt-20 relative overflow-hidden`}
          >
            {/* mancha de cor de fundo bem sutil */}
            <div className={`absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full ${projeto.iconBg} opacity-[0.07] blur-3xl pointer-events-none`} aria-hidden />

            <div className="container-custom relative">
              {/* Header — número grande + icon + título + descrição alinhados */}
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-16" data-reveal>
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-6">
                  <span className={`font-bebas text-6xl md:text-7xl lg:text-8xl ${projeto.accentText} leading-none tracking-wide`}>
                    0{idx + 1}
                  </span>
                  <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${projeto.iconBg} flex items-center justify-center text-4xl md:text-5xl shadow-lg`}>
                    <span aria-hidden>{projeto.icone}</span>
                  </div>
                </div>

                <div className="lg:col-span-10">
                  <span className={`section-label mb-3 block ${projeto.accentText} !border-current`}>
                    Projeto
                  </span>
                  <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide leading-none mb-5 text-ngo-text">
                    {projeto.titulo}
                  </h2>
                  <p className="text-ngo-text-muted text-lg leading-relaxed mb-5 max-w-3xl">
                    {projeto.descricao}
                  </p>
                  <p className={`inline-flex items-center gap-2 text-sm font-medium ${projeto.accentSoft} ${projeto.accentText} px-4 py-2 rounded-full`}>
                    <span className="font-bold">Modalidades:</span>
                    <span>{projeto.modalidades}</span>
                  </p>
                </div>
              </div>

              {/* 3 InfoCards numa linha */}
              <div className="grid sm:grid-cols-3 gap-4 mb-6" data-reveal data-reveal-delay="120">
                <InfoCard icon="👥" label="Público" value={projeto.publico} accentSoft={projeto.accentSoft} accentText={projeto.accentText} />
                <InfoCard icon="🗓️" label="Frequência" value={projeto.frequencia} accentSoft={projeto.accentSoft} accentText={projeto.accentText} />
                <InfoCard icon="📍" label="Locais" value={projeto.locais} accentSoft={projeto.accentSoft} accentText={projeto.accentText} />
              </div>

              {/* Objetivos + Resultados lado a lado, mesma altura */}
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16" data-reveal data-reveal-delay="240">
                <div className={`${projeto.iconBg} rounded-2xl p-6 md:p-7 flex flex-col relative overflow-hidden`}>
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full ${projeto.objetivosCheckCircle} opacity-10 pointer-events-none`} aria-hidden />
                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <span className={`w-9 h-9 rounded-lg ${projeto.objetivosCheckCircle} ${projeto.objetivosCheckIcon} flex items-center justify-center text-lg shadow-sm`} aria-hidden>
                        ★
                      </span>
                      <h3 className={`font-bebas text-2xl md:text-3xl tracking-wide ${projeto.objetivosFg} leading-none`}>Objetivos</h3>
                    </div>
                    <ul className="space-y-3 flex-1">
                      {projeto.objetivos.map((obj) => (
                        <li key={obj} className={`flex gap-3 ${projeto.objetivosBody}`}>
                          <span className={`w-6 h-6 rounded-full ${projeto.objetivosCheckCircle} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <svg className={`w-3.5 h-3.5 ${projeto.objetivosCheckIcon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="leading-relaxed pt-0.5">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative bg-ngo-text text-white rounded-2xl p-6 md:p-7 overflow-hidden flex flex-col">
                  <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full ${projeto.iconBg} opacity-25 blur-2xl pointer-events-none`} aria-hidden />
                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`w-9 h-9 rounded-lg ${projeto.iconBg} flex items-center justify-center text-white text-lg shadow-lg`} aria-hidden>
                        ✦
                      </span>
                      <h3 className={`font-bebas text-xl md:text-2xl tracking-widest uppercase ${projeto.accentText} leading-none`}>
                        Resultados percebidos
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed flex-1">{projeto.resultados}</p>
                  </div>
                </div>
              </div>

              {/* Galeria densa com lightbox */}
              {projeto.imagens && projeto.imagens.length > 0 && (
                <div data-reveal data-reveal-delay="360">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text leading-none">
                      Galeria
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-ngo-text-muted">
                      {projeto.imagens.length} {projeto.imagens.length === 1 ? 'foto' : 'fotos'} · clique para ampliar
                    </span>
                  </div>
                  <Galeria imagens={projeto.imagens} titulo={projeto.titulo} accentBg={projeto.iconBg} />
                </div>
              )}
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
            backgroundImage: 'linear-gradient(rgba(30,20,12,0.55), rgba(15,10,6,0.8)), url(/images/projetos/aprender-4.jpg)',
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

function InfoCard({
  icon,
  label,
  value,
  accentSoft,
  accentText,
}: {
  icon: string
  label: string
  value: string
  accentSoft: string
  accentText: string
}) {
  return (
    <div className={`${accentSoft} rounded-2xl p-5 hover:-translate-y-0.5 transition-transform duration-200`}>
      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center mb-3 text-xl shadow-sm">
        <span aria-hidden>{icon}</span>
      </div>
      <p className={`text-xs font-bold uppercase tracking-widest ${accentText} mb-2`}>{label}</p>
      <p className="text-ngo-text text-sm leading-relaxed">{value}</p>
    </div>
  )
}
