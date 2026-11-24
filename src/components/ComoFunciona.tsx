import { steps } from '../content/site';
import { PinIcon, VideoIcon } from './Icons';
import { Section, SectionHeading } from './Section';
import { WhatsAppButton } from './WhatsAppButton';

export function ComoFunciona() {
  return (
    <Section id="como-funciona" tone="sand">
      <SectionHeading
        id="como-funciona"
        eyebrow="Presencial e on-line"
        title="Como funciona o atendimento"
        lead="Se você nunca fez terapia, saber como tudo acontece ajuda a dar o primeiro passo com mais tranquilidade."
      />

      <div className="mb-10 grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
          <PinIcon className="mt-1 size-6 shrink-0 text-accent" />
          <p>
            <strong className="font-semibold">Presencial.</strong> No
            consultório da Avenida Paulista, em ambiente reservado e sigiloso.
            Posicionado para oferecer maior conveniência e
            praticidade aos nossos pacientes.
          </p>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
          <VideoIcon className="mt-1 size-6 shrink-0 text-accent" />
          <p>
            <strong className="font-semibold">On-line.</strong> Por
            videochamada, em horário combinado e a partir de um local reservado,
            com câmera, microfone e boa conexão.
          </p>
        </div>
      </div>

      <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="flex gap-4 rounded-2xl border border-line bg-white p-6"
          >
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft font-serif text-lg font-semibold text-accent"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-muted">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-6 max-w-3xl text-sm text-muted">
        O sigilo profissional é garantido. A duração do processo varia de pessoa
        para pessoa.
      </p>

      <div className="mt-8">
        <WhatsAppButton segment="paciente">
          Agendar uma conversa
        </WhatsAppButton>
      </div>
    </Section>
  );
}
