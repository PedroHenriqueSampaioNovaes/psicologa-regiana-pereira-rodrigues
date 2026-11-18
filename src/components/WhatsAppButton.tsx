import type { ReactNode } from 'react';
import type { Segment } from '../content/site';
import { track } from '../lib/analytics';
import { whatsappUrl } from '../lib/whatsapp';
import { WhatsAppIcon } from './Icons';

interface WhatsAppButtonProps {
  segment: Segment;
  /** Onde o botão está na página (usado só na medição agregada). */
  position: string;
  children?: ReactNode;
  variant?: 'solid' | 'outline';
  className?: string;
}

/**
 * CTA de WhatsApp (Spec 05). A medição é disparada de forma síncrona e
 * nunca atrasa nem bloqueia a abertura do link.
 */
export function WhatsAppButton({
  segment,
  position,
  children = 'Conversar pelo WhatsApp',
  variant = 'solid',
  className = '',
}: WhatsAppButtonProps) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-semibold no-underline transition-colors';
  const styles =
    variant === 'solid'
      ? 'bg-accent text-white hover:bg-accent-dark'
      : 'border-2 border-accent bg-transparent text-accent hover:bg-accent-soft';

  return (
    <a
      href={whatsappUrl(segment)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
      onClick={() => track('whatsapp_click', { segmento: segment, posicao: position })}
    >
      <WhatsAppIcon className="size-5 shrink-0" />
      <span>{children}</span>
    </a>
  );
}
