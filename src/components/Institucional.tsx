import { Section, SectionHeading } from './Section';
import { WhatsAppButton } from './WhatsAppButton';

export function Institucional() {
  return (
    <Section id="institucional">
      <SectionHeading
        id="institucional"
        eyebrow="Outras atuações"
        title="Atuação em escolas e empresas"
        lead="Consultoria, supervisão, palestras e capacitações realizadas presencialmente, no local do cliente."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-line bg-sand p-7 md:p-9">
          <h3 className="text-2xl font-semibold">Escolas</h3>
          <p className="mt-3 text-muted">
            Consultoria e supervisão para equipes pedagógicas, com foco em manejo comportamental
            e inclusão escolar.
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-ink marker:text-accent">
            <li>Apoio a coordenação e professores</li>
            <li>Manejo comportamental em sala de aula</li>
            <li>Inclusão escolar e neurodiversidade</li>
          </ul>
          <div className="mt-auto pt-7">
            <WhatsAppButton segment="escola" variant="outline">
              Falar sobre consultoria escolar
            </WhatsAppButton>
          </div>
        </article>

        <article className="flex flex-col rounded-3xl border border-line bg-sand p-7 md:p-9">
          <h3 className="text-2xl font-semibold">Empresas</h3>
          <p className="mt-3 text-muted">
            Palestras, workshops e capacitações sobre comportamento humano, saúde mental,
            neurociência e neurodiversidade.
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-ink marker:text-accent">
            <li>Palestras para equipes e lideranças</li>
            <li>Workshops sobre comportamento e saúde mental</li>
            <li>Capacitações sobre neurodiversidade</li>
          </ul>
          <div className="mt-auto pt-7">
            <WhatsAppButton segment="empresa" variant="outline">
              Falar sobre palestras e capacitações
            </WhatsAppButton>
          </div>
        </article>
      </div>
    </Section>
  );
}
