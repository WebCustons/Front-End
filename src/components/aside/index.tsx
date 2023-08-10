
import { FilterComponets } from '../filterComponets/index';
import { useProduct } from '../../hooks/useProduct';


export const AsideFilters = () => {
    const { filters, setFilters } = useProduct();



    return (
        <aside>
            {filters?.brand && <FilterComponets title="Marca" filter={filters.brand} />}
            {filters?.model && <FilterComponets title="Modelo" filter={filters.model} />}
            {filters?.color && <FilterComponets title="Cor" filter={filters.color} />}
            {filters?.year && <FilterComponets title="Ano" filter={filters.year} />}
            {filters?.fuel && <FilterComponets title="Combustível" filter={filters.fuel} />}
            <ul>
                <h1>Km</h1>
                <li>
                    <input
                        id="kilometer_input"
                        type="range"
                        min=""
                        max=""
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
                        min=""
                        max=""
                        step="1000"
                    />
                </li>
            </ul>
            <button onClick={() => setFilters(null)}            >
                Limpar Filtros
            </button>
        </aside>
    );
};

