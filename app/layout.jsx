import './globals.css';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { site } from '@/lib/data';

const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});
const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});
const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.matteogaruzzo.com'),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description:
    'MG Solutions realizza software e agenti AI, e-commerce Shopify e siti web performanti per PMI. Davanti Matteo Garuzzo, dietro un team. Più vendite, lead e fiducia.',
  keywords: [
    'agenti AI',
    'software su misura',
    'Shopify',
    'e-commerce',
    'siti web',
    'automazioni AI',
    'Matteo Garuzzo',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description:
      'Software e agenti AI, e-commerce Shopify e siti web performanti per PMI.',
    type: 'website',
    locale: 'it_IT',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
