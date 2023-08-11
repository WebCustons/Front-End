
import { FilterComponets } from '../filterComponets/index';
import { useProduct } from '../../hooks/useProduct';
import { useEffect } from 'react';
import {Box, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack} from '@chakra-ui/react';

export const AsideFilters = () => {
    const { filters, setFilters, productsFilter} = useProduct();

    useEffect(()=>{
        productsFilter();
    },[])
    const minMileage = filters?.minMileage ? filters.minMileage : 0;
    const maxMileage = filters?.maxMileage ? filters.maxMileage : 0;



    return (
        <aside>
            {filters?.brandAdvert && <FilterComponets title="Marca" filter={filters.brandAdvert} />}
            {filters?.modelAdvert && <FilterComponets title="Modelo" filter={filters.modelAdvert} />}
            {filters?.colorAdvert && <FilterComponets title="Cor" filter={filters.colorAdvert} />}
            {/* {filters?.maxYear && <FilterComponets title="Ano" filter={filters.year} />} */}
            {filters?.fuelAdvert && <FilterComponets title="Combustível" filter={filters.fuelAdvert} />}
            {/* <FilterComponets title="Marca" filter={filters?.brandAdvert} /> */}
            
            <Box>
                <h1>Km</h1>
                
                <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[minMileage, maxMileage]}
                >
                    <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
              
            </Box>
            <ul>
                <h1>Preço</h1>
                <li>
                <RangeSlider
                    aria-label={["min", "max"]}
                    defaultValue={[minMileage, maxMileage]}
                >
                    <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                </RangeSlider>
                </li>
            </ul>
            <button onClick={() => setFilters(null)}            >
                Limpar Filtros
            </button>
        </aside>
    );
};

