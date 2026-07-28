import { webBundles, siteDevPricing } from '@/lib/data';

export default function BundleSection() {
  return (
    <div>
      {/* ---------- BUNDLE SITO + SOFTWARE ---------- */}
      <div>
        <p className="eyebrow">Tutto insieme</p>
        <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Il pacchetto completo: sito + software.</h2>
        <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">
          Sito, manutenzione e software. Un’unica soluzione, un unico partner.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {webBundles.map((b) => (
            <div key={b.id} className="border border-line rounded-2xl p-7 bg-paper">
              <h3 className="text-xl font-bold text-gray-900">{b.name}</h3>
              <p className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-bold text-ink">€{b.price}</span>
                <span className="text-sm text-gray-600">/mese</span>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-gray-700">
                {b.items.map((i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary shrink-0">+</span>
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-gray-500">Attivazione software: €{b.activation} (una tantum)</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-ink/60 max-w-2xl italic">
          La realizzazione iniziale del sito web è sempre preventivata separatamente.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4 max-w-2xl">
          {siteDevPricing.map((s) => (
            <div key={s.label} className="border border-line rounded-xl px-5 py-4 text-sm">
              <p className="text-ink/80">{s.label}</p>
              <p className="mt-1 font-semibold text-ink">{s.range}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
