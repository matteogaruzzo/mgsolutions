import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import { regions, getRegionBySlug } from '@/lib/geo-data';
import { servizi, caseStudies, site } from '@/lib/data';
import { ScreenIcon, CartIcon, GearIcon, CompassIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, breadcrumbSchema, faqPageSchema } from '@/lib/seo';

const heroImageBySlug = {
  'frantoi-san-lorenzo': '/images/sectors/olio-hero.png',
  'podere-la-vite': '/images/sectors/hospitality-hero.png',
  'tenuta-monteverdi': '/images/sectors/wine-hero.png',
  'azienda-rossi': '/images/sectors/wine-hero.png',
};

export function generateStaticParams() {
  return regions.map((r) => ({ regione: r.slug }));
}

export function generateMetadata({ params }) {
  const region = getRegionBySlug(params.regione);
  if (!region) return {};
  return pageMetadata({
    title: `Soluzioni Digitali per l’Agroalimentare in ${region.name}`,
    description: `Siti web, e-commerce e software per cantine, oleifici e agriturismi in ${region.name}. Da ${region.capoluogo} a tutta la regione. Consulenza gratuita.`,
    path: `/geo/${region.slug}`,
    keywords: [
      `siti web cantine ${region.name}`,
      `software agriturismi ${region.name}`,
      `e-commerce agroalimentare ${region.name}`,
      `consulenza digitale ${region.capoluogo}`,
    ],
  });
}

export default function RegionePage({ params }) {
  const region = getRegionBySlug(params.regione);
  if (!region) notFound();

  const PAGE = {
    title: `Soluzioni Digitali per l’Agroalimentare in ${region.name}`,
    description: `Siti web, e-commerce e software per cantine, oleifici e agriturismi in ${region.name}.`,
    path: `/geo/${region.slug}`,
  };

  const caseStudy = caseStudies.find((c) => c.slug === region.caseStudySlug);
  const heroImage = heroImageBySlug[region.caseStudySlug] || '/images/sectors/wine-hero.png';

  const cards = [
    (() => {
      const s = servizi.find((x) => x.slug === 'siti-web-contatti');
      return { Icon: ScreenIcon, title: `Siti web per cantine, oleifici e agriturismi`, body: s.body, price: 'A partire da €2.500', href: `/servizi/${s.slug}` };
    })(),
    (() => {
      const s = servizi.find((x) => x.slug === 'ecommerce-shopify');
      return { Icon: CartIcon, title: 'E-commerce Shopify', body: s.body, price: 'A partire da €4.500', href: `/servizi/${s.slug}` };
    })(),
    {
      Icon: GearIcon,
      title: 'Software di automazione (MG Business Suite)',
      body: 'CRM per i contatti commerciali, booking automatico per degustazioni ed esperienze, email automation per follow-up e wine club.',
      price: 'Canone €199-€649/mese',
      href: '/software',
    },
    (() => {
      const s = servizi.find((x) => x.slug === 'consulenza-strategica');
      return { Icon: CompassIcon, title: s.title, body: s.body, price: 'Preventivo personalizzato', href: `/servizi/${s.slug}` };
    })(),
  ];

  const faqs = [
    {
      q: 'Lavorate solo con cantine? Che dire di frantoi e agriturismi?',
      a: `No, lavoriamo con tutta l’agroalimentare di ${region.name}: cantine, oleifici, agriturismi, ristorazione rurale. Ogni settore ha esigenze diverse — le conosciamo.`,
    },
    {
      q: `Quanto costa un sito o un e-commerce per la mia azienda in ${region.name}?`,
      a: 'Dipende dalla complessità: si parte da circa €2.500 per un sito vetrina e da €4.500 per un e-commerce Shopify. Con una call gratuita definiamo un preventivo preciso.',
    },
    {
      q: `Avete progetti in ${region.name} che posso vedere?`,
      a: 'Nel nostro portfolio trovi case study illustrativi per ciascun settore. Prenota una call e vediamo insieme quale si avvicina di più alla tua situazione.',
    },
    {
      q: 'Quanto tempo serve per realizzare un sito completo?',
      a: 'In genere 4-8 settimane, a seconda che si tratti di un sito vetrina o di un e-commerce con software integrato.',
    },
    {
      q: 'Come gestisco la spedizione dei miei prodotti dall’e-commerce?',
      a: 'Tre strade: gestirla internamente (massimo controllo), affidarla a un corriere specializzato nel settore, o in dropship. Lo valutiamo insieme in base ai tuoi volumi.',
    },
  ];

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `MG Solutions - Servizi Digitali Agroalimentare ${region.name}`,
    description: PAGE.description,
    areaServed: { '@type': 'State', name: region.name },
    serviceType: ['Web Design', 'E-commerce', 'Software Development'],
    url: `https://matteogaruzzo.com${PAGE.path}`,
    telephone: site.phone,
    email: site.email,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: '/' },
              { name: 'Dove lavoriamo', path: '/geo' },
              { name: region.name, path: PAGE.path },
            ])
          ),
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-cover bg-center text-paper"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.75) 100%), url(${heroImage})`,
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-16">
          <Reveal>
            <p className="text-xs text-paper/60">
              <Link href="/" className="hover:text-paper">Home</Link> {'>'}{' '}
              <Link href="/geo" className="hover:text-paper">Dove lavoriamo</Link> {'>'} {region.name}
            </p>
            <h1 className="display text-3xl sm:text-4xl md:text-5xl mt-5 max-w-2xl leading-[1.2] break-words">
              Soluzioni digitali per l’agroalimentare in {region.name}.
            </h1>
            <p className="mt-5 text-lg text-paper/85 max-w-xl leading-relaxed">
              Siti web, e-commerce, software e consulenza digitale per cantine, oleifici e
              agriturismi della regione.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- INTRO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow">Perché {region.name}</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">
            Perché scegliere MG Solutions per l’agroalimentare in {region.name}.
          </h2>
          <div className="mt-8 space-y-5 max-w-3xl">
            <p className="text-ink/70 leading-relaxed">
              Conosciamo {region.name}: {region.lead} Ma avere un buon prodotto non basta se chi
              lo cerca online non riesce a trovarvi o a comprare direttamente da voi.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Lavoriamo con realtà agroalimentari in tutta Italia: cantine che vogliono
              e-commerce diretto, oleifici che automatizzano gli ordini B2B, agriturismi che
              vogliono prenotazioni aperte 24 ore su 24. I problemi si somigliano, il metodo che
              usiamo per risolverli è lo stesso ovunque.
            </p>
            <p className="text-ink/70 leading-relaxed">
              Lavoriamo da remoto con clienti in tutta Italia, con call e incontri online, e in
              presenza dove il progetto lo richiede.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- SERVIZI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Cosa realizziamo</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
              Cosa realizziamo per l’agroalimentare in {region.name}.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {cards.map(({ Icon, title, body, price, href }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full flex flex-col">
                  <Icon className="w-6 h-6 text-forest shrink-0" />
                  <h3 className="h3 text-base mt-4 text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{body}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-forest">{price}</span>
                    <Link href={href} className="text-xs font-semibold text-ink/60 hover:text-forest">
                      Scopri →
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CITTÀ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Le città</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
            Le principali città di {region.name}.
          </h2>
          <p className="mt-2 text-sm text-ink/55 text-center max-w-lg mx-auto">
            Lavoriamo con aziende agroalimentari in tutta la regione, da {region.capoluogo} a{' '}
            {region.cities.join(', ')}.
          </p>
        </Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[region.capoluogo, ...region.cities].map((c) => (
            <span key={c} className="px-4 py-2 rounded-full border border-line text-sm text-ink/70">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      {caseStudy && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-20">
            <Reveal>
              <p className="eyebrow text-center">Un esempio del nostro lavoro</p>
              <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">{caseStudy.title}</h2>
              <p className="mt-1 text-sm text-ink/50 text-center">{caseStudy.kind}</p>
              <p className="mt-2 text-xs italic text-ink/45 text-center">
                Case study illustrativo — esempio di progetto tipo per il settore, non un cliente reale.
              </p>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Reveal>
                <div>
                  <p className="text-xs font-semibold text-forest uppercase tracking-wide">Il problema</p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{caseStudy.problem}</p>
                  <p className="mt-5 text-xs font-semibold text-forest uppercase tracking-wide">La soluzione</p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{caseStudy.solution}</p>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div className="bg-paper border border-line rounded-2xl p-6">
                  <p className="text-xs font-semibold text-forest uppercase tracking-wide">Risultati</p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    {caseStudy.stats.map(([value, label]) => (
                      <div key={label}>
                        <p className="display text-xl text-forest">{value}</p>
                        <p className="text-[11px] text-ink/55 mt-1 leading-snug">{label}</p>
                      </div>
                    ))}
                  </div>
                  <Link href={`/portfolio/${caseStudy.slug}`} className="mt-6 inline-block text-sm font-semibold text-forest hover:text-brass">
                    Leggi il caso studio completo →
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Domande frequenti</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Dubbi? Risolti.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <h2 className="display text-3xl md:text-4xl max-w-xl mx-auto leading-tight">
            Inizia il tuo progetto digitale oggi.
          </h2>
          <p className="mt-4 text-paper/75 max-w-md mx-auto">
            30 minuti con Matteo per capire cosa serve davvero. Non è un hard sell — è
            un’analisi della vostra situazione.
          </p>
          <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-8">
            <GrapeIcon className="w-4 h-4" />
            Prenota una consulenza gratuita →
          </Link>
          <p className="mt-5 text-xs text-paper/60">
            O scrivete direttamente: <a href={`mailto:${site.email}`} className="underline hover:text-paper">{site.email}</a>
          </p>
        </div>
      </section>

      <ServiceArea pageType="default" />
    </>
  );
}
