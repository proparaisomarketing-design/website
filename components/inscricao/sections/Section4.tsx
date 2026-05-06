'use client'

export default function Section4() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>🩺 ETAPA 4 — SAÚDE E EMERGÊNCIA</h2>
      </div>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>💊</div>
          <h2>Informações de saúde</h2>
        </header>

        <p style={{ margin: '10px 0 20px', color: '#525560' }}>
          Essas informações ajudam a equipe a cuidar melhor da criança/jovem nas atividades. Deixe em branco se não houver.
        </p>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="alergias">Alergias:</label>
            <textarea id="alergias" name="alergias" rows={2} placeholder="Ex: alergia a amendoim, poeira..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="medicamentos">Medicamentos de uso contínuo:</label>
            <textarea id="medicamentos" name="medicamentos" rows={2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="restricoesMedicas">Restrições médicas (esporte, atividade física):</label>
            <textarea id="restricoesMedicas" name="restricoesMedicas" rows={2}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="condicoesEspeciais">Condições especiais ou necessidades:</label>
            <textarea id="condicoesEspeciais" name="condicoesEspeciais" rows={2} placeholder="Ex: autismo, deficiência auditiva..."></textarea>
          </div>
        </div>
      </section>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>🚨</div>
          <h2>Contato de emergência</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="emergenciaNome">Nome:</label>
            <input id="emergenciaNome" name="emergenciaNome" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="emergenciaTelefone">Telefone:</label>
            <input id="emergenciaTelefone" name="emergenciaTelefone" type="tel" placeholder="(11) 00000-0000" />
          </div>

          <div className="form-group">
            <label htmlFor="emergenciaParentesco">Parentesco:</label>
            <input id="emergenciaParentesco" name="emergenciaParentesco" type="text" />
          </div>
        </div>
      </section>
    </>
  )
}
