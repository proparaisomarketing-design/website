import Link from 'next/link'

export default function PreCadastroSuccess() {
  return (
    <div className="bg-ngo-cream min-h-screen">
      <section className="section-padding">
        <div className="container-custom max-w-2xl">
          <div className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-ngo-green/10 flex items-center justify-center mb-6">
              <svg
                className="w-10 h-10 text-ngo-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-ngo-text mb-4 font-sans">
              Pré-cadastro enviado!
            </h1>
            <p className="text-ngo-text-muted text-lg leading-relaxed mb-8">
              Recebemos seus dados. Nossa equipe entra em contato pelo WhatsApp
              em até <strong>2 dias úteis</strong> para confirmar a vaga e combinar
              a apresentação na unidade.
            </p>

            <div className="bg-ngo-yellow-light rounded-xl p-5 text-left mb-8">
              <h3 className="font-bebas text-xl text-ngo-text tracking-wide mb-2">
                Enquanto isso
              </h3>
              <ul className="text-ngo-text-muted text-sm leading-relaxed space-y-2">
                <li>• Separe um documento da criança (RG ou certidão de nascimento)</li>
                <li>• Tenha em mãos um comprovante de residência recente</li>
                <li>• Se possível, traga um responsável na apresentação</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center bg-white text-ngo-text font-medium px-6 py-3 rounded border border-ngo-border hover:bg-ngo-cream transition"
              >
                Voltar ao site
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=5511987103256&text=Olá!%20Acabei%20de%20fazer%20o%20pré-cadastro%20no%20site."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ngo-green text-white font-semibold px-6 py-3 rounded hover:bg-ngo-green/90 transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path d="M17.5 14c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2.1-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.2 4.5 1.9.8 2.7.9 3.6.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4z M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.3c1.4.8 3.1 1.3 4.8 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.2.8.8-3.1-.2-.3C3.7 14.7 3.3 13.4 3.3 12c0-4.8 3.9-8.7 8.7-8.7s8.7 3.9 8.7 8.7-3.9 8.7-8.7 8.7z" />
                </svg>
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
