import { ComponentProps } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonProps extends ComponentProps<'button'> {
  title: string
  size?: number
}

export function Button({ title, size, ...props }: ButtonProps) {
  return (
    <button
      className={
        twMerge(
          "flex w-full justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-900 disabled:bg-zinc-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950",
          `w-${size}`
        )
      }
      {...props}
    >
      {title}
    </button>
  )
}