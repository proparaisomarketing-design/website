export default function Impacto() {
  const numeros = [
    { valor: '1.000', label: 'pessoas atendidas por mês' },
    { valor: '12.000', label: 'atendimentos por ano' },
    { valor: '500', label: 'famílias alcançadas por mês (ações solidárias)' },
    { valor: '6.000', label: 'famílias por ano' },
    { valor: '300', label: 'crianças e jovens por dia (projeto esportivo)' },
    { valor: '1.500', label: 'participações por semana (esporte)' },
    { valor: '90', label: 'crianças por semana (Aprender para Crescer)' },
    { valor: '360', label: 'atendimentos/mês (reforço escolar)' },
    { valor: '8', label: 'campanhas solidárias no último ano' },
    { valor: '~5.000', label: 'famílias beneficiadas (campanhas)' },
    { valor: '4', label: 'eventos comunitários por ano' },
    { valor: '5.000', label: 'participantes (média nos eventos)' },
  ]

  const impactoCotidiano = [
    'Mais permanência e vínculo nas atividades: crianças e jovens não apenas chegam, eles continuam, se envolvem e criam pertencimento.',
    'O esporte tem ajudado a tirar crianças e jovens da rua, oferecendo rotina, convivência e um ambiente seguro, com melhora de disciplina, comportamento e bem-estar físico e mental.',
    'O reforço escolar tem fortalecido o aprendizado e a confiança das crianças, que passam a compreender melhor os conteúdos e a acreditar no próprio potencial.',
    'As campanhas solidárias se tornaram uma rede de apoio em momentos críticos, principalmente no inverno, no fim do ano e quando surge uma necessidade urgente.',
    'Os eventos comunitários ampliaram a integração entre moradores de diferentes idades, reforçando convivência, alegria e união.',
  ]

  const credibilidade = [
    'A Associação é apoiada por comerciantes e por moradores da própria comunidade, o que mostra reconhecimento local e mobilização real.',
    'As ações são registradas, organizadas e realizadas com cuidado, com responsabilidade de prestar contas e manter a confiança de quem doa e de quem recebe.',
    'O projeto é percebido como um espaço de acolhimento e presença constante, em que as pessoas são vistas, ouvidas e cuidadas com respeito.',
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6 text-primary">
            NOSSO IMPACTO
          </h1>
          <p className="text-xl text-gray-600">
            A Associação Pró-Paraíso construiu impacto de dois jeitos. Pelo que dá para medir, com números claros. E pelo que dá para sentir, quando uma criança muda de comportamento, quando um jovem volta a ter rotina, e quando uma família atravessa uma fase difícil com apoio e dignidade.
          </p>
        </div>

        {/* Impacto em números */}
        <section className="mb-16">
          <h2 className="text-3xl font-bebas mb-8 text-center text-primary">
            Impacto em números
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Atividades de segunda a sexta-feira, com rotina que sustenta continuidade e acompanhamento.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {numeros.map((item, index) => (
              <div
                key={index}
                className="bg-primary text-white p-5 rounded-lg text-center"
              >
                <div className="text-2xl md:text-3xl font-bebas mb-1">
                  {item.valor}
                </div>
                <div className="text-xs md:text-sm opacity-95">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impacto percebido no dia a dia */}
        <section className="mb-16 bg-gray-50 py-12 rounded-lg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bebas mb-6 text-center text-primary">
              Impacto percebido no dia a dia
            </h2>
            <p className="text-center text-gray-600 mb-8">
              A comunidade percebe resultados que não cabem apenas em números, mas aparecem no cotidiano.
            </p>
            <ul className="space-y-4">
              {impactoCotidiano.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <span className="text-primary font-bold shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Transparência e confiança */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bebas mb-6 text-center text-primary">
              Transparência e confiança
            </h2>
            <p className="text-center text-gray-600 mb-8">
              O que sustenta o trabalho ao longo do tempo é a confiança construída com transparência e parceria.
            </p>
            <div className="space-y-4">
              {credibilidade.map((item, index) => (
                <div
                  key={index}
                  className="p-6 border-l-4 border-primary bg-white rounded-lg shadow-sm"
                >
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bebas mb-4 text-primary">
              FAÇA PARTE DESTA TRANSFORMAÇÃO
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Seu apoio pode ampliar ainda mais nosso impacto na comunidade.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20como%20posso%20apoiar%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Como Posso Ajudar?
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
