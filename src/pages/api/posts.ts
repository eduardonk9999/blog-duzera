// pages/api/posts.ts
import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  title: string;
  content: string;
}

const posts: Post[] = [
  { id: 1, title: "Meu Primeiro Post", content: "Este é o conteúdo do primeiro post." },
  { id: 2, title: "Aprendendo Next.js", content: "Este é um guia básico de Next.js." },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}