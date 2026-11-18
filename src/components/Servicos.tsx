import { therapyThemes } from '../content/site';
import { CheckIcon } from './Icons';
import { Section, SectionHeading } from './Section';
import { WhatsAppButton } from './WhatsAppButton';

export function Servicos() {
  return (
    <Section id="servicos" tone="sand">
      <SectionHeading
        id="servicos"
        eyebrow="Atendimento"
        title="Psicoterapia presencial e on-line, e orientação a famílias"
        lead="Atendimento individual no consultório da Avenida Paulista, em São Paulo, ou por videochamada."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-line bg-white p-7 md:p-9">
          <h3 className="text-2xl font-semibold">Psicoterapia para jovens e adultos</h3>
          <p className="mt-3 text-muted">
            Atendimento individual, presencial ou on-line, a partir de 12 anos, com base na Terapia
            Cognitivo-Comportamental, na Análise do Comportamento e na Terapia Breve.
          </p>
          <p className="mt-5 text-sm font-semibold tracking-[0.14em] text-muted uppercase">
            Temas com os quais a psicóloga trabalha
          </p>
          <ul className="mt-3 grid gap-2.5">
            {therapyThemes.map((theme) => (
              <li key={theme} className="flex items-start gap-3">
                <CheckIcon className="mt-1 size-5 shrink-0 text-accent" />
                <span>{theme}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-muted">
            De 12 a 17 anos, o atendimento acontece com o consentimento dos responsáveis.
          </p>
          <div className="mt-auto pt-7">
            <WhatsAppButton segment="paciente" position="servicos-psicoterapia">
              Agendar uma conversa
            </WhatsAppButton>
          </div>
        </article>

        <article className="flex flex-col rounded-3xl border border-line bg-white p-7 md:p-9">
          <h3 className="text-2xl font-semibold">Orientação parental</h3>
          <p className="mt-3 text-muted">
            Apoio técnico e prático para pais e responsáveis, incluindo questões do
            desenvolvimento e da neurodiversidade, como o TEA.
          </p>
          <p className="mt-5">
            A orientação é voltada à família: ajuda a compreender comportamentos, organizar a
            rotina e construir estratégias de apoio dentro de casa. Pode ser presencial ou
            on-line.
          </p>
          <p className="mt-5 text-sm text-muted">
            A orientação parental não é diagnóstico e não substitui a avaliação de médicos e
            outros profissionais, quando necessária.
          </p>
          <div className="mt-auto pt-7">
            <WhatsAppButton segment="familia" position="servicos-orientacao-parental" variant="outline">
              Conversar sobre orientação
            </WhatsAppButton>
          </div>
        </article>
      </div>
    </Section>
  );
}
