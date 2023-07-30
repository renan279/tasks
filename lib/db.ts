import { prisma } from "./prisma";

export interface Todos {
  id: number;
  description: String;
}

export async function getAllTodos(){
  const data = await prisma.todos.findMany(); //esse prisma vem do prisma.ts
  return data;
}

export async function createTodos(description: string){
  await prisma.todos.create({
    data: {
      description,
    },
  });
}