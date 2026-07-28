import { site } from '@/lib/data';
import ReopenConsentButton from '@/components/ReopenConsentButton';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Cookie Policy',
  description: 'Informativa sui cookie e sulle tecnologie simili utilizzate dal sito, ai sensi del GDPR e delle linee guida del Garante Privacy.',
  path: '/cookie-policy',
};

export const metadata = {
  ...pageMetadata(PAGE),
  robots: { index: true, follow: true },
};

const lastUpdated = '27 luglio 2026';

export default function CookiePolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <p className="eyebrow">Informativa cookie</p>
      <h1 className="h2 text-3xl md:text-4xl mt-4 text-ink">Cookie Policy</h1>
      <p className="mt-3 text-sm text-ink/50">Ultimo aggiornamento: {lastUpdated}</p>
      <p className="mt-3 text-sm text-ink/50">
        Questa pagina segue le indicazioni delle Linee guida sui cookie e altri strumenti di tracciamento del
        Garante per la protezione dei dati personali (10 giugno 2021) e degli artt. 6 e 7 GDPR sul consenso.
      </p>

      <div className="mt-10 space-y-10 text-ink/75 leading-relaxed">
        <div>
          <h2 className="h3 text-xl text-ink">Cosa sono i cookie</h2>
          <p className="mt-3">
            I cookie sono piccoli file di testo che i siti visitati inviano al dispositivo dell’utente, dove
            vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Questa
            pagina descrive, con lo stesso spirito di trasparenza, anche l’uso che facciamo del local storage
            del browser, una tecnologia diversa dai cookie ma con funzioni simili.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Cookie e local storage essenziali</h2>
          <p className="mt-3">Sempre attivi: senza di essi il sito non funziona correttamente.</p>
          <ul className="mt-3 space-y-2 list-disc pl-5">
            <li>
              <span className="font-semibold text-ink">mg_cookie_consent_v1</span> (local storage) — memorizza
              la scelta fatta sul banner cookie, per non richiederla ad ogni visita. Scade dopo 90 giorni.
            </li>
            <li>
              <span className="font-semibold text-ink">mg_quiz_state_*</span> (local storage) — salva
              temporaneamente le risposte al quiz in corso, per permetterti di riprenderlo senza ripartire da
              zero.
            </li>
            <li>
              <span className="font-semibold text-ink">mg_quiz_popup_last_shown</span> (local storage) — evita
              di mostrare troppo spesso l’invito a fare il quiz.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Cookie funzionali (richiedono consenso)</h2>
          <p className="mt-3">
            <span className="font-semibold text-ink">Calendly</span> — nella pagina{' '}
            <a href="/prenota-call" className="text-forest hover:text-brass underline">
              Prenota una call
            </a>{' '}
            puoi caricare un calendario di prenotazione fornito da Calendly Inc. Il relativo script e i cookie
            di Calendly vengono caricati solo dopo che hai dato il consenso — dal banner o cliccando
            direttamente “Carica il calendario” nella pagina. Consulta la privacy policy di Calendly per i
            dettagli sui cookie che imposta.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Analytics</h2>
          <p className="mt-3">
            Al momento non utilizziamo alcuno strumento di analytics o misurazione del traffico. Il banner
            cookie prevede già una categoria dedicata: se in futuro attiveremo uno strumento di questo tipo,
            aggiorneremo questa pagina e ti chiederemo un nuovo consenso.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Cookie di marketing / profilazione</h2>
          <p className="mt-3">
            Il sito non utilizza cookie di profilazione pubblicitaria di terze parti (es. Meta Pixel, LinkedIn
            Insight Tag). Se in futuro venissero introdotti, questa informativa sarà aggiornata di conseguenza.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Durata e rinnovo del consenso</h2>
          <p className="mt-3">
            La scelta espressa sul banner resta valida per 90 giorni, oppure fino a quando cancelli i dati di
            navigazione del browser: in entrambi i casi, alla visita successiva il banner ricompare.
          </p>
        </div>

        <div>
          <h2 className="h3 text-xl text-ink">Gestisci le tue preferenze</h2>
          <p className="mt-3">
            Puoi cambiare idea in qualsiasi momento: riapri il banner da qui, oppure dal link “Preferenze
            cookie” nel footer del sito.
          </p>
          <ReopenConsentButton />
          <p className="mt-4 text-sm text-ink/60">
            Puoi inoltre cancellare i cookie e i dati di navigazione già memorizzati dalle impostazioni del tuo
            browser in qualsiasi momento.
          </p>
        </div>

        <div>
          <p className="text-sm text-ink/50">
            Per domande su questa informativa scrivi a{' '}
            <a href={`mailto:${site.email}`} className="text-forest hover:text-brass underline">
              {site.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
