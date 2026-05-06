import Link from 'next/link'

export default function InscricaoSucesso() {
  return (
    <div className="bg-ngo-cream min-h-screen section-padding">
      <div className="container-custom">
        <div className="max-w-xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-card border border-ngo-border text-center">
          <div className="w-20 h-20 rounded-full bg-ngo-green flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-bebas text-4xl md:text-5xl tracking-wide text-ngo-text mb-4 leading-none">
            Pré-inscrição enviada!
          </h1>
          <p className="text-ngo-text-muted text-lg leading-relaxed mb-8">
            Recebemos os dados da família. Nossa equipe vai analisar e entrar em contato em breve
            pelo telefone ou WhatsApp informados para os próximos passos.
          </p>

          <div className="bg-ngo-yellow-light rounded-xl p-5 text-left mb-8">
            <h2 className="font-bebas text-xl tracking-wide text-ngo-text mb-2">Próximos passos</h2>
            <ul className="text-sm text-ngo-text-muted space-y-1 list-disc list-inside">
              <li>Análise dos dados pela equipe</li>
              <li>Contato para confirmar vaga e horários</li>
              <li>Visita à unidade para começar as atividades</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center bg-ngo-orange text-white font-semibold px-6 py-3 rounded-full hover:bg-secondary-dark transition"
            >
              Voltar ao início
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá,%20acabei%20de%20fazer%20a%20pré-inscrição%20e%20queria%20confirmar%20os%20próximos%20passos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ngo-yellow text-ngo-text font-medium px-6 py-3 rounded-full hover:bg-ngo-yellow/90 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
