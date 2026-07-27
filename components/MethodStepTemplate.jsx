import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import FAQAccordion from '@/components/FAQAccordion';
import { metodoSteps, testimonials, getCaseStudy } from '@/lib/data';
import { ChartIcon, CompassIcon, PaletteIcon, CodeIcon } from '@/components/icons/ServiceIcons';

const iconMap = { chart: ChartIcon, compass: CompassIcon, palette: PaletteIcon, code: CodeIcon };

export default function MethodStepTemplate({ step }) {
  const index = metodoSteps.findIndex((s) => s.slug === step.slug);
  const prev = metodoSteps[index - 1];
  const next = metodoSteps[index + 1];
  const Icon = iconMap[step.icon] || ChartIcon;
  const caseStudy = getCaseStudy(step.caseStudySlug);
  const testimonial = testimonials.find((t) => t.name === step.testimonialName);

  return (
    <>
      {/* ---------- BREADCRUMB + HERO ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 pt-32 pb-16">
          <Link href="/metodo" className="text-xs text-paper/70 hover:underline">
            ← Il Metodo
          </Link>
          <p className="text-xs font-medium tracking-wider uppercase mt-6 text-brass whitespace-nowrap">
            Il Metodo · Step {step.n}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Icon className="w-9 h-9 text-brass shrink-0" />
            <h1 className="display text-3xl md:text-5xl leading-[1.1]">
              Step {step.n}: {step.title}
            </h1>
          </div>
          <p className="mt-5 text-lg text-paper/80 max-w-2xl leading-relaxed">{step.body}</p>
          <div className="mt-8 inline-flex flex-wrap gap-4 border border-paper/20 rounded-xl px-6 py-4">
            <span className="text-sm text-paper/85">
              <strong className="text-brass font-semibold">{step.duration}</strong> di durata
            </span>
            <span className="text-paper/30">•</span>
            <span className="text-sm text-paper/85">Output: {step.outputs}</span>
          </div>
        </div>
      </section>

      {/* ---------- COSA SUCCEDE IN QUESTA FASE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <p className="eyebrow">Cosa succede in questa fase</p>
              <p className="mt-5 text-ink/75 leading-relaxed">{step.whatHappens}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="eyebrow">Cosa ricevi</p>
              <ul className="mt-5 rule">
                {step.deliverables.map((d) => (
                  <li key={d} className="rule py-3 flex gap-3 text-ink/80">
                    <span className="text-primary shrink-0">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- TIMELINE DETTAGLIATA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come si scandisce il tempo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Timeline di questa fase.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {step.dayByDay.map((d, i) => (
              <Reveal key={d.range} delay={i * 60}>
                <div className="bg-paper border border-line rounded-xl p-6 h-full">
                  <p className="text-xs tracking-widest font-semibold text-primary">{d.range.toUpperCase()}</p>
                  <p className="mt-2 text-sm text-ink/70 leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TOOLS ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Strumenti che usiamo</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Tool e metodologie.</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {step.tools.map((t) => (
            <span key={t} className="text-sm bg-paper-dim border border-line rounded-full px-4 py-2 text-ink/75">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- CASE STUDY DI QUESTA FASE ---------- */}
      {caseStudy && (
        <section className="bg-ink text-paper">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow text-brass">Esempio da un case study illustrativo</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl">{caseStudy.title}</h2>
              <p className="mt-5 text-paper/75 max-w-2xl leading-relaxed">{step.caseStudyNote}</p>
              <p className="mt-3 text-xs italic text-paper/45 max-w-xl">
                Case study illustrativo — esempio di progetto tipo, non un cliente reale.
              </p>
              <Link
                href={`/portfolio/${caseStudy.slug}`}
                className="mt-6 inline-block text-sm font-semibold text-brass hover:text-paper"
              >
                Leggi il case study completo →
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande su questa fase</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ.</h2>
        </Reveal>
        <div className="mt-10">
          <FAQAccordion items={step.faqs} />
        </div>
      </section>

      {/* ---------- TESTIMONIAL ---------- */}
      {testimonial && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-20">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-ink/80 text-lg leading-relaxed">“{testimonial.quote}”</p>
                <p className="mt-4 font-semibold text-ink">{testimonial.name}</p>
                <p className="text-xs text-forest">{testimonial.role}</p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------- RELAZIONE CON IL PROSSIMO STEP + NAVIGAZIONE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa alimenta questa fase</p>
          <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{step.nextStepNote}</p>
        </Reveal>

        <div className="mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-line pt-8">
          {prev ? (
            <Link href={`/metodo/${prev.slug}`} className="text-sm text-ink/60 hover:text-forest">
              ← Step {prev.n}: {prev.title}
            </Link>
          ) : (
            <span className="text-sm text-ink/30">← Nessuno step precedente</span>
          )}
          <Link href="/metodo" className="text-sm font-semibold text-forest hover:text-brass text-center">
            Torna a Il Metodo
          </Link>
          {next ? (
            <Link href={`/metodo/${next.slug}`} className="text-sm text-ink/60 hover:text-forest text-right">
              Step {next.n}: {next.title} →
            </Link>
          ) : (
            <span className="text-sm text-ink/30 text-right">Ultimo step →</span>
          )}
        </div>
      </section>

      <CTA
        title="Pronto per iniziare da qui?"
        sub="Prima call conoscitiva gratuita, senza impegno."
      />
    </>
  );
}
