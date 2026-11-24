import { site } from '../content/site';
import { ClockIcon, PinIcon } from './Icons';
import { WhatsAppButton } from './WhatsAppButton';

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="inicio-titulo" className="bg-paper pt-6 pb-16 md:pt-16 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[1.15fr_1fr] md:gap-14 md:px-8">
        <div>
          <p className="mb-3 text-sm font-semibold text-accent md:mb-4">
            {site.name} · Psicóloga · {site.crp}
          </p>
          <h1
            id="inicio-titulo"
            tabIndex={-1}
            className="text-[1.85rem] font-semibold md:text-5xl md:leading-[1.12]"
          >
            Psicóloga na Avenida Paulista: psicoterapia presencial e on-line para jovens e adultos
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted md:mt-5 md:text-lg">
            Um espaço de escuta e cuidado em São Paulo, com atuação em Terapia
            Cognitivo-Comportamental, Análise do Comportamento e Terapia Breve.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton segment="paciente">
              Conversar pelo WhatsApp
            </WhatsAppButton>
            <a
              href="#contato"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-line bg-white px-6 py-3 text-base font-semibold text-ink no-underline transition-colors hover:border-accent hover:text-accent"
            >
              Como chegar
            </a>
          </div>

          <ul className="mt-8 grid gap-3 text-[0.95rem] text-ink">
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>{site.addressShort}</span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 size-5 shrink-0 text-accent" />
              <span>Atendimento presencial e on-line · A partir de 12 anos, com consentimento dos responsáveis</span>
            </li>
          </ul>
        </div>

        <div>
          <img
            src="/hero-consultorio.jpg"
            alt="Pessoa sentada em uma poltrona, em um ambiente acolhedor de consultório"
            width={640}
            height={960}
            decoding="async"
            className="h-72 w-full rounded-3xl border border-line bg-stone object-cover object-[50%_20%] md:h-104"
          />
        </div>
      </div>
    </section>
  );
}
