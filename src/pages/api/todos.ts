// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { createTodos } from '../../../lib/db'
import { createTodos, deleteTodos, editarTodos, getAllTodos } from '../../../lib/db'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // const data = JSON.parse(req.body);
    const data = await getAllTodos(); // disk eu criei em db
    console.log('o que ta vindo do prisma -> ', data);
    return res.status(200).json(data);
  }
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
  if (req.method === 'UPDATE') {
    console.log('todos -> ', req.body);
    // const data = JSON.parse(req.body);
    // await editarTodos(data);
    // return res.status(200).json({ message: 'Success' });
  }
  res.status(200).json({ name: 'Sushi' })
}
