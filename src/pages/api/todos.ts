// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { createTodos } from '../../../lib/db'
import { createTodos, deleteTodos, getAllTodos } from '../../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = JSON.parse(req.body);
    await createTodos(data); // disk eu criei em db
    return res.status(200).json({ message: 'Success' });
  }
  if (req.method === 'DELETE') {
    const data = JSON.parse(req.body);
    await deleteTodos(data);
    return res.status(200).json({ message: 'Success' });
  }
  res.status(200).json({ name: 'Sushi' })
}
