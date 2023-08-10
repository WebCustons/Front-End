import { useProduct } from "../../hooks/useProduct";
import { TAdvert } from "../../interfaces/advert.interface";

export const FiltersComponent = () => {
  const { productsList,setFilters,filters, getAdvertsByFilter} = useProduct();

  const getMax = (range: "mileage" | "price"): Number => {
    if (range == "mileage") {
      return productsList!.reduce(
        (prev, next) => Math.max(prev, next.mileage),
        0
      );
    }
    return productsList!.reduce((prev, next) => Math.max(prev, next.price), 0);
  };
  enum filtersRanges {
    brand = "brand",
    model = "model",
    color = "color",
    year = "year",
    fuel = "fuel",
  }
  const getFilters = (list: TAdvert[], range: filtersRanges) => {
    const filters: String[] = [];
    for (let i = 0; i < list.length; i++) {
      if (!filters.includes(String(list[i][range]))) {
        filters.push(String(list[i][range]));
      }
    }
    return filters;
  };
  // console.log(getFilters(productsList!, filtersRanges.brand));

  return (
    <>
      <ul>
        <ul>
          <h1>Marca</h1>

          {getFilters(productsList!, filtersRanges.brand).map((brandName) => (
            <li onClick={()=>{getAdvertsByFilter(String(brandName),'Marca')}}>{brandName}</li>
          ))}
        </ul>
        <ul>
          <h1>Modelo</h1>
          {getFilters(productsList!, filtersRanges.model).map((brandName) => (
            <li onClick={()=>{getAdvertsByFilter(String(brandName),'Modelo')}}>{brandName}</li>
          ))}
        </ul>
        <ul>
          <h1>Cor</h1>
          {getFilters(productsList!, filtersRanges.color).map((brandName) => (
            <li onClick={()=>{getAdvertsByFilter(String(brandName),'Cor')}}>{brandName}</li>
          ))}
        </ul>
        <ul>
          <h1>Ano</h1>
          {getFilters(productsList!, filtersRanges.year).map((brandName) => (
            <li onClick={()=>{getAdvertsByFilter(String(brandName),'Ano')}}>{brandName}</li>
          ))}
        </ul>
        <ul>
          <h1>Combustível</h1>
          {getFilters(productsList!, filtersRanges.fuel).map((brandName) => (
            <li  onClick={()=>{getAdvertsByFilter(String(brandName),'Combustivel')}}>{brandName}</li>
          ))}
        </ul>
        <ul>
          <h1>Km</h1>
          <li>
            <input
              id="kilometer_input"
              type="range"
              min="0"
              max={String(getMax("mileage"))}
              step="1000"
            />
          </li>
        </ul>
        <ul>
          <h1>Preço</h1>
          <li>
            <input
              id="price_input"
              type="range"
              min="10000"
              max={String(getMax("price"))}
              step="1000"
            />
          </li>
        </ul>
        <button onClick={() => setFilters([])}>Limpar Filtros</button>
      </ul>
    </>
  );
};
