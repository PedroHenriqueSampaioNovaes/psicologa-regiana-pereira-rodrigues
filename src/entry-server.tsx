import { renderToString } from 'react-dom/server';
import App from './App.tsx';

export { headTags } from './seo.ts';

/** Gera o HTML da página para a pré-renderização (Spec 03). */
export function render(): string {
  return renderToString(<App />);
}
