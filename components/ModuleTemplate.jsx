import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import { businessSuiteModules, getBusinessSuiteModule } from '@/lib/data';
import {
  ChatIcon,
  TargetIcon,
  CalendarIcon,
  ClockIcon,
  ChartIcon,
  AIIcon,
  PaletteIcon,
  LockIcon,
  CompassIcon,
  RefreshIcon,
  BookIcon,
  CartIcon,
  PinIcon,
  GearIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

const iconMap = { chat: ChatIcon, target: TargetIcon, calendar: CalendarIcon, clock: ClockIcon, chart: ChartIcon };

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

export default function ModuleTemplate({ module: mod }) {
  const Icon = iconMap[mod.icon] || TargetIcon;
  const others = mod.integratesWith
    .map((slug) => getBusinessSuiteModule(slug))
    .filter(Boolean);
  const otherModules = businessSuiteModules.filter((m) => m.slug !== mod.slug);
  const isAvailable = mod.status === 'early-access';
  const ctaLabel = isAvailable ? 'Richiedi accesso anticipato' : 'Segui lo sviluppo';
  const ctaHref = `/contatti?interesse=software&modulo=${mod.slug}`;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-ink text-paper bg-cover bg-center"
        style={mod.heroImage ? { backgroundImage: `url(${mod.heroImage})` } : undefined}
      >
        {mod.heroImage && (
          <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />
        )}
        <div className="relative max-w-edge mx-auto px-6 pt-32 pb-20">
          <Link href="/software" className="text-xs text-paper/70 hover:underline">
            ← MG Business Suite
          </Link>
          <div className="flex items-center gap-4 mt-6">
            <Icon className="w-9 h-9 text-brass shrink-0" />
            <h1 className="display text-3xl md:text-5xl leading-[1.1]">{mod.name}</h1>
            <span
              className={`shrink-0 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1 ${
                isAvailable ? 'bg-brass text-ink' : 'bg-paper/15 text-paper/80'
              }`}
            >
              {mod.statusLabel}
            </span>
          </div>
          <p className="mt-5 text-lg text-paper/85 max-w-2xl leading-relaxed">{mod.tagline}</p>
          <p className="mt-3 text-sm text-paper/60 max-w-2xl leading-relaxed">
            {isAvailable
              ? 'Questo modulo è reale ed è attivabile oggi, in accesso anticipato con le prime aziende partner.'
              : 'Questo modulo è in roadmap: descrive la direzione di sviluppo prevista e non è ancora attivabile.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={ctaHref} className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              {ctaLabel} →
            </Link>
            <Link href="/prenota-call" className="btn-ghost border-paper/30 text-paper hover:bg-paper/10">
              Parliamone in call
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- NARRATIVA ---------- */}
      {mod.narrative && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa fa davvero</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">{mod.whatItDoes}</h2>
          </Reveal>
          <div className="mt-8 max-w-2xl space-y-5">
            {mod.narrative.map((p, i) => (
              <Reveal key={p} delay={i * 60}>
                <p className="text-ink/75 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          {mod.channels && (
            <div className="mt-10">
              <p className="text-xs font-semibold tracking-widest text-forest uppercase">Canali supportati</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {mod.channels.map((c) => (
                  <span key={c} className="text-xs text-ink/70 border border-line rounded-full px-3 py-1.5">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* ---------- COSA COMPRENDE (feature cards) ---------- */}
      {mod.featureCards && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">Cosa comprende</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Sei funzioni, un unico software.</h2>
            </Reveal>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mod.featureCards.map((f, i) => {
                const FIcon = featureIconMap[f.icon] || TargetIcon;
                return (
                  <Reveal key={f.title} delay={i * 60}>
                    <div className="h-full border border-line rounded-xl p-6 bg-paper">
                      <FIcon className="w-6 h-6 text-forest" />
                      <h3 className="h3 text-base mt-4 text-ink">{f.title}</h3>
                      <p className="mt-2 text-sm text-ink/65 leading-relaxed">{f.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ---------- COME FUNZIONA ---------- */}
      {mod.flow && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Il flusso, passo dopo passo.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {mod.flow.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="relative h-full border border-line rounded-xl p-6 bg-paper">
                  <span className="text-3xl font-bold text-brass/70">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h3 text-base mt-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------- VANTAGGI BUSINESS ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">{isAvailable ? 'Vantaggi attesi' : 'Vantaggi previsti'}</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              {isAvailable ? 'Perché puntiamo su questo modulo.' : 'Perché lo stiamo costruendo.'}
            </h2>
            <p className="mt-4 text-sm text-ink/50 max-w-2xl">
              {isAvailable
                ? 'Obiettivi del modulo in accesso anticipato: verranno confermati o corretti con i primi utilizzi reali.'
                : 'Obiettivi di progettazione del modulo in roadmap, non risultati misurati: il modulo non è ancora disponibile.'}
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {mod.benefits.map((b) => (
              <div key={b.title}>
                <p className="font-semibold text-ink">{b.title}</p>
                <p className="mt-1.5 text-sm text-ink/65 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      {mod.caseStudy && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">{isAvailable ? 'Esempio illustrativo' : 'Scenario futuro'}</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">{mod.caseStudy.title}</h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{mod.caseStudy.narrative}</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
            {mod.caseStudy.stats.map(([value, label]) => (
              <div key={label} className="border border-line rounded-xl px-5 py-4 bg-paper-dim">
                <p className="text-2xl font-bold text-forest">{value}</p>
                <p className="mt-1 text-xs text-ink/60 leading-snug">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs italic text-ink/45">
            {isAvailable
              ? 'Esempio illustrativo di utilizzo del software, non un cliente reale.'
              : 'Scenario ipotetico: il modulo è in roadmap e non è ancora disponibile. Non riflette un cliente o un utilizzo reale.'}
          </p>
        </section>
      )}

      {/* ---------- CHI LO USA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Chi lo usa</p>
            <p className="mt-4 text-ink/75 max-w-2xl leading-relaxed">{mod.targetAudience}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------- COSA NON INCLUDIAMO (solo Staff & Operations) ---------- */}
      {mod.excludedForCompliance && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa non includiamo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Per evitare complessità normativa.</h2>
          </Reveal>
          <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-2xl">
            {mod.excludedForCompliance.map((e) => (
              <li key={e} className="flex gap-3 text-sm text-ink/70">
                <span className="text-ink/30 shrink-0">✗</span> {e}
              </li>
            ))}
          </ul>
          {mod.excludedNote && <p className="mt-5 text-xs italic text-ink/50 max-w-2xl">{mod.excludedNote}</p>}
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      {mod.faqs && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">Domande su questo software</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ.</h2>
            </Reveal>
            <div className="mt-10">
              <FAQAccordion items={mod.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* ---------- PRICING ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Prezzo</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
            {isAvailable ? 'Non ancora un listino: lo definiamo insieme a te.' : 'Non ancora attivabile, quindi nessun prezzo.'}
          </h2>
        </Reveal>
        <div className="mt-8 border border-line rounded-xl px-6 py-5 bg-paper max-w-2xl">
          <p className="text-sm text-ink/75 leading-relaxed">{mod.pricing.note}</p>
        </div>
        <div className="mt-6">
          <Link href="/software/pricing" className="text-sm font-semibold text-forest hover:text-brass">
            Vedi la struttura dei piani previsti →
          </Link>
        </div>
      </section>

      {/* ---------- ALTRI MODULI ---------- */}
      {others.length > 0 && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">Si integra con</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Funziona ancora meglio insieme.</h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {others.map((o) => {
                const OIcon = iconMap[o.icon] || TargetIcon;
                return (
                  <Link
                    key={o.slug}
                    href={`/software/${o.slug}`}
                    className="group block border border-line rounded-xl p-6 bg-paper hover:shadow-lg transition-shadow"
                  >
                    <OIcon className="w-6 h-6 text-forest" />
                    <h3 className="h3 text-lg mt-3 text-ink">{o.name}</h3>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{o.tagline}</p>
                    <span className="mt-3 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                      Scopri →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ---------- TUTTI I MODULI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">MG Business Suite</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Gli altri software.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {otherModules
            .filter((m) => !others.some((o) => o.slug === m.slug))
            .map((m) => {
              const MIcon = iconMap[m.icon] || TargetIcon;
              return (
                <Link
                  key={m.slug}
                  href={`/software/${m.slug}`}
                  className="group block border border-line rounded-xl p-5 bg-paper hover:shadow-lg transition-shadow"
                >
                  <MIcon className="w-6 h-6 text-forest" />
                  <p className="h3 text-sm mt-3 text-ink">{m.name}</p>
                </Link>
              );
            })}
        </div>
      </section>

      <CTA
        title={isAvailable ? 'Vuoi provarlo per primo?' : 'Vuoi essere aggiornato su questo modulo?'}
        sub={
          isAvailable
            ? `Richiedi accesso anticipato a ${mod.name} e definiamo insieme condizioni e tempi di attivazione.`
            : `${mod.name} è in roadmap. Raccontaci le tue esigenze: aiuta a definire le priorità di sviluppo.`
        }
        href={ctaHref}
        ctaLabel={ctaLabel}
      />

      <ServiceArea pageType="software" />
    </>
  );
}
