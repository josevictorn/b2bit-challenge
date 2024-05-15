import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from '../services';

interface UserProps {
  user: {
    id: number
    name: string
    password: string
    isAdmin: boolean
    created_at: string
    updated_at: string
  },
}

interface dataTypes {
  user: UserProps,
  token: string
}

interface SignInRequestProps {
  email: string, 
  password: string
}

interface AuthContextProviderProps {
  children: ReactNode
}

interface AuthContextType {
  SignIn: ({email, password}: SignInRequestProps) => void,
  SignOut: () => void,
  user: UserProps
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState<dataTypes | Record<string, never>>({});
  
  async function SignIn({ email, password }: SignInRequestProps) {
    try {
      const response = await api.post("/auth/login/", 
        { email, password },
        {
          headers: {
            'Accept': 'application/json;version=v1_web'
          }
        }
      );
      const { user, tokens } = response.data;

      localStorage.setItem("@applogin:user", JSON.stringify(user));
      localStorage.setItem("@applogin:token", tokens.access);

      api.defaults.headers.common['Authorization'] = `Bearer ${tokens.access}`;

      setData({ user, token: tokens });

      alert("Logado com sucesso!")
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar.")
      }
    }
  }

  function SignOut() {
    localStorage.removeItem("@applogin:user");
    localStorage.removeItem("@applogin:token");

    setData({});
  }


  useEffect(() => {
    const user = localStorage.getItem("@applogin:user");
    const token = localStorage.getItem("@applogin:token");

    if(token && user ) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);

  return(
    <AuthContext.Provider value = {
      {
        SignIn,
        SignOut,
        user: data.user
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };