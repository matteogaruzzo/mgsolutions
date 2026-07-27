import { site } from '@/lib/data';

export const metadata = {
  title: 'Termini e Condizioni',
  description: 'Termini e condizioni di utilizzo del sito MG Solutions.',
  robots: { index: true, follow: true },
};

const lastUpdated = '27 luglio 2026';

export default function TerminiCondizioniPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-28">
      <p className="eyebrow">Note legali</p>
      <h1 className="h2 text-3xl md:text-4xl mt-4 text-ink">Termini e Condizioni</h1>
      <p className="mt-3 text-sm text-ink/50">Ultimo aggiornamento: {lastUpdated}</p>

      <div className="mt-10 space-y-10 text-ink/75 leading-relaxed">
        <div>
          <h2 className="h3 text-xl text-ink">1. Oggetto</h2>
          <p className="mt-3">
            Questo sito (il “Sito”) è gestito da {site.founder}, P.IVA IT04006460549, con sede in{' '}
            {site.address.street}, {site.address.postalCode} {site.address.city} ({site.address.province}).
            Il Sito ha finalità informative e di presentazione dei servizi offerti a cantine, oleifici e
            strutture ricettive rurali. Non è un e-commerce: nessun acquisto viene concluso direttamente sul
            Sito. Navigando il Sito accetti i presenti termini.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">2. Proprietà intellettuale</h2>
          <p className="mt-3">
            Testi, immagini, grafiche, marchio e codice del Sito sono di proprietà di {site.founder} o
            concessi in licenza, e sono protetti dalla normativa sul diritto d’autore e sulla proprietà
            industriale. Non è consentita la riproduzione, anche parziale, senza autorizzazione scritta.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">3. Case study e contenuti illustrativi</h2>
          <p className="mt-3">
            I progetti presentati nella sezione Portfolio, salvo diversa indicazione, sono case study concept:
            esempi illustrativi di cosa progettiamo per un tipo di cliente, e non l’attività reale di
            un’azienda esistente. Ogni pagina di case study riporta chiaramente questa natura. Numeri e
            risultati mostrati rappresentano obiettivi tipo per il tipo di progetto descritto, non un
            aggregato di fatturato reale di {site.name}.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">4. Servizi di terze parti collegati</h2>
          <p className="mt-3">
            Alcune funzionalità del Sito si appoggiano a servizi di terze parti, in particolare Calendly
            (prenotazione call) e WhatsApp/Meta (contatto diretto). L’uso di questi servizi è soggetto anche
            ai rispettivi termini e informative privacy, che ti invitiamo a consultare.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">5. Limitazione di responsabilità</h2>
          <p className="mt-3">
            I contenuti del Sito sono forniti a scopo informativo e non costituiscono consulenza vincolante:
            ogni proposta commerciale concreta viene formalizzata separatamente, per iscritto, dopo una call
            conoscitiva. Pur curando l’accuratezza dei contenuti, non garantiamo che siano privi di errori o
            costantemente aggiornati. Nei limiti consentiti dalla legge, {site.founder} non risponde per danni
            indiretti derivanti dall’uso del Sito, fatta salva la responsabilità per dolo o colpa grave e
            quanto non derogabile ai sensi di legge (incluso l’art. 82 GDPR in materia di risarcimento per
            violazioni dei dati personali).
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">6. Link a siti terzi</h2>
          <p className="mt-3">
            Il Sito può contenere link a siti di terze parti. Non abbiamo controllo su questi siti e non
            siamo responsabili dei loro contenuti o delle loro pratiche in materia di privacy.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">7. Legge applicabile e foro competente</h2>
          <p className="mt-3">
            I presenti termini sono regolati dalla legge italiana. Per qualunque controversia relativa
            all’uso del Sito è competente in via esclusiva il Foro di Perugia, salvo diversa previsione
            inderogabile a tutela del consumatore. Prima di ricorrere all’autorità giudiziaria, le parti si
            impegnano a tentare una composizione bonaria della controversia.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">8. Modifiche ai termini</h2>
          <p className="mt-3">
            Questi termini possono essere aggiornati nel tempo; la data di ultimo aggiornamento è indicata in
            cima alla pagina. L’uso continuato del Sito dopo una modifica implica l’accettazione dei nuovi
            termini.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">9. Contatti</h2>
          <p className="mt-3">
            Per domande su questi termini scrivi a{' '}
            <a href={`mailto:${site.email}`} className="text-forest hover:text-brass underline">
              {site.email}
            </a>{' '}
            o chiama il {site.phone}.
          </p>
        </div>
      </div>
    </section>
  );
}
