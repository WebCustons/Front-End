import { ReactNode, createContext } from "react";
import { ProductProvider } from "./products.context";
import { AuthProvider } from "./loginAndRegister.context";

interface iContextProps {
  children: ReactNode;
}

export const Context = createContext({});

export const Provider = ({ children }: iContextProps) => {
  return (
    <Context.Provider value={{}}>
      <AuthProvider>

      <ProductProvider>{children}</ProductProvider>
      </AuthProvider>
    </Context.Provider>
  );
};
