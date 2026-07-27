'use client';

import { useState } from 'react';

export default function ContactForm({ onBack, onSubmit }) {
  const [form, setForm] = useState({ nome: '', email: '', telefono: '', azienda: '', privacy: false, website: '' });

  function update(field) {
    return (e) =>
      setForm((f) => ({ ...f, [field]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <h2 className="h2 text-2xl md:text-3xl text-ink">Chi sei?</h2>
      <p className="mt-3 text-sm text-ink/60">
        Un ultimo passo: prenoti uno slot, e solo allora ti mandiamo la proposta via email.
      </p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
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
          placeholder="Telefono / WhatsApp"
          value={form.telefono}
          onChange={update('telefono')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
        <input
          placeholder="Nome azienda"
          value={form.azienda}
          onChange={update('azienda')}
          className="border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
        />
      </div>

      <label className="mt-5 flex items-start gap-2 text-xs text-ink/60">
        <input required type="checkbox" checked={form.privacy} onChange={update('privacy')} className="mt-0.5" />
        Ho letto e accetto l&apos;informativa privacy.
      </label>

      {/* Honeypot anti-spam: invisibile per gli umani, spesso compilato dai bot. */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update('website')}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="mt-8 flex items-center justify-between">
        <button type="button" onClick={onBack} className="text-sm text-ink/50 hover:text-ink">
          ← Indietro
        </button>
        <button type="submit" className="btn-solid">
          Scegli il tuo orario →
        </button>
      </div>
    </form>
  );
}
