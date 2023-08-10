import { useEffect } from "react";
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
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useProduct } from "../../hooks/useProduct";
import { CardAdvert } from "../../components/cardAdvert";
import { FiltersComponent } from "../../components/advertsFilters";

function Home() {
  const {
    currentPage,
    listItems,
    listPage,
    nextPage,
    prevPage,
    setPageByNumber,
    setPages,
    previousPage,
  } = useProduct();

  useEffect(() => {
    setPages();
  }, []);

  const renderPaginationButtons = () => {
    if (!listPage) return null;

    return listPage.map((_, index) => (
      <PaginationButton
        key={`page-button-${index}`}
        index={index}
        currentPage={currentPage}
        onClick={setPageByNumber}
      />
    ));
  };


  return (
    <>
      <Header>
<<<<<<< HEAD
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
=======
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="outline"
          ></MenuButton>
          <MenuList bg={"var(--whiteFixed)"} padding={"5px"} zIndex={2}>
>>>>>>> a2d892e638bd6ec65de427439a353ed998e036ed
            <StyledButtonLogin>Fazer Login</StyledButtonLogin>
            <br />
            <StyledButtonMenuItemRegister>
              Cadastrar
            </StyledButtonMenuItemRegister>
          </MenuList>
        </Menu>
        <StyledButtonsMenu>
          <StyledButtonLogin>Fazer Login</StyledButtonLogin>
          <StyledButtonRegister>Cadastrar</StyledButtonRegister>
        </StyledButtonsMenu>
      </Header>
      <StyledHome>
        <StyledBannerPageHome>
          <img src={Banner} alt="Banner" />
          <h1>Web Custons</h1>
<<<<<<< HEAD
          <p>A melhor plataforma de anúncios de carros do pais</p>
        </StyledBannerPageHome><br/><br/>
=======
          <p>A melhor plataforma de anúncios de carros do país</p>
        </StyledBannerPageHome>
>>>>>>> a2d892e638bd6ec65de427439a353ed998e036ed

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
            <ButtonGroup>{renderPaginationButtons()}</ButtonGroup>
            <ButtonGroup>
              {previousPage > 0 && (
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
              )}
              {listPage && currentPage < listPage.length - 1 && (
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
              )}
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
