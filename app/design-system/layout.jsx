// Applica i default tipografici e cromatici Agria al contenuto di /design-system.
// Nav, Footer, QuizFloatingButton, QuizPopup e CookieConsentBanner restano quelli
// del root layout (app/layout.jsx, non toccato): un layout annidato non può
// rimuovere elementi renderizzati dal genitore fuori da {children}.
export default function DesignSystemLayout({ children }) {
  return <div className="min-h-screen bg-agria-white font-agria-sans text-agria-graphite">{children}</div>;
}
