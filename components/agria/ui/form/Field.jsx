export default function Field({ label, htmlFor, error, children, className = '' }) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label htmlFor={htmlFor} className="font-agria-sans text-agria-sm font-medium text-agria-graphite">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p id={htmlFor ? `${htmlFor}-error` : undefined} className="font-agria-sans text-agria-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
