import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import { businessSuiteModules, businessSuitePackages, getBusinessSuiteModule } from '@/lib/data';
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

function packageName(id) {
  return businessSuitePackages.find((p) => p.id === id)?.name || id;
}

export default function ModuleTemplate({ module: mod }) {
  const Icon = iconMap[mod.icon] || TargetIcon;
  const others = mod.integratesWith
    .map((slug) => getBusinessSuiteModule(slug))
    .filter(Boolean);
  const otherModules = businessSuiteModules.filter((m) => m.slug !== mod.slug);

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
          </div>
          <p className="mt-5 text-lg text-paper/85 max-w-2xl leading-relaxed">{mod.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/software/pricing" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Scopri il tuo pacchetto →
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
            <p className="eyebrow">Vantaggi business</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Perché conviene davvero.</h2>
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
            <p className="eyebrow">Esempio illustrativo</p>
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
            Esempio illustrativo di utilizzo del software, non un cliente reale.
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
          <p className="eyebrow">Pricing</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Quanto costa e cosa include.</h2>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-line rounded-xl px-5 py-4 bg-paper">
            <p className="text-xs text-ink/50">Canone</p>
            <p className="mt-1 font-semibold text-ink">
              {mod.pricing.monthly
                ? `€${mod.pricing.monthly}/mese`
                : `Incluso in ${mod.pricing.includedInPackages.map(packageName).join(' e ')}`}
            </p>
          </div>
          <div className="border border-line rounded-xl px-5 py-4 bg-paper">
            <p className="text-xs text-ink/50">Attivazione</p>
            <p className="mt-1 font-semibold text-ink">{mod.pricing.activation}</p>
          </div>
          <div className="border border-line rounded-xl px-5 py-4 bg-paper sm:col-span-2 md:col-span-2">
            <p className="text-xs text-ink/50">Limiti inclusi</p>
            <p className="mt-1 font-semibold text-ink">{mod.pricing.limits}</p>
          </div>
        </div>
        {mod.pricing.extras.length > 0 && (
          <div className="mt-6">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">Extra disponibili</p>
            <ul className="mt-3 space-y-1.5">
              {mod.pricing.extras.map((e) => (
                <li key={e} className="text-sm text-ink/70">
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
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
        title="Scopri il tuo pacchetto"
        sub={`Confronta i 3 pacchetti MG Business Suite e trova quello giusto per ${mod.name}.`}
        href="/software/pricing"
        ctaLabel="Scopri il tuo pacchetto"
      />

      <ServiceArea pageType="software" />
    </>
  );
}
