import './globals.css';
import { Poppins } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import QuizFloatingButton from '@/components/QuizFloatingButton';
import QuizPopup from '@/components/QuizPopup';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import { site } from '@/lib/data';
import { OG_IMAGE } from '@/lib/seo';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://matteogaruzzo.com'),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.positioning,
  keywords: [
    'agribusiness',
    'cantine',
    'oleifici',
    'agriturismi',
    'e-commerce Shopify vino',
    'wine hospitality',
    'software su misura',
    'Matteo Garuzzo',
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.positioning,
    type: 'website',
    locale: 'it_IT',
    siteName: site.name,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.positioning,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  verification: {
    other: {
      'msvalidate.01': '10DEF08EE1EB623FF967CEF5E9B73684',
    },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: 'https://matteogaruzzo.com',
  logo: 'https://matteogaruzzo.com/images/brand/mg-logo-mark.png',
  founder: { '@type': 'Person', name: site.founder },
  description: site.positioning,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  sameAs: [site.social.linkedin, site.social.instagram],
};

export default function RootLayout({ children }) {
  return (
    <html lang="it" className={poppins.variable}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
        <QuizFloatingButton />
        <QuizPopup />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
