
import { useProduct } from "../../hooks/useProduct";
import { StyledAside } from "./style";
import { FilterComponent } from './../filterComponets/index';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import { RangeFilter } from './../rangeFilter/index';

export const AsideFilters = () => {
  const { filters, clearnFilters } = useProduct();

  const { isOpen, onOpen, onClose } = useDisclosure();

  {
    return window.innerWidth < 600 ? (
      <>
        <Button onClick={onOpen} color={"white"} bg={`var(--brand1)`} width={'50%'} alignSelf={'center'} borderRadius={'4px'} height={'40px'}>
          Filtros
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} closeOnEsc={true}>
          <ModalContent bg={"white"} overflowY={"scroll"} padding={10}>
            <ModalHeader
              textAlign={"center"}
              position={"absolute"}
              top={3}
              left={10}
              fontWeight={700}
              marginBottom={"50px"}
            >
              Filtros
            </ModalHeader>
            <ModalCloseButton
              position={"absolute"}
              right={10}
              top={5}
              color={"rgba(0,0,0,0.3)"}
            />
            <ModalBody>
              {isOpen ?
                (
                  <StyledAside>
                    {filters?.brandAdvert && (
                      <FilterComponent
                        title="Marca"
                        filterKey="brandAdvert"
                        filter={filters.brandAdvert}
                      />
                    )}
                    {filters?.modelAdvert && (
                      <FilterComponent
                        filterKey="modelAdvert"
                        title="Modelo"
                        filter={filters.modelAdvert}
                      />
                    )}
                    {filters?.colorAdvert && (
                      <FilterComponent
                        title="Cor"
                        filterKey="colorAdvert"
                        filter={filters.colorAdvert}
                      />
                    )}
                    {/* {filters?.maxYear && <FilterComponent title="Ano" filter={filters.year} />} */}
                    {filters?.fuelAdvert && (
                      <FilterComponent
                        title="Combustivel"
                        filterKey="fuelAdvert"
                        filter={filters.fuelAdvert}
                      />
                    )}
                    {/* <FilterComponent title="Marca" filter={filters?.brandAdvert} /> */}
                    <div className="range_container">
                      {filters?.minMileage && filters?.maxMileage && <RangeFilter min={filters?.minMileage} max={filters?.maxMileage} title={"Km"} />}
                      {filters?.minPrice && filters?.maxPrice && <RangeFilter min={filters.minPrice} max={filters.maxPrice} title={"Preço"} />}
                      {filters?.minYear && filters?.maxYear && <RangeFilter min={filters.minYear} max={filters.maxYear} title={"Ano"} />}
                    </div>
                    <button onClick={() => clearnFilters()}>
                      Limpar Filtros
                    </button>
                  </StyledAside>
                ) : (
                  <StyledAside style={{ display: "none" }}>
                    {filters?.brandAdvert && (
                      <FilterComponent
                        title="Marca"
                        filterKey="brandAdvert"
                        filter={filters.brandAdvert}
                      />
                    )}
                    {filters?.modelAdvert && (
                      <FilterComponent
                        filterKey="modelAdvert"
                        title="Modelo"
                        filter={filters.modelAdvert}
                      />
                    )}
                    {filters?.colorAdvert && (
                      <FilterComponent
                        title="Cor"
                        filterKey="colorAdvert"
                        filter={filters.colorAdvert}
                      />
                    )}
                    {/* {filters?.maxYear && <FilterComponent title="Ano" filter={filters.year} />} */}
                    {filters?.fuelAdvert && (
                      <FilterComponent
                        title="Combustivel"
                        filterKey="fuelAdvert"
                        filter={filters.fuelAdvert}
                      />
                    )}
                    {/* <FilterComponent title="Marca" filter={filters?.brandAdvert} /> */}
                    <div className="range_container">
                      {filters?.minMileage && filters?.maxMileage && <RangeFilter min={filters?.minMileage} max={filters?.maxMileage} title={"Km"} />}
                      {filters?.minPrice && filters?.maxPrice && <RangeFilter min={filters.minPrice} max={filters.maxPrice} title={"Preço"} />}
                      {filters?.minYear && filters?.maxYear && <RangeFilter min={filters.minYear} max={filters.maxYear} title={"Ano"} />}
                    </div>
                    <button onClick={() => clearnFilters()}>
                      Limpar Filtros
                    </button>
                  </StyledAside>
                )}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    ) :
      (
        <StyledAside>
          {filters?.brandAdvert && (
            <FilterComponent
              title="Marca"
              filterKey="brandAdvert"
              filter={filters.brandAdvert}
            />
          )}
          {filters?.modelAdvert && (
            <FilterComponent
              filterKey="modelAdvert"
              title="Modelo"
              filter={filters.modelAdvert}
            />
          )}
          {filters?.colorAdvert && (
            <FilterComponent
              title="Cor"
              filterKey="colorAdvert"
              filter={filters.colorAdvert}
            />
          )}
          {/* {filters?.maxYear && <FilterComponent title="Ano" filter={filters.year} />} */}
          {filters?.fuelAdvert && (
            <FilterComponent
              title="Combustivel"
              filterKey="fuelAdvert"
              filter={filters.fuelAdvert}
            />
          )}
          {/* <FilterComponent title="Marca" filter={filters?.brandAdvert} /> */}
          <div className="range_container">
            {filters?.minMileage && filters?.maxMileage && <RangeFilter min={filters?.minMileage} max={filters?.maxMileage} title={"Km"} />}
            {filters?.minPrice && filters?.maxPrice && <RangeFilter min={filters.minPrice} max={filters.maxPrice} title={"Preço"} />}
            {filters?.minYear && filters?.maxYear && <RangeFilter min={filters.minYear} max={filters.maxYear} title={"Ano"} />}
          </div>
          <button onClick={() => clearnFilters()}>
            Limpar Filtros
          </button>
        </StyledAside>
      );
  }
};
