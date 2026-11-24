import { createFileRoute, Outlet } from '@tanstack/react-router';

import { getBlocks } from '../api/posts';

export const Route = createFileRoute('/blog')({
  loader: getBlocks,
  component: () => <Outlet />,
});
