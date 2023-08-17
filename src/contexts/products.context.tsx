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
    console.log(queryParams.toString())

    const [advertsFilter, productOption] = await Promise.all([
      api.get(`/adverts/filtered?${queryParams.toString()}`),
      api.get(`/adverts/adverts-filters?${queryParams.toString()}`)
    ]);
    const arrayFilter = productsList?.data?.filter((advert) => {
      if (advert.brand === value) {
        return advert;
      }
      if (advert.color === value) {
        return advert;
      }
      if (advert.fuel === value) {
        return advert;
      }
      if (advert.model === value) {
        return advert;
      }
      if (advert.year === Number(value)) {
        return advert;
      }

      if(advert.price === Number(value)){
        return advert
      }
      if (advert.mileage === Number(value)) {
         return advert
      }

    });

    if (arrayFilter?.length === 0) {
      if (title === "Marca") {
        const findProduct = await api.post("/adverts/filtered", {
          brand: value,
        });
        setProductsList(findProduct.data);
      }
    } else if (title != "Marca") {
      const nameBrand = productsList?.data[0].brand;

      let objectModel = {};
      let objectColor = {};
      let objectFuel = {};
      let objectPrice = {};
      let objectKm = {};

      if (title === "Modelo") {
        objectModel = {
          brand: nameBrand,
          model: value,
        };
      }
      if (title === "Cor") {
        objectColor = {
          brand: nameBrand,
          color: value,
        };
      }
      if (title === "Combustível") {
        objectFuel = {
          brand: nameBrand,
          fuel: value,
        };
      }
      if (title === "Preco") {
        objectPrice = {
          price: value,
        };
      }
      if (title === "Kilometragem") {
        objectKm = {
          mileage: value,
        };
      }

      const objectFinal = Object.assign(
        {},
        objectModel,
        objectColor,
        objectFuel,
        objectPrice,
        objectKm
      );

      const findProduct = await api.post("/adverts/filtered", objectFinal);

      setProductsList(findProduct.data);
    } else {
      let objectBrand = {};
      let objectModel = {};
      let objectColor = {};
      let objectFuel = {};
      let objectPrice =  {};
      let objectKm =  {};

      if (title === "Marca") {
        objectBrand = {
          brand: value,
        };
      }
      if (title === "Modelo") {
        objectModel = {
          model: value,
        };
      }
      if (title === "Cor") {
        objectColor = {
          color: value,
        };
      }
      if (title === "Combustível") {
        objectFuel = {
          fuel: value,
        };
      }
      if (title === "Preco") {
        objectPrice = {
          price: value,
        };
      }
      if (title === "Kilometragem") {
        objectKm = {
          mileage: value,
        };
      }
      const objectFinal = Object.assign(
        {},
        objectBrand,
        objectModel,
        objectColor,
        objectFuel,
        objectPrice,
        objectKm
      );

      const getAdvert = await api.post("/adverts/filtered", objectFinal);

      setProductsList(getAdvert.data);
    }
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
