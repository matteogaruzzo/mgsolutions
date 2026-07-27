import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { softwareFamilies, testimonials, investmentFactors, getCaseStudy } from '@/lib/data';
import { AIIcon, CompassIcon, GearIcon, TargetIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

const iconMap = { ai: AIIcon, compass: CompassIcon, gear: GearIcon, target: TargetIcon };

export default function SoftwareFamilyTemplate({ family }) {
  const Icon = iconMap[family.icon] || AIIcon;
  const caseStudy = family.caseStudySlug ? getCaseStudy(family.caseStudySlug) : null;
  const testimonial = family.testimonialName
    ? testimonials.find((t) => t.name === family.testimonialName)
    : null;
  const others = softwareFamilies.filter((f) => f.slug !== family.slug);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-[60vh] flex items-end bg-fixed bg-cover bg-center text-paper"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(26,26,26,0.4) 0%, rgba(26,26,26,0.8) 100%), url(${family.heroImage})`,
        }}
      >
        <div className="max-w-edge mx-auto px-6 pt-32 pb-16 w-full">
          <Link href="/software" className="text-xs text-paper/70 hover:underline">
            ← Tutti i software
          </Link>
          <div className="flex items-center gap-4 mt-6">
            <Icon className="w-9 h-9 text-brass shrink-0" />
            <h1 className="display text-3xl md:text-5xl leading-[1.1]">{family.name}</h1>
          </div>
          <p className="mt-5 text-lg text-paper/85 max-w-2xl leading-relaxed">{family.pitch}</p>
          <Link href="/prenota-call" className="btn-solid mt-8 inline-flex bg-brass text-ink hover:bg-paper">
            <GrapeIcon className="w-4 h-4" />
            Parliamone →
          </Link>
        </div>
      </section>

      {/* ---------- COSA RISOLVE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <p className="eyebrow">Il problema</p>
              <p className="mt-4 text-ink/75 leading-relaxed">{family.problem}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="eyebrow">La soluzione</p>
              <p className="mt-4 text-ink/75 leading-relaxed">{family.solution}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- COME FUNZIONA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come funziona</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Passo dopo passo.</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {family.scope.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className="bg-paper border border-line rounded-xl px-5 py-3 text-sm text-ink/80">
                  <span className="text-forest font-semibold mr-2">{i + 1}</span>
                  {s}
                </div>
                {i < family.scope.length - 1 && <span className="text-ink/30">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CASE STUDY ---------- */}
      {caseStudy && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Esempio da un case study illustrativo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">{caseStudy.title}</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{caseStudy.tagline}</p>
          </Reveal>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {caseStudy.results.map((r) => (
              <li key={r} className="bg-paper-dim rounded-xl px-5 py-4 text-sm text-ink/80 flex gap-3">
                <span className="text-primary shrink-0">✓</span> {r}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs italic text-ink/45">
            Case study illustrativo — esempio di progetto tipo, non un cliente reale.
          </p>
          <Link href={`/portfolio/${caseStudy.slug}`} className="mt-2 inline-block text-sm font-semibold text-forest hover:text-brass">
            Leggi il case study completo →
          </Link>
        </section>
      )}

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

      {/* ---------- INVESTIMENTO (trasparente, no listino) ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Quanto costa</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Da cosa dipende l’investimento.</h2>
          <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
            Non pubblichiamo un listino: dipende da come lo userai. Ne parliamo apertamente in call.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {investmentFactors.map((f) => (
            <div key={f} className="border border-line rounded-xl px-5 py-4 text-sm text-ink/75">
              {f}
            </div>
          ))}
        </div>
      </section>

      {/* ---------- ALTRI SOFTWARE ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Altri software</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Funziona ancora meglio insieme.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {others.map((f) => {
              const OIcon = iconMap[f.icon] || AIIcon;
              return (
                <Link
                  key={f.slug}
                  href={`/software/${f.slug}`}
                  className="group block border border-line rounded-xl p-6 bg-paper hover:shadow-lg transition-shadow"
                >
                  <OIcon className="w-6 h-6 text-forest" />
                  <h3 className="h3 text-lg mt-3 text-ink">{f.name}</h3>
                  <span className="mt-3 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                    Scopri →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title={`Pronto a parlare del tuo ${family.name}?`}
        sub="Ti faccio domande sul tuo processo specifico e ti dico con onestà se e come possiamo aiutarti."
      />
    </>
  );
}
