import Reveal from '@/components/Reveal';
import SectorPageTemplate from '@/components/SectorPageTemplate';
import HospitalityExperience from '@/components/HospitalityExperience';
import { getSector, sectorPageContent } from '@/lib/data';
import { FarmhouseDoorIcon } from '@/components/icons/WineIcons';

const s = getSector('wine-hospitality-agriturismi');
const content = sectorPageContent['wine-hospitality-agriturismi'];

export const metadata = {
  title: 'Wine Hospitality & Agriturismi',
  description: content.heroSubtitle,
};

const theme = {
  accentText: 'text-hospitality-accent',
  goldText: 'text-hospitality-gold',
  goldBgSoft: 'bg-hospitality-gold/15',
  bgAlt: 'bg-hospitality-bg',
  divider: '#8B5A3C',
  heroImage: '/images/sectors/hospitality-hero.png',
  icon: FarmhouseDoorIcon,
};

const gallerySteps = [
  { label: 'Arrivo', img: '/images/sectors/hospitality-arrivo.png' },
  { label: 'Vigneto', img: '/images/sectors/hospitality-vigneto.png' },
  { label: 'Tavola', img: '/images/sectors/hospitality-tavola.png' },
  { label: 'Camera', img: '/images/sectors/hospitality-camera.png' },
];

function HospitalityExtras() {
  return (
    <>
      {/* ---------- L'ESPERIENZA — carosello immersivo ---------- */}
      <section className="bg-hospitality-bg" style={{ '--sector-divider': '#8B5A3C' }}>
        <div className="max-w-edge mx-auto px-6 py-24">
          <Reveal>
            <p className="eyebrow text-hospitality-accent">L’esperienza, non solo il sito</p>
            <h2 className="h2 text-3xl md:text-4xl mt-4 max-w-2xl text-ink">
              Un percorso immersivo dentro l’agriturismo, dalla colazione al pernottamento.
            </h2>
          </Reveal>
          <div className="mt-12">
            <HospitalityExperience />
          </div>
        </div>
      </section>

      {/* ---------- GALLERY SEQUENZIALE (storytelling) ---------- */}
      <section className="max-w-edge mx-auto px-6 py-24">
        <Reveal>
          <p className="eyebrow text-hospitality-accent">Un tour leggero, per immagini</p>
          <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">
            Ogni sezione racconta un momento del soggiorno, in ordine.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {gallerySteps.map((g, i) => (
            <Reveal key={g.label} delay={i * 70}>
              <div className="rounded-xl overflow-hidden card-leaf-top" style={{ '--sector-divider': '#8B5A3C' }}>
                <div
                  className="aspect-[3/4] bg-cover bg-center bg-hospitality-bg"
                  style={{ backgroundImage: `url(${g.img})` }}
                />
                <p className="text-sm text-ink/70 py-3 text-center bg-paper">{`0${i + 1} · ${g.label}`}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export default function WineHospitalityPage() {
  return (
    <SectorPageTemplate
      sectorNumber="03"
      sector={s}
      content={content}
      theme={theme}
      afterHero={<HospitalityExtras />}
    />
  );
}
