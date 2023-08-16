import { useProduct } from "../../hooks/useProduct";



interface FilterProps {
  title: string;
  filter: string[];
}

export const FilterComponets = ({ title, filter }: FilterProps) => {
  const { setFilters, filters, getAdvertsByFilter } = useProduct();

  const handleFilterClick = (title:string,value: string): void => {
    const newFilters = {
      ...filters,
      [title]: value, 
    }
    setFilters(newFilters);

    
    getAdvertsByFilter(value,title);
};

return (
  <ul>
    <h1>{title}</h1>
    {filter.map((value: string) => (
      <li key={value} onClick={() => {handleFilterClick(title,value)}}>
        {value}
      </li>
    ))}
  </ul>
);
};

