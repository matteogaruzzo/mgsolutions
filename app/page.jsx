import Link from 'next/link';
import AgentField from '@/components/AgentField';
import Reveal from '@/components/Reveal';
import CTA from '@/components/CTA';
import { services, sectors, projects } from '@/lib/data';

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-16">
        <AgentField />
        <div className="relative max-w-edge mx-auto px-6 w-full">
          <p className="eyebrow">MG://sistemi-digitali · Perugia, IT</p>

          <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] mt-6 max-w-4xl">
            Davanti c’è una persona.
            <br />
            Dietro, <span className="italic text-forest">lavora la macchina.</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-ink/70 max-w-2xl leading-relaxed">
            Sono Matteo Garuzzo. Con il mio team costruisco{' '}
            <strong className="text-ink font-semibold">software e agenti AI</strong> ed{' '}
            <strong className="text-ink font-semibold">e-commerce Shopify performanti</strong> che
            portano più vendite, contatti e fiducia. Ci metto la faccia, il team fa la differenza.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/prenota-call" className="btn-solid">
              Prenota una call →
            </Link>
            <Link href="/software" className="btn-ghost">
              Scopri i software AI
            </Link>
          </div>

          {/* doppio binario */}
          <div className="mt-16 grid sm:grid-cols-2 gap-px bg-line max-w-2xl rounded-xl overflow-hidden border border-line">
            <div className="bg-paper p-6">
              <p className="font-mono text-xs tracking-widest text-brass">01 · AI</p>
              <p className="mt-2 font-medium">Software & agenti che lavorano da soli</p>
              <p className="mt-1 text-sm text-ink/60">Li creiamo, li vendi, lavorano H24.</p>
            </div>
            <div className="bg-paper p-6">
              <p className="font-mono text-xs tracking-widest text-brass">02 · SHOPIFY</p>
              <p className="mt-2 font-medium">E-commerce e siti che convertono</p>
              <p className="mt-1 text-sm text-ink/60">Veloci, chiari, pensati per vendere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- COSA FACCIAMO ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow">MG://cosa-facciamo</p>
          <h2 className="display text-4xl md:text-5xl mt-4 max-w-2xl">
            Un solo interlocutore, un team dietro.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="bg-paper p-8 h-full hover:bg-paper-dim transition-colors">
                <p className="font-mono text-xs tracking-widest text-forest">{s.tag}</p>
                <h3 className="display text-2xl mt-3">{s.title}</h3>
                <p className="mt-3 text-sm text-ink/65 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/servizi" className="font-mono text-sm text-forest hover:text-brass">
            Tutti i servizi →
          </Link>
        </div>
      </section>

      {/* ---------- SETTORI ---------- */}
      <section className="bg-ink text-paper">
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-brass">MG://settori</p>
            <h2 className="display text-4xl md:text-5xl mt-4 max-w-2xl">
              Lavoriamo dove il digitale fa la differenza.
            </h2>
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-4">
            {sectors.map((sec, i) => (
              <Reveal key={sec.slug} delay={i * 60}>
                <Link
                  href={`/settori/${sec.slug}`}
                  className="group block border border-paper/15 rounded-xl p-7 hover:border-brass hover:bg-paper/5 transition-all"
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="display text-2xl">{sec.name}</h3>
                    <span className="font-mono text-xs text-paper/40 group-hover:text-brass">
                      0{i + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-paper/60">{sec.lead}</p>
                  <span className="mt-4 inline-block font-mono text-xs text-brass opacity-0 group-hover:opacity-100 transition-opacity">
                    Vedi cosa realizziamo →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PORTFOLIO PREVIEW ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="eyebrow">MG://lavori</p>
              <h2 className="display text-4xl md:text-5xl mt-4">Progetti recenti</h2>
            </div>
            <Link href="/portfolio" className="font-mono text-sm text-forest hover:text-brass">
              Tutto il portfolio →
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.slice(0, 2).map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="border border-line rounded-2xl p-8 bg-paper hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3">
                  <h3 className="display text-3xl">{p.title}</h3>
                  {p.concept && (
                    <span className="font-mono text-[10px] tracking-widest border border-line rounded-full px-2 py-0.5 text-ink/50">
                      CONCEPT
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-forest mt-2">{p.kind}</p>
                <p className="mt-4 text-sm text-ink/65 leading-relaxed">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
