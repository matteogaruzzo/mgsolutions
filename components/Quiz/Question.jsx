'use client';

export default function Question({ question, value, onChange, onNext, onBack, nextLabel, nextDisabled }) {
  const isMulti = question.type === 'multiselect';
  const isRadio = question.type === 'radio';
  const isTextarea = question.type === 'textarea';
  const isUrl = question.type === 'url';

  function toggleMulti(optValue) {
    const current = Array.isArray(value) ? value : [];
    const next = current.includes(optValue) ? current.filter((v) => v !== optValue) : [...current, optValue];
    onChange(next);
  }

  const canProceed =
    !nextDisabled && (question.optional || (isMulti ? (value || []).length > 0 : isTextarea || isUrl ? true : !!value));

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="h2 text-2xl md:text-3xl text-ink">{question.title}</h2>
      {question.description && <p className="mt-2 text-sm text-ink/55">{question.description}</p>}

      {(isMulti || isRadio) && (
        <div className="mt-8 grid sm:grid-cols-2 gap-3">
          {question.options.map((opt) => {
            const selected = isMulti ? (value || []).includes(opt.value) : value === opt.value;
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => (isMulti ? toggleMulti(opt.value) : onChange(opt.value))}
                className={`text-left border rounded-xl px-5 py-4 text-sm transition-colors ${
                  selected
                    ? 'border-forest bg-forest/5 text-ink font-semibold'
                    : 'border-line text-ink/75 hover:border-ink/30'
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      )}

      {isTextarea && (
        <textarea
          value={value || ''}
          onChange={(e) => onChange(e.target.value.slice(0, question.maxLength || 300))}
          rows={4}
          maxLength={question.maxLength || 300}
          className="mt-8 w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary resize-none"
          placeholder="Facoltativo..."
        />
      )}

      {isUrl && (
        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value.slice(0, 300))}
          className="mt-8 w-full border border-line rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary"
          placeholder={question.placeholder || 'https://www.tuosito.it'}
        />
      )}

      <div className="mt-10 flex items-center justify-between">
        {onBack ? (
          <button type="button" onClick={onBack} className="text-sm text-ink/50 hover:text-ink">
            ← Indietro
          </button>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={onNext}
          disabled={!canProceed}
          className="btn-solid disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {nextLabel || 'Continua →'}
        </button>
      </div>
    </div>
  );
}
