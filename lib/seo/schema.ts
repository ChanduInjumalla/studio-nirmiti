/**
 * Studio Nirmiti — SEO Structured Data Utilities
 * 
 * Only outputs verified schema values.
 * Does NOT invent business details beyond what is confirmed.
 */

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Studio Nirmiti',
    url: 'https://studionirmiti.com',
    telephone: '+919573023509',
    description:
      'Architecture and interior design studio offering design, execution and 3D visualization services.',
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Studio Nirmiti',
    url: 'https://studionirmiti.com',
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url?: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url } : {}),
    })),
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    provider: {
      '@type': 'Organization',
      name: 'Studio Nirmiti',
    },
    description: service.description,
    url: service.url,
  };
}

export function getArticleSchema(article: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    ...(article.dateModified ? { dateModified: article.dateModified } : {}),
    ...(article.image ? { image: article.image } : {}),
    publisher: {
      '@type': 'Organization',
      name: 'Studio Nirmiti',
    },
  };
}

export function getCreativeWorkSchema(project: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    url: project.url,
    ...(project.image ? { image: project.image } : {}),
    creator: {
      '@type': 'Organization',
      name: 'Studio Nirmiti',
    },
  };
}
