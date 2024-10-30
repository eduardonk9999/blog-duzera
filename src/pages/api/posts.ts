import type { NextApiRequest, NextApiResponse } from 'next';
import { posts } from './data'; // Importando os posts do arquivo data.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Aqui você pode adicionar filtros ou lógica adicional se precisar
  res.status(200).json(posts);
}