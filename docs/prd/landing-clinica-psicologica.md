# PRD — Landing Page da Clínica de Psicologia (SEO local, mobile-first, conversão por WhatsApp)

> Tipo: PRD inicial · Data: 2026-11-17
> **Status:** Aguardando implementação
>
> <!-- Valores possíveis: "Aguardando implementação" | "Implementada". Atualize para "Implementada" quando todas as specs estiverem concluídas. -->

## 1. Visão geral

Uma landing page de **uma única página**, pensada primeiro para o celular, que apresenta uma psicóloga clínica com consultório na **Avenida Paulista (São Paulo – SP)** e transforma visitantes em **conversas iniciadas pelo WhatsApp**.

A página precisa transmitir **confiança, acolhimento e profissionalismo**, aparecer bem em buscas locais (ex.: "psicóloga Avenida Paulista", "terapia presencial Bela Vista") e **cumprir as regras de publicidade profissional do Conselho Federal de Psicologia (CFP)**.

Todos os dados (nome, CRP, telefone, endereço, Instagram, domínio) são **fictícios, mas realistas**. Estão reunidos no Anexo A e devem ser substituídos pelos dados reais antes de qualquer publicação.

## 2. Problema que resolve

- Quem procura psicoterapia presencial perto da Av. Paulista hoje encontra a psicóloga por indicação ou por perfis em redes sociais. Isso limita a descoberta e passa pouca informação de confiança (formação, registro, como é a 1ª conversa, onde fica).
- A profissional atua em frentes diferentes: psicoterapia, orientação parental, consultoria escolar e palestras. Não existe um lugar único que posicione essa atuação de forma clara e ética.
- Quem chega à página muitas vezes está vulnerável e inseguro. Se não houver um caminho simples para falar com a psicóloga, a pessoa desiste.
- Sites de psicólogos costumam cometer infrações de publicidade (preço, promessa de resultado, depoimentos, título que não possuem). O site precisa nascer em conformidade.

## 3. Público-alvo

- **Principal (foco da conversão):** jovens (a partir de 12 anos, com consentimento dos responsáveis) e adultos que buscam psicoterapia presencial em São Paulo, principalmente quem mora, trabalha ou estuda perto da Av. Paulista e região central.
- **Secundário:** famílias que buscam orientação parental, incluindo desenvolvimento e neurodiversidade/TEA.
- **Secundário institucional:** escolas (coordenação e gestão pedagógica) e empresas (RH e liderança), interessadas em consultoria, supervisão, palestras e capacitações.

## 4. Objetivo do recorte atual

Entregar a landing page completa, publicável após troca dos dados fictícios, que:

1. Gere **cliques qualificados no WhatsApp** (conversão principal).
2. Tenha **base sólida de SEO local** e de SEO técnico.
3. Cumpra as **regras de publicidade do CFP** e a **LGPD**.
4. Funcione muito bem em celular (carregamento rápido, leitura confortável, toque fácil).

### 4.1 Decisões confirmadas

| # | Decisão |
|---|---|
| D1 | PRD inicial; a landing é o produto inteiro. |
| D2 | Stack mantida: React + Vite + TypeScript + Tailwind v4, com **pré-renderização estática no build** (HTML pronto para o Google). |
| D3 | **Sem depoimentos**, avaliações ou relatos de pacientes. |
| D4 | **Foco principal no paciente jovem/adulto.** Famílias, escolas e empresas entram como seções secundárias, cada uma com CTA de WhatsApp próprio. |
| D5 | **Sem título de especialista registrado.** ABA, TCC e Terapia Breve são apresentadas como formação e atuação. A pós-graduação em Neurociência aparece como "em andamento". |
| D6 | Atendimento clínico a partir de **12 anos**. Não há atendimento infantil. |
| D7 | Consultoria escolar e palestras acontecem **presencialmente no local do cliente**. A psicoterapia (e a orientação parental) é **presencial, no consultório, ou on-line, por videochamada** (ver D14). |
| D14 | O atendimento clínico passa a ser **presencial e on-line** (decisão posterior do cliente). A localização na Av. Paulista continua sendo o foco de SEO local. |
| D8 | Medição com **GA4, sem banner de consentimento** (decisão do cliente), apenas para audiência: acessos, fonte e localização aproximada. Base: legítimo interesse, **sem opção de desativar** (decisão do cliente). Sem recursos de publicidade. |
| D9 | Horários exibidos como **faixa geral**. |
| D10 | Mapa **incorporado (iframe)** na seção de contato, **exibido sempre, sem depender de consentimento** (decisão do cliente). |
| D15 | **Sem seção de política de privacidade** na página (decisão do cliente). |
| D11 | Imagens: **fotos de banco de imagens** (com as salvaguardas da regra R14). |
| D12 | Estrutura em uma página. "Modalidades" e "Como funciona" foram unificadas (só há uma modalidade). |
| D13 | Identidade visual **neutra, com cores claras** (pedido da cliente). Uma única aparência clara, sem tema escuro. |

### 4.2 Suposições (a validar com a profissional antes de publicar)

- S1: Não há convênio. Emite recibo para reembolso, quando o plano do paciente permitir.
- S2: Sessões de aproximadamente 50 minutos, em geral semanais. Primeiro contato pelo WhatsApp, depois uma primeira sessão de acolhimento (paga como as demais, sem divulgar valores).
- S3: Horários (confirmados pelo cliente): segunda a sexta, 8h às 18h; sábados até as 14h. Suposição: aos sábados o atendimento começa às 8h, como nos dias úteis (usado nos dados estruturados).
- S4: A profissional atende sozinha (não há equipe). O "espaço" é o consultório dela.
- S5: O domínio será um endereço próprio de profissional (ex.: terminado em .psi.br, que exige CRP).
- S6: Os termos "Análise do Comportamento" e "ABA" podem ser usados como formação/atuação (não como título), conforme D5.
- S7: Valores e política de cancelamento serão informados apenas no contato direto.
- S9: O atendimento on-line segue as normas do CFP para serviços psicológicos mediados por tecnologia (por exemplo, eventual cadastro do serviço junto ao Conselho). A profissional deve confirmar com o CRP-06 o que é exigido e se algum dado de cadastro precisa constar na divulgação. O site não cita plataformas de videochamada.
- S10: A orientação parental também pode ser on-line; palestras e consultorias seguem presenciais, no local do cliente.
- S8: O número de anos de experiência (11+) é verdadeiro e comprovável.

## 5. Funcionalidades

**Essenciais:**

- Página única, mobile-first, com seções: Hero · Apresentação da profissional · Abordagens de trabalho · Serviços (psicoterapia e orientação parental) · Atuação em escolas e empresas · Atendimento presencial e on-line e como funciona · FAQ · Contato e localização.
- CTA de WhatsApp em pontos estratégicos, com **mensagem pré-preenchida por público**, e botão fixo no celular.
- Identificação profissional (nome completo + CRP) visível no topo e no rodapé.
- HTML pré-renderizado, metadados, imagens de compartilhamento e canonical.
- Dados estruturados de negócio local/saúde, e consistência de Nome-Endereço-Telefone (NAP).
- GA4 (audiência e eventos de conversão) ativo ao abrir a página, sem banner e sem opção de desativar.
- Mapa incorporado sempre exibido (carregamento preguiçoso) e link "Como chegar".
- (Removido por decisão do cliente) Aviso de que o site não atende emergências, com contatos de apoio (CVV 188, SAMU 192).

**Desejáveis:**

- Link de Instagram em destaque no contato e rodapé.
- Navegação por âncoras suave, com destaque da seção atual no menu.
- Mini-glossário na FAQ (o que é TCC, o que é Terapia Breve, o que é ABA), em linguagem simples.

## 6. Fora do escopo

- Depoimentos, avaliações, casos clínicos, "antes e depois", números de pacientes atendidos.
- Preços, pacotes, promoções, sessão grátis ou desconto.
- Atendimento on-line de escolas e empresas (palestras e consultorias seguem presenciais, no local do cliente).
- Atendimento infantil (menores de 12 anos).
- Formulário de contato, agendamento online, login, área do paciente, pagamento.
- Blog, páginas separadas por público ou por serviço, versão em outro idioma.
- Chatbot, IA, WhatsApp API/automação, CRM.
- Meta Pixel / remarketing.
- Configuração do Google Meu Negócio, citações em diretórios e SEO off-page (recomendado fazer em paralelo, mas não faz parte da página).
- Hospedagem, domínio e DNS (ver Anexo A para o domínio fictício de referência).

## 7. Regras de negócio

**Conformidade com publicidade profissional (CFP).** Base: art. 20 do Código de Ética Profissional do Psicólogo. Recomenda-se validar o texto final com o CRP-06 antes de publicar.

- **R1 — Identificação:** nome completo e número do CRP aparecem no topo (hero ou logo abaixo) e no rodapé. Nunca podem ser omitidos ou ficar ilegíveis em celular.
- **R2 — Títulos e qualificações:** só se divulga o que a profissional possui. ABA, TCC, Terapia Breve e Análise do Comportamento aparecem como **formação e atuação**. Neurociência aparece como **pós-graduação em andamento**. Proibido: "especialista", "neuropsicóloga", "certificada", "mestre/doutora" sem comprovação.
- **R3 — Sem preço como propaganda:** nenhum valor, desconto, pacote, "primeira sessão grátis" ou "a partir de". A página não trata de valores (pergunta removida da FAQ por decisão do cliente).
- **R4 — Sem promessa de resultado:** nada de "cure", "supere", "resolva", "garantido", "resultados comprovados", prazos de melhora. Usar linguagem de processo e cuidado ("ajuda a compreender", "oferece um espaço para", "trabalha com").
- **R5 — Sem depoimentos:** nenhum depoimento, avaliação, nota de estrelas, relato, caso clínico ou contagem de pacientes.
- **R6 — Sem superlativos nem autopromoção:** proibido "melhor", "referência", "número 1", "única", "mais experiente", comparações com outros profissionais.
- **R7 — Sem sensacionalismo:** sem apelo ao medo, culpa ou urgência artificial.
- **R8 — Neurodiversidade/TEA:** descrita como **atuação de apoio, orientação e acompanhamento**. A página não diagnostica, não promete "tratamento" nem melhora, e não substitui avaliação médica/multiprofissional.
- **R9 — Modalidades:** a psicoterapia e a orientação parental são oferecidas de forma **presencial (consultório) ou on-line (videochamada)**. Palestras e consultorias para escolas e empresas são presenciais, no local do cliente. O texto não promete eficácia equivalente nem superior de uma modalidade sobre a outra, e não cita plataformas específicas. Telepsicologia segue regras do CFP (ver S9).
- **R10 — Menores:** de 12 a 17 anos, o atendimento acontece com consentimento dos responsáveis (explicado na FAQ e em Serviços).
- **R11 — Sem coleta de dados de saúde:** a página não tem formulário. A mensagem pré-preenchida do WhatsApp é genérica e **nunca pede nem sugere que a pessoa descreva sintomas, diagnósticos ou queixas**.
- **R12 — (Removida por decisão do cliente):** a página não exibe mais aviso de não-emergência com CVV (188) e SAMU (192), nem na FAQ nem no rodapé.
- **R13 — Privacidade:** o GA4 e o mapa incorporado (Google Maps) carregam sem banner de consentimento, por decisão do cliente. Por decisão do cliente, a página não tem política de privacidade nem opção de desativar a medição. O GA4 mede só audiência, sem publicidade, sinais do Google nem personalização de anúncios. Eventos de medição não carregam dado pessoal nem de saúde. Sem Meta Pixel. **Risco comunicado ao cliente:** sem política de privacidade, a página não informa o visitante sobre o GA4 e o mapa do Google, o que pode não atender ao dever de transparência da LGPD. A adequação dessa escolha deve ser confirmada com um profissional jurídico.
- **R14 — Imagens:** fotos de banco de imagens servem **somente como ambientação** (consultório, luz, plantas, objetos). Nenhuma foto de banco pode ser apresentada, legendada ou descrita como sendo a psicóloga ou pacientes reais. O retrato da profissional é um **espaço reservado neutro** até haver foto real. Todo texto alternativo é honesto e descritivo.
- **R15 — Consistência NAP:** nome, endereço, telefone/WhatsApp, horários e CRP são idênticos em todos os pontos da página e nos dados estruturados.
- **R16 — Dados fictícios:** os dados do Anexo A são fictícios e devem ser substituídos pelos reais antes da publicação. Existe um checklist de substituição (Anexo A). A página **não** possui bloqueio técnico de indexação; a troca dos dados é responsabilidade da equipe.

## 8. Fluxos principais

### Fluxo 1 — Paciente jovem/adulto vindo do Google (principal)

1. Pesquisa "psicóloga Avenida Paulista" no celular e clica no resultado.
2. A página carrega rápido e mostra: o que é, para quem, onde fica (Av. Paulista), nome + CRP e botão "Conversar pelo WhatsApp".
3. Role a página e lê a apresentação, a abordagem e como funciona a 1ª conversa.
4. Dúvidas práticas (valor, convênio, idade) são respondidas na FAQ.
5. Toca em "Conversar pelo WhatsApp". O WhatsApp abre com mensagem pronta e genérica.
6. A conversão (clique no WhatsApp) é registrada pela medição de acessos.

### Fluxo 2 — Responsável por adolescente ou pais buscando orientação

1. Chega pela busca ou por indicação e identifica "Orientação parental" e "a partir de 12 anos".
2. Lê a regra de consentimento dos responsáveis na FAQ.
3. Usa o CTA específico dessa seção, que abre o WhatsApp com mensagem pré-preenchida adequada a famílias.

### Fluxo 3 — Escola ou empresa

1. Chega à seção "Atuação em escolas e empresas" por link ou rolagem.
2. Escolhe o CTA do seu segmento (escola ou empresa).
3. O WhatsApp abre com mensagem identificando o segmento.

### Fluxo 4 — Medição de acessos

1. O visitante acessa a página; a medição de audiência (GA4) e o mapa funcionam normalmente, sem banner, sem política de privacidade e sem controle de desativação.

### Fluxo 5 — Chegar ao consultório

1. Na seção Contato, vê endereço, horários e orientações de chegada.
2. Vê o mapa ou toca em "Como chegar", que abre o app de mapas.

## 9. Critérios de aceite

- O usuário consegue iniciar uma conversa no WhatsApp a partir do hero, do botão fixo no celular, das seções secundárias e do contato.
- O usuário encontra, sem rolar demais, nome da profissional, CRP, endereço e público atendido.
- O sistema não exibe preço, promoção, depoimento, avaliação, promessa de resultado, superlativo ou título de especialista.
- O sistema informa que a psicoterapia pode ser presencial ou on-line, e que palestras e consultorias são presenciais, no local do cliente.
- O HTML da página já traz todo o conteúdo textual sem depender de JavaScript para ser lido.
- A página não exibe banner de consentimento. O mapa é sempre exibido.
- O clique em qualquer CTA de WhatsApp é registrado como conversão, com o segmento de origem e sem dado pessoal.
- A página passa nas metas da spec 16 (performance, acessibilidade, SEO e checklist CFP).
- Todos os dados exibidos são os do Anexo A e estão consistentes entre si.

## 10. Stack

Mantida a stack já existente no projeto:

- **React 19 + TypeScript**, **Vite 8** e **Tailwind CSS v4**; lint com Oxlint.
- **Novo requisito:** geração de **HTML estático pré-renderizado no build**, para entregar conteúdo e metadados completos ao Google e às prévias de links.
- **Serviços externos:** Google Analytics 4 (ativo ao abrir a página) e Google Maps incorporado (sempre exibido).
- **Hospedagem estática**, a definir na implementação.

## 11. Justificativa da stack

- O projeto já tem React + Vite + Tailwind configurados. Trocar de framework não traria ganho que justifique o custo para uma página única.
- O ponto fraco de um app Vite padrão (HTML vazio para o Google) é resolvido pela pré-renderização estática. Isso mantém a simplicidade e dá velocidade em celular.
- Página estática é barata, rápida e segura. Não há banco, backend nem login, e isso também reduz risco de LGPD.
- GA4 e mapa foram escolhas explícitas do cliente. Por decisão dele, ambos carregam sem banner de consentimento. A página não tem política de privacidade nem opção de desativar a medição (R13).

## 12. Fases de construção

### Fase 1 — Fundação

Objetivo: base de conteúdo, layout, SEO técnico e controle de medição antes de qualquer seção.
Specs:

- Spec 01 — Fonte única de dados e conteúdo fictício
- Spec 02 — Estrutura da página, identidade visual e rodapé de identificação
- Spec 03 — Pré-renderização estática e SEO técnico
- Spec 04 — (Removida) Consentimento e privacidade

### Fase 2 — Conversão

Objetivo: o caminho para o WhatsApp funciona de ponta a ponta.
Specs:

- Spec 05 — CTA de WhatsApp por público (inclui botão fixo no celular)
- Spec 06 — Hero

### Fase 3 — Conteúdo de confiança

Objetivo: seções que geram confiança e respondem dúvidas.
Specs:

- Spec 07 — Apresentação da profissional
- Spec 08 — Abordagens de trabalho (seção do espaço e diferenciais removidos por decisão do cliente)
- Spec 09 — Serviços: psicoterapia e orientação parental
- Spec 10 — Atuação em escolas e empresas
- Spec 11 — Atendimento presencial e on-line e como funciona
- Spec 12 — FAQ
- Spec 13 — Contato e localização

### Fase 4 — SEO local e medição

Objetivo: otimizar para busca local e medir conversão.
Specs:

- Spec 14 — SEO on-page local e dados estruturados
- Spec 15 — Medição de conversão (GA4)

### Fase 5 — Validação

Objetivo: garantir qualidade, conformidade e prontidão.
Specs:

- Spec 16 — Validação final: CFP, LGPD, acessibilidade, performance e SEO

## 13. Specs funcionais detalhadas

> Cada spec é autossuficiente: um agente de codificação vai ler SÓ a spec (mais as dependências) para planejar e implementar. As regras R1–R16 da seção 7 valem para todas as specs.

---

### Spec 01 — Fonte única de dados e conteúdo fictício

- **Fase:** 1 — Fundação
- **Objetivo (o quê):** Todos os dados de identificação, contato, horário, links e textos-base da página ficam definidos **uma única vez**, e todas as seções os reutilizam.
- **Intenção (por quê):** Em SEO local e em publicidade profissional, inconsistência é erro grave (telefone diferente, CRP errado em um ponto). Uma fonte única também torna fácil trocar os dados fictícios pelos reais.
- **Contexto:** O projeto está vazio (template Vite). Não há conteúdo nem dados reais. O Anexo A traz os valores.
- **Atores:** Equipe de desenvolvimento e a profissional (ao substituir os dados).
- **Descrição do comportamento:** Os dados do Anexo A (nome, CRP, WhatsApp, endereço, referências de chegada, horários, Instagram, domínio, nome do espaço) e os textos base são definidos uma vez. Qualquer ponto que exiba nome, CRP, endereço, telefone, horário ou links usa essa mesma origem. O link do WhatsApp com mensagem pré-preenchida é derivado do número e do texto de cada público.
- **Entradas e saídas:** Entradas: dados do Anexo A. Saídas: valores consumidos por todas as seções, pelos metadados e pelos dados estruturados.
- **Dados/entidades envolvidos (conceitual):** profissional (nome completo, CRP, formações, anos de experiência, abordagens); espaço (nome, endereço completo, referências de chegada, horários, telefone/WhatsApp, Instagram); mensagens de WhatsApp por público (paciente, família, escola, empresa, geral); lista de perguntas da FAQ.
- **Estados e transições:** Não se aplica. Os dados são estáticos nesta entrega.
- **Regras de negócio:** R1, R2, R3, R11, R14, R15.
- **Validações:** Número de WhatsApp em formato internacional válido (Brasil). CRP no formato região/número. Textos não podem conter termos proibidos de R3–R7 (ver checklist da spec 16).
- **Fluxo do usuário (passo a passo):**
  1. A equipe preenche os dados (fictícios agora, reais depois) em um único lugar.
  2. Todas as seções refletem automaticamente a mudança.
- **Casos de borda e erros:** Campo obrigatório ausente (CRP, WhatsApp, endereço): o build/validação deve falhar com mensagem clara, em vez de publicar a página incompleta.- **Impacto no existente:** Substitui o conteúdo de demonstração do template. Nenhum conteúdo anterior é reaproveitado.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado que o telefone é alterado em um único lugar, Quando a página é regenerada, Então todos os pontos que mostram ou usam o telefone refletem o novo valor.
  - Dado que o CRP está ausente, Quando se tenta gerar a página, Então o processo informa o erro e não gera a versão publicável.
  - Dado qualquer texto de seção, Quando revisado, Então nenhum dado de identificação aparece digitado manualmente fora da fonte única.
- **Definição de pronto:** Todos os campos do Anexo A existem, são reutilizados e a troca de qualquer valor se propaga sem edição manual em outros pontos.
- **Dependências:** Nenhuma.
- **Fora do escopo desta spec:** Layout, estilos, textos longos de cada seção (cada spec de seção define seu conteúdo).

---

### Spec 02 — Estrutura da página, identidade visual e rodapé de identificação

- **Fase:** 1 — Fundação
- **Objetivo (o quê):** Definir o esqueleto da página única (cabeçalho, navegação por âncoras, seções, rodapé), a identidade visual de acolhimento e o rodapé com identificação profissional.
- **Intenção (por quê):** Confiança é decidida em segundos. Layout limpo, legível e calmo no celular, com a identificação profissional sempre à vista, reduz a desconfiança e atende R1.
- **Contexto:** Template Vite com Tailwind v4 já instalado e estilos de demonstração a serem substituídos.
- **Atores:** Visitante (celular e desktop).
- **Descrição do comportamento:**
  - **Mobile-first:** a experiência é desenhada primeiro para telas de ~360 px e depois expandida para tablets e desktop.
  - **Cabeçalho:** identidade (nome da profissional + "Psicóloga CRP 06/123456" ou nome do espaço) e menu de âncoras para as seções. No celular, menu compacto e acessível. Rolagem suave e foco visível.
  - **Identidade visual:** **site neutro, com predomínio de cores claras** (fundos brancos/off-white e cinzas ou tons areia muito suaves), com no máximo uma cor de destaque discreta e sóbria, usada de forma consistente em botões e links, e sem cores saturadas ou agressivas. O botão de WhatsApp precisa se destacar pelo contraste, sem quebrar a neutralidade. Contraste adequado (inclusive do texto sobre fundos claros e do botão), tipografia legível (corpo ≥ 16 px), espaçamento generoso, cantos suaves, ilustrações/ambientação discretas. Nada de visual hospitalar frio nem de "marketing agressivo". Tema escuro está fora do escopo: a página tem uma única aparência, clara. Sem animações que distraiam e respeito a "reduzir movimento".
  - **Rodapé de identificação:** nome completo, CRP, endereço, horários, WhatsApp e Instagram (sem aviso de emergência e sem nota de conteúdo informativo, por decisão do cliente).
- **Entradas e saídas:** Entra: dados da spec 01. Sai: estrutura reutilizada por todas as seções.
- **Dados/entidades envolvidos (conceitual):** profissional, espaço, lista de seções e seus rótulos de navegação.
- **Estados e transições:** Menu aberto/fechado no celular. Seção ativa no menu (desejável).
- **Regras de negócio:** R1, R6, R7, R12, R14, R15.
- **Validações:** CRP e nome visíveis no cabeçalho em ≥ 360 px sem cortes. Contraste de texto em nível AA. Áreas de toque ≥ 44 px.
- **Fluxo do usuário (passo a passo):**
  1. O visitante abre a página no celular e vê cabeçalho com nome e CRP.
  2. Abre o menu e toca em uma seção. A página rola até ela.
  3. Chega ao rodapé e encontra todos os dados de identificação.
- **Casos de borda e erros:** Tela muito estreita (320 px): nada quebra e CRP continua legível. Zoom de 200%: layout continua utilizável. Usuário com "reduzir movimento": sem rolagem animada. Dados longos (nome grande): quebram linha sem cortar.
- **Impacto no existente:** Remove a tela e os estilos de demonstração do template. Define a base visual de todas as specs seguintes.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado um celular de 360 px, Quando a página abre, Então nome e CRP estão visíveis sem rolagem horizontal.
  - Dado o menu, Quando o usuário toca em uma seção, Então rola até ela e o foco vai para o título da seção.
  - Dado o rodapé, Quando aberto, Então contém nome completo, CRP, endereço, horários, WhatsApp e Instagram.
  - Dado qualquer texto, Quando medido, Então atende contraste AA.
- **Definição de pronto:** Página com estrutura completa (seções vazias/temporárias aceitáveis), visual definido, responsiva de 320 px a desktop, rodapé completo.
- **Dependências:** Spec 01.
- **Fora do escopo desta spec:** Conteúdo final das seções, CTA de WhatsApp (spec 05), tema escuro.

---

### Spec 03 — Pré-renderização estática e SEO técnico

- **Fase:** 1 — Fundação
- **Objetivo (o quê):** A página é publicada como HTML estático completo, com metadados, compartilhamento social e canonical corretos.
- **Intenção (por quê):** Sem HTML pronto, o Google e as prévias do WhatsApp/Instagram enxergam uma página vazia. SEO local depende disso.
- **Contexto:** A stack é Vite + React, que por padrão renderiza só no navegador.
- **Atores:** Mecanismos de busca, crawlers de prévia de link, visitantes.
- **Descrição do comportamento:**
  - O resultado do build contém o texto completo de todas as seções diretamente no HTML.
  - **Metadados:** título (~60 caracteres, ex.: "Psicóloga na Av. Paulista, SP | Regiana Rodrigues CRP 06/123456"), descrição (~150 caracteres, sem promessa de resultado), idioma pt-BR, canonical para o domínio principal.
  - **Compartilhamento:** título, descrição e imagem de prévia (Open Graph/Twitter) adequados e sem dado enganoso.
  - Favicon e cor de tema. **Sem sitemap e sem robots** (decisão do cliente: desnecessários para uma página única).
- **Entradas e saídas:** Entra: dados e textos. Sai: HTML estático e arquivos auxiliares de SEO.
- **Dados/entidades envolvidos (conceitual):** metadados da página (título, descrição, URL canônica, imagem de prévia, idioma).
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R1, R4, R6, R15.
- **Validações:** Título e descrição dentro dos limites; canonical absoluto e coerente; imagem de prévia com tamanho adequado; página com exatamente um título principal.
- **Fluxo do usuário (passo a passo):**
  1. A equipe gera a versão final.
  2. Abre o resultado sem executar JavaScript e confere que todo o texto está presente.
  3. Confere o canonical e os metadados de compartilhamento.
- **Casos de borda e erros:** Descrição/título acima do limite: aviso no build. Imagem de prévia ausente: falha com mensagem clara.
- **Impacto no existente:** Altera o processo de build do projeto para gerar HTML estático.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado o HTML gerado, Quando aberto sem JavaScript, Então o texto de todas as seções e o título principal estão presentes.
  - Dado o link da página colado no WhatsApp, Quando a prévia é gerada, Então mostra título, descrição e imagem corretos.
  - Dado o HTML gerado, Quando lido, Então a URL canônica aponta para o domínio principal da página.
- **Definição de pronto:** HTML estático verificado, metadados, prévia e canonical corretos.
- **Dependências:** Specs 01 e 02.
- **Fora do escopo desta spec:** Dados estruturados e otimização de conteúdo (spec 14), medição (spec 15).

---

### Spec 04 — (Removida) Consentimento e privacidade

> **Spec removida por decisão do cliente.** O número foi mantido para não renumerar as demais specs. Não há implementação a fazer.

- **Fase:** 1 — Fundação
- **O que existia e foi retirado:** banner de consentimento, seção de política de privacidade e opção de desativar a medição de acessos.
- **Comportamento final:** a página não exibe banner, não tem política de privacidade e não oferece controle para desativar a medição. O GA4 (spec 15) liga ao abrir a página e o mapa (spec 13) carrega sempre.
- **Risco comunicado ao cliente (ver R13):** sem informar o visitante nem oferecer como recusar, a página pode não atender ao dever de transparência da LGPD, o que é mais sensível em um site de saúde mental. A adequação deve ser confirmada com um profissional jurídico.
- **Critério de aceite único:** Dado qualquer visitante, Quando a página abre, Então não aparece banner, política de privacidade nem controle de medição.
- **Dependências:** Nenhuma.

---

### Spec 05 — CTA de WhatsApp por público (inclui botão fixo no celular)

- **Fase:** 2 — Conversão
- **Objetivo (o quê):** Botões de WhatsApp consistentes, com mensagem pré-preenchida específica por público e um botão fixo no celular.
- **Intenção (por quê):** A conversão da página é o clique no WhatsApp. A mensagem pré-preenchida identifica o tipo de lead sem pedir informação sensível (R11).
- **Contexto:** Dados de WhatsApp da spec 01. A medição (spec 15) apenas registra o clique, sem atrasar nem alterar o funcionamento do botão.
- **Atores:** Visitante (paciente, família, escola, empresa).
- **Descrição do comportamento:**
  - Os rótulos de CTA seguem tom acolhedor: "Conversar pelo WhatsApp", "Agendar uma conversa", sem urgência artificial (R7).
  - **Mensagens pré-preenchidas** (exemplos, ajustáveis na spec 01):
    - **Paciente:** "Olá, Regiana! Encontrei seu site e gostaria de agendar uma primeira conversa sobre atendimento psicológico."
    - **Família:** "Olá, Regiana! Gostaria de saber mais sobre a orientação para famílias."
    - **Escola:** "Olá, Regiana! Represento uma escola e gostaria de saber mais sobre consultoria/palestras."
    - **Empresa:** "Olá, Regiana! Represento uma empresa e gostaria de saber mais sobre palestras/capacitações."
  - **Botão fixo no celular:** aparece após o visitante passar do hero (para não duplicar o CTA principal), usa a mensagem de paciente e não cobre conteúdo importante.
  - Todos os CTAs abrem o WhatsApp em nova aba/app, com o número da spec 01.
- **Entradas e saídas:** Entra: toque no CTA. Sai: abertura do WhatsApp com a mensagem do público correspondente. O segmento de origem fica disponível para a medição (spec 15).
- **Dados/entidades envolvidos (conceitual):** CTA (rótulo, público, mensagem, posição na página).
- **Estados e transições:** Botão fixo: oculto (no hero) → visível (após o hero).
- **Regras de negócio:** R3, R4, R7, R11, R13.
- **Validações:** Número válido. Mensagem codificada corretamente (acentos, espaços). Nenhum CTA pede sintomas ou dados pessoais.
- **Fluxo do usuário (passo a passo):**
  1. O visitante toca em um CTA.
  2. O WhatsApp abre com a mensagem pronta do público daquela seção.
  3. A pessoa envia (ou edita e envia) a mensagem.
- **Casos de borda e erros:** Dispositivo sem WhatsApp instalado: abre WhatsApp Web ou página da versão web, sem erro. Desktop: abre WhatsApp Web. Bloqueio de pop-ups: o link continua funcionando como link comum.
- **Impacto no existente:** Nenhum além das seções que incluem CTA.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado o CTA da seção de escolas, Quando tocado, Então abre o WhatsApp com a mensagem de escola.
  - Dado o celular após o hero, Quando o usuário rola, Então o botão fixo aparece e não cobre o conteúdo importante.
  - Dado qualquer CTA, Quando inspecionado, Então não solicita dado de saúde.
  - Dado o desktop, Quando o CTA é tocado, Então abre o WhatsApp Web.
- **Definição de pronto:** 4 variações de mensagem funcionando, botão fixo funcional e testado em celular real.
- **Dependências:** Specs 01 e 02.
- **Fora do escopo desta spec:** Registro de eventos (spec 15), chat ou automação.

---

### Spec 06 — Hero

- **Fase:** 2 — Conversão
- **Objetivo (o quê):** Primeira dobra que diga em poucos segundos quem atende, onde, para quem e como falar com ela.
- **Intenção (por quê):** É a parte mais vista e decisiva para conversão e para o SEO local (título principal com serviço + localização).
- **Contexto:** Primeira seção da página. Usa o CTA da spec 05.
- **Atores:** Visitante principalmente paciente.
- **Descrição do comportamento:**
  - **Título principal (único h1 da página):** inclui serviço e local, por exemplo "Psicóloga na Avenida Paulista: psicoterapia presencial e on-line para jovens e adultos".
  - **Subtítulo acolhedor**, sem promessa de resultado (ex.: "Um espaço de escuta e cuidado, no centro de São Paulo, com abordagem em TCC, Análise do Comportamento e Terapia Breve.").
  - **Identificação (R1):** "Regiana Pereira Rodrigues · Psicóloga · CRP 06/123456".
  - **Informações-chave:** endereço resumido (Av. Paulista, Bela Vista, São Paulo – SP), "Atendimento presencial e on-line", "A partir de 12 anos, com consentimento dos responsáveis".
  - **CTA principal** de paciente (spec 05) e CTA secundário "Como chegar" (âncora para Contato).
  - **Imagem de ambientação** (R14): sem retrato falso da profissional.
- **Entradas e saídas:** Entra: dados da spec 01. Sai: contexto e botão de ação.
- **Dados/entidades envolvidos (conceitual):** profissional, endereço resumido, públicos atendidos, imagem de ambientação.
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R1, R2, R3, R4, R6, R7, R9, R10, R14.
- **Validações:** CTA visível sem rolar em 360×640 px. Imagem otimizada para não atrasar o carregamento da primeira dobra.
- **Fluxo do usuário (passo a passo):**
  1. Chega pelo celular e lê o título e a identificação.
  2. Toca no CTA principal ou rola para saber mais.
- **Casos de borda e erros:** Imagem não carrega: o hero continua legível com cor de fundo. Nome muito longo: quebra de linha sem esconder o CRP.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado um celular de 360×640, Quando a página abre, Então título (com "presencial e on-line"), nome, CRP e CTA estão visíveis sem rolar.
  - Dado o HTML da página, Então há exatamente um h1 contendo o serviço e "Avenida Paulista".
  - Dado o texto do hero, Então não contém preço, promessa de resultado nem superlativo.
- **Definição de pronto:** Hero completo, responsivo, com CTA funcional.
- **Dependências:** Specs 01, 02 e 05.
- **Fora do escopo desta spec:** Vídeo, carrossel, animações complexas.

---

### Spec 07 — Apresentação da profissional

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Seção que apresenta nome, formação, experiência, forma de trabalhar e CRP.
- **Intenção (por quê):** Quem busca terapia quer saber **quem** vai atender. Transparência de formação e registro cria confiança e cumpre R1/R2.
- **Contexto:** Informações do perfil profissional (Anexo A).
- **Atores:** Visitante.
- **Descrição do comportamento:**
  - Texto em primeira ou terceira pessoa (consistente na página), tom humano e profissional.
  - Conteúdo: psicóloga com mais de 11 anos de experiência na área comportamental; formação e atuação em **TCC, Análise do Comportamento (ABA), Terapia Breve**; **pós-graduação em Neurociência (em andamento)**; vivência com **neurodiversidade e TEA**; como conduz o trabalho (escuta, objetivos construídos junto, sigilo).
  - Bloco "Identificação profissional": nome completo, **CRP 06/123456**.
  - **Retrato:** espaço reservado neutro (R14) com texto alternativo descritivo. A foto real substitui depois.
  - Linguagem: "atua com", "tem formação em". Nunca "especialista em autismo", "referência" etc.
- **Entradas e saídas:** Entra: dados da spec 01. Sai: seção de apresentação.
- **Dados/entidades envolvidos (conceitual):** profissional (nome, CRP, anos de experiência, formações, abordagens, status da pós).
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R1, R2, R4, R6, R8, R14.
- **Validações:** Toda qualificação listada deve existir no cadastro de dados. Pós aparece como "em andamento".
- **Fluxo do usuário (passo a passo):**
  1. O visitante rola até "Apresentação" e lê a apresentação.
  2. Vê CRP e formações e decide se continua.
- **Casos de borda e erros:** Sem foto real: o espaço reservado é neutro, sem identidade falsa. Texto longo: dividido em blocos curtos para leitura em celular.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a seção, Quando lida, Então traz nome completo, CRP, abordagens, anos de experiência e pós "em andamento".
  - Dado o texto, Então não contém "especialista", "neuropsicóloga", superlativo ou promessa.
  - Dado o retrato, Então não é foto de banco apresentada como a profissional.
- **Definição de pronto:** Seção completa e revisada contra R1, R2, R6 e R14.
- **Dependências:** Specs 01 e 02.
- **Fora do escopo desta spec:** Currículo completo, lista de cursos e certificados, vídeo de apresentação.

---

### Spec 08 — Abordagens de trabalho

> **Atualização:** por decisão do cliente, a seção sobre o espaço (nome, história e diferenciais) foi removida. Permanece apenas a exibição das abordagens (TCC, Análise do Comportamento, Terapia Breve). O texto abaixo é o original; o que se refere a espaço, história e diferenciais não está mais em vigor.


- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Seção que apresenta o espaço (consultório), a história, a abordagem e os diferenciais de forma factual.
- **Intenção (por quê):** Dá concretude ao lugar e à forma de trabalhar. Diferenciais precisam ser **fatos verificáveis**, não superlativos (R6).
- **Contexto:** A profissional atua sozinha (S4). "Clínica" é o consultório dela.
- **Atores:** Visitante.
- **Descrição do comportamento:**
  - **História:** parágrafo curto e honesto sobre o espaço (fictício: consultório na Av. Paulista desde 2020, pensado para acolhimento e privacidade).
  - **Abordagem:** o que são, em linguagem simples, TCC, Análise do Comportamento e Terapia Breve, e como a profissional as usa (foco em compreender padrões, construir objetivos e estratégias, trabalho por etapas). Sem prometer resultado.
  - **Diferenciais factuais** (exemplos): localização central de fácil acesso pelo metrô; atendimento individual e privativo; formação em análise do comportamento e experiência com neurodiversidade; atendimento a jovens e adultos e orientação a famílias.
  - **Ambientação visual** (R14): fotos do banco de imagens apenas como clima (luz, plantas, poltronas), com texto alternativo honesto.
- **Entradas e saídas:** Entra: textos e dados. Sai: seção.
- **Dados/entidades envolvidos (conceitual):** espaço (nome, ano de início, descrição), abordagens (nome e explicação curta), diferenciais (lista de fatos).
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R2, R4, R5, R6, R8, R14.
- **Validações:** Cada diferencial é um fato; nenhuma frase compara com outros profissionais; nenhuma afirma eficácia.
- **Fluxo do usuário (passo a passo):**
  1. O visitante lê sobre o espaço e a abordagem.
  2. Entende se o estilo de trabalho combina com o que busca.
- **Casos de borda e erros:** Imagens indisponíveis: seção continua legível. Excesso de jargão: o texto deve incluir explicação simples a cada termo técnico.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a seção, Quando lida, Então explica TCC, Análise do Comportamento e Terapia Breve em linguagem acessível.
  - Dado a lista de diferenciais, Então todos são fatos e nenhum contém superlativo/comparação.
  - Dado as imagens, Então nenhuma é apresentada como a profissional ou como pacientes.
- **Definição de pronto:** Seção completa, revisada contra R2, R4, R6 e R14.
- **Dependências:** Specs 01 e 02.
- **Fora do escopo desta spec:** Tour virtual, vídeo, galeria extensa.

---

### Spec 09 — Serviços: psicoterapia e orientação parental

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Descrever os serviços clínicos oferecidos (psicoterapia para jovens e adultos; orientação parental) e para quem servem.
- **Intenção (por quê):** Atender a busca por tipo de serviço (SEO) e ajudar o visitante a reconhecer o próprio caso, sem diagnosticar nem prometer.
- **Contexto:** Serviço principal (paciente). Orientação parental é complementar e dirigida às famílias. Não há atendimento infantil.
- **Atores:** Visitante paciente ou responsável.
- **Descrição do comportamento:**
  - **Psicoterapia para jovens (a partir de 12 anos) e adultos:** em que consiste (atendimento individual, presencial ou on-line, com abordagens TCC, Análise do Comportamento e Terapia Breve). Lista de **temas com os quais a profissional trabalha**, formulados sem rótulo diagnóstico nem promessa (ex.: ansiedade e estresse, dificuldades de relacionamento, transições de vida, autoestima, organização da rotina). Observação sobre atendimento de menores com consentimento dos responsáveis (R10).
  - **Orientação parental:** apoio técnico e prático para famílias, incluindo desenvolvimento e neurodiversidade/TEA. Esclarecer que **não é atendimento infantil** e **não é diagnóstico** (R8).
  - Cada serviço com um título próprio (útil para SEO), texto curto e um CTA com mensagem adequada (paciente, família).
- **Entradas e saídas:** Entra: textos da spec 01. Sai: cartões/blocos de serviço com CTA.
- **Dados/entidades envolvidos (conceitual):** serviço (nome, para quem, descrição, temas, CTA).
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R2, R3, R4, R6, R8, R9, R10, R11.
- **Validações:** Nenhum serviço promete resultado ou "tratamento de autismo". Temas não funcionam como diagnóstico.
- **Fluxo do usuário (passo a passo):**
  1. O visitante identifica o serviço que procura.
  2. Lê a descrição e toca no CTA correspondente.
- **Casos de borda e erros:** Visitante busca atendimento infantil: texto explica que não há e indica orientação parental. Visitante busca atendimento on-line: a página informa que existe a modalidade on-line por videochamada.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a seção, Quando lida, Então apresenta psicoterapia (jovens e adultos) e orientação parental, com CTA de cada um.
  - Dado o texto de TEA, Então descreve apoio e orientação, sem "tratamento", "cura" nem diagnóstico.
  - Dado a seção, Então não menciona atendimento infantil como serviço e informa as modalidades presencial e on-line.
- **Definição de pronto:** Serviços completos, com CTAs e revisão contra R4, R8 e R10.
- **Dependências:** Specs 01, 02 e 05.
- **Fora do escopo desta spec:** Página própria por serviço, preços, duração detalhada por serviço.

---

### Spec 10 — Atuação em escolas e empresas

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Seção secundária que apresenta consultoria e supervisão escolar e palestras/capacitações para escolas e empresas, com CTA próprio para cada segmento.
- **Intenção (por quê):** Posiciona a autoridade institucional da profissional e capta leads B2B, sem desviar o foco do paciente (D4).
- **Contexto:** Seção posicionada depois de Serviços, com peso visual menor que o hero e serviços clínicos.
- **Atores:** Gestores de escolas, RH/liderança de empresas.
- **Descrição do comportamento:**
  - **Escolas:** apoio a equipes pedagógicas, manejo comportamental, inclusão escolar, supervisão. Atuação presencial na escola.
  - **Empresas e escolas (palestras e capacitações):** workshops e palestras sobre comportamento humano, saúde mental, neurociência e neurodiversidade. Atuação presencial no local.
  - Cada bloco com CTA de WhatsApp com mensagem de segmento (spec 05).
  - Linguagem institucional e objetiva, sem promessa de resultado organizacional ("aumente a produtividade em X%").
- **Entradas e saídas:** Entra: textos. Sai: seção com dois CTAs.
- **Dados/entidades envolvidos (conceitual):** serviço institucional (segmento, descrição, formato presencial no local do cliente, CTA).
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R2, R3, R4, R6, R8, R9.
- **Validações:** Nenhuma promessa de resultado nem número de clientes/escolas atendidas. Nenhum preço.
- **Fluxo do usuário (passo a passo):**
  1. Gestor chega à seção e identifica seu segmento.
  2. Toca no CTA e abre o WhatsApp com mensagem do segmento.
- **Casos de borda e erros:** Pedido de atuação fora de São Paulo: não tratado na página (negociado no contato). Visitante pergunta por palestras on-line: a página mantém "presencial, no local do cliente" e o assunto é tratado no contato.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a seção, Quando lida, Então há bloco de escolas e bloco de empresas, cada um com CTA próprio.
  - Dado o CTA de empresa, Quando tocado, Então a mensagem pré-preenchida identifica empresa.
  - Dado o texto, Então não contém promessa de resultado, preço ou lista de clientes.
- **Definição de pronto:** Seção completa e revisada contra R4, R6 e R9.
- **Dependências:** Specs 01, 02 e 05.
- **Fora do escopo desta spec:** Portfólio, cases, propostas comerciais, formulário de orçamento.

---

### Spec 11 — Atendimento presencial e on-line e como funciona

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Explicar as modalidades de atendimento (presencial e on-line) e o passo a passo do processo, da primeira mensagem às sessões regulares.
- **Intenção (por quê):** Reduz o medo do desconhecido ("como é a primeira consulta?"), que é uma das maiores barreiras para procurar terapia.
- **Contexto:** Unifica "Modalidades" e "Como funciona" (D12).
- **Atores:** Visitante, especialmente quem nunca fez terapia.
- **Descrição do comportamento:**
  - **Modalidades (R9):** dois blocos lado a lado: **presencial** no consultório da Av. Paulista, e **on-line** por videochamada, em horário combinado, a partir de um local reservado, com câmera, microfone e boa conexão. Sem promessa de eficácia de uma modalidade sobre a outra e sem citar plataformas.
  - **Etapas** (sugestão, ajustável pela profissional): 1) Mensagem pelo WhatsApp e combinação de dia, horário e modalidade; 2) Primeira sessão de acolhimento, para entender a demanda e como a terapia funciona; 3) Construção conjunta dos objetivos e do plano de trabalho; 4) Sessões regulares (em geral semanais, ~50 min); 5) Acompanhamento e reavaliação do processo.
  - **Sigilo:** menção ao sigilo profissional.
  - **Aviso honesto:** a duração do processo varia de pessoa para pessoa, e não há garantia de resultado (R4).
  - CTA de paciente ao final da seção.
- **Entradas e saídas:** Entra: textos. Sai: seção de etapas.
- **Dados/entidades envolvidos (conceitual):** etapa do processo (ordem, título, descrição), duração/frequência estimada.
- **Estados e transições:** Não se aplica (conteúdo estático).
- **Regras de negócio:** R3, R4, R7, R9, R10.
- **Validações:** Nenhuma etapa promete resultado ou prazo. Não informa valores.
- **Fluxo do usuário (passo a passo):**
  1. O visitante lê as etapas.
  2. Entende o que acontece na primeira conversa e toca no CTA.
- **Casos de borda e erros:** Visitante pergunta por valores: a página orienta o contato direto (R3). Menor de idade: remete à regra de consentimento (R10).
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a seção, Quando lida, Então apresenta as modalidades presencial e on-line e lista as etapas na ordem.
  - Dado o texto, Então não promete cura, prazo nem resultado.
  - Dado o texto, Então não compara a eficácia das modalidades nem cita plataformas específicas.
- **Definição de pronto:** Seção completa e revisada contra R3, R4 e R9.
- **Dependências:** Specs 01, 02 e 05.
- **Fora do escopo desta spec:** Política de cancelamento detalhada, contratos, termos de atendimento.

---

### Spec 12 — FAQ

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Responder dúvidas frequentes sobre atendimento, horários, agendamento, idade, sigilo.
- **Intenção (por quê):** Remove objeções antes do contato, melhora a qualidade dos leads e é uma boa fonte de termos de busca local.
- **Contexto:** Seção próxima ao fim, antes do contato.
- **Atores:** Visitante com dúvidas.
- **Descrição do comportamento:**
  - Lista de perguntas expansíveis (o conteúdo fica presente no HTML, mesmo quando recolhido).
  - **Perguntas sugeridas:**
    1. O atendimento é presencial ou on-line? (Os dois; combinado no primeiro contato.)
    1a. Como funciona o atendimento on-line? (Videochamada, câmera, microfone, conexão e local reservado.)
    2. Onde fica o consultório e como chegar? (Av. Paulista, perto do metrô.)
    3. Quais dias e horários? (S3.)
    4. Como agendo a primeira sessão? (Pelo WhatsApp.)
    5. A partir de que idade atende? (12 anos, com consentimento dos responsáveis.)
    6. Atende crianças? (Não; há orientação para famílias.)
    7. (Removida a pergunta sobre valores por decisão do cliente.)
    8. Aceita convênio? (S1: não; fornece recibo.)
    9. O que são TCC, ABA e Terapia Breve? (Explicações simples.)
    10. Quanto tempo dura a terapia? (Varia; sem garantias.)
    11. Os atendimentos são sigilosos? (Sim, conforme o Código de Ética.)
    12. (Removida a pergunta sobre emergência por decisão do cliente.)
- **Entradas e saídas:** Entra: perguntas/respostas (spec 01). Sai: acordeão acessível e conteúdo para dados estruturados (spec 14).
- **Dados/entidades envolvidos (conceitual):** pergunta/resposta (texto, ordem).
- **Estados e transições:** Cada item recolhido ↔ expandido; navegável pelo teclado.
- **Regras de negócio:** R3, R4, R6, R8, R9, R10, R12.
- **Validações:** Respostas consistentes com o restante da página (NAP, horários, idade). Nenhuma contém preço ou promessa.
- **Fluxo do usuário (passo a passo):**
  1. O visitante procura sua dúvida e expande a pergunta.
  2. Lê a resposta e, se quiser, segue para o CTA.
- **Casos de borda e erros:** Sem JavaScript: respostas permanecem legíveis. Leitor de tela: estado expandido/recolhido anunciado.
- **Impacto no existente:** Alimenta os dados estruturados da spec 14.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a FAQ, Quando carregada, Então todas as respostas existem no HTML mesmo recolhidas.
  - Dado a FAQ, Então nenhuma pergunta ou resposta cita valores.
  - Dado o teclado, Então todos os itens são operáveis.
- **Definição de pronto:** FAQ completa, acessível e consistente com o resto da página.
- **Dependências:** Specs 01 e 02.
- **Fora do escopo desta spec:** Busca na FAQ, perguntas enviadas por usuários.

---

### Spec 13 — Contato e localização

- **Fase:** 3 — Conteúdo de confiança
- **Objetivo (o quê):** Seção final com WhatsApp (principal), Instagram, endereço, horários, orientações de chegada e mapa incorporado.
- **Intenção (por quê):** Fecha a conversão e reforça o sinal de SEO local (endereço, telefone e horário consistentes).
- **Contexto:** O mapa é um serviço de terceiros (Google Maps). Por decisão do cliente (D10), ele **carrega sempre, independentemente do consentimento**, e a página não tem política de privacidade que informe isso.
- **Atores:** Visitante.
- **Descrição do comportamento:**
  - **CTA de WhatsApp em destaque**, seguido de Instagram (link discreto).
  - **Endereço completo em texto** (sempre visível, selecionável), **horários** (faixa geral), referência de chegada (estação de metrô mais próxima, sem citar linhas de ônibus) e botão "Como chegar" que abre o app de mapas.
  - **Mapa incorporado:** sempre exibido, com carregamento preguiçoso (só quando a seção se aproxima da tela), para não prejudicar o carregamento inicial.
  - Mapa com título acessível e dimensões fixas para evitar saltos de layout.
- **Entradas e saídas:** Entra: dados de contato (spec 01). Sai: seção de contato com mapa.
- **Dados/entidades envolvidos (conceitual):** contato (WhatsApp, Instagram), local (endereço, horários, referências, coordenadas/consulta de mapa).
- **Estados e transições:** Não se aplica. O mapa não depende de consentimento.
- **Regras de negócio:** R1, R9, R11, R13 (exceção do mapa), R15.
- **Validações:** Endereço e horários idênticos aos do rodapé e dos dados estruturados. Link "Como chegar" funciona em celular e desktop.
- **Fluxo do usuário (passo a passo):**
  1. O visitante vai ao contato e vê endereço, horários e botão de WhatsApp.
  2. Vê o mapa e/ou toca em "Como chegar".
- **Casos de borda e erros:** Falha do serviço de mapa: o endereço em texto e o "Como chegar" continuam disponíveis. Offline: endereço em texto continua visível.
- **Impacto no existente:** Nenhum.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado qualquer visitante, Quando chega à seção, Então o mapa é exibido, sem pedir consentimento.
  - Dado a página recém-aberta, Quando a seção de contato ainda está longe da tela, Então o mapa não é carregado (carregamento preguiçoso).
  - Dado o endereço, Então é igual ao do rodapé e dos dados estruturados.
- **Definição de pronto:** Contato completo e mapa exibido para todos os visitantes.
- **Dependências:** Specs 01, 02, 04 e 05.
- **Fora do escopo desta spec:** Formulário de contato, e-mail marketing, agendamento online.

---

### Spec 14 — SEO on-page local e dados estruturados

- **Fase:** 4 — SEO local e medição
- **Objetivo (o quê):** Otimizar o conteúdo e a marcação da página para buscas locais, com hierarquia de títulos coerente, linguagem local natural e dados estruturados de negócio local/saúde.
- **Intenção (por quê):** É o que faz a página aparecer em buscas como "psicóloga Avenida Paulista", "psicólogo Bela Vista", "terapia presencial Consolação", sem forçar palavras-chave nem violar R6.
- **Contexto:** Base técnica da spec 03. Conteúdo das specs 06–13.
- **Atores:** Mecanismos de busca; equipe que revisa o conteúdo.
- **Descrição do comportamento:**
  - **Hierarquia:** um único h1 (hero); cada seção com h2; subtítulos em h3. Títulos descritivos, com serviço e/ou local quando natural (ex.: "Psicoterapia presencial na Av. Paulista e on-line").
  - **Termos locais** distribuídos naturalmente: Avenida Paulista, Bela Vista, Consolação, Cerqueira César, centro de São Paulo, metrô Brigadeiro (estação mais próxima, confirmada pelo cliente; ver Anexo A). Sem repetição artificial.
  - **Dados estruturados** (compatíveis com o conteúdo visível): negócio local de saúde/serviço profissional com nome, profissional, endereço, telefone, horários, área de atuação, links (Instagram) e idioma; e marcação da FAQ. Sem avaliações, notas ou preços na marcação (R3, R5).
  - **Texto alternativo** de imagens, descritivo e honesto. **Links internos** (âncoras) com textos claros.
  - Dados idênticos aos do rodapé e do contato (R15).
- **Entradas e saídas:** Entra: conteúdo das seções. Sai: marcação e hierarquia otimizadas.
- **Dados/entidades envolvidos (conceitual):** negócio local (nome, endereço, telefone, horários, área atendida, links), profissional, FAQ.
- **Estados e transições:** Não se aplica.
- **Regras de negócio:** R1, R2, R3, R5, R6, R15.
- **Validações:** Dados estruturados sem erro em ferramenta de validação. Hierarquia sem pulos de nível. Nenhum conteúdo na marcação que não esteja visível na página.
- **Fluxo do usuário (passo a passo):**
  1. A equipe valida a marcação em uma ferramenta de teste de dados estruturados.
  2. Revisa títulos e termos locais.
- **Casos de borda e erros:** Dado em conflito entre a marcação e o texto visível: corrigir antes de publicar. Excesso de palavras-chave: reescrever.
- **Impacto no existente:** Ajusta títulos e textos das specs 06–13 se necessário.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado o HTML, Então há um h1 e a hierarquia h2/h3 está sem pulos.
  - Dado a marcação estruturada, Quando validada, Então não apresenta erros e bate com o texto visível.
  - Dado a marcação, Então não contém avaliações, notas nem preços.
  - Dado os termos locais, Então aparecem naturalmente em hero, serviços, FAQ e contato.
- **Definição de pronto:** Marcação validada, hierarquia correta, termos locais no conteúdo.
- **Dependências:** Specs 03 e 06–13.
- **Fora do escopo desta spec:** Google Meu Negócio, citações em diretórios, link building.

---

### Spec 15 — Medição de conversão (GA4)

- **Fase:** 4 — SEO local e medição
- **Objetivo (o quê):** Medir a audiência (quantas pessoas acessam, de qual fonte vieram e de onde são, de forma aproximada) e os cliques em CTA de WhatsApp com GA4, sem banner de consentimento.
- **Intenção (por quê):** A meta do site é gerar leads. Sem medir acessos, origem e cliques por público e posição, não há como melhorar.
- **Contexto:** Decisão D8 (GA4 ativo ao abrir a página, sem banner e sem opção de desativar); CTAs da spec 05.
- **Atores:** Equipe de marketing/profissional (analisa dados); visitante (gera eventos).
- **Descrição do comportamento:**
  - Ao abrir a página, carrega o GA4 e registra visitas (com fonte do acesso e localização aproximada, que o próprio GA4 fornece) e eventos:
    - **Clique em WhatsApp** (conversão principal), com **segmento** (paciente, família, escola, empresa) e **posição** (hero, botão fixo, serviços, contato...).
    - Clique em "Como chegar", clique em Instagram, abertura de itens da FAQ (opcional).
  - **Privacidade (R13):** eventos não incluem nome, telefone, texto digitado nem qualquer informação de saúde. Recursos de publicidade, sinais do Google e personalização de anúncios ficam desativados (só medição de audiência).
- **Entradas e saídas:** Entra: interações do visitante. Sai: eventos no GA4.
- **Dados/entidades envolvidos (conceitual):** evento (nome, segmento, posição).
- **Estados e transições:** Não se aplica. A medição fica sempre ativa enquanto houver ID do GA4 configurado.
- **Regras de negócio:** R11, R13.
- **Validações:** Nenhum parâmetro de evento contém dado pessoal. O evento de conversão tem nomenclatura única.
- **Fluxo do usuário (passo a passo):**
  1. O visitante abre a página; a medição já está ativa.
  2. Navega e toca em um CTA de WhatsApp.
  3. O evento é enviado com segmento e posição.
- **Casos de borda e erros:** Bloqueador de anúncios impede o GA4: a página funciona normalmente. Falha de rede: o clique no WhatsApp **nunca** é atrasado nem bloqueado pelo envio do evento.
- **Impacto no existente:** Acrescenta ouvintes de clique nos CTAs da spec 05, sem alterar o comportamento deles.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado o WhatsApp bloqueado ou o GA4 indisponível, Quando o visitante toca em um CTA, Então o WhatsApp abre normalmente.
  - Dado visitante na página, Quando toca no CTA do hero, Então é registrado um evento de conversão com segmento "paciente" e posição "hero".
  - Dado o primeiro acesso, Quando a página abre, Então a visita é registrada sem exibir banner.
  - Dado qualquer evento, Quando inspecionado, Então não contém dado pessoal nem de saúde.
- **Definição de pronto:** Eventos validados em tempo real no GA4.
- **Dependências:** Spec 05.
- **Fora do escopo desta spec:** Dashboards, funis avançados, Meta Pixel, remarketing, Search Console (recomendado configurar em paralelo).

---

### Spec 16 — Validação final: CFP, LGPD, acessibilidade, performance e SEO

- **Fase:** 5 — Validação
- **Objetivo (o quê):** Verificar a página contra o checklist de conformidade e as metas de qualidade antes de qualquer publicação.
- **Intenção (por quê):** Uma infração de publicidade ou uma página lenta anula todo o esforço. Esta spec é o portão de qualidade final.
- **Contexto:** Todas as specs anteriores implementadas.
- **Atores:** Equipe técnica e a profissional (aprova o conteúdo).
- **Descrição do comportamento:** Executar e registrar as verificações abaixo.
  - **Checklist CFP (texto):** R1–R10 e R14 conferidos seção por seção. Busca por termos proibidos (preço, "grátis", "desconto", "cura", "garantido", "melhor", "especialista", "depoimento", "infantil" como serviço). Conferir que "on-line" só aparece como modalidade da psicoterapia/orientação parental, sem promessa de eficácia.
  - **Checklist LGPD:** sem coleta de dados de saúde; GA4 ativo ao abrir a página, apenas para audiência (sem publicidade); mapa exibido sem consentimento; **sem política de privacidade e sem opção de desativar a medição (risco de transparência registrado em R13)**; adequação jurídica dessas escolhas confirmada com profissional.
  - **Metas mobile (Lighthouse ou equivalente):** Performance ≥ 90; Acessibilidade ≥ 95; Boas práticas ≥ 95; SEO ≥ 95; LCP < 2,5 s; CLS < 0,1.
  - **Acessibilidade:** navegação por teclado, foco visível, contraste AA, textos alternativos, rótulos acessíveis, respeito a "reduzir movimento".
  - **SEO:** HTML completo sem JavaScript, metadados, canonical correto, dados estruturados válidos, prévia de link correta.
  - **Testes funcionais:** todos os CTAs abrem o WhatsApp com a mensagem correta; botão fixo; ausência de banner; mapa exibido; navegação por âncoras; em celular real e em desktop.
  - **Checklist de dados fictícios:** lista dos itens do Anexo A a substituir pelos dados reais antes da publicação.
  - **Revisão externa recomendada:** conferir o texto com o CRP-06 e confirmar com a profissional a veracidade das qualificações (S8).
- **Entradas e saídas:** Entra: página completa. Sai: relatório de validação com itens aprovados/reprovados e correções.
- **Dados/entidades envolvidos (conceitual):** item de checklist (regra, status, observação).
- **Estados e transições:** Reprovado → corrigido → aprovado, até zerar pendências.
- **Regras de negócio:** Todas (R1–R16).
- **Validações:** Todos os itens obrigatórios aprovados.
- **Fluxo do usuário (passo a passo):**
  1. A equipe roda as verificações.
  2. Corrige as pendências.
  3. Repete até que todas passem.
- **Casos de borda e erros:** Meta de performance não atingida: reduzir peso de imagens, terceiros e fontes; reavaliar. Termo proibido encontrado: reescrever o texto.
- **Impacto no existente:** Pode alterar textos e imagens das specs anteriores.
- **Critérios de aceite (Dado/Quando/Então):**
  - Dado a página final, Quando auditada em celular, Então atinge as metas de performance, acessibilidade e SEO.
  - Dado a busca textual por termos proibidos, Então não há ocorrências indevidas.
  - Dado o checklist, Então todos os itens obrigatórios estão aprovados.
- **Definição de pronto:** Relatório com 100% dos itens obrigatórios aprovados.
- **Dependências:** Specs 01–15.
- **Fora do escopo desta spec:** Deploy, domínio, DNS, monitoramento contínuo.

## 14. Ordem recomendada de implementação

1. Spec 01 — Fonte única de dados e conteúdo fictício
2. Spec 02 — Estrutura da página, identidade visual e rodapé
3. Spec 03 — Pré-renderização estática e SEO técnico
4. Spec 04 — (Removida, nada a implementar)
5. Spec 05 — CTA de WhatsApp por público
6. Spec 06 — Hero
7. Spec 07 — Apresentação da profissional
8. Spec 08 — Abordagens de trabalho
9. Spec 09 — Serviços: psicoterapia e orientação parental
10. Spec 10 — Atuação em escolas e empresas
11. Spec 11 — Atendimento presencial e on-line e como funciona
12. Spec 12 — FAQ
13. Spec 13 — Contato e localização
14. Spec 14 — SEO on-page local e dados estruturados
15. Spec 15 — Medição de conversão (GA4)
16. Spec 16 — Validação final

Seguir essa ordem respeita as dependências: dados, layout e controle de medição antes das seções que os consomem; CTA antes das seções que o usam; SEO on-page e medição depois do conteúdo pronto; validação por último. Isso evita retrabalho e implementações fora de contexto.

---

## Anexo A — Dados fictícios de referência (substituir antes de publicar)

> Todos os dados abaixo são **fictícios**. Validar endereço, CEP, referências de transporte e disponibilidade do domínio antes de qualquer uso real.

| Item | Valor fictício |
|---|---|
| Profissional | Regiana Pereira Rodrigues |
| Registro | CRP 06/123456 (CRP-06 = São Paulo) |
| Nome do espaço | Espaço Âncora Psicologia |
| Endereço | Avenida Paulista, 726, conjunto 404 — Bela Vista, São Paulo – SP , CEP 01310-910 (endereço e CEP reais, informados pelo cliente) |
| Referências de chegada | Próximo à estação Brigadeiro (Linha 2-Verde do Metrô), confirmada pelo cliente. Sem citar linhas de ônibus (decisão do cliente) |
| WhatsApp | +55 (11) 95164-3672 (número real, informado pelo cliente) |
| Instagram | @regianarodrigues.psi |
| Domínio de referência | regianarodrigues.psi.br |
| Horários | Segunda a sexta, 8h às 18h; sábados, 8h às 14h |
| Experiência | Mais de 11 anos na área comportamental |
| Formação e atuação | Psicóloga; formação e atuação em Terapia Cognitivo-Comportamental, Análise do Comportamento (ABA) e Terapia Breve; pós-graduação em Neurociência (em andamento); vivência em neurodiversidade e TEA |
| Públicos | Jovens (12+) e adultos; famílias; escolas; empresas |
| Termos locais de apoio | Avenida Paulista, Bela Vista, Consolação, Cerqueira César, centro de São Paulo |

**Checklist de substituição (antes de publicar):** nome, CRP, endereço, CEP, referências de chegada, telefone/WhatsApp, Instagram, domínio, horários, fotos (ambientação e retrato real), anos de experiência, status e nome da pós-graduação, nome do espaço, ano de início do espaço, identificador do GA4.
