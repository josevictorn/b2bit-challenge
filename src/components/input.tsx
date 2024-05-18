import { Field } from "formik";
import { ComponentProps } from "react";

export interface InputProps extends ComponentProps<'input'> {}

export function Input({ ...props }: InputProps) {
  return (
    <Field
      {...props}
      className="mt-2 block w-full rounded-md border-0 py-2 px-3 outline-none bg-zinc-100 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-950 text-sm sm:leading-6"
    />
  )
}