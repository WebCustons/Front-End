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
import { AsideFilters } from "../../components/filtersComponent";

type PaginationButtonProps = {
  index: number;
  currentPage: number;
  onClick: (index: number) => void;
};

function PaginationButton({ index, currentPage, onClick }: PaginationButtonProps) {
  const isActive = index === currentPage;

  return (
    <Button
      key={`page-button-${index}`}
      width={"fit-content"}
      height={"fit-content"}
      marginLeft={"0.5rem"}
      onClick={() => onClick(index)}
      variant="link"
      backgroundColor={"transparent"}
      cursor={"pointer"}
      transition={"0.5s"}
      borderBottom={isActive ? "1px solid var(--grey1)" : "none"}
      _hover={{
        borderBottom: "1px solid var(--grey1)",
        transition: "0.5s",
      }}
    >
      {index}
    </Button>
  );
}

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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="outline"
          ></MenuButton>
          <MenuList bg={"var(--whiteFixed)"} padding={"5px"} zIndex={2}>
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
          <p>A melhor plataforma de anúncios de carros do país</p>
        </StyledBannerPageHome>

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
        <AsideFilters />
      </StyledHome>
      <Footer />
    </>
  );
}

export default Home;
