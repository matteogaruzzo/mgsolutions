import { posts, sectors, caseStudies, metodoSteps, servizi, businessSuiteModules } from '@/lib/data';

const base = 'https://www.matteogaruzzo.com';

export default function sitemap() {
  const staticRoutes = [
    '',
    '/chi-sono',
    '/servizi',
    '/settori',
    '/metodo',
    '/software',
    '/software/pricing',
    '/portfolio',
    '/blog',
    '/risorse',
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

  return [
    ...staticRoutes,
    ...sectorRoutes,
    ...caseStudyRoutes,
    ...metodoRoutes,
    ...servizioRoutes,
    ...softwareRoutes,
    ...postRoutes,
  ];
}
