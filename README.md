# Associação Pró-Paraíso - Website & App

Site institucional e Progressive Web App (PWA) da Associação Pró-Paraíso desenvolvido com Next.js e Tailwind CSS.

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **React 18** - Biblioteca UI
- **PWA (Progressive Web App)** - Funciona como app instalável no celular

## 📦 Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse o site em: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── app/                    # Páginas e rotas (App Router)
│   ├── page.tsx           # Página Home
│   ├── quem-somos/        # Página Quem Somos
│   ├── projetos/          # Página Projetos
│   ├── impacto/           # Página Impacto
│   ├── como-apoiar/       # Página Como Apoiar
│   ├── contato/           # Página Contato
│   ├── layout.tsx         # Layout principal
│   └── globals.css         # Estilos globais
├── components/             # Componentes reutilizáveis
│   ├── Header.tsx          # Cabeçalho
│   └── Footer.tsx         # Rodapé
└── public/                 # Arquivos estáticos
```

## 🎨 Páginas

- **Home** (`/`) - Apresentação da associação e projetos principais
- **Quem Somos** (`/quem-somos`) - História, valores e atuação
- **Projetos** (`/projetos`) - Descrição dos projetos desenvolvidos
- **Impacto** (`/impacto`) - Transformações e resultados
- **Como Apoiar** (`/como-apoiar`) - Formas de participação
- **Contato** (`/contato`) - Informações de contato

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter

## 📱 PWA - Progressive Web App

Este site também funciona como um aplicativo instalável no celular!

### Como Instalar

**Android/Chrome:**
1. Abra o site no navegador Chrome
2. Um banner aparecerá oferecendo para instalar o app
3. Toque em "Instalar" ou "Adicionar à tela inicial"

**iOS/Safari:**
1. Abra o site no Safari
2. Toque no botão de compartilhar (ícone de quadrado com seta)
3. Selecione "Adicionar à Tela de Início"
4. Confirme a instalação

### Funcionalidades do App

- ✅ Funciona offline (cache de páginas)
- ✅ Ícone na tela inicial
- ✅ Abre em tela cheia (sem barra do navegador)
- ✅ Carregamento rápido
- ✅ Experiência similar a app nativo

### Gerar Ícones

Para gerar os ícones do app, você precisa criar imagens PNG nos tamanhos:
- 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512 pixels

Salve na pasta `public/icons/` com os nomes correspondentes (ex: `icon-192x192.png`).

Veja `scripts/generate-icons.md` para mais detalhes.

## 📝 Próximos Passos

- [ ] Adicionar ícones reais do app (substituir placeholders)
- [ ] Adicionar imagens reais dos projetos
- [ ] Implementar formulário de contato
- [ ] Adicionar galeria de fotos
- [ ] Integrar com CMS (opcional)
- [ ] Otimizar SEO

## 📧 Contato

Associação Pró-Paraíso
- WhatsApp: (11) 98710-3256
- Telefone: (11) 3742-9106
- E-mail: associacao.pro.paraiso.2010@gmail.com
- Localização: Paraisópolis, São Paulo - SP
