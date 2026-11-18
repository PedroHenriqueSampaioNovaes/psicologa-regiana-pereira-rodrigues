import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  tone?: 'paper' | 'sand';
  children: ReactNode;
}

/** Bloco de página com fundo alternado e largura padronizada (Spec 02). */
export function Section({ id, tone = 'paper', children }: SectionProps) {
  const bg = tone === 'sand' ? 'bg-sand' : 'bg-paper';
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={`${bg} py-16 md:py-24`}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">{children}</div>
    </section>
  );
}

interface SectionHeadingProps {
  id: string;
  eyebrow?: string;
  title: string;
  lead?: string;
}

export function SectionHeading({ id, eyebrow, title, lead }: SectionHeadingProps) {
  return (
    <header className="mb-10 max-w-3xl md:mb-12">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
          {eyebrow}
        </p>
      )}
      <h2
        id={`${id}-titulo`}
        tabIndex={-1}
        className="text-[1.75rem] font-semibold md:text-4xl"
      >
        {title}
      </h2>
      {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
    </header>
  );
}
