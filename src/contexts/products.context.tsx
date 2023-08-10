import { ReactNode, createContext, useState } from "react";
import { TPagination } from "../interfaces/advert.interface";
import { dataBase } from './../data/data';

interface iProductContextProps {
  children: ReactNode;
}

type TFilters = {
  brand?: string[];
  model?: string[];
  color?: string[];
  year?: string[];
  fuel?: string[];
  minPrice?: number,
  maxPrice?: number,
  minMileage?: number,
  maxMileage?: number,
};

interface IProductProvider {
  getProducts: () => void;
  productsList: TPagination;
  filters: TFilters | null;
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>;
  previusPage: () => void;
  nextPage: () => void;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination>(dataBase);
  const [filters, setFilters] = useState<TFilters | null>(null)

  const getProducts = () => {

  }

  const previusPage = () => {

  }
  const nextPage = () => {

  }

  return (
    <ProductContext.Provider
      value={{
        productsList,
        getProducts,
        filters,
        setFilters,
        previusPage,
        nextPage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};



