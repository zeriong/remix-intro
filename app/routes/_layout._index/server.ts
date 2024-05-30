import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return json({
    data: 'Remix Starter',
  });
};
