import { createFileRoute, getRouteApi, notFound } from '@tanstack/react-router';

import { getPostBySlug } from '../api/posts';
import { RichText } from '@cosmicjs/rich-text';
import { formatPostDate } from '../utils/formatPostDate';

import BackToBlog from '../components/BackToBlog';

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
      throw notFound();
    }

    return post;
  },
  component: PostPage,
  notFoundComponent: () => {
    return (
      <>
        <BackToBlog />
        <h1 className="text-4xl">Postagem não encontrada</h1>
      </>
    );
  },
});

const parentApi = getRouteApi('/blog');

function PostPage() {
  const post = Route.useLoaderData();
  const blocks = parentApi.useLoaderData();

  return (
    <>
      <BackToBlog />
      <article className="post">
        <img
          src={post.metadata.imagem_destacada.imgix_url}
          alt=""
          className="h-80 w-full object-cover"
        />

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between mt-3">
            <time dateTime={post.published_at} className="text-sm">
              Publicado em {formatPostDate(post.published_at)}
            </time>
            <div className="flex items-center gap-2 text-sm">
              <img
                src={post.metadata.autor.metadata.foto.imgix_url}
                alt={post.metadata.autor.metadata.nome}
                className="size-10 object-cover rounded-full"
              />
              <span>{post.metadata.autor.metadata.nome}</span>
            </div>
          </div>

          <h1 className="my-10">{post.title}</h1>

          <RichText value={post.metadata.conteudo} blocks={blocks} />
        </div>
      </article>
    </>
  );
}
