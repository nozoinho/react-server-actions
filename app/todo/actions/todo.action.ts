"use server";
import { prisma } from "@/libs/prismadb";
import { revalidatePath } from "next/cache";

export const createTodo = async (title: string) => {
  // indispensable indicar que la funcion es del servidor, usando el comando "use server"
  //"use server";

  //console.log(title);
  //console.log("server action");

  if (!title || !title.trim()) {
    return { error: "Title is required (backend)" };
  }

  try {
    await prisma.todo.create({
      data: {
        title,
      },
    });

    revalidatePath("/todo");
    // es parte del caché de next. Next lee la información y revalida la data que está en los todos
    // todos es como el estado del servidor, valida la información del caché con lo que está en el servidor
    // si es distinta actualiza la vista
    // la pagina web no se recarga
    // funciona tambien para peticiones fetch

    return { success: true };
  } catch (error) {
    return { error: "Error creating todo (backend)" };
  }
};

export const removeTodo = async (id: string) => {
  if (!id || !id.trim()) {
    return { error: "Id is required (backend)" };
  }

  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/todo");

    return { success: true };
  } catch (error) {
    return { error: "Error removing todo (backend)" };
  }
};
