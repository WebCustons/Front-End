import { FilterComponets } from "../filterComponets/index";
import { useProduct } from "../../hooks/useProduct";
import { useEffect, useRef, ReactNode } from "react";
import { StyledAside } from "./style";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

export const AsideFilters = () => {
  const { filters, setFilters, productsFilter, clearnFilters } = useProduct();
  const minMileage = filters?.minMileage ? filters.minMileage : 0;
  const maxMileage = filters?.maxMileage ? filters.maxMileage : 0;
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    productsFilter();
  }, []);
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
                  (<StyledAside>
                    {filters?.brandAdvert && (
                      <FilterComponets
                        title="Marca"
                        filter={filters.brandAdvert}
                      />
                    )}
                    {filters?.modelAdvert && (
                      <FilterComponets
                        title="Modelo"
                        filter={filters.modelAdvert}
                      />
                    )}
                    {filters?.colorAdvert && (
                      <FilterComponets
                        title="Cor"
                        filter={filters.colorAdvert}
                      />
                    )}
                    {/* {filters?.maxYear && <FilterComponets title="Ano" filter={filters.year} />} */}
                    {filters?.fuelAdvert && (
                      <FilterComponets
                        title="Combustível"
                        filter={filters.fuelAdvert}
                      />
                    )}
                    {/* <FilterComponets title="Marca" filter={filters?.brandAdvert} /> */}
                    <div className="range_container">
                      <label htmlFor="Km">Km rodados:</label>
                      <input
                        onChange={() => ({})}
                        type="range"
                        id="Km"
                        name="points"
                        min="0"
                        max={maxMileage}
                      ></input>

                      <label htmlFor="Price">Preço:</label>
                      <input
                        onChange={() => ({})}
                        type="range"
                        id="Price"
                        name="points"
                        min="0"
                        max="500000"
                      ></input>
                    </div>
                    <button onClick={() => clearnFilters()}>
                      Limpar Filtros
                    </button>
                  </StyledAside>
                
              ) : (
                <StyledAside style={{display:"none"}}>
                    {filters?.brandAdvert && (
                      <FilterComponets
                        title="Marca"
                        filter={filters.brandAdvert}
                      />
                    )}
                    {filters?.modelAdvert && (
                      <FilterComponets
                        title="Modelo"
                        filter={filters.modelAdvert}
                      />
                    )}
                    {filters?.colorAdvert && (
                      <FilterComponets
                        title="Cor"
                        filter={filters.colorAdvert}
                      />
                    )}
                    {/* {filters?.maxYear && <FilterComponets title="Ano" filter={filters.year} />} */}
                    {filters?.fuelAdvert && (
                      <FilterComponets
                        title="Combustível"
                        filter={filters.fuelAdvert}
                      />
                    )}
                    {/* <FilterComponets title="Marca" filter={filters?.brandAdvert} /> */}
                    <div className="range_container">
                      <label htmlFor="Km">Km rodados:</label>
                      <input
                        onChange={() => ({})}
                        type="range"
                        id="Km"
                        name="points"
                        min="0"
                        max={maxMileage}
                      ></input>

                      <label htmlFor="Price">Preço:</label>
                      <input
                        onChange={() => ({})}
                        type="range"
                        id="Price"
                        name="points"
                        min="0"
                        max="500000"
                      ></input>
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
    ) : (
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
          <input
            onChange={() => ({})}
            type="range"
            id="Km"
            name="points"
            min="0"
            max={maxMileage}
          ></input>

          <label htmlFor="Price">Preço:</label>
          <input
            onChange={() => ({})}
            type="range"
            id="Price"
            name="points"
            min="0"
            max="500000"
          ></input>
        </div>
        <button onClick={() => clearnFilters()}>Limpar Filtros</button>
      </StyledAside>
    );
  }
};
