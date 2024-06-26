import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from '../services';
import { toast } from "sonner";

interface UserProps {
  id: number
  name: string
  email: string
  is_active: boolean
  avatar: {
    id: number
    high: string
    medium: string
    low: string
  } | null
  type: string
  created: string
  modified: string
  role: string
}

interface dataTypes {
  user: UserProps | null,
  token: string | null
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
  user: UserProps | null
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthContextProviderProps) {
  const [data, setData] = useState<dataTypes>({ user: null, token: null });
  
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

      toast.success("Logado com sucesso!")
      
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if(error.response) {
        toast.error(error.response.data.detail);
      } else {
        toast.error("Não foi possível logar.")
      }
    }
  }

  function SignOut() {
    localStorage.removeItem("@applogin:user");
    localStorage.removeItem("@applogin:token");

    setData({ user: null, token: null });
    api.defaults.headers.common['Authorization'] = undefined;

    toast.success("Deslogado com sucesso!")
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