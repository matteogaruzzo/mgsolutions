import Link from 'next/link';
import { ANNOUNCEMENT } from './announce';

export default function AnnouncementBar() {
  if (!ANNOUNCEMENT.enabled) return null;

  const { text, link } = ANNOUNCEMENT;

  return (
    <div className="bg-agria-ink px-5 py-2.5 text-center font-agria-sans text-[13px] leading-snug text-agria-on-dark-muted">
      {text}
      {link && (
        <>
          {' '}
          <Link
            href={link.href}
            className="whitespace-nowrap font-medium text-agria-green-bright underline-offset-2 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-bright focus-visible:ring-offset-2 focus-visible:ring-offset-agria-ink"
          >
            {link.label} <span aria-hidden="true">→</span>
          </Link>
        </>
      )}
    </div>
  );
}
