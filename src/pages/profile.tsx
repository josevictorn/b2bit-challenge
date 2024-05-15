import { useAuth } from "../hooks/auth"

import avatarPlaceholder from '../assets/avatar-placeholder.png'

export function Profile() {
  const { SignOut, user } = useAuth()

  console.log(user)

  function handleLogout() {
    SignOut()
  }

  return (
    <>
    <div className="absolute flex w-full bg-white py-3 px-6 justify-end">
      <button
        onClick={handleLogout}
        className="flex w-56 justify-center rounded-md bg-blue-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-blue-900 disabled:bg-zinc-300 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950"
      >
        Logout
      </button>
    </div>
    <div className="bg-[#FAFAFA] h-screen flex items-center justify-center">
      <div className="bg-white bg-red px-5 py-8 w-full max-w-sm shadow-2xl rounded-2xl space-y-6">
        <header className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-sm font-semibold leading-6 text-gray-900">Profile picture</h2>
          <img src={user.avatar ? user.avatar : avatarPlaceholder} className="h-14 w-14 rounded-lg " alt={`Avatar de ${user.name}`} />
        </header>

        <main className="space-y-4">
          <div className="space-y-2">
            <h2 className="block text-sm leading-6 text-gray-900">
              Your <span className="font-semibold">Name</span>
            </h2>
                    
            <p className="block w-full rounded-md border-0 py-2 px-3 bg-zinc-100 text-gray-900 text-xs font-normal sm:leading-6">
              {user.name}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="block text-sm leading-6 text-gray-900">
              Your <span className="font-semibold">E-mail</span>
            </h2>
                    
            <p className="block w-full rounded-md border-0 py-2 px-3 bg-zinc-100 text-gray-900 text-xs font-normal sm:leading-6">
              {user.email}
            </p>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}