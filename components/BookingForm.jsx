'use client';

import { useState, useEffect } from 'react';
import { site } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';

const activityTypes = ['Cantina', 'Oleificio', 'Agriturismo', 'Altro'];
const projectTypes = ['Sito web', 'E-commerce', 'Software su misura', 'Consulenza strategica', 'Altro'];

// Precompila il form quando si arriva da una CTA della sezione software
// (?interesse=software), così il contesto del link non va perso una volta
// atterrati sul form di contatto. Letto da window.location invece di
// useSearchParams per non forzare questa pagina (e le altre che riusano
// BookingForm) fuori dal prerendering statico.
function prefillFromSearch(search) {
  const params = new URLSearchParams(search);
  const interesse = params.get('interesse');
  if (interesse !== 'software') return null;

  return { progetto: 'Software su misura', messaggio: 'Sono interessato a un software su misura.' };
}

export default function BookingForm() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    tipo: activityTypes[0],
    progetto: projectTypes[0],
    messaggio: '',
  });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const prefill = prefillFromSearch(window.location.search);
    if (prefill) setForm((f) => ({ ...f, ...prefill }));
  }, []);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const phone = site.phone.replace(/[^\d]/g, '');
    const text = [
      `Ciao Matteo, sono ${form.nome}.`,
      `Attività: ${form.tipo}`,
      `Tipo di progetto: ${form.progetto}`,
      form.email && `Email: ${form.email}`,
      form.whatsapp && `WhatsApp: ${form.whatsapp}`,
      form.messaggio && `Messaggio: ${form.messaggio}`,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-leaf-top bg-paper rounded-2xl p-8 border border-line"
      style={{ '--sector-divider': '#008b47' }}
    >
      <p className="eyebrow">Prenota</p>
      <h3 className="h3 text-2xl mt-3 text-ink">Prenota una consulenza gratuita</h3>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <input
          required
          placeholder="Nome *"
          value={form.nome}
          onChange={update('nome')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
        <input
          required
          type="email"
          placeholder="Email *"
          value={form.email}
          onChange={update('email')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
        <input
          required
          placeholder="WhatsApp *"
          value={form.whatsapp}
          onChange={update('whatsapp')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
        <select
          value={form.tipo}
          onChange={update('tipo')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary bg-paper"
        >
          {activityTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select
          value={form.progetto}
          onChange={update('progetto')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary bg-paper sm:col-span-2"
        >
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Messaggio breve (facoltativo)"
        value={form.messaggio}
        onChange={update('messaggio')}
        rows={3}
        className="mt-4 w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
      />

      <button type="submit" className="btn-solid mt-6">
        <GrapeIcon className="w-4 h-4" />
        Prenota consulenza gratuita
      </button>

      <p className="mt-4 text-xs text-ink/50">
        {sent
          ? 'Si è aperto WhatsApp con il messaggio pronto: invialo e ti ricontatto entro 24 ore.'
          : 'Ti ricontatto entro 24 ore su WhatsApp. Gratuito, nessun impegno.'}
      </p>
    </form>
  );
}
