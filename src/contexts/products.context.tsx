import { ReactNode, createContext, useState } from "react";
import { TPagination } from "../interfaces/advert.interface";
import { api } from "../services/api";

interface iProductContextProps {
  children: ReactNode;
}

type TFilters = {
  brandAdvert?: string | string[];
  modelAdvert?: string | string[];
  colorAdvert?: string | string[];
  fuelAdvert?: string | string[];
  maxMileage?: number;
  minPrice?: number;
  maxYear?: number;
  minMileage?: number;
  maxPrice?: number;
  minYear?: number;
};

interface IProductProvider {
  getProducts: () => void;
  productsList: TPagination | undefined;
  filters: TFilters | null;
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>;
  previusPage: () => void;
  nextPage: () => void;
  getAdvertsByFilter: (data: TFilters) => Promise<void>;
  paginationByNumber: (page: number) => Promise<void>;
  clearnFilters: () => void;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination>();
  const [filters, setFilters] = useState<TFilters | null>(null);

  const getProducts = async () => {
    const [products, filters] = await Promise.all(
      [
        api.get("/adverts/"),
        api.get("/adverts/adverts-filters")]
    )
    setProductsList(products.data);
    setFilters(filters.data);

  };

  const clearnFilters = async () => {

    await getProducts();
  };

  const getAdvertsByFilter = async (data: TFilters) => {
    const queryParams = new URLSearchParams();

    const filterKeys = {
      brand: data?.brandAdvert,
      model: data?.modelAdvert,
      color: data?.colorAdvert,
      fuel: data?.fuelAdvert,
      minMileage: data?.minMileage,
      maxMileage: data?.maxMileage,
      minPrice: data?.minPrice,
      maxPrice: data?.maxPrice,
    };

    for (const [key, value] of Object.entries(filterKeys)) {
      if (!Array.isArray(value) && value !== undefined) {
        queryParams.append(key, String(value));
      } else if (Array.isArray(value) && value.length === 1) {
        queryParams.append(key, String(value[0]));
      }
    }
    const [advertsFilter, productOption] = await Promise.all([
      api.get(`/adverts/filtered?${queryParams.toString()}`),
      api.get(`/adverts/adverts-filters?${queryParams.toString()}`)
    ]);
    setProductsList(advertsFilter.data);
    setFilters(productOption.data);

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
        getAdvertsByFilter,
        paginationByNumber,
        clearnFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
