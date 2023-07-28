import { prisma } from "./prisma";

export interface Todo {
  id: number;
  description: String;
}

export async function getAllTodos(){
  const data = await prisma.todo.findMany(); 
}

export async function createTodo(description: string){
  await prisma.todo.create({
    data: {
      description,
    },
  });
}