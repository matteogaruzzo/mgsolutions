import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import PricingBlock from '@/components/PricingBlock';
import { servizi, sectors, getCaseStudy, testimonials } from '@/lib/data';
import { pricing } from '@/lib/pricing-data';
import { AIIcon, CartIcon, ScreenIcon, RefreshIcon, GearIcon, CompassIcon } from '@/components/icons/ServiceIcons';
import { GrapeIcon, OliveIcon, FarmhouseDoorIcon } from '@/components/icons/WineIcons';

const iconMap = { ai: AIIcon, cart: CartIcon, web: ScreenIcon, refresh: RefreshIcon, integration: GearIcon, compass: CompassIcon };
const sectorIcon = { 'wine-viticulture': GrapeIcon, 'oleifici-food-tech': OliveIcon, 'wine-hospitality-agriturismi': FarmhouseDoorIcon };
const sectorAccent = { 'wine-viticulture': 'text-wine-accent', 'oleifici-food-tech': 'text-olio-accent', 'wine-hospitality-agriturismi': 'text-hospitality-accent' };

export default function ServicePageTemplate({ service }) {
  const Icon = iconMap[service.icon] || AIIcon;
  const caseStudy = getCaseStudy(service.caseStudySlug);
  const testimonial = service.testimonialName ? testimonials.find((t) => t.name === service.testimonialName) : null;
  const related = servizi.filter((s) => service.relatedSlugs.includes(s.slug));

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section
        className="relative bg-forest text-paper bg-cover bg-center"
        style={service.heroImage ? { backgroundImage: `url(${service.heroImage})` } : undefined}
      >
        {service.heroImage && (
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(0,59,30,0.88) 0%, rgba(0,59,30,0.82) 100%)',
            }}
            aria-hidden="true"
          />
        )}
        <div className="relative max-w-edge mx-auto px-6 pt-32 pb-16">
          <Link href="/servizi" className="text-xs text-paper/70 hover:underline">
            ← Cosa facciamo
          </Link>
          <p className="text-xs font-medium tracking-wider uppercase mt-6 text-brass whitespace-nowrap">
            Cosa facciamo · Servizio {service.n}
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Icon className="w-9 h-9 text-brass shrink-0" />
            <h1 className="display text-3xl md:text-5xl leading-[1.1]">{service.title}</h1>
          </div>
          <p className="mt-5 text-lg text-paper/80 max-w-2xl leading-relaxed">{service.resultNote}</p>
          {service.premium && (
            <span className="mt-6 inline-block text-xs tracking-widest uppercase text-brass border border-brass/40 rounded-full px-3 py-1">
              Servizio in evidenza
            </span>
          )}
        </div>
      </section>

      {/* ---------- COSA È DAVVERO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12">
          <Reveal>
            <div>
              <p className="eyebrow">Non è solo un servizio</p>
              <p className="mt-5 text-ink/75 leading-relaxed">{service.whatIsIt}</p>
              {service.whatIsItMore && (
                <div className="mt-4 space-y-4">
                  {(Array.isArray(service.whatIsItMore) ? service.whatIsItMore : [service.whatIsItMore]).map((p) => (
                    <p key={p} className="text-ink/75 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              )}
              {service.quickFacts && (
                <dl className="mt-8 border-t border-line">
                  {service.quickFacts.map((f) => (
                    <div key={f.label} className="flex items-center justify-between gap-4 py-3 border-b border-line">
                      <dt className="text-sm text-ink/55">{f.label}</dt>
                      <dd className="text-sm font-semibold text-ink text-right">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              {caseStudy && (
                <div
                  className="rounded-xl overflow-hidden border border-line aspect-[16/10] bg-cover bg-center mb-5"
                  style={{ backgroundImage: `url(/images/case-studies/${caseStudy.slug}-desktop.png)` }}
                />
              )}
              <ul className="space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="border border-line rounded-xl px-5 py-4 text-sm text-ink/80 flex gap-3">
                    <span className="text-primary shrink-0">→</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PER QUALI SETTORI ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Come si applica</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Nel tuo settore.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {sectors.map((sec, i) => {
              const SIcon = sectorIcon[sec.slug];
              return (
                <Reveal key={sec.slug} delay={i * 60}>
                  <Link
                    href={`/settori/${sec.slug}`}
                    className="group block bg-paper border border-line rounded-xl p-6 h-full hover:shadow-lg transition-shadow"
                  >
                    <SIcon className={`w-7 h-7 ${sectorAccent[sec.slug]}`} />
                    <h3 className="h3 text-lg mt-4 text-ink">{sec.name}</h3>
                    <p className="mt-2 text-sm text-ink/65 leading-relaxed">{service.perSettoreExtra[sec.slug]}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- GESTIONALI DI SETTORE (solo per software AI, dove esiste davvero) ---------- */}
      {service.slug === 'software-ai-su-misura' && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cantine, agriturismi, frantoi</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
              Se lavori nell’agroalimentare, abbiamo pagine dedicate al tuo settore.
            </h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
              Progettiamo CRM e gestionali su misura specificamente per cantine, agriturismi e frantoi:
              vedi i problemi che risolviamo e cosa si può costruire nel tuo caso.
            </p>
          </Reveal>
          <div className="mt-10">
            <Link href="/software" className="text-sm font-semibold text-forest hover:text-brass">
              Scopri il software su misura per l’agroalimentare →
            </Link>
          </div>
        </section>
      )}

      {/* ---------- STACK / TECNOLOGIA ---------- */}
      {service.technicalPoints.length > 0 && (
        <section className="bg-ink text-paper">
          <div className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow text-brass">Dietro le quinte</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4">Come lavoriamo tecnicamente.</h2>
            </Reveal>
            <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
              {service.technicalPoints.map((t) => (
                <li key={t} className="border border-paper/15 rounded-xl px-5 py-4 text-sm text-paper/80">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------- CASE STUDY + RISULTATI ---------- */}
      {caseStudy && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Esempio da un case study illustrativo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">{caseStudy.title}</h2>
            <p className="mt-5 text-ink/70 max-w-2xl leading-relaxed">{service.caseStudyNote}</p>
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
          <Link href={`/portfolio/${caseStudy.slug}`} className="mt-4 inline-block text-sm font-semibold text-forest hover:text-brass">
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

      {service.slug === 'automazioni-ai' && (
        <PricingBlock
          heading="Quanto costa la prima automazione"
          subheading="Un solo processo collegato, senza cambiare gli strumenti che già usate."
          plans={[
            {
              ...pricing.primaAutomazione,
              offerDescription: 'Colleghiamo l’AI a un processo che già usate.',
              benefits: [
                'Mezza giornata di analisi',
                'Un solo processo automatizzato',
                'Collegamento agli strumenti esistenti',
                'Test e formazione',
              ],
              exclusions: ['Processi aggiuntivi (690€ l’uno, 490€ dal terzo in poi)', 'Costi delle API di terzi'],
              closing: 'Cifra precisa dopo una call di 20 minuti.',
            },
          ]}
        />
      )}

      {/* ---------- FAQ ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Domande su questo servizio</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">FAQ.</h2>
          </Reveal>
          <div className="mt-10">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      {/* ---------- SERVIZI CORRELATI ---------- */}
      {related.length > 0 && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Funziona ancora meglio con</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Servizi correlati.</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {related.map((r) => {
              const RIcon = iconMap[r.icon] || AIIcon;
              return (
                <Link
                  key={r.slug}
                  href={`/servizi/${r.slug}`}
                  className="group block border border-line rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <RIcon className="w-6 h-6 text-forest" />
                  <h3 className="h3 text-lg mt-3 text-ink">{r.title}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{r.body}</p>
                  <span className="mt-3 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                    Scopri il servizio →
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <CTA
        title={`Pronto a far funzionare "${service.title}" per il tuo business?`}
        sub="Ti faccio domande sul tuo business specifico e ti mostro come potrebbe funzionare per te. Niente pressione, solo chiarezza."
      />

      <ServiceArea pageType="servizi" />
    </>
  );
}
