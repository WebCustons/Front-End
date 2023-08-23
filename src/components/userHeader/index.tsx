import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useUser } from "./../../hooks/useProduct";
import { FormEditUser } from "./../formEditUser/index";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledUserHeader } from "./style";

export const UserHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, getUser } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  return (
    <StyledUserHeader>
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="messenger"
          variant="ghost"
          height={"100%"}
          width={"224px"}
          paddingRight={"30px"}
          borderRadius={"0"}
          borderLeft={"solid 2px var(--grey6)"}
          display={"flex"}
          color={"Black"}
          _hover={{
            bg: "var(--brand1)",
            color: " var(--brand4)",
          }}
        >
          <Box
            className="icon"
            backgroundColor={`var(--random2)`}
            borderRadius={"20px"}
            display={"flex"}
            width={"30px"}
            height={"30px"}
            alignItems={"center"}
            justifyContent={"center"}
            fontWeight={"bold"}
            marginRight={"5px"}
          >
            <Text fontSize="mg" color={`var(--grey10)`}>
              {user?.name[0].toUpperCase()}
            </Text>
          </Box>
          {user?.name.split(" ")[0]}
        </MenuButton>
        <MenuList
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <MenuItem onClick={onOpen}>Editar Usuario</MenuItem>
          <MenuItem onClick={() => navigate(`/profile/${user?.id}`)}>
            Meus Anuncios
          </MenuItem>
          <MenuItem>Sair</MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"520px"}>
          <ModalHeader>Editar Usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormEditUser onClose={onClose}>
              <Button
                width={"40%"}
                mr={3}
                onClick={onClose}
                borderRadius={"10px"}
              >
                Cancelar
              </Button>
              <Button
                width="40%"
                mr={3}
                backgroundColor="var(--alert1)"
                onClick={onClose}
                color="var(--grey8)"
                borderRadius="10px"
                border="1px solid var(--alert1)"
                transition="0.5s"
                _hover={{
                  bg: "transparent",
                  color: "var(--alert1)",
                  transition: "0.5s",
                }}
              >
                Excluir Usuário
              </Button>
            </FormEditUser>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </StyledUserHeader>
  );
};
