// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_API_URL = 'https://api.github.com/repos/eduardonk9999/content_blog/issues';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(GITHUB_API_URL);

    // Verifique se a resposta foi bem-sucedida
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Erro ao buscar posts do GitHub.' });
    }

    const data = await response.json();

    // Filtrando os dados para retornar apenas o que você precisa
    const filteredPosts = data.map((post: any) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      number: post.number,
      // Você pode adicionar mais campos se necessário
    }));

    res.status(200).json(filteredPosts);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    res.status(500).json({ error: 'Erro ao buscar posts.' });
  }
}
