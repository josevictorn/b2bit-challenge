import { http, HttpResponse } from "msw"

interface SignInBody {
  email: string
  password: string
}
export const signInMock = http.post<never, SignInBody>('/auth/login', async ({ request }) => {
  const { email, password } = await request.json()

  if(email === "johndoe@example.com" && password === "123456") {
    const user = {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      is_active: true,
      avatar: null,
      type: "StoreUser",
      created: "2023-09-20T11:42:54.515946-03:00",
      modified: "2024-04-26T11:45:26.768591-03:00",
      role: "OWNER"
    }

    return HttpResponse.json({
      user: user,
      tokens: {
        refresh: "simple-jwt",
        access: "simple-jwt"
      }
    }, {
      status: 200,
    })
  }

  return HttpResponse.json({
    detail: "No active account found with the given credentials"
  }, { status: 401 })
})