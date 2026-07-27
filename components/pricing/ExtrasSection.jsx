import { pricingExtras } from '@/lib/data';

export default function ExtrasSection() {
  return (
    <div>
      <p className="eyebrow">Extra & opzioni</p>
      <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">Hai bisogno di più?</h2>
      <p className="mt-4 text-ink/70 max-w-2xl leading-relaxed">Puoi sempre aggiungere:</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
        {pricingExtras.map((e) => (
          <div key={e} className="border border-line rounded-xl px-5 py-4 text-sm text-ink/75 bg-paper">
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}
