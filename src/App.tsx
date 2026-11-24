import { useEffect } from 'react';
import { ComoFunciona } from './components/ComoFunciona';
import { Contato } from './components/Contato';
import { Abordagens } from './components/Abordagens';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Institucional } from './components/Institucional';
import { Profissional } from './components/Profissional';
import { Servicos } from './components/Servicos';
import { StickyWhatsApp } from './components/StickyWhatsApp';

/** Ao seguir um link de âncora, move o foco para o título da seção (Spec 02). */
function useAnchorFocus() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      const id = link?.getAttribute('href')?.slice(1);
      if (!id) return;
      const section = document.getElementById(id);
      if (!section) return;
      const target = section.matches('[tabindex="-1"]')
        ? section
        : section.querySelector<HTMLElement>('[tabindex="-1"]');
      requestAnimationFrame(() => target?.focus({ preventScroll: true }));
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}

export default function App() {
  useAnchorFocus();

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-semibold focus:shadow-lg"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Profissional />
        <Abordagens />
        <Servicos />
        <Institucional />
        <ComoFunciona />
        <Faq />
        <Contato />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
