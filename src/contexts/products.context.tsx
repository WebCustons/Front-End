import { ReactNode, createContext, useEffect, useState } from "react";
import { TPagination } from "../interfaces/advert.interface";
import { api } from "../services/api";

interface iProductContextProps {
  children: ReactNode;
}

type TFilters = {
  brand?: string[];
  model?: string[];
  color?: string[];
  year?: string[];
  fuel?: string[];
  minPrice?: number;
  maxPrice?: number;
  minMileage?: number;
  maxMileage?: number;
};

interface IProductProvider {
  getProducts: () => void;
  productsList: TPagination | undefined;
  filters: TFilters | null;
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>;
  previusPage: () => void;
  nextPage: () => void;
  paginationByNumber: (page: number) => Promise<void>;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination>();
  const [filters, setFilters] = useState<TFilters | null>(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await api.get("adverts/");
    setProductsList(response.data);
  };

  const previusPage = async () => {
    if (productsList?.prevPage) {
      const url: string[] = productsList.prevPage.split("/");
      const response = await api.get(`${url[3]}/${url[4]}`);
      setProductsList(response.data);
    }
  };
  const nextPage = async () => {
    if (productsList?.nextPage) {
      const url: string[] = productsList.nextPage.split("/");
      const response = await api.get(`${url[3]}/${url[4]}`);
      setProductsList(response.data);
    }
  };
  const paginationByNumber = async (page: number) => {
    const response = await api.get(`adverts/?page=${page}&perPage=12`);
    setProductsList(response.data);
  };
  return (
    <ProductContext.Provider
      value={{
        productsList,
        getProducts,
        filters,
        setFilters,
        previusPage,
        nextPage,
        paginationByNumber,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
