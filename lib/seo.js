// =====================================================================
//  SEO/GEO helper — usato da ogni pagina per generare in modo coerente
//  title, description, keywords, canonical, Open Graph, Twitter Card e
//  structured data (JSON-LD). Non duplicare questo boilerplate nelle
//  singole pagine: passare solo title/description/path/keywords qui.
// =====================================================================

import { site } from '@/lib/data';

export const SITE_URL = 'https://matteogaruzzo.com';
export const OG_IMAGE = '/images/matteo/og-image.png';

// title NON include già "· MG Solutions": ci pensa il template definito
// in app/layout.jsx per il tag <title>. openGraph/twitter non ereditano
// quel template, quindi qui il suffisso lo aggiungiamo esplicitamente.
export function pageMetadata({ title, description, path, keywords, type = 'website', publishedTime, image }) {
  const socialTitle = `${title} · ${site.name}`;
  const ogImage = image || OG_IMAGE;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description,
      url: path,
      siteName: site.name,
      locale: 'it_IT',
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [ogImage],
    },
  };
}

export function webPageSchema({ title, description, path }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_URL}${path}`,
    inLanguage: 'it-IT',
  };
}

// Per pagine servizi (singole o wine-club): identifica l'offerta come Service,
// distinto dalla WebPage che la descrive.
export function serviceSchema({ name, description, path, areaServed = 'IT' }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${path}`,
    areaServed,
    provider: {
      '@type': 'Organization',
      name: site.name,
      url: SITE_URL,
    },
  };
}

// plans: [{ name, description, price, url }] — usato in /software/pricing per
// esporre i tre piani come OfferCatalog collegato al prodotto MG Business Suite.
export function productSchema({ name, description, path, plans }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url: `${SITE_URL}${path}`,
    brand: { '@type': 'Brand', name: site.name },
    offers: plans.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      url: `${SITE_URL}${path}`,
      priceCurrency: 'EUR',
      price: String(p.price),
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(p.price),
        priceCurrency: 'EUR',
        billingDuration: 'P1M',
      },
    })),
  };
}

// items: [{ name, path }] dalla home fino alla pagina corrente (in ordine).
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// faqs: [{ q, a }] — stesso shape già usato da FAQAccordion.
export function faqPageSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

// steps: [{ title, body }] — utile per processi/percorsi in N passaggi
// (aiuta i motori generativi a citare la procedura passo-passo).
export function howToSchema({ name, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.body,
    })),
  };
}
