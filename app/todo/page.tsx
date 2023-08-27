import { prisma } from "@/libs/prismadb";
import FormTodo from "./components/form.todo";
import ListTodo from "./components/list.todo";

const TodoPage = async () => {
  const todos = await prisma.todo.findMany();
  //console.log(todos); page.jsx es del lado del servidor, por lo tanto, solo se visualiza esta información en la consola de visual studio code y NO en la consola del navegador

  return (
    <div className="space-y-5">
      <h1 className="text-center text-3xl my-10">Todos</h1>
      {/* la propiedad action de la etiqueta form permite llamar y ejecutar a un método que se ejecute en el servidor, esto es el action server
      Next ejecuta FormData (formularios no controlados) por lo que es necesaria la propiedad name en la etiqueta form
      */}
      <FormTodo />
      <ListTodo todos={todos} />
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
    </div>
  );
};
export default TodoPage;
