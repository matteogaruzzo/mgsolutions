import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import StatNumber from '@/components/StatNumber';
import BookingForm from '@/components/BookingForm';
import FAQAccordion from '@/components/FAQAccordion';
import { site, team, testimonials } from '@/lib/data';
import { ClockIcon, LockIcon, ChatIcon, CompassIcon, CalendarIcon, BookIcon, TargetIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contatti',
  description:
    'Contatta MG Solutions: telefono, email o WhatsApp. Prima consulenza gratuita, risposta entro 24 ore, zero impegno. Perugia, Italia.',
  path: '/contatti',
  keywords: ['contatti web agency agroalimentare', 'consulenza digitale Perugia', 'contattare Matteo Garuzzo'],
});

const contactFaqs = [
  { q: 'Qual è il modo migliore per contattarvi?', a: 'Se è urgente, telefono o WhatsApp. Se non è urgente, email: rispondo personalmente, non un bot o un call center.' },
  { q: 'Quanto costa la consulenza iniziale?', a: 'È gratuita: circa 30 minuti per capire il tuo progetto e dirti con onestà se e come possiamo aiutarti.' },
  { q: 'In quanto tempo rispondete?', a: 'In genere entro 24 ore. Per richieste via WhatsApp la risposta è spesso più rapida.' },
  { q: 'Posso venire di persona?', a: 'Sì, su appuntamento: scrivimi prima per organizzarci.' },
  { q: 'Lavorate solo con aziende in Umbria/Toscana?', a: 'Siamo basati a Perugia e operiamo in tutta Italia; molti progetti si seguono interamente da remoto.' },
  { q: 'La call è vincolante?', a: 'No. È un’occasione per capire se c’è sintonia sul progetto. Se alla fine non ti interessa proseguire, nessun problema.' },
  { q: 'Riceverò una proposta scritta?', a: 'Sì, se dalla call emerge che ha senso lavorare insieme ti mando una proposta scritta con passi, tempi indicativi e cosa è incluso.' },
  { q: 'Posso scegliere giorno e ora della call?', a: 'Sì: il calendario mostra solo gli slot realmente disponibili, scegli quello che ti conviene.' },
  { q: 'Cosa faccio se non trovo uno slot adatto?', a: `Scrivimi via email o WhatsApp (${site.phone}): troviamo un orario alternativo.` },
];

const trustSignals = [
  { Icon: ClockIcon, title: 'Risposta entro 24 ore', body: 'Niente attese: rispondo personalmente entro un giorno lavorativo.' },
  { Icon: LockIcon, title: 'Confidenziale, zero spam', body: 'I tuoi dati restano privati. Nessuna lista contatti, nessuna newsletter non richiesta.' },
  { Icon: ChatIcon, title: 'Parli con un vero developer', body: 'Non un commerciale, non un bot: rispondo io, Matteo, direttamente.' },
  { Icon: CompassIcon, title: 'Prima consulenza gratuita', body: '30 minuti per capire il progetto, senza impegno e senza costi.' },
];

const processSteps = [
  { n: '01', Icon: CalendarIcon, title: 'Prenoti', body: 'Scegli uno slot libero dal calendario. Ricevi conferma via email in automatico.', time: '2 minuti' },
  { n: '02', Icon: ChatIcon, title: 'Facciamo la call', body: '30 minuti insieme: mi racconti il progetto, capiamo se e come posso aiutarti.', time: '30 minuti' },
  { n: '03', Icon: BookIcon, title: 'Ricevi una proposta', body: 'Se ha senso proseguire, ti mando una proposta scritta con passi, tempi e cosa è incluso.', time: 'Nei giorni successivi' },
  { n: '04', Icon: TargetIcon, title: 'Decidi tu', body: 'Se ti convince, si parte. Se non è il momento giusto, nessuna pressione.', time: 'Quando vuoi' },
];

const guarantees = [
  { title: 'Onestà', body: 'Se un progetto non è per noi, te lo dico chiaramente. Preferisco perdere un cliente che prometterti qualcosa che non posso mantenere.' },
  { title: 'Velocità', body: 'Rispondo entro 24 ore, sempre. Se prenoti una call, hai già la conferma automatica in email.' },
  { title: 'Trasparenza', body: 'Ne parliamo apertamente in call, prima di qualsiasi proposta: niente sorprese dopo, niente clausole nascoste.' },
];

const proofStats = [
  ['6', 'Case study'],
  ['3', 'Settori verticali'],
  ['5+', 'Anni di esperienza'],
  ['24/7', 'Supporto continuo'],
];

const contactTestimonials = testimonials;

const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city} (${site.address.province})`;
const fullAddressLong = `${fullAddress}, Italia`;
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddressLong)}`;
const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddressLong)}&output=embed`;

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  founder: { '@type': 'Person', name: site.founder },
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.social.linkedin, site.social.instagram],
};

export default function ContattiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(26,26,26,0.45) 0%, rgba(26,26,26,0.82) 100%), url(/images/sectors/olio-hero.png)',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-20">
          <p className="eyebrow text-brass">Contatti · Prenota una call</p>
          <h1 className="display text-5xl md:text-6xl mt-5 max-w-2xl leading-[1.05]">
            Parliamo del tuo progetto digitale.
          </h1>
          <p className="mt-6 text-lg text-paper/85 max-w-xl leading-relaxed">
            30 minuti. Gratuito. Zero impegno. Ti dico sinceramente se e come posso aiutarti.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call →
            </Link>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-ghost border-paper/30 text-paper hover:border-paper">
              Oppure chiama ora
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-paper/15 border border-paper/15 rounded-2xl overflow-hidden max-w-2xl">
            {[
              ['24 ore', 'Risposta garantita'],
              ['Zero moduli lunghi', 'Setup in pochi minuti'],
              ['Slot limitati', 'Un progetto alla volta'],
            ].map(([n, l]) => (
              <div key={l} className="bg-forest p-6">
                <p className="font-semibold text-brass">{n}</p>
                <p className="text-xs text-paper/60 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRUST SIGNALS ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustSignals.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="border border-line rounded-xl p-6 h-full hover:shadow-md transition-shadow">
                <Icon className="w-8 h-8 text-forest" />
                <h3 className="h3 text-base mt-4 text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Il tuo percorso verso la soluzione.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map(({ n, Icon, title, body, time }, i) => (
              <Reveal key={n} delay={i * 70}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <div className="flex items-center justify-between">
                    <Icon className="w-6 h-6 text-forest" />
                    <span className="text-xs text-ink/40 font-mono">{n}</span>
                  </div>
                  <h3 className="h3 text-lg mt-4 text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{body}</p>
                  <p className="mt-3 text-xs font-semibold text-forest">{time}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTATTI DIRETTI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow">Contatti diretti</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Preferisci scrivere prima?</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Reveal>
            <div className="border border-line rounded-2xl p-8 h-full">
              <p className="text-xs tracking-widest font-semibold text-forest">TELEFONO & WHATSAPP</p>
              <p className="h3 text-2xl mt-3 text-ink">{site.founder}</p>
              <p className="mt-2 text-ink/70">{site.phone}</p>
              <p className="mt-2 text-sm text-ink/50">Rispondo personalmente, non un call center.</p>
              <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="btn-solid mt-6 inline-flex">
                Chiama ora →
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="border border-line rounded-2xl p-8 h-full">
              <p className="text-xs tracking-widest font-semibold text-forest">EMAIL</p>
              <p className="h3 text-2xl mt-3 text-ink">Scrivimi</p>
              <p className="mt-2 text-ink/70">{site.email}</p>
              <p className="mt-2 text-sm text-ink/50">Risposta entro 24 ore.</p>
              <a href={`mailto:${site.email}`} className="btn-ghost mt-6 inline-flex">
                Scrivi una email →
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="border border-line rounded-2xl p-8 h-full">
              <p className="text-xs tracking-widest font-semibold text-forest">SUI SOCIAL</p>
              <p className="h3 text-2xl mt-3 text-ink">Seguici</p>
              <p className="mt-4 flex items-center gap-4 text-ink/70">
                <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  LinkedIn →
                </a>
              </p>
              <p className="mt-2 flex items-center gap-4 text-ink/70">
                <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-forest">
                  Instagram →
                </a>
              </p>
              <p className="mt-3 text-sm text-ink/50">Messaggio diretto sempre aperto.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- QUIZ (PRE-CALL) ---------- */}
      <section className="max-w-edge mx-auto px-6 pb-6">
        <Reveal>
          <div className="border border-line rounded-2xl p-8 sm:p-10 bg-paper-dim flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <p className="text-xs tracking-widest font-semibold text-forest">PRIMA DI PRENOTARE UNA CALL</p>
              <h3 className="h3 text-xl md:text-2xl mt-2 text-ink">Valuta il tuo caso digitale.</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed max-w-lg">
                Rispondi a 5 domande, ricevi subito una proposta preliminare con i servizi consigliati
                per la tua attività. Poi, se ti interessa, prenoti la call per approfondire.
              </p>
            </div>
            <Link href="/quiz?fresh=1" className="btn-solid shrink-0">
              <GrapeIcon className="w-4 h-4" />
              Valuta il tuo caso →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- FORM CONTATTI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <Reveal>
              <div>
                <p className="eyebrow">Scrivici</p>
                <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-md text-ink">
                  Raccontami il tuo progetto.
                </h2>
                <ul className="mt-6 space-y-2 text-sm text-ink/70">
                  <li>✓ Tempo di risposta: entro 24 ore</li>
                  <li>✓ Consulenza iniziale: gratuita</li>
                  <li>✓ Zero impegno: se non è per te, te lo dico sinceramente</li>
                </ul>
              </div>
            </Reveal>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIANZE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa dicono di noi</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Testimonianze.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-5">
          {contactTestimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div className="border-l-2 border-forest bg-paper-dim rounded-r-xl p-6 h-full">
                <p className="text-brass tracking-wide">★★★★★</p>
                <p className="mt-3 text-ink/75 leading-relaxed">“{t.quote}”</p>
                <p className="mt-4 font-semibold text-ink text-sm">{t.name}</p>
                <p className="text-xs text-forest">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- NUMERI ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/10 border border-paper/10 rounded-2xl overflow-hidden">
            {proofStats.map(([n, l]) => (
              <div key={l} className="bg-ink p-8 text-center">
                <p className="display text-4xl text-brass">
                  <StatNumber value={n} />
                </p>
                <p className="text-xs text-paper/55 mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TEAM ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Il team</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Con chi parlerai. Non un bot.</h2>
        </Reveal>
        <div className="mt-14 grid sm:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="text-center border border-line rounded-2xl p-8 h-full hover:shadow-md transition-shadow">
                <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border border-line">
                  <Image src={m.photo} alt={m.name} fill className="object-cover" />
                </div>
                <h3 className="h3 text-lg mt-5 text-ink">{m.name}</h3>
                <p className="text-xs text-forest font-semibold mt-1">{m.role}</p>
                <p className="mt-3 text-sm text-ink/60 leading-relaxed">{m.body}</p>
                {m.name === site.founder && (
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs font-semibold text-forest hover:text-brass"
                  >
                    LinkedIn →
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- COME SARÀ LA CALL ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa aspettarti</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Come sarà la call.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-3xl">
            {[
              ['0–5 min', 'Ci presentiamo. Mi racconti della tua azienda e di cosa ti occupi.'],
              ['5–15 min', 'Parliamo dei tuoi obiettivi: cosa vuoi ottenere, cosa non funziona oggi.'],
              ['15–25 min', 'Ti propongo 1-2 direzioni concrete basate su quello che mi hai detto.'],
              ['25–30 min', 'Domande, chiarimenti, e ti dico se e come posso aiutarti. Nessuna pressione di vendita.'],
            ].map(([range, body], i) => (
              <Reveal key={range} delay={i * 70}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <p className="text-xs font-semibold tracking-widest text-forest">{range}</p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- GARANZIE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Le nostre promesse</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Come lavoriamo con te.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="border-l-2 border-forest pl-6 h-full">
                <h3 className="h3 text-lg text-ink">{g.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- MAPPA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Dove siamo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Vieni a trovarci, su appuntamento.</h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-[1.3fr_1fr] gap-6 items-stretch">
            <div className="rounded-2xl overflow-hidden border border-line h-72 md:h-auto">
              <iframe
                title="Mappa MG Solutions"
                src={mapsEmbedSrc}
                className="w-full h-full min-h-[280px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="h3 text-xl text-ink">MG Solutions</p>
              <p className="mt-2 text-ink/70">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city} ({site.address.province})
              </p>
              <p className="mt-3 text-sm text-ink/50">
                Solo su appuntamento: scrivimi prima per organizzarci.
              </p>
              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost mt-6 inline-flex w-fit"
              >
                Direzioni →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ contatti.</h2>
        </Reveal>
        <div className="mt-10">
          <FAQAccordion items={contactFaqs} />
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-brass">Prossimo passo</p>
          <h2 className="display text-4xl md:text-5xl mt-5 max-w-2xl mx-auto leading-tight">
            Pronto a parlare del tuo progetto?
          </h2>
          <p className="mt-5 text-paper/75 max-w-xl mx-auto">
            30 minuti. Gratuito. Zero impegno. Capirai esattamente dove puoi crescere.
          </p>
          <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper mt-9">
            <GrapeIcon className="w-4 h-4" />
            Prenota la call adesso →
          </Link>
          <p className="mt-6 text-xs text-paper/50">
            ✓ Conferma email automatica · ✓ Promemoria prima dell’appuntamento · ✓ Slot limitati
          </p>
        </div>
      </section>
    </>
  );
}
