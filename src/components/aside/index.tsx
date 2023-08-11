import { FilterComponets } from "../filterComponets/index";
import { useProduct } from "../../hooks/useProduct";
import { useEffect } from "react";
import { StyledAside } from "./style";

export const AsideFilters = () => {
  const { filters, setFilters, productsFilter } = useProduct();

  useEffect(() => {
    productsFilter();
  }, []);
  const minMileage = filters?.minMileage ? filters.minMileage : 0;
  const maxMileage = filters?.maxMileage ? filters.maxMileage : 0;

  return (
    <StyledAside>
      {filters?.brandAdvert && (
        <FilterComponets title="Marca" filter={filters.brandAdvert} />
      )}
      {filters?.modelAdvert && (
        <FilterComponets title="Modelo" filter={filters.modelAdvert} />
      )}
      {filters?.colorAdvert && (
        <FilterComponets title="Cor" filter={filters.colorAdvert} />
      )}
      {/* {filters?.maxYear && <FilterComponets title="Ano" filter={filters.year} />} */}
      {filters?.fuelAdvert && (
        <FilterComponets title="Combustível" filter={filters.fuelAdvert} />
      )}
      {/* <FilterComponets title="Marca" filter={filters?.brandAdvert} /> */}
      <div className="range_container">
      <label htmlFor="Km">Km rodados:</label>
      <input onChange={() => ({})} type="range" id="Km" name="points" min="0" max={maxMileage}></input>
     
      <label htmlFor="Price">Preço:</label>
      <input onChange={() => ({})} type="range" id="Price" name="points" min="0" max="500000"></input>
      </div>
      <button onClick={() => setFilters(null)}>Limpar Filtros</button>
    </StyledAside>
  );
};
