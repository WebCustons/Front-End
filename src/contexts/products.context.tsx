import { ReactNode, createContext, useState } from "react";
import { TAdvert } from "../interfaces/advert.interface";
import { dataBase } from './../data/data';

interface iProductContextProps {
  children: ReactNode;
}

type TFilters = {
  brand: string;
  model: string;
  color: string;
  year: string;
  fuel: string;
};

interface IProductProvider {
  listPage: number[] | null;
  currentPage: number;
  previousPage: number;
  listItems: TAdvert[] | null;
  setPages: () => void;
  nextPage: () => void;
  prevPage: () => void;
  setPageByNumber: (number: number) => void;
  productsList: TAdvert[];
  setProductsList: React.Dispatch<React.SetStateAction<TAdvert[]>>;
  setFilters: React.Dispatch<React.SetStateAction<TFilters>>;
  filters: TFilters;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TAdvert[]>(dataBase);
  const [listPage, setListPage] = useState<number[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [previousPage, setPreviousPage] = useState<number>(0);
  const [listItems, setListItems] = useState<TAdvert[] | null>(null);
  const [filters, setFilters] = useState<TFilters>({
    brand: "",
    model: "",
    color: "",
    year: "",
    fuel: "",
  });

  const updatePageState = (pageIndex: number) => {
    if (!listPage) return;

    const newPageItems = productsList!.slice(listPage[pageIndex - 1], listPage[pageIndex]);
    setListItems(newPageItems);
    setCurrentPage(pageIndex);
    setPreviousPage(pageIndex - 1);
  };

  const setPages = () => {
    const numberOfPages: number = Math.ceil(productsList.length / 12);
    const itemsPage: number[] = [0];

    for (let i = 0; i < numberOfPages; i++) {
      const nextPageStart = i * 12;
      itemsPage.push(nextPageStart + 12);
    }

    updatePageState(1);
    setListPage(itemsPage);
  };

  const changePage = (pageIndex: number) => {
    if (!listPage) return;

    if (listPage.length > 1 && pageIndex < listPage.length) {
      updatePageState(pageIndex + 1);
    } else if (pageIndex > 1) {
      updatePageState(pageIndex - 1);
    }
  };


  const nextPage = () => changePage(currentPage);

  const prevPage = () => changePage(currentPage);

  const setPageByNumber = (number: number) => {
    if (!listPage) return;

    updatePageState(number);
  };

  return (
    <ProductContext.Provider
      value={{
        currentPage,
        listItems,
        listPage,
        nextPage,
        previousPage,
        prevPage,
        setPageByNumber,
        setPages,
        productsList,
        setProductsList,
        setFilters,
        filters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
