import { useState } from 'react';
import { site } from '../content/site';
import { CloseIcon, MenuIcon } from './Icons';
import { WhatsAppButton } from './WhatsAppButton';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#inicio" className="min-w-0 leading-tight no-underline">
          <span className="block truncate font-serif text-lg font-semibold text-ink">
            {site.shortName}
          </span>
          <span className="block truncate text-sm text-muted">
            Psicóloga · {site.crp}
          </span>
        </a>

        <nav
          aria-label="Seções da página"
          className="hidden items-center gap-6 xl:flex"
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.95rem] font-medium text-ink no-underline hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <WhatsAppButton
              segment="paciente"
              variant="solid"
              className="min-h-11! px-5! py-2! text-[0.95rem]"
            >
              WhatsApp
            </WhatsAppButton>
          </div>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink xl:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
            <span className="sr-only">
              {open ? 'Fechar menu' : 'Abrir menu'}
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Seções da página"
          className="border-t border-line bg-paper xl:hidden"
        >
          <ul className="mx-auto max-w-6xl px-5 py-2 md:px-8">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-line/70 text-base font-medium text-ink no-underline last:border-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
