import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Converter FormData para objeto
    const data: Record<string, string> = {}
    formData.forEach((value, key) => {
      data[key] = value.toString()
    })

    const saveType = data.save_type || 'complete'
    const blockNumber = parseInt(data.block_number || '0')
    const sessionId = data.session_id || 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)

    // Configurações de email
    const toEmail = 'contato@associacaoproparaiso.org.br'
    const fromEmail = `noreply@${request.headers.get('host') || 'associacaoproparaiso.org.br'}`

    // Criar diretório para backups se não existir
    const backupDir = path.join(process.cwd(), 'briefing_backups')
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true })
    }

    if (saveType === 'block') {
      // SALVAMENTO POR BLOCO
      const subject = `Formulário de Briefing - Bloco ${blockNumber} - Associação Pro-Paraíso`
      
      // Criar corpo do email para o bloco
      let emailBody = `FORMULÁRIO DE BRIEFING - BLOCO ${blockNumber}\n`
      emailBody += `===============================================\n\n`
      emailBody += `Sessão: ${sessionId}\n`
      emailBody += `Data: ${new Date().toLocaleString('pt-BR')}\n`
      emailBody += `Bloco: ${blockNumber} de 8\n\n`
      
      // Adicionar campos do bloco (remover campos de controle)
      const controlFields = ['save_type', 'block_number', 'session_id']
      Object.keys(data).forEach(key => {
        if (!controlFields.includes(key) && data[key] && data[key].trim()) {
          const fieldName = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
          emailBody += `${fieldName}:\n`
          emailBody += `${data[key]}\n\n`
        }
      })
      
      // Salvar backup do bloco
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const backupFile = path.join(backupDir, `bloco_${blockNumber}_${timestamp}_${sessionId}.txt`)
      fs.writeFileSync(backupFile, emailBody, 'utf-8')
      
      // Salvar também em formato JSON
      const jsonFile = path.join(backupDir, `bloco_${blockNumber}_${sessionId}.json`)
      fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), 'utf-8')
      
      return NextResponse.json({
        success: true,
        message: `Bloco ${blockNumber} salvo com sucesso!`,
        session_id: sessionId,
        block_number: blockNumber
      })
      
    } else {
      // ENVIO COMPLETO
      const subject = 'Formulário de Briefing - COMPLETO - Associação Pro-Paraíso'
      
      // Criar corpo do email completo
      let emailBody = 'FORMULÁRIO DE BRIEFING - ASSOCIAÇÃO PRO-PARAÍSO\n'
      emailBody += '===============================================\n\n'
      emailBody += `Sessão: ${sessionId}\n`
      emailBody += `Data: ${new Date().toLocaleString('pt-BR')}\n`
      emailBody += 'Status: Formulário Completo\n\n'
      
      // Mapear campos para nomes legíveis
      const fieldNames: Record<string, string> = {
        'name_meaning': 'Nome e Significado',
        'origin_story': 'História de Origem',
        'values_principles': 'Valores e Princípios',
        'public_perception': 'Percepção Desejada',
        'main_purpose': 'Propósito Principal',
        'desired_transformation': 'Transformação Desejada',
        'target_audience': 'Públicos Atendidos',
        'achievements': 'Resultados Alcançados',
        'main_activities': 'Atividades Principais',
        'special_projects': 'Projetos Especiais',
        'partnerships': 'Parcerias e Colaborações',
        'daily_operation': 'Cronograma e Funcionamento',
        'digital_presence': 'Presença Digital Atual',
        'existing_materials': 'Materiais Existentes',
        'visual_identity': 'Identidade Visual',
        'communication_tone': 'Tom de Comunicação',
        'essential_pages': 'Páginas Essenciais',
        'specific_features': 'Funcionalidades Especiais',
        'content_management': 'Gestão de Conteúdo',
        'target_priority': 'Público Prioritário',
        'reference_sites': 'Sites de Referência',
        'desired_feeling': 'Sensação Desejada',
        'visual_elements': 'Elementos Visuais',
        'additional_ideas': 'Ideias Adicionais'
      }
      
      // Adicionar cada campo preenchido
      const controlFields = ['save_type', 'block_number', 'session_id', 'timestamp']
      Object.keys(data).forEach(key => {
        if (!controlFields.includes(key) && data[key] && data[key].trim()) {
          const fieldName = fieldNames[key] || key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
          emailBody += `${fieldName}:\n`
          emailBody += `${data[key]}\n\n`
        }
      })
      
      // Salvar backup completo
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
      const backupFile = path.join(backupDir, `completo_${timestamp}_${sessionId}.txt`)
      fs.writeFileSync(backupFile, emailBody, 'utf-8')
      
      // Salvar também em formato JSON
      const jsonFile = path.join(backupDir, `completo_${sessionId}.json`)
      fs.writeFileSync(jsonFile, JSON.stringify(data, null, 2), 'utf-8')
      
      return NextResponse.json({
        success: true,
        message: 'Formulário enviado com sucesso!',
        session_id: sessionId
      })
    }
  } catch (error) {
    console.error('Erro ao processar formulário:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao processar formulário' },
      { status: 500 }
    )
  }
}
