import { ReactNode, createContext, useState } from "react"
import { api } from "../services/api"
import { IUser, TUpdateUser } from "../interfaces/user.interface"
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema"
import { useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { LoginData } from "../pages/Login/validators";
import { ClientData } from "../pages/Register/validators";
import { AxiosError } from 'axios';

interface IUserProviderProps {
  children: ReactNode
}

interface IUserContext {
  user: IUser | null;
  getUser: () => Promise<void>;
  announceListUser: IAdvertsByUserId | undefined;
  getAnnounceUser: (id: string) => Promise<void>;
  setAnnounceListUser: React.Dispatch<React.SetStateAction<IAdvertsByUserId | undefined>>;
  updateUser: (data: TUpdateUser) => Promise<void>;
  login: (data: LoginData) => Promise<void>
  registerUser: (formData: ClientData) => Promise<void>
  loadingBnt: boolean;
  setLoadingBnt: React.Dispatch<React.SetStateAction<boolean>>,
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [announceListUser, setAnnounceListUser] = useState<IAdvertsByUserId>();
  const [loadingBnt, setLoadingBnt] = useState(false)

  const navigate = useNavigate()
  const toast = useToast();

  const getUser = async () => {
    try {
      const id = localStorage.getItem("@ID")
      const token = localStorage.getItem("@TOKEN")
      const userResponse = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setUser(userResponse.data)
    } catch (error) {
      console.log(error)
    }
  }

  const updateUser = async (data: TUpdateUser) => {
    console.log(data);
    try {
      const token = localStorage.getItem("@TOKEN");
      const response = await api.patch(`/users`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      toast({
        title: `Sucesso  😁`,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Algo deu errado aqui estamos arrumando 😁`,
        status: "warning",
        position: "top-right",
        isClosable: true,
      });
      console.log(error);
    }
  };

  const getAnnounceUser = async (id: string) => {
    const response = await api.get(`/users/${id}/adverts/`)
    setAnnounceListUser(response.data)
  };

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
    <UserContext.Provider
      value={{
        user,
        getUser,
        announceListUser,
        getAnnounceUser,
        setAnnounceListUser,
        updateUser,
        login,
        registerUser,
        loadingBnt,
        setLoadingBnt
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
