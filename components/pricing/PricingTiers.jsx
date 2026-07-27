import { businessSuitePackages } from '@/lib/data';

// Bottoni volutamente disabled: il checkout Stripe non è ancora collegato.
// Quando lo sarà, questo file andrà convertito in 'use client' per gestire
// l'onClick reale (POST /api/checkout/create → redirect Stripe Checkout).
const highlightStyles = {
  blue: 'border-[#0066cc] bg-blue-50/60 md:col-span-2 lg:col-span-1',
  green: 'border-primary bg-primary/5',
};

const buttonStyles = {
  null: 'bg-ink text-paper',
  blue: 'bg-[#0066cc] text-white',
  green: 'bg-primary text-white',
};

export default function PricingTiers() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

          <h3 className="text-2xl font-bold text-gray-900">{pkg.name}</h3>
          <p className="mt-1 text-sm text-gray-600">{pkg.tagline}</p>

          <div className="mt-4 flex items-baseline gap-2">
            <span
              className={`text-4xl font-bold ${
                pkg.highlight === 'blue' ? 'text-[#0066cc]' : pkg.highlight === 'green' ? 'text-primary' : 'text-ink'
              }`}
            >
              €{pkg.price}
            </span>
            <span className="text-base text-gray-600">/mese</span>
          </div>
          <p className="text-xs text-gray-500">+ €{pkg.activation} attivazione (una tantum)</p>

          <ul className="mt-6 space-y-2.5 text-sm text-gray-700 flex-1">
            {pkg.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-primary shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <button
            type="button"
            disabled
            title="Prossimamente — Integrazione Stripe in corso"
            className={`mt-8 w-full py-3 px-6 rounded-lg text-base font-bold opacity-50 cursor-not-allowed ${
              buttonStyles[pkg.highlight]
            }`}
          >
            {pkg.cta}
          </button>
        </div>
      ))}
    </div>
  );
}
