# Pasta Public - Arquivos Estáticos

Esta pasta contém todos os arquivos estáticos do site que são servidos diretamente pelo Next.js.

## 📁 Estrutura de Pastas

```
public/
├── images/          # Imagens do site
│   ├── projetos/    # Fotos dos projetos
│   ├── equipe/      # Fotos da equipe
│   ├── eventos/     # Fotos de eventos
│   ├── galeria/     # Galeria geral
│   ├── logos/       # Logos e identidade visual
│   └── banners/     # Banners promocionais
│
├── videos/          # Vídeos do site
│   ├── projetos/    # Vídeos dos projetos
│   ├── depoimentos/ # Vídeos de depoimentos
│   ├── eventos/     # Vídeos de eventos
│   └── institucional/ # Vídeos institucionais
│
├── icons/           # Ícones do PWA
├── manifest.json    # Manifest do PWA
└── robots.txt       # Configuração de SEO
```

## 📝 Como Usar

### Imagens

Para usar imagens no Next.js:

```tsx
// Importação estática
import Image from 'next/image'
import fotoProjeto from '@/public/images/projetos/foto.jpg'

<Image src={fotoProjeto} alt="Descrição" />

// Ou caminho direto
<Image src="/images/projetos/foto.jpg" alt="Descrição" width={800} height={600} />
```

### Vídeos

Para usar vídeos:

```tsx
<video controls>
  <source src="/videos/projetos/video.mp4" type="video/mp4" />
  Seu navegador não suporta vídeos.
</video>
```

## ⚠️ Importante

- **Tamanho dos arquivos**: Mantenha arquivos otimizados para web
- **Nomes de arquivos**: Use nomes descritivos e sem espaços (use hífens ou underscores)
- **Organização**: Mantenha os arquivos organizados nas subpastas apropriadas
- **Versionamento**: Arquivos grandes podem ser ignorados pelo Git (configure `.gitignore` se necessário)

## 🔗 URLs

Arquivos nesta pasta são acessíveis via:
- `http://localhost:3000/images/...` (desenvolvimento)
- `https://proparaiso.org/images/...` (produção)
