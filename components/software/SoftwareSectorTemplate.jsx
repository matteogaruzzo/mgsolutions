import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import PricingBlock from '@/components/PricingBlock';
import { pricing } from '@/lib/pricing-data';
import { CompassIcon, ScreenIcon, GearIcon, HandshakeIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

// Colori distintivi per settore, definiti in tailwind.config.js (wine / olio / hospitality),
// già usati dalle pagine /settori/*: li riusiamo qui per coerenza visiva invece di introdurne di nuovi.
const accentClasses = {
  wine: { text: 'text-wine-accent', border: 'border-wine-accent/30', bg: 'bg-wine-bg' },
  olio: { text: 'text-olio-accent', border: 'border-olio-accent/30', bg: 'bg-olio-bg' },
  hospitality: { text: 'text-hospitality-accent', border: 'border-hospitality-accent/30', bg: 'bg-hospitality-bg' },
};

const steps = [
  { n: '1', Icon: CompassIcon, title: 'Analisi', body: 'Veniamo da voi o facciamo una call lunga. Capiamo come lavorate oggi, dove perdete tempo, cosa vi manca.' },
  { n: '2', Icon: ScreenIcon, title: 'Progetto e preventivo', body: 'Vi presentiamo cosa costruiremmo, in che ordine, con quali tempi e quale cifra. Solo a quel punto decidete.' },
  { n: '3', Icon: GearIcon, title: 'Sviluppo a blocchi', body: 'Non spariamo per sei mesi. Consegniamo il primo pezzo funzionante presto e costruiamo sopra, con voi che provate mano a mano.' },
  { n: '4', Icon: HandshakeIcon, title: 'Avvio e assistenza', body: 'Formazione al vostro team, e restiamo per far evolvere lo strumento quando cambiano le esigenze.' },
];

export default function SoftwareSectorTemplate({
  eyebrow,
  breadcrumbLabel,
  h1,
  subheadline,
  heroImage,
  heroImageAlt,
  accentKey = 'wine',
  problems,
  capabilities,
  faqs,
  otherSectors,
}) {
  const accent = accentClasses[accentKey] || accentClasses.wine;

  return (
    <>
      {/* ---------- BREADCRUMB ---------- */}
      <div className="max-w-edge mx-auto px-6 pt-28 pb-2">
        <p className="text-xs text-ink/50">
          <Link href="/" className="hover:text-forest">Home</Link> {'>'}{' '}
          <Link href="/software" className="hover:text-forest">Software</Link> {'>'} {breadcrumbLabel}
        </p>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-6 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <Reveal>
            <div>
              <p className={`eyebrow ${accent.text}`}>{eyebrow}</p>
              <h1 className="display text-4xl md:text-5xl mt-5 leading-[1.05]">{h1}</h1>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">{subheadline}</p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link href="/prenota-call" className="btn-solid">
                  <GrapeIcon className="w-4 h-4" />
                  Raccontateci cosa vi serve
                </Link>
              </div>
            </div>
          </Reveal>
          {heroImage && (
            <Reveal delay={100}>
              <div className={`relative aspect-[4/3] rounded-2xl overflow-hidden border ${accent.border}`}>
                <Image
                  src={heroImage}
                  alt={heroImageAlt || h1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- I PROBLEMI CHE SENTIAMO PIÙ SPESSO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quello che sentiamo più spesso</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Quello che ci raccontano più spesso in cantina, in agriturismo, al frantoio.</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <div className={`border ${accent.border} ${accent.bg} rounded-2xl p-6 h-full`}>
                  <p className="text-sm text-ink/80 leading-relaxed italic">“{p}”</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium text-ink/70">
            Se qualcuna di queste vi suona familiare, è di questo che ci occupiamo.
          </p>
        </div>
      </section>

      {/* ---------- COSA SI PUÒ COSTRUIRE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa si può costruire</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Capacità, non moduli da comprare a pacchetto.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {capabilities.map((c) => (
            <div key={c} className="flex gap-3 border border-line rounded-xl p-4">
              <span className={`shrink-0 ${accent.text}`}>✓</span>
              <span className="text-sm text-ink/75 leading-relaxed">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- COME LAVORIAMO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Come lavoriamo</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl">Quattro passaggi, nessuna sorpresa.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-6 h-full flex flex-col">
                  <div className="w-11 h-11 rounded-full bg-paper/10 flex items-center justify-center">
                    <s.Icon className="w-5 h-5 text-brass" />
                  </div>
                  <p className="mt-4 font-semibold">{s.n} · {s.title}</p>
                  <p className="mt-2 text-sm text-paper/70 leading-relaxed flex-1">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INVESTIMENTO ---------- */}
      <PricingBlock
        heading="Quanto costa un CRM su misura"
        subheading="Un punto di partenza: la cifra definitiva arriva dopo la prima analisi."
        plans={[
          {
            ...pricing.crm,
            offerDescription: 'Sviluppo dedicato al vostro processo, non un gestionale preconfezionato.',
            benefits: [
              'Analisi e anagrafiche',
              'Una vista operativa principale',
              'Notifiche email e WhatsApp',
              'Una dashboard',
              'Formazione',
              '30 giorni di assistenza',
            ],
            exclusions: ['Moduli aggiuntivi', 'Integrazioni con gestionali esterni', `Hosting (${pricing.assistenzaMensile.price}€/mese)`],
            closing: 'È un punto di partenza: la cifra precisa arriva dopo la prima analisi.',
          },
        ]}
      />

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Risposte specifiche per il tuo settore.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ---------- ALTRI SETTORI ---------- */}
      {otherSectors && otherSectors.length > 0 && (
        <section className="max-w-edge mx-auto px-6 py-16">
          <p className="text-xs tracking-widest font-semibold text-forest">ALTRI SETTORI</p>
          <div className="mt-5 flex flex-wrap gap-4">
            {otherSectors.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="text-sm font-semibold text-ink/70 hover:text-forest border border-line rounded-full px-4 py-2 transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ---------- CTA FINALE ---------- */}
      <CTA
        title="Raccontateci come lavorate."
        sub="Prima call di analisi, senza impegno e senza costo."
        href="/prenota-call"
        ctaLabel="Prenota una call"
      />

      <ServiceArea pageType="software" />
    </>
  );
}
