'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export default function CategoryFilter({ categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get('category') || 'tutti';

  const options = ['tutti', ...categories];

  const handleFilter = (cat) => {
    if (cat === 'tutti') {
      router.push('/blog');
    } else {
      router.push(`/blog?category=${encodeURIComponent(cat)}`);
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mt-10 pb-6 rule">
      <span className="text-xs text-ink/50 mr-1">Filtra per categoria:</span>
      {options.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => handleFilter(cat)}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === cat || (active === 'tutti' && cat === 'tutti')
              ? 'bg-forest text-paper'
              : 'bg-paper-dim text-ink/65 hover:bg-forest/10 hover:text-forest'
          }`}
        >
          {cat === 'tutti' ? 'Tutti' : cat}
        </button>
      ))}
      {active !== 'tutti' && (
        <button
          type="button"
          onClick={() => handleFilter('tutti')}
          className="text-xs text-ink/45 hover:text-forest ml-1"
        >
          ✕ Pulisci filtri
        </button>
      )}
    </div>
  );
}
