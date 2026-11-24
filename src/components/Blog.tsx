import { RichText } from '@cosmicjs/rich-text';
import { getRouteApi, Link } from '@tanstack/react-router';

import { type PostType } from '../api/posts';
import { formatPostDate } from '../utils/formatPostDate';

const route = getRouteApi('/blog/');
const parentRoute = getRouteApi('/blog');

export default function Blog() {
  const posts = route.useLoaderData();
  const blocks = parentRoute.useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        posts?.map((post: PostType) => {
          return (
            <Link
              key={post.title}
              to="/blog/$slug"
              params={{ slug: post.slug }}
            >
              <article className="posts mb-8">
                <h1>{post.title}</h1>
                <time dateTime={post.published_at}>
                  {formatPostDate(post.published_at)}
                </time>
                <img
                  src={`${post.metadata.imagem_destacada.imgix_url}?w=768&auto=format,compression`}
                  alt={post.title}
                  className="h-60 w-full object-cover"
                />
                <RichText value={post.metadata.conteudo} blocks={blocks} />
              </article>
            </Link>
          );
        })
      ) : (
        <p>Nenhum post encontrado</p>
      )}
    </>
  );
}
