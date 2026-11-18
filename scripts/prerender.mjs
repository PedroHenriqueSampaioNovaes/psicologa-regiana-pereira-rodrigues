// Pré-renderização estática (Spec 03).
// Roda depois de `vite build` (cliente) e `vite build --ssr` (servidor):
// injeta o HTML da página e os metadados no index.html final.
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = resolve(import.meta.dirname, '..');
const distDir = resolve(root, 'dist');
const ssrEntry = resolve(root, 'dist-ssr', 'entry-server.js');

const { render, headTags } = await import(pathToFileURL(ssrEntry).href);

const templatePath = resolve(distDir, 'index.html');
let html = await readFile(templatePath, 'utf8');

for (const marker of ['<!--app-html-->', '<!--seo-head-->']) {
  if (!html.includes(marker)) {
    throw new Error(`Marcador ${marker} não encontrado em dist/index.html`);
  }
}

html = html
  // O <title> do template é só para o `vite dev`; o definitivo vem de headTags().
  .replace(/<title>[\s\S]*?<\/title>/, '')
  // Usa funções para que "$" no conteúdo não seja interpretado como padrão de substituição.
  .replace('<!--seo-head-->', () => headTags())
  .replace('<!--app-html-->', () => render());

await writeFile(templatePath, html);

console.log('Pré-renderização concluída: dist/index.html gerado.');
