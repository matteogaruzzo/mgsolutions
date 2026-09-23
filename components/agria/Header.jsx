'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import HeaderPanel from './HeaderPanel';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';
import { NAV_PANELS, NAV_DIRECT, CTA } from './nav-data';

const CLOSE_DELAY_MS = 150;

export default function Header() {
  const pathname = usePathname();
  const [openPanel, setOpenPanel] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') setOpenPanel(null);
    }
    function onClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenPanel(null);
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenPanel(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  function isActive(href) {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function handlePanelOpen(key) {
    clearTimeout(closeTimer.current);
    setOpenPanel(key);
  }

  function handlePanelClose() {
    closeTimer.current = setTimeout(() => setOpenPanel(null), CLOSE_DELAY_MS);
  }

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div
        className={`flex w-full max-w-[960px] items-center justify-between gap-4 rounded-full border border-agria-border bg-agria-white/95 px-4 py-2.5 backdrop-blur transition-shadow duration-200 motion-reduce:transition-none sm:px-5 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpenPanel(null)}>
          <img
            src="/images/brand/agria-logo-black-centered.svg"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
          />
          <span className="font-agria-sans text-[15px] font-medium tracking-[0.02em] text-agria-graphite">
            AGRIA
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigazione principale">
          {NAV_PANELS.map((panel) => (
            <HeaderPanel
              key={panel.key}
              panel={panel}
              isOpen={openPanel === panel.key}
              onOpen={() => handlePanelOpen(panel.key)}
              onClose={handlePanelClose}
              onToggle={() => setOpenPanel((v) => (v === panel.key ? null : panel.key))}
              active={panel.items.some((item) => isActive(item.href))}
            />
          ))}
          {NAV_DIRECT.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`rounded-full px-3 py-2 font-agria-sans text-agria-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 ${
                isActive(item.href) ? 'font-medium text-agria-graphite' : 'text-agria-grey hover:text-agria-graphite'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Link
            href={CTA.href}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-agria-green-dark px-5 py-2.5 font-agria-sans text-agria-sm font-medium text-agria-white transition-colors hover:bg-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2"
          >
            {CTA.label}
          </Link>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={mobileOpen}
          aria-controls="agria-mobile-menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex items-center justify-center rounded-full p-2 text-agria-graphite focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-agria-green-dark focus-visible:ring-offset-2 md:hidden"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <MobileMenu id="agria-mobile-menu" open={mobileOpen} onClose={() => setMobileOpen(false)} isActive={isActive} />
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
