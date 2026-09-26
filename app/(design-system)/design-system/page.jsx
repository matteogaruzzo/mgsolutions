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
  GradientSection,
  HighlightCard,
} from '@/components/agria/ui';
import { AutoTabs, FieldScene, HoverGroup, RotatingHeadline, ZoomImage } from '@/components/agria/motion';
import {
  AGRIA_COLORS,
  CONTRAST_ROWS,
  DARK_CONTRAST_ROWS,
  INTERACTION_CONTRAST_ROWS,
  contrastRatio,
} from './contrast';
import FocusOverlayDemo from './FocusOverlayDemo';
import Icon, { ICON_NAMES } from '@/components/agria/icons/Icon';
import { agriaImageOr } from '@/lib/agria-images';

// foto d'esempio per ZoomImage: la stessa del settore Hospitality
const DEMO_PHOTO = agriaImageOr('settori/hospitality', {
  src: '/images/agria/settori/hospitality.jpg',
  alt: 'Camera con letto matrimoniale e lampade accese sui comodini',
});

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

const DARK_SWATCHES = [
  { key: 'ink', name: 'Ink', token: 'agria-ink', use: 'Fondo di header, barra annuncio, hero e chiusura' },
  { key: 'greenBright', name: 'Agria Green Bright', token: 'agria-green-bright', use: 'Solo su fondo scuro: CTA, link, focus, accenti' },
  { key: 'white', name: 'On Dark', token: 'agria-on-dark', use: 'Testo principale su fondo scuro' },
  { key: 'onDarkMuted', name: 'On Dark Muted', token: 'agria-on-dark-muted', use: 'Testo secondario e voci di menu su fondo scuro (bianco al 70%)' },
];

const DEMO_PHRASES = ['la parte finale', 'in ciclo continuo', 'senza salti'];

const AUTOTABS_DEMO = [
  { label: 'Prima scheda', content: <Text muted>Contenuto di esempio della prima scheda.</Text> },
  { label: 'Seconda scheda', content: <Text muted>Contenuto di esempio della seconda scheda.</Text> },
  { label: 'Terza scheda', content: <Text muted>Contenuto di esempio della terza scheda.</Text> },
];

const HIGHLIGHT_DEMO = [
  { title: 'Primo elemento', text: 'Testo breve di esempio.', meta: 'etichetta' },
  { title: 'Secondo elemento', text: 'Testo breve di esempio.', meta: 'etichetta' },
  { title: 'Terzo elemento', text: 'Testo breve di esempio.', meta: 'etichetta' },
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

      {/* Interazioni */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Interazioni</Eyebrow>
            <Heading level="h2">Libreria di interazioni</Heading>
            <Text muted>
              Standard del sito dal Prompt 09. Ogni animazione si ferma con prefers-reduced-motion e la
              pagina resta leggibile senza JavaScript.
            </Text>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              RotatingHeadline
            </Text>
            <RotatingHeadline
              as="p"
              className="font-agria-sans text-agria-h2 text-agria-graphite"
              prefix="Un titolo che cambia "
              phrases={DEMO_PHRASES}
              suffix="."
            />
            <Text size="sm" muted>
              La frase predefinita è nel markup per screen reader e motori di ricerca; l&apos;altezza è
              riservata per la variante più lunga.
            </Text>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              HoverGroup + ZoomImage
            </Text>
            <HoverGroup className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {['Prima card', 'Seconda card', 'Terza card'].map((title) => (
                <div
                  key={title}
                  className="agria-zoom-trigger overflow-hidden rounded-agria-card border border-agria-border"
                >
                  <ZoomImage
                    src={DEMO_PHOTO.src}
                    alt={DEMO_PHOTO.alt}
                    quality={DEMO_PHOTO.quality}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[4/3] rounded-none"
                  />
                  <div className="p-5">
                    <Heading level="h3" as="p">
                      {title}
                    </Heading>
                  </div>
                </div>
              ))}
            </HoverGroup>
            <Text size="sm" muted>
              Cursore su una card: le altre si attenuano (opacità 0.8) e l&apos;immagine si ingrandisce
              del 5% dentro il contenitore fermo.
            </Text>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              CTA animata
            </Text>
            <div className="flex flex-wrap items-center gap-4 rounded-agria-card bg-agria-ink p-6">
              <Button variant="bright">CTA su scuro</Button>
              <Button variant="line">Secondaria su scuro</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">CTA su chiaro</Button>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              AutoTabs
            </Text>
            <AutoTabs items={AUTOTABS_DEMO} label="Esempio di schede automatiche" duration={5000} />
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              FocusOverlay
            </Text>
            <FocusOverlayDemo />
            <Text size="sm" muted>
              Velo ink al 30% dietro ogni pannello aperto, con dissolvenza di 0,3 s (nessuna con
              movimento ridotto). Nell&apos;header copre la finestra sotto la barra (z-index 45: sopra
              contenuto e ConciergeSlot, sotto header e banner cookie) e compare da md in su; si chiude
              con clic sul velo, clic esterno, Esc o uscendo con il cursore. Non blocca lo scorrimento e
              non riceve il focus. Qui è limitato al riquadro (<code>scope=&quot;container&quot;</code>).
            </Text>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              FieldScene
            </Text>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="relative h-[280px] overflow-hidden rounded-agria-card bg-agria-ink">
                <FieldScene />
                <p className="relative z-10 p-5 font-agria-mono text-agria-sm uppercase text-agria-on-dark-muted">
                  variant=&quot;hero&quot;
                </p>
              </div>
              <div className="relative h-[280px] overflow-hidden rounded-agria-card bg-agria-ink">
                <FieldScene variant="subtle" interactive={false} />
                <p className="relative z-10 p-5 font-agria-mono text-agria-sm uppercase text-agria-on-dark-muted">
                  variant=&quot;subtle&quot; · interactive=&#123;false&#125;
                </p>
              </div>
            </div>
            <Text size="sm" muted>
              Campo lavorato in prospettiva con colline leggere. Con cursore fine il terreno si abbassa
              dove passa il cursore e torna piano poco dopo, con un piccolo rimbalzo (malleable); con
              interactive la scena si inclina (max 2–3°) con parallasse tra terreno e alone. Touch,
              movimento ridotto e assenza di JavaScript: scena statica. Il terreno è SVG nell&apos;HTML;
              requestAnimationFrame solo durante il movimento. La variante tenue è per fondi con testo
              sopra (footer).
            </Text>
          </div>

          <div className="flex flex-col gap-3 border-t border-agria-border pt-8">
            <Text as="p" size="sm" muted className="font-agria-mono uppercase">
              Set di icone
            </Text>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
              {ICON_NAMES.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 rounded-xl border border-agria-border px-3 py-3 text-agria-green-dark"
                >
                  <Icon name={name} />
                  <span className="font-agria-mono text-[11px] text-agria-grey">{name}</span>
                </li>
              ))}
            </ul>
            <Text size="sm" muted>
              20×20, tratto 1,5 px, colore corrente, terminali arrotondati. Definite una sola volta in
              components/agria/icons/Icon.jsx e usate con &lt;Icon name=&quot;…&quot; /&gt;; decorative
              (aria-hidden), il significato sta nel testo accanto. Nessuna emoji nel sito.
            </Text>
          </div>
        </Container>
      </Section>

      <GradientSection variant="light">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>GradientSection · chiara</Eyebrow>
            <Heading level="h2">Sezione con sfumatura chiara</Heading>
            <Text muted>
              Verde tenue su off-white. Il grigio secondario è scurito localmente per restare sopra
              4.5:1.
            </Text>
          </div>
          <HighlightCard
            tone="light"
            eyebrow="HighlightCard · chiara"
            title="Card grande con sfumatura"
            text="Contiene tre card più piccole."
            items={HIGHLIGHT_DEMO}
            titleAs="p"
          />
        </Container>
      </GradientSection>

      <GradientSection variant="dark">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow onDark>GradientSection · scura</Eyebrow>
            <Heading level="h2" onDark>
              Sezione con sfumatura scura
            </Heading>
            <Text muted onDark>
              Ink con aloni green-bright e green.
            </Text>
          </div>
          <HighlightCard
            tone="dark"
            eyebrow="HighlightCard · scura"
            title="Card grande con sfumatura"
            text="Contiene tre card più piccole."
            items={HIGHLIGHT_DEMO}
            titleAs="p"
          />
          <ContrastTable rows={INTERACTION_CONTRAST_ROWS} />
        </Container>
      </GradientSection>

      {/* Superfici scure */}
      <Section background="white">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <Eyebrow>Token</Eyebrow>
            <Heading level="h2">Superfici scure</Heading>
            <Text muted>
              Header, hero e chiusura usano un fondo quasi nero; il resto del sito resta bianco e
              off-white. Il verde luminoso esiste solo qui: su fondo chiaro non raggiunge il contrasto
              minimo e non va usato.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DARK_SWATCHES.map((swatch) => (
              <div key={swatch.key} className="rounded-agria-card border border-agria-border bg-agria-white p-6">
                <div
                  className="mb-4 flex h-20 items-center justify-center rounded-xl bg-agria-ink"
                  aria-hidden="true"
                >
                  <span
                    className="h-10 w-10 rounded-full"
                    style={{ backgroundColor: `rgb(${AGRIA_COLORS[swatch.key].rgb.join(' ')})` }}
                  />
                </div>
                <Text as="p" size="sm" className="font-medium">
                  {swatch.name}
                </Text>
                <Text as="p" size="sm" muted className="font-agria-mono">
                  {swatch.token}
                </Text>
                <Text as="p" size="sm" muted className="mt-2">
                  {swatch.use}
                </Text>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-agria-card bg-agria-ink p-8 md:p-12">
            <p className="font-agria-mono text-agria-label uppercase text-agria-green-bright">Etichetta su scuro</p>
            <p className="font-agria-sans text-agria-h2 text-agria-on-dark">Testo principale su fondo scuro</p>
            <p className="max-w-prose font-agria-sans text-agria-body text-agria-on-dark-muted">
              Testo secondario al 70%, per paragrafi introduttivi e voci di navigazione.
            </p>
            <div>
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-agria-green-bright px-6 py-3 font-agria-sans text-agria-sm font-medium text-agria-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-agria-ink"
              >
                Bottone su scuro
              </a>
            </div>
          </div>
          <ContrastTable rows={DARK_CONTRAST_ROWS} />
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
          <ContrastTable rows={CONTRAST_ROWS} />
        </Container>
      </Section>
    </div>
  );
}

function ContrastTable({ rows }) {
  return (
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
          {rows.map((row, index) => {
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
  );
}
