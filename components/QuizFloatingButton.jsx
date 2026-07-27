'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GrapeIcon } from '@/components/icons/WineIcons';

export default function QuizFloatingButton() {
  const pathname = usePathname();
  if (pathname === '/quiz') return null;

  return (
    <Link
      href="/quiz?fresh=1"
      className="btn-solid fixed bottom-5 left-5 z-40 text-xs sm:text-sm py-2.5 px-4 sm:px-5 shadow-lg"
    >
      <GrapeIcon className="w-4 h-4" />
      Genera la tua proposta
    </Link>
  );
}
