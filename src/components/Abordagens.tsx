import { approaches } from '../content/site';
import { Section, SectionHeading } from './Section';

export function Abordagens() {
  return (
    <Section id="abordagens">
      <SectionHeading id="abordagens" title="Abordagens de trabalho" />
      <div className="grid gap-5 md:grid-cols-3">
        {approaches.map((item) => (
          <article key={item.name} className="rounded-2xl border border-line bg-white p-6">
            <h3 className="font-serif text-xl font-semibold">{item.name}</h3>
            <p className="mt-3 text-muted">{item.text}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
