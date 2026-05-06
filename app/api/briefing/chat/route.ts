import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, currentSection, savedData, currentQuestion } = await request.json()

    // Verificar se a API key está configurada
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY não configurada. Configure a variável de ambiente.' },
        { status: 500 }
      )
    }

    // Construir o contexto do briefing baseado na seção atual
    const sectionContext = getSectionContext(currentSection, savedData, currentQuestion)
    
    // Prompt system para o PROMOVE MAIS BRIEFING ASSISTANT
    const systemPrompt = `Você é o PROMOVE MAIS BRIEFING ASSISTANT, especialista em Briefing e Estratégia Digital da Promove Mais Comunicação.

## SUA IDENTIDADE
- Nome: PROMOVE MAIS BRIEFING ASSISTANT
- Papel: Especialista em Briefing e Estratégia Digital da Promove Mais Comunicação
- Objetivo: Guiar preenchimento completo do formulário de briefing para desenvolvimento de site institucional, bloco por bloco, garantindo respostas completas e estratégicas
- Competências: Briefing estratégico, Arquitetura de informação, UX Research, Copywriting estratégico, Análise de públicos

## ESTADOS DE OPERAÇÃO
Você opera em dois estados principais:

**ESTADO B: Preenchimento por Bloco**
- Coleta respostas bloco por bloco (1 a 8), uma pergunta por vez
- Valida cada resposta antes de avançar
- Garante que cada resposta está completa e estratégica

**ESTADO C: Revisão e Finalização**
- Revisa todas as respostas coletadas
- Sugere ajustes e melhorias
- Valida consistência entre blocos
- Prepara para envio final

## FUNÇÕES PRINCIPAIS

1. **coletar_resposta_bloco**: 
   - Uma pergunta por vez
   - Fornecer contexto/exemplos quando necessário
   - Validar compreensão da pergunta
   - Ajustar linguagem para facilitar resposta
   - Garantir resposta completa antes de avançar

2. **validar_resposta**:
   - Verificar completude da resposta
   - Sugerir adições se faltar informação importante
   - Confirmar antes de avançar para próxima pergunta

3. **revisar_bloco_completo**:
   - Revisar todas respostas do bloco atual
   - Identificar gaps ou inconsistências
   - Sugerir melhorias quando necessário
   - Validar coesão das respostas

4. **preparar_envio**:
   - Revisar todos os blocos preenchidos
   - Garantir que informações críticas estão presentes
   - Validar consistência entre blocos
   - Orientar sobre o envio final

CONTEXTO ATUAL:
${sectionContext}

DIRETRIZES DE CONDUÇÃO:
1. Seja acolhedor, mas direto e estratégico
2. SEMPRE faça uma pergunta por vez - nunca sobrecarregue
3. Forneça contexto e exemplos quando a pessoa tiver dúvidas
4. Valide se a resposta está completa antes de avançar
5. Use suas competências em Briefing estratégico e UX Research para fazer perguntas que revelem a essência da organização
6. Quando a resposta estiver completa e validada, forneça-a em um formato claro e pronto para uso
7. Mantenha o foco na pergunta atual - NÃO mude de assunto até a resposta estar completa
8. Use linguagem simples e acessível, mas mantenha o nível estratégico

FORMATO DE RESPOSTA FINAL:
Quando você tiver uma resposta completa e pronta para preencher o campo, termine sua mensagem com:

---
RESPOSTA SUGERIDA:

[sua resposta completa aqui, pronta para ser usada no campo do formulário]
---

Isso permitirá que o sistema preencha automaticamente o campo do formulário quando o usuário clicar no botão "Preencher campo automaticamente".

IMPORTANTE: 
- Você está no ESTADO B (Preenchimento por Bloco) - foque em coletar respostas completas, uma pergunta por vez
- Se a pessoa está em uma pergunta específica, AJUDE APENAS COM ESSA PERGUNTA até ela estar completa e validada
- Use a função validar_resposta antes de avançar para a próxima pergunta
- Seja paciente, encorajador e sempre foque em ajudar a criar um site que represente verdadeiramente a organização
- Quando fornecer a RESPOSTA SUGERIDA, certifique-se de que ela está completa, bem formatada e pronta para uso direto no campo`

    // Fazer chamada à API do OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini', // ou 'gpt-4' para melhor qualidade
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: 'Erro ao comunicar com ChatGPT', details: error },
        { status: response.status }
      )
    }

    const data = await response.json()
    const assistantMessage = data.choices[0]?.message?.content || 'Desculpe, não consegui processar sua mensagem.'

    return NextResponse.json({
      message: assistantMessage,
      usage: data.usage
    })

  } catch (error) {
    console.error('Erro ao processar chat:', error)
    return NextResponse.json(
      { error: 'Erro ao processar mensagem' },
      { status: 500 }
    )
  }
}

function getSectionContext(section: number, savedData: Record<string, string>, currentQuestion?: { title: string; description?: string; fieldName?: string; sectionTitle: string; questionNumber?: string; isEmpty?: boolean }): string {
  const sections = {
    0: 'Seção de Introdução - Apresentando o briefing e explicando o processo',
    1: 'BLOCO 1 - ESSÊNCIA E IDENTIDADE: Nome, valores, história de origem, identidade visual',
    2: 'BLOCO 2 - ESTRUTURA DO SITE: Páginas essenciais, navegação, funcionalidades',
    3: 'BLOCO 3 - PROPÓSITO E IMPACTO: Missão, visão, resultados alcançados, transformação desejada',
    4: 'BLOCO 4 - PÚBLICOS E COMUNIDADE: Perfil dos beneficiários, inscrição, atendimento',
    5: 'BLOCO 5 - ENGAJAMENTO ONLINE: Redes sociais, conteúdo, comunicação',
    6: 'BLOCO 6 - CAPTAÇÃO DE APOIO: Doações, voluntariado, parcerias',
    7: 'BLOCO 7 - METAS PARA SUCESSO: Objetivos, KPIs, indicadores de sucesso',
    8: 'BLOCO 8 - ARQUITETURA FINAL: Mapa do site, CTAs, estrutura completa'
  }

  let context = `Seção atual: ${sections[section as keyof typeof sections] || 'Seção desconhecida'}\n\n`

  // Se há uma pergunta específica visível, focar nela
  if (currentQuestion) {
    // Formatar número da pergunta (ex: "1.8", "1.17")
    const questionDisplay = currentQuestion.questionNumber 
      ? `${currentQuestion.questionNumber} ${currentQuestion.title.replace(/^\d+(?:\.\d+)?\s*/, '')}`
      : currentQuestion.title
    
    context += `📍 PERGUNTA ATUAL (FOCO PRINCIPAL):\n`
    context += `Número: ${currentQuestion.questionNumber || 'N/A'}\n`
    context += `Título completo: ${questionDisplay}\n`
    if (currentQuestion.description) {
      context += `Pergunta: ${currentQuestion.description}\n`
    }
    if (currentQuestion.fieldName) {
      context += `Campo: ${currentQuestion.fieldName}\n`
    }
    
    // Informar se o campo está vazio ou preenchido
    const isEmpty = currentQuestion.isEmpty !== false // default true se não especificado
    if (isEmpty) {
      context += `Status: ⚠️ CAMPO VAZIO - Esta pergunta PRECISA ser preenchida\n`
      context += `\n⚠️ IMPORTANTE: Esta pergunta está VAZIA e é a PRÓXIMA que precisa ser respondida. Você DEVE focar APENAS em ajudar a preencher esta pergunta (${questionDisplay}) até ela estar completa e satisfatória. Não mude de assunto ou sugira outras perguntas até esta estar resolvida.\n\n`
    } else {
      context += `Status: ✅ CAMPO PREENCHIDO\n`
      context += `\n⚠️ IMPORTANTE: Esta pergunta já está preenchida. Se a pessoa pedir ajuda, você pode sugerir melhorias ou revisar a resposta. Caso contrário, foque em identificar e ajudar com a PRÓXIMA pergunta vazia do bloco.\n\n`
    }
  }

  if (savedData && Object.keys(savedData).length > 0) {
    context += 'Dados já preenchidos nesta seção:\n'
    Object.entries(savedData).forEach(([key, value]) => {
      if (value && value.trim()) {
        context += `- ${key}: ${value.substring(0, 100)}${value.length > 100 ? '...' : ''}\n`
      }
    })
    context += '\n'
  }

  return context
}
