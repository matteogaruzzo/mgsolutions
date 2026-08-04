import { businessSuitePackages, businessSuiteModules } from '@/lib/data';

const cardStyles = {
  essenziale: 'border-line bg-paper-dim',
  crescita: 'border-primary bg-primary/5 shadow-lg',
  ecosistema: 'border-ink bg-paper',
};

const buttonStyles = {
  essenziale: 'bg-ink text-paper',
  crescita: 'bg-primary text-white',
  ecosistema: 'bg-ink text-paper',
};

export default function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {businessSuitePackages.map((pkg) => (
        <div
          key={pkg.id}
          className={`relative rounded-2xl border-2 p-8 flex flex-col ${
            cardStyles[pkg.id] || 'border-line bg-paper'
          }`}
        >
          {pkg.badge && (
            <span className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
              {pkg.badge}
            </span>
          )}

          <p className="text-xs font-semibold tracking-widest text-forest uppercase">{pkg.name}</p>
          <h3 className="mt-2 text-2xl font-bold text-gray-900 leading-snug">{pkg.benefitTitle}</h3>
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{pkg.tagline}</p>

          <div className="mt-5 flex items-baseline gap-2">
            <span className="font-bold text-4xl text-primary">{pkg.priceLabel}</span>
          </div>
          <p className="text-xs text-gray-500">{pkg.activationLabel}</p>
          <p className="mt-1 text-xs font-semibold text-forest">Prova gratis {pkg.trialDays} giorni</p>

          <ul className="mt-6 space-y-2.5 text-sm text-gray-700">
            {pkg.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-primary shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-line/60">
            <p className="text-xs font-semibold tracking-widest text-forest uppercase">Moduli attivabili</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {businessSuiteModules.map((m) => {
                const included = m.availableInPlans.includes(pkg.id);
                return (
                  <span
                    key={m.slug}
                    className={`text-xs rounded-full px-2.5 py-1 border ${
                      included
                        ? 'border-primary/30 bg-primary/10 text-primary font-medium'
                        : 'border-line text-gray-400 line-through decoration-gray-300'
                    }`}
                  >
                    {m.name.replace('MG ', '')}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex-1" />

          <a
            href={pkg.ctaHref}
            className={`block text-center w-full py-3 px-6 rounded-lg text-base font-bold ${buttonStyles[pkg.id] || 'bg-ink text-paper'}`}
          >
            {pkg.cta}
          </a>
          <p className="mt-2 text-center text-xs text-gray-500">{pkg.ctaSub}</p>
        </div>
      ))}
    </div>
  );
}
