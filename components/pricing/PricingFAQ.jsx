import FAQAccordion from '@/components/FAQAccordion';
import { pricingFaqs } from '@/lib/data';

export default function PricingFAQ() {
  return (
    <div>
      <p className="eyebrow">Domande sui piani</p>
      <h2 className="h2 text-3xl md:text-4xl mt-4 text-ink max-w-2xl">Prima di iscriverti.</h2>
      <div className="mt-10 max-w-2xl">
        <FAQAccordion items={pricingFaqs} />
      </div>
    </div>
  );
}
