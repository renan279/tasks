import { GetServerSideProps } from "next"
import { getAllTodos } from "../../lib/db";
import { Todos } from "@prisma/client";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import styled, { createGlobalStyle } from 'styled-components';

// import GlobalStyle from '../styles';


const fetcher = (input: RequestInfo | URL, init?: RequestInit | undefined) => fetch(input, init).then((res) => res.json())

// export const getServerSideProps = async () => {
//   const todos = await getAllTodos();

//   return ({
//     props: {
//       todos: todos || [],
//     }
//   })

// }

// interface PostProps {
//   todos: Todos[];
// }

const Home = () => {
  const [description, setDescription] = useState("");

  const { data: todos, error, isLoading, mutate } = useSWR('/api/todos', fetcher);
  // const [todos, setTodos] = useState<object[] | null>([]);

  // const notify = () => toast.success('testando', {
  //   position: "top-center",
  //   autoClose: 5000
  // });

  // function handleSucess(){
  //   toast.success('haha');
  // }

  const handleClick = async () => {

    const response = await toast.promise(
      fetch("/api/todos", {
        method: 'POST',
        body: JSON.stringify(description),
      }),
      {
        pending: 'Postando...',
        success: 'Postado! 👌',
        error: 'Erro ao postar. 🤯'
      }
    );
    console.log(response);
    mutate();

  }



  const deleteItem = async (todoId: number) => {

    const response = await toast.promise(
      fetch("/api/todos", {
        method: 'DELETE',
        body: JSON.stringify(todoId),
      }),
      {
        pending: 'Deletando...',
        success: 'Deletado! 👌',
        error: 'Erro ao deletar. 🤯'
      }
    );
    console.log(response);
    mutate();

  }



  // if (isLoading){
  //   return <div>reloading</div>
  // }

  // const getItem = async () => {
  //   const result: any = await fetch("/api/todos", {
  //     method: 'GET',
  //   })
  // console.log('esse valor -> ', await result.json());
  // setTodos(await result.json());
  // }

  // useEffect(() => {
  //   getItem();
  // }, []);

  // useEffect(() => {
  // }, [todos]);  

  // const getItem = async (todoId: number) => {
  //   await fetch("/api/todos", {
  //     method: 'DELETE',
  //     body: JSON.stringify(todoId),
  //   })
  //   return location.reload();
  // }

  const editarItem = async (todoId: number, texto: string) => {
    console.log('editarItem -> ', todoId, description, JSON.stringify({ description, todoId }));
    setDescription(texto);
    // await fetch("/api/todos", {
    //   method: 'UPDATE',
    //   body: JSON.stringify(description),
    // })
    // return location.reload();
  }

  return (
    <div className="h-screen bg-gray-500">
      <nav className="flex justify-center p-4 bg-gray-600">
        <h1 className="text-white text-2xl font-bold">Lembretes</h1>
      </nav>
      <div>
        <form className="flex justify-center mt-10">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h1 className="text-center text-black mb-4">Escreva coisas para fazer:</h1>
            <div className="flex space-x-2 p-2 bg-white rounded-md">
              <input
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
                type="text" placeholder="Write here..." className="w-full outline-none" />
              <button
                onClick={() => handleClick()}
                className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold">Enviar</button>
            </div>
          </div>
        </form>
        <div>
          {
            todos?.map((item: any, index: any) => (
              <div key={item.id} className="flex justify-center">
                <div className=" relative justify-center mt-6">
                  <div className="absolute flex top-0 right-0 p-3 space-x-1">
                    <button onClick={() => editarItem(item.id, item.description)}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </span>
                    </button>
                    <button onClick={() => deleteItem(item.id)}>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </span>
                    </button>
                  </div>
                  <span className="absolute -left-3 -top-3 bg-green-500 flex justify-center items-center rounded-full w-8 h-8 text-gray-50 font-bold">
                    {index + 1}
                  </span>
                  <p className="bg-white text-black px-12 py-8 rounded-lg w-80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;