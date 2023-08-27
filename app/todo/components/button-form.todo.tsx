"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaSpinner } from "react-icons/fa6";

const ButtonForm = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="border rounder border-gray-400 w-28 p-2 grid place-items-center"
      disabled={pending}
    >
      {pending ? (
        <span className="block animate-spin">
          <FaSpinner className="transform rotate-90" />
        </span>
      ) : (
        "Submit"
      )}
    </button>
  );
};
export default ButtonForm;
