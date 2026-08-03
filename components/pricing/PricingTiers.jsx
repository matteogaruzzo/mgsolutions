import { businessSuitePackages, businessSuiteModules } from '@/lib/data';

// Nessun prezzo pubblicato: la Suite è in accesso anticipato (solo Lead &
// Sales esiste oggi). I bottoni portano a /contatti, non a un checkout —
// non c'è alcun pagamento da attivare finché i piani non sono reali.
const highlightStyles = {
  blue: 'border-[#0066cc] bg-blue-50/60 md:col-span-2 lg:col-span-1',
  green: 'border-primary bg-primary/5',
};

const buttonStyles = {
  null: 'bg-ink text-paper',
  blue: 'bg-[#0066cc] text-white',
  green: 'bg-primary text-white',
};

const moduleSlots = {
  essenziale: { count: 1, label: '1 modulo a scelta tra quelli disponibili' },
  crescita: { count: 3, label: 'Fino a 3 moduli a scelta tra quelli disponibili' },
  ecosistema: { count: 5, label: 'Tutti i moduli pubblicati' },
};

export default function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {businessSuitePackages.map((pkg) => (
        <div
          key={pkg.id}
          className={`relative rounded-2xl border-2 p-8 flex flex-col ${
            highlightStyles[pkg.highlight] || 'border-line bg-paper'
          }`}
        >
          {pkg.badge && (
            <span className="absolute -top-3 left-8 bg-[#0066cc] text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}

          <p className="text-xs font-semibold tracking-widest text-forest uppercase">{pkg.name}</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 leading-snug">{pkg.benefitTitle}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{pkg.tagline}</p>

          <div className="mt-5 flex items-baseline gap-2">
            <span
              className={`font-bold ${pkg.price ? 'text-4xl' : 'text-xl'} ${
                pkg.price
                  ? 'text-primary'
                  : pkg.highlight === 'blue'
                    ? 'text-[#0066cc]'
                    : pkg.highlight === 'green'
                      ? 'text-primary'
                      : 'text-ink'
              }`}
            >
              {pkg.priceLabel}
            </span>
            {pkg.price && <span className="text-base text-gray-600">/mese</span>}
          </div>
          <p className="text-xs text-gray-500">{pkg.activationLabel}</p>
          {pkg.trialDays && (
            <p className="mt-1 text-xs font-semibold text-forest">Prova gratis {pkg.trialDays} giorni</p>
          )}

          <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
            {pkg.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-primary shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          {pkg.availabilityNote && (
            <div className="mt-6 rounded-xl bg-paper-dim/70 border border-line/60 p-4">
              <p className="text-xs text-ink/65 leading-relaxed">{pkg.availabilityNote}</p>
            </div>
          )}

          <div className="mt-6 pt-6 border-t border-line/60">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">
              {moduleSlots[pkg.id].label}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {businessSuiteModules.map((m) => {
                const isAvailable = m.status === 'early-access';
                return (
                  <span
                    key={m.slug}
                    title={m.statusLabel}
                    className={`text-xs rounded-full px-2.5 py-1 border ${
                      isAvailable
                        ? 'border-primary/30 bg-primary/10 text-primary font-medium'
                        : 'border-line text-gray-500'
                    }`}
                  >
                    {isAvailable ? '● ' : '○ '}
                    {m.name.replace('MG ', '')}
                  </span>
                );
              })}
            </div>
            <p className="mt-2 text-[11px] text-gray-500">
              ● disponibile in accesso anticipato · ○ in roadmap, non ancora attivabile
            </p>
          </div>

          <div className="mt-8 flex-1" />

          <a
            href={pkg.ctaHref}
            className={`block text-center w-full py-3 px-6 rounded-lg text-base font-bold ${buttonStyles[pkg.highlight]}`}
          >
            {pkg.cta}
          </a>
          <p className="mt-2 text-center text-xs text-gray-500">{pkg.ctaSub}</p>
        </div>
      ))}
    </div>
  );
}
