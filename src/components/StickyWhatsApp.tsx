import { useEffect, useState } from 'react';
import { WhatsAppButton } from './WhatsAppButton';

/**
 * Botão de WhatsApp fixo na parte de baixo da tela. Aparece depois que o
 * visitante passa do hero, para não duplicar o CTA principal (Spec 05).
 */
export function StickyWhatsApp() {
  const [passedHero, setPassedHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('inicio');
    if (!hero || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => {
      setPassedHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  if (!passedHero) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-end p-3 md:p-5">
      <div className="pointer-events-auto">
        <WhatsAppButton segment="paciente" className="shadow-lg shadow-black/15">
          WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
