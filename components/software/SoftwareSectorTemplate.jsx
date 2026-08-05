import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import { businessSuiteModules, getCaseStudy, testimonials } from '@/lib/data';
import { SOFTWARE_PLANS, SOFTWARE_PLAN_ORDER } from '@/lib/config/software-plans';
import {
  ChatIcon,
  TargetIcon,
  CalendarIcon,
  ClockIcon,
  ChartIcon,
  AIIcon,
  CompassIcon,
  RefreshIcon,
  BookIcon,
  PaletteIcon,
  LockIcon,
  CartIcon,
  PinIcon,
  GearIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

const moduleIconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

const featureIconMap = {
  ai: AIIcon,
  calendar: CalendarIcon,
  palette: PaletteIcon,
  lock: LockIcon,
  compass: CompassIcon,
  chart: ChartIcon,
  target: TargetIcon,
  refresh: RefreshIcon,
  book: BookIcon,
  chat: ChatIcon,
  cart: CartIcon,
  pin: PinIcon,
  gear: GearIcon,
  clock: ClockIcon,
};

// Colori distintivi per settore, definiti in tailwind.config.js (wine / olio / hospitality),
// già usati dalle pagine /settori/*: li riusiamo qui per coerenza visiva invece di introdurne di nuovi.
const accentClasses = {
  wine: { text: 'text-wine-accent', border: 'border-wine-accent/30', bg: 'bg-wine-bg' },
  olio: { text: 'text-olio-accent', border: 'border-olio-accent/30', bg: 'bg-olio-bg' },
  hospitality: { text: 'text-hospitality-accent', border: 'border-hospitality-accent/30', bg: 'bg-hospitality-bg' },
};

export default function SoftwareSectorTemplate({
  eyebrow,
  breadcrumbLabel,
  h1,
  subheadline,
  accentKey = 'wine',
  todayVsSuite,
  moduleNotes,
  sizeTiers,
  caseStudySlugs,
  recommendedPlanId,
  faqs,
  blogHref,
  blogLabel,
  otherSectors,
}) {
  const accent = accentClasses[accentKey] || accentClasses.wine;
  const caseStudies = (caseStudySlugs || []).map((slug) => getCaseStudy(slug)).filter(Boolean);

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
        <Reveal>
          <p className={`eyebrow ${accent.text}`}>{eyebrow}</p>
          <h1 className="display text-4xl md:text-5xl mt-5 max-w-3xl leading-[1.05]">{h1}</h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl leading-relaxed">{subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid">
              <GrapeIcon className="w-4 h-4" />
              Prenota una demo — 20 minuti
            </Link>
            <Link href="/software/pricing" className="btn-ghost">
              Confronta i piani
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ---------- OGGI VS CON LA SUITE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow">La differenza concreta</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Oggi vs. con MG Business Suite.</h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="border border-line rounded-2xl p-7 h-full bg-paper">
                <p className="text-xs font-semibold tracking-widest text-ink/40 uppercase">Oggi</p>
                <ul className="mt-4 space-y-3">
                  {todayVsSuite.today.map((t) => (
                    <li key={t} className="text-sm text-ink/70 leading-relaxed">— {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className={`border ${accent.border} rounded-2xl p-7 h-full bg-paper`}>
                <p className={`text-xs font-semibold tracking-widest uppercase ${accent.text}`}>Con MG Business Suite</p>
                <ul className="mt-4 space-y-3">
                  {todayVsSuite.withSuite.map((t) => (
                    <li key={t} className="text-sm text-ink/80 leading-relaxed font-medium">— {t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- TUTTE LE FUNZIONALITÀ, PER MODULO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Tutte le funzionalità</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Come funziona ogni modulo, applicato al tuo settore.</h2>
        </Reveal>
        <div className="mt-12 space-y-10">
          {businessSuiteModules.map((m, i) => {
            const Icon = moduleIconMap[m.icon] || TargetIcon;
            const note = moduleNotes[m.slug];
            return (
              <Reveal key={m.slug} delay={i * 60}>
                <div className={`rounded-2xl border ${accent.border} ${accent.bg} p-7`}>
                  <div className="flex items-start gap-4 flex-wrap">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-paper flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${accent.text}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="h3 text-lg text-ink">{m.name}</h3>
                        <Link href={`/software/${m.slug}`} className="text-xs font-semibold text-forest hover:text-brass">
                          Pagina del modulo →
                        </Link>
                      </div>
                      {note && <p className="mt-2 text-sm text-ink/70 leading-relaxed max-w-2xl">{note}</p>}
                    </div>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {m.featureCards.map((f) => {
                      const FIcon = featureIconMap[f.icon] || TargetIcon;
                      return (
                        <div key={f.title} className="rounded-xl bg-paper border border-line p-4">
                          <FIcon className="w-4 h-4 text-ink/40" />
                          <p className="mt-2.5 text-sm font-semibold text-ink">{f.title}</p>
                          <p className="mt-1.5 text-xs text-ink/60 leading-relaxed">{f.body}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- PER DIMENSIONE AZIENDA ---------- */}
      {sizeTiers && sizeTiers.length > 0 && (
        <section className="bg-ink text-paper">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow text-brass">Per dimensione azienda</p>
              <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl">Da dove iniziare, in base a dove sei oggi.</h2>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              {sizeTiers.map((tier, i) => {
                const plan = SOFTWARE_PLANS[tier.planId];
                return (
                  <Reveal key={tier.label} delay={i * 80}>
                    <div className="border border-paper/15 rounded-2xl p-7 h-full flex flex-col">
                      <p className="font-semibold text-lg">{tier.label}</p>
                      <p className="mt-4 text-sm text-paper/70 leading-relaxed flex-1">{tier.body}</p>
                      <p className="mt-5 text-xs font-semibold tracking-widest text-brass uppercase">
                        Piano consigliato: {plan.name}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ---------- CASE STUDY + TESTIMONIAL ---------- */}
      {caseStudies.length > 0 && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">{caseStudies.length > 1 ? 'Esempi dal settore' : 'Un esempio dal settore'}</p>
            </Reveal>
            <div className={`mt-8 grid gap-6 ${caseStudies.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl'}`}>
              {caseStudies.map((caseStudy, ci) => {
                const testimonial = testimonials.find((t) => t.caseStudySlug === caseStudy.slug);
                return (
                  <Reveal key={caseStudy.slug} delay={ci * 80}>
                    <div className="border border-line rounded-2xl p-7 h-full bg-paper">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="h3 text-xl text-ink">{caseStudy.title}</h3>
                        {caseStudy.concept && (
                          <span className="text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                            CONCEPT
                          </span>
                        )}
                      </div>
                      <p className="mt-3 text-sm text-ink/65 leading-relaxed">{caseStudy.tagline}</p>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {caseStudy.stats.map(([value, label]) => (
                          <div key={label}>
                            <p className={`text-xl font-bold ${accent.text}`}>{value}</p>
                            <p className="mt-1 text-xs text-ink/60 leading-snug">{label}</p>
                          </div>
                        ))}
                      </div>
                      {testimonial && (
                        <div className="mt-6 border-l-2 border-line pl-4">
                          <p className="text-sm text-ink/75 italic leading-relaxed">“{testimonial.quote}”</p>
                          <p className="mt-2 text-xs font-semibold text-ink">{testimonial.name} · {testimonial.role}</p>
                        </div>
                      )}
                      <Link href={`/portfolio/${caseStudy.slug}`} className="mt-5 inline-block text-sm font-semibold text-forest hover:text-brass">
                        Leggi il case study completo →
                      </Link>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <p className="mt-6 text-xs italic text-ink/45 max-w-xl">
              Esempi illustrativi di cosa progettiamo per questo tipo di azienda, non clienti reali — li trovi in
              dettaglio nel nostro portfolio.
            </p>
          </div>
        </section>
      )}

      {/* ---------- PIANO CONSIGLIATO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Prezzi</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Tre piani, stessa piattaforma.</h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {SOFTWARE_PLAN_ORDER.map((id, i) => {
            const plan = SOFTWARE_PLANS[id];
            const recommended = id === recommendedPlanId;
            return (
              <Reveal key={id} delay={i * 60}>
                <div className={`border rounded-2xl p-7 h-full ${recommended ? 'border-forest bg-paper-dim shadow-md' : 'border-line'}`}>
                  {recommended && (
                    <p className="text-[10px] font-semibold tracking-widest text-forest uppercase mb-2">Consigliato per il tuo settore</p>
                  )}
                  <p className="text-xs font-semibold tracking-widest text-forest uppercase">{plan.name}</p>
                  <p className="mt-2 text-sm text-ink/60">{plan.moduleLimitLabel}</p>
                  <p className="mt-4 text-3xl font-bold text-primary">€{plan.monthlyPrice}<span className="text-base text-ink/50">/mese</span></p>
                  <p className="mt-1 text-xs text-ink/50">+ €{plan.setupPrice} attivazione · {plan.trialDays} giorni di prova</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-8">
          <Link href="/software/pricing" className="text-sm font-semibold text-forest hover:text-brass">
            Vedi il confronto completo dei piani →
          </Link>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande frequenti</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Risposte specifiche per il tuo settore.</h2>
          </Reveal>
          <div className="mt-10 max-w-2xl">
            <FAQAccordion items={faqs} />
          </div>
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
            {blogHref && (
              <Link
                href={blogHref}
                className="text-sm font-semibold text-ink/70 hover:text-forest border border-line rounded-full px-4 py-2 transition-colors"
              >
                {blogLabel} →
              </Link>
            )}
          </div>
        </section>
      )}

      {/* ---------- CTA FINALE ---------- */}
      <CTA
        title="Vedi MG Business Suite applicato al tuo caso."
        sub="20 minuti, senza impegno: ti mostriamo come i moduli si applicano al processo che oggi ti fa perdere più tempo."
        href="/prenota-call"
        ctaLabel="Prenota una demo gratuita"
      />

      <ServiceArea pageType="software" />
    </>
  );
}
