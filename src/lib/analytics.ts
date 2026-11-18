/**
 * Medição de conversão com GA4 (Spec 15).
 * - Liga ao abrir a página, sem banner de consentimento e sem opção de desativar
 *   (decisão do cliente).
 * - Só mede audiência: visitas, fonte do acesso, localização aproximada e cliques nos
 *   botões. Sem publicidade, sem sinais do Google e sem personalização de anúncios.
 * - Nunca envia dado pessoal nem de saúde: os eventos só levam "segmento" e "posição".
 * - Defina o ID da métrica em VITE_GA_MEASUREMENT_ID (ex.: G-XXXXXXXXXX).
 *   Sem ID configurado, nada é carregado nem enviado.
 */

type EventParams = Record<string, string | number>;

interface AnalyticsWindow {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
}

const GA_ID: string | undefined = import.meta.env.VITE_GA_MEASUREMENT_ID || undefined;

let scriptLoaded = false;
let active = false;

function win(): AnalyticsWindow | null {
  return typeof window === 'undefined' ? null : (window as unknown as AnalyticsWindow);
}

export function enableAnalytics() {
  const w = win();
  if (!w || !GA_ID) return;
  if (scriptLoaded) return;
  scriptLoaded = true;
  active = true;

  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // O GA espera o objeto "arguments" (e não um array) no dataLayer.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };

  // Apenas medição de audiência: tudo relacionado a publicidade fica negado.
  w.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  w.gtag('js', new Date());
  w.gtag('config', GA_ID, {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`;
  document.head.appendChild(script);
}

/** Registra um evento. Nunca bloqueia nem atrasa a ação do visitante. */
export function track(name: string, params: EventParams = {}) {
  const w = win();
  if (!active || !w?.gtag) return;
  try {
    w.gtag('event', name, params);
  } catch {
    // Falha de medição nunca pode afetar a navegação.
  }
}
