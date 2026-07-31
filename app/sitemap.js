import { posts, sectors, caseStudies, metodoSteps, servizi, businessSuiteModules } from '@/lib/data';
import { regions } from '@/lib/geo-data';

const base = 'https://matteogaruzzo.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/chi-sono',
    '/servizi',
    '/servizi/wine-club',
    '/geo',
    '/settori',
    '/metodo',
    '/software',
    '/software/pricing',
    '/portfolio',
    '/blog',
    '/risorse',
    '/referral',
    '/prenota-call',
    '/contatti',
    '/privacy-policy',
    '/cookie-policy',
    '/termini-e-condizioni',
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const sectorRoutes = sectors.map((s) => ({
    url: `${base}/settori/${s.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((c) => ({
    url: `${base}/portfolio/${c.slug}`,
    lastModified: new Date(),
  }));

  const metodoRoutes = metodoSteps.map((s) => ({
    url: `${base}/metodo/${s.slug}`,
    lastModified: new Date(),
  }));

  const servizioRoutes = servizi.map((s) => ({
    url: `${base}/servizi/${s.slug}`,
    lastModified: new Date(),
  }));

  const softwareRoutes = businessSuiteModules.map((m) => ({
    url: `${base}/software/${m.slug}`,
    lastModified: new Date(),
  }));

  const postRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }));

  const geoRoutes = regions.map((r) => ({
    url: `${base}/geo/${r.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...sectorRoutes,
    ...caseStudyRoutes,
    ...metodoRoutes,
    ...servizioRoutes,
    ...softwareRoutes,
    ...postRoutes,
    ...geoRoutes,
  ];
}
