// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
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
};

export default nextConfig;
