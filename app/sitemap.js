import { posts, sectors } from '@/lib/data';

const base = 'https://www.matteogaruzzo.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/chi-sono',
    '/servizi',
    '/software',
    '/settori',
    '/portfolio',
    '/blog',
    '/risorse',
    '/prenota-call',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const sectorRoutes = sectors.map((s) => ({
    url: `${base}/settori/${s.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  return [...staticRoutes, ...sectorRoutes, ...postRoutes];
}
