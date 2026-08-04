import { posts, sectors, caseStudies, metodoSteps, servizi, businessSuiteModules, getAllTags } from '@/lib/data';
import { regions } from '@/lib/geo-data';

const base = 'https://matteogaruzzo.com';

export default function sitemap() {
  const home = [{ url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 }];

  const coreRoutes = ['/servizi', '/software', '/software/pricing', '/portfolio', '/blog', '/settori'].map(
    (path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 })
  );

  const secondaryRoutes = ['/chi-sono', '/servizi/wine-club', '/metodo', '/geo'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const utilityRoutes = ['/risorse', '/referral', '/prenota-call', '/contatti'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const legalRoutes = ['/privacy-policy', '/cookie-policy', '/termini-e-condizioni'].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.2,
  }));

  const sectorRoutes = sectors.map((s) => ({
    url: `${base}/settori/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${base}/portfolio/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const metodoRoutes = metodoSteps.map((s) => ({
    url: `${base}/metodo/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const servizioRoutes = servizi.map((s) => ({
    url: `${base}/servizi/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const softwareRoutes = businessSuiteModules.map((m) => ({
    url: `${base}/software/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.date),
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const geoRoutes = regions.map((r) => ({
    url: `${base}/geo/${r.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const tagRoutes = getAllTags().map((t) => ({
    url: `${base}/blog/tag/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.3,
  }));

  return [
    ...home,
    ...coreRoutes,
    ...secondaryRoutes,
    ...utilityRoutes,
    ...legalRoutes,
    ...sectorRoutes,
    ...caseStudyRoutes,
    ...metodoRoutes,
    ...servizioRoutes,
    ...softwareRoutes,
    ...postRoutes,
    ...geoRoutes,
    ...tagRoutes,
  ];
}
