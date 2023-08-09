import {
  StyledHome,
  StyledBannerPageHome,
  StyledButtonsMenu,
  StyledButtonLogin,
  StyledButtonRegister,
  StyledButtonMenuItemRegister,
  ContainerList,
  StyledSection,
} from "./style";
import Banner from "../../assets/banner_bmw.png";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  List,
  Button,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useProduct } from "../../hooks/useProduct";
import { CardAdvert } from "../../components/cardAdvert";
import { FiltersComponent } from "../../components/advertsFilters";

function Home() {
  const [isMobile, setisMobile] = useState(false);
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
  useEffect(() => {
    const screen = window.matchMedia("(max-width: 599px)");
    setisMobile(screen.matches);

    const resize = () => {
      setisMobile(screen.matches);
    };

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <Header>
        {isMobile ? (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMenu />}
              variant="outline"
            ></MenuButton>

            <MenuList bg={"var(--whiteFixed)"}  
              zIndex={2} 
              height={'80px'} 
              display={"flex"}
              flexDirection={"column"}
              padding={'5px'}
              >
              <StyledButtonLogin>Fazer Login</StyledButtonLogin>
              <br />
              <StyledButtonMenuItemRegister>
                Cadastrar
              </StyledButtonMenuItemRegister>
            </MenuList>
          </Menu>
        ) : (
          <StyledButtonsMenu>
            <StyledButtonLogin>Fazer Login</StyledButtonLogin>

            <StyledButtonRegister>Cadastrar</StyledButtonRegister>
          </StyledButtonsMenu>
        )}
      </Header>

      <StyledHome>
        <StyledBannerPageHome>
          <img src={Banner} />
          <h1>Web Custons</h1>
          <p>A melhor plataforma de anúncios de carros do pais</p>
        </StyledBannerPageHome><br/><br/>

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
        <aside><FiltersComponent/></aside>
      </StyledHome>
      <Footer />
    </>
  );
}
export default Home;
