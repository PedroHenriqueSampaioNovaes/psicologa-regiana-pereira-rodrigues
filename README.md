# Landing page — Clínica de Psicologia (Av. Paulista, SP)

Landing page de uma página, mobile-first, com foco em SEO local e conversão por WhatsApp.
Planejamento completo em [docs/prd/landing-clinica-psicologica.md](docs/prd/landing-clinica-psicologica.md).

**Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4, com pré-renderização estática no build.

## Comandos

```bash
npm install
npm run dev      # desenvolvimento
npm run build    # tipos + build do cliente + build SSR + pré-renderização (gera dist/)
npm run preview  # serve dist/ para conferir o resultado final
npm run lint
```

O `build` gera o HTML completo da página (texto, metadados, dados estruturados) em `dist/`.
Não há `sitemap.xml` nem `robots.txt`: para uma página única, não são necessários.

## Onde editar

- **Dados e textos** (nome, CRP, endereço, WhatsApp, horários, FAQ, mensagens do WhatsApp):
  [src/content/site.ts](src/content/site.ts). É a única fonte: seções, rodapé, metadados e
  dados estruturados leem daqui. O build falha se faltar dado obrigatório.
- **Cores e tipografia:** [src/index.css](src/index.css) (bloco `@theme`).
- **Google Analytics:** copie `.env.example` para `.env` e preencha `VITE_GA_MEASUREMENT_ID`.
  A medição liga ao abrir a página, sem banner de consentimento e sem opção de desativar.
  Mede só audiência (visitas, fonte e localização aproximada) e cliques nos botões.

## Antes de publicar

Todos os dados atuais são **fictícios** (Anexo A do PRD). Substitua:

- [ ] Nome, CRP, nome do espaço, ano de início, anos de experiência e formações
- [ ] Endereço, CEP, referências de chegada (metrô) e horários
- [ ] WhatsApp, Instagram e domínio (`site.url`)
- [x] Retrato da profissional (`public/psicologa-regiana-rodrigues.jpg`)
- [ ] Fotos reais do consultório no lugar das ilustrações
- [ ] Imagem de compartilhamento `public/og-image.png`
- [ ] `VITE_GA_MEASUREMENT_ID`
- [ ] Revisão do texto com o CRP-06 e confirmação das qualificações com a profissional

## Regras de publicidade (CFP) já aplicadas

Nome e CRP visíveis; sem preços, promoções, depoimentos, promessas de resultado ou
superlativos; sem título de especialista; atendimento presencial e on-line descrito sem promessa de eficácia. Detalhes na
seção 7 do PRD.
