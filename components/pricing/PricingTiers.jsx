import { pricingTiers } from '@/lib/data';

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
      {pricingTiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative rounded-2xl border-2 p-8 flex flex-col ${
            highlightStyles[tier.highlight] || 'border-line bg-paper'
          }`}
        >
          {tier.badge && (
            <span className="absolute -top-3 left-8 bg-[#0066cc] text-white text-xs font-bold tracking-wide uppercase px-3 py-1 rounded-full">
              {tier.badge}
            </span>
          )}

          <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>

          <div className="mt-4 flex items-baseline gap-2">
            <span
              className={`text-4xl font-bold ${
                tier.highlight === 'blue' ? 'text-[#0066cc]' : tier.highlight === 'green' ? 'text-primary' : 'text-ink'
              }`}
            >
              €{tier.price}
            </span>
            <span className="text-base text-gray-600">/mese</span>
            {tier.discountLabel && (
              <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">
                {tier.discountLabel}
              </span>
            )}
          </div>

          <ul className="mt-6 space-y-3 text-sm text-gray-700 flex-1">
            <li>
              <span className="font-semibold text-gray-900">Software: </span>
              {tier.softwareIncluded.join(', ')}
            </li>
            <li>
              <span className="font-semibold text-gray-900">Setup: </span>
              {tier.setup}
            </li>
            <li>
              <span className="font-semibold text-gray-900">Support: </span>
              {tier.support}
            </li>
            {tier.customIntegrations && (
              <li>
                <span className="font-semibold text-gray-900">Integrazioni: </span>
                {tier.customIntegrations}
              </li>
            )}
            <li>
              <span className="font-semibold text-gray-900">Prova: </span>
              {tier.trialDays} giorni
            </li>
          </ul>

          <button
            type="button"
            disabled
            title="Prossimamente — Stripe integration"
            className={`mt-8 w-full py-3 px-6 rounded-lg text-base font-bold opacity-50 cursor-not-allowed ${
              buttonStyles[tier.highlight]
            }`}
          >
            Abbonati a €{tier.price}
          </button>
        </div>
      ))}
    </div>
  );
}
