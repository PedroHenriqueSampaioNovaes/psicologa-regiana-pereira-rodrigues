import { site, type Segment } from '../content/site';

export function whatsappUrl(segment: Segment): string {
  const text = encodeURIComponent(site.whatsappMessages[segment]);
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}
