// =====================================================================
//  CONTENUTI DEL SITO — modifica QUI testi, prezzi, progetti, articoli.
//  Non serve toccare il codice delle pagine.
//
//  I dati vivono sotto content/, divisi per dominio (vedi
//  docs/agria/05-infrastruttura.md). Questo file resta il solo punto di
//  accesso per gli import esistenti (`@/lib/data`): ri-esporta tutto con
//  gli stessi nomi, senza cambiare nessun valore.
// =====================================================================

export { site } from '@/content/site';
export { servizi, getServizio } from '@/content/servizi';
export { sectors, getSector } from '@/content/settori';
export { softwareCustom, softwareOngoing } from '@/content/software';
export { caseStudies, techRationale, getCaseStudy } from '@/content/portfolio';
export { team } from '@/content/team';
export {
  posts,
  getPost,
  slugifyTag,
  getAllTags,
  getPostsByTagSlug,
} from '@/content/blog';
export { metodoSteps, getMetodoStep } from '@/content/metodo';
export { heroStats, referenceNumbers } from '@/content/numbers';
export { problemPoints, forWho, notForWho } from '@/content/home';
export { testimonials } from '@/content/testimonials';
export { faqs } from '@/content/faqs';
export { whyMG, sectorPageContent } from '@/content/settori-pagine';
