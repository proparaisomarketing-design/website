const projetos = [
  {
    id: 'esporte',
    icone: '⚽',
    titulo: 'Esporte em Ação',
    descricao: 'O Projeto Esporte em Ação promove socialização e contribui para tirar crianças e jovens da rua, oferecendo um espaço seguro, educativo e saudável para convivência. O esporte organiza a energia, ensina convivência e dá direção. Para muitas crianças e jovens, o treino é o horário mais seguro do dia.',
    modalidades: 'Futebol de campo, futebol de salão e futebol society.',
    publico: 'Crianças e jovens.',
    frequencia: 'As atividades acontecem todos os dias, mantendo constância e vínculo com quem participa.',
    locais: 'Campo do Palmeirinha, Praça da Cidadania e Arena 5 Estrela.',
    objetivos: [
      'Promover a socialização',
      'Contribuir para tirar crianças e jovens da rua',
      'Oferecer um espaço seguro, educativo e saudável para convivência',
    ],
    resultados: 'Melhora no comportamento e na disciplina, ganhos na saúde física e no bem-estar mental, mais permanência e vínculo nas atividades.',
  },
  {
    id: 'aprender',
    icone: '📚',
    titulo: 'Aprender para Crescer',
    descricao: 'O Projeto Aprender para Crescer atende crianças de 6 a 12 anos e acontece na Associação Pró-Paraíso, de segunda a sexta-feira. É um apoio educacional contínuo, pensado para fortalecer o aprendizado, criar rotina e ajudar cada criança a avançar no seu próprio ritmo.',
    modalidades: 'Reforço escolar.',
    publico: 'Crianças de 6 a 12 anos.',
    frequencia: 'De segunda a sexta-feira, nos períodos da manhã e da tarde.',
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
    titulo: 'Caixinhas de Natal',
    descricao: 'O Projeto Caixinhas de Natal é uma iniciativa realizada há 5 anos consecutivos. A criança escreve uma cartinha pedindo um brinquedo. O padrinho entrega o brinquedo e também doa uma roupa e um sapato. O que começou com 50 crianças chegou a quase 400 no último ano, com a ajuda de comerciantes e padrinhos da comunidade.',
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
    titulo: 'Solidariedade em Ação',
    descricao: 'A solidariedade, na prática, é quando alguém percebe que o outro está no limite, e decide não virar o rosto. O Projeto Solidariedade em Ação nasceu para isso. Ser resposta rápida, digna e humana quando a necessidade aperta.',
    modalidades: 'Campanha do Agasalho, Natal Solidário, Luta contra a Fome, distribuição de cestas básicas e doações.',
    publico: 'Famílias e pessoas em situação de vulnerabilidade.',
    frequencia: 'No inverno, no final do ano e sempre que a comunidade necessitar.',
    locais: 'Comunidade de atuação da Associação.',
    objetivos: [
      'Proteger a dignidade de quem está atravessando uma fase difícil',
      'Oferecer apoio em momentos de maior necessidade',
      'Transmitir: você não está sozinho.',
    ],
    resultados: 'Rede de apoio em momentos críticos. Apoio de comerciantes e moradores da própria comunidade, com responsabilidade compartilhada.',
  },
]

export default function Projetos() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6 text-primary">
            PROJETOS E AÇÕES
          </h1>
          <p className="text-xl text-gray-600">
            Conheça os projetos que transformam vidas na comunidade. Atividades de segunda a sexta, com rotina, acompanhamento e transparência.
          </p>
        </div>

        <div className="space-y-20">
          {projetos.map((projeto, index) => (
            <section
              key={projeto.id}
              id={projeto.id}
              className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} py-12 rounded-lg`}
            >
              <div className="max-w-5xl mx-auto px-6">
                <div className="flex items-start gap-6 mb-8">
                  <div className="text-6xl">{projeto.icone}</div>
                  <div className="flex-1">
                    <h2 className="text-4xl font-bebas mb-4 text-primary">
                      {projeto.titulo}
                    </h2>
                    <p className="text-xl text-gray-700 mb-4 leading-relaxed">
                      {projeto.descricao}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Público atendido</h3>
                    <p className="text-gray-700">{projeto.publico}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Frequência</h3>
                    <p className="text-gray-700">{projeto.frequencia}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
                    <h3 className="text-lg font-semibold mb-2 text-primary">Locais</h3>
                    <p className="text-gray-700">{projeto.locais}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">Objetivos</h3>
                  <ul className="space-y-2 text-gray-700">
                    {projeto.objetivos.map((obj, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 bg-primary text-white p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Resultados percebidos</h3>
                  <p className="text-gray-100">{projeto.resultados}</p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Modalidades e locais gerais */}
        <section className="mt-16 bg-gray-50 py-12 rounded-lg">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bebas mb-6 text-primary">Modalidades e locais de atendimento</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Modalidades atuais</h3>
                <p className="text-gray-700 mb-2">
                  Cerca de 12 a 14 modalidades: futebol de campo, society, futsal, reforço escolar (manhã e tarde), muay thai, capoeira, karatê, judô, pilates, zumba, aula de sertanejo. Eventos: Dia das Crianças, Dia do Pai, Dia da Mãe, final de ano (Caixinhas de Natal).
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Onde estamos</h3>
                <p className="text-gray-700 mb-2">
                  <strong>Unidade principal:</strong> São Paulo, Paraisópolis. Todas as modalidades e projetos.
                </p>
                <p className="text-gray-700">
                  <strong>Unidade Jardim Tapicerica da Serra (Jardim Banca Flor):</strong> cerca de 300 alunos no futebol de campo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-primary text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bebas mb-4">
              QUER CONHECER NOSSOS PROJETOS DE PERTO?
            </h2>
            <p className="text-lg mb-6">
              Entre em contato e venha conhecer nossa atuação na prática.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20conhecer%20os%20projetos%20da%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
