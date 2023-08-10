
import { FilterComponets } from '../filterComponets/index';
import { useProduct } from './../../hooks/useProduct';

// eslint-disable-next-line react-refresh/only-export-components
export enum FiltersRanges {
    brand = "brand",
    model = "model",
    color = "color",
    year = "year",
    fuel = "fuel",
}

export const AsideFilters = () => {
    const { productsList, setFilters } = useProduct();

    const getMax = (range: "mileage" | "price"): number => {
        if (range === "mileage") {
            return productsList!.reduce(
                (prev, next) => Math.max(prev, next.mileage),
                0
            );
        }
        return productsList!.reduce((prev, next) => Math.max(prev, next.price), 0);
    };

    return (
        <aside>
            <FilterComponets title="Marca" filterType={FiltersRanges.brand} />
            <FilterComponets title="Modelo" filterType={FiltersRanges.model} />
            <FilterComponets title="Cor" filterType={FiltersRanges.color} />
            <FilterComponets title="Ano" filterType={FiltersRanges.year} />
            <FilterComponets title="Combustível" filterType={FiltersRanges.fuel} />
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
            <button
                onClick={() =>
                    setFilters({
                        brand: "",
                        model: "",
                        color: "",
                        year: "",
                        fuel: "",
                    })
                }
            >
                Limpar Filtros
            </button>
        </aside>
    );
};

