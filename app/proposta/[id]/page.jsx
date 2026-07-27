import { notFound } from 'next/navigation';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { prisma } from '@/lib/db';
import { site } from '@/lib/data';
import { GrapeIcon } from '@/components/icons/WineIcons';

export const metadata = {
  title: 'La tua proposta',
  robots: { index: false, follow: false },
};

function siteAnalysisSummary(siteAnalysis) {
  if (!siteAnalysis?.success) return null;
  const bits = [];
  if (siteAnalysis.platform) bits.push(`sembra costruito su ${siteAnalysis.platform}`);
  bits.push(siteAnalysis.hasEcommerce ? 'con un e-commerce attivo' : 'senza e-commerce attivo');
  if (siteAnalysis.hasBooking) bits.push('con un sistema di prenotazione');
  return `Abbiamo dato un'occhiata al tuo sito: ${bits.join(', ')}.`;
}

export default async function PropostaPage({ params }) {
  let lead = null;
  try {
    lead = await prisma.lead.findUnique({ where: { id: params.id } });
  } catch {
    lead = null;
  }
  if (!lead) notFound();

  const { core = [], recommended = [], optional = [] } = lead.recommendation || {};
  const groups = [
    { label: 'Priorità', items: core },
    { label: 'Consigliati', items: recommended },
    { label: 'Da valutare insieme', items: optional },
  ].filter((g) => g.items.length > 0);

  const summary = siteAnalysisSummary(lead.responses?.siteAnalysis);
  const firstName = lead.nome.split(' ')[0];

  return (
    <section className="max-w-edge mx-auto px-6 pt-28 sm:pt-32 pb-20 sm:pb-24">
      <div className="max-w-2xl mx-auto">
        <Reveal>
          <p className="eyebrow">La tua proposta</p>
          <h1 className="display text-3xl md:text-4xl mt-4 text-ink leading-tight">
            Ciao {firstName}, ecco cosa avevamo preparato per te.
          </h1>
          <p className="mt-4 text-sm text-ink/60 leading-relaxed">
            Generata il {new Date(lead.createdAt).toLocaleDateString('it-IT')}. È un punto di
            partenza: la confermiamo insieme in call.
          </p>
          {summary && <p className="mt-3 text-sm text-forest font-semibold">{summary}</p>}
        </Reveal>

        <div className="mt-8 space-y-8">
          {groups.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 60}>
              <div>
                <p className="text-xs font-semibold tracking-widest text-forest uppercase">{g.label}</p>
                <div className="mt-3 space-y-3">
                  {g.items.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="block border border-line rounded-xl px-5 py-4 hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-ink text-sm">{item.name}</p>
                      <p className="mt-1 text-xs text-ink/60">{item.benefit}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {groups.length === 0 && (
          <p className="mt-8 text-sm text-ink/60">
            Non siamo riusciti a generare suggerimenti specifici dalle risposte raccolte: ne
            parliamo direttamente in call.
          </p>
        )}

        <p className="mt-8 text-xs italic text-ink/45">
          Proposta preliminare generata dalle tue risposte, non un preventivo: i dettagli e i costi
          si definiscono in call.
        </p>

        <div className="mt-10 border-t border-line pt-8">
          <p className="text-sm text-ink/70">
            Hai già una call prenotata con {site.founder.split(' ')[0]}? Perfetto, ci vediamo lì.
            Se devi ancora fissarla o vuoi scrivere prima:
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/prenota-call" className="btn-solid">
              <GrapeIcon className="w-4 h-4" />
              Prenota una call →
            </Link>
            <a href={`mailto:${site.email}`} className="btn-ghost">
              Scrivi una email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
