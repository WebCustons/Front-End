import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { IUser, TUpdateUser } from "../interfaces/user.interface";
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema";
import { useToast } from "@chakra-ui/react";

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  user: IUser | null;
  getUser: () => Promise<void>;
  announceList: IAdvertsByUserId | undefined;
  getAnnounce: () => Promise<void>;
  setAnnounceList: React.Dispatch<
    React.SetStateAction<IAdvertsByUserId | undefined>
  >;
  updateUser: (data: TUpdateUser) => Promise<void>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [announceList, setAnnounceList] = useState<IAdvertsByUserId>();
  const toast = useToast();

  const getUser = async () => {
    try {
      const id = localStorage.getItem("@ID");
      const token = localStorage.getItem("@TOKEN");
      const userResponse = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(userResponse.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAnnounce = async () => {
    const id = localStorage.getItem("@ID");
    const response = await api.get(`/users/${id}/adverts/`);
    setAnnounceList(response.data);
  };

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

  return (
    <UserContext.Provider
      value={{
        user,
        getUser,
        announceList,
        getAnnounce,
        setAnnounceList,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
