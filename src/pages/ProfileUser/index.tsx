import { Box, List, Tag, Text } from "@chakra-ui/react"
import Header from "../../components/header"
import { UserHeader } from "../../components/userHeader"
import { StyledBlueDiv, StyledProfile, StyledUserContainer } from "./style"
import { CardAdvert } from "../../components/cardAdvert"
import { useProduct } from "../../hooks/useProduct"
import { Footer } from "../../components/footer"

function ProfileUser() {
  const { productsList } = useProduct()
  return (
    <>
      <Header>
        <UserHeader />
      </Header>

      <StyledProfile>
        <StyledBlueDiv>
          <StyledUserContainer>
            <Box
              display={"flex"}
              gap={"1rem"}
              justifyItems={"center"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Box
                backgroundColor={`var(--random2)`}
                borderRadius={"50px"}
                display={"flex"}
                width={"100px"}
                height={"100px"}
                alignItems={"center"}
                justifyContent={"center"}
                fontWeight={"bold"}
              >
                <Text fontSize="3xl" color={`var(--grey10)`}>
                  {/* {advert.user.name[0].toUpperCase()} */}
                  CV
                </Text>
              </Box>
              <div className="divNameTag">
                <Text as="b" fontSize="xl" color={`var(--grey2)`}>
                  {/* {advert.user.name} */}
                  Christian Vada
                </Text>
                <Tag variant="solid" colorScheme="blue">
                  Anunciante
                </Tag>
              </div>
            </Box>
            <Text className="descriptionUser">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s. Lorem Ipsum is simply dummy text of the
              printing and Lorem
            </Text>
          </StyledUserContainer>
        </StyledBlueDiv>

        <section>
          <h1>Anúncios</h1>
          <List>
            {productsList?.data.map((advert) => (
              <CardAdvert advert={advert} key={advert.id} />
            ))}
          </List>
        </section>
      </StyledProfile>
      <Footer />
    </>
  )
}
export default ProfileUser
