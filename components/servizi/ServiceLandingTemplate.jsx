import Link from 'next/link';
import Image from 'next/image';
import Reveal from '@/components/Reveal';
import FAQAccordion from '@/components/FAQAccordion';
import ServiceArea from '@/components/geo/ServiceArea';
import PricingBlock from '@/components/PricingBlock';
import { site, servizi } from '@/lib/data';
import {
  CartIcon,
  GiftIcon,
  CompassIcon,
  LockIcon,
  RefreshIcon,
  ChatIcon,
  ScreenIcon,
  BookIcon,
  TargetIcon,
  CalendarIcon,
  ChartIcon,
} from '@/components/icons/ServiceIcons';
import { GrapeIcon } from '@/components/icons/WineIcons';

const includeIconMap = {
  cart: CartIcon,
  gift: GiftIcon,
  compass: CompassIcon,
  lock: LockIcon,
  refresh: RefreshIcon,
  chat: ChatIcon,
  web: ScreenIcon,
  book: BookIcon,
  target: TargetIcon,
  calendar: CalendarIcon,
  chart: ChartIcon,
};

// Micro-etichetta dell'hero: "solo agroalimentare" va ripetuto qui, non
// va aggiunto come nuovo campo dati per un'unica riga di testo per servizio.
const heroLabelBySlug = {
  'siti-web-contatti': 'realizzazione siti web',
  'ecommerce-shopify': 'e-commerce Shopify',
  'restyling-ottimizzazione': 'restyling e ottimizzazione',
  'consulenza-strategica': 'consulenza strategica',
  'wine-club': 'wine club',
};

export default function ServiceLandingTemplate({ service }) {
  const related = servizi.filter((s) => service.relatedSlugs.includes(s.slug));
  const waNumber = site.phone.replace(/[^\d]/g, '');
  const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Ciao, vorrei parlare di "${service.title}".`)}`;
  const heroLabel = heroLabelBySlug[service.slug] || service.title.toLowerCase();

  return (
    <>
      {/* ---------- 1. HERO ---------- */}
      <section
        className="relative bg-forest text-paper bg-cover bg-center"
        style={service.heroImage ? { backgroundImage: `url(${service.heroImage})` } : undefined}
      >
        {service.heroImage && (
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(0,59,30,0.88) 0%, rgba(0,59,30,0.82) 100%)' }}
            aria-hidden="true"
          />
        )}
        <div className="relative max-w-edge mx-auto px-6 pt-32 pb-20">
          <Link href="/servizi" className="text-xs text-paper/70 hover:underline">
            ← Cosa facciamo
          </Link>
          <p className="text-xs font-medium tracking-wider uppercase mt-6 text-brass">
            {heroLabel} · cantine, agriturismi, frantoi
          </p>
          <h1 className="display text-3xl md:text-5xl leading-[1.1] mt-4 max-w-2xl">{service.tesi}</h1>
          <p className="mt-5 text-lg text-paper/80 max-w-2xl leading-relaxed">{service.body}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Parliamone in 15 minuti
            </Link>
            <Link href="#come-lavoriamo" className="btn-ghost border-paper/40 text-paper hover:bg-paper/10">
              Guarda come lavoriamo
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 2. IL PROBLEMA RICONOSCIBILE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line">
              <Image
                src={service.problemBlock.image}
                alt={service.problemBlock.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div>
              <p className="eyebrow">{service.problemBlock.eyebrow}</p>
              <div className="mt-5 space-y-4">
                {service.problemBlock.paragraphs.map((p) => (
                  <p key={p} className="text-ink/75 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- 3. COSA CAMBIA ---------- */}
      <section className="bg-paper-dim">
        <div className="max-w-edge mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <h2 className="h2 text-2xl md:text-3xl text-ink">{service.changeBlock.heading}</h2>
                <div className="mt-5 space-y-4">
                  {service.changeBlock.paragraphs.map((p) => (
                    <p key={p} className="text-ink/75 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-line">
                <Image
                  src={service.changeBlock.image}
                  alt={service.changeBlock.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- 4. COSA INCLUDE ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Cosa include</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Concretamente, cosa vi consegniamo.</h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {service.includes.map((item, i) => {
            const Icon = includeIconMap[item.icon] || CompassIcon;
            return (
              <Reveal key={item.title} delay={i * 60}>
                <div className="border border-line rounded-xl p-5 h-full bg-paper">
                  <Icon className="w-6 h-6 text-forest" />
                  <p className="mt-3 font-semibold text-ink">{item.title}</p>
                  <p className="mt-1.5 text-sm text-ink/60 leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ---------- 5. COME LAVORIAMO ---------- */}
      <section id="come-lavoriamo" className="bg-ink text-paper scroll-mt-24">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">Come lavoriamo</p>
            <h2 className="h2 text-2xl md:text-3xl mt-3 max-w-2xl">Cosa succede dopo che firmate.</h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.howWeWork.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="border border-paper/15 rounded-2xl p-6 h-full flex flex-col">
                  <p className="font-semibold">
                    {s.n} · {s.title}
                  </p>
                  <p className="mt-1 text-xs text-brass">{s.duration}</p>
                  <p className="mt-3 text-sm text-paper/70 leading-relaxed flex-1">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {service.howWeWorkNote && <p className="mt-8 text-sm text-paper/60">{service.howWeWorkNote}</p>}
        </div>
      </section>

      {/* ---------- 6. PERCHÉ NOI E NON ALTRI ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Perché noi e non altri</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">Un confronto onesto.</h2>
        </Reveal>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="text-left py-3 pr-4 text-ink/50 font-medium"></th>
                <th className="text-left py-3 px-4 text-ink/60 font-medium">{service.comparisonTable.competitorA}</th>
                <th className="text-left py-3 px-4 text-ink/60 font-medium">{service.comparisonTable.competitorB}</th>
                <th className="text-left py-3 pl-4 text-forest font-semibold">MG Solutions</th>
              </tr>
            </thead>
            <tbody>
              {service.comparisonTable.rows.map((r) => (
                <tr key={r.label} className="border-b border-line">
                  <td className="py-3 pr-4 text-ink/70">{r.label}</td>
                  <td className="py-3 px-4 text-ink/55">{r.competitorA}</td>
                  <td className="py-3 px-4 text-ink/55">{r.competitorB}</td>
                  <td className="py-3 pl-4 text-ink font-medium">{r.mg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-sm text-ink/60 max-w-xl">{service.comparisonTable.closingLine}</p>
      </section>

      {/* ---------- 7. INVESTIMENTO ---------- */}
      <PricingBlock
        eyebrow={service.investment.eyebrow}
        heading={service.investment.heading}
        subheading={service.investment.subheading}
        plans={service.investment.plans}
        note={service.investment.note}
      />

      {/* ---------- 8. FAQ ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">Domande frequenti</p>
          <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">FAQ.</h2>
        </Reveal>
        <div className="mt-10 max-w-2xl">
          <FAQAccordion items={service.faqs} />
        </div>
      </section>

      {/* ---------- SERVIZI CORRELATI ---------- */}
      {related.length > 0 && (
        <section className="bg-paper-dim">
          <div className="max-w-edge mx-auto px-6 py-16">
            <p className="text-xs tracking-widest font-semibold text-forest">FUNZIONA ANCORA MEGLIO CON</p>
            <div className="mt-5 flex flex-wrap gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/servizi/${r.slug}`}
                  className="text-sm font-semibold text-ink/70 hover:text-forest border border-line rounded-full px-4 py-2 transition-colors"
                >
                  {r.title} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- 9. CTA FINALE ---------- */}
      <section className="bg-forest text-paper">
        <div className="max-w-edge mx-auto px-6 py-24 text-center">
          <p className="eyebrow text-brass">Prossimo passo</p>
          <h2 className="display text-4xl md:text-5xl mt-5 max-w-2xl mx-auto leading-tight">Parliamone.</h2>
          <p className="mt-5 text-paper/70 max-w-xl mx-auto">
            Prima call di 15 minuti, senza impegno. Vi diciamo cosa faremmo e quanto costerebbe. Se non ha senso ve lo diciamo.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 justify-center">
            <Link href="/prenota-call" className="btn-solid bg-brass text-ink hover:bg-paper">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call
            </Link>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-ghost border-paper/40 text-paper hover:bg-paper/10">
              Scrivici su WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-paper/50">Oppure passiamo da voi: siamo a Perugia e ci spostiamo volentieri.</p>
        </div>
      </section>

      <ServiceArea pageType="servizi" />
    </>
  );
}
