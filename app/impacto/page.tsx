import Link from 'next/link'

const ancoraStats = [
  { numero: '1.000', label: 'pessoas atendidas por mês', detalhe: '12.000 atendimentos no ano' },
  { numero: '~5.000', label: 'famílias beneficiadas', detalhe: 'em campanhas solidárias por ano' },
  { numero: '14', label: 'modalidades ativas', detalhe: 'em 2 unidades — Paraisópolis e Banca Flor' },
  { numero: '10+', label: 'anos de atuação', detalhe: 'desde 24/09/2015' },
]

const projetosImpacto = [
  {
    titulo: 'Esporte em Ação',
    icone: '⚽',
    iconBg: 'bg-ngo-green',
    accent: 'border-l-ngo-green',
    metricas: [
      { v: '300', l: 'crianças e jovens por dia' },
      { v: '1.500', l: 'participações por semana' },
    ],
    nota: 'Atividades todos os dias em 3 espaços (Palmeirinha, Praça da Cidadania, Arena 5 Estrela).',
  },
  {
    titulo: 'Aprender para Crescer',
    icone: '📚',
    iconBg: 'bg-ngo-yellow',
    accent: 'border-l-ngo-yellow',
    metricas: [
      { v: '90', l: 'crianças por semana' },
      { v: '360', l: 'atendimentos por mês' },
    ],
    nota: 'Reforço escolar de segunda a sexta, manhã e tarde, para crianças de 6 a 12 anos.',
  },
  {
    titulo: 'Solidariedade em Ação',
    icone: '🤝',
    iconBg: 'bg-ngo-orange',
    accent: 'border-l-ngo-orange',
    metricas: [
      { v: '500', l: 'famílias alcançadas por mês' },
      { v: '8', l: 'campanhas no último ano' },
    ],
    nota: 'Cestas básicas, Campanha do Agasalho, Natal Solidário e apoio emergencial.',
  },
  {
    titulo: 'Eventos comunitários',
    icone: '🎉',
    iconBg: 'bg-primary',
    accent: 'border-l-primary',
    metricas: [
      { v: '4', l: 'eventos por ano' },
      { v: '5.000', l: 'participantes em média' },
    ],
    nota: 'Dia das Crianças, Dia dos Pais, Dia das Mães e final de ano com Caixinhas de Natal.',
  },
]

const cotidiano = [
  {
    icone: '🌱',
    titulo: 'Permanência e vínculo',
    desc: 'Crianças e jovens não apenas chegam — eles continuam, se envolvem e criam pertencimento.',
  },
  {
    icone: '🏃',
    titulo: 'Esporte que tira da rua',
    desc: 'Rotina, convivência e ambiente seguro. Melhora visível em disciplina, comportamento e bem-estar físico e mental.',
  },
  {
    icone: '📖',
    titulo: 'Aprendizado e confiança',
    desc: 'Crianças passam a compreender melhor os conteúdos e voltam a acreditar no próprio potencial.',
  },
  {
    icone: '🤲',
    titulo: 'Rede em momentos críticos',
    desc: 'Campanhas solidárias se tornaram apoio real no inverno, no fim do ano e quando surge necessidade urgente.',
  },
  {
    icone: '🫂',
    titulo: 'Integração da comunidade',
    desc: 'Eventos ampliaram a integração entre moradores de diferentes idades, reforçando convivência, alegria e união.',
  },
]

const credibilidade = [
  'Apoiada por comerciantes e moradores da própria comunidade — reconhecimento local e mobilização real.',
  'Ações registradas, organizadas e realizadas com cuidado, com responsabilidade de prestar contas a quem doa e a quem recebe.',
  'Percebida como um espaço de acolhimento e presença constante, em que as pessoas são vistas, ouvidas e cuidadas com respeito.',
]

export default function Impacto() {
  return (
    <div className="bg-ngo-cream">
      {/* Hero */}
      <section className="relative bg-ngo-orange text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(/images/projetos/aprender-4.jpg)',
          }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark/60 via-ngo-orange/40 to-secondary-dark/80" aria-hidden />
        <div className="container-custom relative z-10 pt-24 pb-20 md:pt-32 md:pb-24">
          <span className="section-label text-white/80 border-ngo-yellow mb-5 block">Nosso impacto</span>
          <h1 className="font-bebas text-5xl md:text-7xl leading-none tracking-wide mb-6 max-w-4xl">
            Impacto que se mede e impacto que se sente
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl leading-relaxed">
            A Pró-Paraíso construiu impacto de dois jeitos. Pelo que dá pra medir, com números claros. E pelo que dá
            pra sentir — quando uma criança muda de comportamento, um jovem volta a ter rotina, ou uma família
            atravessa uma fase difícil com apoio e dignidade.
          </p>
        </div>
      </section>

      {/* Números-âncora */}
      <section className="-mt-12 md:-mt-16 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {ancoraStats.map((s, i) => (
              <div
                key={s.label}
                className={`${i === 0 ? 'bg-ngo-yellow text-ngo-text' : 'bg-white text-ngo-text border border-ngo-border'} rounded-2xl p-6 md:p-7 shadow-card`}
              >
                <p className="font-bebas text-5xl md:text-6xl leading-none tracking-wide mb-3">{s.numero}</p>
                <p className="text-sm md:text-base font-semibold mb-1">{s.label}</p>
                <p className="text-xs text-ngo-text-muted">{s.detalhe}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por projeto */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label mb-4 block">Resultados por projeto</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text">
              Onde o impacto acontece
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {projetosImpacto.map((p) => (
              <article
                key={p.titulo}
                className={`bg-white rounded-2xl p-7 md:p-8 shadow-card border-l-4 ${p.accent} border-y border-r border-ngo-border/60`}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${p.iconBg} flex items-center justify-center text-3xl md:text-4xl shadow-sm flex-shrink-0`}>
                    <span aria-hidden>{p.icone}</span>
                  </div>
                  <h3 className="font-bebas text-2xl md:text-3xl tracking-wide text-ngo-text leading-none pt-2">
                    {p.titulo}
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5 pb-5 border-b border-ngo-border">
                  {p.metricas.map((m) => (
                    <div key={m.l}>
                      <p className="font-bebas text-4xl md:text-5xl leading-none tracking-wide text-ngo-text mb-1">{m.v}</p>
                      <p className="text-xs md:text-sm text-ngo-text-muted leading-tight">{m.l}</p>
                    </div>
                  ))}
                </div>

                <p className="text-sm text-ngo-text-muted leading-relaxed">{p.nota}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto percebido — cards com ícones */}
      <section className="section-padding bg-ngo-yellow-light">
        <div className="container-custom">
          <div className="max-w-3xl mb-12 md:mb-16">
            <span className="section-label mb-4 block">No cotidiano</span>
            <h2 className="font-bebas text-4xl md:text-5xl tracking-wide leading-none text-ngo-text mb-5">
              O que aparece além dos números
            </h2>
            <p className="text-ngo-text-muted text-lg leading-relaxed">
              A comunidade percebe resultados que não cabem em planilha, mas aparecem todo dia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {cotidiano.map((item) => (
              <div
                key={item.titulo}
                className="bg-white rounded-2xl p-6 md:p-7 border border-ngo-border/60 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-4xl mb-4" aria-hidden>{item.icone}</div>
                <h3 className="font-bebas text-xl md:text-2xl tracking-wide text-ngo-text mb-2 leading-none">
                  {item.titulo}
                </h3>
                <p className="text-ngo-text-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="section-padding bg-secondary-dark text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="section-label text-white/80 border-ngo-yellow mb-6 inline-block">Transparência e confiança</span>
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wide leading-[1.05] mb-10">
              O que sustenta o trabalho ao longo do tempo é a confiança construída com transparência e parceria.
            </h2>
            <ul className="space-y-4">
              {credibilidade.map((item, i) => (
                <li key={i} className="flex gap-4 items-start bg-white/5 rounded-2xl p-5 border border-white/10">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ngo-yellow text-secondary-dark flex items-center justify-center font-bebas text-lg leading-none">
                    {i + 1}
                  </span>
                  <p className="text-white/85 leading-relaxed pt-1">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl my-16 md:my-24 rounded-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(30,20,12,0.55), rgba(15,10,6,0.8)), url(/images/projetos/esporte-3.jpg)',
          }}
          aria-hidden
        />
        <div className="container-custom relative z-10 py-16 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-sans max-w-3xl mx-auto">
            Faça parte desta transformação
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Seu apoio amplia o impacto na comunidade — pode ser doação, voluntariado ou parceria.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/como-apoiar#doar"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-semibold px-8 py-4 rounded hover:bg-ngo-yellow/90 transition"
            >
              Quero doar
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20como%20posso%20apoiar%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-8 py-4 rounded hover:bg-ngo-cream transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
