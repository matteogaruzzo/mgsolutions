'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProgressBar from './ProgressBar';
import Question from './Question';
import ProposalReview from './ProposalReview';
import ContactForm from './ContactForm';
import BookingStep from './BookingStep';
import ThankYou from './ThankYou';
import { questions } from '@/lib/quiz/questions';
import { buildRecommendation } from '@/lib/quiz/rulesEngine';

const STORAGE_KEY = 'mg_quiz_state_v3';

const PROPOSAL_STEP = questions.length;
const CONTACT_STEP = questions.length + 1;
const BOOKING_STEP = questions.length + 2;
const TOTAL_STEPS = questions.length + 3; // domande + proposta + contatti + prenotazione

export default function QuizFlow() {
  const [stepIndex, setStepIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [contact, setContact] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | saving | done | error
  const [analyzing, setAnalyzing] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Ripristina risposte salvate: se l'utente abbandona e ricarica LA STESSA
  // pagina, riparte da dove ha lasciato. Ma un link "inizia il quiz" (bottone
  // flottante, /contatti, /chi-sono, homepage) porta a ?fresh=1: in quel caso
  // si ignora volutamente lo stato salvato e si riparte da zero, così cliccare
  // "genera la tua proposta" non riprende mai una sessione vecchia o di
  // qualcun altro sullo stesso browser. Il parametro viene rimosso dall'URL
  // subito dopo, per non bloccare il resume su un F5 successivo.
  //
  // "hydrated" evita che l'effetto di salvataggio qui sotto scriva lo stato
  // iniziale vuoto SOPRA quello appena ripristinato: i due effect girano
  // nello stesso mount, e senza questa guardia il salvataggio vincerebbe
  // sempre, cancellando il ripristino ad ogni refresh della pagina.
  useEffect(() => {
    const forceFresh = searchParams.get('fresh') === '1';
    if (forceFresh) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        // ignora
      }
      router.replace(pathname);
      setHydrated(true);
      return;
    }

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && saved.questionCount === questions.length) {
        setStepIndex(Math.min(saved.stepIndex || 0, CONTACT_STEP));
        setResponses(saved.responses || {});
      } else if (saved) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // localStorage non disponibile o dato corrotto: si riparte da zero.
    } finally {
      setHydrated(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (status === 'done') {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ stepIndex, responses, questionCount: questions.length }));
  }, [stepIndex, responses, status, hydrated]);

  function answer(questionId, value) {
    setResponses((r) => ({ ...r, [questionId]: value }));
  }

  async function next() {
    const currentQuestion = questions[stepIndex];

    // Se l'utente ha lasciato un URL, proviamo ad analizzarlo prima di
    // avanzare. Fallback silenzioso: se fallisce, si procede comunque con
    // una proposta generica, senza mostrare errori all'utente.
    if (currentQuestion?.id === 'websiteUrl' && responses.websiteUrl) {
      setAnalyzing(true);
      try {
        const res = await fetch('/api/quiz/analyze-site', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: responses.websiteUrl }),
        });
        const result = await res.json();
        setResponses((r) => ({ ...r, siteAnalysis: result }));
      } catch {
        setResponses((r) => ({ ...r, siteAnalysis: { success: false, reason: 'network_error' } }));
      } finally {
        setAnalyzing(false);
      }
    }

    setStepIndex((i) => Math.min(i + 1, CONTACT_STEP));
  }

  function back() {
    setStepIndex((i) => Math.max(i - 1, 0));
  }

  const recommendation = stepIndex >= PROPOSAL_STEP ? buildRecommendation(responses) : null;

  // I dati di contatto vengono solo raccolti qui: non chiamano l'API. Il
  // salvataggio e l'invio email avvengono solo quando Calendly conferma
  // davvero una prenotazione (vedi handleScheduled), non alla generazione
  // della proposta né alla semplice compilazione del form.
  function handleContactCollected(contactData) {
    setContact(contactData);
    setStepIndex(BOOKING_STEP);
  }

  const handleScheduled = useCallback(
    async () => {
      setStatus('saving');
      try {
        // La proposta NON viene inviata qui: il server la ricalcola da solo
        // dalle "responses" (vedi app/api/quiz/lead/route.js), così quello
        // che viene salvato e mandato per email è sempre affidabile.
        const res = await fetch('/api/quiz/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ responses, contact }),
        });
        if (!res.ok) throw new Error('submit failed');
        setStatus('done');
      } catch {
        setStatus('error');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [responses, recommendation, contact]
  );

  if (stepIndex < PROPOSAL_STEP) {
    const q = questions[stepIndex];
    return (
      <div>
        <ProgressBar current={stepIndex + 1} total={TOTAL_STEPS} />
        <Question
          question={q}
          value={responses[q.id]}
          onChange={(v) => answer(q.id, v)}
          onNext={next}
          onBack={stepIndex > 0 ? back : null}
          nextLabel={analyzing ? 'Analizziamo il tuo sito...' : undefined}
          nextDisabled={analyzing}
        />
      </div>
    );
  }

  if (stepIndex === PROPOSAL_STEP) {
    return (
      <div>
        <ProgressBar current={stepIndex + 1} total={TOTAL_STEPS} />
        <ProposalReview recommendation={recommendation} siteAnalysis={responses.siteAnalysis} onBack={back} onNext={next} />
      </div>
    );
  }

  if (stepIndex === CONTACT_STEP) {
    return (
      <div>
        <ProgressBar current={stepIndex + 1} total={TOTAL_STEPS} />
        <ContactForm onBack={back} onSubmit={handleContactCollected} />
      </div>
    );
  }

  if (status === 'done') {
    return <ThankYou />;
  }

  return (
    <div>
      <ProgressBar current={stepIndex + 1} total={TOTAL_STEPS} />
      <BookingStep
        contact={contact}
        onScheduled={handleScheduled}
        saving={status === 'saving'}
        error={status === 'error'}
        onBack={() => setStepIndex(CONTACT_STEP)}
      />
    </div>
  );
}
