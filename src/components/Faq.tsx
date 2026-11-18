import { faq } from '../content/site';
import { track } from '../lib/analytics';
import { PlusIcon } from './Icons';
import { Section, SectionHeading } from './Section';

export function Faq() {
  return (
    <Section id="faq">
      <SectionHeading
        id="faq"
        eyebrow="Dúvidas frequentes"
        title="Perguntas sobre o atendimento"
        lead="Horários, agendamento, idade, sigilo e outras dúvidas comuns antes do primeiro contato."
      />

      <div className="max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
        {faq.map((item, index) => (
          <details
            key={item.question}
            className="group"
            onToggle={(event) => {
              if (event.currentTarget.open) track('faq_aberta', { pergunta: index + 1 });
            }}
          >
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold [&::-webkit-details-marker]:hidden">
              <span>{item.question}</span>
              <PlusIcon className="size-5 shrink-0 text-accent transition-transform group-open:rotate-45" />
            </summary>
            <p className="px-5 pb-5 text-muted">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
