// next.config.ts

import { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Ativa o suporte SSR para styled-components
  },
  async headers() {
    return [
      {
        source: '/api/posts',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Permite CORS para todos os domínios na rota /api/posts
          },
        ],
      },
    ];
  },
  images: {
    domains: ['avatars.githubusercontent.com'], // Adicione o domínio aqui
  },
  webpack: (config) => {
    config.module?.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
