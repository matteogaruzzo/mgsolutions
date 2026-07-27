import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import StatNumber from '@/components/StatNumber';
import { caseStudies, getCaseStudy, testimonials, metodoSteps, techRationale } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';
import {
  AIIcon,
  CartIcon,
  ScreenIcon,
  GearIcon,
  CompassIcon,
  ChatIcon,
  CalendarIcon,
  ChartIcon,
  CodeIcon,
} from '@/components/icons/ServiceIcons';

const sectorLabel = {
  'wine-viticulture': 'Wine & Viticulture',
  'oleifici-food-tech': 'Oleifici & Food Tech',
  'wine-hospitality-agriturismi': 'Wine Hospitality & Agriturismi',
};

const growthStages = [
  { phase: '01', title: 'Attrazione', body: 'SEO, contenuti e posizionamento per farsi trovare da chi cerca già.' },
  { phase: '02', title: 'Conversione', body: 'E-commerce, booking o software ottimizzati per trasformare la visita in un’azione.' },
  { phase: '03', title: 'Retention', body: 'Email, automazioni e follow-up che tengono viva la relazione dopo il primo acquisto.' },
  { phase: '04', title: 'Monetizzazione', body: 'Upsell, cross-sell e abbonamenti che alzano il valore di ogni cliente nel tempo.' },
];

// Tasting Flow e Wine Club Pro sono software concept: nessuno screenshot
// "prima" reale esiste, quindi il problema si mostra con un'icona invece
// che con una foto (vedi Atto 1 più sotto).
function TastingFlowProblemIcon() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-auto" role="img" aria-label="Foglio di calcolo con prenotazioni disordinate">
      {/* foglio principale */}
      <rect x="50" y="40" width="260" height="190" rx="12" fill="#FFFFFF" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="50" y="40" width="260" height="34" rx="12" fill="#1A1A1A" />
      <rect x="50" y="62" width="260" height="12" fill="#1A1A1A" />
      {[106, 142, 178, 206].map((y) => (
        <rect key={y} x="50" y={y} width="260" height="1.5" fill="#1A1A1A" opacity="0.15" />
      ))}
      {[126, 202].map((x) => (
        <rect key={x} x={x} y="74" width="1.5" height="156" fill="#1A1A1A" opacity="0.15" />
      ))}
      {/* righe di prenotazione disordinate (colori pieni) */}
      <rect x="62" y="84" width="52" height="10" rx="3" fill="#E8D4A0" />
      <rect x="138" y="88" width="48" height="10" rx="3" fill="#D8D8D8" />
      <rect x="62" y="120" width="52" height="10" rx="3" fill="#D8D8D8" />
      <rect x="214" y="118" width="40" height="10" rx="3" fill="#E8D4A0" />
      <rect x="138" y="156" width="48" height="10" rx="3" fill="#E8D4A0" />
      <rect x="62" y="192" width="52" height="10" rx="3" fill="#D8D8D8" />
      {/* badge di errore, pieni */}
      <circle cx="90" cy="99" r="15" fill="#B5533F" />
      <path d="M84 93 L96 105 M96 93 L84 105" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="234" cy="133" r="15" fill="#B5533F" />
      <path d="M228 127 L240 139 M240 127 L228 139" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <circle cx="162" cy="211" r="15" fill="#B5533F" />
      <path d="M156 205 L168 217 M168 205 L156 217" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      {/* foglietti volanti = disordine */}
      <g transform="translate(330,60) rotate(18)">
        <rect width="46" height="34" rx="4" fill="#F9F7F4" stroke="#1A1A1A" strokeWidth="1.5" />
        <rect x="8" y="8" width="30" height="4" fill="#1A1A1A" opacity="0.3" />
        <rect x="8" y="16" width="22" height="4" fill="#1A1A1A" opacity="0.3" />
      </g>
      <g transform="translate(20,190) rotate(-14)">
        <rect width="40" height="30" rx="4" fill="#F9F7F4" stroke="#1A1A1A" strokeWidth="1.5" />
        <rect x="7" y="7" width="26" height="4" fill="#1A1A1A" opacity="0.3" />
        <rect x="7" y="15" width="18" height="4" fill="#1A1A1A" opacity="0.3" />
      </g>
    </svg>
  );
}

function WineClubProChurnIcon() {
  return (
    <svg viewBox="0 0 400 280" className="w-full h-auto" role="img" aria-label="Soci che abbandonano il club per mancanza di follow-up">
      {/* area club: cerchio pieno con soci */}
      <circle cx="180" cy="140" r="82" fill="#8B6914" opacity="0.12" />
      <circle cx="180" cy="140" r="82" fill="none" stroke="#8B6914" strokeWidth="2" strokeDasharray="6 6" opacity="0.5" />
      <g fill="#8B6914">
        <circle cx="150" cy="115" r="13" />
        <circle cx="185" cy="100" r="13" />
        <circle cx="215" cy="120" r="13" />
        <circle cx="190" cy="160" r="13" />
        <circle cx="150" cy="165" r="13" />
      </g>
      {/* soci che abbandonano: avatar pieni rossi + traiettoria di uscita */}
      <g>
        <path d="M150 115 Q95 90 60 55" fill="none" stroke="#B5333B" strokeWidth="2.5" strokeDasharray="5 5" />
        <circle cx="52" cy="46" r="16" fill="#B5333B" />
        <path d="M46 46 L58 46 M58 46 L52 40 M58 46 L52 52" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-45 52 46)" />

        <path d="M190 160 Q230 210 275 235" fill="none" stroke="#B5333B" strokeWidth="2.5" strokeDasharray="5 5" />
        <circle cx="283" cy="241" r="16" fill="#B5333B" />
        <path d="M277 241 L289 241 M289 241 L283 235 M289 241 L283 247" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(35 283 241)" />

        <path d="M215 120 Q265 105 305 90" fill="none" stroke="#B5333B" strokeWidth="2.5" strokeDasharray="5 5" />
        <circle cx="313" cy="86" r="16" fill="#B5333B" />
        <path d="M307 86 L319 86 M319 86 L313 80 M319 86 L313 92" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(-20 313 86)" />
      </g>
      {/* mini grafico di retention in calo */}
      <g transform="translate(320,175)">
        <rect x="0" y="30" width="14" height="30" rx="2" fill="#8B6914" />
        <rect x="20" y="16" width="14" height="44" rx="2" fill="#8B6914" opacity="0.7" />
        <rect x="40" y="0" width="14" height="60" rx="2" fill="#B5333B" opacity="0.85" />
      </g>
    </svg>
  );
}

const problemIcons = {
  'tasting-flow': TastingFlowProblemIcon,
  'wine-club-pro': WineClubProChurnIcon,
};

function techIcon(tech) {
  const t = tech.toLowerCase();
  if (t.includes('shop') || t.includes('woocommerce') || t.includes('commerce')) return CartIcon;
  if (t.includes('ai') || t.includes('openai')) return AIIcon;
  if (t.includes('whatsapp') || t.includes('twilio')) return ChatIcon;
  if (t.includes('booking') || t.includes('calendar')) return CalendarIcon;
  if (t.includes('chart')) return ChartIcon;
  if (t.includes('marketplace') || t.includes('integrazione')) return CompassIcon;
  if (t.includes('next') || t.includes('node') || t.includes('php') || t.includes('wordpress') || t.includes('elementor') || t.includes('liquid'))
    return CodeIcon;
  if (t.includes('screen')) return ScreenIcon;
  return GearIcon;
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return pageMetadata({ title: c.title, description: c.tagline, path: `/portfolio/${c.slug}` });
}

export default function CaseStudyPage({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();
  const testimonial = testimonials.find((t) => t.caseStudySlug === c.slug);
  const initials = c.title
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({ title: c.title, description: c.tagline, path: `/portfolio/${c.slug}` })
          ),
        }}
      />
      {/* ---------- HERO CINEMATICO ---------- */}
      <section className="relative h-[92vh] min-h-[560px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(/images/case-studies/${c.slug}-desktop.png)` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${c.brand.primary}cc 0%, ${c.brand.primary}55 35%, rgba(0,0,0,0.8) 100%)`,
          }}
        />
        <div className="relative max-w-edge mx-auto px-6 pb-16 w-full">
          <Link href="/portfolio" className="text-xs text-white/60 hover:text-white">
            ← Tutto il portfolio
          </Link>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mt-8" style={{ color: c.brand.accent }}>
            Case study · {sectorLabel[c.sector]}
          </p>
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            <h1 className="display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.03] max-w-3xl">
              {c.title}
            </h1>
            {c.concept && (
              <span className="text-[10px] tracking-widest border border-white/40 rounded-full px-2 py-0.5 text-white/70">
                CONCEPT
              </span>
            )}
          </div>
          <p className="mt-5 text-lg text-white/85 max-w-2xl leading-relaxed">{c.tagline}</p>
          <p className="mt-3 text-xs italic text-white/55 max-w-xl">
            Case study illustrativo — esempio di progetto tipo per il settore, non un cliente reale.
          </p>
          {c.stats[0] && (
            <div className="mt-8 inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full pl-2 pr-5 py-2 border border-white/20">
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: c.brand.accent, color: '#1a1a1a' }}
              >
                ★
              </span>
              <span className="text-white text-sm">
                <StatNumber value={c.stats[0][0]} className="font-bold" /> {c.stats[0][1]}
              </span>
            </div>
          )}
        </div>
      </section>

      {/* ---------- FIRMA BRAND ---------- */}
      <section className="py-20" style={{ backgroundColor: c.brand.primary }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="w-28 h-28 mx-auto rounded-full flex items-center justify-center text-3xl font-bold border-2"
            style={{ borderColor: c.brand.accent, color: c.brand.accent }}
          >
            {initials}
          </div>
          <h2 className="display text-3xl md:text-5xl font-bold text-white mt-8">{c.title}</h2>
          <p className="text-white/75 text-lg mt-3">{c.kind}</p>
          <p className="text-white/50 text-xs mt-2 font-mono">{c.brand.domain} · branding di progetto (mockup)</p>

          <div className="mt-12 grid grid-cols-3 gap-5 max-w-md mx-auto">
            {[
              ['Primary', c.brand.primary],
              ['Accent', c.brand.accent],
              ['Background', c.brand.bg],
            ].map(([label, hex]) => (
              <div key={label} className="space-y-2">
                <div
                  className="w-full h-16 rounded-lg border border-white/20 hover:scale-105 transition-transform cursor-default"
                  style={{ backgroundColor: hex }}
                />
                <p className="text-white text-xs font-mono">{hex}</p>
                <p className="text-white/50 text-[10px]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ATTO 1 · IL PROBLEMA ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-center">
            <div>
              <p className="eyebrow" style={{ color: c.brand.primary }}>
                Atto 1 · Il problema
              </p>
              <p className="mt-5 text-ink/75 leading-relaxed text-lg">{c.problem}</p>
            </div>
            {c.beforeImage ? (
              <div className="relative rounded-2xl overflow-hidden border border-line aspect-[16/10]">
                <Image
                  src={c.beforeImage}
                  alt={`Il sito di ${c.title} prima del progetto`}
                  fill
                  className="object-cover grayscale"
                />
              </div>
            ) : problemIcons[c.slug] ? (
              <div
                className="rounded-2xl border border-line aspect-[16/10] flex items-center justify-center p-8"
                style={{ backgroundColor: c.brand.bg }}
              >
                <div className="w-full max-w-[400px] mx-auto">
                  {(() => {
                    const ProblemIcon = problemIcons[c.slug];
                    return <ProblemIcon />;
                  })()}
                </div>
              </div>
            ) : (
              <div
                className="rounded-2xl overflow-hidden border border-line aspect-[16/10] bg-cover bg-center grayscale opacity-80"
                style={{ backgroundImage: `url(/images/case-studies/${c.slug}-desktop.png)` }}
              />
            )}
          </div>
        </Reveal>
      </section>

      {/* ---------- ATTO 2 · LA SOLUZIONE ---------- */}
      <section style={{ backgroundColor: c.brand.bg }}>
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 items-center">
              <div>
                <p className="eyebrow" style={{ color: c.brand.primary }}>
                  Atto 2 · La soluzione
                </p>
                <p className="mt-5 text-ink/75 leading-relaxed text-lg">{c.solution}</p>
              </div>
              <div className="grid grid-cols-[2fr_1fr] gap-4 items-end">
                <div
                  className="rounded-2xl overflow-hidden border border-line shadow-xl aspect-[16/10] bg-cover bg-center"
                  style={{ backgroundImage: `url(/images/case-studies/${c.slug}-desktop.png)` }}
                />
                <div
                  className="rounded-2xl overflow-hidden border border-line shadow-xl aspect-[9/16] bg-cover bg-center"
                  style={{ backgroundImage: `url(/images/case-studies/${c.slug}-mobile.png)` }}
                />
              </div>
            </div>
            {c.previewHref && (
              <div className="mt-8">
                <Link href={c.previewHref} className="btn-solid hover:opacity-90" style={{ backgroundColor: c.brand.accent, color: '#1a1a1a' }}>
                  Naviga l’anteprima del sito →
                </Link>
                <p className="mt-2 text-xs text-ink/45">
                  Pagina dimostrativa cliccabile — non il sito ufficiale di un’azienda reale.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ---------- ATTO 3 · I RISULTATI ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow text-brass">Atto 3 · I risultati</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Numeri, non promesse.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {c.stats.map(([n, l], i) => (
              <Reveal key={l} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-8 text-center h-full">
                  <p className="display text-4xl md:text-5xl font-bold" style={{ color: c.brand.accent }}>
                    <StatNumber value={n} />
                  </p>
                  <p className="text-sm text-paper/60 mt-3">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECH STACK ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow" style={{ color: c.brand.primary }}>
            Dietro le quinte
          </p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">La tecnologia che c’è dietro.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {c.techStack.map((tech, i) => {
            const Icon = techIcon(tech);
            return (
              <Reveal key={tech} delay={i * 50}>
                <div className="border border-line rounded-xl p-5 h-full hover:shadow-md transition-shadow">
                  <Icon className="w-6 h-6" style={{ color: c.brand.primary }} />
                  <p className="mt-3 font-semibold text-ink text-sm">{tech}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      {testimonial && (
        <section style={{ backgroundColor: c.brand.bg }}>
          <div className="max-w-3xl mx-auto px-6 py-24 text-center">
            <Reveal>
              <p className="display text-2xl md:text-4xl italic font-semibold leading-snug" style={{ color: c.brand.primary }}>
                “{testimonial.quote}”
              </p>
              <p className="mt-8 font-semibold text-ink">{testimonial.name}</p>
              <p className="text-xs mt-1" style={{ color: c.brand.primary }}>
                {testimonial.role}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- METODO ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow" style={{ color: c.brand.primary }}>
              Come lavoriamo
            </p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Il metodo dietro ogni progetto.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metodoSteps.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <p className="text-xs tracking-widest font-semibold" style={{ color: c.brand.primary }}>
                    {s.n}
                  </p>
                  <h3 className="h3 text-lg mt-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed line-clamp-3">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link href="/metodo" className="mt-6 inline-block text-sm font-semibold" style={{ color: c.brand.primary }}>
            Scopri il metodo completo →
          </Link>
        </div>
      </section>

      {/* ---------- COSA È STATO CONSEGNATO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow" style={{ color: c.brand.primary }}>
            Cosa è stato consegnato
          </p>
          <h2 className="h2 text-3xl text-ink mt-4 max-w-2xl">Checklist del progetto.</h2>
        </Reveal>
        <ul className="mt-8 rule">
          {c.deliverables.map((d) => (
            <li key={d} className="rule py-4 flex gap-3 text-ink/80">
              <span style={{ color: c.brand.primary }}>→</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- STRATEGIA DI CRESCITA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow" style={{ color: c.brand.primary }}>
              La strategia dietro il progetto
            </p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Non solo {c.brand.mockupType === 'dashboard' ? 'un software' : 'un sito'}: un sistema.
            </h2>
            <p className="mt-4 text-ink/65 max-w-2xl leading-relaxed">
              {c.title} si inserisce nello stesso modello che usiamo per ogni progetto nel settore
              agroalimentare: quattro fasi, non solo una vetrina.
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {growthStages.map((s, i) => (
              <Reveal key={s.phase} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <p className="text-xs tracking-widest font-semibold" style={{ color: c.brand.primary }}>
                    {s.phase}
                  </p>
                  <h3 className="h3 text-lg mt-3 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink/60 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TECNOLOGIA & INNOVAZIONE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-20">
        <Reveal>
          <p className="eyebrow" style={{ color: c.brand.primary }}>
            Perché questa tech stack
          </p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Ogni strumento, scelto per un motivo.
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {c.techStack.map((tech, i) => (
            <Reveal key={tech} delay={i * 50}>
              <div className="border border-line rounded-xl p-5 h-full">
                <p className="font-semibold text-ink text-sm">{tech}</p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  {techRationale[tech] || 'Scelto per affidabilità e coerenza con il resto dello stack.'}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- METRICHE CHE CONTANO ---------- */}
      {c.deepDive?.metricsHuman && (
        <section className="bg-ink text-paper">
          <div className="max-w-edge mx-auto px-6 py-20">
            <Reveal>
              <p className="eyebrow text-brass">Metriche che contano</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Non solo numeri. Significa...</h2>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.stats.map(([n, l], i) => (
                <Reveal key={l} delay={i * 70}>
                  <div className="border border-paper/15 rounded-2xl p-7 h-full">
                    <p className="font-bold text-xl" style={{ color: c.brand.accent }}>
                      {n} <span className="font-normal text-sm text-paper/60">{l}</span>
                    </p>
                    <p className="mt-3 text-sm text-paper/70 leading-relaxed">
                      {c.deepDive.metricsHuman[i]}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- COSA ABBIAMO IMPARATO ---------- */}
      {c.deepDive?.learnings && (
        <section className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className="eyebrow" style={{ color: c.brand.primary }}>
              Dietro le quinte
            </p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Cosa questo progetto ci ha insegnato.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {c.deepDive.learnings.map((l, i) => (
              <Reveal key={l} delay={i * 60}>
                <div className="flex gap-3 items-start border border-line rounded-xl p-5">
                  <span className="shrink-0 font-bold" style={{ color: c.brand.primary }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-ink/75 leading-relaxed">{l}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------- NEXT STEPS / ROADMAP ---------- */}
      {c.deepDive?.roadmap && (
        <section style={{ backgroundColor: c.brand.bg }}>
          <div className="max-w-edge mx-auto px-6 py-20">
            <Reveal>
              <p className="eyebrow" style={{ color: c.brand.primary }}>
                Come continua l’evoluzione
              </p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
                Il progetto non finisce qui.
              </h2>
              <p className="mt-4 text-ink/65 max-w-2xl leading-relaxed">
                Prossimi passi ipotizzati per far evolvere {c.title}:
              </p>
            </Reveal>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {c.deepDive.roadmap.map((step) => (
                <li key={step} className="bg-paper border border-line rounded-xl p-5 text-sm text-ink/75 leading-relaxed">
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- IMPATTO ECONOMICO ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-20">
          <p className="eyebrow text-brass">Impatto economico</p>
          {c.deepDive?.impactNote && (
            <p className="mt-4 max-w-2xl text-paper/75 leading-relaxed">{c.deepDive.impactNote}</p>
          )}
          <p className="display text-2xl md:text-3xl mt-4 max-w-2xl leading-snug">{c.roi}</p>
        </div>
      </section>

      <CTA
        title="Vuoi una trasformazione come questa?"
        sub="Prima call conoscitiva gratuita. Ti diciamo con onestà cosa ha senso replicare e cosa va adattato al tuo caso."
      />

      <section className="max-w-edge mx-auto px-6 pb-16 text-center">
        <Link href="/portfolio" className="text-sm font-semibold text-forest hover:text-brass">
          ← Scopri gli altri case study
        </Link>
      </section>
    </>
  );
}
