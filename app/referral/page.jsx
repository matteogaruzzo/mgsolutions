import Link from 'next/link';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import { site } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';
import {
  HandshakeIcon,
  ChatIcon,
  GiftIcon,
  BuildingIcon,
  ScaleIcon,
  MegaphoneIcon,
  UsersIcon,
} from '@/components/icons/ServiceIcons';
import { pageMetadata, webPageSchema, faqPageSchema, howToSchema } from '@/lib/seo';

const PAGE = {
  title: 'Referral Program: Guadagna €200 per ogni azienda',
  description:
    'Presenta una cantina, un oleificio o un agriturismo a MG Solutions e guadagna €200. Semplice, veloce, senza limiti. Prenota una call e comincia.',
  path: '/referral',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'referral program agroalimentare',
    'guadagna segnalando clienti',
    'programma segnalazioni mg solutions',
  ],
  image: '/referral/opengraph-image',
});

const steps = [
  {
    n: '01',
    Icon: HandshakeIcon,
    title: 'Presenti un’azienda',
    body: 'Conosci qualcuno che potrebbe scalare online? Mandaci nome, azienda e telefono del referente.',
    cta: { label: 'Vai al modulo', href: '/contatti' },
  },
  {
    n: '02',
    Icon: ChatIcon,
    title: 'Parliamo con loro',
    body: 'Prenotano una call con il nostro team. Analizziamo il loro caso e proponiamo una soluzione su misura.',
    cta: null,
  },
  {
    n: '03',
    Icon: GiftIcon,
    title: 'Guadagni',
    body: 'Se firmano un progetto con MG Solutions, ricevi €200 via bonifico. Sempre, senza limite.',
    cta: { label: 'Comincia ora', href: '/prenota-call' },
  },
];

const audiences = [
  {
    Icon: BuildingIcon,
    title: 'Consulenti & Agenti Immobiliari',
    body: 'Conosci proprietari di aziende agroalimentari? Hanno bisogno di scalare online. Tu li presenti, guadagni €200.',
  },
  {
    Icon: ScaleIcon,
    title: 'Commercialisti & Avvocati',
    body: 'I tuoi clienti agroalimentari stanno perdendo opportunità di vendita online. Presentali a MG Solutions, guadagni €200 a cliente.',
  },
  {
    Icon: MegaphoneIcon,
    title: 'Agenzie Marketing',
    body: 'Non fate sviluppo software? Perfetto. Portateci i vostri clienti per software e automazione: €200 per referral.',
  },
  {
    Icon: UsersIcon,
    title: 'Chiunque conosca aziende',
    body: 'Amici, familiari, conoscenti che gestiscono una cantina, un oleificio, un agriturismo. Presentali e guadagna.',
  },
];

const referralFaqs = [
  {
    q: 'Come ricevo i €200?',
    a: 'Quando l’azienda che hai presentato firma un progetto con MG Solutions, ricevi un’email di conferma e i €200 arrivano via bonifico entro 7 giorni lavorativi. Niente burocrazia.',
  },
  {
    q: 'Quanti €200 posso guadagnare?',
    a: 'Nessun limite. Presenta 10 aziende e ricevi €2.000. Presentane 100 e ricevi €20.000. Più aziende presenti, più guadagni.',
  },
  {
    q: 'L’azienda che presento deve essere in Italia?',
    a: 'Per ora sì, siamo focalizzati sull’agroalimentare italiano. Ma se conosci cantine, oleifici o agriturismi all’estero interessati, contattaci comunque.',
  },
  {
    q: 'E se conosco bene l’azienda, non se ne approfitta qualcuno?',
    a: 'Non funziona così. Tu presenti, noi valutiamo, loro decidono. Se firmano con noi, tu guadagni. Vogliamo che scelgano davvero MG Solutions, non che vengano spinti.',
  },
  {
    q: 'Posso promuovere il programma su LinkedIn o via email?',
    a: 'Sì, perfetto. Puoi condividere il link /referral ovunque. Se vuoi materiale promozionale (loghi, descrizioni, esempio email), contattaci.',
  },
  {
    q: 'Cosa succede se l’azienda non attiva il software?',
    a: 'Nessun guadagno. Paghiamo solo se il cliente firma un pacchetto. Questo allinea gli interessi: vogliamo che la scelta sia reale, non forzata.',
  },
  {
    q: 'Come mi tenete aggiornato sui miei referral?',
    a: 'Dopo la prima call con il cliente ti mandiamo un’email con lo status. Quando attivano, ricevi conferma. Puoi anche chiedere aggiornamenti via call.',
  },
];

export default function ReferralPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(referralFaqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            howToSchema({
              name: 'Come funziona il Referral Program di MG Solutions',
              description: PAGE.description,
              steps,
            })
          ),
        }}
      />

      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-cover bg-center text-paper"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(10,30,18,0.55) 0%, rgba(10,30,18,0.82) 100%), url(/images/hero/home-hero.png)',
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-20 text-center">
          <Reveal>
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-paper/15">
              <HandshakeIcon className="w-7 h-7" />
            </span>
            <p className="eyebrow text-paper/70 mt-6">Referral Program</p>
            <h1 className="display text-4xl md:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
              Guadagna €200 per ogni azienda che presenti.
            </h1>
            <p className="mt-5 text-lg text-paper/85 max-w-xl mx-auto leading-relaxed">
              Conosci una cantina, un oleificio o un agriturismo che potrebbe scalare
              digitalmente? Portacelo e guadagna. Semplice.
            </p>
            <p className="mt-2 text-sm text-paper/60">
              Niente form complessi. Una call e basta.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/prenota-call" className="btn-solid bg-paper text-forest hover:bg-paper/90">
                <GrapeIcon className="w-4 h-4" />
                Presenta un’azienda →
              </Link>
              <a href="#come-funziona" className="btn-ghost border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-forest">
                Scopri come funziona ↓
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section id="come-funziona" className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Come funziona</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">
            3 step. 5 minuti. €200 in tasca.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          {steps.map(({ n, Icon, title, body, cta }, i) => (
            <Reveal key={n} delay={i * 80}>
              <div className="bg-paper border border-line rounded-2xl p-7 h-full flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-forest/10">
                    <Icon className="w-5 h-5 text-forest" />
                  </span>
                  <span className="font-mono text-xs text-ink/35">{n}</span>
                </div>
                <h3 className="h3 text-lg mt-5 text-ink">{title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed flex-1">{body}</p>
                {cta && (
                  <Link href={cta.href} className="mt-5 text-sm font-semibold text-forest hover:text-brass">
                    {cta.label} →
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CHI PUÒ GUADAGNARE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Chi può guadagnare</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Perfetto per...</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5">
            {audiences.map(({ Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 70}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full flex gap-4">
                  <Icon className="w-6 h-6 text-forest shrink-0 mt-0.5" />
                  <div>
                    <h3 className="h3 text-base text-ink">{title}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow text-center">Domande frequenti</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Dubbi? Risolti.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl mx-auto">
          <FAQAccordion items={referralFaqs} />
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Chi guadagna già</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink text-center">Cosa dicono di noi.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <Reveal>
              <div className="border-l-2 border-forest bg-paper rounded-r-lg p-6 h-full">
                <p className="text-sm text-ink/75 leading-relaxed">
                  “Ho presentato 3 cantine in 2 mesi. Guadagno €600 facendo quello che
                  faccio già: parlo con imprenditori di vino. Non poteva essere più
                  semplice.”
                </p>
                <p className="mt-4 text-xs font-semibold text-ink">Marco D.</p>
                <p className="text-[11px] text-forest">Consulente Commerciale, Toscana</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-l-2 border-forest bg-paper rounded-r-lg p-6 h-full">
                <p className="text-sm text-ink/75 leading-relaxed">
                  “Perfetto per agenzie come la nostra che non fanno sviluppo web.
                  Portiamo i clienti a MG Solutions per software e automazione, loro
                  ottengono risultati, noi otteniamo €200. Win-win-win.”
                </p>
                <p className="mt-4 text-xs font-semibold text-ink">Silvia M.</p>
                <p className="text-[11px] text-forest">Agenzia Marketing Digitale, Piemonte</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section
        className="text-paper"
        style={{ background: 'linear-gradient(135deg, #00713a 0%, #008b47 55%, #00c853 100%)' }}
      >
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-paper/70">Prossimo passo</p>
          <h2 className="display text-3xl md:text-4xl mt-5 max-w-xl mx-auto leading-tight">
            Pronto a guadagnare?
          </h2>
          <p className="mt-4 text-paper/80 max-w-md mx-auto">
            Niente form, niente attese. Una call con il nostro team e cominci subito.
          </p>
          <Link href="/prenota-call" className="btn-solid bg-paper text-forest hover:bg-paper/90 mt-9">
            <GrapeIcon className="w-4 h-4" />
            Prenota una call referral →
          </Link>
          <p className="mt-6 text-xs text-paper/60">
            Oppure invia il nome di un’azienda direttamente a{' '}
            <a href={`mailto:${site.email}?subject=Referral`} className="underline hover:text-paper">
              {site.email}
            </a>{' '}
            (oggetto: &ldquo;Referral [Nome Azienda]&rdquo;)
          </p>
        </div>
      </section>

      <ServiceArea pageType="referral" />
    </>
  );
}
