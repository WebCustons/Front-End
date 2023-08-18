import { ReactNode, createContext, useState } from "react"
import { LoginData } from "../pages/Login/validators"
import { api } from "../services/api"
import { useNavigate } from "react-router-dom"
import { ClientData } from "../pages/Register/validators"
import { useToast } from "@chakra-ui/react"
import { AxiosError } from "axios"

interface AuthorizationContextValues {
    login: (data: LoginData) => Promise<void>
    registerUser: (formData: ClientData) => Promise<void>
  user: ClientData | undefined;
    loadingBnt: boolean;
    setLoadingBnt: React.Dispatch<React.SetStateAction<boolean>>,
}
interface AuthorizationProviderProps {
  children: ReactNode
}
export const AuthorizationContext = createContext(
  {} as AuthorizationContextValues
)

export const AuthProvider = ({ children }: AuthorizationProviderProps) => {
  const [user, setUser] = useState()
  const [loadingBnt, setLoadingBnt] = useState(false)
  const navigate = useNavigate()
  const toast = useToast()

  const login = async (data: LoginData) => {
    try {
      setLoadingBnt(true)
      const response = await api.post("/login", data)
      const { token, user } = response.data

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@ID", user.id);
      setUser(user);

      const profileRoute =
        user.type_user !== "type_user" ? "/profile" : "/admin"
      toast({
        title: `Sucesso  😁`,
        status: "success",
        position: "top-right",
        isClosable: true,
      })
      setTimeout(() => {
        navigate(profileRoute)
      }, 1500)
    } catch (error: unknown) {
      if ((error as AxiosError).response?.status != 500) {
        toast({
          title: `Email ou Senha invalidos 😔`,
          status: "error",
          position: "top-right",
          isClosable: true,
        })
      } else {
        toast({
          title: `Algo deu errado aqui estamos arrumando 😁`,
          status: "warning",
          position: "top-right",
          isClosable: true,
        })
        console.log(error)
      }
    } finally {
      setLoadingBnt(false)
    }
  }

  const registerUser = async (formData: ClientData) => {
    try {
      const response = await api.post("/users", formData)

      toast({
        title: `Sucesso  😁`,
        status: "success",
        position: "top-right",
        isClosable: true,
      })
      
      setTimeout(() => {
        navigate("/login")
      }, 1500)

      setUser(response.data.user)
    } catch (error) {
      toast({
        title: `Verifique as informações de cadastro  😁`,
        status: "error",
        position: "top-right",
        isClosable: true,
      })
      console.log(error)
    }
  }
  return (
    <AuthorizationContext.Provider
      value={{ login, registerUser, user, loadingBnt, setLoadingBnt }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}
