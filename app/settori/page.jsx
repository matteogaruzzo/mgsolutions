import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { sectors, caseStudies } from '@/lib/data';
import { GrapeIcon, OliveIcon, FarmhouseDoorIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const clientArchetypes = [
  {
    icon: GrapeIcon,
    title: 'Viticoltori',
    body: 'Producono vino di qualità. Vogliono un canale diretto, meno intermediari.',
  },
  {
    icon: OliveIcon,
    title: 'Produttori agroalimentari',
    body: 'Hanno eccellenza certificata. Cercano un direct-to-consumer profittevole.',
  },
  {
    icon: FarmhouseDoorIcon,
    title: 'Agrituristi',
    body: 'Offrono esperienze. Vogliono automazioni e margini più alti sulle prenotazioni.',
  },
];

const specializationStats = [
  ['100%', 'Focus su agribusiness e hospitality rurale'],
  ['5+', 'Anni di esperienza nel settore'],
  ['3', 'Settori verticali serviti'],
  ['20+', 'Progetti completati'],
];

const processSteps = [
  { n: '01', title: 'Analisi specializzata', body: 'Capiamo il tuo business, il tuo mercato, i tuoi clienti. Niente template.' },
  { n: '02', title: 'Strategia digitale', body: 'Definiamo insieme architettura, canali, KPI e risultati attesi.' },
  { n: '03', title: 'Sviluppo & implementazione', body: 'Costruiamo la soluzione: Shopify, Next.js, AI, software su misura.' },
  { n: '04', title: 'Lancio & ottimizzazione', body: 'Online e già ottimizzato. Monitoraggio continuo e crescita nel tempo.' },
];

const latestSlugs = ['tenuta-monteverdi', 'frantoi-san-lorenzo', 'podere-la-vite'];

const PAGE = {
  title: 'Soluzioni web per vino, agriturismo, oleificio',
  description:
    'Strategie digitali costruite sul tuo settore. E-commerce per cantine, booking per agriturismi, B2B per frantoi. Crescita reale, non generica.',
  path: '/settori',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'soluzioni digitali agroalimentare',
    'settori vino agriturismo oleificio',
    'digitalizzazione filiera agroalimentare Umbria',
  ],
});

// Classi Tailwind letterali per settore (Tailwind non può risolvere classi
// costruite dinamicamente da stringhe in lib/data.js).
const theme = {
  'wine-viticulture': {
    icon: GrapeIcon,
    card: 'bg-wine-bg hover:bg-paper',
    accent: 'text-wine-accent',
    divider: '#D4A574',
    number: 'group-hover:text-wine-gold',
  },
  'oleifici-food-tech': {
    icon: OliveIcon,
    card: 'bg-olio-bg hover:bg-paper',
    accent: 'text-olio-accent',
    divider: '#D4AF37',
    number: 'group-hover:text-olio-gold',
  },
  'wine-hospitality-agriturismi': {
    icon: FarmhouseDoorIcon,
    card: 'bg-hospitality-bg hover:bg-paper',
    accent: 'text-hospitality-accent',
    divider: '#8B5A3C',
    number: 'group-hover:text-hospitality-gold',
  },
};

export default function Settori() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <p className="eyebrow">I tre settori</p>
        <h1 className="display text-4xl sm:text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.02] break-words">
          Agribusiness di eccellenza e hospitality premium. Non facciamo altro.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Tre verticali, tre approcci diversi. Entra nel tuo settore e scopri cosa realizziamo
          davvero, con esempi concreti e il risultato che portiamo.
        </p>
      </section>

      <section className="max-w-edge mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((s, i) => {
            const t = theme[s.slug];
            const Icon = t.icon;
            return (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/settori/${s.slug}`}
                  className={`group block card-leaf-top rounded-2xl p-8 h-full transition-colors ${t.card}`}
                  style={{ '--sector-divider': t.divider }}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-8 h-8 ${t.accent}`} />
                    <span className={`text-xs text-ink/40 ${t.number}`}>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h2 className="h3 text-2xl mt-5 text-ink">{s.name}</h2>
                  <p className={`mt-2 text-sm font-semibold ${t.accent}`}>{s.lead}</p>
                  <p className="mt-4 text-sm text-ink/65 leading-relaxed">{s.intro}</p>
                  <span className={`mt-5 inline-block text-xs font-semibold ${t.accent}`}>
                    Cosa realizziamo →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- CHI SONO I NOSTRI CLIENTI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Chi sono i nostri clienti</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Lavoriamo con chi capisce il valore dell’innovazione digitale.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {clientArchetypes.map((c, i) => (
              <Reveal key={c.title} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-7 h-full">
                  <c.icon className="w-8 h-8 text-forest" />
                  <h3 className="h3 text-lg mt-4 text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PERCHÉ SPECIALIZZARSI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Perché specializzarsi</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">
                Non siamo un’agenzia web. Siamo specialisti agribusiness.
              </h2>
              <p className="mt-5 text-ink/70 leading-relaxed max-w-md">
                Le agenzie generiche fanno siti per tutti. Noi facciamo siti che vendono vino, olio,
                esperienze. Capiamo il vostro mondo: i tempi della vigna, l’importanza della
                tracciabilità, come si comunica davvero la qualità.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid grid-cols-2 gap-px bg-line border border-line rounded-2xl overflow-hidden">
              {specializationStats.map(([n, l]) => (
                <div key={l} className="bg-paper p-6 text-center">
                  <p className="display text-3xl text-forest">{n}</p>
                  <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- IL PROCESSO IN 4 STEP ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come lavoriamo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Il processo in 4 step.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <p className="text-xs tracking-widest text-primary font-semibold">{s.n}</p>
                  <h3 className="h3 text-lg mt-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ULTIMI PROGETTI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">Social proof</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Ultimi progetti realizzati.</h2>
            </div>
            <Link href="/portfolio" className="text-sm font-semibold text-forest hover:text-brass">
              Tutto il portfolio →
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {latestSlugs.map((slug, i) => {
            const c = caseStudies.find((cs) => cs.slug === slug);
            if (!c) return null;
            return (
              <Reveal key={slug} delay={i * 70}>
                <Link
                  href={`/portfolio/${slug}`}
                  className="group block border border-line rounded-2xl overflow-hidden bg-paper h-full hover:shadow-lg transition-shadow"
                >
                  <div
                    className="h-36 bg-cover bg-center bg-paper-dim"
                    style={{ backgroundImage: `url(/images/case-studies/${slug}-desktop.png)` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="h3 text-lg text-ink">{c.title}</h3>
                      <span className="text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                        CONCEPT
                      </span>
                    </div>
                    <p className="text-xs text-forest mt-1 font-semibold">{c.kind}</p>
                    <p className="mt-3 text-sm text-ink/80 font-semibold">→ {c.results[0]}</p>
                    <span className="mt-4 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                      Leggi il case study →
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
