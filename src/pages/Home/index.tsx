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
  useDisclosure,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { useProduct } from "../../hooks/useProduct";
import { CardAdvert } from "../../components/cardAdvert";
import { AsideFilters } from "../../components/aside";
import { StyledContainer } from "../../styles/Container";
import { useMediaQuery } from "@chakra-ui/react";

function Home() {
  const { productsList, previusPage, nextPage,paginationByNumber } = useProduct();
  
  const {onOpen} = useDisclosure();

  const pages: number[] = [];
  if (productsList) {
    for (let i = 0; i < productsList?.totalPages; i++) {
      pages.push(i + 1);
    }
  }
  const [isWideScreen] = useMediaQuery("(min-width: 600px)");


  return (<>
   <Header>
    {isWideScreen ? (
      <StyledButtonsMenu>
        <StyledButtonLogin>Fazer Login</StyledButtonLogin>
        <StyledButtonRegister>Cadastrar</StyledButtonRegister>
      </StyledButtonsMenu>
    ) : (
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<AiOutlineMenu />}
          variant="outline"
        ></MenuButton>
        <MenuList
          bg={"var(--whiteFixed)"}
          zIndex={2}
          height={"80px"}
          display={"flex"}
          flexDirection={"column"}
          padding={"5px"}
        >
          <StyledButtonLogin>Fazer Login</StyledButtonLogin>
          <br />
          <StyledButtonMenuItemRegister>
            Cadastrar
          </StyledButtonMenuItemRegister>
        </MenuList>
      </Menu>
    )}
  </Header>
  
      <StyledHome>
        <StyledBannerPageHome>
          <img src={Banner} alt="Banner" />
          <h1>Web Custons</h1>

        <p>A melhor plataforma de anúncios de carros do pais</p>

      </StyledBannerPageHome><br /><br />

      <StyledContainer>
          <AsideFilters />
          <StyledSection>
            <ContainerList>
              <List>
                {productsList?.data.map((advert) => (
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
                {pages?.map((page) => (
                  <Button
                    key={`page_${page}`}
                    padding={"0 0.5rem"}
                    fontWeight={"bold"}
                    backgroundColor={"transparent"}
                    variant="link"
                    color={`var(--grey3)`}
                    transition={"0.5s"}
                    _hover={{
                      backgroundColor: "var(--grey8)",
                      color: "var(--grey1)",
                      borderBottom: "1px solid var(--grey1)",
                      transition: "0.5s",
                    }}
                    onClick={() => paginationByNumber(page)}
                  >
                    {page}
                  </Button>
                ))}
              </ButtonGroup>
              <ButtonGroup>
                {productsList?.prevPage && (
                  <Button
                    fontWeight={"bold"}
                    backgroundColor={"transparent"}
                    variant="link"
                    color={`var(--brand1)`}
                    onClick={previusPage}
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
                {productsList?.nextPage && (
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
        </StyledContainer>
      </StyledHome>
      <Footer />

  </>
  );
}

export default Home;
