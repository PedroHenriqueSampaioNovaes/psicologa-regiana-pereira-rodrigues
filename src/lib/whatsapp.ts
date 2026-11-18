import { site, type Segment } from '../content/site';

/** Link do WhatsApp com mensagem pré-preenchida do público (Spec 05). */
export function whatsappUrl(segment: Segment): string {
  const text = encodeURIComponent(site.whatsappMessages[segment]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
