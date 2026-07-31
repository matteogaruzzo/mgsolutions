import Link from 'next/link';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import {
  servizi,
  sectors,
  getCaseStudy,
  testimonials,
  investmentFactors,
  businessSuiteModules,
  softwareUpcoming,
  webCare,
  siteDevPricing,
  ecommerceDevPricing,
  ecommerceWebCare,
  restylingPricing,
  aiIntegrationPricing,
  softwareCustomPricing,
} from '@/lib/data';
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

      {/* ---------- ROADMAP (solo per software AI, dove esiste davvero) ---------- */}
      {service.slug === 'software-ai-su-misura' && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Cosa stiamo costruendo</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">{softwareUpcoming.title}</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{softwareUpcoming.body}</p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {businessSuiteModules.map((m) => (
              <Link
                key={m.slug}
                href={`/software/${m.slug}`}
                className="group block border border-line rounded-xl p-5 hover:shadow-lg transition-shadow"
              >
                <p className="font-semibold text-ink">{m.name}</p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">{m.tagline}</p>
                <span className="mt-3 inline-block text-xs font-semibold text-forest opacity-0 group-hover:opacity-100 transition-opacity">
                  Scopri il software →
                </span>
              </Link>
            ))}
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

      {/* ---------- QUANTO COSTA ---------- */}
      {(service.slug === 'siti-web-contatti' || service.slug === 'ecommerce-shopify') && (() => {
        const devPricing = service.slug === 'ecommerce-shopify' ? ecommerceDevPricing : siteDevPricing;
        const care = service.slug === 'ecommerce-shopify' ? ecommerceWebCare : webCare;
        return (
          <section className="max-w-edge mx-auto px-6 py-24">
            <Reveal>
              <p className="eyebrow">Quanto costa</p>
              <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
                {service.slug === 'ecommerce-shopify' ? 'Sviluppo dello store e manutenzione.' : 'Sviluppo del sito e manutenzione.'}
              </h2>
              <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
                {service.slug === 'ecommerce-shopify'
                  ? `La realizzazione dello store è sempre preventivata a parte, in base a cosa serve davvero. Una volta online, ${care.name} lo mantiene in piedi 24/7.`
                  : `La realizzazione del sito è sempre preventivata a parte, in base a cosa serve davvero. Una volta online, ${care.name} lo mantiene in piedi 24/7.`}
              </p>
            </Reveal>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
              {devPricing.map((s) => (
                <div key={s.label} className="border border-line rounded-xl px-5 py-4 text-sm">
                  <p className="text-ink/80">{s.label}</p>
                  <p className="mt-1 font-semibold text-ink">{s.range}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-2xl border border-line rounded-2xl p-8 bg-paper-dim">
              <h3 className="text-xl font-bold text-ink">{care.name}</h3>
              <p className="mt-1 text-sm text-ink/60">{care.tagline}</p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">€{care.price}</span>
                <span className="text-sm text-ink/60">/mese</span>
              </p>
              <p className="mt-1 text-xs text-ink/50">(€{care.price * 12}/anno)</p>
              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-forest uppercase">Comprende</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink/75">
                    {care.included.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary shrink-0">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest text-ink/40 uppercase">Non comprende</p>
                  <ul className="mt-3 space-y-1.5 text-sm text-ink/50">
                    {care.excluded.map((e) => (
                      <li key={e} className="flex gap-2">
                        <span className="text-ink/30 shrink-0">✗</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm text-ink/60 max-w-2xl">
              Vuoi anche uno o più software di MG Business Suite integrati {service.slug === 'ecommerce-shopify' ? 'nello store' : 'nel sito'}?{' '}
              <Link href="/software/pricing" className="font-semibold text-forest hover:text-brass">
                Guarda i bundle sito + software →
              </Link>
            </p>
          </section>
        );
      })()}

      {service.slug === 'software-ai-su-misura' && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quanto costa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Sviluppo su misura e canone di gestione.</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{softwareCustomPricing.note}</p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            <div className="border border-line rounded-xl px-5 py-4 text-sm">
              <p className="text-ink/80">Sviluppo (una tantum)</p>
              <p className="mt-1 font-semibold text-ink">{softwareCustomPricing.devRange}</p>
            </div>
            <div className="border border-line rounded-xl px-5 py-4 text-sm">
              <p className="text-ink/80">Canone successivo</p>
              <p className="mt-1 font-semibold text-ink">{softwareCustomPricing.monthlyRange}/mese</p>
            </div>
          </div>
        </section>
      )}

      {service.slug === 'restyling-ottimizzazione' && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quanto costa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Un intervento una tantum.</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{restylingPricing.note}</p>
          </Reveal>
          <div className="mt-8 max-w-xs border border-line rounded-xl px-5 py-4 text-sm">
            <p className="text-ink/80">Restyling completo</p>
            <p className="mt-1 font-semibold text-ink">{restylingPricing.range}</p>
          </div>
          <p className="mt-6 text-sm text-ink/60 max-w-2xl">
            Dopo il restyling puoi aggiungere {webCare.name} (€{webCare.price}/mese) per mantenere il sito in piedi 24/7.{' '}
            <Link href="/servizi/siti-web-contatti" className="font-semibold text-forest hover:text-brass">
              Scopri {webCare.name} →
            </Link>
          </p>
        </section>
      )}

      {service.slug === 'ai-integration' && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quanto costa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Prezzo per integrazione.</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">{aiIntegrationPricing.note}</p>
          </Reveal>
          <div className="mt-8 max-w-xs border border-line rounded-xl px-5 py-4 text-sm">
            <p className="text-ink/80">Per integrazione</p>
            <p className="mt-1 font-semibold text-ink">€{aiIntegrationPricing.perIntegration} una tantum</p>
          </div>
        </section>
      )}

      {(service.slug === 'consulenza-strategica' ||
        !['siti-web-contatti', 'ecommerce-shopify', 'software-ai-su-misura', 'restyling-ottimizzazione', 'ai-integration'].includes(
          service.slug
        )) && (
        <section className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow">Quanto costa</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Da cosa dipende l’investimento.</h2>
            <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
              Non pubblichiamo un listino perché il costo reale cambia in base a come il servizio
              viene usato. Ne parliamo apertamente in call, prima di qualsiasi proposta.
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
