'use client'

export default function Section3() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>⚽ ETAPA 3 — PROJETOS DESEJADOS</h2>
      </div>

      <section className="question-card">
        <header className="question-header">
          <div className="question-icon" aria-hidden>🎯</div>
          <h2>Em quais projetos você quer inscrever a criança/jovem?</h2>
        </header>

        <p style={{ margin: '10px 0 20px', color: '#525560' }}>
          Pode marcar mais de uma opção.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid #E5E5E5', borderRadius: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="projeto_esporte" value="esporte" style={{ marginTop: '4px' }} />
            <div>
              <strong>⚽ Esporte em Ação</strong>
              <div style={{ fontSize: '14px', color: '#525560', marginTop: '2px' }}>
                Futebol de campo, futsal e society. Todos os dias.
              </div>
            </div>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid #E5E5E5', borderRadius: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="projeto_aprender" value="aprender" style={{ marginTop: '4px' }} />
            <div>
              <strong>📚 Aprender para Crescer</strong>
              <div style={{ fontSize: '14px', color: '#525560', marginTop: '2px' }}>
                Reforço escolar para crianças de 6 a 12 anos. Segunda a sexta, manhã e tarde.
              </div>
            </div>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px', border: '1px solid #E5E5E5', borderRadius: '10px', cursor: 'pointer' }}>
            <input type="checkbox" name="projeto_outras" value="outras_modalidades" style={{ marginTop: '4px' }} />
            <div>
              <strong>🥋 Outras modalidades</strong>
              <div style={{ fontSize: '14px', color: '#525560', marginTop: '2px' }}>
                Muay thai, capoeira, karatê, judô, pilates, zumba, entre outras.
              </div>
            </div>
          </label>
        </div>

        <div className="form-grid" style={{ marginTop: '24px' }}>
          <div className="form-group">
            <label htmlFor="modalidades">Qual(is) modalidade(s) específicas de interesse? (se aplicável)</label>
            <textarea id="modalidades" name="modalidades" rows={3} placeholder="Ex: futebol de campo, muay thai..."></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="disponibilidade">Qual o melhor período para participar?</label>
            <select id="disponibilidade" name="disponibilidade">
              <option value="">Selecione...</option>
              <option value="manha">Manhã</option>
              <option value="tarde">Tarde</option>
              <option value="noite">Noite</option>
              <option value="fim_de_semana">Fim de semana</option>
              <option value="qualquer">Qualquer período</option>
            </select>
          </div>
        </div>
      </section>
    </>
  )
}
