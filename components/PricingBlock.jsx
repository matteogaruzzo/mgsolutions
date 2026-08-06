import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { site } from '@/lib/data';
import { formatEuro, installmentLine, HARVEST_INSTALLMENT_LINE, pricingWhatsappHref } from '@/lib/pricing-data';
import { GrapeIcon } from '@/components/icons/WineIcons';

const accentStyles = {
  forest: {
    border: 'border-forest',
    eyebrow: 'text-forest',
    check: 'text-forest',
    btn: 'btn-solid',
  },
  wine: {
    border: 'border-wine-accent',
    eyebrow: 'text-wine-accent',
    check: 'text-wine-accent',
    btn: 'btn-solid bg-wine-accent hover:bg-ink',
  },
};

const gridBySize = { 1: 'max-w-2xl', 2: 'grid sm:grid-cols-2 gap-6', 3: 'grid sm:grid-cols-3 gap-6' };

// Blocco prezzi riutilizzabile: 1-3 card fianco a fianco, lette dai piani
// passati in `plans` (ognuno = { ...pricing.<voce>, offerName, offerDescription,
// benefits, exclusions, reassurances, closing, installmentVariant }).
// Nessuna cifra va scritta qui dentro: price/installments arrivano da lib/pricing-data.js.
export default function PricingBlock({
  eyebrow = 'Prezzi pubblicati',
  heading,
  subheading,
  plans,
  note,
  accent = 'forest',
  ctaHref = '/prenota-call',
  ctaLabel = 'Prenota una call',
}) {
  const a = accentStyles[accent] || accentStyles.forest;
  const gridClass = gridBySize[plans.length] || gridBySize[3];

  return (
    <section className="bg-paper-dim">
      <div className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          {heading && <h2 className="h2 text-2xl md:text-3xl mt-3 text-ink max-w-2xl">{heading}</h2>}
          {subheading && <p className="mt-2 text-ink/60 max-w-2xl">{subheading}</p>}
        </Reveal>
        <div className={`mt-10 ${gridClass}`}>
          {plans.map((plan, i) => {
            const waHref = pricingWhatsappHref(site.phone, plan.offerName || plan.name, plan.price);
            const line = plan.installmentVariant === 'harvest' ? HARVEST_INSTALLMENT_LINE : installmentLine(plan);
            return (
              <Reveal key={plan.offerName || plan.name} delay={i * 80}>
                <div
                  className={`relative h-full flex flex-col rounded-2xl p-8 md:p-10 bg-paper border-2 ${
                    plan.featured ? a.border : 'border-line'
                  }`}
                >
                  {plan.featured && (
                    <span
                      className={`absolute -top-3 left-8 px-3 py-1 text-xs font-semibold uppercase tracking-wide rounded-full bg-paper border-2 ${a.border} ${a.eyebrow}`}
                    >
                      ⭐ Consigliata
                    </span>
                  )}
                  <p className={`text-xs font-semibold tracking-widest uppercase ${a.eyebrow}`}>{plan.offerName || plan.name}</p>
                  <p className="mt-3 text-4xl md:text-5xl font-bold text-ink">
                    {formatEuro(plan.price)}€{plan.period ? `/${plan.period}` : ''}
                  </p>
                  {line && <p className="mt-2 text-sm text-ink/60">{line}</p>}
                  {plan.offerDescription && <p className="mt-5 text-ink/75 leading-relaxed">{plan.offerDescription}</p>}

                  {plan.benefits?.length > 0 && (
                    <ul className="mt-6 space-y-2.5">
                      {plan.benefits.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-ink/80">
                          <span className={`font-bold shrink-0 ${a.check}`}>✓</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.exclusions?.length > 0 && (
                    <ul className="mt-3 space-y-2.5">
                      {plan.exclusions.map((x) => (
                        <li key={x} className="flex gap-2.5 text-sm text-ink/40">
                          <span className="font-bold shrink-0 text-ink/30">✗</span>
                          {x}
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.reassurances?.length > 0 && (
                    <ul className="mt-6 pt-6 border-t border-line space-y-2.5">
                      {plan.reassurances.map((r) => (
                        <li key={r} className="flex gap-2.5 text-sm text-ink/70">
                          <span className={`font-bold shrink-0 ${a.check}`}>✓</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  )}

                  {plan.closing && <p className="mt-6 text-sm text-ink/55 italic">{plan.closing}</p>}

                  <div className="pt-8 mt-auto flex flex-wrap gap-3">
                    <Link href={ctaHref} className={a.btn}>
                      <GrapeIcon className="w-4 h-4" />
                      {ctaLabel}
                    </Link>
                    <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                      Scrivici su WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        {note && <p className="mt-8 text-sm text-ink/60 max-w-2xl">{note}</p>}
      </div>
    </section>
  );
}
