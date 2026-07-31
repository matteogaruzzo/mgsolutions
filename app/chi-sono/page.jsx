import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import BookingForm from '@/components/BookingForm';
import CountUp from '@/components/CountUp';
import { team } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { ClockIcon, LockIcon, TargetIcon } from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Matteo Garuzzo, specialista digitale agroalimentare',
  description:
    '6 anni specializzato in e-commerce, AI e crescita per vino, agriturismo, oleificio. Fondatore di MG Solutions. Scopri come scalare il tuo business.',
  path: '/chi-sono',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'chi è Matteo Garuzzo',
    'fondatore MG Solutions',
    'consulente digitale Umbria',
    'specialista e-commerce vino',
    'freelance web Perugia',
  ],
});

const perks = [
  {
    title: 'Un partner tecnico, non un fornitore',
    body: 'Lavoro fianco a fianco con te dal primo brief al lancio. Non realizzo il sito e scompaio: rimango al tuo fianco per ottimizzare, analizzare, crescere.',
  },
  {
    title: 'Niente intermediari',
    body: 'Sei sempre a contatto con chi costruisce il tuo progetto. Niente account manager, niente lunghi processi. Diretto.',
  },
  {
    title: 'Risultati, non estetica',
    body: 'Un sito bello non basta. Costruisco per conversioni: più lead, più vendite, più fiducia. Ogni elemento ha uno scopo.',
  },
  {
    title: 'Tempo e trasparenza',
    body: 'Pianificazione chiara, tempi rispettati, zero sorprese. Sai sempre come sta il tuo progetto e quanto manca al lancio.',
  },
];

const timeline = [
  {
    year: '2018',
    title: 'Primi progetti',
    body: 'Ho iniziato come freelance sviluppando siti e piccoli e-commerce. WordPress, PHP, JavaScript. Primi clienti locali, primi insegnamenti su cosa significa essere partner tecnico.',
  },
  {
    year: '2020',
    title: 'Full stack developer',
    body: 'Transizione a full stack: imparato React, Node.js, database design. Comincio a realizzare e-commerce più complessi su Shopify. Focus su performance e conversioni.',
  },
  {
    year: '2021',
    title: 'Specializzazione vino & agribusiness',
    body: 'Realizzo il primo grande e-commerce per una cantina toscana. Capisco che il settore agroalimentare ha esigenze diverse dai clienti generici: storytelling territoriale, tracciabilità, wine club, automazioni specifiche. Decido di specializzarmi.',
  },
  {
    year: '2022',
    title: 'Agenti AI e automazioni',
    body: 'Inizio a integrare intelligenza artificiale nei progetti: software per gestione tasting room, automazioni WhatsApp, raccomandazioni prodotto intelligenti. Lo stack evolve, il valore aumenta.',
  },
  {
    year: '2023',
    title: 'MG Solutions team',
    body: 'Fondo formalmente MG Solutions con Matteo De Pilla (AI specialist) e Alessandro Poponi (marketing). Da freelance diventato strutturato, ma mantenendo agilità e personalizzazione.',
  },
  {
    year: 'Oggi',
    title: 'Specialista agribusiness',
    body: 'Lavoro esclusivamente con cantine, oleifici, agriturismi e realtà di hospitality rurale. Ogni progetto è personalizzato. Ogni cliente sa di lavorare con persone che capiscono il suo mondo.',
  },
];

const guarantees = [
  {
    icon: ClockIcon,
    title: 'Tempi rispettati, sempre',
    body: 'Se diciamo “online il 15”, il 15 sarà online. Pianificazione realistica e zero ritardi non sono negoziabili.',
  },
  {
    icon: LockIcon,
    title: 'Il progetto è tutto tuo',
    body: 'Niente abbonamenti forzati, niente vincoli. Il sito, il dominio, il codice sorgente: tutto resta tuo al 100%, per sempre.',
  },
  {
    icon: TargetIcon,
    title: 'Progettato per convertire',
    body: 'Non basta un sito bello. Ogni pagina è ottimizzata per trasformare visitatori in clienti, con analisi continua dei risultati.',
  },
  {
    icon: GrapeIcon,
    title: 'Conosco il tuo settore',
    body: 'Non generico. Capisco come funziona il vino, l’olio, l’ospitalità. Le soluzioni sono specifiche per l’agribusiness, non template universali.',
  },
];

const stats = [
  ['5+', 'Anni di esperienza'],
  ['20+', 'Progetti completati'],
  ['3', 'Settori verticali serviti'],
  ['100%', 'Sviluppo seguito in prima persona'],
];

const stack = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS · JavaScript moderno'],
  'Backend & E-commerce': ['Node.js', 'Express', 'Shopify (Liquid)', 'WordPress (PHP)', 'REST API · GraphQL'],
  'Infrastruttura & Data': ['PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Cloudflare · GitHub · CI/CD'],
};

const process = [
  { n: '01', title: 'Analisi', body: 'Analizzo il tuo business: cosa vendi, chi sono i clienti, come ragionano, cosa cercano online. Capisco i tuoi problemi reali.' },
  { n: '02', title: 'Strategia', body: 'Definiamo architettura del sito, customer journey, KPI di conversione. Tutto è pianificato prima di scrivere una riga di codice.' },
  { n: '03', title: 'Design', body: 'Prototipo su Figma. Vedi come sarà il sito prima dello sviluppo. Feedback, iterazioni, approvazione.' },
  { n: '04', title: 'Sviluppo', body: 'Scrivo il codice: pulito, testato, performante. Versioning su GitHub, deploy preview a ogni passo.' },
  { n: '05', title: 'Test & ottimizzazione', body: 'Test su tutti i dispositivi, velocità, conversioni, accessibilità. Ogni dettaglio è verificato.' },
  { n: '06', title: 'Lancio & supporto', body: 'Il sito è online. Monitoraggio continuo, analytics, ottimizzazioni post-lancio. Resto al tuo fianco oltre il lancio.' },
];

const forWho = [
  'Hai un’azienda agroalimentare/hospitality già operativa',
  'Vuoi aumentare vendite online o lead qualificati',
  'Sei disposto a migliorare il modo in cui comunichi digitalmente',
  'Cerchi un partner, non solo un fornitore',
  'Credi che il digitale sia importante per il tuo futuro',
];

const notForWho = [
  'Stai ancora aprendo l’azienda: prima apri, poi ne parliamo',
  'Cerchi il preventivo più basso a ogni costo',
  'Pensi che un sito bello sia più importante di un sito che vende',
  'Non hai tempo per una consulenza iniziale seria',
  'Preferisci una grande agenzia anonima',
];

export default function ChiSono() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <Reveal>
            <div>
              <p className="eyebrow">Chi sono</p>
              <h1 className="display text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05]">
                Non un’agenzia.
                <br />
                Un developer che capisce il tuo mondo.
              </h1>
              <p className="mt-6 text-lg text-ink/70 leading-relaxed">
                Mi chiamo Matteo Garuzzo. Da oltre cinque anni costruisco siti, e-commerce e
                software per cantine, oleifici e agriturismi. Non vendo template generici: analizzo
                il tuo business, capisco come funziona il tuo settore, e costruisco soluzioni
                pensate per portare risultati misurabili.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Ho iniziato come developer freelance realizzando siti per aziende locali. Ma quando
                ho capito che le cantine e i produttori di eccellenza agroalimentare non trovavano
                partner che conoscessero davvero il loro mondo — i tempi della vigna, l’importanza
                della tracciabilità, come raccontare una storia online — ho deciso di specializzarmi.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Ogni framework che propongo, ogni soluzione che suggerisco, l’ho testata con i miei
                clienti reali. Non è teoria. È quello che funziona davvero nel vino, nell’olio,
                nell’ospitalità rurale.
              </p>
              <Link href="/prenota-call" className="btn-solid mt-8">
                <GrapeIcon className="w-4 h-4" />
                Parliamo del tuo progetto →
              </Link>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border border-line shadow-lg">
              <Image
                src="/images/team/matteo-garuzzo.jpg"
                alt="Matteo Garuzzo al lavoro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- COSA OTTIENI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa ottieni</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Cosa ottieni lavorando con me.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-7 h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="h3 text-lg text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- IL MIO PERCORSO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Il mio percorso</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Da developer a specialista agribusiness.</h2>
          <p className="mt-3 text-ink/60 max-w-xl">Un’evoluzione continua al servizio dei miei clienti.</p>
        </Reveal>

        <div className="mt-14 relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-line" aria-hidden="true" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 70}>
                <div className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-forest border-4 border-paper shadow" />
                  <p className="text-xs tracking-widest font-semibold text-forest">{t.year.toUpperCase()}</p>
                  <h3 className="h3 text-xl mt-1 text-ink">{t.title}</h3>
                  <p className="mt-2 text-ink/65 leading-relaxed max-w-2xl">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- COSA TI GARANTISCO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Garanzie</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">Quello su cui puoi contare.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {guarantees.map((g, i) => {
              const Icon = g.icon;
              return (
                <Reveal key={g.title} delay={i * 60}>
                  <div className="border border-paper/15 rounded-xl p-6 h-full">
                    <Icon className="w-7 h-7 text-brass" />
                    <h3 className="h3 text-lg mt-4">{g.title}</h3>
                    <p className="mt-2 text-sm text-paper/65 leading-relaxed">{g.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- I MIEI NUMERI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">I miei numeri</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">I miei numeri.</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {stats.map(([n, l]) => (
            <div key={l} className="bg-paper p-7 text-center">
              <CountUp value={n} className="display text-3xl md:text-4xl text-forest" />
              <p className="text-xs text-ink/60 mt-2 leading-snug">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- STACK PROFESSIONALE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Stack</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Con cosa lavoro.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {Object.entries(stack).map(([col, items], i) => (
              <Reveal key={col} delay={i * 70}>
                <div>
                  <p className="text-xs tracking-widest font-semibold text-forest">{col.toUpperCase()}</p>
                  <ul className="mt-4 space-y-2">
                    {items.map((it) => (
                      <li key={it} className="text-ink/75 text-sm">{it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-ink/50 italic max-w-xl">
            “La tecnologia migliore è quella invisibile: funziona perfettamente senza che l’utente
            debba capire come sia stato fatto.”
          </p>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Team</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Il team dietro MG Solutions.</h2>
          <p className="mt-3 text-ink/60 max-w-xl">Non sono solo. Dietro ogni progetto c’è specializzazione.</p>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="text-center group">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border border-line shadow transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl">
                  <Image src={m.photo} alt={m.name} fill className="object-cover" />
                </div>
                <h3 className="h3 text-xl mt-5 text-ink">{m.name}</h3>
                <p className="text-xs text-forest font-semibold mt-1">{m.role}</p>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed max-w-xs mx-auto">{m.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- COME LAVORO CON TE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come lavoro</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">Il percorso di un progetto.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((s, i) => (
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

      {/* ---------- PER CHI LAVORO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Per chi lavoro</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">Lavoro solo con le persone giuste.</h2>
            <p className="mt-3 text-paper/60 max-w-xl">Non accetto tutti. Il risultato dipende anche da te.</p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border border-paper/15 rounded-xl p-7 h-full">
                <p className="text-xs tracking-widest font-semibold text-primary">PER TE, SE</p>
                <ul className="mt-5 space-y-3">
                  {forWho.map((f) => (
                    <li key={f} className="flex gap-3 text-paper/85 leading-relaxed">
                      <span className="text-primary shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border border-paper/15 rounded-xl p-7 h-full">
                <p className="text-xs tracking-widest font-semibold text-paper/50">NON PER TE, SE</p>
                <ul className="mt-5 space-y-3">
                  {notForWho.map((f) => (
                    <li key={f} className="flex gap-3 text-paper/60 leading-relaxed">
                      <span className="text-paper/40 shrink-0">✗</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <p className="eyebrow">Parliamone</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-md text-ink">
                Parliamo del tuo progetto.
              </h2>
              <p className="mt-4 text-ink/65 max-w-md leading-relaxed">
                Raccontami cos’hai in mente. Preventivo gratuito, risposta in 24h su WhatsApp,
                nessun vincolo.
              </p>
              <p className="mt-6 text-sm text-ink/50">Preferisci capire prima il tuo caso? Fai il quiz.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link href="/quiz?fresh=1" className="btn-ghost">
                  Fai il quiz →
                </Link>
                <Link href="/prenota-call" className="btn-solid">
                  <GrapeIcon className="w-4 h-4" />
                  Prenota una call →
                </Link>
              </div>
            </div>
            <BookingForm />
          </div>
        </Reveal>
      </section>

      <CTA />
      <ServiceArea pageType="default" />
    </>
  );
}
