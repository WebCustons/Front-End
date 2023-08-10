import { useProduct } from "../../hooks/useProduct";
import { TAdvert } from "../../interfaces/advert.interface";
import { FiltersRanges } from "../filtersComponent";



interface FilterProps {
  title: string;
  filterType: FiltersRanges;
}

export const FilterComponets = ({ title, filterType }:FilterProps) => {
  
  const { productsList, setFilters, filters } = useProduct();

  const getFilters = (list: TAdvert[], range: FiltersRanges): string[] => {
  return Array.from(new Set(list.map(item => String(item[range]))));
};

  const filterValues = getFilters(productsList!, filterType);

  console.log(filterValues);
  
  const handleFilterClick = (value: string): void => {
    setFilters({ ...filters, [filterType]: value });
  };

  return (
    <ul>
      <h1>{title}</h1>
      {filterValues.map((value) => (
        <li key={value} onClick={() => handleFilterClick(value)}>
          {value}
        </li>
      ))}
    </ul>
  );
};

