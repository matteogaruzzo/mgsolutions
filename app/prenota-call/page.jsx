import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CalendlyEmbed from '@/components/CalendlyEmbed';
import FAQAccordion from '@/components/FAQAccordion';
import { site, team, testimonials } from '@/lib/data';
import { ClockIcon, ChatIcon, CompassIcon, ChartIcon, TargetIcon, BookIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema, faqPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Prenota una Call Gratuita con MG Solutions',
  description:
    'Analizziamo insieme come far crescere le tue vendite dirette online. Consulenza gratuita di 30 minuti, senza impegno, con uno specialista di settore.',
  path: '/prenota-call',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'consulenza gratuita web',
    'call con web agency',
    'consulenza digitale agroalimentare',
    'prenotare consulenza digitale',
  ],
});

const trustMini = [
  { Icon: ClockIcon, label: '24 ore', sub: 'Risposta garantita' },
  { Icon: CompassIcon, label: 'Gratuita', sub: 'Zero impegno, zero costi' },
  { Icon: ChatIcon, label: 'Matteo diretto', sub: 'Non un bot, non un commerciale' },
];

const benefits = [
  { Icon: CompassIcon, title: 'Capiremo il tuo business', body: '30 minuti dedicati al tuo caso specifico, non a uno script generico.' },
  { Icon: ChartIcon, title: 'Valuteremo il potenziale digitale', body: 'Dove puoi crescere davvero, con numeri concreti sul tuo settore.' },
  { Icon: TargetIcon, title: 'Ti daremo 2-3 idee concrete', body: 'Azioni che potresti implementare, anche se non lavoriamo insieme.' },
  { Icon: BookIcon, title: 'Riceverai una proposta scritta', body: 'Se ha senso proseguire, ti mando un documento con passi e costo indicativo.' },
];

const miniProcess = [
  { n: '01', title: 'Conferma email', body: 'Ricevi subito data, ora e link della call, in automatico.' },
  { n: '02', title: 'La call (30 min)', body: 'Parliamo del tuo progetto. Io ascolto più di quanto parlo.' },
  { n: '03', title: 'Proposta scritta', body: 'Se ha senso proseguire, la ricevi nei giorni successivi.' },
  { n: '04', title: 'Decidi tu', body: 'Si parte se ti convince. Se no, nessun problema.' },
];

const miniFaqs = [
  { q: 'Perché la call è gratuita?', a: 'Perché prima vogliamo capire il tuo caso, non venderti qualcosa alla cieca. Ci aiuta entrambi: tu capisci se ha senso, noi capiamo se possiamo aiutarti davvero.' },
  { q: 'È vincolante?', a: 'No. È un’occasione per conoscerci. Se dopo la call non ti interessa proseguire, nessun problema.' },
  { q: 'Come mi preparo?', a: 'Non serve preparazione. Pensa solo a cosa vorresti ottenere dal digitale per la tua attività: ne parliamo insieme durante la call.' },
];

const matteo = team.find((m) => m.name === site.founder) || team[0];
const featuredTestimonials = testimonials.slice(0, 4);

export default function PrenotaCall() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(miniFaqs)) }}
      />
      {/* ---------- HERO MINI ---------- */}
      <section
        className="relative bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(26,26,26,0.45) 0%, rgba(26,26,26,0.8) 100%), url(/images/sectors/wine-hero.png)',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-28 pb-14 text-center">
          <p className="eyebrow text-brass">Prenota una call · Booking</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-2xl mx-auto leading-tight">
            Prenota la tua call strategica.
          </h1>
          <p className="mt-4 text-lg text-paper/80 max-w-xl mx-auto">
            30 minuti con Matteo. Gratuito. Zero impegno.
          </p>
          <p className="mt-2 text-xs text-paper/55">
            Il calendario qui sotto mostra solo gli slot realmente disponibili.
          </p>
        </div>
      </section>

      {/* ---------- TRUST MINI ---------- */}
      <section className="border-b border-line">
        <div className="max-w-edge mx-auto px-6 py-8">
          <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-line">
            {trustMini.map(({ Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 py-3 sm:py-0 sm:px-6 justify-center">
                <Icon className="w-6 h-6 text-forest shrink-0" />
                <div>
                  <p className="font-semibold text-ink text-sm">{label}</p>
                  <p className="text-xs text-ink/55">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PERCHÉ PRENOTARE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10">
          <Reveal>
            <div>
              <p className="eyebrow">Nella tua call</p>
              <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink">Cosa otterrai in 30 minuti.</h2>
              <ul className="mt-8 space-y-6">
                {benefits.map(({ Icon, title, body }) => (
                  <li key={title} className="flex gap-4">
                    <Icon className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-ink text-sm">{title}</p>
                      <p className="mt-1 text-sm text-ink/60 leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-ink text-paper rounded-2xl p-8 h-full flex flex-col justify-center">
              <p className="eyebrow text-brass">Perché adesso</p>
              <p className="mt-4 text-paper/80 leading-relaxed">
                Seguo un progetto alla volta con attenzione vera, non in serie. Se stai valutando
                una trasformazione digitale per la tua azienda, meglio parlarne ora che tra sei mesi
                nello stesso punto di partenza.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CALENDLY WIDGET ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Scegli il tuo slot</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Calendario in tempo reale.</h2>
          </Reveal>
          <div className="mt-10">
            <CalendlyEmbed />
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIANZE MINI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Chi ha già prenotato</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Cosa dicono di noi.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="border-l-2 border-forest bg-paper-dim rounded-r-lg p-5 h-full">
                <p className="text-brass text-xs tracking-wide">★★★★★</p>
                <p className="mt-2 text-sm text-ink/75 leading-relaxed">“{t.quote}”</p>
                <p className="mt-3 text-xs font-semibold text-ink">{t.name}</p>
                <p className="text-[11px] text-forest">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- PROCESSO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Cosa succede dopo</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Il percorso, passo dopo passo.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {miniProcess.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-5 h-full">
                  <p className="text-xs font-mono text-ink/40">{s.n}</p>
                  <h3 className="h3 text-base mt-2 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ MINI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Dubbi? Risolti.</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Le domande più comuni.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl mx-auto">
          <FAQAccordion items={miniFaqs} />
        </div>
      </section>

      {/* ---------- CHI PARLERAI ---------- */}
      {matteo && (
        <section className="bg-paper-dim">
          <div className="max-w-3xl mx-auto px-6 py-20 text-center">
            <Reveal>
              <p className="eyebrow">Non parlerai con un bot</p>
              <div className="relative w-24 h-24 mx-auto mt-6 rounded-full overflow-hidden border border-line">
                <Image src={matteo.photo} alt={matteo.name} fill className="object-cover" />
              </div>
              <h3 className="h3 text-xl mt-4 text-ink">{matteo.name}</h3>
              <p className="text-xs text-forest font-semibold mt-1">{matteo.role}</p>
              <p className="mt-3 text-sm text-ink/60 max-w-md mx-auto leading-relaxed">{matteo.body}</p>
              <p className="mt-4 text-xs text-ink/45">Se prenoti la call, parli con lui. Via Zoom, in persona.</p>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-semibold text-forest hover:text-brass"
              >
                LinkedIn →
              </a>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- CONTATTI ALTERNATIVI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Preferisci contattarci prima?</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="border border-line rounded-xl p-5 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-forest">TELEFONO</p>
            <p className="mt-2 text-sm text-ink/70">{site.phone}</p>
          </a>
          <a href={`mailto:${site.email}`} className="border border-line rounded-xl p-5 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-forest">EMAIL</p>
            <p className="mt-2 text-sm text-ink/70 break-all">{site.email}</p>
          </a>
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="border border-line rounded-xl p-5 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-forest">LINKEDIN</p>
            <p className="mt-2 text-sm text-ink/70">Connettiti →</p>
          </a>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="border border-line rounded-xl p-5 hover:shadow-md transition-shadow">
            <p className="text-xs font-semibold text-forest">INSTAGRAM</p>
            <p className="mt-2 text-sm text-ink/70">Seguici →</p>
          </a>
        </div>
      </section>

      {/* ---------- CTA FINALE (FALLBACK) ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-20 text-center">
          <h2 className="display text-3xl md:text-4xl max-w-xl mx-auto leading-tight">
            Non riesci a prenotare sopra?
          </h2>
          <p className="mt-4 text-paper/75 max-w-md mx-auto">
            Apri il calendario in una nuova finestra e scegli lo slot che preferisci.
          </p>
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid bg-brass text-ink hover:bg-paper mt-8"
          >
            <GrapeIcon className="w-4 h-4" />
            Apri il calendario →
          </a>
        </div>
      </section>
    </>
  );
}
