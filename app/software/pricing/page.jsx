import Link from 'next/link';
import Reveal from '@/components/Reveal';
import PricingTiers from '@/components/pricing/PricingTiers';
import PricingComparison from '@/components/pricing/PricingComparison';
import FAQAccordion from '@/components/FAQAccordion';
import CTA from '@/components/CTA';
import { businessSuiteFaqs } from '@/lib/data';
import { SOFTWARE_PLANS, SOFTWARE_PLAN_ORDER } from '@/lib/config/software-plans';
import { pageMetadata, webPageSchema, faqPageSchema, productSchema } from '@/lib/seo';
import { UsersIcon, BuildingIcon, CoinIcon, GearIcon } from '@/components/icons/ServiceIcons';

const PAGE = {
  title: 'MG Business Suite: piani e prezzi',
  description:
    'MG Essenziale €89/mese, Crescita €179/mese, Ecosistema €249/mese. Confronta moduli, utenti, sedi e integrazioni incluse in ogni piano di MG Business Suite.',
  path: '/software/pricing',
};

export const metadata = pageMetadata({
  ...PAGE,
  keywords: ['prezzi mg business suite', 'piani mg business suite', 'crm agroalimentare prezzo'],
});

const activationSteps = [
  { icon: UsersIcon, title: 'Registrati', body: 'Email, password e nome azienda.' },
  { icon: CoinIcon, title: 'Scegli il piano', body: 'Essenziale, Crescita o Ecosistema.' },
  { icon: GearIcon, title: 'Attiva i moduli', body: 'Scegli quali moduli attivare, in base alle tue esigenze.' },
  { icon: BuildingIcon, title: 'Configura e inizia', body: 'Inviti il team, importi i dati esistenti, inizi a usare la piattaforma.' },
];

const controlTowerFaqs = [
  {
    q: 'Perché Control Tower è incluso solo in Ecosistema?',
    a: 'Perché non è un modulo indipendente: aggrega i dati degli altri moduli attivi (Lead & Sales, Booking, Social AI, Staff & Operations). Ha senso solo quando più moduli lavorano insieme, per questo è incluso nel piano che dà accesso a tutti loro senza vincoli.',
  },
  {
    q: 'Mi basta Control Tower senza altri moduli?',
    a: 'No. Control Tower serve per aggregare i dati degli altri moduli: funziona quando hai Lead & Sales, Booking, Social AI o Staff & Operations attivi.',
  },
  {
    q: 'Gli altri moduli sono limitati in base al piano?',
    a: 'No. Lead & Sales, Social AI, Booking & Experience e Staff & Operations sono selezionabili liberamente in tutti e tre i piani. Quello che cambia tra Essenziale, Crescita ed Ecosistema è la capacità della piattaforma — utenti, sedi, integrazioni, supporto — non l’accesso ai moduli.',
  },
];

export default function SoftwarePricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productSchema({
              name: 'MG Business Suite',
              description: PAGE.description,
              path: PAGE.path,
              plans: SOFTWARE_PLAN_ORDER.map((id) => ({
                name: SOFTWARE_PLANS[id].name,
                price: SOFTWARE_PLANS[id].monthlyPrice,
              })),
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema([...businessSuiteFaqs, ...controlTowerFaqs])) }}
      />

      {/* ---------- 1. HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-16">
        <Reveal>
          <p className="eyebrow">MG Business Suite</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-3xl leading-[1.05]">
            Scegli quanti moduli attivare nella tua MG Business Suite.
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Ogni piano dà accesso agli stessi moduli operativi: scegli tu quali attivare. Quello che
            cambia è quanto puoi scalare — utenti, sedi, integrazioni e livello di supporto.
          </p>
          <p className="mt-3 text-sm text-ink/60 max-w-2xl leading-relaxed">
            Un modulo è una funzione specializzata della piattaforma, ad esempio gestione vendite,
            prenotazioni, social o personale.
          </p>
          <div className="mt-6 inline-flex items-start gap-3 max-w-2xl rounded-xl border border-primary/30 bg-primary/5 px-5 py-4">
            <span className="text-primary text-lg leading-none">●</span>
            <p className="text-sm text-ink/80 leading-relaxed">
              <span className="font-semibold text-primary">
                Tutti i piani includono una prova gratuita (30-60 giorni).
              </span>{' '}
              Nessuna carta di credito richiesta.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ---------- 2. 3 CARD PRICING ---------- */}
      <section className="max-w-edge mx-auto px-6 py-16">
        <PricingTiers />
      </section>

      {/* ---------- 3. QUANTO COSTA DAVVERO? ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-center">Quanto costa davvero?</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink text-center max-w-2xl mx-auto">
              Investimento minimo. Ritorno che puoi misurare fin da mese 1.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {SOFTWARE_PLAN_ORDER.map((id, i) => {
              const plan = SOFTWARE_PLANS[id];
              const perDay = (plan.monthlyPrice / 30).toFixed(2).replace('.', ',');
              return (
                <Reveal key={id} delay={i * 60}>
                  <div className="border border-line rounded-2xl p-6 bg-paper text-center h-full">
                    <p className="text-xs font-semibold tracking-widest text-forest uppercase">{plan.name}</p>
                    <p className="mt-3 text-2xl font-bold text-primary">€{perDay}<span className="text-sm text-ink/50">/giorno</span></p>
                    <p className="mt-2 text-xs text-ink/50">€{plan.monthlyPrice}/mese</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- 4. TABELLA COMPARATIVA ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Confronto</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Tutte le differenze, in un colpo d’occhio.</h2>
        </Reveal>
        <div className="mt-10">
          <PricingComparison />
        </div>
      </section>

      {/* ---------- 5. ATTIVAZIONE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona l’attivazione</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Dalla registrazione al primo modulo attivo.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activationSteps.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="relative h-full border border-line rounded-xl p-6 bg-paper">
                  <span className="text-3xl font-bold text-brass/70">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h3 text-base mt-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 6. FAQ CONTROL TOWER ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">MG Control Tower</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Perché è solo nel piano Ecosistema.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <FAQAccordion items={controlTowerFaqs} />
        </div>
      </section>

      {/* ---------- 7. FAQ GENERICHE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande sui piani</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Prima di iscriverti.</h2>
          </Reveal>
          <div className="mt-10 max-w-2xl">
            <FAQAccordion items={businessSuiteFaqs} />
          </div>
        </div>
      </section>

      {/* ---------- 8. CTA FINALE ---------- */}
      <CTA
        title="Non scegliere il piano in base al numero più alto."
        sub="Parti dal problema operativo da risolvere. Ti aiutiamo a capire quale modulo serve davvero e quali integrazioni sono necessarie."
        href="/contatti?interesse=mg-business-suite"
        ctaLabel="Trova il piano adatto"
      />
    </>
  );
}
