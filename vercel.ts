import { routes, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  headers: [
    routes.header('/api/version', [
      {
        key: 'Content-Type',
        value: 'application/json; charset=utf-8',
      },
    ]),
    routes.header('/api/health', [
      {
        key: 'Content-Type',
        value: 'application/json; charset=utf-8',
      },
    ]),
  ],
  redirects: [
    {
      source: '/version',
      destination: '/api/version',
      permanent: true,
    },
    {
      source: '/health',
      destination: '/api/health',
      permanent: true,
    },
  ],
};
