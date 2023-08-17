import { ReactNode, createContext, useEffect, useState } from "react";
import { ProductProvider } from "./products.context";
import { TAdvert } from "../schemas/advert.schema";
import { api } from "../services/api";

interface iAnnounceContextProps {
  children: ReactNode;
}

interface iAnnounceProvider {
  announceList: TAdvert[] | undefined;
}

export const AnnounceContext = createContext({} as iAnnounceProvider);

export const AnnounceProvider = ({ children }: iAnnounceContextProps) => {
  const [announceList, setAnnounceList] = useState<TAdvert[]>();

  useEffect(() => {
    getAnnounce();
  }, []);

  const getAnnounce = async () => {
    const response = await api.get("/adverts/");
    // Modificar para a rota correta de anúncios de usuário
    setAnnounceList(response.data);
  };
  return (
    <AnnounceContext.Provider value={{ announceList }}>
      <ProductProvider>{children}</ProductProvider>
    </AnnounceContext.Provider>
  );
};
