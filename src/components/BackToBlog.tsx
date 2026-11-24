import { Link, useCanGoBack, useRouter } from '@tanstack/react-router';

/**
 * Volta para a listagem do blog.
 *
 * Se o usuário veio de uma página do próprio site, usa o histórico
 * (`history.back()`), o que permite ao router restaurar o scroll da listagem.
 * Se acessou o post direto pela URL, não há histórico interno para voltar,
 * então navega para /blog com um <Link> normal.
 */
export default function BackToBlog() {
  const router = useRouter();
  const canGoBack = useCanGoBack();

  if (canGoBack) {
    return (
      <button
        type="button"
        onClick={() => router.history.back()}
        className="cursor-pointer"
      >
        ← Ver todas as Postagens
      </button>
    );
  }

  return <Link to="/blog">← Ver todas as Postagens</Link>;
}
