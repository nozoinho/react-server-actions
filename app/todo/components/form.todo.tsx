"use client";

import { createTodo } from "../actions/todo.action";
import { useRef } from "react";
import ButtonForm from "./button-form.todo";
import toast from "react-hot-toast";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null); // usando typescript para validar el tipo de dato
  const handleSubmit = async (data: FormData) => {
    const title = data.get("title") as string; // este es el name del input en el form

    // validaciones frontend
    if (!title || !title.trim()) {
      return toast.error("Title is required");
    }
    //console.log(title);
    const res = await createTodo(title);
    if (res.error) {
      return toast.error(res.error);
    }
    formRef.current?.reset(); // ? significa que puede venir null

    toast.success("Todo created");
  };
  return (
    <form ref={formRef} action={handleSubmit} className="flex">
      <input
        type="text"
        name="title"
        className="border rounded border-gray-400 mr-2 p-2 flex w-full"
      />
      <ButtonForm />
    </form>
  );
};
export default FormTodo;
