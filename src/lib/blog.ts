import { createBucketClient } from '@cosmicjs/sdk';

export const cosmic = createBucketClient({
  bucketSlug: import.meta.env.VITE_BLOG_BUCKET_SLUG || '',
  readKey: import.meta.env.VITE_BLOG_BUCKET_READ_KEY || '',
});
