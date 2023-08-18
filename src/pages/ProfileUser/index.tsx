import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Header from "../../components/header";
import { UserHeader } from "../../components/userHeader";
import { StyledPageProfile } from "./style";
import { Footer } from "../../components/footer";
import { StyledContainer } from "../../styles/Container";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";
import { ListCards } from "../../components/listCards";
import { FormCreateAdvert } from "../../components/formCreateAdvert";

const ProfileUser = () => {
  const { announceList, getAnnounce } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [createAdvertModal, setCreatAdvertModal] = useState(false);
  const [editProfileModal, setEditProfileModal] = useState(false);
  useEffect(() => {
    getAnnounce();
  }, []);

  const toggleModal = (
    modal: boolean,
    setModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (modal) {
      onClose();
      setModal(false);
      return;
    }
    setModal(true);
    onOpen();
  };

  return (
    <StyledPageProfile>
      <Header>
        <UserHeader
          editProfileModal={editProfileModal}
          setEditProfileModal={setEditProfileModal}
          toggleModal={toggleModal}
        />
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
            <Text className="descriptionUser">{announceList?.description}</Text>
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
              onClick={() =>
                toggleModal(createAdvertModal, setCreatAdvertModal)
              }
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
            <ListCards advertsList={announceList?.adverts} />
          </Box>
        </StyledContainer>
      </Box>
      <Footer />
      {createAdvertModal ? (
        <Modal
          isOpen={isOpen}
          onClose={() => toggleModal(createAdvertModal, setCreatAdvertModal)}
        >
          <ModalOverlay />
          <ModalContent maxW={"520px"}>
            <ModalHeader>Criar Anuncio</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormCreateAdvert>
                <Button
                  width={"40%"}
                  mr={3}
                  onClick={() =>
                    toggleModal(createAdvertModal, setCreatAdvertModal)
                  }
                  borderRadius={"10px"}
                >
                  Cancelar
                </Button>
              </FormCreateAdvert>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}
      {editProfileModal ? (
        <Modal
          isOpen={isOpen}
          onClose={() => toggleModal(editProfileModal, setEditProfileModal)}
        >
          <ModalOverlay />
          <ModalContent>
            <>
              <ModalHeader>Editar Usuário</ModalHeader>
              <ModalCloseButton />
              <ModalBody></ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  onClick={() =>
                    toggleModal(editProfileModal, setEditProfileModal)
                  }
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          </ModalContent>
        </Modal>
      ) : null}
    </StyledPageProfile>
  );
};
export default ProfileUser;
