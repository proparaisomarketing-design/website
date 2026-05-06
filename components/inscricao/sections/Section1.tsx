'use client'

export default function Section1() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>👧 ETAPA 1 — DADOS DA CRIANÇA/JOVEM</h2>
      </div>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>📋</div>
          <h2>Informações pessoais</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="criancaNome"><span className="num">1.</span> Nome completo:</label>
            <input id="criancaNome" name="criancaNome" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="criancaNascimento"><span className="num">2.</span> Data de nascimento:</label>
            <input id="criancaNascimento" name="criancaNascimento" type="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="criancaSexo"><span className="num">3.</span> Sexo:</label>
            <select id="criancaSexo" name="criancaSexo">
              <option value="">Selecione...</option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="outro">Outro / Prefiro não informar</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="criancaCpf"><span className="num">4.</span> CPF (opcional):</label>
            <input id="criancaCpf" name="criancaCpf" type="text" placeholder="000.000.000-00" />
          </div>

          <div className="form-group">
            <label htmlFor="criancaRg"><span className="num">5.</span> RG (opcional):</label>
            <input id="criancaRg" name="criancaRg" type="text" />
          </div>
        </div>
      </section>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>🎒</div>
          <h2>Escola</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="criancaEscola"><span className="num">6.</span> Nome da escola:</label>
            <input id="criancaEscola" name="criancaEscola" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="criancaSerie"><span className="num">7.</span> Série / ano:</label>
            <input id="criancaSerie" name="criancaSerie" type="text" placeholder="Ex: 5º ano" />
          </div>

          <div className="form-group">
            <label htmlFor="criancaPeriodo"><span className="num">8.</span> Período escolar:</label>
            <select id="criancaPeriodo" name="criancaPeriodo">
              <option value="">Selecione...</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="integral">Integral</option>
            </select>
          </div>
        </div>
      </section>
    </>
  )
}
