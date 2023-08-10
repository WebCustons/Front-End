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
  listItems: TAdvert[] | undefined;
  getProducts: () => void;
  productsList: TAdvert[] | null
  setFilters: React.Dispatch<React.SetStateAction<TFilters[] | null>>
  filters: TFilters[] | null | undefined
  getAdvertsByFilter: (name:string, typeFilter:String)=> void;

}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TAdvert[] | null>(dataBase);


  const [listItems, setListItems] = useState<TAdvert[] | undefined >(undefined);
  const [filters,setFilters] = useState<TFilters[] | null>([])

  const getProducts =()=>{
    
  }


  const getAdvertsByFilter = (nameFilter:string, typeFilter:String)=>{

  
      const arrayFilter = listItems?.filter((advert)=>{
        if(advert.brand === nameFilter){
          return advert
        }
        if(advert.color === nameFilter){
          return advert
        }
        if(advert.fuel === nameFilter){
          return advert
        }
        if(advert.model === nameFilter){
          return advert
        }
        if(advert.year === Number(nameFilter)){
          return advert
        }
      })
      
      if(arrayFilter?.length === 0 && listItems?.length){

        if(typeFilter === 'Marca'){
          const findProduct = productsList?.filter((product)=>{
            if(product.brand === nameFilter){
              return product
            }
          })

          setListItems(findProduct);
        }else if(typeFilter != 'Marca'){
        
        const nameBrand = listItems[0].brand;

        const findProduct = productsList?.filter((product)=>{

          if(product.brand === nameBrand){

            if(product.color === nameFilter){
              return product
            }
            if(product.fuel === nameFilter){
              return product
            }
            if(product.model === nameFilter){
              return product
            }
            if(product.year === Number(nameFilter)){
              return product
            }
          }
          
        })
      
        
        const newListItems = findProduct;

        setListItems(newListItems);
        }
      }else{

        setListItems(arrayFilter);
      }
  
  } 

  return (
    <ProductContext.Provider
      value={{      
        listItems,          
        getProducts,
        productsList,
        setFilters,
        filters,
        getAdvertsByFilter
      }}
    >
      {children}
    </ProductContext.Provider>
  );
  };

  

