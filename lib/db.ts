import { prisma } from "./prisma";

export interface Todos {
  id: number;
  description: String;
}

export async function getAllTodos() {
  const data = await prisma.todos.findMany(); //esse prisma vem do prisma.ts
  return data;
}

export async function createTodos(description: string) {
  await prisma.todos.create({
    data: {
      description,
    },
  });
}

export async function deleteTodos(id: number) {
  await prisma.todos.delete({
    where: {
      id: id,
    },
  });
}

export async function editarTodos(id: number, description: string) {
  await prisma.todos.update({
    where: {
      id: id,
    },
    data: {
      description: description,
    },
  });
}