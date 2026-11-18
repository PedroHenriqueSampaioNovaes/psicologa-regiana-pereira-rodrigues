import { site } from '../content/site';
import { CheckIcon } from './Icons';
import { Section, SectionHeading } from './Section';

const qualifications = [
  'Psicóloga, com mais de 11 anos de experiência na área comportamental',
  'Formação e atuação em Terapia Cognitivo-Comportamental (TCC), Análise do Comportamento (ABA) e Terapia Breve',
  'Pós-graduanda em Neurociência',
  'Vivência com neurodiversidade e Transtorno do Espectro Autista (TEA)',
];

export function Profissional() {
  return (
    <Section id="profissional" tone="sand">
      <div className="grid items-start gap-10 md:grid-cols-[320px_1fr] md:gap-14">
        <div className="mx-auto w-full max-w-xs md:mx-0">
          <img
            src="/psicologa-regiana-rodrigues.jpg"
            alt={`Retrato de ${site.name}`}
            width={640}
            height={960}
            loading="lazy"
            decoding="async"
            className="aspect-4/5 w-full rounded-3xl border border-line bg-stone object-cover object-top"
          />
        </div>

        <div>
          <SectionHeading
            id="profissional"
            eyebrow="Apresentação"
            title={`${site.name}, psicóloga em Av. Paulista - São Paulo`}
          />

          <p className="max-w-2xl text-lg">
            {site.firstName} atua na área comportamental há mais de{' '}
            {site.yearsExperience} anos. Sua prática clínica é fundamentada na
            Terapia Cognitivo-Comportamental, na Análise do Comportamento e na
            Terapia Breve. A vivência com neurodiversidade e TEA também orienta
            seu trabalho com famílias e escolas.
          </p>
          <p className="mt-4 max-w-2xl text-lg">
            No consultório, o trabalho começa pela escuta. Junto com cada
            pessoa, são definidos objetivos e estratégias práticas, revistos ao
            longo do processo. O atendimento é individual, presencial ou
            on-line, e sigiloso.
          </p>

          <ul className="mt-8 grid gap-3">
            {qualifications.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon className="mt-1 size-5 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 inline-block rounded-2xl border border-line bg-paper px-5 py-4">
            <p className="text-sm font-semibold tracking-[0.14em] text-muted uppercase">
              Identificação profissional
            </p>
            <p className="mt-1 font-serif text-xl font-semibold">{site.name}</p>
            <p className="text-muted">Psicóloga · {site.crp}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
