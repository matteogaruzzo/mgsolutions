import { pricingComparison } from '@/lib/data';

function Cell({ value }) {
  if (value === true) return <span className="text-primary text-lg" aria-label="Incluso">✓</span>;
  if (value === false) return <span className="text-gray-300 text-lg" aria-label="Non incluso">✗</span>;
  return <span className="text-sm text-gray-700">{value}</span>;
}

export default function PricingComparison() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="border-b border-line">
            <th className="text-left py-4 pr-4 text-sm font-semibold text-gray-900">Caratteristica</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-gray-900">Starter</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-[#0066cc]">Business</th>
            <th className="text-center py-4 px-4 text-sm font-semibold text-primary">Scale</th>
          </tr>
        </thead>
        <tbody>
          {pricingComparison.map((row) => (
            <tr key={row.feature} className="border-b border-line">
              <td className="py-4 pr-4 text-sm text-gray-700">{row.feature}</td>
              <td className="py-4 px-4 text-center">
                <Cell value={row.starter} />
              </td>
              <td className="py-4 px-4 text-center">
                <Cell value={row.business} />
              </td>
              <td className="py-4 px-4 text-center">
                <Cell value={row.scale} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
