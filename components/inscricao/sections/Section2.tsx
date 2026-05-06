'use client'

export default function Section2() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>👨‍👩‍👧 ETAPA 2 — RESPONSÁVEL</h2>
      </div>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>📇</div>
          <h2>Dados do responsável</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="responsavelNome"><span className="num">1.</span> Nome completo:</label>
            <input id="responsavelNome" name="responsavelNome" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="responsavelParentesco"><span className="num">2.</span> Parentesco:</label>
            <select id="responsavelParentesco" name="responsavelParentesco" required>
              <option value="">Selecione...</option>
              <option value="mae">Mãe</option>
              <option value="pai">Pai</option>
              <option value="avo">Avó / Avô</option>
              <option value="tio">Tio / Tia</option>
              <option value="tutor">Tutor legal</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="responsavelCpf"><span className="num">3.</span> CPF:</label>
            <input id="responsavelCpf" name="responsavelCpf" type="text" placeholder="000.000.000-00" required />
          </div>

          <div className="form-group">
            <label htmlFor="responsavelTelefone"><span className="num">4.</span> Telefone:</label>
            <input id="responsavelTelefone" name="responsavelTelefone" type="tel" placeholder="(11) 00000-0000" required />
          </div>

          <div className="form-group">
            <label htmlFor="responsavelWhatsapp"><span className="num">5.</span> WhatsApp (se diferente):</label>
            <input id="responsavelWhatsapp" name="responsavelWhatsapp" type="tel" placeholder="(11) 00000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="responsavelEmail"><span className="num">6.</span> E-mail (opcional):</label>
            <input id="responsavelEmail" name="responsavelEmail" type="email" />
          </div>
        </div>
      </section>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>🏠</div>
          <h2>Endereço</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="enderecoCep"><span className="num">7.</span> CEP:</label>
            <input id="enderecoCep" name="enderecoCep" type="text" placeholder="00000-000" />
          </div>

          <div className="form-group">
            <label htmlFor="enderecoRua"><span className="num">8.</span> Rua:</label>
            <input id="enderecoRua" name="enderecoRua" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="enderecoNumero"><span className="num">9.</span> Número:</label>
            <input id="enderecoNumero" name="enderecoNumero" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="enderecoComplemento"><span className="num">10.</span> Complemento:</label>
            <input id="enderecoComplemento" name="enderecoComplemento" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="enderecoBairro"><span className="num">11.</span> Bairro:</label>
            <input id="enderecoBairro" name="enderecoBairro" type="text" placeholder="Paraisópolis" />
          </div>

          <div className="form-group">
            <label htmlFor="enderecoCidade"><span className="num">12.</span> Cidade:</label>
            <input id="enderecoCidade" name="enderecoCidade" type="text" placeholder="São Paulo" />
          </div>
        </div>
      </section>
    </>
  )
}
