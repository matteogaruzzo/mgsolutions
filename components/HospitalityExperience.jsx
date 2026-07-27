'use client';

import { useState } from 'react';
import {
  GlassIcon,
  DiningTableIcon,
  RusticBedIcon,
  FarmhouseDoorIcon,
} from '@/components/icons/WineIcons';

const experiences = [
  {
    icon: FarmhouseDoorIcon,
    label: 'Colazione',
    body: 'Prodotti dell’azienda, serviti nel casale al risveglio.',
  },
  {
    icon: DiningTableIcon,
    label: 'Pranzo',
    body: 'Cucina farm-to-table, con ingredienti dell’orto e della cantina.',
  },
  {
    icon: GlassIcon,
    label: 'Degustazione',
    body: 'Wine tasting guidato tra i filari o in cantina.',
  },
  {
    icon: DiningTableIcon,
    label: 'Cena',
    body: 'Menù stagionale, abbinato alle etichette della casa.',
  },
  {
    icon: RusticBedIcon,
    label: 'Pernottamento',
    body: 'Camere rustiche, arredate con materiali naturali del territorio.',
  },
];

export default function HospitalityExperience() {
  const [active, setActive] = useState(0);
  const exp = experiences[active];
  const Icon = exp.icon;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {experiences.map((e, i) => (
          <button
            key={e.label}
            onClick={() => setActive(i)}
            className={`text-sm px-4 py-2 rounded-full border transition-colors ${
              i === active
                ? 'bg-hospitality-accent text-paper border-hospitality-accent'
                : 'border-line text-ink/60 hover:border-hospitality-accent hover:text-hospitality-accent'
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="mt-8 card-leaf-top bg-paper rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
        <Icon className="w-10 h-10 text-hospitality-accent shrink-0" />
        <div>
          <h3 className="h3 text-2xl text-ink">{exp.label}</h3>
          <p className="mt-2 text-ink/65 leading-relaxed max-w-md">{exp.body}</p>
        </div>
      </div>
    </div>
  );
}
