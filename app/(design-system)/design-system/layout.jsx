import '../../globals.css';
import { Inter, IBM_Plex_Mono } from 'next/font/google';

// Root layout indipendente per l'anteprima del design system: niente Nav,
// Footer, QuizFloatingButton, QuizPopup o CookieConsentBanner (quelli del
// sito legacy sono in app/(site)/layout.jsx, non condiviso con questo albero).
const agriaSans = Inter({
  subsets: ['latin'],
  variable: '--font-agria-sans',
  display: 'swap',
});
const agriaMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-agria-mono',
  display: 'swap',
});

export default function DesignSystemRootLayout({ children }) {
  return (
    <html lang="it" className={`${agriaSans.variable} ${agriaMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <div className="min-h-screen bg-agria-white font-agria-sans text-agria-graphite">
          {children}
        </div>
      </body>
    </html>
  );
}
