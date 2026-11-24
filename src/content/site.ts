/**
 * Fonte única de dados e textos da landing page (Spec 01).
 *
 * ATENÇÃO: todos os dados abaixo são FICTÍCIOS (Anexo A do PRD).
 * Substitua pelos dados reais antes de publicar. Todo o site (seções,
 * rodapé, metadados e dados estruturados) lê daqui.
 */

export type Segment = 'paciente' | 'familia' | 'escola' | 'empresa';

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Step {
  title: string;
  text: string;
}

const address = {
  street: 'Avenida Paulista, 726, conjunto 404',
  district: 'Bela Vista',
  city: 'São Paulo',
  state: 'SP',
  zip: '01310-910',
};

export const site = {
  // Identificação profissional (R1)
  name: 'Regiana Pereira Rodrigues',
  shortName: 'Regiana Rodrigues',
  firstName: 'Regiana',
  crp: 'CRP 06/123456',
  espaco: 'Consultório Regiana Rodrigues',
  yearsExperience: 11,

  // Página
  url: 'https://regianarodrigues.psi.br',
  lang: 'pt-BR',
  title:
    'Psicóloga na Av. Paulista - SP | Terapia - Palestras Escolares - Análise Comportamental',
  description:
    'Psicoterapia presencial na Av. Paulista, em São Paulo, e on-line para jovens e adultos. Orientação a famílias e atuação em escolas e empresas. CRP 06/123456.',
  ogImage: '/og-image.png',

  // Contato
  whatsappNumber: '5511951643672',
  whatsappDisplay: '(11) 95164-3672',
  instagramHandle: '@regianarodrigues.psi',
  instagramUrl: 'https://www.instagram.com/regianarodrigues.psi',

  // Local
  address,
  addressLine: `${address.street} — ${address.district}, ${address.city} – ${address.state}, CEP ${address.zip}`,
  addressShort: `Av. Paulista, ${address.district}, ${address.city} – ${address.state}`,
  directionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent(
      `${address.street}, ${address.district}, ${address.city} - ${address.state}, ${address.zip}`,
    ),
  mapEmbedUrl:
    'https://www.google.com/maps?output=embed&q=' +
    encodeURIComponent(
      `${address.street}, ${address.district}, ${address.city} - ${address.state}, ${address.zip}`,
    ),
  arrivalRefs: 'Próximo à estação Brigadeiro do Metrô (Linha 2-Verde).',

  // Horários (faixa geral — D9)
  hoursText: 'Segunda a sexta, das 8h às 18h; sábados, das 8h às 14h.',
  hoursWeekday: { opens: '08:00', closes: '18:00' },
  hoursSaturday: { opens: '08:00', closes: '14:00' },

  // Mensagens pré-preenchidas do WhatsApp (R11: nunca pedem dados de saúde)
  whatsappMessages: {
    paciente:
      'Olá, Regiana! Encontrei seu site e gostaria de agendar uma primeira conversa sobre atendimento psicológico.',
    familia:
      'Olá, Regiana! Gostaria de saber mais sobre a orientação para famílias.',
    escola:
      'Olá, Regiana! Represento uma escola e gostaria de saber mais sobre consultoria e palestras.',
    empresa:
      'Olá, Regiana! Represento uma empresa e gostaria de saber mais sobre palestras e capacitações.',
  } satisfies Record<Segment, string>,

  // Navegação por âncoras
  nav: [
    { href: '#profissional', label: 'Apresentação' },
    { href: '#servicos', label: 'Atendimento' },
    { href: '#institucional', label: 'Escolas e empresas' },
    { href: '#como-funciona', label: 'Como funciona' },
    { href: '#faq', label: 'Dúvidas' },
    { href: '#contato', label: 'Contato' },
    { href: '/blog', label: 'Blog' },
  ],
};

export const approaches = [
  {
    name: 'Terapia Cognitivo-Comportamental (TCC)',
    text: 'Trabalha a relação entre pensamentos, emoções e comportamentos, com estratégias práticas para o dia a dia.',
  },
  {
    name: 'Análise do Comportamento',
    text: 'Observa como a história de cada pessoa e o ambiente em que ela vive influenciam o que sente e faz. A ABA é sua aplicação prática.',
  },
  {
    name: 'Terapia Breve',
    text: 'Organiza o processo em torno de objetivos específicos, com planejamento por etapas e revisões ao longo do caminho.',
  },
];

export const therapyThemes = [
  'Ansiedade e estresse do dia a dia',
  'Dificuldades de relacionamento',
  'Transições e decisões de vida',
  'Autoestima e autoconhecimento',
  'Organização da rotina e dos hábitos',
  'Dificuldades no ambiente escolar ou de trabalho',
];

export const steps: Step[] = [
  {
    title: 'Primeira mensagem',
    text: 'Você escreve pelo WhatsApp e combinamos dia, horário e se o atendimento será presencial ou on-line.',
  },
  {
    title: 'Sessão de acolhimento',
    text: 'No primeiro encontro, a psicóloga ouve você, entende o que motivou a busca e explica como a terapia funciona.',
  },
  {
    title: 'Objetivos definidos em conjunto',
    text: 'Juntos, vocês constroem os objetivos do trabalho e o plano de como chegar a eles, respeitando o seu ritmo.',
  },
  {
    title: 'Sessões regulares',
    text: 'Os encontros costumam durar cerca de 50 minutos e, em geral, acontecem uma vez por semana, no consultório ou por videochamada.',
  },
  {
    title: 'Acompanhamento do processo',
    text: 'Ao longo do tempo, o caminho é revisto e ajustado conforme as necessidades que surgem.',
  },
];

export const faq: FaqItem[] = [
  {
    question: 'O atendimento é presencial ou on-line?',
    answer:
      'Os dois. A psicoterapia pode ser presencial, no consultório da Avenida Paulista, ou on-line, por videochamada. A modalidade é combinada no primeiro contato, de acordo com a sua necessidade. Consultorias e palestras para escolas e empresas acontecem presencialmente, no local do cliente.',
  },
  {
    question: 'Como funciona o atendimento on-line?',
    answer:
      'É feito por videochamada, em horário combinado, com o mesmo formato e a duração aproximada do atendimento presencial. Para participar, você precisa de um dispositivo com câmera e microfone, boa conexão de internet e um local reservado, onde se sinta à vontade e não seja ouvido por outras pessoas.',
  },
  {
    question: 'Onde fica o consultório e como chegar?',
    answer:
      'O consultório fica na Avenida Paulista, 726, conjunto 404, na Bela Vista, em São Paulo – SP. A estação mais próxima é a Brigadeiro do Metrô (Linha 2-Verde). Na seção de contato há o mapa e o botão "Como chegar".',
  },
  {
    question: 'Quais são os dias e horários de atendimento?',
    answer:
      'O atendimento ocorre de segunda a sexta, das 8h às 18h, e aos sábados, das 8h às 14h. A disponibilidade de horários é combinada diretamente pelo WhatsApp.',
  },
  {
    question: 'Como agendo a primeira sessão?',
    answer:
      'Basta tocar no botão de WhatsApp desta página e enviar a mensagem. A psicóloga responde, combina dia e horário e explica como será o primeiro encontro. Não é necessário descrever o que você está sentindo por mensagem.',
  },
  {
    question: 'A partir de que idade há atendimento?',
    answer:
      'A partir dos 12 anos. Para adolescentes de 12 a 17 anos, o atendimento acontece com o consentimento dos responsáveis.',
  },
  {
    question: 'Há atendimento de crianças?',
    answer:
      'Não. A psicoterapia é para jovens a partir de 12 anos e adultos. Para famílias de crianças ou de jovens, existe a orientação parental, voltada aos pais e responsáveis.',
  },
  {
    question: 'Há atendimento por convênio?',
    answer:
      'Não há atendimento por convênio. Após cada sessão é emitido recibo, que pode ser usado para solicitar reembolso, conforme as regras do seu plano de saúde.',
  },
  {
    question: 'O que são TCC, Análise do Comportamento (ABA) e Terapia Breve?',
    answer:
      'A TCC (Terapia Cognitivo-Comportamental) trabalha a relação entre pensamentos, emoções e comportamentos. A Análise do Comportamento estuda como a história de cada pessoa e o ambiente influenciam o que ela faz e sente; a ABA é a sua aplicação prática. A Terapia Breve tem foco em objetivos específicos e planejamento por etapas. Na prática, a psicóloga combina essas abordagens conforme cada pessoa.',
  },
  {
    question: 'Quanto tempo dura a terapia?',
    answer:
      'Depende de cada pessoa, dos objetivos definidos e do ritmo do processo. Por isso, não é possível prever prazos nem garantir resultados. As sessões costumam ter cerca de 50 minutos e, em geral, acontecem uma vez por semana.',
  },
  {
    question: 'Os atendimentos são sigilosos?',
    answer:
      'Sim. O sigilo é um dever da profissão, previsto no Código de Ética Profissional do Psicólogo. Os limites do sigilo, quando existirem, são explicados no início do atendimento.',
  },
];

/** Validação (Spec 01): falha cedo se faltar dado obrigatório. */
function validateSite() {
  const required: [string, string][] = [
    ['name', site.name],
    ['crp', site.crp],
    ['whatsappNumber', site.whatsappNumber],
    ['address.street', site.address.street],
    ['address.zip', site.address.zip],
    ['url', site.url],
    ['title', site.title],
    ['description', site.description],
  ];
  for (const [field, value] of required) {
    if (!value || !value.trim()) {
      throw new Error(`Dado obrigatório ausente em site.ts: "${field}"`);
    }
  }
  if (!/^55\d{10,11}$/.test(site.whatsappNumber)) {
    throw new Error(
      'site.whatsappNumber deve estar no formato internacional (ex.: 5511912345678).',
    );
  }
  if (!/^CRP \d{2}\/\d{3,6}$/.test(site.crp)) {
    throw new Error('site.crp deve estar no formato "CRP 06/123456".');
  }
}

validateSite();
