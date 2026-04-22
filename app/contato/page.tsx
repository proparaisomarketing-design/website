export default function Contato() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bebas mb-6 text-primary">
            CONTATO
          </h1>
          <p className="text-xl text-gray-600">
            Estamos sempre abertos para conversar. Entre em contato conosco!
          </p>
        </div>

        {/* Mensagem de Acolhimento */}
        <section className="mb-16">
          <div className="max-w-3xl mx-auto bg-primary text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bebas mb-4">
              SEJA BEM-VINDO(A)!
            </h2>
            <p className="text-lg leading-relaxed">
              Estamos aqui para acolher você. Seja para conhecer nossos projetos, oferecer apoio, 
              fazer uma visita ou simplesmente conversar, nossa equipe está pronta para te receber 
              com carinho e atenção. Não hesite em entrar em contato - sua presença faz toda a diferença!
            </p>
          </div>
        </section>

        {/* Informações de Contato */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* WhatsApp */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bebas mb-4 text-primary">
                WhatsApp
              </h3>
              <p className="text-gray-600 mb-6">
                Fale conosco diretamente pelo WhatsApp. Estamos sempre disponíveis!
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-primary font-semibold hover:underline"
                >
                  (11) 98710-3256
                </a>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                Abrir WhatsApp
              </a>
            </div>

            {/* Telefone */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bebas mb-4 text-primary">
                Telefone
              </h3>
              <p className="text-gray-600 mb-6">
                Ligue para nós durante o horário de funcionamento.
              </p>
              <div className="space-y-3 mb-6">
                <a
                  href="tel:+5511987103256"
                  className="block text-primary font-semibold hover:underline"
                >
                  (11) 98710-3256
                </a>
                <a
                  href="tel:+551137429106"
                  className="block text-primary font-semibold hover:underline"
                >
                  (11) 3742-9106
                </a>
              </div>
            </div>

            {/* E-mail */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bebas mb-4 text-primary">
                E-mail
              </h3>
              <p className="text-gray-600 mb-6">
                Envie-nos uma mensagem por e-mail.
              </p>
              <a
                href="mailto:associacao.pro.paraiso.2010@gmail.com"
                className="text-primary font-semibold hover:underline break-all"
              >
                associacao.pro.paraiso.2010@gmail.com
              </a>
            </div>

            {/* Localização */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-2xl font-bebas mb-4 text-primary">
                Localização
              </h3>
              <p className="text-gray-600 mb-6">
                Venha nos visitar pessoalmente!
              </p>
              <p className="text-gray-700 font-semibold">
                Paraisópolis<br />
                São Paulo - SP
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Entre em contato para agendar uma visita
              </p>
            </div>
          </div>
        </section>

        {/* Horário de Funcionamento */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bebas mb-4 text-primary">
              Horário de Funcionamento
            </h3>
            <p className="text-gray-700">
              Entre em contato para conhecer nossos horários de atendimento e agendar uma visita.
            </p>
          </div>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bebas mb-4 text-primary">
              ESTAMOS ESPERANDO SEU CONTATO!
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Não importa a forma, o importante é você se sentir acolhido(a). 
              Escolha o canal que preferir e vamos conversar!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Associação%20Pró-Paraíso"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Falar no WhatsApp Agora
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
