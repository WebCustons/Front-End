import { ReactNode, createContext, useState } from "react"
import { api } from "../services/api"
import { IUser } from "../interfaces/user.interface"
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema"

interface IUserProviderProps {
  children: ReactNode
}

interface IUserContext {
  user: IUser | null
  getUser: () => Promise<void>
  announceList: IAdvertsByUserId | undefined
  getAnnounce: () => Promise<void>
}

export const UserContext = createContext({} as IUserContext)

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [announceList, setAnnounceList] = useState<IAdvertsByUserId>()

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

  const getAnnounce = async () => {
    const id = localStorage.getItem("@ID")
    const response = await api.get(`/users/${id}/adverts/`)
    setAnnounceList(response.data)
  }

  return (
    <UserContext.Provider value={{ user, getUser, announceList, getAnnounce }}>
      {children}
    </UserContext.Provider>
  )
}
