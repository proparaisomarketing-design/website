export default function ComoApoiar() {
  const formasApoio = [
    {
      titulo: 'Doação de materiais e recursos',
      icone: '📦',
      descricao: 'Material esportivo (bolas, chuteiras, meiões, calções, coletes), itens para campanhas ou outros recursos que a Associação precise. A doação é feita de forma transparente: a gente passa o orçamento e os contatos, e quem quer ajudar entra em contato direto com o fornecedor. Assim tudo fica registrado e prestado contas.',
    },
    {
      titulo: 'Parceria e padrinho',
      icone: '🤝',
      descricao: 'Comerciantes e moradores da comunidade já são grandes apoiadores. Se você ou sua empresa querem ser parceiros ou padrinhos de uma ação (como as Caixinhas de Natal), entramos em contato, explicamos a necessidade e combinamos a melhor forma de apoio, sempre com transparência.',
    },
    {
      titulo: 'Voluntariado',
      icone: '🤲',
      descricao: 'Doe tempo e presença. A Associação valoriza quem se dispõe a ajudar nas atividades, nos eventos e no dia a dia dos projetos. Entre em contato para conhecer as oportunidades.',
    },
    {
      titulo: 'Conhecer e divulgar',
      icone: '📢',
      descricao: 'Conhecer o trabalho de perto e falar sobre a Associação para outras pessoas aumenta o alcance e a confiança. Visitas e indicações são bem-vindas.',
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6 text-primary-dark">
            COMO APOIAR
          </h1>
          <p className="text-xl text-gray-600">
            Existem várias formas de fazer parte desta transformação. Tudo é feito com transparência: a gente não recebe dinheiro na mão. Quando há necessidade, passamos orçamento e contatos, e quem doa fala direto com o fornecedor. Assim fica tudo limpo, registrado e prestado contas.
          </p>
        </div>

        {/* Formas de Apoio */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {formasApoio.map((forma, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
              >
                <div className="text-5xl mb-4">{forma.icone}</div>
                <h2 className="text-2xl font-bebas mb-4 text-primary-dark">
                  {forma.titulo}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {forma.descricao}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Transparência */}
        <section className="mb-16 bg-primary-dark text-white py-12 rounded-lg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bebas mb-6 text-center">
              Por que fazemos assim
            </h2>
            <p className="text-lg mb-4 leading-relaxed text-center">
              Todo projeto social tem custo. Captar apoio hoje exige cuidado com a forma. Por isso não há dinheiro passando de mão em mão. Quando precisamos de algo, explicamos a necessidade, enviamos orçamento e contatos, e a pessoa que quer ajudar fala direto com o fornecedor e faz a doação. Tudo limpo, registrado e transparente. É a razão de a Associação estar de pé até hoje.
            </p>
          </div>
        </section>

        {/* Passos */}
        <section className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bebas mb-8 text-center text-primary-dark">
              Como começar
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <span className="text-2xl font-bebas text-primary-dark shrink-0">1</span>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-dark">Entre em contato</h3>
                  <p className="text-gray-700">
                    Fale conosco pelo WhatsApp. Contamos o que fazemos, o que precisamos e como você pode ajudar.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <span className="text-2xl font-bebas text-primary-dark shrink-0">2</span>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-dark">Conheça os projetos</h3>
                  <p className="text-gray-700">
                    Você pode agendar uma visita ou conhecer pelo site. Assim fica claro onde sua ajuda se encaixa.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                <span className="text-2xl font-bebas text-primary-dark shrink-0">3</span>
                <div>
                  <h3 className="font-semibold mb-2 text-primary-dark">Escolha sua forma de apoio</h3>
                  <p className="text-gray-700">
                    Doação de materiais, parceria, voluntariado ou divulgação. Toda forma de apoio faz diferença.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto bg-primary-dark text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bebas mb-4">
              PRONTO PARA FAZER A DIFERENÇA?
            </h2>
            <p className="text-lg mb-6">
              Entre em contato e descubra como você pode apoiar com transparência.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20como%20posso%20apoiar%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
