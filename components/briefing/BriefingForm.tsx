'use client'

import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import BriefingSidebar from './BriefingSidebar'
import BriefingSection0 from './sections/Section0'
import BriefingSection1 from './sections/Section1'
import BriefingSection2 from './sections/Section2'
import BriefingSection3 from './sections/Section3'
import BriefingSection4 from './sections/Section4'
import BriefingSection6 from './sections/Section6'
import BriefingSection8 from './sections/Section8'
import BriefingChat from './BriefingChat'

const TOTAL_SECTIONS = 6

export default function BriefingForm() {
  const [currentSection, setCurrentSection] = useState(0)
  const [savedBlocks, setSavedBlocks] = useState<Record<number, Record<string, string>>>({})
  const [sessionId, setSessionId] = useState<string>('')
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  // Gerar/obter session_id e carregar dados pré-preenchidos
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let id = localStorage.getItem('briefing_session_id')
      if (!id) {
        id = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
        localStorage.setItem('briefing_session_id', id)
      }
      setSessionId(id)

      // Carregar dados pré-preenchidos do bloco 1 (atualizados com respostas dos áudios e textos)
      const preloadedData = {
        inst_name: "ASSOCIAÇÃO PRO PARAÍSO - CNPJ: 24.691.258/0001-40",
        inst_contact: "(11) 98710-3256, (11) 3742-9106",
        inst_email: "associacao.pro.paraiso.2010@gmail.com",
        inst_responsible: "Valquito Soares da Silva (Presidente)",
        inst_nature: "Associação",
        inst_audience: "Comunidade local",
        inst_region: "São Paulo – Paraisópolis (Unidade principal) | Jardim Tapicerica da Serra, Jardim Banca Flor (Unidade secundária)",
        inst_years: "24/09/2015 (11º ano em 2025/2026)",
        name_meaning_message: 'Slogan: "Associação Pró-Paraíso: o bem que fazemos é o paraíso que construímos juntos."\n\nO slogan conecta o nome da organização com o impacto coletivo. Enfatiza que o "paraíso" não é um lugar, mas algo construído através das ações de bem realizadas em conjunto. Reflete a filosofia de trabalho colaborativo e o impacto social que nasce do vínculo e da ação coletiva.',
        values_principles: 'VALORES:\n\nSeriedade, transparência total (tudo filmado, gravado, assinado quando necessário), sinceridade, compromisso com o correto, documentação completa.\n\nSolidariedade como ação (não só conceito), presença, escuta com respeito, construir junto (sem pressa e sem superioridade), dignidade humana, empatia prática, compromisso com impacto no cotidiano.\n\n"É um projeto muito sério, nós gostamos só do certo, não gostamos do errado. Chega alguma coisa errada que nós não aceitamos, então eu trabalho desse jeito. Eu trabalho com tudo sério, com tudo em papel, com tudo sendo registrado em foto, em imagens."\n\n"O nosso projeto é sério, a gente mostra sinceridade, tudo que a gente faz, a gente filma, a gente grava, a gente manda assinar, se for o caso, mas que tudo seja transparente. Não gosto de nada errado, é por isso que nós estamos até hoje na ProParaíso."\n\n"Solidariedade não é só doar. Solidariedade é estar presente, é ouvir com respeito, é construir junto com quem é atendido, sem pressa e sem superioridade."',
        personification: 'CRENÇA CENTRAL:\n\n"Quando a gente se une de verdade, ninguém fica para trás." - Crença central que guia cada decisão.\n\n"Solidariedade não é só doar. Solidariedade é estar presente, é ouvir com respeito, é construir junto com quem é atendido, sem pressa e sem superioridade." - A convicção de que o impacto social nasce do vínculo, não apenas do recurso.\n\n"A recusa em tratar a falta do básico como algo normal" - Incômodo com a normalização da falta que move a organização desde o começo.\n\nEssa crença está no centro de tudo o que fazemos. Ela orienta nosso olhar, nossas escolhas e a forma como acolhemos cada história que cruza nosso caminho.',
        voice_presence: 'TOM DE COMUNICAÇÃO:\n\nTom empático, humanizado, sem superioridade, que valoriza o vínculo e a presença.\n\nMENSAGENS-ÂNCORA:\n\n• "Quando a gente se une de verdade, ninguém fica para trás"\n• "Solidariedade não é só doar. Solidariedade é estar presente"\n• "O impacto social nasce do vínculo, não apenas do recurso"\n• "Levar esperança, cuidado e união a quem mais precisa"\n• "Quando a mesa está vazia e a necessidade é urgente, a solidariedade deixa de ser conceito e vira ação"\n\nNossa voz é acolhedora, próxima e verdadeira. Falamos com o coração aberto, buscando criar conexão, confiança e pertencimento desde o primeiro contato.',
        perceived_identity: 'Quem conhece a Associação Pró-Paraíso deve sentir, antes de tudo, acolhimento. Um acolhimento que não é discurso. É aquele que se percebe no jeito de receber, no cuidado com a palavra, na atenção ao detalhe, e no respeito pela história de cada pessoa.\n\nSomos reconhecidos como um projeto humano, confiável e próximo da comunidade. Caminhamos lado a lado com crianças, jovens, adultos e idosos, e fazemos isso sem pressa de rotular, sem olhar de cima, e sem tratar vulnerabilidade como identidade. Cada realidade é respeitada como ela é.\n\nA Associação Pró-Paraíso é percebida como um lugar de cuidado, união e esperança, onde o amor vira ação e se transforma em oportunidades reais de desenvolvimento. Quem se aproxima sente que existe compromisso com a vida, com as pessoas e com uma transformação construída todos os dias, em pequenos gestos que fazem grande diferença.',
        current_identity_diagnosis: "PALETA DE CORES:\n3 TONS DE AMARELO\n2 TONS DE VERDE\n3 TONS DE AZUL\n\n",
        // MÓDULO EXCLUSIVO: ORIGEM — HISTÓRIA DA ORGANIZAÇÃO
        name_meaning_history: '"Associação Pró-Paraíso: o bem que fazemos é o paraíso que construímos juntos." - Slogan que conecta o nome da organização com o impacto coletivo. Enfatiza que o "paraíso" não é um lugar, mas algo construído através das ações de bem realizadas em conjunto. Reflete a filosofia de trabalho colaborativo e o impacto social que nasce do vínculo e da ação coletiva.',
        founders_motivation: 'Era um sonho de um amigo meu, que ele tinha de construir um projeto social. E um dia eu estou no campo de futebol e ele chegou para mim e falou, você sabia que eu tenho uma ideia legal para a gente fazer um projeto aqui em Paraisópolis? Aí eu falei, mas o quê? Ele falou, eu queria abrir um projeto social, uma associação. Você topa fazer comigo? Eu disse, puta, eu topo. Só que eu topei, fiz, e ele não quis mais saber, aí eu levei para frente a ideia, porque, como não tinha condição, eu disse, não, vou começar.\n\nUm amigo teve a ideia inicial, mas desistiu. Valquito (presidente) gostou da ideia e decidiu levar adiante sozinho. A ideia existia antes, mas foi oficializada em 24/09/2015. Hoje, graças a Deus, nós temos todas as documentações necessárias para um projeto social.',
        first_steps: 'Começou com 50 alunos, apenas futebol de campo (1 modalidade). Início pequeno e focado, mas com muitas dificuldades.\n\nQuando a gente começou, a gente não tinha nem uniforme, não tinha material esportivo, não tinha nada. A gente começou a pedir para a criança trazer o próprio chuteiro, o próprio meião, o próprio calção, a própria camisa para treinar.\n\nComecei com futebol de campo, e vi que era legal, que deu certo, porque eu corri atrás de patrocinadores aqui da própria comunidade, os comerciantes, que eles estão sempre na frente em tudo. Aqui quem me ajuda é os comerciantes. Então, tudo que eu quero, eu corro nos comerciantes. Os comerciantes da comunidade.\n\nSuporte inicial veio dos comerciantes locais. A gente foi vendo que a coisa estava dando certo, que a coisa era séria - então expandiram gradualmente.',
        community_context: 'A Associação Pró-Paraíso nasceu do jeito que as coisas mais verdadeiras nascem. Com pouca estrutura, muita vontade, e um incômodo que não deixava a gente ficar parado. A gente via de perto o que acontece quando uma criança não tem para onde ir, quando um jovem cresce sem referência, e quando uma família atravessa dificuldades sem rede de apoio. E decidiu fazer algo que fosse simples, mas constante. Estar presente.\n\nNo começo, tudo era pequeno. Poucas pessoas, poucos recursos, uma atividade que reunia crianças e adolescentes e criava um lugar seguro para eles estarem. Não era perfeito, mas era real. E, principalmente, era sério. A comunidade percebeu isso cedo. E quando a comunidade confia, ela participa. Ela chama, ela se aproxima, ela apoia.',
        historical_milestones: 'INÍCIO (2015): 50 alunos, 1 modalidade (futebol de campo)\n\nEVOLUÇÃO DE ALUNOS: 50 → 100 → 150 → 200 → 300 → 400 → 500 → 800 → quase 1.000 alunos (atual)\n\nEVOLUÇÃO DE MODALIDADES: 1 → 3 (futebol, futebol de salão, karatê) → 14 modalidades (atual)\n\nPROJETO CAIXINHAS DE NATAL: Criado há 5 anos, crescimento de 50 para quase 400 crianças\n\nEXPANSÃO GEOGRÁFICA: Abertura de unidade secundária em Jardim Tapicerica da Serra, Jardim Banca Flor (300 alunos)\n\nCRESCIMENTO CONTÍNUO: "Cada dia está crescendo mais, cada dia está crescendo mais, porque é um projeto sério, muito sério"',
        programs_evolution: 'CRESCIMENTO EXPONENCIAL: De 50 para quase 1.000 alunos (20x o tamanho inicial)\n\nDIVERSIFICAÇÃO: De 1 para 14 modalidades\n\nEXPANSÃO GEOGRÁFICA: De 1 para 2 unidades\n\nAMPLIAÇÃO DE SERVIÇOS: Além das modalidades esportivas, hoje também entregam cestas básicas, papel de engenharia, distribuem doações recolhidas e realizam eventos comemorativos\n\nEVOLUÇÃO DA IDENTIDADE: "No início, éramos apenas pessoas dispostas a ajudar com o que tinham, tempo, presença, escuta e mãos para trabalhar. Com o tempo, a ideia ganhou corpo. Crescemos porque transformamos intenção em prática, e prática em compromisso." - Evolução de pessoas dispostas a ajudar para organização estruturada\n\nAMADURECIMENTO INTERNO: "O projeto não cresceu só em número. Ele amadureceu por dentro. O que antes era vontade de ajudar, hoje é um caminho mais seguro, mais humano e mais consistente para quem chega até nós com uma história nas costas e uma esperança nas mãos."\n\nMUDANÇA DE OLHAR: "A mudança mais importante não foi uma planilha, um cronograma ou um novo processo. Foi o jeito de olhar para as pessoas. A gente aprendeu que, quando um aluno permanece, ele não está só frequentando aulas. Ele está escolhendo acreditar de novo."',
        challenges_overcome: 'DESAFIO INICIAL:\nQuando a gente começou, a gente não tinha nem uniforme, não tinha material esportivo, não tinha nada. A gente começou a pedir para a criança trazer o próprio chuteiro, o próprio meião, o próprio calção, a própria camisa para treinar.\n\nSOLUÇÃO TEMPORÁRIA: Crianças traziam próprio material.\n\nSUPERAÇÃO: Com o decorrer do tempo, a gente foi pegando mais experiência e foi atrás de patrocinadores na própria comunidade. E, através desses patrocinadores, a gente foi comprando camisas, meiões, calções, ajudando as crianças com chuteira, alguns que não tinham. Hoje, graças a Deus, não precisamos mais. A criança vem pra cá, ele treina, tem o calção, tem o meião, tem o colete, tem o lanche, tem até lanche hoje, através dos patrocínios.\n\nDESAFIO ATUAL:\nA nossa maior dificuldade, você sabe qual é? Todo projeto social tem custo. Só que captar apoio hoje exige um cuidado enorme com a forma de fazer, porque não existe mais espaço para dinheiro passando de mão em mão.\n\nQuando a gente precisa de um material esportivo, por exemplo, a gente faz do jeito mais correto possível. Nós procuramos os colaboradores e as pessoas que acreditam no nosso trabalho, explicamos a necessidade com clareza, e a primeira pergunta que vem é natural. Qual é o orçamento?\n\nEntão a gente faz o orçamento, organiza tudo, envia os contatos, e a própria pessoa que quer ajudar fala direto com o fornecedor e faz a doação. Assim, fica tudo limpo, registrado e transparente. Do jeito que tem que ser.',
        lessons_learned: 'É um projeto muito sério, nós gostamos só do certo, não gostamos do errado. Chega alguma coisa errada que nós não aceitamos, então eu trabalho desse jeito. Eu trabalho com tudo sério, com tudo em papel, com tudo sendo registrado em foto, em imagens. Então, por isso que está dando certo até hoje.\n\nPRINCÍPIOS:\n- Seriedade absoluta\n- Compromisso com o correto\n- Transparência total (tudo documentado em papel, fotos e imagens)\n- Não aceitar nada errado\n\nAPRENDIZADO SOBRE RECURSOS: Com o decorrer do tempo, a gente foi pegando mais experiência e foi atrás de patrocinadores na própria comunidade. - Importância de buscar parcerias locais e crescer gradualmente com apoio da comunidade.\n\nHoje, graças a Deus, nós temos todas as documentações necessárias para um projeto social. Então, graças a Deus, está dando tudo certo e bola para frente agora.',
        symbolic_story: 'HISTÓRIA PRINCIPAL:\nEvolução de 50 para 800 alunos, de 1 para 13 modalidades - "História que começou pequenininha, mas hoje, graças a Deus, já estamos na base de 800 a 1.000 alunos"\n\nPROJETO CAIXINHAS DE NATAL:\nExemplo de inovação e impacto. Projeto que foi "inventado" pela organização, colocado em prática há 5 anos e que deu certo. Criança escreve uma caixinha para o Paraíso pedindo um brinquedo, automaticamente o padrinho dá uma roupa e um sapato. Cresceu de 50 para quase 400 crianças. "Graças a Deus, está dando certo até hoje"',
        timeline_summary: '2015 (24/09/2015 - Fundação oficial): 50 alunos, 1 modalidade (futebol de campo). "Foi aberto mesmo o projeto, com documentação e tudo"\n\nEVOLUÇÃO: 100 → 150 → 300 → 400 → 500 → 800 alunos\n\nATUAL (11º ano): Quase 1.000 alunos, 14 modalidades, 2 unidades\n\nEXPANSÃO: Nova unidade em Jardim Tapicerica da Serra (300 alunos)\n\nCRESCIMENTO: "Cada dia está crescendo mais" - crescimento contínuo e sustentável\n\nDOCUMENTAÇÃO: "Hoje, graças a Deus, nós temos todas as documentações necessárias para um projeto social"',
        key_people_trajectory: 'Graças a Deus, é eu e a dona Fabíola, a Fabíola é minha esposa, então ela está comigo aí nessa temporada aí, e graças a Deus deu certo e a gente está aí.\n\nVALQUITO SOARES DA SILVA (PRESIDENTE) e FABÍOLA (esposa) são as pessoas-chave que mantiveram e mantêm o projeto funcionando. "Graças a Deus deu certo e a gente está aí."',
        original_dreams: 'O nosso sonho é simples de dizer, mas grande de realizar. Transformar vidas, começando pelo básico. Colocar comida na mesa de quem mais precisa.\n\nPorque, quando falta comida, falta paz. Falta energia para trabalhar, para estudar, para cuidar dos filhos, para pensar no amanhã. E quando a comida chega, não é só um prato servido. É um peso que sai do peito. É a dignidade sendo protegida no momento mais difícil.\n\nÉ por isso que a gente insiste. A gente mobiliza, pede apoio, organiza doações e faz acontecer com transparência. Para que nenhuma família precise escolher entre pagar uma conta e comer. Para que nenhuma criança durma com fome.\n\nNo fim, transformar vidas começa assim. Com uma mesa mais cheia e com a certeza de que, dentro de uma comunidade unida, ninguém precisa enfrentar a necessidade sozinho.'
      }

      // Salvar no localStorage para o bloco 1 (sempre atualizar com dados mais recentes)
      const key1 = `briefing_block_1_${id}`
      localStorage.setItem(key1, JSON.stringify(preloadedData))
      localStorage.setItem('briefing_block_1_saved', 'true')
      setSavedBlocks(prev => ({ ...prev, [1]: preloadedData }))
      
      // Carregar dados pré-preenchidos do bloco 3 (Propósito e Impacto Social)
      const preloadedData3 = {
        main_purpose: `O que nos move é a recusa em aceitar que tanta gente viva sem o básico. Por isso, a Associação trabalha para fortalecer vínculos, abrir caminhos e criar oportunidades reais de desenvolvimento, começando pelo que é mais urgente e mais humano.\n\nQuando existe presença, existe transformação. E quando existe comunidade, ninguém precisa atravessar a necessidade sozinho.\n\nExistimos para levar esperança, cuidado e união a quem mais precisa, através de atividades socioeducativas e ações solidárias, para que crianças, jovens e famílias desenvolvam autonomia, pertencimento e futuro.`,
        social_problem: `Falta do básico (comida na mesa), necessidade de socialização e espaço seguro para crianças e jovens. Quando uma criança não tem para onde ir, quando um jovem cresce sem referência, e quando uma família atravessa dificuldades sem rede de apoio.`,
        desired_transformation: `Igualdade de oportunidades, resgatar confiança, fortalecer aprendizado, melhora de comportamento, disciplina, saúde física e bem-estar mental. A rotina melhora. A autoestima volta. A pessoa começa a planejar.`,
        programs_activities: `PROJETO ESPORTE EM AÇÃO:\n- Modalidades: Futebol de campo, futebol de salão, futebol society\n- Público: Crianças e jovens\n- Frequência: Todos os dias\n- Locais: Campo do Palmeirinha, Praça da Cidadania, Arena 5 Estrela\n- Objetivo: Promover socialização e contribuir para tirar crianças da rua, oferecendo espaço seguro, educativo e saudável\n- Resultados: Melhora no comportamento, disciplina, saúde física e bem-estar mental\n\nPROJETO APRENDER PARA CRESCER:\n- Público: Crianças de 6 a 12 anos\n- Local: Associação Pró-Paraíso (unidade principal)\n- Frequência: Segunda a sexta-feira (manhã e tarde)\n- Descrição: Apoio educacional contínuo para fortalecer aprendizado, criar rotina e ajudar cada criança a avançar no seu próprio ritmo\n- Resultados: Fortalecimento do aprendizado e confiança, melhora na compreensão de conteúdos, resgate de autoestima\n\nPROJETO CAIXINHAS DE NATAL:\n- Funcionamento: Criança escreve cartinha pedindo brinquedo, padrinho entrega brinquedo, roupa e sapato\n- Frequência: Anual (final do ano)\n- Crescimento: De 50 para quase 400 crianças em 5 anos\n- Parcerias: Comerciantes da comunidade e padrinhos`,
        pedagogical_methodology: `Solidariedade não é só doar. Solidariedade é estar presente, é ouvir com respeito, é construir junto com quem é atendido, sem pressa e sem superioridade.\n\nO impacto social nasce do vínculo, não apenas do recurso.\n\nMetodologia baseada em presença, escuta respeitosa e construção conjunta. Ensino estruturado com método, começo, meio e continuidade. Acompanhamento humanizado que vê o aluno como pessoa completa.`,
        frequency_schedule: `PROJETO ESPORTE EM AÇÃO:\n- Frequência: Todos os dias\n- Horários: Durante o dia (atividades esportivas)\n\nPROJETO APRENDER PARA CRESCER:\n- Frequência: Segunda a sexta-feira\n- Horários: Manhã e tarde (reforço escolar)\n\nOUTRAS MODALIDADES:\n- Manhã: Reforço escolar\n- Tarde: Reforço escolar\n- Noite: Maitai, capoeira, karatê, judô, pilar, zumba\n- Dia: Atividades esportivas (futebol de campo, futsal, futebol de salão)\n\nEVENTOS ANUAIS:\n- Dia da Criança\n- Dia do Pai\n- Dia da Mãe\n- Final de Ano (Projeto Caixinhas de Natal)`,
        locations_infrastructure: `UNIDADE PRINCIPAL:\n- Localização: São Paulo – Paraisópolis\n- Capacidade: Aproximadamente 500 alunos\n- Atividades: Todas as modalidades e projetos\n\nUNIDADE SECUNDÁRIA:\n- Localização: Jardim Tapicerica da Serra, Jardim Banca Flor\n- Capacidade: 300 alunos\n- Atividades: Futebol de campo\n\nLOCAIS ESPECÍFICOS DO PROJETO ESPORTE EM AÇÃO:\n- Campo do Palmeirinha\n- Praça da Cidadania\n- Arena 5 Estrela\n\nLOCAL DO PROJETO APRENDER PARA CRESCER:\n- Associação Pró-Paraíso (unidade principal)`,
        team_capacity: `Capacidade atual: 800 alunos (base)\nMeta: 1.000 alunos\nUnidade principal: ~500 alunos (estimado)\nUnidade secundária: 300 alunos (Jardim Tapicerica da Serra)\n\nEquipe mais preparada e consciente. Hoje a equipe atua com mais preparo e mais clareza sobre o que funciona, o que não funciona, e o que precisa ser aprimorado.`,
        technical_partnerships: `Comerciantes da comunidade: São os principais apoiadores. Ajudam com projetos e materiais.\n\nPatrocinadores/Colaboradores da comunidade: Fornecem materiais esportivos, uniformes e até lanche.\n\nPadrinhos dos comerciantes: Rede de apoio que viabiliza projetos de grande escala (ex: Caixinhas de Natal).\n\nProcesso transparente: Doador compra diretamente do fornecedor, tudo documentado, filmado, gravado e assinado quando necessário.`,
        impact_narrative: `PROJETO CAIXINHAS DE NATAL:\nAntes: Crianças sem presentes no Natal. Depois: Projeto que começou com 50 crianças e cresceu para quase 400 em 5 anos. Criança escreve cartinha, recebe brinquedo, roupa e sapato. Isso mostra como uma ideia simples, quando bem executada com transparência e seriedade, pode crescer e impactar centenas de vidas.\n\nTRANSFORMAÇÃO REAL:\nAntes: Aluno chegava achando que não era capaz. Depois: Quando ele percebe que consegue aprender, ele começa a acreditar em outras possibilidades também. E isso é um tipo de conquista que atravessa a sala de aula e vai para a vida.`,
        results_evidence: `IMPACTO EM NÚMEROS:\n- A Associação atende, em média, 1.000 pessoas por mês (12.000 atendimentos por ano)\n- Ações solidárias alcançam 500 famílias por mês (6.000 famílias por ano)\n- Projeto esportivo: 300 crianças e jovens por dia (1.500 participações por semana)\n- Projeto Aprender para Crescer: 90 crianças por semana (360 atendimentos por mês)\n- 8 campanhas solidárias no último ano, beneficiando aproximadamente 5.000 famílias\n- 4 eventos comunitários por ano, com média de 5.000 participantes\n\nIMPACTO PERCEBIDO:\n- Mais permanência e vínculo nas atividades\n- Melhora de comportamento e disciplina\n- Fortalecimento do aprendizado e confiança\n- Rede de apoio em momentos críticos\n- Integração comunitária\n\nCRESCIMENTO:\n- De 50 para quase 1.000 alunos (20x o tamanho inicial)\n- De 1 para 14 modalidades\n- De 1 para 2 unidades\n- Projeto Caixinhas de Natal: De 50 para quase 400 crianças em 5 anos`,
        success_definition: `Sucesso é ver alunos evoluindo e mudando a forma como se enxergam. É reconstruir a confiança e a autoestima. É criar sentimento de pertencimento. É construir vínculos duradouros. É medir transformações concretas no cotidiano: a rotina melhora, a autoestima volta, a pessoa começa a planejar.`,
        learnings_improvements: `AULAS MAIS ESTRUTURADAS:\nHoje o ensino tem método, começo, meio e continuidade. As aulas são mais bem organizadas, os conteúdos fazem sentido em sequência, e a metodologia ficou clara para quem ensina e para quem aprende.\n\nACOMPANHAMENTO MAIS HUMANO:\nA gente parou de olhar só para presença e desempenho. Passamos a olhar cada aluno de forma mais completa. As dificuldades deixaram de ser um problema a ser corrigido e passaram a ser um ponto de partida para ensinar melhor.\n\nMAIS ENGAJAMENTO E PERMANÊNCIA:\nO aluno entra e permanece com mais frequência, porque encontra rotina, acolhimento e um ambiente que faz sentido. O projeto deixou de ser só uma atividade. Ele virou um lugar.`,
        purpose_oneliner: `Existimos para fortalecer vínculos, abrir caminhos e criar oportunidades reais de desenvolvimento para crianças, jovens e famílias em vulnerabilidade, através de atividades socioeducativas e ações solidárias, para que desenvolvam autonomia, pertencimento e futuro.`
      }
      
      // Salvar no localStorage para o bloco 3
      const key3 = `briefing_block_3_${id}`
      localStorage.setItem(key3, JSON.stringify(preloadedData3))
      localStorage.setItem('briefing_block_3_saved', 'true')
      setSavedBlocks(prev => ({ ...prev, [3]: preloadedData3 }))
      
      // Carregar dados pré-preenchidos do bloco 2 (Estrutura e Experiência Digital)
      const preloadedData2 = {
        site_strategic_function: `Para a Associação Pró-Paraíso, o papel principal do site deveria ser gerar confiança rápida e transformar essa confiança em ação. Na prática, isso vira um ecossistema com quatro funções, em ordem de prioridade:\n\n1. INFORMAR COM TRANSPARÊNCIA\nO site precisa explicar, em poucos minutos, quem vocês são, o que fazem, onde atuam, com que frequência, e quais resultados já entregam. Essa é a base de credibilidade. Sem isso, a pessoa não doa, não indica e não vira parceira.\n\n2. INSPIRAR COM REALIDADE, NÃO COM PROMESSA\nA inspiração aqui não é discurso. É mostrar o impacto que dá para sentir. Criança que permanece, jovem que muda comportamento, família que atravessa uma fase difícil com apoio. Histórias curtas, com contexto e prova de execução, criam conexão sem exagero.\n\n3. ARRECADAR DO JEITO CERTO\nO site deve facilitar doações e parcerias com clareza. O que a pessoa pode ajudar agora, como ajudar, e como a Associação presta contas. A transparência que vocês já praticam precisa estar traduzida em uma jornada simples.\n\n4. MOBILIZAR E CONECTAR A COMUNIDADE\nAlém de captar, o site pode funcionar como ponto de encontro. Canal de WhatsApp, agenda de campanhas, chamada para voluntariado, e um espaço para comerciantes e parceiros entenderem como apoiar com segurança.\n\nUMA FRASE PARA COLOCAR NO BRIEFING:\nO site da Associação Pró-Paraíso deve ser um ecossistema de propósito que transforma transparência em confiança, e confiança em participação.`,
        essential_structure: `A Home apresenta propósito, prova de seriedade e o caminho rápido para apoiar.\n\nA página Impacto mostra números, rotina, e histórias curtas com evidência.\n\nA página Como ajudar converte, com opções simples e rastreáveis.\n\nA página Transparência reforça prestação de contas e método de captação sem dinheiro em mão.`
      }
      
      // Salvar no localStorage para o bloco 2
      const key2 = `briefing_block_2_${id}`
      localStorage.setItem(key2, JSON.stringify(preloadedData2))
      localStorage.setItem('briefing_block_2_saved', 'true')
      setSavedBlocks(prev => ({ ...prev, [2]: preloadedData2 }))
      
      // Forçar atualização dos campos do formulário após um pequeno delay
      setTimeout(() => {
        Object.keys(preloadedData).forEach(fieldName => {
          const input = document.querySelector(`[name="${fieldName}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          if (input) {
            input.value = preloadedData[fieldName as keyof typeof preloadedData]
            // Disparar evento para garantir que React detecte a mudança
            input.dispatchEvent(new Event('input', { bubbles: true }))
            input.dispatchEvent(new Event('change', { bubbles: true }))
          }
        })
        
        // Preencher campos do bloco 2
        Object.keys(preloadedData2).forEach(fieldName => {
          const input = document.querySelector(`[name="${fieldName}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          if (input) {
            input.value = preloadedData2[fieldName as keyof typeof preloadedData2]
            input.dispatchEvent(new Event('input', { bubbles: true }))
            input.dispatchEvent(new Event('change', { bubbles: true }))
          }
        })
        
        // Preencher campos do bloco 3
        Object.keys(preloadedData3).forEach(fieldName => {
          const input = document.querySelector(`[name="${fieldName}"]`) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
          if (input) {
            input.value = preloadedData3[fieldName as keyof typeof preloadedData3]
            input.dispatchEvent(new Event('input', { bubbles: true }))
            input.dispatchEvent(new Event('change', { bubbles: true }))
          }
        })
      }, 100)
    }
  }, [])

  // Restaurar dados salvos ao mudar de seção
  useEffect(() => {
    if (currentSection >= 1 && currentSection <= TOTAL_SECTIONS && sessionId) {
      // Mapeamento: bloco 5 (novo) = bloco 6 (antigo), bloco 6 (novo) = bloco 8 (antigo)
      let key = `briefing_block_${currentSection}_${sessionId}`
      let saved = localStorage.getItem(key)
      
      // Migração: se não encontrar no novo número, buscar no antigo
      if (!saved && currentSection === 5) {
        const oldKey = `briefing_block_6_${sessionId}`
        saved = localStorage.getItem(oldKey)
        if (saved) {
          // Migrar dados do bloco 6 antigo para o bloco 5 novo
          localStorage.setItem(key, saved)
        }
      }
      
      if (!saved && currentSection === 6) {
        const oldKey = `briefing_block_8_${sessionId}`
        saved = localStorage.getItem(oldKey)
        if (saved) {
          // Migrar dados do bloco 8 antigo para o bloco 6 novo
          localStorage.setItem(key, saved)
        }
      }
      
      if (saved) {
        try {
          const data = JSON.parse(saved)
          setSavedBlocks(prev => ({ ...prev, [currentSection]: data }))
        } catch (e) {
          console.error('Erro ao restaurar dados:', e)
        }
      }
    }
  }, [currentSection, sessionId])

  const navigateToSection = (sectionNumber: number) => {
    // Blocos válidos: 0, 1, 2, 3, 4, 5, 6
    const validSections = [0, 1, 2, 3, 4, 5, 6]
    if (validSections.includes(sectionNumber)) {
      setCurrentSection(sectionNumber)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const saveBlock = async (blockNumber: number) => {
    if (!formRef.current || !sessionId) return

    const formData = new FormData(formRef.current)
    const blockData: Record<string, string> = {}

    // Coletar dados do bloco atual
    const sectionElement = document.querySelector(`.section[data-section="${blockNumber}"]`)
    if (sectionElement) {
      const inputs = sectionElement.querySelectorAll('input, textarea, select')
      inputs.forEach((input) => {
        const htmlInput = input as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        if (htmlInput.name && htmlInput.value) {
          blockData[htmlInput.name] = htmlInput.value
        }
      })
    }

    // Salvar no localStorage
    const key = `briefing_block_${blockNumber}_${sessionId}`
    localStorage.setItem(key, JSON.stringify(blockData))
    localStorage.setItem(`briefing_block_${blockNumber}_saved`, 'true')
    setSavedBlocks(prev => ({ ...prev, [blockNumber]: blockData }))

    // Enviar para o servidor
    const submitData = new FormData()
    submitData.append('save_type', 'block')
    submitData.append('block_number', blockNumber.toString())
    submitData.append('session_id', sessionId)
    
    Object.keys(blockData).forEach(key => {
      submitData.append(key, blockData[key])
    })

    try {
      const response = await fetch('/api/briefing/submit', {
        method: 'POST',
        body: submitData
      })
      const data = await response.json()
      
      if (data.success) {
        showMessage(`✅ Bloco ${blockNumber} salvo com sucesso! Você pode continuar preenchendo os outros blocos.`, 'success')
      } else {
        showMessage('Erro ao salvar bloco. Tente novamente.', 'error')
      }
    } catch (error) {
      console.error('Erro:', error)
      showMessage('Erro ao salvar bloco. Tente novamente.', 'error')
    }
  }

  const submitForm = async () => {
    if (!formRef.current || !sessionId) return

    const formData = new FormData(formRef.current)
    
    // Buscar todos os blocos salvos (blocos válidos: 1, 2, 3, 4, 5, 6)
    // Mapear blocos antigos para novos: 6 -> 5, 8 -> 6
    const allData: Record<string, string> = {}
    const blockMapping: Record<number, number> = {
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5, // Antigo 6 (Captação)
      6: 6  // Antigo 8 (Arquitetura)
    }
    
    // Buscar blocos novos (5 e 6)
    for (let i = 1; i <= 6; i++) {
      const key = `briefing_block_${i}_${sessionId}`
      const saved = localStorage.getItem(key)
      if (saved) {
        try {
          const data = JSON.parse(saved)
          Object.assign(allData, data)
        } catch (e) {
          console.error('Erro ao ler bloco salvo:', e)
        }
      }
    }
    
    // Migrar dados dos blocos antigos (6 -> 5, 8 -> 6) se existirem
    const oldBlock6 = localStorage.getItem(`briefing_block_6_${sessionId}`)
    if (oldBlock6 && !localStorage.getItem(`briefing_block_5_${sessionId}`)) {
      localStorage.setItem(`briefing_block_5_${sessionId}`, oldBlock6)
      try {
        const data = JSON.parse(oldBlock6)
        Object.assign(allData, data)
      } catch (e) {
        console.error('Erro ao migrar bloco 6:', e)
      }
    }
    
    const oldBlock8 = localStorage.getItem(`briefing_block_8_${sessionId}`)
    if (oldBlock8 && !localStorage.getItem(`briefing_block_6_${sessionId}`)) {
      localStorage.setItem(`briefing_block_6_${sessionId}`, oldBlock8)
      try {
        const data = JSON.parse(oldBlock8)
        Object.assign(allData, data)
      } catch (e) {
        console.error('Erro ao migrar bloco 8:', e)
      }
    }

    // Adicionar dados do formulário atual
    formData.forEach((value, key) => {
      if (value && !allData[key]) {
        allData[key] = value.toString()
      }
    })

    // Adicionar identificadores
    const submitData = new FormData()
    submitData.append('save_type', 'complete')
    submitData.append('session_id', sessionId)
    
    Object.keys(allData).forEach(key => {
      submitData.append(key, allData[key])
    })

    try {
      const response = await fetch('/api/briefing/submit', {
        method: 'POST',
        body: submitData
      })
      const data = await response.json()
      
      if (data.success) {
        router.push('/briefing/success')
      } else {
        showMessage('Erro ao enviar formulário. Tente novamente.', 'error')
      }
    } catch (error) {
      console.error('Erro:', error)
      showMessage('Erro ao enviar formulário. Tente novamente.', 'error')
    }
  }

  const showMessage = (message: string, type: 'success' | 'error') => {
    const messagesDiv = document.getElementById('messages')
    if (messagesDiv) {
      const bgColor = type === 'success' ? '#d4edda' : '#f8d7da'
      const textColor = type === 'success' ? '#155724' : '#721c24'
      const borderColor = type === 'success' ? '#c3e6cb' : '#f5c6cb'
      
      messagesDiv.innerHTML = `<div style="background: ${bgColor}; color: ${textColor}; padding: 15px; border-radius: 20px; margin-bottom: 20px; border: 1px solid ${borderColor};">${message}</div>`
      messagesDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      
      setTimeout(() => {
        messagesDiv.innerHTML = ''
      }, 5000)
    }
  }

  const handleNext = () => {
    // Sequência de blocos: 0, 1, 2, 3, 4, 5, 6
    const nextSectionMap: Record<number, number> = {
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
      5: 6
    }
    const nextSection = nextSectionMap[currentSection]
    if (nextSection !== undefined) {
      navigateToSection(nextSection)
    }
  }

  const handlePrev = () => {
    // Sequência de blocos: 0, 1, 2, 3, 4, 5, 6
    const prevSectionMap: Record<number, number> = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5
    }
    const prevSection = prevSectionMap[currentSection]
    if (prevSection !== undefined) {
      navigateToSection(prevSection)
    }
  }

  const handleSaveBlock = () => {
    const validBlocks = [1, 2, 3, 4, 5, 6]
    if (validBlocks.includes(currentSection)) {
      saveBlock(currentSection)
    }
  }

  const handleSendBlock = async () => {
    const validBlocks = [1, 2, 3, 4, 5, 6]
    if (validBlocks.includes(currentSection)) {
      if (!confirm(`Deseja enviar o BLOCO ${currentSection} por email agora?`)) {
        return
      }
      await saveBlock(currentSection)
    }
  }

  return (
    <div className="briefing-container">
      {/* Círculos desfocados nas laterais */}
      <div className="blur-circle-left"></div>
      <div className="blur-circle-right"></div>
      <div className="blur-circle-center"></div>
      
      <div className="main-layout">
        <BriefingSidebar 
          currentSection={currentSection}
          totalSections={TOTAL_SECTIONS}
          onNavigate={navigateToSection}
        />
        
        <main className="main-content">
          <div className="form-container">
            <form id="briefing-form" ref={formRef} action="/api/briefing/submit" method="POST">
              {/* Seção 0: Introdução */}
              <div className={`section ${currentSection === 0 ? 'active' : ''}`} data-section="0">
                <BriefingSection0 />
              </div>

              {/* Seção 1: Identidade */}
              <div className={`section ${currentSection === 1 ? 'active' : ''}`} data-section="1">
                <BriefingSection1 savedData={savedBlocks[1]} />
              </div>

              {/* Seção 2: Estrutura */}
              <div className={`section ${currentSection === 2 ? 'active' : ''}`} data-section="2">
                <BriefingSection2 savedData={savedBlocks[2]} />
              </div>

              {/* Seção 3: Propósito */}
              <div className={`section ${currentSection === 3 ? 'active' : ''}`} data-section="3">
                <BriefingSection3 savedData={savedBlocks[3]} />
              </div>

              {/* Seção 4: Públicos */}
              <div className={`section ${currentSection === 4 ? 'active' : ''}`} data-section="4">
                <BriefingSection4 savedData={savedBlocks[4]} />
              </div>

              {/* Seção 5: Captação */}
              <div className={`section ${currentSection === 5 ? 'active' : ''}`} data-section="5">
                <BriefingSection6 savedData={savedBlocks[5]} />
              </div>

              {/* Seção 6: Arquitetura */}
              <div className={`section ${currentSection === 6 ? 'active' : ''}`} data-section="6">
                <BriefingSection8 savedData={savedBlocks[6]} />
              </div>

              <div id="messages"></div>

              <div className="navigation">
                <button 
                  type="button" 
                  onClick={handlePrev}
                  className="nav-button" 
                  disabled={currentSection === 0}
                >
                  ← Anterior
                </button>
                <div className="section-counter">
                  <span id="current-section">
                    {currentSection === 0 ? 'Introdução' : currentSection}
                  </span>
                  {currentSection > 0 && <span id="total-sections"> de {TOTAL_SECTIONS}</span>}
                </div>
                {currentSection !== 6 ? (
                  <button type="button" onClick={handleNext} className="nav-button">
                    Próximo →
                  </button>
                ) : (
                  <button type="submit" onClick={(e) => { e.preventDefault(); submitForm(); }} className="nav-button">
                    Enviar Formulário Completo
                  </button>
                )}
                {currentSection >= 1 && currentSection !== 6 && (
                  <>
                    <button 
                      type="button" 
                      onClick={handleSaveBlock}
                      className="nav-button" 
                      style={{ background: '#10b981', color: 'white' }}
                    >
                      💾 Salvar este bloco
                    </button>
                    <button 
                      type="button" 
                      onClick={handleSendBlock}
                      className="nav-button" 
                      style={{ background: '#0037FE', color: 'white' }}
                    >
                      📧 Enviar por email
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>
        </main>
      </div>
      
      {/* Chat flutuante com assistente */}
      <BriefingChat 
        currentSection={currentSection}
        savedData={savedBlocks[currentSection]}
      />
    </div>
  )
}
