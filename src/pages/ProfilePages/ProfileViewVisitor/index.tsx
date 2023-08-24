import { Box, Tag, Text } from "@chakra-ui/react"
import Header from "../../../components/header"
import { StyledPageProfile } from "./style"
import { Footer } from "../../../components/footer"
import { StyledContainer } from "../../../styles/Container"
import { useEffect } from "react"
import { ListCards } from "../../../components/listCards"
import { useParams } from "react-router-dom"
import { useUser } from "../../../hooks/useProduct"

export const ProfileViewVisitor = () => {
  const { announceListUser, getAnnounceUser } = useUser()
  const { id } = useParams()

  useEffect(() => {
    getAnnounceUser(id!)
  }, [])



  return (
    <StyledPageProfile>
      <Header>
      </Header>

      <Box as="main" background={"var(--grey8)"}>
        <Box
          className="blueDiv"
          background={"var(--brand1)"}
          position={"relative"}
          height={"330px"}
          marginBottom={"170px"}
        >
          <Box
            className="userContainer"
            display={"flex"}
            gap={"15px"}
            flexDirection={"column"}
            backgroundColor={"var(--grey10)"}
            height={"400px"}
            position={"absolute"}
            top={"30%"}
            left={"4%"}
            right={"4%"}
            padding={"30px 20px"}
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
                  {announceListUser?.name[0].toUpperCase()}
                </Text>
              </Box>
              <Box className="nameTag" display={"flex"} gap={"15px"}>
                <Text as="b" fontSize="xl" color={`var(--grey2)`}>
                  {announceListUser?.name}
                </Text>
                <Tag variant="solid" colorScheme="blue">
                  Anunciante
                </Tag>
              </Box>
            </Box>
            <Text className="descriptionUser">{announceListUser?.description}</Text>
          </Box>
        </Box>

        <StyledContainer>
          <Box as="section" padding={"0 15px"}>
            <ListCards
              typeView={"visitor"}
              advertsList={announceListUser?.adverts}
            />
          </Box>
        </StyledContainer>
      </Box>
      <Footer />
    </StyledPageProfile>
  )
}
