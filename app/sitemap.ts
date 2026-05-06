import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://associacaoproparaiso.org.br'
  const lastModified = new Date()

  const routes: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/quem-somos', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/projetos', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/impacto', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/como-apoiar', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/contato', priority: 0.7, changeFrequency: 'monthly' },
  ]

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
