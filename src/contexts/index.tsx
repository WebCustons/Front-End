import { ReactNode, createContext } from "react";
import { ProductProvider } from "./products.context";

interface iContextProps {
  children: ReactNode;
}

export const Context = createContext({});

export const Provider = ({ children }: iContextProps) => {
  return (
    <Context.Provider value={{}}>
      <ProductProvider>{children}</ProductProvider>
    </Context.Provider>
  );
};
