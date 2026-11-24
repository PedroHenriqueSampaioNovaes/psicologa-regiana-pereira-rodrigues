import { cosmic } from '../lib/blog';

export type PostType = {
  slug: string;
  title: string;
  published_at: string;
  metadata: {
    imagem_destacada: { imgix_url: string };
    conteudo: string;
    tags: string[];
    autor: { metadata: { nome: string; foto: { imgix_url: string } } };
  };
};

export async function getPosts() {
  const { objects: posts } = await cosmic.objects
    .find({
      type: 'posts',
    })
    .props(
      'title,slug,published_at,metadata.imagem_destacada,metadata.conteudo,metadata.tags,metadata.autor',
    )
    .sort('-published_at');
  return posts as PostType[];
}

export async function getPostBySlug(slug: string) {
  try {
    const { object: post } = await cosmic.objects
      .findOne({
        type: 'posts',
        slug: slug,
      })
      .props(
        'slug,title,published_at,metadata.conteudo,metadata.imagem_destacada,metadata.autor,metadata.categoria',
      )
      .depth(1);
    return post as PostType;
  } catch (error) {
    if ((error as { status?: number }).status === 404) return null;
    throw error;
  }
}

export async function getBlocks() {
  const { blocks } = await cosmic.blocks.find();
  return blocks;
}
