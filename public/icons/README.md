# Ícones do App

Esta pasta deve conter os ícones do Progressive Web App (PWA) nos seguintes tamanhos:

## Arquivos Necessários

- `icon-72x72.png` - 72x72 pixels
- `icon-96x96.png` - 96x96 pixels  
- `icon-128x128.png` - 128x128 pixels
- `icon-144x144.png` - 144x144 pixels
- `icon-152x152.png` - 152x152 pixels (iOS)
- `icon-192x192.png` - 192x192 pixels
- `icon-384x384.png` - 384x384 pixels
- `icon-512x512.png` - 512x512 pixels

## Como Criar os Ícones

### Opção 1: Ferramentas Online

1. **RealFaviconGenerator**: https://realfavicongenerator.net/
   - Faça upload de uma imagem 512x512px
   - Configure as opções
   - Baixe os ícones gerados

2. **PWA Builder**: https://www.pwabuilder.com/imageGenerator
   - Gere automaticamente todos os tamanhos

3. **Favicon.io**: https://favicon.io/
   - Crie ícones a partir de texto ou imagem

### Opção 2: Editor de Imagens

1. Crie uma imagem base 512x512px com o logo da associação
2. Use um editor (Photoshop, GIMP, Canva) para redimensionar para cada tamanho
3. Exporte como PNG com fundo transparente ou sólido

### Opção 3: Usar o SVG Base

Um arquivo `icon.svg` está disponível nesta pasta. Você pode:
- Converter para PNG usando ferramentas online
- Usar um conversor SVG para PNG
- Usar o Inkscape ou outro editor vetorial

## Especificações

- **Formato**: PNG
- **Fundo**: Transparente ou sólido (recomendado: azul #0037FE)
- **Forma**: Quadrada (mesma largura e altura)
- **Qualidade**: Alta resolução, sem compressão excessiva

## Nota Importante

O PWA funcionará mesmo sem todos os ícones, mas para a melhor experiência:
- ✅ Todos os tamanhos devem estar presentes
- ✅ Ícones devem ter boa qualidade
- ✅ Cores devem contrastar bem com fundos claros/escuros

## Ícone Temporário

Por enquanto, você pode usar o `icon.svg` como referência. Quando tiver o logo oficial da Associação Pró-Paraíso, substitua todos os arquivos PNG.
