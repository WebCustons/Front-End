import { ReactNode, createContext, useState } from "react";
import { TPagination } from "../interfaces/advert.interface";
import {api} from '../services/api';

interface iProductContextProps {
  children: ReactNode;
}

type TFilters = {
  brandAdvert?: string[];
  modelAdvert?: string[];
  colorAdvert?: string[];
  maxYear?: number;
  minYear?:number;
  fuelAdvert?: string[];
  minPrice?: number,
  maxPrice?: number,
  minMileage?: number,
  maxMileage?: number,
};

interface IProductProvider {
  getProducts: () => void;
  productsList: TPagination | undefined;
  filters: TFilters | null;
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>;
  previusPage: () => void;
  nextPage: () => void;
  productsFilter: ()=> void;
  getAdvertsByFilter: (value:string, title:String)=> void;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider =   ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination | undefined>();
  const [filters, setFilters] = useState<TFilters | null>(null)

  const getProducts = () => {

  }

  const previusPage = () => {

  }
  const nextPage = () => {

  }

  const productsFilter = async() =>{ 
      const productOption = await api.get('/adverts/adverts-filters');
      setFilters(productOption.data);
    }

    const getAdvertsByFilter = async (value:string, title:String)=>{

      const body = {
        brand:value
      }

      const advertsFilter = await api.post('/adverts/filtered',body);

      const arrayFilter = advertsFilter.data

      setProductsList(arrayFilter) 

      // const arrayFilter = listItems?.filter((advert)=>{
      //   if(advert.brand === nameFilter){
      //     return advert
      //   }
      //   if(advert.color === nameFilter){
      //     return advert
      //   }
      //   if(advert.fuel === nameFilter){
      //     return advert
      //   }
      //   if(advert.model === nameFilter){
      //     return advert
      //   }
      //   if(advert.year === Number(nameFilter)){
      //     return advert
      //   }
      // })
      
      // if(arrayFilter?.length === 0 && listItems?.length){

      //   if(typeFilter === 'Marca'){
      //     const findProduct = productsList?.filter((product)=>{
      //       if(product.brand === nameFilter){
      //         return product
      //       }
      //     })

      //     setListItems(findProduct);
      //   }else if(typeFilter != 'Marca'){
        
      //   const nameBrand = listItems[0].brand;

      //   const findProduct = productsList?.filter((product)=>{

      //     if(product.brand === nameBrand){

      //       if(product.color === nameFilter){
      //         return product
      //       }
      //       if(product.fuel === nameFilter){
      //         return product
      //       }
      //       if(product.model === nameFilter){
      //         return product
      //       }
      //       if(product.year === Number(nameFilter)){
      //         return product
      //       }
      //     }
          
      //   })
      
        
      //   const newListItems = findProduct;

      //   setListItems(newListItems);
      //   }
      // }else{

      //   setListItems(arrayFilter);
      // }
  
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
        productsFilter,
        getAdvertsByFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};



