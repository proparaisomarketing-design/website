'use client'

export default function Section5() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>✅ ETAPA 5 — AUTORIZAÇÕES E ENVIO</h2>
      </div>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>📸</div>
          <h2>Autorizações</h2>
        </header>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', border: '1px solid #E5E5E5', borderRadius: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="autorizaImagem" value="true" style={{ marginTop: '4px' }} />
            <span>
              <strong>Autorizo o uso de imagem</strong>
              <div style={{ fontSize: '14px', color: '#525560', marginTop: '2px' }}>
                Autorizo que fotos e vídeos da criança/jovem sejam usados em materiais institucionais, redes sociais e site da Associação Pró-Paraíso, sem fins comerciais.
              </div>
            </span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', border: '1px solid #E5E5E5', borderRadius: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="cienteRegulamento" value="true" required style={{ marginTop: '4px' }} />
            <span>
              <strong>Estou ciente do regulamento *</strong>
              <div style={{ fontSize: '14px', color: '#525560', marginTop: '2px' }}>
                Confirmo que li e concordo com as regras de participação da Associação Pró-Paraíso. A equipe entrará em contato com mais detalhes após a pré-inscrição.
              </div>
            </span>
          </label>
        </div>
      </section>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>💬</div>
          <h2>Para finalizar</h2>
        </header>

        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="comoConheceu">Como conheceu a Associação Pró-Paraíso?</label>
            <select id="comoConheceu" name="comoConheceu">
              <option value="">Selecione...</option>
              <option value="indicacao">Indicação de amigo/família</option>
              <option value="redes_sociais">Redes sociais</option>
              <option value="escola">Escola</option>
              <option value="comunidade">Comunidade / vizinhança</option>
              <option value="site">Site</option>
              <option value="outro">Outro</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="observacoes">Observações (opcional):</label>
            <textarea id="observacoes" name="observacoes" rows={3} placeholder="Algo que gostaria de contar sobre a criança/jovem, a família ou dúvidas..."></textarea>
          </div>
        </div>
      </section>
    </>
  )
}
