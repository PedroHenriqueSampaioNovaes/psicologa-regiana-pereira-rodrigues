import { site } from '../content/site';

/**
 * Mapa incorporado (Spec 13). Carrega sempre, sem depender de consentimento
 * (decisão do cliente). O carregamento é preguiçoso: o navegador só busca o
 * mapa quando a seção de contato se aproxima da tela.
 */
export function MapEmbed() {
  return (
    <div className="aspect-4/3 w-full overflow-hidden rounded-3xl border border-line bg-stone">
      <iframe
        title={`Mapa com a localização do consultório: ${site.addressShort}`}
        src={site.mapEmbedUrl}
        className="size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
