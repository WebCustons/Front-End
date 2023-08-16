import { ReactNode, createContext, useEffect, useState } from "react"
import { TPagination } from "../interfaces/advert.interface"
import { api } from "../services/api"

interface iProductContextProps {
  children: ReactNode
}

type TFilters = {
  brandAdvert?: string[]
  modelAdvert?: string[]
  colorAdvert?: string[]
  maxYear?: number
  minYear?: number
  fuelAdvert?: string[]
  minPrice?: number
  maxPrice?: number
  minMileage?: number
  maxMileage?: number
}

interface IProductProvider {
  getProducts: () => void
  productsList: TPagination | undefined
  filters: TFilters | null
  setFilters: React.Dispatch<React.SetStateAction<TFilters | null>>
  previusPage: () => void
  nextPage: () => void
  productsFilter: () => void
  getAdvertsByFilter: (value: string, title: String) => void
  paginationByNumber: (page: number) => Promise<void>
  clearnFilters: () => void
}

export const ProductContext = createContext({} as IProductProvider)

export const ProductProvider = ({ children }: iProductContextProps) => {
  const [productsList, setProductsList] = useState<TPagination>()
  const [filters, setFilters] = useState<TFilters | null>(null)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await api.get("/adverts")

    setProductsList(response.data)
  }

  const productsFilter = async () => {
    const productOption = await api.post("/adverts/adverts-filters")
    setFilters(productOption.data)
  }

  const clearnFilters = async () => {
    await getProducts()
  }

  const getAdvertsByFilter = async (value: string, title: String) => {
    if (title != "Marca") {
      const nameBrand1 = productsList?.data[0]
      const nameBrand2 = productsList?.data[1]

      if (nameBrand2?.brand === nameBrand1?.brand) {
        let objectModel = {}
        let objectColor = {}
        let objectFuel = {}

        if (title === "Modelo") {
          objectModel = {
            model: value,
          }
        }
        if (title === "Cor") {
          objectColor = {
            color: value,
          }
        }
        if (title === "Combustível") {
          objectFuel = {
            fuel: value,
          }
        }

        const objectFinale = Object.assign(
          {},
          objectModel,
          objectColor,
          objectFuel
        )

        const advertsFilter = await api.post("/adverts/filtered", objectFinale)
        setProductsList(advertsFilter.data)
      } else if (nameBrand2?.brand != nameBrand1?.brand) {
        let objectModel = {}
        let objectColor = {}
        let objectFuel = {}

        if (title === "Modelo") {
          objectModel = {
            model: value,
          }
        }
        if (title === "Cor") {
          objectColor = {
            color: value,
          }
        }
        if (title === "Combustível") {
          objectFuel = {
            fuel: value,
          }
        }

        const objectFinale = Object.assign(
          {},
          objectModel,
          objectColor,
          objectFuel
        )

        const advertsFilter = await api.post("/adverts/filtered", objectFinale)
        setProductsList(advertsFilter.data)
        return 0
      }
    }

    const arrayFilter = productsList?.data?.filter((advert) => {
      if (advert.brand === value) {
        return advert
      }
      if (advert.color === value) {
        return advert
      }
      if (advert.fuel === value) {
        return advert
      }
      if (advert.model === value) {
        return advert
      }
      if (advert.year === Number(value)) {
        return advert
      }
    })

    if (arrayFilter?.length === 0) {
      if (title === "Marca") {
        const findProduct = await api.post("/adverts/filtered", {
          brand: value,
        })
        setProductsList(findProduct.data)
      }
    } else if (title != "Marca") {
      const nameBrand = productsList?.data[0].brand

      let objectModel = {}
      let objectColor = {}
      let objectFuel = {}

      if (title === "Modelo") {
        objectModel = {
          brand: nameBrand,
          model: value,
        }
      }
      if (title === "Cor") {
        objectColor = {
          brand: nameBrand,
          color: value,
        }
      }
      if (title === "Combustível") {
        objectFuel = {
          brand: nameBrand,
          fuel: value,
        }
      }

      const objectFinal = Object.assign(
        {},
        objectModel,
        objectColor,
        objectFuel
      )

      const findProduct = await api.post("/adverts/filtered", objectFinal)

      setProductsList(findProduct.data)
    } else {
      let objectBrand = {}
      let objectModel = {}
      let objectColor = {}
      let objectFuel = {}

      if (title === "Marca") {
        objectBrand = {
          brand: value,
        }
      }
      if (title === "Modelo") {
        objectModel = {
          model: value,
        }
      }
      if (title === "Cor") {
        objectColor = {
          color: value,
        }
      }
      if (title === "Combustível") {
        objectFuel = {
          fuel: value,
        }
      }
      const objectFinal = Object.assign(
        {},
        objectBrand,
        objectModel,
        objectColor,
        objectFuel
      )

      const getAdvert = await api.post("/adverts/filtered", objectFinal)

      setProductsList(getAdvert.data)
    }
  }

  const previusPage = async () => {
    if (productsList?.prevPage) {
      const url: string[] = productsList.prevPage.split("/")
      const response = await api.get(`${url[3]}/${url[4]}`)
      setProductsList(response.data)
    }
  }
  const nextPage = async () => {
    if (productsList?.nextPage) {
      const url: string[] = productsList.nextPage.split("/")
      const response = await api.get(`${url[3]}/${url[4]}`)
      setProductsList(response.data)
    }
  }
  const paginationByNumber = async (page: number) => {
    const response = await api.get(`adverts/?page=${page}&perPage=12`)
    setProductsList(response.data)
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
        getAdvertsByFilter,
        paginationByNumber,
        clearnFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
