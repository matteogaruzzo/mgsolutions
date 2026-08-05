import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import ServiceArea from '@/components/geo/ServiceArea';
import FAQAccordion from '@/components/FAQAccordion';
import { businessSuiteModules, getCaseStudy } from '@/lib/data';
import { SOFTWARE_PLANS, SOFTWARE_PLAN_ORDER } from '@/lib/config/software-plans';
import {
  ChatIcon,
  TargetIcon,
  CalendarIcon,
  ClockIcon,
  ChartIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

const iconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

export default function SoftwareSectorTemplate({
  eyebrow,
  h1,
  subheadline,
  todayVsSuite,
  moduleNotes,
  caseStudySlug,
  testimonial,
  recommendedPlanId,
  faqs,
  blogHref,
  blogLabel,
  otherSectors,
}) {
  const caseStudy = getCaseStudy(caseStudySlug);
  const recommendedPlan = SOFTWARE_PLANS[recommendedPlanId];

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="max-w-edge mx-auto px-6 pt-32 pb-20">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
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
              <div className="border border-forest/30 rounded-2xl p-7 h-full bg-paper">
                <p className="text-xs font-semibold tracking-widest text-forest uppercase">Con MG Business Suite</p>
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

      {/* ---------- MODULI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">I moduli</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl text-ink">Come funziona ogni modulo, applicato al tuo settore.</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {businessSuiteModules.map((m, i) => {
            const Icon = iconMap[m.icon] || TargetIcon;
            const note = moduleNotes[m.slug];
            return (
              <Reveal key={m.slug} delay={i * 60}>
                <Link
                  href={`/software/${m.slug}`}
                  className="group block h-full rounded-2xl p-6 border border-line bg-paper transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="h3 text-lg mt-4 text-ink">{m.name}</h3>
                  {note && <p className="mt-2.5 text-sm text-ink/65 leading-relaxed">{note}</p>}
                  <span className="mt-4 inline-block text-xs font-semibold text-forest group-hover:text-brass transition-colors">
                    Scopri di più →
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      {caseStudy && (
        <section className="bg-ink text-paper">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow text-brass">Un esempio dal settore</p>
              <div className="flex items-center gap-3 flex-wrap mt-3">
                <h2 className="h2 text-2xl md:text-3xl">{caseStudy.title}</h2>
                {caseStudy.concept && (
                  <span className="text-[10px] tracking-widest border border-paper/30 rounded-full px-2 py-0.5 text-paper/60">
                    CONCEPT
                  </span>
                )}
              </div>
              <p className="mt-4 text-paper/70 max-w-2xl leading-relaxed">{caseStudy.tagline}</p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {caseStudy.stats.map(([value, label]) => (
                <div key={label} className="border border-paper/15 rounded-2xl p-6">
                  <p className="text-3xl font-bold text-brass">{value}</p>
                  <p className="mt-2 text-sm text-paper/70">{label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs italic text-paper/45 max-w-xl">
              Esempio illustrativo di cosa progettiamo per questo tipo di azienda, non un cliente reale
              — lo trovi in dettaglio nel nostro portfolio.
            </p>
            <Link href={`/portfolio/${caseStudy.slug}`} className="mt-4 inline-block text-sm font-semibold text-brass hover:text-paper">
              Leggi il case study completo →
            </Link>
          </div>
        </section>
      )}

      {/* ---------- TESTIMONIAL ---------- */}
      {testimonial && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-brass text-sm tracking-wide">★★★★★</p>
              <p className="mt-4 text-xl text-ink/80 leading-relaxed">“{testimonial.quote}”</p>
              <p className="mt-5 text-sm font-semibold text-ink">
                {testimonial.name} · {testimonial.role}
                {testimonial.concept && <span className="ml-2 text-[10px] tracking-widest text-ink/40 align-middle">CONCEPT</span>}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      {/* ---------- PIANO CONSIGLIATO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
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
                  <div className={`border rounded-2xl p-7 h-full ${recommended ? 'border-forest bg-paper shadow-md' : 'border-line'}`}>
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
        </div>
      </section>

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
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-16">
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
