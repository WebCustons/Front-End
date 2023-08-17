import { ReactNode, createContext, useState } from "react"
import { api } from "../services/api"
import { IUser } from "../interfaces/user.interface"

interface IUserProviderProps {
  children: ReactNode
}

interface IUserContext {
  user: IUser | null
  getUser: () => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)

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

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  )
}
