import { Box, List, Tag, Text } from "@chakra-ui/react"
import Header from "../../components/header"
import { UserHeader } from "../../components/userHeader"
import { StyledPageProfile } from "./style"
import { CardAdvert } from "../../components/cardAdvert"
import { useProduct } from "../../hooks/useProduct"
import { Footer } from "../../components/footer"
import { StyledContainer } from "../../styles/Container"
import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"

const ProfileUser = () => {
  const { productsList } = useProduct()
  const { announceList, getAnnounce } = useUser()

  useEffect(() => {
    getAnnounce()
  }, [])

  return (
    <StyledPageProfile>
      <Header>
        <UserHeader />
      </Header>

      <Box as="main" background={"var(--grey8)"}>
        <Box
          className="blueDiv"
          background={"var(--brand1)"}
          position={"relative"}
          height={"330px"}
          marginBottom={"220px"}
        >
          <Box
            className="userContainer"
            display={"flex"}
            flexDirection={"column"}
            backgroundColor={"var(--grey10)"}
            height={"400px"}
            position={"absolute"}
            top={"30%"}
            left={"4%"}
            right={"4%"}
            padding={"40px 20px"}
          >
            <Box
              className="userCard"
              display={"flex"}
              gap={"1rem"}
              justifyItems={"center"}
              alignItems={"flex-start"}
              flexDirection={"column"}
            >
              <Box
                className="iconUser"
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
                  {announceList?.name[0].toUpperCase()}
                </Text>
              </Box>
              <Box className="nameTag" display={"flex"} gap={"15px"}>
                <Text as="b" fontSize="xl" color={`var(--grey2)`}>
                  {announceList?.name}
                </Text>
                <Tag variant="solid" colorScheme="blue">
                  Anunciante
                </Tag>
              </Box>
            </Box>
            <Text className="descriptionUser" marginTop={"15px"}>
              {announceList?.description}
            </Text>
          </Box>
        </Box>

        <StyledContainer>
          <Box as="section" padding={"0 15px"}>
            <Text
              as={"h1"}
              fontSize={"2xl"}
              fontWeight={"bold"}
              marginBottom={"80px"}
            >
              Anúncios
            </Text>
            {/* <List display={"flex"} overflowX={"auto"}>
              
            </List> */}
          </Box>
        </StyledContainer>
      </Box>
      <Footer />
    </StyledPageProfile>
  )
}
export default ProfileUser
