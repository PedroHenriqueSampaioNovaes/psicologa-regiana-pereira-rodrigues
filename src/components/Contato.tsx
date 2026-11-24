import { site } from '../content/site';
import { ClockIcon, InstagramIcon, PinIcon } from './Icons';
import { MapEmbed } from './MapEmbed';
import { Section, SectionHeading } from './Section';
import { WhatsAppButton } from './WhatsAppButton';

export function Contato() {
  return (
    <Section id="contato" tone="sand">
      <SectionHeading
        id="contato"
        eyebrow="Contato e localização"
        title="Fale com a psicóloga"
        lead="O primeiro contato é feito pelo WhatsApp. Se preferir, acompanhe também pelo Instagram."
      />

      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <WhatsAppButton segment="paciente">
            Conversar pelo WhatsApp
          </WhatsAppButton>

          <ul className="mt-9 grid gap-6">
            <li className="flex items-start gap-4">
              <PinIcon className="mt-1 size-6 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">{site.espaco}</p>
                <address className="not-italic text-muted">
                  {site.addressLine}
                </address>
                <p className="mt-2 text-muted">{site.arrivalRefs}</p>
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex min-h-11 items-center font-semibold text-accent underline underline-offset-4"
                >
                  Como chegar
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <ClockIcon className="mt-1 size-6 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Horários de atendimento</p>
                <p className="text-muted">{site.hoursText}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <InstagramIcon className="mt-1 size-6 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Instagram</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-accent underline underline-offset-4"
                >
                  {site.instagramHandle}
                </a>
              </div>
            </li>
          </ul>
        </div>

        <MapEmbed />
      </div>
    </Section>
  );
}
