import { StyledRangeFilter } from "./style";
import { useProduct } from './../../hooks/useProduct';

interface FilterProps {
  title: string;
  max: number | undefined;
  min: number | undefined;
  filterKey: string;
}

export const RangeFilter = ({ title, min, max, filterKey }: FilterProps) => {

  const { filters, getAdvertsByFilter } = useProduct();

  const handleRangeChange = (value: number) => {
    console.log(value);

    const newFilters = {
      ...filters,
      [filterKey]: value,
    };
    getAdvertsByFilter(newFilters);
  };

  return (
    <StyledRangeFilter>
      <label htmlFor="minValue">{title} :</label>
      <div className="conatinerValue">
        <div>
          <p>Minimo</p>
          <input
            type="number"
            name="minValue"
            placeholder={`${min || 0}`}
            min={min || 0}
            max={max || 0}
            onBlur={(e) => handleRangeChange(Number(e.target.value))}
            
          />
        </div>
        <div>
          <p>Maximo</p>
          <input
            placeholder={`${max || 0}`}
            type="number"
            name="maxValue"
            min={min || 0}
            max={max || 0}
            onBlur={(e) => handleRangeChange(Number(e.target.value))}
          />
        </div>
      </div>
    </StyledRangeFilter>
  );
};
