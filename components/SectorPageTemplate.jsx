import Link from 'next/link';
import Reveal from '@/components/Reveal';
import BookingForm from '@/components/BookingForm';
import CountUp from '@/components/CountUp';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import FAQAccordion from '@/components/FAQAccordion';
import { caseStudies, testimonials, metodoSteps, whyMG } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';
import {
  BookIcon,
  CartIcon,
  GearIcon,
  TargetIcon,
  PinIcon,
  CalendarIcon,
  ChatIcon,
} from '@/components/icons/ServiceIcons';
import { GlassIcon, LabelIcon } from '@/components/icons/WineIcons';

const iconMap = {
  book: BookIcon,
  cart: CartIcon,
  glass: GlassIcon,
  label: LabelIcon,
  target: TargetIcon,
  gear: GearIcon,
  pin: PinIcon,
  calendar: CalendarIcon,
  chat: ChatIcon,
};

export default function SectorPageTemplate({ sectorNumber, sector, content, theme, afterHero }) {
  const stories = caseStudies.filter((c) => content.caseStudySlugs.includes(c.slug));
  const sectorTestimonials = testimonials.filter((t) => t.sector === sector.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: sector.name,
            provider: { '@type': 'LocalBusiness', name: 'MG Solutions', areaServed: 'IT' },
            description: sector.intro,
          }),
        }}
      />

      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-[86vh] flex items-end bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.35) 0%, rgba(26,26,26,0.78) 100%), url(${theme.heroImage})`,
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-40 pb-16 w-full">
          <Link href="/settori" className="text-xs text-paper/70 hover:underline">
            ← Tutti i settori
          </Link>
          <div className={`flex items-center gap-2 mt-6 mb-1 font-medium uppercase ${theme.goldText}`}>
            <span className="text-xs tracking-wider whitespace-nowrap">Settore {sectorNumber}</span>
            <span className="text-xs font-light tracking-wide opacity-80">· {sector.name}</span>
          </div>
          <h1 className="display text-3xl sm:text-4xl md:text-6xl mt-4 max-w-3xl leading-[1.15] break-words">
            {content.heroTitle}
          </h1>
          <p className="mt-6 text-lg text-paper/85 max-w-2xl leading-relaxed">{content.heroSubtitle}</p>
          <span className="section-divider mt-8" style={{ '--sector-divider': theme.divider }} />
          <div className="mt-8">
            <Link href="/prenota-call" className="btn-solid">
              <GrapeIcon className="w-4 h-4" />
              Raccontami del tuo progetto →
            </Link>
          </div>
        </div>
      </section>

      {afterHero}

      {/* ---------- CHI È IL CLIENTE IDEALE ---------- */}
      <section className={theme.bgAlt} style={{ '--sector-divider': theme.divider }}>
        <div className="max-w-edge mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-start">
            <Reveal>
              <div>
                <p className={`eyebrow ${theme.accentText}`}>Chi sei tu</p>
                <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-xl text-ink">
                  Chi sei tu, e perché conviene iniziare da qui.
                </h2>
                <p className="mt-5 text-ink/70 max-w-xl leading-relaxed">{content.targetIntro}</p>
                <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-xl">
                  {content.targetBullets.map((b, i) => (
                    <Reveal key={b} delay={i * 50}>
                      <div className="flex gap-3 text-ink/80">
                        <span className={`shrink-0 ${theme.accentText}`}>✓</span>
                        <span>{b}</span>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className={`rounded-2xl p-8 h-full flex flex-col ${theme.goldBgSoft}`}>
                <theme.icon className={`w-9 h-9 ${theme.accentText}`} />
                <p className="display text-4xl md:text-5xl mt-6 text-ink">
                  {content.statNumbers[0][0]}
                </p>
                <p className="mt-2 text-ink/70 leading-snug">{content.statNumbers[0][1]}</p>
                <p className="mt-1 text-xs italic text-ink/45">{content.statNumbers[0][2]} · esempio illustrativo</p>
                <Link
                  href={`/portfolio/${content.caseStudySlugs[0]}`}
                  className={`mt-6 inline-block text-sm font-semibold ${theme.accentText} hover:underline`}
                >
                  Ecco cosa puoi ottenere →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- PROBLEMI CHE RISOLVIAMO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">I problemi che sentiamo più spesso</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Riconosci uno di questi problemi?
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {content.painPoints.map((p, i) => (
            <Reveal key={p.problem} delay={i * 50}>
              <div className="border border-line rounded-xl p-6 h-full">
                <p className="text-ink font-semibold flex gap-2">
                  <span className="text-red-400 shrink-0">✗</span> {p.problem}
                </p>
                <p className={`mt-3 text-sm text-ink/65 leading-relaxed flex gap-2`}>
                  <span className={`shrink-0 ${theme.accentText}`}>→</span> {p.solution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/prenota-call" className="text-sm font-semibold text-forest hover:text-brass">
            Scopri come li risolviamo per te →
          </Link>
        </div>
      </section>

      {/* ---------- COSA REALIZZIAMO ---------- */}
      <section className={theme.bgAlt} style={{ '--sector-divider': theme.divider }}>
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className={`eyebrow ${theme.accentText}`}>Cosa realizziamo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Quello che costruiamo per {sector.name.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.solutionCards.map((c, i) => {
              const Icon = iconMap[c.icon] || GrapeIcon;
              return (
                <Reveal key={c.title} delay={i * 60}>
                  <div className="card-leaf-top bg-paper rounded-xl p-6 h-full">
                    <Icon className={`w-7 h-7 ${theme.accentText}`} />
                    <h3 className="h3 text-lg mt-4 text-ink">{c.title}</h3>
                    <p className="mt-2 text-sm text-ink/65 leading-relaxed">{c.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- NUMERI CHE CONTANO ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-20">
          <Reveal>
            <p className={`eyebrow ${theme.goldText}`}>Numeri dai progetti illustrativi</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">I numeri che contano.</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-paper/15 border border-paper/15 rounded-2xl overflow-hidden">
            {content.statNumbers.map(([n, l, src]) => (
              <div key={l} className="bg-forest p-7 text-center">
                <CountUp value={n} className="display text-3xl md:text-4xl" />
                <p className="text-xs text-paper/75 mt-2 leading-snug">{l}</p>
                <p className="text-[11px] text-paper/45 mt-2 italic">{src}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs italic text-paper/50 max-w-xl">
            Cifre riprese dai case study concept in portfolio (progetti illustrativi, non un
            cliente reale) — mostrano il tipo di risultato che progettiamo per ottenere.
          </p>
        </div>
      </section>

      {/* ---------- COME FUNZIONA IL PROGETTO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Da qui al lancio</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Come funziona il progetto.</h2>
          <p className="mt-3 text-ink/60 max-w-xl">
            Lo stesso metodo che usiamo su ogni settore, applicato al tuo caso specifico.
          </p>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metodoSteps.map((p, i) => (
            <Reveal key={p.n} delay={i * 50}>
              <Link
                href={`/metodo/${p.slug}`}
                className="group block border border-line rounded-xl p-6 h-full bg-paper hover:shadow-lg transition-all"
              >
                <p className={`text-xs tracking-widest font-semibold ${theme.accentText}`}>{p.n}</p>
                <h3 className="h3 text-lg mt-3 text-ink">{p.title}</h3>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{p.body}</p>
                <span className={`mt-3 inline-block text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${theme.accentText}`}>
                  Approfondisci →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/metodo" className="text-sm font-semibold text-forest hover:text-brass">
            Scopri il metodo completo →
          </Link>
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      {stories.length > 0 && (
        <section className={theme.bgAlt} style={{ '--sector-divider': theme.divider }}>
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className={`eyebrow ${theme.accentText}`}>Esempi dal settore</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink">
                Casi illustrativi {sector.name}.
              </h2>
              <p className="mt-3 text-ink/60 max-w-xl">Progetti simili al tuo, con il tipo di risultato che progettiamo.</p>
            </Reveal>
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              {stories.map((c, i) => (
                <Reveal key={c.slug} delay={i * 70}>
                  <Link
                    href={`/portfolio/${c.slug}`}
                    className="group block card-leaf-top bg-paper rounded-xl p-7 h-full hover:shadow-lg transition-shadow"
                    style={{ '--sector-divider': theme.divider }}
                  >
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="h3 text-xl text-ink">{c.title}</h3>
                      <span className="text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                        CONCEPT
                      </span>
                    </div>
                    <p className={`text-xs mt-1 font-semibold ${theme.accentText}`}>{c.kind}</p>
                    <p className="mt-3 text-sm text-ink/65 leading-relaxed">{c.problem}</p>
                    <p className="mt-3 text-sm text-ink/80 font-semibold">→ {c.results[0]}</p>
                    <span className={`mt-4 inline-block text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity ${theme.accentText}`}>
                      Leggi il case study completo →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- TESTIMONIANZE ---------- */}
      {sectorTestimonials.length > 0 && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Testimonianze</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Cosa dicono di progetti come il tuo.
            </h2>
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel items={sectorTestimonials} />
          </div>
        </section>
      )}

      {/* ---------- PERCHÉ MG SOLUTIONS ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Perché non siamo un’agenzia web standard</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">Perché MG Solutions.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyMG.map((w, i) => (
              <Reveal key={w.title} delay={i * 50}>
                <div className="border border-paper/15 rounded-xl p-5 h-full">
                  <p className="text-xs tracking-widest font-semibold text-brass">{w.title.toUpperCase()}</p>
                  <p className="mt-3 text-xs text-paper/45 leading-relaxed">{w.generic}</p>
                  <p className="mt-3 text-sm text-paper/90 leading-relaxed font-medium">{w.mg}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Domande frequenti sul tuo settore.
          </h2>
        </Reveal>
        <div className="mt-10">
          <FAQAccordion items={content.faqs} />
        </div>
      </section>

      {/* ---------- CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <p className={`eyebrow ${theme.goldText}`}>Parliamo del tuo progetto</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4">
                Parliamo del tuo {content.ctaNoun}.
              </h2>
              <p className="mt-4 text-paper/75 max-w-md leading-relaxed">
                Analisi preliminare gratuita, risposta entro 24h su WhatsApp, nessun impegno.
              </p>
              <div className="mt-6 border border-paper/20 rounded-xl p-5 bg-ink/20 max-w-sm">
                <p className={`text-xs tracking-widest font-semibold ${theme.goldText}`}>
                  DAL SETTORE {sector.name.toUpperCase()}
                </p>
                <p className="mt-2 text-sm text-paper/85 leading-relaxed">{sector.result}</p>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
