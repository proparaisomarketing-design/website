# Pasta de Imagens

Esta pasta é destinada para armazenar todas as imagens do site da Associação Pró-Paraíso.

## Estrutura Sugerida

Você pode organizar as imagens em subpastas:

- `projetos/` - Imagens dos projetos (Esporte em Ação, Aprender para Crescer, etc.)
- `equipe/` - Fotos da equipe e voluntários
- `eventos/` - Fotos de eventos e atividades
- `galeria/` - Galeria geral de fotos
- `logos/` - Logos e identidade visual
- `banners/` - Banners e imagens promocionais

## Formatos Recomendados

- **WebP** - Melhor compressão e qualidade
- **JPG/JPEG** - Para fotos
- **PNG** - Para imagens com transparência
- **SVG** - Para ícones e gráficos vetoriais

## Tamanhos Sugeridos

- **Hero/Banner**: 1920x1080px ou maior
- **Cards de Projetos**: 800x600px
- **Galeria**: 1200x800px
- **Thumbnails**: 400x300px

## Otimização

Antes de fazer upload, otimize as imagens para web:
- Comprima as imagens para reduzir o tamanho do arquivo
- Use ferramentas como TinyPNG, ImageOptim ou Squoosh
- Mantenha o tamanho do arquivo abaixo de 500KB quando possível

## Como adicionar fotos aos projetos

1. Coloque o arquivo em `public/images/projetos/` com um nome claro:
   - `esporte-1.jpg`, `esporte-2.jpg`, ...
   - `aprender-1.jpg`, `aprender-2.jpg`, ...
   - `caixinhas-1.jpg`, ...
   - `solidariedade-1.jpg`, ...
2. Abra `app/projetos/page.tsx`, ache o projeto desejado e adicione (ou amplie) o array `imagens`:

   ```ts
   imagens: [
     '/images/projetos/esporte-1.jpg',
     '/images/projetos/esporte-2.jpg',
   ],
   ```

3. A galeria aparece automaticamente em 1, 2 ou 3+ colunas conforme a quantidade.

Para trocar a foto que aparece no card de um projeto na home, edite `app/page.tsx` na seção "Projetos - 3 cards sobre fundo laranja" e ajuste o campo `image` para um caminho local em `/images/projetos/...`.
