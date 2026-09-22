import { Suspense } from 'react';
import QuizFlow from '@/components/Quiz/QuizFlow';
import { pageMetadata, webPageSchema } from '@/lib/seo';

const PAGE = {
  title: 'Scopri di cosa hai bisogno',
  description:
    'Rispondi a poche domande e ricevi una proposta preliminare personalizzata per la tua attività, senza impegno.',
  path: '/quiz',
};

export const metadata = pageMetadata(PAGE);

export default function QuizPage() {
  return (
    <section className="max-w-edge mx-auto px-6 pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema(PAGE)) }}
      />
      <div className="text-center mb-14">
        <p className="eyebrow">Quiz · Scopri di cosa hai bisogno</p>
        <h1 className="display text-4xl md:text-5xl mt-4 max-w-2xl mx-auto leading-tight">
          5 domande. Una proposta su misura.
        </h1>
        <p className="mt-4 text-ink/60 max-w-xl mx-auto">
          Circa 2 minuti. Nessun prezzo qui: solo cosa ha senso valutare per la tua attività.
        </p>
      </div>
      <Suspense fallback={null}>
        <QuizFlow />
      </Suspense>
    </section>
  );
}
