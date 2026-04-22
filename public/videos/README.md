# Pasta de Vídeos

Esta pasta é destinada para armazenar todos os vídeos do site da Associação Pró-Paraíso.

## Estrutura Sugerida

Você pode organizar os vídeos em subpastas:

- `projetos/` - Vídeos dos projetos em ação
- `depoimentos/` - Vídeos de depoimentos de beneficiários, famílias, voluntários
- `eventos/` - Vídeos de eventos e atividades
- `institucional/` - Vídeos institucionais e de apresentação
- `tutoriais/` - Vídeos educativos ou tutoriais

## Formatos Recomendados

- **MP4** - Formato mais compatível (use H.264 codec)
- **WebM** - Alternativa moderna com boa compressão
- **OGV** - Formato open source

## Especificações Técnicas

### Para Web:
- **Resolução**: 1080p (1920x1080) ou 720p (1280x720)
- **Codec**: H.264 (MP4) para máxima compatibilidade
- **Bitrate**: 2-5 Mbps para 1080p, 1-2 Mbps para 720p
- **Duração**: Mantenha vídeos curtos (30s - 2min) para melhor performance

### Para Background/Header:
- **Resolução**: 1920x1080px
- **Duração**: 15-30 segundos em loop
- **Tamanho**: Tente manter abaixo de 5MB

## Hospedagem Externa (Recomendado)

Para vídeos maiores, considere usar:
- **YouTube** - Gratuito, fácil de incorporar
- **Vimeo** - Melhor qualidade, mais controle
- **Cloudflare Stream** - Performance otimizada
- **AWS S3 + CloudFront** - Para controle total

## Uso no Next.js

Para usar vídeos nesta pasta:

```tsx
// Vídeo local
<video controls>
  <source src="/videos/projetos/video.mp4" type="video/mp4" />
</video>

// Ou usando next/image para otimização
import Image from 'next/image'
```

## Nota Importante

Vídeos grandes podem impactar a performance do site. Considere:
- Usar lazy loading
- Fornecer poster/thumbnail
- Oferecer opção de reprodução (não autoplay)
- Usar hospedagem externa para vídeos longos
