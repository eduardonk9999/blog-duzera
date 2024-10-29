import type { NextApiRequest, NextApiResponse } from 'next';

const GITHUB_API_URL = 'https://api.github.com/repos/eduardonk9999/content_blog/issues';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'Id não informado.' });
    }

    try {

        const response = await fetch(`${GITHUB_API_URL}/${id}`);
        const data = await response.json();

        if (data.message === 'Not Found') {
        return res.status(404).json({ error: 'Post não encontrado.' });
        }



        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar post.' });
    }
}