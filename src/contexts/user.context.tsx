import { ReactNode, createContext, useState } from "react"
import { api } from "../services/api"
import { IUser, TUpdateUser } from "../interfaces/user.interface"
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema"
import { useToast } from '@chakra-ui/react';

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
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [announceListUser, setAnnounceListUser] = useState<IAdvertsByUserId>();
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



  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        announceListUser,
        getAnnounceUser,
        setAnnounceListUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
