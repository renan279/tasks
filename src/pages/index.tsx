import { GetServerSideProps } from "next"
import { getAllTodos } from "../../lib/db";
import { Todos } from "@prisma/client";

export const getServerSideProps = async () => {
  const todos = await getAllTodos();
  
  return ({
    props: {
      todos: todos || [],
    }
  })

}

interface PostProps {
  todos: Todos[];
}

const Home = ({ todos }: PostProps) => {
  return <div>{ JSON.stringify(todos, null, 4) }</div>;
};

export default Home;