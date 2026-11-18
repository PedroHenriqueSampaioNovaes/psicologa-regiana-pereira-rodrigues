import { site } from '../content/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-stone pb-28 pt-12 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="font-serif text-xl font-semibold">{site.name}</p>
          <p className="mt-1 text-ink">Psicóloga · {site.crp}</p>
          <p className="mt-3 text-sm text-muted">{site.espaco}</p>
        </div>

        <div className="text-sm text-ink">
          <address className="not-italic">{site.addressLine}</address>
          <p className="mt-2">{site.hoursText}</p>
          <p className="mt-2">
            WhatsApp: {site.whatsappDisplay}
            <br />
            Instagram: {site.instagramHandle}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl space-y-3 border-t border-line px-5 pt-6 text-sm text-muted md:px-8">
        <p>
          © {site.name} · {site.crp}
        </p>
      </div>
    </footer>
  );
}
