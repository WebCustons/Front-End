import { ReactNode, createContext, useState } from "react"
import { ProductProvider } from "./products.context"
import { api } from "../services/api"
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema"

interface iAnnounceContextProps {
  children: ReactNode
}

interface iAnnounceProvider {
  announceList: IAdvertsByUserId | undefined
  getAnnounce: () => Promise<void>
}

export const AnnounceContext = createContext({} as iAnnounceProvider)

export const AnnounceProvider = ({ children }: iAnnounceContextProps) => {
  const [announceList, setAnnounceList] = useState<IAdvertsByUserId>()

  const getAnnounce = async () => {
    const id = localStorage.getItem("@ID")
    const response = await api.get(`/users/${id}/adverts/`)
    setAnnounceList(response.data)
  }
  return (
    <AnnounceContext.Provider value={{ announceList, getAnnounce }}>
      <ProductProvider>{children}</ProductProvider>
    </AnnounceContext.Provider>
  )
}
