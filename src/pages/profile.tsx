import { useAuth } from "../hooks/auth"

import avatarPlaceholder from '../assets/avatar-placeholder.png'
import { Button } from "../components/button"

export function Profile() {
  const { SignOut, user } = useAuth()

  console.log(user)

  function handleLogout() {
    SignOut()
  }

  return (
    <>
    <div 
      className="absolute flex w-full bg-white py-3 px-6 justify-end"
    >
      <Button 
        title="Logout"
        onClick={handleLogout}
        size={56}
      />
    </div>
    <div className="bg-[#FAFAFA] h-screen flex items-center justify-center">
      <div
        className="bg-white bg-red px-5 py-8 w-full max-w-sm shadow-2xl rounded-2xl space-y-6 animate-come"
      >
        <header className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-sm font-semibold leading-6 text-gray-900">Profile picture</h2>
          <img src={user?.avatar ? user.avatar.low : avatarPlaceholder} className="h-14 w-14 rounded-lg object-cover" alt={`Avatar de ${user?.name}`} />
        </header>

        <main className="space-y-4">
          <div className="space-y-2">
            <h2 className="block text-sm leading-6 text-gray-900">
              Your <span className="font-semibold">Name</span>
            </h2>
                    
            <p className="block w-full rounded-md border-0 py-2 px-3 bg-zinc-100 text-gray-900 text-xs font-normal sm:leading-6">
              {user?.name}
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="block text-sm leading-6 text-gray-900">
              Your <span className="font-semibold">E-mail</span>
            </h2>
                    
            <p className="block w-full rounded-md border-0 py-2 px-3 bg-zinc-100 text-gray-900 text-xs font-normal sm:leading-6">
              {user?.email}
            </p>
          </div>
        </main>
      </div>
    </div>
    </>
  )
}