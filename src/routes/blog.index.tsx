import { Link, createFileRoute } from '@tanstack/react-router';
import Blog from '../components/Blog';
import { getPosts } from '../api/posts';

export const Route = createFileRoute('/blog/')({
  component: BlogPage,
  loader: getPosts,
});

function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link to="/" className="inline-block mb-6">
        ← Voltar para o início
      </Link>
      <Blog />
    </main>
  );
}
