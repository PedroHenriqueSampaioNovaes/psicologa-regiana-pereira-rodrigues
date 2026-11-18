import { faq, site } from './content/site';

/**
 * Metadados e dados estruturados (Specs 03 e 14). Usado só no build
 * (pré-renderização). Tudo vem da fonte única de dados e só descreve o que
 * está visível na página: sem avaliações, notas ou preços (R3, R5).
 */

function esc(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function jsonLd(data: unknown): string {
  // Evita fechar o <script> por acidente.
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function structuredData() {
  const businessId = `${site.url}/#negocio`;
  const personId = `${site.url}/#profissional`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': businessId,
        name: site.espaco,
        description: site.description,
        url: site.url,
        image: `${site.url}${site.ogImage}`,
        telephone: `+${site.whatsappNumber}`,
        inLanguage: site.lang,
        address: {
          '@type': 'PostalAddress',
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.state,
          postalCode: site.address.zip,
          addressCountry: 'BR',
        },
        areaServed: [
          { '@type': 'City', name: 'São Paulo' },
          { '@type': 'AdministrativeArea', name: 'Bela Vista' },
          { '@type': 'AdministrativeArea', name: 'Consolação' },
          { '@type': 'AdministrativeArea', name: 'Cerqueira César' },
        ],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: site.hoursWeekday.opens,
            closes: site.hoursWeekday.closes,
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: site.hoursSaturday.opens,
            closes: site.hoursSaturday.closes,
          },
        ],
        sameAs: [site.instagramUrl],
        employee: { '@id': personId },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: site.name,
        jobTitle: 'Psicóloga',
        identifier: site.crp,
        worksFor: { '@id': businessId },
        knowsAbout: [
          'Terapia Cognitivo-Comportamental',
          'Análise do Comportamento',
          'Terapia Breve',
          'Neurodiversidade',
        ],
      },
      {
        '@type': 'FAQPage',
        inLanguage: site.lang,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
    ],
  };
}

export function headTags(): string {
  const image = `${site.url}${site.ogImage}`;
  return [
    `<title>${esc(site.title)}</title>`,
    `<meta name="description" content="${esc(site.description)}" />`,
    `<link rel="canonical" href="${site.url}/" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${esc(site.espaco)}" />`,
    `<meta property="og:title" content="${esc(site.title)}" />`,
    `<meta property="og:description" content="${esc(site.description)}" />`,
    `<meta property="og:url" content="${site.url}/" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(`${site.espaco} — psicoterapia presencial e on-line, na Avenida Paulista`)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(site.title)}" />`,
    `<meta name="twitter:description" content="${esc(site.description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${jsonLd(structuredData())}</script>`,
  ].join('\n    ');
}
