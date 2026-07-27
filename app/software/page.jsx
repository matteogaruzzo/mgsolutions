import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import {
  softwareFamilies,
  softwareUpcoming,
  softwareOngoing,
  testimonials,
} from '@/lib/data';
import { AIIcon, CompassIcon, GearIcon, TargetIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import PricingTiers from '@/components/pricing/PricingTiers';
import PricingComparison from '@/components/pricing/PricingComparison';
import SoftwareConfigurator from '@/components/pricing/SoftwareConfigurator';
import PricingSupportTier from '@/components/pricing/PricingSupportTier';
import PricingFAQ from '@/components/pricing/PricingFAQ';
import PricingCTA from '@/components/pricing/PricingCTA';

const PAGE = {
  title: "Agenti AI e software di automazione per l'agroalimentare",
  description:
    'Agenti AI che rispondono ai clienti, automatizzano preventivi, gestiscono reputation. Software costruiti su processi reali, non su template.',
  path: '/software',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: [
    'software agroalimentare',
    'agenti ai commerciali',
    'automazione processi business',
    'knowledge base ai',
    'software preventivi',
  ],
});

const iconMap = { ai: AIIcon, compass: CompassIcon, gear: GearIcon, target: TargetIcon };

const softwareFaqs = [
  {
    q: 'Come si aggiorna? Devo scaricare qualcosa?',
    a: 'No. Il software vive online, come Gmail o WhatsApp — non come un programma da installare sul computer. Quando facciamo un aggiornamento lo ricevi automaticamente, senza fare nulla.',
  },
  {
    q: 'Che differenza c’è tra le quattro famiglie?',
    a: 'Coprono momenti diversi del rapporto con il cliente: primo contatto (Agente Commerciale), assistenza (Assistente Clienti), documenti e preventivi (Automazione Preventivi), post-vendita (Reputation e Follow-up). Puoi partire da una e aggiungerne altre nel tempo.',
  },
];

const relevantTestimonials = testimonials.filter((t) =>
  ['Andrea', 'Giulia'].includes(t.name)
);

export default function Software() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-14">
        <p className="eyebrow">Prodotti · Software</p>
        <h1 className="display text-5xl md:text-6xl mt-5 max-w-3xl leading-[1.05]">
          Software che lavorano per te mentre dormi.
        </h1>
        <p className="mt-8 text-lg text-ink/70 max-w-2xl leading-relaxed">
          Non è un tool da imparare: è un agente virtuale che si occupa di compiti ripetitivi —
          email, prenotazioni, preventivi, follow-up — senza sbagliare, 24 ore su 24. Configurato
          sul tuo processo reale, non su un piano fisso.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/prenota-call" className="btn-solid">
            <GrapeIcon className="w-4 h-4" />
            Richiedi una valutazione →
          </Link>
          <Link href="#famiglie" className="btn-ghost">
            Scopri i 4 software
          </Link>
        </div>
      </section>

      {/* ---------- COME FUNZIONA DAVVERO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow">Come funziona davvero</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              La semplicità dietro la complessità.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-ink/75 leading-relaxed">
              <p>Immagina di assumere una persona nuova nel team.</p>
              <p>
                Il primo giorno le spieghi: quali email ricevi, come rispondere, quali clienti sono
                "buoni", come si prenota una call. Dopo il setup iniziale, questa persona lavora da
                sola. 24 ore su 24. Senza ferie, senza errori di distrazione.
              </p>
              <p>Questo è, in pratica, un nostro software.</p>
              <p>
                Non è magia: è un agente AI collegato ai tuoi strumenti (email, calendario, CRM) e
                configurato sui tuoi processi reali. Il modello AI è il "cervello", i tuoi strumenti
                sono il "corpo".
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- I 4 SOFTWARE ---------- */}
      <section id="famiglie" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">I 4 software</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            Quale serve al tuo business?
          </h2>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 gap-6">
          {softwareFamilies.map((f, i) => {
            const Icon = iconMap[f.icon] || AIIcon;
            return (
              <Reveal key={f.slug} delay={i * 60}>
                <Link
                  href={`/software/${f.slug}`}
                  className="group block h-full rounded-2xl p-7 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <Icon className="w-8 h-8 text-forest" />
                  <h3 className="h3 text-xl mt-4 text-ink">{f.name}</h3>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">{f.pitch}</p>
                  <span className="mt-5 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                    Scopri →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-ink/50 max-w-2xl">
          * Il checkout automatico via Stripe è in arrivo: per attivare un piano oggi, prenota una
          call.
        </p>
      </section>

      {/* ---------- PRICING ---------- */}
      <section id="pricing" className="max-w-edge mx-auto px-6 py-24 scroll-mt-24">
        <Reveal>
          <p className="eyebrow">Piani</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Scegli il tuo piano.</h2>
          <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
            Niente setup fisso, solo quello che usi. Fatturazione mensile.
          </p>
        </Reveal>

        <div className="mt-14">
          <PricingTiers />
        </div>

        <div className="mt-20">
          <PricingComparison />
        </div>

        <div className="mt-20">
          <SoftwareConfigurator />
        </div>

        <div className="mt-16">
          <PricingSupportTier />
        </div>

        <div className="mt-20">
          <PricingFAQ />
        </div>
      </section>

      <PricingCTA />

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande comuni</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Risposte semplici.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion items={softwareFaqs} />
          </div>
        </div>
      </section>

      {/* ---------- ROADMAP ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Non è finito, questo è l’inizio</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4">{softwareUpcoming.title}</h2>
            <p className="mt-5 text-paper/70 max-w-2xl leading-relaxed">{softwareUpcoming.body}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- SOCIAL PROOF ---------- */}
      {relevantTestimonials.length > 0 && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Chi lo sta usando</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Esempi illustrativi dai case study.
            </h2>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel items={relevantTestimonials} />
          </div>
        </section>
      )}

      {/* ---------- GESTIONE CONTINUATIVA (trasparenza) ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Siamo trasparenti</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">{softwareOngoing.title}</h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{softwareOngoing.intro}</p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {softwareOngoing.items.map((item) => (
              <div key={item} className="bg-paper p-6">
                <p className="text-sm text-ink/75">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Pronto a parlarne?"
        sub="Valutazione gratuita del tuo processo. Ti diciamo con onestà cosa possiamo configurare oggi, cosa richiede sviluppo su misura e quale piano si adatta meglio."
      />
    </>
  );
}
