import { ReactNode, createContext, useState } from "react";
import { TCreateAdvertData, TPagination } from "../interfaces/advert.interface";
import { api, apiKenzie } from "../services/api";
import { TKenzieKars } from "../interfaces/kenzieKars.interface";
import { useToast } from "@chakra-ui/react";
import { useUser } from "./../hooks/useProduct";
import { AxiosError } from "axios";
import { TAdvert } from "../schemas/advert.schema";

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
type TErrorResponse = {
  message: {
    [key: string]: unknown;
  };
};
interface IProductProvider {
  // Adverts
  getAdverts: () => void;
  getAdvertsByFilter: (data: TFilters) => Promise<void>;

  // Pagination
  page: TPagination | undefined;
  previusPage: () => void;
  nextPage: () => void;
  paginationByNumber: (page: number) => Promise<void>;

  // Filters
  filters: TFilters | null;
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>;

  // Kenzie Kars
  getKenzieKarsInformation: () => Promise<void>;
  getKenzieKarsByBrand: (brand: string) => Promise<void>;
  kenzieKars: TKenzieKars[];
  kenzieKarsBrands: string[];
  kenzieKarModel: TKenzieKars | undefined;
  getKenzieKar: (model: string) => Promise<void>;

  // Advert
  createAdvert: (data: TCreateAdvertData) => Promise<string>;
  advert: TAdvert | undefined;
  setAdvert: React.Dispatch<React.SetStateAction<TAdvert | undefined>>;
  getAdvert: (idAdvert: number) => Promise<void>;
}

export const ProductContext = createContext({} as IProductProvider);

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [page, setPage] = useState<TPagination>();
  const [advert, setAdvert] = useState<TAdvert>();
  const [filters, setFilters] = useState<TFilters | null>(null);
  const [kenzieKars, setKenzieKars] = useState<TKenzieKars[]>([]);
  const [kenzieKarsBrands, setKenzieKarsBrands] = useState<string[]>([]);
  const [kenzieKarModel, setKenzieKarModel] = useState<
    TKenzieKars | undefined
  >();

  const toast = useToast();
  const { getAnnounceUser } = useUser();

  const getAdverts = async () => {
    const [products, filters] = await Promise.all([
      api.get("/adverts/"),
      api.get("/adverts/adverts-filters"),
    ]);
    setPage(products.data);
    setFilters(filters.data);
  };

  const getAdvert = async (idAdvert: number) => {
    const product = await api.get(`/adverts/${idAdvert}`);
    setAdvert(product.data);
  };
  const createAdvert = async (data: TCreateAdvertData) => {
    try {
      data.published = true;
      await api.post("/adverts/", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@TOKEN")}`,
        },
      });
      const id = localStorage.getItem("@ID");
      getAnnounceUser(id!);
      toast({
        title: `Sucesso  😁`,
        status: "success",
        position: "top-right",
        isClosable: true,
      });
    } catch (error) {
      if ((error as AxiosError).response?.status != 500) {
        const err = error as AxiosError<TErrorResponse>;
        for (const key in err.response?.data.message) {
          toast({
            title: `${key} : ${err.response?.data.message[key]}`,
            status: "error",
            position: "top-right",
            isClosable: true,
          });
        }
      } else {
        toast({
          title: `Algo deu errado aqui estamos arrumando 😁`,
          status: "warning",
          position: "top-right",
          isClosable: true,
        });
        console.log(error);
      }
    }
    return "";
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
    setPage(advertsFilter.data);
    setFilters(productOption.data);
  };

  const previusPage = async () => {
    if (page?.prevPage) {
      const url: string[] = page.prevPage.split("/");
      const response = await api.get(`${url[3]}/${url[4]}`);
      setPage(response.data);
    }
  };

  const nextPage = async () => {
    if (page?.nextPage) {
      const url: string[] = page.nextPage.split("/");
      const response = await api.get(`${url[3]}/${url[4]}`);
      setPage(response.data);
    }
  };

  const paginationByNumber = async (page: number) => {
    const response = await api.get(`adverts/?page=${page}&perPage=12`);
    setPage(response.data);
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

  return (
    <ProductContext.Provider
      value={{
        // Adverts
        page,
        getAdverts,
        filters,
        setFilters,
        getAdvertsByFilter,

        // Pagination
        previusPage,
        nextPage,
        paginationByNumber,

        // Kenzie Kars
        getKenzieKarsByBrand,
        kenzieKars,
        kenzieKarsBrands,
        getKenzieKarsInformation,
        kenzieKarModel,
        getKenzieKar,

        // Advert
        createAdvert,
        advert,
        setAdvert,
        getAdvert,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
