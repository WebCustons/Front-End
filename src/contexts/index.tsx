import { ReactNode, createContext } from "react"
import { ProductProvider } from "./products.context"
import { AuthProvider } from "./loginAndRegister.context"
import { UserProvider } from "./user.context"
import { AnnounceProvider } from "./annouces.context"

interface iContextProps {
  children: ReactNode
}

export const Context = createContext({})

export const Provider = ({ children }: iContextProps) => {
  return (
    <Context.Provider value={{}}>
      <AnnounceProvider>
        <UserProvider>
          <AuthProvider>
            <ProductProvider>{children}</ProductProvider>
          </AuthProvider>
        </UserProvider>
      </AnnounceProvider>
    </Context.Provider>
  )
}
