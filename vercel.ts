import { routes, type VercelConfig } from '@vercel/config/v1';

export const config: VercelConfig = {
  headers: [
    routes.header('/api/version', [
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
      source: '/favicon.ico',
      destination: '/favicon.svg',
      permanent: true,
    },
    {
      source: '/banner',
      destination: '/banner.png',
      permanent: true,
    },
    {
      source: '/favicon',
      destination: '/favicon.svg',
      permanent: true,
    },
    {
      source: '/api/version.json',
      destination: '/api/version',
      permanent: true,
    },
  ],
};
