import { site } from '@/lib/data';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Privacy Policy',
  description: 'Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR).',
  path: '/privacy-policy',
};

export const metadata = {
  ...pageMetadata(PAGE),
  robots: { index: true, follow: true },
};

const lastUpdated = '27 luglio 2026';

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <p className="eyebrow">Informativa privacy</p>
      <h1 className="h2 text-3xl md:text-4xl mt-4 text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-ink/50">Ultimo aggiornamento: {lastUpdated}</p>

      <div className="mt-10 space-y-10 text-ink/75 leading-relaxed">
        <div>
          <h2 className="h3 text-xl text-ink">1. Titolare del trattamento</h2>
          <p className="mt-3">
            Il Titolare del trattamento dei dati è {site.founder}, P.IVA IT04006460549, con sede in{' '}
            {site.address.street}, {site.address.postalCode} {site.address.city} ({site.address.province}),
            Italia. Per qualsiasi richiesta relativa al trattamento dei dati personali è possibile scrivere a{' '}
            <a href={`mailto:${site.email}`} className="text-forest hover:text-brass underline">
              {site.email}
            </a>{' '}
            o telefonare al {site.phone}.
          </p>
          <p className="mt-3">
            Non è stato nominato un Responsabile della Protezione dei Dati (DPO): non ricorrono i presupposti
            di obbligatorietà previsti dall’art. 37 GDPR per l’attività svolta.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">2. Quali dati raccogliamo e perché</h2>
          <div className="mt-4 space-y-5">
            <div>
              <p className="font-semibold text-ink">Richiesta di proposta tramite il quiz (/quiz)</p>
              <p className="mt-1">
                Se completi il quiz e lasci i tuoi contatti raccogliamo: nome, email, telefono, nome
                dell’azienda (se indicato), le risposte fornite, la proposta generata dal nostro motore a
                regole (non un modello di intelligenza artificiale: le raccomandazioni seguono una logica
                deterministica scritta da noi) e l’indirizzo IP da cui è stata inviata la richiesta.
              </p>
              <p className="mt-1">
                Finalità: rispondere alla tua richiesta con una proposta su misura. Base giuridica: esecuzione
                di misure precontrattuali su tua richiesta (art. 6.1.b GDPR).
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink">Prenotazione di una call (/prenota-call)</p>
              <p className="mt-1">
                Il calendario è fornito da Calendly Inc., un servizio di terze parti che tratta in autonomia i
                dati inseriti nel form di prenotazione (nome, email, orario scelto) secondo la propria
                informativa privacy. Il widget si carica solo dopo il tuo consenso esplicito, richiesto tramite
                il banner cookie.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink">Contatto diretto (email, telefono, WhatsApp)</p>
              <p className="mt-1">
                Se ci scrivi direttamente via email, telefono o tramite il link WhatsApp presente sul sito,
                trattiamo i dati che ci fornisci (nome, contatti, contenuto del messaggio) al solo scopo di
                risponderti. Le conversazioni WhatsApp sono soggette anche all’informativa di WhatsApp/Meta.
              </p>
            </div>
            <div>
              <p className="font-semibold text-ink">Navigazione del sito</p>
              <p className="mt-1">
                Il nostro hosting registra i log tecnici minimi necessari alla sicurezza e al funzionamento del
                servizio (indirizzo IP, data e ora della richiesta, pagina richiesta). Non utilizziamo, al
                momento, cookie di analytics o di profilazione. Per il dettaglio dei cookie e delle tecnologie
                simili (incluso il local storage) consulta la{' '}
                <a href="/cookie-policy" className="text-forest hover:text-brass underline">
                  Cookie Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">3. Destinatari dei dati</h2>
          <p className="mt-3">I dati possono essere comunicati, per le sole finalità sopra indicate, a:</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>Resend (invio delle email transazionali di conferma e notifica interna);</li>
            <li>il fornitore del database PostgreSQL utilizzato per conservare le richieste ricevute dal quiz;</li>
            <li>Calendly Inc. (gestione delle prenotazioni delle call), solo se scegli di caricare il calendario;</li>
            <li>il fornitore di hosting del sito.</li>
          </ul>
          <p className="mt-3">
            Alcuni di questi fornitori possono avere sede o infrastrutture al di fuori dello Spazio Economico
            Europeo. In tal caso il trasferimento avviene sulla base delle Clausole Contrattuali Standard
            approvate dalla Commissione Europea o di altra garanzia adeguata prevista dagli artt. 44 e ss. GDPR.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">4. Periodo di conservazione</h2>
          <p className="mt-3">
            I dati raccolti tramite il quiz sono conservati per il tempo necessario a evadere la richiesta e,
            in assenza di un rapporto contrattuale successivo, non oltre 24 mesi dall’ultimo contatto. Se dalla
            richiesta nasce un rapporto contrattuale, i dati relativi vengono conservati per la durata prevista
            dagli obblighi fiscali e contabili (attualmente 10 anni).
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">5. I tuoi diritti</h2>
          <p className="mt-3">
            In qualità di interessato puoi esercitare, nei limiti previsti dalla normativa, i diritti di
            accesso, rettifica, cancellazione, limitazione del trattamento, portabilità dei dati e opposizione
            (artt. 15-21 GDPR), scrivendo ai contatti indicati al punto 1. Hai inoltre diritto di proporre
            reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">6. Sicurezza</h2>
          <p className="mt-3">
            Il sito è servito esclusivamente via HTTPS. L’accesso al database dei lead è limitato al personale
            di MG Solutions ed è protetto da credenziali dedicate.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">7. Minori</h2>
          <p className="mt-3">
            Il sito si rivolge ad aziende e professionisti e non è pensato per la raccolta di dati di minori di
            16 anni.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">8. Modifiche a questa informativa</h2>
          <p className="mt-3">
            Questa informativa può essere aggiornata nel tempo, ad esempio in caso di nuovi strumenti o servizi
            adottati sul sito. La data di ultimo aggiornamento è indicata in cima alla pagina.
          </p>
        </div>
      </div>
    </section>
  );
}
