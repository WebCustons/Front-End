import { CardAdvert } from "../../components/cardAdvert";
import { List, Button, ButtonGroup, Box } from "@chakra-ui/react";
import StyledHome, { ContainerList, StyledSection } from "./style";

import { useEffect } from "react";
import { useProduct } from "../../hooks/useProduct";

function Home() {
  const {
    currentPage,
    getProducts,
    listItems,
    listPage,
    nextPage,
    prevPage,
    previousPage,
    setPageByNumber,
    setPages,
  } = useProduct();

  useEffect(() => {
    getProducts();
    setPages();
  }, []);

  return (
    <StyledHome>
      <StyledSection>
        <ContainerList>
          <List>
            {listItems?.map((advert) => (
              <CardAdvert advert={advert} key={advert.id} />
            ))}
          </List>
        </ContainerList>
        <Box
          width={"100%"}
          display={"flex"}
          gap={"2rem"}
          justifyContent={"center"}
        >
          <ButtonGroup>
            {listPage ? (
              listPage.map((item, index) => {
                return index == 0 ? null : index == currentPage ? (
                  <Button
                    key={`${item}__${index}`}
                    width={"fit-content"}
                    height={"fit-content"}
                    marginLeft={"0.5rem"}
                    onClick={() => setPageByNumber(index)}
                    variant="link"
                    borderBottom={"1px solid var(--grey1)"}
                    backgroundColor={"transparent"}
                    cursor={"pointer"}
                    transition={"0.5s"}
                  >
                    {index}
                  </Button>
                ) : (
                  <Button
                    key={`${item}__${index}`}
                    width={"fit-content"}
                    height={"fit-content"}
                    marginLeft={"0.5rem"}
                    onClick={() => setPageByNumber(index)}
                    variant="link"
                    backgroundColor={"transparent"}
                    cursor={"pointer"}
                    transition={"0.5s"}
                    _hover={{
                      borderBottom: "1px solid var(--grey1)",
                      transition: "0.5s",
                    }}
                  >
                    {index}
                  </Button>
                );
              })
            ) : (
              <Button
                key={`1__0`}
                width={"fit-content"}
                padding={"0.5rem 1rem"}
                marginLeft={"0.5rem"}
                variant="link"
                backgroundColor={"var(--grey7)"}
                cursor={"pointer"}
                transition={"0.5s"}
                _hover={{
                  backgroundColor: "var(--grey8)",
                  transition: "0.5s",
                }}
              >
                1
              </Button>
            )}
          </ButtonGroup>
          <ButtonGroup>
            {previousPage > 0 ? (
              <Button
                fontWeight={"bold"}
                backgroundColor={"transparent"}
                variant="link"
                color={`var(--brand1)`}
                onClick={prevPage}
                cursor={"pointer"}
                border={"1px solid transparent"}
                transition={"0.5s"}
                _hover={{
                  color: "var(--brand2)",
                  borderBottom: "1px solid var(--brand2)",
                  transition: "0.5s",
                }}
              >
                Anterior
              </Button>
            ) : null}
            {currentPage < listPage!.length - 1 ? (
              <Button
                fontWeight={"bold"}
                backgroundColor={"transparent"}
                variant="link"
                color={`var(--brand1)`}
                onClick={nextPage}
                cursor={"pointer"}
                border={"1px solid transparent"}
                transition={"0.5s"}
                _hover={{
                  color: "var(--brand2)",
                  borderBottom: "1px solid var(--brand2)",
                  transition: "0.5s",
                }}
              >
                Seguinte
              </Button>
            ) : null}
          </ButtonGroup>
        </Box>
      </StyledSection>
    </StyledHome>
  );
}
export default Home;
