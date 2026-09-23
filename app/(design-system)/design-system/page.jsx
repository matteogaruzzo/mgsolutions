import { notFound } from 'next/navigation';
import {
  Container,
  Section,
  Eyebrow,
  Heading,
  Text,
  Button,
  TextLink,
  Card,
  Tabs,
  HeroBackdrop,
  Input,
  Textarea,
  Select,
  Checkbox,
} from '@/components/agria/ui';
import { AGRIA_COLORS, CONTRAST_ROWS, contrastRatio } from './contrast';

const PREVIEW_ENABLED =
  process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_DESIGN_PREVIEW === 'true';

export const metadata = {
  title: 'Design System Agria — anteprima interna',
  description: 'Pagina di anteprima interna dei token e dei componenti del design system Agria.',
  robots: { index: false, follow: false },
};

const COLOR_SWATCHES = [
  { key: 'green', name: 'Agria Green', token: 'agria-green', use: 'Accento: titoli grandi, icone, bordi, stati attivi, gradiente hero' },
  { key: 'greenDark', name: 'Agria Green Dark', token: 'agria-green-dark', use: 'Testi verdi, link, bottone primario' },
  { key: 'graphite', name: 'Graphite', token: 'agria-graphite', use: 'Testo principale, bottone secondario, superfici scure' },
  { key: 'white', name: 'White', token: 'agria-white', use: 'Sfondo principale' },
  { key: 'offwhite', name: 'Off White', token: 'agria-offwhite', use: 'Sezioni alternate, superfici secondarie' },
  { key: 'grey', name: 'Grey', token: 'agria-grey', use: 'Testo secondario' },
  { key: 'border', name: 'Border', token: 'agria-border', use: 'Bordi, divisori' },
];

const TYPE_SCALE = [
  { level: 'display', label: 'Display', sample: 'Sistemi digitali per l’agroalimentare' },
  { level: 'h1', label: 'H1', sample: 'Titolo di pagina' },
  { level: 'h2', label: 'H2', sample: 'Titolo di sezione' },
  { level: 'h3', label: 'H3', sample: 'Titolo di blocco' },
];

const TEXT_SIZES = [
  { size: 'lg', label: 'Testo grande (20px)', sample: 'Un paragrafo introduttivo, usato per aprire una sezione.' },
  { size: 'body', label: 'Testo (17px)', sample: 'Il corpo del testo standard, con interlinea generosa per la lettura.' },
  { size: 'sm', label: 'Piccolo (14px)', sample: 'Note, didascalie, dettagli secondari.' },
];

const TABS_DEMO = [
  { label: 'Approccio', content: 'Testo di esempio per la prima scheda: descrive un approccio in modo neutro.' },
  { label: 'Processo', content: 'Testo di esempio per la seconda scheda: descrive un processo in modo neutro.' },
  { label: 'Risultati', content: 'Testo di esempio per la terza scheda: descrive un esito in modo neutro.' },
];

function ratioLabel(fgKey, bgKey) {
  const ratio = contrastRatio(AGRIA_COLORS[fgKey].rgb, AGRIA_COLORS[bgKey].rgb);
  return { ratio, label: `${ratio.toFixed(2)}:1` };
}

export default function DesignSystemPage() {
  if (!PREVIEW_ENABLED) {
    notFound();
  }

  return (
    <div className="bg-agria-white">
      {/* Hero */}
      <Section background="white" className="relative overflow-hidden">
        <HeroBackdrop />
        <Container className="relative flex flex-col gap-6">
          <Eyebrow>Documento interno</Eyebrow>
          <Heading level="display">Design System Agria</Heading>
          <Text size="lg" muted>
            Anteprima di token e componenti di base per il redesign. Pagina non indicizzata, non
            collegata dal sito, visibile solo in sviluppo o con variabile d&apos;ambiente esplicita.
          </Text>
        </Container>
      </Section>

      {/* Colori */}
      <Section background="offwhite">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Token</Eyebrow>
            <Heading level="h2">Colori</Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COLOR_SWATCHES.map((swatch) => (
              <div key={swatch.key} className="rounded-agria-card border border-agria-border bg-agria-white p-6">
                <div
                  className="mb-4 h-20 rounded-xl border border-agria-border"
                  style={{ backgroundColor: AGRIA_COLORS[swatch.key].hex }}
                  aria-hidden="true"
                />
                <Text as="p" size="sm" className="font-medium">
                  {swatch.name}
                </Text>
                <Text as="p" size="sm" muted className="font-agria-mono">
                  {swatch.token} — {AGRIA_COLORS[swatch.key].hex}
                </Text>
                <Text as="p" size="sm" muted className="mt-2">
                  {swatch.use}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Tipografia */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Token</Eyebrow>
            <Heading level="h2">Tipografia</Heading>
            <Text muted>Inter per interfaccia e titoli, IBM Plex Mono per etichette e dettagli.</Text>
          </div>

          <div className="flex flex-col gap-8">
            {TYPE_SCALE.map((item) => (
              <div key={item.level} className="border-b border-agria-border pb-8 last:border-none">
                <Text as="p" size="sm" muted className="mb-2 font-agria-mono uppercase">
                  {item.label}
                </Text>
                <Heading level={item.level} as="p">
                  {item.sample}
                </Heading>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {TEXT_SIZES.map((item) => (
              <div key={item.size}>
                <Text as="p" size="sm" muted className="mb-1 font-agria-mono uppercase">
                  {item.label}
                </Text>
                <Text size={item.size}>{item.sample}</Text>
              </div>
            ))}
            <div>
              <Text as="p" size="sm" muted className="mb-1 font-agria-mono uppercase">
                Etichetta
              </Text>
              <Eyebrow>Etichetta di sezione</Eyebrow>
            </div>
          </div>
        </Container>
      </Section>

      {/* Forme e spazi */}
      <Section background="offwhite">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Token</Eyebrow>
            <Heading level="h2">Forme e spazi</Heading>
          </div>
          <ul className="flex flex-col gap-2">
            <li>
              <Text as="span" size="sm" muted>
                Raggio card (<span className="font-agria-mono">agria-card</span>): 24px
              </Text>
            </li>
            <li>
              <Text as="span" size="sm" muted>
                Bottoni: pillola (border-radius massimo)
              </Text>
            </li>
            <li>
              <Text as="span" size="sm" muted>
                Bordi: 1px, colore <span className="font-agria-mono">agria-border</span>
              </Text>
            </li>
            <li>
              <Text as="span" size="sm" muted>
                Spaziatura verticale sezioni (<span className="font-agria-mono">agria-section</span>):
                fluida, da 64px (mobile) a 160px (desktop) — questa stessa pagina la usa per ogni
                sezione
              </Text>
            </li>
            <li>
              <Text as="span" size="sm" muted>
                Ritmo verticale interno: lo spazio fra blocchi dentro una sezione è ora{' '}
                <span className="font-agria-mono">gap-6</span>, più vicino al{' '}
                <span className="font-agria-mono">gap-3</span> fra etichetta, titolo e testo —
                lo spazio fra sezioni diverse resta invariato
              </Text>
            </li>
            <li>
              <Text as="span" size="sm" muted>
                Larghezza massima del testo (<span className="font-agria-mono">Text</span>):{' '}
                <span className="font-agria-mono">max-w-prose</span> (65ch, ~600px) di default,
                disattivabile con la prop <span className="font-agria-mono">measure=false</span>
              </Text>
            </li>
          </ul>
        </Container>
      </Section>

      {/* Bottoni e link */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Componenti</Eyebrow>
            <Heading level="h2">Bottoni e link</Heading>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary">Bottone primario</Button>
            <Button variant="secondary">Bottone secondario</Button>
            <Button variant="ghost">Bottone ghost</Button>
            <Button variant="primary" disabled>
              Disabilitato
            </Button>
          </div>
          <div>
            <TextLink href="#">Scopri di più</TextLink>
          </div>
        </Container>
      </Section>

      {/* Card */}
      <Section background="offwhite">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Componenti</Eyebrow>
            <Heading level="h2">Card</Heading>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card eyebrow="Etichetta" title="Titolo di esempio" action={<TextLink href="#">Approfondisci</TextLink>}>
              Testo descrittivo neutro per illustrare il componente card, senza riferimenti reali.
            </Card>
            <Card eyebrow="Etichetta" title="Titolo di esempio" action={<Button variant="ghost">Azione</Button>}>
              Un secondo esempio di card con un&apos;azione diversa, per mostrare la flessibilità.
            </Card>
            <Card title="Senza etichetta">
              Una card può anche non avere etichetta o azione: solo titolo e testo.
            </Card>
          </div>
        </Container>
      </Section>

      {/* Tabs */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Componenti</Eyebrow>
            <Heading level="h2">Tabs</Heading>
            <Text muted>Navigabile da tastiera con le frecce, Home ed End.</Text>
          </div>
          <Tabs items={TABS_DEMO} />
        </Container>
      </Section>

      {/* HeroBackdrop */}
      <Section background="offwhite">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Componenti</Eyebrow>
            <Heading level="h2">HeroBackdrop</Heading>
            <Text muted>Gradiente radiale verde, opacità massima ~9%, nessuna animazione.</Text>
          </div>
          <div className="relative overflow-hidden rounded-agria-card border border-agria-border bg-agria-white p-12">
            <HeroBackdrop />
            <div className="relative flex flex-col gap-3">
              <Heading level="h3" as="p">
                Testo scuro sopra il gradiente
              </Heading>
              <Text muted>Il gradiente resta leggibilissimo sotto qualsiasi testo grafite.</Text>
            </div>
          </div>
        </Container>
      </Section>

      {/* Campi form */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Componenti</Eyebrow>
            <Heading level="h2">Campi form</Heading>
            <Text muted>Solo stile e struttura: nessun invio collegato.</Text>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Input label="Nome" placeholder="Mario Rossi" />
            <Input label="Email con errore" placeholder="nome@esempio.it" error="Inserisci un indirizzo email valido" />
            <Select label="Argomento" defaultValue="">
              <option value="" disabled>
                Seleziona un&apos;opzione
              </option>
              <option value="a">Opzione A</option>
              <option value="b">Opzione B</option>
            </Select>
            <Textarea label="Messaggio" placeholder="Scrivi qui il tuo messaggio" />
          </div>
          <Checkbox label="Ho letto e accetto l'informativa (testo di esempio)" />
        </Container>
      </Section>

      {/* Contrasti */}
      <Section background="offwhite">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Accessibilità</Eyebrow>
            <Heading level="h2">Contrasti calcolati (WCAG 2.1)</Heading>
            <Text muted>Ogni combinazione usata per testo raggiunge almeno 4.5:1.</Text>
          </div>
          <div className="overflow-x-auto rounded-agria-card border border-agria-border bg-agria-white">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-agria-border">
                  <th scope="col" className="px-6 py-4 font-agria-sans text-agria-sm font-medium text-agria-graphite">
                    Combinazione
                  </th>
                  <th scope="col" className="px-6 py-4 font-agria-sans text-agria-sm font-medium text-agria-graphite">
                    Rapporto
                  </th>
                  <th scope="col" className="px-6 py-4 font-agria-sans text-agria-sm font-medium text-agria-graphite">
                    AA normale (4.5:1)
                  </th>
                  <th scope="col" className="px-6 py-4 font-agria-sans text-agria-sm font-medium text-agria-graphite">
                    Uso
                  </th>
                </tr>
              </thead>
              <tbody>
                {CONTRAST_ROWS.map((row, index) => {
                  const { ratio, label } = ratioLabel(row.fg, row.bg);
                  const passes = ratio >= 4.5;
                  return (
                    <tr key={index} className="border-b border-agria-border last:border-none">
                      <td className="px-6 py-4 font-agria-mono text-agria-sm text-agria-graphite">
                        {AGRIA_COLORS[row.fg].hex} su {AGRIA_COLORS[row.bg].hex}
                      </td>
                      <td className="px-6 py-4 font-agria-mono text-agria-sm text-agria-graphite">{label}</td>
                      <td className="px-6 py-4 text-agria-sm">
                        {passes ? (
                          <span className="text-agria-green-dark">Passa</span>
                        ) : (
                          <span className="text-red-600">Fallisce</span>
                        )}
                        {!row.usedForText && (
                          <Text as="span" size="sm" muted className="ml-2">
                            (non usato per testo)
                          </Text>
                        )}
                      </td>
                      <td className="px-6 py-4 text-agria-sm text-agria-grey">{row.usage}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>
    </div>
  );
}
