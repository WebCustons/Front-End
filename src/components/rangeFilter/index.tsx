import { StyledRangeFilter } from "./style";
import { useProduct } from './../../hooks/useProduct';
import { useState, useEffect } from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'

interface FilterProps {
  title: string;
  max: number | undefined;
  min: number | undefined;
}

export const RangeFilter = ({ title, min, max }: FilterProps) => {

  const { filters, getAdvertsByFilter } = useProduct();

  const [value, setValue] = useState<number[]>([0, 100]);
  
  const minVAlue = min || value[0];
  const maxVAlue = max || value[1];
  const defaultValue = [minVAlue, (minVAlue + maxVAlue) / 2];

  useEffect(() => {
    setValue([minVAlue, maxVAlue]);
    console.log([minVAlue, maxVAlue]);
  }, [minVAlue]);

  const handleRangeChange = ([minSet, maxSet]: number[]) => {
    const newFilters = {
      ...filters,
      minVAlue: minSet,
      maxVAlue: maxSet,
    };
    getAdvertsByFilter(newFilters);
  };

  return (
    <StyledRangeFilter>
      <label htmlFor="minValue">{title}:</label>
      <div>
        <p>{value[0]}</p>
        <p>{value[1]}</p>
      </div>
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={defaultValue}
        min={minVAlue}
        max={maxVAlue}
        onChangeEnd={handleRangeChange}
        onChange={([minSet, maxSet]) => setValue([minSet, maxSet])}
      >
        <RangeSliderTrack bg='red.100'>
          <RangeSliderFilledTrack bg="#4529E6" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={4} index={0} bgColor="#B0A6F0" />
        <RangeSliderThumb boxSize={4} index={1} bg="#36007D" />
      </RangeSlider>
    </StyledRangeFilter>
  );
};
