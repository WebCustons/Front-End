import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Tag, Text, useDisclosure, } from "@chakra-ui/react"
import { StyledPageProfile } from "./style"
import { StyledContainer } from "../../../styles/Container"
import { useEffect } from "react"
import { ListCards } from "../../../components/listCards"
import { FormCreateAdvert } from "../../../components/formCreateAdvert"
import { useParams } from "react-router-dom"
import { useUser } from './../../../hooks/useProduct';

export const ProfileViewOwner = () => {
  const { announceListUser, getAnnounceUser } = useUser()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { id } = useParams()

  useEffect(() => {
    getAnnounceUser(id!)
  }, [])


  return (
    <StyledPageProfile>

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
            flexDirection={"column"}
            backgroundColor={"var(--grey10)"}
            height={"400px"}
            position={"absolute"}
            top={"30%"}
            left={"4%"}
            right={"4%"}
            padding={"30px 20px"}
            justifyContent={"space-between"}
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
            <Button
              width={"fit-content"}
              backgroundColor={"transparent"}
              border={"1px solid var(--brand1)"}
              color={"var(--brand1)"}
              transition={"0.5s"}
              _hover={{
                bg: "var(--brand1)",
                color: "var(--grey8)",
                transition: "0.5s",
              }}
              borderRadius={"10px"}
              onClick={onOpen}
            >
              Criar Anuncio
            </Button>
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
            <ListCards typeView={"owner"} advertsList={announceListUser?.adverts} />
          </Box>
        </StyledContainer>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"520px"}>
          <ModalHeader>Criar Anuncio</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormCreateAdvert onClose={onClose}>
              <Button
                width={"40%"}
                mr={3}
                onClick={onClose}
                borderRadius={"10px"}
              >
                Cancelar
              </Button>
            </FormCreateAdvert >
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>


    </StyledPageProfile>
  )
}
