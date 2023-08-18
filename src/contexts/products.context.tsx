import { ReactNode, createContext, useState } from "react";
import { TCreateAdvertData, TPagination } from "../interfaces/advert.interface";
import { api, apiKenzie } from "../services/api";
import { TKenzieKars } from "../interfaces/kenzieKars.interface";
import { useToast } from "@chakra-ui/react";
import { useUser } from "../hooks/useUser";
import { IAdvertsByUserId } from "../schemas/advertsByUserId.schema";

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
  getKenzieKarsInformation: () => Promise<void>;
  getKenzieKarsByBrand: (brand: string) => Promise<void>;
  kenzieKars: TKenzieKars[];
  kenzieKarsBrands: string[];
  kenzieKarModel: TKenzieKars | undefined;
  getKenzieKar: (model: string) => Promise<void>;
  createAdvert: (data: TCreateAdvertData) => Promise<void>;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination>();
  const [filters, setFilters] = useState<TFilters | null>(null);
  const [kenzieKars, setKenzieKars] = useState<TKenzieKars[]>([]);
  const [kenzieKarsBrands, setKenzieKarsBrands] = useState<string[]>([]);
  const [kenzieKarModel, setKenzieKarModel] = useState<
    TKenzieKars | undefined
  >();

  const { setAnnounceList, announceList } = useUser();

  const getProducts = async () => {
    const [products, filters] = await Promise.all([
      api.get("/adverts/"),
      api.get("/adverts/adverts-filters"),

    ]);
    setProductsList(products.data);
    setFilters(filters.data);
  };
  const toast = useToast();

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
      api.get(`/adverts/adverts-filters?${queryParams.toString()}`),

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

  const getKenzieKarsInformation = async () => {
    const response = await apiKenzie.get("/cars");
    setKenzieKarsBrands(Object.keys(response.data));
  };
  const getKenzieKarsByBrand = async (brand: string) => {
    const response = await apiKenzie.get(`/cars?brand=${brand}`);
    setKenzieKars(response.data);
  };
  const getKenzieKar = async (name: string) => {
    const kar = kenzieKars.find((kar) => kar.name == name);
    if (kar?.fuel == 1) {
      kar.fuel = "flex";
    } else if (kar?.fuel == 2) {
      kar.fuel = "hibrido";
    } else if (kar?.fuel == 3) {
      kar.fuel = "eletrico";
    }

    setKenzieKarModel(kar);
  };
  const createAdvert = async (data: TCreateAdvertData) => {
    try {
      data.published = true;
      const response = await api.post("/adverts/", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      const obj: IAdvertsByUserId = {
        ...announceList,
        adverts: [...announceList!.adverts, response.data],
      };
      setAnnounceList(obj);
      toast({
        title: `Sucesso  😁`,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: `Algo deu errado aqui estamos arrumando 😁`,
        status: "warning",
        position: "top-right",
        isClosable: true,
      });
      console.log(error);
    }
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
        getKenzieKarsByBrand,
        kenzieKars,
        kenzieKarsBrands,
        getKenzieKarsInformation,
        kenzieKarModel,
        getKenzieKar,
        createAdvert,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
