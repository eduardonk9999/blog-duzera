import type { NextApiRequest, NextApiResponse } from 'next';
import { posts } from './data'; // Importando os posts do arquivo data.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Id não informado.' });
  }

  const postId = parseInt(id as string, 10);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: 'Post não encontrado.' });
  }

  res.status(200).json(post);
}